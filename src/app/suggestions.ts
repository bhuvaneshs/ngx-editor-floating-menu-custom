import {
  addMentionNodes,
  suggestionsPlugin,
  triggerCharacter
} from "@quartzy/prosemirror-suggestions";

var suggestionPlugin = suggestionsPlugin({
  debug: true,
  matcher: triggerCharacter("{", { allowSpaces: true }),
  onEnter(args) {
    console.log("start", args);
    return false;
  },
  onChange(args) {
    console.log("change", args);
    return false;
  },
  onExit(args) {
    console.log("stop", args);
    return false;
  },
  onKeyDown({ view, event }) {
   console.log(event.key);
    return false;
  },
});
const getPlugins = (): Plugin[] => {
  const plugins = [suggestionPlugin];
  return plugins;
};

export default getPlugins();