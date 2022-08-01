import type { NodeType, Node as ProseMirrorNode } from 'prosemirror-model';
import type { EditorState, Transaction, Command } from 'prosemirror-state';
import { setBlockType } from 'prosemirror-commands';

import { getSelectionNodes } from 'ngx-editor/helpers';

import { ToggleCommand } from './types';

export type HeadingLevels = 'sans-serif' | 'verdana' | 'helvetica' ;

class Heading implements ToggleCommand {
  level: string;

  constructor(level: HeadingLevels) {
    this.level = level;
  }

  apply(): Command {
    return (state: EditorState, dispatch?: (tr: Transaction) => void): boolean => {
      const { schema } = state;

      const type: NodeType = schema.nodes['heading'];
      if (!type) {
        return false;
      }

      return setBlockType(type)(state, dispatch);
    };
  }

  toggle(): Command {
    return (state: EditorState, dispatch?: (tr: Transaction) => void): boolean => {
      const { schema, selection, doc } = state;

      const type: NodeType = schema.nodes['heading'];
      if (!type) {
        return false;
      }

      const nodePos = selection.$from.before(1);
      const node = doc.nodeAt(nodePos);

      const attrs = node?.attrs ?? {};

      if (this.isActive(state)) {
        return setBlockType(schema.nodes['paragraph'], attrs)(state, dispatch);
      }

      return setBlockType(type, { ...attrs, level: this.level })(state, dispatch);
    };
  }

  isActive(state: EditorState): boolean {
    const { schema } = state;
    const nodesInSelection = getSelectionNodes(state);

    const type: NodeType = schema.nodes['heading'];
    if (!type) {
      return false;
    }

    const supportedNodes = [
      type,
      schema.nodes['text'],
      schema.nodes['blockquote'],
    ];

    // heading is a text node
    // don't mark as active when it has more nodes
    const nodes = nodesInSelection.filter((node) => {
      return supportedNodes.every((type) => node.type == type);
    });

    const acitveNode = nodes.find((node: ProseMirrorNode) => {
      return node.attrs['level'] === this.level;
    });

    return Boolean(acitveNode);
  }

  canExecute(state: EditorState): boolean {
    return this.toggle()(state);
  }
}

export default Heading;