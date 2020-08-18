/*! markdown-it-html5-embed https://github.com/cmrd-senya/markdown-it-html5-embed @license MPLv2 */
// This is a plugin for markdown-it which adds support for embedding audio/video in the HTML5 way.

'use strict';

var Mimoza = require('mimoza');

// Default UI messages. You can customize and add simple translations via
// options.messages. The language has to be provided via the markdown-it
// environment, e.g.:
//
// md.render('some text', { language: 'some code' })
//
// It will default to English if not provided. To use your own i18n framework,
// you have to provide a translation function via options.translateFn.
//
// The "untitled video" / "untitled audio" messages are only relevant to usage
// inside alternative render functions, where you can access the title between [] as
// {{title}}, and this text is used if no title is provided.
var messages = {
  en: {
    'video not supported': 'Your browser does not support playing HTML5 video. ' +
      'You can <a href="%s" download>download a copy of the video file</a> instead.',
    'audio not supported': 'Your browser does not support playing HTML5 audio. ' +
      'You can <a href="%s" download>download a copy of the audio file</a> instead.',
    'content description': 'Here is a description of the content: %s',
    'untitled video': 'Untitled video',
    'untitled audio': 'Untitled audio'
  }
};

function clearTokens(tokens, idx) {
  for (var i = idx; i < tokens.length; i++) {
    switch (tokens[i].type) {
      case 'link_close':
        tokens[i].hidden = true;
        break;
      case 'text':
        tokens[i].content = '';
        break;
      default:
        throw "Unexpected token: " + tokens[i].type;
    }
  }
}

function parseToken(tokens, idx, env) {
  var parsed = {};
  var token = tokens[idx];
  var description = '';

  var aIndex = token.attrIndex('src');
  parsed.isLink = aIndex < 0;
  if (parsed.isLink) {
    aIndex = token.attrIndex('href');
    description = tokens[idx + 1].content;
  } else {
    description = token.content;
  }

  parsed.url = token.attrs[aIndex][1];
  parsed.mimeType = Mimoza.getMimeType(parsed.url);
  var RE = /^(audio|video)\/.*/gi;
  var mimetype_matches = RE.exec(parsed.mimeType);
  if (mimetype_matches === null) {
    parsed.mediaType = null;
  } else {
    parsed.mediaType = mimetype_matches[1];
  }

  if (parsed.mediaType !== null) {
    // For use as titles in alternative render functions, we store the description
    // in parsed.title. For use as fallback text, we store it in parsed.fallback
    // alongside the standard fallback text.
    parsed.fallback = translate({
      messageKey: parsed.mediaType + ' not supported',
      messageParam: parsed.url,
      language: env.language
    });
    if (description.trim().length) {
      parsed.fallback += '\n' + translate({
        messageKey: 'content description',
        messageParam: description,
        language: env.language
      });
      parsed.title = description;
    } else {
      parsed.title = translate({
        messageKey: 'untitled ' + parsed.mediaType,
        language: env.language
      });
    }
  }
  return parsed;
}

function isAllowedMimeType(parsed, options) {
  return parsed.mediaType !== null &&
    (!options.isAllowedMimeType || options.isAllowedMimeType([parsed.mimeType, parsed.mediaType]));
}

function isAllowedSchema(parsed, options) {
  if (!options.isAllowedHttp && parsed.url.match('^http://')) {
    return false;
  }
  return true;
}

function isAllowedToEmbed(parsed, options) {
  return isAllowedMimeType(parsed, options) && isAllowedSchema(parsed, options);
}

function renderMediaEmbed(parsed, mediaAttributes) {
  var attributes = mediaAttributes[parsed.mediaType];

  return ['<' + parsed.mediaType + ' ' + attributes + '>',
    '<source type="' + parsed.mimeType + '" src="' + parsed.url + '"></source>',
    parsed.fallback,
    '</' + parsed.mediaType + '>'
  ].join('\n');
}

function html5EmbedRenderer(tokens, idx, options, env, renderer, defaultRender) {
  var parsed = parseToken(tokens, idx, env);

  if (!isAllowedToEmbed(parsed, options.html5embed)) {
    return defaultRender(tokens, idx, options, env, renderer);
  }

  if (parsed.isLink) {
    clearTokens(tokens, idx + 1);
  }

  return renderMediaEmbed(parsed, options.html5embed.attributes);
}

function forEachLinkOpen(state, action) {
  state.tokens.forEach(function(token, _idx, _tokens) {
    if (token.type === "inline") {
      token.children.forEach(function(token, idx, tokens) {
        if (token.type === "link_open") {
          action(tokens, idx);
        }
      });
    }
  });
}

function findDirective(state, startLine, _endLine, silent, regexp, build_token) {
  var pos = state.bMarks[startLine] + state.tShift[startLine];
  var max = state.eMarks[startLine];

  // Detect directive markdown
  var currentLine = state.src.substring(pos, max);
  var match = regexp.exec(currentLine);
  if (match === null || match.length < 1) {
    return false;
  }

  if (silent) {
    return true;
  }

  state.line = startLine + 1;

  // Build content
  var token = build_token();
  token.map = [startLine, state.line];
  token.markup = currentLine;

  return true;
}

/**
 * Very basic translation function. To translate or customize the UI messages,
 * set options.messages. To also customize the translation function itself, set
 * option.translateFn to a function that handles the same message object format.
 *
 * @param {Object} messageObj
 *  the message object
 * @param {String} messageObj.messageKey
 *  an identifier used for looking up the message in i18n files
 * @param {String} messageObj.messageParam
 *  for substitution of %s for filename and description in the respective
 *  messages
 * @param {String} [messageObj.language='en']
 *  a language code, ignored in the default implementation
 * @this {Object}
 *  the built-in default messages, or options.messages if set
 */
function translate(messageObj) {
  // Default to English if we don't have this message, or don't support this
  // language at all
  var language = messageObj.language && this[messageObj.language] &&
    this[messageObj.language][messageObj.messageKey] ?
    messageObj.language :
    'en';
  var rv = this[language][messageObj.messageKey];

  if (messageObj.messageParam) {
    rv = rv.replace('%s', messageObj.messageParam);
  }
  return rv;
}

module.exports = function html5_embed_plugin(md, options) {
  var gstate;
  var defaults = {
    attributes: {
      audio: 'controls preload="metadata"',
      video: 'controls preload="metadata"'
    },
    useImageSyntax: true,
    inline: true,
    autoAppend: false,
    embedPlaceDirectiveRegexp: /^\[\[html5media\]\]/im,
    messages: messages
  };
  var options = md.utils.assign({}, defaults, options.html5embed);

  if (!options.inline) {
    md.block.ruler.before("paragraph", "html5embed", function(state, startLine, endLine, silent) {
      return findDirective(state, startLine, endLine, silent, options.embedPlaceDirectiveRegexp, function() {
        return state.push("html5media", "html5media", 0);
      });
    });

    md.renderer.rules.html5media = function(tokens, index, _, env) {
      var result = "";
      forEachLinkOpen(gstate, function(tokens, idx) {
        var parsed = parseToken(tokens, idx, env);

        if (!isAllowedToEmbed(parsed, options)) {
          return;
        }

        result += renderMediaEmbed(parsed, options.attributes);
      });
      if (result.length) {
        result += "\n";
      }
      return result;
    };

    // Catch all the tokens for iteration later
    md.core.ruler.push("grab_state", function(state) {
      gstate = state;

      if (options.autoAppend) {
        var token = new state.Token("html5media", "", 0);
        state.tokens.push(token);
      }
    });
  }

  if (typeof options.isAllowedMimeType === "undefined") {
    options.isAllowedMimeType = options.is_allowed_mime_type;
  }

  if (options.inline && options.useImageSyntax) {
    var defaultRender = md.renderer.rules.image;
    md.renderer.rules.image = function(tokens, idx, opt, env, self) {
      opt.html5embed = options;
      return html5EmbedRenderer(tokens, idx, opt, env, self, defaultRender);
    }
  }

  if (options.inline && options.useLinkSyntax) {
    var defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
    md.renderer.rules.link_open = function(tokens, idx, opt, env, self) {
      opt.html5embed = options;
      return html5EmbedRenderer(tokens, idx, opt, env, self, defaultRender);
    };
  }

  // options.messages will be set to built-in messages at the beginning of this
  // file if not configured
  translate = typeof options.translateFn == 'function' ?
    options.translateFn.bind(options.messages) :
    translate.bind(options.messages);

  if (typeof options.renderFn == 'function') {
    renderMediaEmbed = options.renderFn;
  }
};
