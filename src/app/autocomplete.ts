// import {autocomplete ,Options}  from 'prosemirror-autocomplete';
// import { EditorView } from 'prosemirror-view';
// import { EditorState } from 'prosemirror-state';
// import { DOMParser } from 'prosemirror-model';

// import schema from './schema';
// // Create autocomplete with triggers and specified handers:
// const options: Options = {
//   triggers: [
//     { name: 'hashtag', trigger: '#' },
//     { name: 'mention', trigger: '@' },
//   ],
//   reducer:(action) => "KEEP_OPEN"
//   //onOpen: ({ view, range, trigger, type }) => {},
//   // onArrow: ({ view, kind }) => handleArrow(kind),
//   // onFilter: ({ view, filter }) => handleFilter(),
//   // onEnter: ({ view }) => handleSelect(),
//   // onClose: ({ view }) => handleClose(),
// };

// // Then add these plugins to the EditorView as normal in ProseMirror
// const view = new EditorView({
//   state: EditorState.create({
//     //doc: DOMParser.fromSchema(schema).parse(content),
//     plugins: [...autocomplete(options)],
//   }),
// });
// const getPlugins = (): Plugin[] => {
//   const plugins = [view];
//   return plugins;
// };


// export default getPlugins();
