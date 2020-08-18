'use strict';

var path = require('path');
var generate = require('markdown-it-testgen');

function clearBindings() {
  // Don't re-use cached function with old bindings
  delete require.cache[require.resolve('../lib')];
}

// For testing custom messages and translations
var customMessages = {
  en: {
    'video not supported': 'You cannot play this but you can download it: %s',
    'audio not supported': 'You cannot play this either but you can download it: %s',
    'content description': 'It may contain this: %s'
  },
  de: {
    'video not supported': 'Du kannst dies nicht abspielen aber herunterladen: %s',
    'audio not supported': 'Du kannst dies auch nicht abspielen aber herunterladen: %s',
    'content description': 'Dies könnte enthalten sein: %s'
  }
};

describe('markdown-it-html5-embed with image syntax', function() {
  var option = {
    html5embed: {
      useImageSyntax: true,
      attributes: {
        'audio': 'width="320" controls class="audioplayer"',
        'video': 'width="320" height="240" class="audioplayer" controls'
      }
    }
  };

  var md = require('markdown-it')().use(require('../lib'), option);
  generate(path.join(__dirname, 'fixtures/image-syntax.txt'), md);
});

describe('markdown-it-html5-embed with link syntax', function() {
  var option = {
    html5embed: {
      useLinkSyntax: true
    }
  };

  var md = require('markdown-it')().use(require('../lib'), option);
  generate(path.join(__dirname, 'fixtures/link-syntax.txt'), md);
});

describe('markdown-it-html5-embed mime type filtering', function() {
  var option = {
    html5embed: {
      useLinkSyntax: true,
      isAllowedMimeType: function(mimetype) {
        return (mimetype[0] == 'audio/mpeg') || (mimetype[0] == 'video/ogg');
      }
    }
  };

  var md = require('markdown-it')().use(require('../lib'), option);
  generate(path.join(__dirname, 'fixtures/mime-filter.txt'), md);
});

describe('markdown-it-html5-embed with handlebars', function() {
  clearBindings();

  var Handlebars = require("handlebars");
  global.HandlebarsTemplates = { "template": Handlebars.compile("<h1>{{title}}</h1><div class=\"body\"><{{media_type}} {{attributes}}><source type=\"{{mimetype}}\" src=\"{{source_url}}\"/></{{media_type}}></div>") };

  function handleBarsRenderFn(parsed, mediaAttributes) {
    var attributes = mediaAttributes[parsed.mediaType];
      return HandlebarsTemplates[this]({
      media_type: parsed.mediaType,
      attributes: attributes,
      mimetype: parsed.mimeType,
      source_url: parsed.url,
      title: parsed.title,
      fallback: parsed.fallback,
      needs_cover: parsed.mediaType === "video"
    });
  }

  var option = {
    html5embed: {
      useLinkSyntax: true,
      renderFn: handleBarsRenderFn.bind("template"),
      attributes: {
        "video": "",
        "audio": ""
      }
    }
  };

  var md = require('markdown-it')().use(require('../lib'), option);

  generate(path.join(__dirname, 'fixtures/with-handlebars.txt'), md);

  clearBindings();
});

describe("embedding with [[html5embed]] clause", function() {
  var options = {
    html5embed: {
      inline: false
    }
  };

  var md = require('markdown-it')().use(require('../lib'), options);

  generate(path.join(__dirname, 'fixtures/with-placeholder-syntax.txt'), md);
});

describe("embedding with auto-append", function() {
  var options = {
    html5embed: {
      inline: false,
      autoAppend: true
    }
  };

  var md = require('markdown-it')().use(require('../lib'), options);

  generate(path.join(__dirname, 'fixtures/with-auto-append.txt'), md);
});

describe('markdown-it-html5-embed with image syntax + custom messages', function() {
  var option = {
    html5embed: {
      useImageSyntax: true,
      attributes: {
        'audio': 'width="320" controls class="audioplayer"',
        'video': 'width="320" height="240" class="audioplayer" controls'
      },
      messages: customMessages
    }
  };

  clearBindings();

  var md = require('markdown-it')().use(require('../lib'), option);
  generate(path.join(__dirname, 'fixtures/image-syntax-custom-messages.txt'), md);
});

describe('markdown-it-html5-embed with image syntax + custom translation fn', function() {

  // Simply get the upper case version of the translation, if any
  var translateFn = function(messageObj) {
    return this[messageObj.language][messageObj.messageKey] ?
      this[messageObj.language][messageObj.messageKey]
      .toUpperCase()
      .replace('%S', messageObj.messageParam) :
      '';
  };

  var option = {
    html5embed: {
      useImageSyntax: true,
      attributes: {
        'audio': 'width="320" controls class="audioplayer"',
        'video': 'width="320" height="240" class="audioplayer" controls'
      },
      messages: customMessages,
      translateFn: translateFn
    }
  };

  clearBindings();

  var md = require('markdown-it')().use(require('../lib'), option);
  var env = { language: 'de' };

  // Pass along env to generated tests
  md.origRender = md.render;
  md.render = function(input) {
    return this.origRender(input, env);
  };

  generate(path.join(__dirname, 'fixtures/image-syntax-with-translation.txt'), md);
});

describe('markdown-it-html5-embed with link syntax http link when http disabled', function() {
  clearBindings();

  var options = {
    html5embed: {
      useLinkSyntax: true
    }
  };

  var md = require('markdown-it')().use(require('../lib'), options);
  generate(path.join(__dirname, 'fixtures/link-syntax-http-disabled.txt'), md);
});

describe('markdown-it-html5-embed with link syntax http link when http disabled', function() {
  var options = {
    html5embed: {
      useLinkSyntax: true,
      isAllowedHttp: true
    }
  };

  var md = require('markdown-it')().use(require('../lib'), options);
  generate(path.join(__dirname, 'fixtures/link-syntax-http-enabled.txt'), md);
});
