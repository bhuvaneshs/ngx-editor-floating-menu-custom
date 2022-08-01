import { Plugin } from 'prosemirror-state';
import { getMentionsPlugin } from 'prosemirror-mentions';
//import autocomplete from './autocomplete';

/**
 * IMPORTANT: outer div's "suggestion-item-list" class is mandatory. The plugin uses this class for querying.
 * IMPORTANT: inner div's "suggestion-item" class is mandatory too for the same reasons
 */
/**
 * IMPORTANT: outer div's "suggestion-item-list" class is mandatory. The plugin uses this class for querying.
 * IMPORTANT: inner div's "suggestion-item" class is mandatory too for the same reasons
 */
var getTagSuggestionsHTML = (items) =>
  '<div class="suggestion-item-list">' +
  items
    .map((i) => '<div class="suggestion-item">' + i.tag + '</div>')
    .join('') +
  '</div>';

const users = [
  {
    tag: '{S_AGENT_NAME}',
  },
  {
    tag: '{S_CUSTOMER_NAME}',
  },
  // "{S_BUSINESS_HOURS}",
  // "{S_CUSTOMER_NAME}",
  // "{S_CUSTOMER_EMAIL}",
  // "{S_CUSTOMER_QUERY}",
  // "{S_EXP_QUEUE_WAIT_TIME}",
  // "{S_EXPECTED_CHATINVITEBACK_TIME}",
  // "{S_HOLIDAY_DESC}",
  // "{S_LANGUAGE_DETECTED}",
  // "{S_LINE_BREAK}",
  // "{S_NEXT_BUSINESS_HOURS}",
  // "{S_PARAGRAPH_BREAK}",
  // "{S_QUEUE_NAME}",
  // "{S_QUEUE_POSITION}",
  // "{S_QUEUE_WAITING_TIME}",
  // "{S_REJECTED_AGENT_NAME}",
  // "{S_SESSION_TYPE}",
  // "{S_TICKET_ID}",
  // "{S_TRANSFERRED_FROM}"
];

var mentionPlugin = getMentionsPlugin({
  hashtagTrigger: '{',
  getSuggestions: (type, text, done) => {
    console.log('text : ', text);
    console.log('type : ', type);
    console.log('done :', done);
    setTimeout(() => {
      // pass dummy tag suggestions
      done([
        {
          tag: '{S_AGENT_NAME}',
        },
        {
          tag: '{S_CUSTOMER_NAME}',
        },
      ]);
    }, 0);
  },
  getSuggestionsHTML: (items, type) => {
    if (type === 'tag') {
      return getTagSuggestionsHTML(items);
    } else {
      return null;
    }
  },
});

const getPlugins = (): Plugin[] => {
  const plugins = [mentionPlugin];
  return plugins;
};

export default getPlugins();
