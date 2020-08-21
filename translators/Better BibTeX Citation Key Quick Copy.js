{
	"translatorID": "a515a220-6fef-45ea-9842-8025dfebcc8f",
	"label": "Better BibTeX Citation Key Quick Copy",
	"description": "exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents",
	"creator": "Emiliano heyns",
	"target": "txt",
	"minVersion": "4.0.27",
	"translatorType": 2,
	"browserSupport": "gcsv",
	"priority": 100,
	"displayOptions": {
		"quickCopyMode": ""
	},
	"inRepository": false,
	"configOptions": {
		"hash": "254055119399fa96a72b804d3ed30943ebd8699e3028423b60ea27f33891e61e"
	},
	"lastUpdated": "2020-08-18 16:10:21"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors"}
var {Translator, doExport} =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Better BibTeX Citation Key Quick Copy.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../content/client.ts":
/*!****************************!*\
  !*** ../content/client.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// we may be running in a translator, which will have it pre-loaded
if (typeof Components !== 'undefined')
    Components.utils.import('resource://zotero/config.js');
exports.client = ZOTERO_CONFIG.GUID.replace(/@.*/, '').replace('-', '');


/***/ }),

/***/ "../content/extra.ts":
/*!***************************!*\
  !*** ../content/extra.ts ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.get = exports.zoteroCreator = exports.cslCreator = void 0;
const mapping = __webpack_require__(/*! ../gen/items/extra-fields.json */ "../gen/items/extra-fields.json");
const CSL = __webpack_require__(/*! ../gen/citeproc */ "../gen/citeproc.js");
function cslCreator(value) {
    const creator = value.split(/\s*\|\|\s*/);
    if (creator.length === 2) { // tslint:disable-line:no-magic-numbers
        const _creator = { family: creator[0] || '', given: creator[1] || '' };
        CSL.parseParticles(_creator);
        return _creator;
    }
    else {
        // return { literal: value, isInstitution: 1 }
        return { literal: value };
    }
}
exports.cslCreator = cslCreator;
function zoteroCreator(value) {
    const creator = value.split(/\s*\|\|\s*/);
    if (creator.length === 2) { // tslint:disable-line:no-magic-numbers
        return { lastName: creator[0] || '', firstName: creator[1] || '' };
    }
    else {
        return { name: value };
    }
}
exports.zoteroCreator = zoteroCreator;
const re = {
    // fetch fields as per https://forums.zotero.org/discussion/3673/2/original-date-of-publication/. Spurious 'tex.' so I can do a single match
    old: /^{:((?:bib(?:la)?)?tex\.)?([^:]+)(:)\s*([^}]+)}$/,
    new: /^((?:bib(?:la)?)?tex\.)?([^:=]+)\s*([:=])\s*([\S\s]*)/,
};
const otherFields = ['lccn', 'mr', 'zbl', 'arxiv', 'jstor', 'hdl', 'googlebooksid'];
const casing = {
    arxiv: 'arXiv',
};
function get(extra, mode, options) {
    if (!options)
        options = { citationKey: true, aliases: true, kv: true, tex: true };
    const other = { zotero: 'csl', csl: 'zotero' }[mode];
    extra = extra || '';
    const extraFields = {
        kv: {},
        creator: {},
        tex: {},
        citationKey: '',
        aliases: [],
    };
    let ef;
    extra = extra.split('\n').filter(line => {
        const m = line.match(re.old) || line.match(re.new);
        if (!m)
            return true;
        let [, tex, key, assign, value] = m;
        const raw = (assign === '=');
        if (!tex && raw)
            return true;
        if (tex) {
            key = key.trim().toLowerCase();
        }
        else {
            key = key.trim().replace(/[-_]/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        }
        value = value.trim();
        if (options.citationKey && !tex && options.citationKey && ['citation key', 'bibtex'].includes(key)) {
            extraFields.citationKey = value;
            return false;
        }
        if (options.aliases && !tex && options.aliases && key === 'citation key alias') {
            extraFields.aliases = value.split(/s*,\s*/).filter(alias => alias);
            return false;
        }
        if (options.aliases && tex && !raw && options.aliases && key === 'ids') {
            extraFields.aliases = value.split(/s*,\s*/).filter(alias => alias);
            return false;
        }
        if (options.kv && (ef = mapping[key]) && !tex) {
            for (const field of (ef[mode] || ef[other])) {
                switch (ef.type) {
                    case 'name':
                        extraFields.creator[field] = extraFields.creator[key] || [];
                        extraFields.creator[field].push(value);
                        break;
                    case 'text':
                    case 'date':
                        extraFields.kv[field] = value;
                        break;
                    default:
                        throw new Error(`Unexpected extra field type ${ef.type}`);
                }
            }
            return false;
        }
        if (options.tex && tex && !key.includes(' ')) {
            extraFields.tex[key] = { value, raw };
            if (tex === 'bibtex' || tex === 'biblatex')
                extraFields.tex[key].type = tex;
            return false;
        }
        if (options.tex && !tex && otherFields.includes(key.replace(/[- ]/g, ''))) {
            extraFields.tex[key.replace(/[- ]/g, '')] = { value };
            return false;
        }
        return true;
    }).join('\n').trim();
    return { extra, extraFields };
}
exports.get = get;
function set(extra, options = {}) {
    const parsed = get(extra, 'zotero', options);
    if (options.citationKey)
        parsed.extra += `\nCitation Key: ${options.citationKey}`;
    if (options.aliases && options.aliases.length) {
        const aliases = Array.from(new Set(options.aliases)).sort().join(', ');
        parsed.extra += `\ntex.ids: ${aliases}`;
    }
    if (options.tex) {
        for (const name of Object.keys(options.tex).sort()) {
            const value = options.tex[name];
            const prefix = otherFields.includes(name) ? '' : 'tex.';
            parsed.extra += `\n${prefix}${casing[name] || name}${value.raw ? '=' : ':'} ${value.value}`;
        }
    }
    if (options.kv) {
        for (const name of Object.keys(options.kv).sort()) {
            const value = options.kv[name];
            if (Array.isArray(value)) { // creators
                parsed.extra += value.map(creator => `\n${name}: ${value}`).join(''); // do not sort!!
            }
            else {
                parsed.extra += `\n${name}: ${value}`;
            }
        }
    }
    return parsed.extra.trim();
}
exports.set = set;


/***/ }),

/***/ "../gen/citeproc.js":
/*!**************************!*\
  !*** ../gen/citeproc.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2009-2019 Frank Bennett

	This program is free software: you can redistribute it and/or
	modify it under EITHER

      * the terms of the Common Public Attribution License (CPAL) as
	    published by the Open Source Initiative, either version 1 of
	    the CPAL, or (at your option) any later version; OR

      * the terms of the GNU Affero General Public License (AGPL)
        as published by the Free Software Foundation, either version
        3 of the AGPL, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
	Affero General Public License for more details.

	You should have received copies of the Common Public Attribution
    License and of the GNU Affero General Public License along with
    this program.  If not, see <https://opensource.org/licenses/> or
    <http://www.gnu.org/licenses/> respectively.
*/
/*global CSL: true */

/**
 * A Javascript implementation of the CSL citation formatting language.
 *
 * <p>A configured instance of the process is built in two stages,
 * using {@link CSL.Core.Build} and {@link CSL.Core.Configure}.
 * The former sets up hash-accessible locale data and imports the CSL format file
 * to be applied to the citations,
 * transforming it into a one-dimensional token list, and
 * registering functions and parameters on each token as appropriate.
 * The latter sets jump-point information
 * on tokens that constitute potential branch
 * points, in a single back-to-front scan of the token list.
 * This
 * yields a token list that can be executed front-to-back by
 * body methods available on the
 * {@link CSL.Engine} class.</p>
 *
 * <p>This top-level {@link CSL} object itself carries
 * constants that are needed during processing.</p>
 * @namespace A CSL citation formatter.
 */

// IE6 does not implement Array.indexOf().
// IE7 neither, according to rumour.


// Potential skip words:
// under; along; out; between; among; outside; inside; amid; amidst; against; toward; towards.
// See https://forums.zotero.org/discussion/30484/?Focus=159613#Comment_159613




var CSL = {
    toLocaleUpperCase(str) {
        var arr = this.tmp.lang_array;
        try {
            str = str.toLocaleUpperCase(arr);
        } catch (e) {
            str = str.toUpperCase();
        }
        return str;
    },

    toLocaleLowerCase(str) {
        var arr = this.tmp.lang_array;
        try {
            str = str.toLocaleLowerCase(arr);
        } catch (e) {
            str = str.toLowerCase();
        }
        return str;
    },

    PARTICLE_GIVEN_REGEXP: /^([^ ]+(?:\u02bb |\u2019 | |\' ) *)(.+)$/,
    PARTICLE_FAMILY_REGEXP: /^([^ ]+(?:\-|\u02bb|\u2019| |\') *)(.+)$/,
    SKIP_WORDS: ["about","above","across","afore","after","against","al", "along","alongside","amid","amidst","among","amongst","anenst","apropos","apud","around","as","aside","astride","at","athwart","atop","barring","before","behind","below","beneath","beside","besides","between","beyond","but","by","circa","despite","down","during","et", "except","for","forenenst","from","given","in","inside","into","lest","like","modulo","near","next","notwithstanding","of","off","on","onto","out","over","per","plus","pro","qua","sans","since","than","through"," thru","throughout","thruout","till","to","toward","towards","under","underneath","until","unto","up","upon","versus","vs.","v.","vs","v","via","vis-à-vis","with","within","without","according to","ahead of","apart from","as for","as of","as per","as regards","aside from","back to","because of","close to","due to","except for","far from","inside of","instead of","near to","next to","on to","out from","out of","outside of","prior to","pursuant to","rather than","regardless of","such as","that of","up to","where as","or", "yet", "so", "for", "and", "nor", "a", "an", "the", "de", "d'", "von", "van", "c", "ca"]
};

CSL.Doppeler = function(rexStr, stringMangler) {
    var matchRex = new RegExp("(" + rexStr + ")", "g");
    var splitRex = new RegExp(rexStr, "g");
    this.split = function (str) {
        // Normalize markup
        if (stringMangler) {
            str = stringMangler(str);
        }
        var match = str.match(matchRex);
        if (!match) {
            return {
                tags: [],
                strings: [str]
            };
        }
        var split = str.split(splitRex);
        for (var i=match.length-1; i> -1; i--) {
            if (typeof match[i] === "number") {
                match[i] = "";
            }
            var tag = match[i];
            if (tag === "\'" && split[i+1].length > 0) {
                // Fixes https://forums.zotero.org/discussion/comment/294317
                split[i+1] = match[i] + split[i+1];
                match[i] = "";
            }
        }
        return {
            tags: match,
            strings: split,
            origStrings: split.slice()
        };
    };
    this.join = function (obj) {
        var lst = obj.strings.slice(-1);
        for (var i=obj.tags.length-1; i>-1; i--) {
            lst.push(obj.tags[i]);
            lst.push(obj.strings[i]);
        }
        lst.reverse();
        return lst.join("");
    };
};

/*global CSL: true */

CSL.Output = {};

/*global CSL: true */

CSL.Output.Formatters = (function () {
    var rexStr = "(?:\u2018|\u2019|\u201C|\u201D| \"| \'|\"|\'|[-\u2013\u2014\/.,;?!:]|\\[|\\]|\\(|\\)|<span style=\"font-variant: small-caps;\">|<span class=\"no(?:case|decor)\">|<\/span>|<\/?(?:i|sc|b|sub|sup)>)";
    var tagDoppel = new CSL.Doppeler(rexStr, function(str) {
        return str.replace(/(<span)\s+(class=\"no(?:case|decor)\")[^>]*(>)/g, "$1 $2$3").replace(/(<span)\s+(style=\"font-variant:)\s*(small-caps);?(\")[^>]*(>)/g, "$1 $2 $3;$4$5");
    });
    
    var wordDoppel = new CSL.Doppeler("(?:[\u0020\u00A0\u2000-\u200B\u205F\u3000]+)");
    
    /**
     * INTERNAL
     */

    var _tagParams = {
        "<span style=\"font-variant: small-caps;\">": "</span>",
        "<span class=\"nocase\">": "</span>",
        "<span class=\"nodecor\">": "</span>",
        "<sc>": "</sc>",
        "<sub>": "</sub>",
        "<sup>": "</sup>"
    };

    function _capitalise (word) {
        // Weird stuff is (.) transpiled with regexpu
        //   https://github.com/mathiasbynens/regexpu
        var m = word.match(/(^\s*)((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))(.*)/);
        // Do not uppercase lone Greek letters
        // (No case transforms in Greek citations, but chars used in titles to science papers)
        if (m && !(m[2].match(/^[\u0370-\u03FF]$/) && !m[3])) {
            return m[1] + CSL.toLocaleUpperCase.call(this, m[2]) + m[3];
        }
        return word;
    }

    function _textcaseEngine(config, string) {
        if (!string) {
            return "";
        }
        config.doppel = tagDoppel.split(string);
        var quoteParams = {
            " \"": {
                opener: " \'",
                closer: "\""
            },
            " \'": {
                opener: " \"",
                closer: "\'"
            },
            "\u2018": {
                opener: "\u2018",
                closer: "\u2019"
            },
            "\u201C": {
                opener: "\u201C",
                closer: "\u201D"
            },
        };
        function tryOpen(tag, pos) {
            if (config.quoteState.length === 0 || tag === config.quoteState[config.quoteState.length - 1].opener) {
                config.quoteState.push({
                    opener: quoteParams[tag].opener,
                    closer: quoteParams[tag].closer,
                    pos: pos
                });
                return false;
            } else {
                var prevPos = config.quoteState[config.quoteState.length-1].pos;
                config.quoteState.pop();
                config.quoteState.push({
                    opener: quoteParams[tag].opener,
                    closer: quoteParams[tag].closer,
                    positions: pos
                });
                return prevPos;
            }
        }
        function tryClose(tag, pos) {
            if (config.quoteState.length > 0 && tag === config.quoteState[config.quoteState.length - 1].closer) {
                config.quoteState.pop();
            } else {
                return pos;
            }
        }
        function pushQuoteState(tag, pos) {
            var isOpener = ["\u201C", "\u2018", " \"", " \'"].indexOf(tag) > -1 ? true : false;
            if (isOpener) {
                return tryOpen(tag, pos);
            } else {
                return tryClose(tag, pos);
            }
        }
        function quoteFix (tag, positions) {
            var m = tag.match(/(^(?:\u2018|\u2019|\u201C|\u201D|\"|\')|(?: \"| \')$)/);
            if (m) {
                return pushQuoteState(m[1], positions);
            }
        }
        // Run state machine
        if (config.doppel.strings.length && config.doppel.strings[0].trim()) {
            config.doppel.strings[0] = config.capitaliseWords(config.doppel.strings[0], 0, config.doppel.tags[0]);
        }

    	for (var i=0,ilen=config.doppel.tags.length;i<ilen;i++) {
            var tag = config.doppel.tags[i];
            var str = config.doppel.strings[i+1];

            if (config.tagState !== null) {
                // Evaluate tag state for current string
                if (_tagParams[tag]) {
                    config.tagState.push(_tagParams[tag]);
                } else if (config.tagState.length && tag === config.tagState[config.tagState.length - 1]) {
                    config.tagState.pop();
                }
            }

            if (config.afterPunct !== null) {
                // Evaluate punctuation state of current string
                if (tag.match(/[\!\?\:]$/)) {
                    config.afterPunct = true;
                }
            }

            // Process if outside tag scope, else noop for upper-casing
            if (config.tagState.length === 0) {
                config.doppel.strings[i+1] = config.capitaliseWords(str, i+1, config.doppel,config.doppel.tags[i+1]);
                
            } else if (config.doppel.strings[i+1].trim()) {
                config.lastWordPos = null;
            }
            
            if (config.quoteState !== null) {
                // Evaluate quote state of current string and fix chars that have flown
                var quotePos = quoteFix(tag, i);
                if (quotePos || quotePos === 0) {
                    var origChar = config.doppel.origStrings[quotePos+1].slice(0, 1);
                    config.doppel.strings[quotePos+1] = origChar + config.doppel.strings[quotePos+1].slice(1);
                    config.lastWordPos = null;
                }
            }

            // If there was a printable string, unset first-word and after-punctuation
            if (config.isFirst) {
                if (str.trim()) {
                    config.isFirst = false;
                }
            }
            if (config.afterPunct) {
                if (str.trim()) {
                    config.afterPunct = false;
                }
            }
        }
        if (config.quoteState) {
            for (var i=0,ilen=config.quoteState.length;i<ilen;i++) {
                var quotePos = config.quoteState[i].pos;
                // Test for quotePos avoids a crashing error:
                //   https://github.com/citation-style-language/test-suite/blob/master/processor-tests/humans/flipflop_OrphanQuote.txt
                if (typeof quotePos !== 'undefined') {
                    var origChar = config.doppel.origStrings[quotePos+1].slice(0, 1);
                    config.doppel.strings[quotePos+1] = origChar + config.doppel.strings[quotePos+1].slice(1);
                }
            }
        }
        // Specially capitalize the last word if necessary (invert stop-word list)
        if (config.lastWordPos) {
            var lastWords = wordDoppel.split(config.doppel.strings[config.lastWordPos.strings]);
            var lastWord = lastWords.strings[config.lastWordPos.words];
            if (lastWord.length > 1 && CSL.toLocaleLowerCase.call(this, lastWord).match(config.skipWordsRex)) {
                lastWord = _capitalise.call(this, lastWord);
                lastWords.strings[config.lastWordPos.words] = lastWord;
            }
            config.doppel.strings[config.lastWordPos.strings] = wordDoppel.join(lastWords);
        }

        // Recombine the string
        return tagDoppel.join(config.doppel);
    }

    /**
     * PUBLIC
     */

    /**
     * A noop that just delivers the string.
     */
    function passthrough (state, str) {
        return str;
    }

    /**
     * Force all letters in the string to lowercase, skipping nocase spans
     */
    function lowercase(state, string) {
        var config = {
            quoteState: null,
            capitaliseWords: function(str) {
                var words = str.split(" ");
                for (var i=0,ilen=words.length;i<ilen;i++) {
                    var word = words[i];
                    if (word) {
                        words[i] = CSL.toLocaleLowerCase.call(state, word);
                    }
                }
                return words.join(" ");
            },
            skipWordsRex: null,
            tagState: [],
            afterPunct: null,
            isFirst: null
        };
        return _textcaseEngine.call(state, config, string);
    }

    /**
     * Force all letters in the string to uppercase.
     */
    function uppercase(state, string) {
        var config = {
            quoteState: null,
            capitaliseWords: function(str) {
                var words = str.split(" ");
                for (var i=0,ilen=words.length;i<ilen;i++) {
                    var word = words[i];
                    if (word) {
                        // Okay.
                        // So we need to pick up an array of locales from state.tmp.
                        // This function is invoked in the context of queue.js, so
                        // the item is not available here. Three levels to be included
                        // in the array:
                        // 1. Field language tag, if any
                        // 2. Item language tag, if any
                        // 3. Value of state.opt.lang
                        words[i] = CSL.toLocaleUpperCase.call(state, word);
                    }
                }
                return words.join(" ");
            },
            skipWordsRex: null,
            tagState: [],
            afterPunct: null,
            isFirst: null
        };
        return _textcaseEngine.call(state, config, string);
    }

    /**
     * Similar to <b>capitalize_first</b>, but force the
     * subsequent characters to lowercase.
     */
    function sentence(state, string) {
        var config = {
            quoteState: [],
            capitaliseWords: function(str) {
                var words = str.split(" ");
                for (var i=0,ilen=words.length;i<ilen;i++) {
                    var word = words[i];
                    if (word) {
                        if (config.isFirst) {
                            words[i] = _capitalise.call(state, word);
                            config.isFirst = false;
                        } else {
                            words[i] = CSL.toLocaleLowerCase.call(state, word);
                        }
                    }
                }
                return words.join(" ");
            },
            skipWordsRex: null,
            tagState: [],
            afterPunct: null,
            isFirst: true
        };
        return _textcaseEngine.call(state, config, string);
    }

    function title(state, string) {
        var config = {
            quoteState: [],
            capitaliseWords: function(str, i, followingTag) {
                if (str.trim()) {
                    var words = str.split(/[ \u00A0]+/);
                    var wordle = wordDoppel.split(str);
                    var words = wordle.strings;
                    for (var j=0,jlen=words.length;j<jlen;j++) {
                        var word = words[j];
                        if (!word) {
                            continue;
                        }
                        if (word.length > 1 && !CSL.toLocaleLowerCase.call(state, word).match(config.skipWordsRex)) {
                            // Capitalize every word that is not a stop-word
                            words[j] = _capitalise.call(state, words[j]);
                        } else if (j === (words.length - 1) && followingTag === "-") {
                            words[j] = _capitalise.call(state, words[j]);
                        } else if (config.isFirst) {
                            // Capitalize first word, even if a stop-word
                            words[j] = _capitalise.call(state, words[j]);
                        } else if (config.afterPunct) {
                            // Capitalize after punctuation
                            words[j] = _capitalise.call(state, words[j]);
                        }
                        config.afterPunct = false;
                        config.isFirst = false;
                        config.lastWordPos = {
                            strings: i,
                            words: j
                        };
                    }
                    str = wordDoppel.join(wordle);
                }
                return str;
            },
            skipWordsRex: state.locale[state.opt.lang].opts["skip-words-regexp"],
            tagState: [],
            afterPunct: false,
            isFirst: true
        };
        return _textcaseEngine.call(state, config, string);
    }
    
    
    /**
     * Force capitalization of the first letter in the string, leave
     * the rest of the characters untouched.
     */
    function capitalizeFirst(state, string) {
        var config = {
            quoteState: [],
            capitaliseWords: function(str) {
                var words = str.split(" ");
                for (var i=0,ilen=words.length;i<ilen;i++) {
                    var word = words[i];
                    if (word) {
                        if (config.isFirst) {
                            words[i] = _capitalise.call(state, word);
                            config.isFirst = false;
                            break;
                        }
                    }
                }
                return words.join(" ");
            },
            skipWordsRex: null,
            tagState: [],
            afterPunct: null,
            isFirst: true
        };
        return _textcaseEngine.call(state, config, string);
    }

    /**
     * Force the first letter of each space-delimited
     * word in the string to uppercase, and leave the remainder
     * of the string untouched.  Single characters are forced
     * to uppercase.
     */
    function capitalizeAll (state, string) {
        var config = {
            quoteState: [],
            capitaliseWords: function(str) {
                var words = str.split(" ");
                for (var i=0,ilen=words.length;i<ilen;i++) {
                    var word = words[i];
                    if (word) {
                        words[i] = _capitalise.call(state, word);
                    }
                }
                return words.join(" ");
            },
            skipWordsRex: null,
            tagState: [],
            afterPunct: null,
            isFirst: null
        };
        return _textcaseEngine.call(state, config, string);
    }
    return {
        passthrough: passthrough,
        lowercase: lowercase,
        uppercase: uppercase,
        sentence: sentence,
        title: title,
        "capitalize-first": capitalizeFirst,
        "capitalize-all": capitalizeAll
    };
}());

CSL.parseParticles = (function(){
    function splitParticles(nameValue, firstNameFlag, caseOverride) {
		// Parse particles out from name fields.
		// * nameValue (string) is the field content to be parsed.
		// * firstNameFlag (boolean) parse trailing particles
		//	 (default is to parse leading particles)
		// * caseOverride (boolean) include all but one word in particle set
		//	 (default is to include only words with lowercase first char)
        //   [caseOverride is not used in this application]
		// Returns an array with:
		// * (boolean) flag indicating whether a particle was found
		// * (string) the name after removal of particles
		// * (array) the list of particles found
		var origNameValue = nameValue;
		nameValue = caseOverride ? nameValue.toLowerCase() : nameValue;
		var particleList = [];
		var rex;
        var hasParticle;
		if (firstNameFlag) {
			nameValue = nameValue.split("").reverse().join("");
			rex = CSL.PARTICLE_GIVEN_REGEXP;
		} else {
			rex = CSL.PARTICLE_FAMILY_REGEXP;
		}
		var m = nameValue.match(rex);
		while (m) {
			var m1 = firstNameFlag ? m[1].split("").reverse().join("") : m[1];
			var firstChar = m ? m1 : false;
			var firstChar = firstChar ? m1.replace(/^[-\'\u02bb\u2019\s]*(.).*$/, "$1") : false;
			hasParticle = firstChar ? firstChar.toUpperCase() !== firstChar : false;
			if (!hasParticle) {
                break;
            }
			if (firstNameFlag) {
				particleList.push(origNameValue.slice(m1.length * -1));
				origNameValue = origNameValue.slice(0,m1.length * -1);
			} else {
				particleList.push(origNameValue.slice(0,m1.length));
				origNameValue = origNameValue.slice(m1.length);
			}
			//particleList.push(m1);
			nameValue = m[2];
			m = nameValue.match(rex);
		}
		if (firstNameFlag) {
			nameValue = nameValue.split("").reverse().join("");
			particleList.reverse();
			for (var i=1,ilen=particleList.length;i<ilen;i++) {
				if (particleList[i].slice(0, 1) == " ") {
					particleList[i-1] += " ";
				}
			}
			for (var i=0,ilen=particleList.length;i<ilen;i++) {
				if (particleList[i].slice(0, 1) == " ") {
					particleList[i] = particleList[i].slice(1);
				}
			}
			nameValue = origNameValue.slice(0, nameValue.length);
		} else {
			nameValue = origNameValue.slice(nameValue.length * -1);
		}
		return [hasParticle, nameValue, particleList];
	}
    function trimLast(str) {
        var lastChar = str.slice(-1);
        str = str.trim();
        if (lastChar === " " && ["\'", "\u2019"].indexOf(str.slice(-1)) > -1) {
            str += " ";
        }
        return str;
    }
    function parseSuffix(nameObj) {
        if (!nameObj.suffix && nameObj.given) {
            var m = nameObj.given.match(/(\s*,!*\s*)/);
            if (m) {
                var idx = nameObj.given.indexOf(m[1]);
                var possible_suffix = nameObj.given.slice(idx + m[1].length);
                var possible_comma = nameObj.given.slice(idx, idx + m[1].length).replace(/\s*/g, "");
                if (possible_suffix.replace(/\./g, "") === 'et al' && !nameObj["dropping-particle"]) {
                    // This hack covers the case where "et al." is explicitly used in the
                    // authorship information of the work.
                    nameObj["dropping-particle"] = possible_suffix;
                    nameObj["comma-dropping-particle"] = ",";
                } else {
                    if (possible_comma.length === 2) {
                        nameObj["comma-suffix"] = true;
                    }
                    nameObj.suffix = possible_suffix;
                }
                nameObj.given = nameObj.given.slice(0, idx);
            }
        }
    }
    return function(nameObj) {
        // Extract and set non-dropping particle(s) from family name field
        var res = splitParticles(nameObj.family);
        var lastNameValue = res[1];
        var lastParticleList = res[2];
        nameObj.family = lastNameValue;
        var nonDroppingParticle = trimLast(lastParticleList.join(""));
        if (nonDroppingParticle) {
            nameObj['non-dropping-particle'] = nonDroppingParticle;
        }
        // Split off suffix first of all
        parseSuffix(nameObj);
        // Extract and set dropping particle(s) from given name field
        var res = splitParticles(nameObj.given, true);
        var firstNameValue = res[1];
        var firstParticleList = res[2];
        nameObj.given = firstNameValue;
        var droppingParticle = firstParticleList.join("").trim();
        if (droppingParticle) {
            nameObj['dropping-particle'] = droppingParticle;
        }
    };
}());


module.exports = CSL

/***/ }),

/***/ "../gen/items/extra-fields.json":
/*!**************************************!*\
  !*** ../gen/items/extra-fields.json ***!
  \**************************************/
/*! exports provided: DOI, ISBN, ISSN, PMCID, PMID, URL, access date, accessDate, accessed, admin flag, admin-flag, adminFlag, adoption date, adoptionDate, album, application number, applicationNumber, archive, archive location, archive place, archive-place, archiveLocation, archive_location, artist, artwork medium, artwork size, artworkMedium, artworkSize, assembly number, assemblyNumber, assignee, attorney agent, attorneyAgent, audio file type, audio recording format, audioFileType, audioRecordingFormat, author, authority, bill number, billNumber, blog title, blogTitle, book author, book title, bookAuthor, bookTitle, call number, call-number, callNumber, cartographer, case name, caseName, cast member, castMember, chapter number, chapter-number, code, code number, code pages, code volume, codeNumber, codePages, codeVolume, collection editor, collection number, collection title, collection-editor, collection-number, collection-title, commenter, committee, company, composer, conference date, conference name, conferenceDate, conferenceName, container author, container title, container title short, container-author, container-title, container-title-short, contributor, cosponsor, counsel, country, court, csl type, csl-type, date, date amended, date decided, date enacted, dateAmended, dateDecided, dateEnacted, dictionary title, dictionaryTitle, dimensions, director, distributor, docket number, docketNumber, document name, document number, document-name, documentName, documentNumber, doi, edition, editor, editorial director, editorial-director, encyclopedia title, encyclopediaTitle, episode number, episodeNumber, event, event date, event place, event-date, event-place, filing date, filingDate, first page, firstPage, forum title, forumTitle, gazette flag, gazette-flag, gazetteFlag, genre, guest, history, illustrator, institution, interview medium, interviewMedium, interviewee, interviewer, inventor, isbn, issn, issue, issue date, issueDate, issued, issuing authority, issuingAuthority, journal abbreviation, journalAbbreviation, jurisdiction, label, language, legal status, legalStatus, legislative body, legislativeBody, letter type, letterType, library catalog, libraryCatalog, manuscript type, manuscriptType, map type, mapType, medium, meeting name, meeting number, meetingName, meetingNumber, name of act, nameOfAct, network, news case date, newsCaseDate, num pages, numPages, number, number of pages, number of volumes, number-of-pages, number-of-volumes, numberOfVolumes, opening date, opening-date, openingDate, opus, original author, original date, original publisher, original publisher place, original title, original-author, original-date, original-publisher, original-publisher-place, original-title, originalDate, page, pages, parent treaty, parentTreaty, patent number, patentNumber, performer, place, pmcid, pmid, podcaster, post type, postType, presentation type, presentationType, presenter, priority date, priority numbers, priorityDate, priorityNumbers, proceedings title, proceedingsTitle, producer, program title, programTitle, programmer, programming language, programmingLanguage, public law number, publicLawNumber, publication date, publication number, publication title, publication-date, publication-number, publicationDate, publicationNumber, publicationTitle, publisher, publisher place, publisher-place, recipient, references, regnal year, regnalYear, regulation type, regulationType, regulatory body, regulatoryBody, reign, release, report number, report type, reportNumber, reportType, reporter, reporter volume, reporterVolume, resolution label, resolutionLabel, reviewed author, reviewed title, reviewed-author, reviewed-title, reviewedAuthor, rights, running time, runningTime, scale, scriptwriter, section, series, series editor, series number, series text, series title, seriesEditor, seriesNumber, seriesText, seriesTitle, session, session type, sessionType, short title, shortTitle, signing date, signingDate, source, sponsor, status, studio, subject, submitted, supplement, supplement name, supplementName, system, testimony by, testimonyBy, thesis type, thesisType, title, title short, title-short, translator, treaty number, treatyNumber, type, university, url, version, version number, versionNumber, video recording format, videoRecordingFormat, volume, volume title, volume-title, volumeTitle, website title, website type, websiteTitle, websiteType, words by, wordsBy, year as volume, yearAsVolume, default */
/*! all exports used */
/***/ (function(module) {

module.exports = JSON.parse("{\"DOI\":{\"csl\":[\"DOI\"],\"type\":\"text\",\"zotero\":[\"DOI\"]},\"ISBN\":{\"csl\":[\"ISBN\"],\"type\":\"text\",\"zotero\":[\"ISBN\"]},\"ISSN\":{\"csl\":[\"ISSN\"],\"type\":\"text\",\"zotero\":[\"ISSN\"]},\"PMCID\":{\"csl\":[\"PMCID\"],\"type\":\"text\"},\"PMID\":{\"csl\":[\"PMID\"],\"type\":\"text\"},\"URL\":{\"csl\":[\"URL\"],\"type\":\"text\"},\"access date\":{\"csl\":[\"accessed\"],\"type\":\"date\",\"zotero\":[\"accessDate\"]},\"accessDate\":{\"type\":\"date\",\"zotero\":[\"accessDate\"]},\"accessed\":{\"csl\":[\"accessed\"],\"type\":\"date\",\"zotero\":[\"accessDate\"]},\"admin flag\":{\"csl\":[\"admin-flag\"],\"type\":\"text\",\"zotero\":[\"adminFlag\"]},\"admin-flag\":{\"csl\":[\"admin-flag\"],\"type\":\"text\"},\"adminFlag\":{\"type\":\"text\",\"zotero\":[\"adminFlag\"]},\"adoption date\":{\"type\":\"date\",\"zotero\":[\"adoptionDate\"]},\"adoptionDate\":{\"type\":\"date\",\"zotero\":[\"adoptionDate\"]},\"album\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"application number\":{\"type\":\"text\",\"zotero\":[\"applicationNumber\"]},\"applicationNumber\":{\"type\":\"text\",\"zotero\":[\"applicationNumber\"]},\"archive\":{\"csl\":[\"archive\"],\"type\":\"text\",\"zotero\":[\"archive\"]},\"archive location\":{\"csl\":[\"archive_location\"],\"type\":\"text\",\"zotero\":[\"archiveLocation\"]},\"archive place\":{\"csl\":[\"archive-place\"],\"type\":\"text\"},\"archive-place\":{\"csl\":[\"archive-place\"],\"type\":\"text\"},\"archiveLocation\":{\"type\":\"text\",\"zotero\":[\"archiveLocation\"]},\"archive_location\":{\"csl\":[\"archive_location\"],\"type\":\"text\"},\"artist\":{\"csl\":[\"author\"],\"type\":\"name\",\"zotero\":[\"artist\"]},\"artwork medium\":{\"type\":\"text\",\"zotero\":[\"medium\"]},\"artwork size\":{\"type\":\"text\",\"zotero\":[\"artworkSize\"]},\"artworkMedium\":{\"type\":\"text\",\"zotero\":[\"medium\"]},\"artworkSize\":{\"type\":\"text\",\"zotero\":[\"artworkSize\"]},\"assembly number\":{\"type\":\"text\",\"zotero\":[\"assemblyNumber\",\"seriesNumber\"]},\"assemblyNumber\":{\"type\":\"text\",\"zotero\":[\"assemblyNumber\",\"seriesNumber\"]},\"assignee\":{\"type\":\"text\",\"zotero\":[\"assignee\"]},\"attorney agent\":{\"csl\":[\"attorneyAgent\"],\"type\":\"name\",\"zotero\":[\"attorneyAgent\"]},\"attorneyAgent\":{\"csl\":[\"attorneyAgent\"],\"type\":\"name\",\"zotero\":[\"attorneyAgent\"]},\"audio file type\":{\"type\":\"text\",\"zotero\":[\"medium\"]},\"audio recording format\":{\"type\":\"text\",\"zotero\":[\"medium\"]},\"audioFileType\":{\"type\":\"text\",\"zotero\":[\"medium\"]},\"audioRecordingFormat\":{\"type\":\"text\",\"zotero\":[\"medium\"]},\"author\":{\"csl\":[\"author\"],\"type\":\"name\",\"zotero\":[\"author\"]},\"authority\":{\"csl\":[\"authority\"],\"type\":\"text\",\"zotero\":[\"court\",\"legislativeBody\",\"issuingAuthority\",\"institution\",\"regulatoryBody\"]},\"bill number\":{\"csl\":[\"number\"],\"type\":\"text\",\"zotero\":[\"number\"]},\"billNumber\":{\"type\":\"text\",\"zotero\":[\"number\"]},\"blog title\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"blogTitle\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"book author\":{\"csl\":[\"container-author\"],\"type\":\"name\",\"zotero\":[\"bookAuthor\"]},\"book title\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"bookAuthor\":{\"type\":\"name\",\"zotero\":[\"bookAuthor\"]},\"bookTitle\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"call number\":{\"csl\":[\"call-number\"],\"type\":\"text\",\"zotero\":[\"callNumber\"]},\"call-number\":{\"csl\":[\"call-number\"],\"type\":\"text\"},\"callNumber\":{\"type\":\"text\",\"zotero\":[\"callNumber\"]},\"cartographer\":{\"csl\":[\"author\"],\"type\":\"name\",\"zotero\":[\"cartographer\"]},\"case name\":{\"csl\":[\"title\"],\"type\":\"text\",\"zotero\":[\"title\"]},\"caseName\":{\"type\":\"text\",\"zotero\":[\"title\"]},\"cast member\":{\"csl\":[\"castMember\"],\"type\":\"name\",\"zotero\":[\"castMember\"]},\"castMember\":{\"csl\":[\"castMember\"],\"type\":\"name\",\"zotero\":[\"castMember\"]},\"chapter number\":{\"csl\":[\"chapter-number\"],\"type\":\"text\",\"zotero\":[\"session\"]},\"chapter-number\":{\"csl\":[\"chapter-number\"],\"type\":\"text\"},\"code\":{\"type\":\"text\",\"zotero\":[\"code\"]},\"code number\":{\"type\":\"text\",\"zotero\":[\"codeNumber\"]},\"code pages\":{\"csl\":[\"page\"],\"type\":\"text\",\"zotero\":[\"pages\"]},\"code volume\":{\"type\":\"text\",\"zotero\":[\"volume\"]},\"codeNumber\":{\"type\":\"text\",\"zotero\":[\"codeNumber\"]},\"codePages\":{\"type\":\"text\",\"zotero\":[\"pages\"]},\"codeVolume\":{\"type\":\"text\",\"zotero\":[\"volume\"]},\"collection editor\":{\"csl\":[\"collection-editor\"],\"type\":\"name\",\"zotero\":[\"seriesEditor\"]},\"collection number\":{\"csl\":[\"collection-number\"],\"type\":\"text\",\"zotero\":[\"seriesNumber\",\"assemblyNumber\",\"regnalYear\",\"yearAsVolume\"]},\"collection title\":{\"csl\":[\"collection-title\"],\"type\":\"text\",\"zotero\":[\"seriesTitle\",\"series\",\"parentTreaty\"]},\"collection-editor\":{\"csl\":[\"collection-editor\"],\"type\":\"name\"},\"collection-number\":{\"csl\":[\"collection-number\"],\"type\":\"text\"},\"collection-title\":{\"csl\":[\"collection-title\"],\"type\":\"text\"},\"commenter\":{\"csl\":[\"commenter\"],\"type\":\"name\",\"zotero\":[\"commenter\"]},\"committee\":{\"csl\":[\"committee\"],\"type\":\"text\",\"zotero\":[\"committee\"]},\"company\":{\"csl\":[\"publisher\"],\"type\":\"text\",\"zotero\":[\"publisher\"]},\"composer\":{\"csl\":[\"composer\"],\"type\":\"name\",\"zotero\":[\"composer\"]},\"conference date\":{\"type\":\"date\",\"zotero\":[\"conferenceDate\"]},\"conference name\":{\"type\":\"text\",\"zotero\":[\"conferenceName\"]},\"conferenceDate\":{\"type\":\"date\",\"zotero\":[\"conferenceDate\"]},\"conferenceName\":{\"type\":\"text\",\"zotero\":[\"conferenceName\"]},\"container author\":{\"csl\":[\"container-author\"],\"type\":\"name\",\"zotero\":[\"bookAuthor\"]},\"container title\":{\"csl\":[\"container-title\"],\"type\":\"text\",\"zotero\":[\"publicationTitle\",\"reporter\",\"code\"]},\"container title short\":{\"csl\":[\"container-title-short\"],\"type\":\"text\",\"zotero\":[\"journalAbbreviation\"]},\"container-author\":{\"csl\":[\"container-author\"],\"type\":\"name\"},\"container-title\":{\"csl\":[\"container-title\"],\"type\":\"text\"},\"container-title-short\":{\"csl\":[\"container-title-short\"],\"type\":\"text\"},\"contributor\":{\"csl\":[\"contributor\"],\"type\":\"name\",\"zotero\":[\"contributor\"]},\"cosponsor\":{\"csl\":[\"cosponsor\"],\"type\":\"name\",\"zotero\":[\"cosponsor\"]},\"counsel\":{\"csl\":[\"counsel\"],\"type\":\"name\",\"zotero\":[\"counsel\"]},\"country\":{\"type\":\"text\",\"zotero\":[\"country\"]},\"court\":{\"type\":\"text\",\"zotero\":[\"court\"]},\"csl type\":{\"csl\":[\"csl-type\"],\"type\":\"text\"},\"csl-type\":{\"csl\":[\"csl-type\"],\"type\":\"text\"},\"date\":{\"csl\":[\"issued\"],\"type\":\"date\",\"zotero\":[\"date\"]},\"date amended\":{\"type\":\"date\",\"zotero\":[\"dateAmended\"]},\"date decided\":{\"csl\":[\"issued\"],\"type\":\"date\",\"zotero\":[\"date\"]},\"date enacted\":{\"csl\":[\"issued\"],\"type\":\"date\",\"zotero\":[\"date\"]},\"dateAmended\":{\"type\":\"date\",\"zotero\":[\"dateAmended\"]},\"dateDecided\":{\"type\":\"date\",\"zotero\":[\"date\"]},\"dateEnacted\":{\"type\":\"date\",\"zotero\":[\"date\"]},\"dictionary title\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"dictionaryTitle\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"dimensions\":{\"csl\":[\"dimensions\"],\"type\":\"text\",\"zotero\":[\"artworkSize\",\"runningTime\"]},\"director\":{\"csl\":[\"director\"],\"type\":\"name\",\"zotero\":[\"director\"]},\"distributor\":{\"csl\":[\"publisher\"],\"type\":\"text\",\"zotero\":[\"publisher\"]},\"docket number\":{\"csl\":[\"number\"],\"type\":\"text\",\"zotero\":[\"number\"]},\"docketNumber\":{\"type\":\"text\",\"zotero\":[\"number\"]},\"document name\":{\"csl\":[\"document-name\"],\"type\":\"text\",\"zotero\":[\"documentName\"]},\"document number\":{\"csl\":[\"number\"],\"type\":\"text\",\"zotero\":[\"number\"]},\"document-name\":{\"csl\":[\"document-name\"],\"type\":\"text\"},\"documentName\":{\"type\":\"text\",\"zotero\":[\"documentName\"]},\"documentNumber\":{\"type\":\"text\",\"zotero\":[\"number\"]},\"doi\":{\"csl\":[\"DOI\"],\"type\":\"text\",\"zotero\":[\"DOI\"]},\"edition\":{\"csl\":[\"edition\"],\"type\":\"text\",\"zotero\":[\"edition\"]},\"editor\":{\"csl\":[\"editor\"],\"type\":\"name\",\"zotero\":[\"editor\"]},\"editorial director\":{\"csl\":[\"editorial-director\"],\"type\":\"name\"},\"editorial-director\":{\"csl\":[\"editorial-director\"],\"type\":\"name\"},\"encyclopedia title\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"encyclopediaTitle\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"episode number\":{\"csl\":[\"number\"],\"type\":\"text\",\"zotero\":[\"number\"]},\"episodeNumber\":{\"type\":\"text\",\"zotero\":[\"number\"]},\"event\":{\"csl\":[\"event\"],\"type\":\"text\",\"zotero\":[\"meetingName\",\"conferenceName\",\"resolutionLabel\"]},\"event date\":{\"csl\":[\"event-date\"],\"type\":\"date\",\"zotero\":[\"dateAmended\",\"signingDate\",\"conferenceDate\"]},\"event place\":{\"csl\":[\"event-place\"],\"type\":\"text\"},\"event-date\":{\"csl\":[\"event-date\"],\"type\":\"date\"},\"event-place\":{\"csl\":[\"event-place\"],\"type\":\"text\"},\"filing date\":{\"csl\":[\"submitted\"],\"type\":\"date\",\"zotero\":[\"filingDate\"]},\"filingDate\":{\"type\":\"date\",\"zotero\":[\"filingDate\"]},\"first page\":{\"csl\":[\"page\"],\"type\":\"text\",\"zotero\":[\"pages\"]},\"firstPage\":{\"type\":\"text\",\"zotero\":[\"pages\"]},\"forum title\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"forumTitle\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"gazette flag\":{\"csl\":[\"gazette-flag\"],\"type\":\"text\",\"zotero\":[\"gazetteFlag\"]},\"gazette-flag\":{\"csl\":[\"gazette-flag\"],\"type\":\"text\"},\"gazetteFlag\":{\"type\":\"text\",\"zotero\":[\"gazetteFlag\"]},\"genre\":{\"csl\":[\"genre\"],\"type\":\"text\",\"zotero\":[\"genre\",\"type\"]},\"guest\":{\"csl\":[\"guest\"],\"type\":\"name\",\"zotero\":[\"guest\"]},\"history\":{\"type\":\"text\",\"zotero\":[\"history\"]},\"illustrator\":{\"csl\":[\"illustrator\"],\"type\":\"name\"},\"institution\":{\"csl\":[\"publisher\"],\"type\":\"text\",\"zotero\":[\"institution\",\"publisher\"]},\"interview medium\":{\"type\":\"text\",\"zotero\":[\"medium\"]},\"interviewMedium\":{\"type\":\"text\",\"zotero\":[\"medium\"]},\"interviewee\":{\"csl\":[\"author\"],\"type\":\"name\",\"zotero\":[\"interviewee\"]},\"interviewer\":{\"csl\":[\"interviewer\"],\"type\":\"name\",\"zotero\":[\"interviewer\"]},\"inventor\":{\"csl\":[\"author\"],\"type\":\"name\",\"zotero\":[\"inventor\"]},\"isbn\":{\"csl\":[\"ISBN\"],\"type\":\"text\",\"zotero\":[\"ISBN\"]},\"issn\":{\"csl\":[\"ISSN\"],\"type\":\"text\",\"zotero\":[\"ISSN\"]},\"issue\":{\"csl\":[\"issue\"],\"type\":\"text\",\"zotero\":[\"issue\"]},\"issue date\":{\"csl\":[\"issued\"],\"type\":\"date\",\"zotero\":[\"date\"]},\"issueDate\":{\"type\":\"date\",\"zotero\":[\"date\"]},\"issued\":{\"csl\":[\"issued\"],\"type\":\"date\",\"zotero\":[\"date\"]},\"issuing authority\":{\"type\":\"text\",\"zotero\":[\"issuingAuthority\"]},\"issuingAuthority\":{\"type\":\"text\",\"zotero\":[\"issuingAuthority\"]},\"journal abbreviation\":{\"csl\":[\"container-title-short\"],\"type\":\"text\",\"zotero\":[\"journalAbbreviation\"]},\"journalAbbreviation\":{\"type\":\"text\",\"zotero\":[\"journalAbbreviation\"]},\"jurisdiction\":{\"csl\":[\"jurisdiction\"],\"type\":\"text\",\"zotero\":[\"jurisdiction\"]},\"label\":{\"csl\":[\"publisher\"],\"type\":\"text\",\"zotero\":[\"publisher\"]},\"language\":{\"csl\":[\"language\"],\"type\":\"text\",\"zotero\":[\"language\"]},\"legal status\":{\"type\":\"text\",\"zotero\":[\"legalStatus\"]},\"legalStatus\":{\"type\":\"text\",\"zotero\":[\"legalStatus\"]},\"legislative body\":{\"type\":\"text\",\"zotero\":[\"legislativeBody\"]},\"legislativeBody\":{\"type\":\"text\",\"zotero\":[\"legislativeBody\"]},\"letter type\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"letterType\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"library catalog\":{\"csl\":[\"source\"],\"type\":\"text\",\"zotero\":[\"libraryCatalog\"]},\"libraryCatalog\":{\"type\":\"text\",\"zotero\":[\"libraryCatalog\"]},\"manuscript type\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"manuscriptType\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"map type\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"mapType\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"medium\":{\"csl\":[\"medium\"],\"type\":\"text\",\"zotero\":[\"medium\"]},\"meeting name\":{\"type\":\"text\",\"zotero\":[\"meetingName\"]},\"meeting number\":{\"type\":\"text\",\"zotero\":[\"meetingNumber\"]},\"meetingName\":{\"type\":\"text\",\"zotero\":[\"meetingName\"]},\"meetingNumber\":{\"type\":\"text\",\"zotero\":[\"meetingNumber\"]},\"name of act\":{\"csl\":[\"title\"],\"type\":\"text\",\"zotero\":[\"title\"]},\"nameOfAct\":{\"type\":\"text\",\"zotero\":[\"title\"]},\"network\":{\"csl\":[\"publisher\"],\"type\":\"text\",\"zotero\":[\"publisher\"]},\"news case date\":{\"type\":\"date\",\"zotero\":[\"newsCaseDate\"]},\"newsCaseDate\":{\"type\":\"date\",\"zotero\":[\"newsCaseDate\"]},\"num pages\":{\"csl\":[\"number-of-pages\"],\"type\":\"text\",\"zotero\":[\"numPages\"]},\"numPages\":{\"type\":\"text\",\"zotero\":[\"numPages\"]},\"number\":{\"csl\":[\"number\"],\"type\":\"text\",\"zotero\":[\"number\"]},\"number of pages\":{\"csl\":[\"number-of-pages\"],\"type\":\"text\",\"zotero\":[\"numPages\"]},\"number of volumes\":{\"csl\":[\"number-of-volumes\"],\"type\":\"text\",\"zotero\":[\"numberOfVolumes\"]},\"number-of-pages\":{\"csl\":[\"number-of-pages\"],\"type\":\"text\"},\"number-of-volumes\":{\"csl\":[\"number-of-volumes\"],\"type\":\"text\"},\"numberOfVolumes\":{\"type\":\"text\",\"zotero\":[\"numberOfVolumes\"]},\"opening date\":{\"csl\":[\"opening-date\"],\"type\":\"date\",\"zotero\":[\"openingDate\"]},\"opening-date\":{\"csl\":[\"opening-date\"],\"type\":\"date\"},\"openingDate\":{\"type\":\"date\",\"zotero\":[\"openingDate\"]},\"opus\":{\"type\":\"text\",\"zotero\":[\"opus\"]},\"original author\":{\"csl\":[\"original-author\"],\"type\":\"name\"},\"original date\":{\"csl\":[\"original-date\"],\"type\":\"date\",\"zotero\":[\"originalDate\"]},\"original publisher\":{\"csl\":[\"original-publisher\"],\"type\":\"text\"},\"original publisher place\":{\"csl\":[\"original-publisher-place\"],\"type\":\"text\"},\"original title\":{\"csl\":[\"original-title\"],\"type\":\"text\"},\"original-author\":{\"csl\":[\"original-author\"],\"type\":\"name\"},\"original-date\":{\"csl\":[\"original-date\"],\"type\":\"date\"},\"original-publisher\":{\"csl\":[\"original-publisher\"],\"type\":\"text\"},\"original-publisher-place\":{\"csl\":[\"original-publisher-place\"],\"type\":\"text\"},\"original-title\":{\"csl\":[\"original-title\"],\"type\":\"text\"},\"originalDate\":{\"type\":\"date\",\"zotero\":[\"originalDate\"]},\"page\":{\"csl\":[\"page\"],\"type\":\"text\",\"zotero\":[\"pages\"]},\"pages\":{\"csl\":[\"page\"],\"type\":\"text\",\"zotero\":[\"pages\"]},\"parent treaty\":{\"type\":\"text\",\"zotero\":[\"parentTreaty\"]},\"parentTreaty\":{\"type\":\"text\",\"zotero\":[\"parentTreaty\"]},\"patent number\":{\"csl\":[\"number\"],\"type\":\"text\",\"zotero\":[\"number\"]},\"patentNumber\":{\"type\":\"text\",\"zotero\":[\"number\"]},\"performer\":{\"csl\":[\"performer\"],\"type\":\"name\",\"zotero\":[\"performer\"]},\"place\":{\"csl\":[\"event-place\",\"publisher-place\"],\"type\":\"text\",\"zotero\":[\"place\"]},\"pmcid\":{\"csl\":[\"PMCID\"],\"type\":\"text\"},\"pmid\":{\"csl\":[\"PMID\"],\"type\":\"text\"},\"podcaster\":{\"csl\":[\"author\"],\"type\":\"name\",\"zotero\":[\"podcaster\"]},\"post type\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"postType\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"presentation type\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"presentationType\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"presenter\":{\"csl\":[\"author\"],\"type\":\"name\",\"zotero\":[\"presenter\"]},\"priority date\":{\"type\":\"date\",\"zotero\":[\"priorityDate\"]},\"priority numbers\":{\"type\":\"text\",\"zotero\":[\"priorityNumbers\"]},\"priorityDate\":{\"type\":\"date\",\"zotero\":[\"priorityDate\"]},\"priorityNumbers\":{\"type\":\"text\",\"zotero\":[\"priorityNumbers\"]},\"proceedings title\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"proceedingsTitle\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"producer\":{\"csl\":[\"producer\"],\"type\":\"name\",\"zotero\":[\"producer\"]},\"program title\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"programTitle\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"programmer\":{\"csl\":[\"author\"],\"type\":\"name\",\"zotero\":[\"programmer\"]},\"programming language\":{\"type\":\"text\",\"zotero\":[\"programmingLanguage\"]},\"programmingLanguage\":{\"type\":\"text\",\"zotero\":[\"programmingLanguage\"]},\"public law number\":{\"csl\":[\"number\"],\"type\":\"text\",\"zotero\":[\"number\"]},\"publicLawNumber\":{\"type\":\"text\",\"zotero\":[\"number\"]},\"publication date\":{\"csl\":[\"publication-date\"],\"type\":\"date\",\"zotero\":[\"publicationDate\"]},\"publication number\":{\"csl\":[\"publication-number\"],\"type\":\"text\",\"zotero\":[\"publicationNumber\"]},\"publication title\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"publication-date\":{\"csl\":[\"publication-date\"],\"type\":\"date\"},\"publication-number\":{\"csl\":[\"publication-number\"],\"type\":\"text\"},\"publicationDate\":{\"type\":\"date\",\"zotero\":[\"publicationDate\"]},\"publicationNumber\":{\"type\":\"text\",\"zotero\":[\"publicationNumber\"]},\"publicationTitle\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"publisher\":{\"csl\":[\"publisher\"],\"type\":\"text\",\"zotero\":[\"publisher\"]},\"publisher place\":{\"csl\":[\"publisher-place\"],\"type\":\"text\"},\"publisher-place\":{\"csl\":[\"publisher-place\"],\"type\":\"text\"},\"recipient\":{\"csl\":[\"recipient\"],\"type\":\"name\",\"zotero\":[\"recipient\"]},\"references\":{\"csl\":[\"references\"],\"type\":\"text\",\"zotero\":[\"references\"]},\"regnal year\":{\"type\":\"text\",\"zotero\":[\"regnalYear\"]},\"regnalYear\":{\"type\":\"text\",\"zotero\":[\"regnalYear\"]},\"regulation type\":{\"type\":\"text\",\"zotero\":[\"regulationType\",\"type\"]},\"regulationType\":{\"type\":\"text\",\"zotero\":[\"regulationType\",\"type\"]},\"regulatory body\":{\"type\":\"text\",\"zotero\":[\"regulatoryBody\",\"legislativeBody\"]},\"regulatoryBody\":{\"type\":\"text\",\"zotero\":[\"regulatoryBody\",\"legislativeBody\"]},\"reign\":{\"type\":\"text\",\"zotero\":[\"reign\"]},\"release\":{\"csl\":[\"edition\"],\"type\":\"text\",\"zotero\":[\"edition\"]},\"report number\":{\"csl\":[\"number\"],\"type\":\"text\",\"zotero\":[\"number\"]},\"report type\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"reportNumber\":{\"type\":\"text\",\"zotero\":[\"number\"]},\"reportType\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"reporter\":{\"type\":\"text\",\"zotero\":[\"reporter\",\"publicationTitle\"]},\"reporter volume\":{\"type\":\"text\",\"zotero\":[\"volume\"]},\"reporterVolume\":{\"type\":\"text\",\"zotero\":[\"volume\"]},\"resolution label\":{\"type\":\"text\",\"zotero\":[\"resolutionLabel\"]},\"resolutionLabel\":{\"type\":\"text\",\"zotero\":[\"resolutionLabel\"]},\"reviewed author\":{\"csl\":[\"reviewed-author\"],\"type\":\"name\",\"zotero\":[\"reviewedAuthor\"]},\"reviewed title\":{\"csl\":[\"reviewed-title\"],\"type\":\"text\"},\"reviewed-author\":{\"csl\":[\"reviewed-author\"],\"type\":\"name\"},\"reviewed-title\":{\"csl\":[\"reviewed-title\"],\"type\":\"text\"},\"reviewedAuthor\":{\"type\":\"name\",\"zotero\":[\"reviewedAuthor\"]},\"rights\":{\"csl\":[\"rights\"],\"type\":\"text\",\"zotero\":[\"rights\"]},\"running time\":{\"type\":\"text\",\"zotero\":[\"runningTime\"]},\"runningTime\":{\"type\":\"text\",\"zotero\":[\"runningTime\"]},\"scale\":{\"csl\":[\"scale\"],\"type\":\"text\",\"zotero\":[\"scale\"]},\"scriptwriter\":{\"csl\":[\"scriptwriter\"],\"type\":\"name\",\"zotero\":[\"scriptwriter\"]},\"section\":{\"csl\":[\"section\"],\"type\":\"text\",\"zotero\":[\"section\"]},\"series\":{\"type\":\"text\",\"zotero\":[\"series\"]},\"series editor\":{\"csl\":[\"collection-editor\"],\"type\":\"name\",\"zotero\":[\"seriesEditor\"]},\"series number\":{\"type\":\"text\",\"zotero\":[\"seriesNumber\"]},\"series text\":{\"type\":\"text\",\"zotero\":[\"seriesText\"]},\"series title\":{\"type\":\"text\",\"zotero\":[\"seriesTitle\"]},\"seriesEditor\":{\"type\":\"name\",\"zotero\":[\"seriesEditor\"]},\"seriesNumber\":{\"type\":\"text\",\"zotero\":[\"seriesNumber\"]},\"seriesText\":{\"type\":\"text\",\"zotero\":[\"seriesText\"]},\"seriesTitle\":{\"type\":\"text\",\"zotero\":[\"seriesTitle\"]},\"session\":{\"csl\":[\"chapter-number\"],\"type\":\"text\",\"zotero\":[\"session\"]},\"session type\":{\"type\":\"text\",\"zotero\":[\"sessionType\",\"type\"]},\"sessionType\":{\"type\":\"text\",\"zotero\":[\"sessionType\",\"type\"]},\"short title\":{\"csl\":[\"title-short\"],\"type\":\"text\",\"zotero\":[\"shortTitle\"]},\"shortTitle\":{\"type\":\"text\",\"zotero\":[\"shortTitle\"]},\"signing date\":{\"type\":\"date\",\"zotero\":[\"signingDate\"]},\"signingDate\":{\"type\":\"date\",\"zotero\":[\"signingDate\"]},\"source\":{\"csl\":[\"source\"],\"type\":\"text\",\"zotero\":[\"libraryCatalog\"]},\"sponsor\":{\"csl\":[\"author\"],\"type\":\"name\",\"zotero\":[\"sponsor\"]},\"status\":{\"csl\":[\"status\"],\"type\":\"text\",\"zotero\":[\"status\"]},\"studio\":{\"csl\":[\"publisher\"],\"type\":\"text\",\"zotero\":[\"publisher\"]},\"subject\":{\"csl\":[\"title\"],\"type\":\"text\",\"zotero\":[\"title\"]},\"submitted\":{\"csl\":[\"submitted\"],\"type\":\"date\",\"zotero\":[\"filingDate\"]},\"supplement\":{\"csl\":[\"supplement\"],\"type\":\"text\",\"zotero\":[\"supplementName\"]},\"supplement name\":{\"csl\":[\"supplement\"],\"type\":\"text\",\"zotero\":[\"supplementName\"]},\"supplementName\":{\"type\":\"text\",\"zotero\":[\"supplementName\"]},\"system\":{\"type\":\"text\",\"zotero\":[\"system\"]},\"testimony by\":{\"csl\":[\"testimonyBy\"],\"type\":\"name\",\"zotero\":[\"testimonyBy\"]},\"testimonyBy\":{\"csl\":[\"testimonyBy\"],\"type\":\"name\",\"zotero\":[\"testimonyBy\"]},\"thesis type\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"thesisType\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"title\":{\"csl\":[\"title\"],\"type\":\"text\",\"zotero\":[\"title\"]},\"title short\":{\"csl\":[\"title-short\"],\"type\":\"text\",\"zotero\":[\"shortTitle\"]},\"title-short\":{\"csl\":[\"title-short\"],\"type\":\"text\"},\"translator\":{\"csl\":[\"translator\"],\"type\":\"name\",\"zotero\":[\"translator\"]},\"treaty number\":{\"csl\":[\"number\"],\"type\":\"text\",\"zotero\":[\"number\"]},\"treatyNumber\":{\"type\":\"text\",\"zotero\":[\"number\"]},\"type\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"university\":{\"csl\":[\"publisher\"],\"type\":\"text\",\"zotero\":[\"publisher\"]},\"url\":{\"csl\":[\"URL\"],\"type\":\"text\",\"zotero\":[\"url\"]},\"version\":{\"csl\":[\"version\"],\"type\":\"text\",\"zotero\":[\"versionNumber\"]},\"version number\":{\"csl\":[\"version\"],\"type\":\"text\",\"zotero\":[\"versionNumber\"]},\"versionNumber\":{\"type\":\"text\",\"zotero\":[\"versionNumber\"]},\"video recording format\":{\"type\":\"text\",\"zotero\":[\"medium\"]},\"videoRecordingFormat\":{\"type\":\"text\",\"zotero\":[\"medium\"]},\"volume\":{\"csl\":[\"volume\"],\"type\":\"text\",\"zotero\":[\"volume\"]},\"volume title\":{\"csl\":[\"volume-title\"],\"type\":\"text\",\"zotero\":[\"volumeTitle\"]},\"volume-title\":{\"csl\":[\"volume-title\"],\"type\":\"text\"},\"volumeTitle\":{\"type\":\"text\",\"zotero\":[\"volumeTitle\"]},\"website title\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"website type\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"websiteTitle\":{\"type\":\"text\",\"zotero\":[\"publicationTitle\"]},\"websiteType\":{\"type\":\"text\",\"zotero\":[\"type\"]},\"words by\":{\"csl\":[\"wordsBy\"],\"type\":\"name\",\"zotero\":[\"wordsBy\"]},\"wordsBy\":{\"csl\":[\"wordsBy\"],\"type\":\"name\",\"zotero\":[\"wordsBy\"]},\"year as volume\":{\"type\":\"text\",\"zotero\":[\"yearAsVolume\"]},\"yearAsVolume\":{\"type\":\"text\",\"zotero\":[\"yearAsVolume\"]}}");

/***/ }),

/***/ "../gen/items/items.ts":
/*!*****************************!*\
  !*** ../gen/items/items.ts ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.simplifyForImport = exports.simplifyForExport = exports.label = exports.name = exports.valid = void 0;
const client_1 = __webpack_require__(/*! ../../content/client */ "../content/client.ts");
const jurism = client_1.client === 'jurism';
const zotero = !jurism;
exports.valid = {
    type: {
        artwork: true,
        attachment: true,
        audioRecording: true,
        bill: true,
        blogPost: true,
        book: true,
        bookSection: true,
        case: true,
        classic: jurism,
        computerProgram: true,
        conferencePaper: true,
        dictionaryEntry: true,
        document: true,
        email: true,
        encyclopediaArticle: true,
        film: true,
        forumPost: true,
        gazette: jurism,
        hearing: true,
        instantMessage: true,
        interview: true,
        journalArticle: true,
        letter: true,
        magazineArticle: true,
        manuscript: true,
        map: true,
        newspaperArticle: true,
        note: true,
        patent: true,
        podcast: true,
        presentation: true,
        radioBroadcast: true,
        regulation: jurism,
        report: true,
        standard: jurism,
        statute: true,
        thesis: true,
        treaty: jurism,
        tvBroadcast: true,
        videoRecording: true,
        webpage: true,
    },
    field: {
        artwork: {
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            artworkMedium: true,
            artworkSize: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            medium: true,
            multi: true,
            notes: true,
            publicationTitle: jurism,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
            websiteTitle: jurism,
        },
        attachment: {
            accessDate: true,
            dateAdded: true,
            dateModified: true,
            id: true,
            itemID: true,
            itemType: true,
            tags: true,
            title: true,
            url: true,
        },
        audioRecording: {
            ISBN: true,
            abstractNote: true,
            accessDate: true,
            album: jurism,
            archive: true,
            archiveLocation: true,
            attachments: true,
            audioRecordingFormat: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            edition: jurism,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            label: true,
            language: true,
            libraryCatalog: true,
            medium: true,
            multi: true,
            notes: true,
            numberOfVolumes: true,
            opus: jurism,
            originalDate: jurism,
            place: true,
            publicationTitle: jurism,
            publisher: true,
            release: jurism,
            rights: true,
            runningTime: true,
            seeAlso: true,
            seriesTitle: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
            volume: true,
        },
        bill: {
            abstractNote: true,
            accessDate: true,
            archiveLocation: jurism,
            assemblyNumber: jurism,
            attachments: true,
            billNumber: true,
            code: true,
            codePages: true,
            codeVolume: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            history: true,
            id: true,
            itemID: true,
            itemType: true,
            jurisdiction: jurism,
            language: true,
            legislativeBody: true,
            multi: true,
            notes: true,
            number: true,
            pages: true,
            publicationTitle: jurism,
            reporter: jurism,
            resolutionLabel: jurism,
            rights: true,
            section: true,
            seeAlso: true,
            seriesNumber: jurism,
            session: true,
            sessionType: jurism,
            shortTitle: true,
            tags: true,
            title: true,
            type: jurism,
            url: true,
            volume: true,
        },
        blogPost: {
            abstractNote: true,
            accessDate: true,
            attachments: true,
            blogTitle: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            multi: true,
            notes: true,
            publicationTitle: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            type: true,
            url: true,
            websiteType: true,
        },
        book: {
            ISBN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            edition: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            medium: jurism,
            multi: true,
            notes: true,
            numPages: true,
            numberOfVolumes: true,
            place: true,
            publisher: true,
            rights: true,
            seeAlso: true,
            series: true,
            seriesNumber: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
            volume: true,
            volumeTitle: jurism,
        },
        bookSection: {
            ISBN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            bookTitle: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            edition: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            multi: true,
            notes: true,
            numberOfVolumes: true,
            pages: true,
            place: true,
            publicationTitle: true,
            publisher: true,
            rights: true,
            seeAlso: true,
            series: true,
            seriesNumber: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
            volume: true,
            volumeTitle: jurism,
        },
        case: {
            abstractNote: true,
            accessDate: true,
            adminFlag: jurism,
            archive: jurism,
            archiveLocation: jurism,
            attachments: true,
            callNumber: jurism,
            caseName: true,
            court: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateDecided: true,
            dateModified: true,
            docketNumber: true,
            documentName: jurism,
            extra: true,
            filingDate: jurism,
            firstPage: true,
            history: true,
            id: true,
            issue: jurism,
            itemID: true,
            itemType: true,
            jurisdiction: jurism,
            language: true,
            multi: true,
            notes: true,
            number: true,
            pages: true,
            place: jurism,
            publicationDate: jurism,
            publicationTitle: jurism,
            publisher: jurism,
            reign: jurism,
            reporter: true,
            reporterVolume: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            supplementName: jurism,
            tags: true,
            title: true,
            url: true,
            volume: true,
            yearAsVolume: jurism,
        },
        classic: {
            abstractNote: jurism,
            accessDate: jurism,
            archive: jurism,
            archiveLocation: jurism,
            attachments: true,
            callNumber: jurism,
            creators: true,
            date: jurism,
            dateAdded: true,
            dateModified: true,
            extra: jurism,
            id: true,
            itemID: true,
            itemType: true,
            language: jurism,
            libraryCatalog: jurism,
            manuscriptType: jurism,
            multi: true,
            notes: true,
            numPages: jurism,
            place: jurism,
            rights: jurism,
            seeAlso: true,
            shortTitle: jurism,
            tags: true,
            title: jurism,
            type: jurism,
            url: jurism,
            volume: jurism,
        },
        computerProgram: {
            ISBN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            company: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            libraryCatalog: true,
            multi: true,
            notes: true,
            place: true,
            programmingLanguage: true,
            publisher: true,
            rights: true,
            seeAlso: true,
            seriesTitle: true,
            shortTitle: true,
            system: true,
            tags: true,
            title: true,
            url: true,
            versionNumber: true,
        },
        conferencePaper: {
            DOI: true,
            ISBN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            conferenceDate: jurism,
            conferenceName: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            institution: jurism,
            issue: jurism,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            multi: true,
            notes: true,
            pages: true,
            place: true,
            proceedingsTitle: true,
            publicationTitle: true,
            publisher: true,
            rights: true,
            seeAlso: true,
            series: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
            volume: true,
        },
        dictionaryEntry: {
            ISBN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            dictionaryTitle: true,
            edition: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            multi: true,
            notes: true,
            numberOfVolumes: true,
            pages: true,
            place: true,
            publicationTitle: true,
            publisher: true,
            rights: true,
            seeAlso: true,
            series: true,
            seriesNumber: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
            volume: true,
        },
        document: {
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            multi: true,
            notes: true,
            publisher: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
            versionNumber: jurism,
        },
        email: {
            abstractNote: true,
            accessDate: true,
            attachments: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            multi: true,
            notes: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            subject: true,
            tags: true,
            title: true,
            url: true,
        },
        encyclopediaArticle: {
            ISBN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            edition: true,
            encyclopediaTitle: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            multi: true,
            notes: true,
            numberOfVolumes: true,
            pages: true,
            place: true,
            publicationTitle: true,
            publisher: true,
            rights: true,
            seeAlso: true,
            series: true,
            seriesNumber: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
            volume: true,
        },
        film: {
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            distributor: true,
            extra: true,
            genre: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            medium: true,
            multi: true,
            notes: true,
            publisher: true,
            rights: true,
            runningTime: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            type: true,
            url: true,
            videoRecordingFormat: true,
        },
        forumPost: {
            abstractNote: true,
            accessDate: true,
            attachments: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            forumTitle: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            multi: true,
            notes: true,
            postType: true,
            publicationTitle: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            type: true,
            url: true,
        },
        gazette: {
            abstractNote: jurism,
            accessDate: jurism,
            attachments: true,
            code: jurism,
            codeNumber: jurism,
            creators: true,
            date: jurism,
            dateAdded: true,
            dateEnacted: jurism,
            dateModified: true,
            extra: jurism,
            history: jurism,
            id: true,
            itemID: true,
            itemType: true,
            jurisdiction: jurism,
            language: jurism,
            multi: true,
            nameOfAct: jurism,
            notes: true,
            number: jurism,
            pages: jurism,
            publicLawNumber: jurism,
            publicationDate: jurism,
            publisher: jurism,
            regnalYear: jurism,
            reign: jurism,
            rights: jurism,
            section: jurism,
            seeAlso: true,
            session: jurism,
            shortTitle: jurism,
            tags: true,
            title: jurism,
            url: jurism,
        },
        hearing: {
            abstractNote: true,
            accessDate: true,
            archiveLocation: jurism,
            assemblyNumber: jurism,
            attachments: true,
            committee: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            documentNumber: true,
            extra: true,
            history: true,
            id: true,
            itemID: true,
            itemType: true,
            jurisdiction: jurism,
            language: true,
            legislativeBody: true,
            meetingName: jurism,
            meetingNumber: jurism,
            multi: true,
            notes: true,
            number: true,
            numberOfVolumes: true,
            pages: true,
            place: true,
            publicationTitle: jurism,
            publisher: true,
            reporter: jurism,
            resolutionLabel: jurism,
            rights: true,
            seeAlso: true,
            seriesNumber: jurism,
            session: true,
            sessionType: jurism,
            shortTitle: true,
            tags: true,
            title: true,
            type: jurism,
            url: true,
            volume: jurism,
        },
        instantMessage: {
            abstractNote: true,
            accessDate: true,
            attachments: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            multi: true,
            notes: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
        },
        interview: {
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            interviewMedium: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            medium: true,
            multi: true,
            notes: true,
            place: jurism,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
        },
        journalArticle: {
            DOI: true,
            ISSN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            issue: true,
            itemID: true,
            itemType: true,
            journalAbbreviation: true,
            jurisdiction: jurism,
            language: true,
            libraryCatalog: true,
            multi: true,
            notes: true,
            pages: true,
            publicationTitle: true,
            rights: true,
            seeAlso: true,
            series: true,
            seriesText: true,
            seriesTitle: true,
            shortTitle: true,
            status: jurism,
            tags: true,
            title: true,
            url: true,
            volume: true,
        },
        letter: {
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            letterType: true,
            libraryCatalog: true,
            multi: true,
            notes: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            type: true,
            url: true,
        },
        magazineArticle: {
            ISSN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            issue: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            multi: true,
            notes: true,
            pages: true,
            place: jurism,
            publicationTitle: true,
            publisher: jurism,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
            volume: true,
        },
        manuscript: {
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            manuscriptType: true,
            multi: true,
            notes: true,
            numPages: true,
            place: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            type: true,
            url: true,
        },
        map: {
            ISBN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            edition: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            mapType: true,
            multi: true,
            notes: true,
            place: true,
            publisher: true,
            rights: true,
            scale: true,
            seeAlso: true,
            seriesTitle: true,
            shortTitle: true,
            tags: true,
            title: true,
            type: true,
            url: true,
        },
        newspaperArticle: {
            ISSN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            court: jurism,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            edition: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            jurisdiction: jurism,
            language: true,
            libraryCatalog: true,
            multi: true,
            newsCaseDate: jurism,
            notes: true,
            pages: true,
            place: true,
            publicationTitle: true,
            rights: true,
            section: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
        },
        note: {
            dateAdded: true,
            dateModified: true,
            id: true,
            itemID: true,
            itemType: true,
            note: true,
            tags: true,
        },
        patent: {
            abstractNote: true,
            accessDate: true,
            applicationNumber: true,
            assignee: true,
            attachments: true,
            country: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            filingDate: true,
            genre: jurism,
            id: true,
            issueDate: true,
            issuingAuthority: true,
            itemID: true,
            itemType: true,
            jurisdiction: jurism,
            language: true,
            legalStatus: true,
            multi: true,
            notes: true,
            number: true,
            pages: true,
            patentNumber: true,
            place: true,
            priorityDate: jurism,
            priorityNumbers: true,
            publicationDate: jurism,
            publicationNumber: jurism,
            references: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            type: jurism,
            url: true,
        },
        podcast: {
            abstractNote: true,
            accessDate: true,
            attachments: true,
            audioFileType: true,
            creators: true,
            date: jurism,
            dateAdded: true,
            dateModified: true,
            episodeNumber: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            medium: true,
            multi: true,
            notes: true,
            number: true,
            publisher: jurism,
            rights: true,
            runningTime: true,
            seeAlso: true,
            seriesTitle: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
        },
        presentation: {
            abstractNote: true,
            accessDate: true,
            attachments: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            meetingName: true,
            multi: true,
            notes: true,
            place: true,
            presentationType: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            type: true,
            url: true,
        },
        radioBroadcast: {
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            audioRecordingFormat: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            episodeNumber: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            medium: true,
            multi: true,
            network: true,
            notes: true,
            number: true,
            place: true,
            programTitle: true,
            publicationTitle: true,
            publisher: true,
            rights: true,
            runningTime: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
        },
        regulation: {
            abstractNote: jurism,
            accessDate: jurism,
            attachments: true,
            code: jurism,
            codeNumber: jurism,
            creators: true,
            date: jurism,
            dateAdded: true,
            dateEnacted: jurism,
            dateModified: true,
            extra: jurism,
            gazetteFlag: jurism,
            history: jurism,
            id: true,
            itemID: true,
            itemType: true,
            jurisdiction: jurism,
            language: jurism,
            legislativeBody: jurism,
            multi: true,
            nameOfAct: jurism,
            notes: true,
            number: jurism,
            pages: jurism,
            publicLawNumber: jurism,
            publicationDate: jurism,
            publisher: jurism,
            regulationType: jurism,
            regulatoryBody: jurism,
            rights: jurism,
            section: jurism,
            seeAlso: true,
            session: jurism,
            shortTitle: jurism,
            tags: true,
            title: jurism,
            type: jurism,
            url: jurism,
        },
        report: {
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            assemblyNumber: jurism,
            attachments: true,
            bookTitle: jurism,
            callNumber: true,
            committee: jurism,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            institution: true,
            itemID: true,
            itemType: true,
            jurisdiction: jurism,
            language: true,
            libraryCatalog: true,
            medium: jurism,
            multi: true,
            notes: true,
            number: true,
            pages: true,
            place: true,
            publicationTitle: jurism,
            publisher: true,
            reportNumber: true,
            reportType: true,
            rights: true,
            seeAlso: true,
            seriesNumber: jurism,
            seriesTitle: true,
            shortTitle: true,
            status: jurism,
            tags: true,
            title: true,
            type: true,
            url: true,
        },
        standard: {
            abstractNote: jurism,
            accessDate: jurism,
            archive: jurism,
            archiveLocation: jurism,
            attachments: true,
            callNumber: jurism,
            creators: true,
            date: jurism,
            dateAdded: true,
            dateModified: true,
            extra: jurism,
            id: true,
            itemID: true,
            itemType: true,
            jurisdiction: jurism,
            language: jurism,
            libraryCatalog: jurism,
            multi: true,
            notes: true,
            number: jurism,
            publisher: jurism,
            rights: jurism,
            seeAlso: true,
            shortTitle: jurism,
            tags: true,
            title: jurism,
            url: jurism,
            versionNumber: jurism,
        },
        statute: {
            abstractNote: true,
            accessDate: true,
            attachments: true,
            code: true,
            codeNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateAmended: jurism,
            dateEnacted: true,
            dateModified: true,
            extra: true,
            gazetteFlag: jurism,
            history: true,
            id: true,
            itemID: true,
            itemType: true,
            jurisdiction: jurism,
            language: true,
            multi: true,
            nameOfAct: true,
            notes: true,
            number: true,
            originalDate: jurism,
            pages: true,
            publicLawNumber: true,
            publicationDate: jurism,
            publisher: jurism,
            regnalYear: jurism,
            reign: jurism,
            rights: true,
            section: true,
            seeAlso: true,
            session: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
        },
        thesis: {
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            multi: true,
            notes: true,
            numPages: true,
            place: true,
            publisher: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            thesisType: true,
            title: true,
            type: true,
            university: true,
            url: true,
        },
        treaty: {
            abstractNote: jurism,
            accessDate: jurism,
            adoptionDate: jurism,
            archive: jurism,
            archiveLocation: jurism,
            attachments: true,
            callNumber: jurism,
            creators: true,
            date: jurism,
            dateAdded: true,
            dateModified: true,
            extra: jurism,
            id: true,
            itemID: true,
            itemType: true,
            language: jurism,
            libraryCatalog: jurism,
            multi: true,
            notes: true,
            number: jurism,
            openingDate: jurism,
            pages: jurism,
            parentTreaty: jurism,
            publicationTitle: jurism,
            publisher: jurism,
            reporter: jurism,
            rights: jurism,
            section: jurism,
            seeAlso: true,
            shortTitle: jurism,
            signingDate: jurism,
            supplementName: jurism,
            tags: true,
            title: jurism,
            treatyNumber: jurism,
            url: jurism,
            versionNumber: jurism,
            volume: jurism,
        },
        tvBroadcast: {
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            episodeNumber: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            medium: true,
            multi: true,
            network: true,
            notes: true,
            number: true,
            place: true,
            programTitle: true,
            publicationTitle: true,
            publisher: true,
            rights: true,
            runningTime: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            url: true,
            videoRecordingFormat: true,
        },
        videoRecording: {
            ISBN: true,
            abstractNote: true,
            accessDate: true,
            archive: true,
            archiveLocation: true,
            attachments: true,
            callNumber: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            libraryCatalog: true,
            medium: true,
            multi: true,
            notes: true,
            numberOfVolumes: true,
            place: true,
            publicationTitle: jurism,
            publisher: true,
            rights: true,
            runningTime: true,
            seeAlso: true,
            seriesTitle: true,
            shortTitle: true,
            studio: true,
            tags: true,
            title: true,
            url: true,
            videoRecordingFormat: true,
            volume: true,
            websiteTitle: jurism,
        },
        webpage: {
            abstractNote: true,
            accessDate: true,
            attachments: true,
            creators: true,
            date: true,
            dateAdded: true,
            dateModified: true,
            extra: true,
            id: true,
            itemID: true,
            itemType: true,
            language: true,
            multi: true,
            notes: true,
            publicationTitle: true,
            rights: true,
            seeAlso: true,
            shortTitle: true,
            tags: true,
            title: true,
            type: true,
            url: true,
            websiteTitle: true,
            websiteType: true,
        },
    },
};
exports.name = {
    type: {
        artwork: 'artwork',
        attachment: 'attachment',
        audiorecording: 'audioRecording',
        bill: 'bill',
        blogpost: 'blogPost',
        book: 'book',
        booksection: 'bookSection',
        case: 'case',
        classic: jurism && 'classic',
        computerprogram: 'computerProgram',
        conferencepaper: 'conferencePaper',
        dictionaryentry: 'dictionaryEntry',
        document: 'document',
        email: 'email',
        encyclopediaarticle: 'encyclopediaArticle',
        film: 'film',
        forumpost: 'forumPost',
        gazette: jurism && 'gazette',
        hearing: 'hearing',
        instantmessage: 'instantMessage',
        interview: 'interview',
        journalarticle: 'journalArticle',
        letter: 'letter',
        magazinearticle: 'magazineArticle',
        manuscript: 'manuscript',
        map: 'map',
        newspaperarticle: 'newspaperArticle',
        patent: 'patent',
        podcast: 'podcast',
        presentation: 'presentation',
        radiobroadcast: 'radioBroadcast',
        regulation: jurism && 'regulation',
        report: 'report',
        standard: jurism && 'standard',
        statute: 'statute',
        thesis: 'thesis',
        treaty: jurism && 'treaty',
        tvbroadcast: 'tvBroadcast',
        videorecording: 'videoRecording',
        webpage: 'webpage',
    },
    field: {
        abstractnote: 'abstractNote',
        accessdate: 'accessDate',
        adminflag: jurism && 'adminFlag',
        adoptiondate: jurism && 'adoptionDate',
        album: jurism && 'publicationTitle',
        applicationnumber: 'applicationNumber',
        archive: 'archive',
        archivelocation: 'archiveLocation',
        artworkmedium: 'medium',
        artworksize: 'artworkSize',
        assemblynumber: jurism && 'seriesNumber',
        assignee: 'assignee',
        audiofiletype: 'medium',
        audiorecordingformat: 'medium',
        billnumber: 'number',
        blogtitle: 'publicationTitle',
        booktitle: 'publicationTitle',
        callnumber: 'callNumber',
        casename: 'title',
        code: 'code',
        codenumber: 'codeNumber',
        codepages: 'pages',
        codevolume: 'volume',
        committee: 'committee',
        company: 'publisher',
        conferencedate: jurism && 'conferenceDate',
        conferencename: 'conferenceName',
        country: 'country',
        court: 'court',
        date: 'date',
        dateadded: 'dateAdded',
        dateamended: jurism && 'dateAmended',
        datedecided: 'date',
        dateenacted: 'date',
        datemodified: 'dateModified',
        dictionarytitle: 'publicationTitle',
        distributor: 'publisher',
        docketnumber: 'number',
        documentname: jurism && 'documentName',
        documentnumber: 'number',
        doi: 'DOI',
        edition: 'edition',
        encyclopediatitle: 'publicationTitle',
        episodenumber: 'number',
        extra: 'extra',
        filingdate: 'filingDate',
        firstpage: 'pages',
        forumtitle: 'publicationTitle',
        gazetteflag: jurism && 'gazetteFlag',
        genre: 'type',
        history: 'history',
        institution: zotero ? 'publisher' : 'institution',
        interviewmedium: 'medium',
        isbn: 'ISBN',
        issn: 'ISSN',
        issue: 'issue',
        issuedate: 'date',
        issuingauthority: 'issuingAuthority',
        journalabbreviation: 'journalAbbreviation',
        jurisdiction: jurism && 'jurisdiction',
        label: 'publisher',
        language: 'language',
        legalstatus: 'legalStatus',
        legislativebody: 'legislativeBody',
        lettertype: 'type',
        librarycatalog: 'libraryCatalog',
        manuscripttype: 'type',
        maptype: 'type',
        medium: 'medium',
        meetingname: 'meetingName',
        meetingnumber: jurism && 'meetingNumber',
        nameofact: 'title',
        network: 'publisher',
        newscasedate: jurism && 'newsCaseDate',
        number: 'number',
        numberofvolumes: 'numberOfVolumes',
        numpages: 'numPages',
        openingdate: jurism && 'openingDate',
        opus: jurism && 'opus',
        originaldate: jurism && 'originalDate',
        pages: 'pages',
        parenttreaty: jurism && 'parentTreaty',
        patentnumber: 'number',
        place: 'place',
        posttype: 'type',
        presentationtype: 'type',
        prioritydate: jurism && 'priorityDate',
        prioritynumbers: 'priorityNumbers',
        proceedingstitle: 'publicationTitle',
        programminglanguage: 'programmingLanguage',
        programtitle: 'publicationTitle',
        publicationdate: jurism && 'publicationDate',
        publicationnumber: jurism && 'publicationNumber',
        publicationtitle: 'publicationTitle',
        publiclawnumber: 'number',
        publisher: 'publisher',
        references: 'references',
        regnalyear: jurism && 'regnalYear',
        regulationtype: jurism && 'type',
        regulatorybody: jurism && 'legislativeBody',
        reign: jurism && 'reign',
        release: jurism && 'edition',
        reporter: zotero ? 'reporter' : 'publicationTitle',
        reportervolume: 'volume',
        reportnumber: 'number',
        reporttype: 'type',
        resolutionlabel: jurism && 'resolutionLabel',
        rights: 'rights',
        runningtime: 'runningTime',
        scale: 'scale',
        section: 'section',
        series: 'series',
        seriesnumber: 'seriesNumber',
        seriestext: 'seriesText',
        seriestitle: 'seriesTitle',
        session: 'session',
        sessiontype: jurism && 'type',
        shorttitle: 'shortTitle',
        signingdate: jurism && 'signingDate',
        status: jurism && 'status',
        studio: 'publisher',
        subject: 'title',
        supplementname: jurism && 'supplementName',
        system: 'system',
        thesistype: 'type',
        title: 'title',
        treatynumber: jurism && 'number',
        type: 'type',
        university: 'publisher',
        url: 'url',
        versionnumber: 'versionNumber',
        videorecordingformat: 'medium',
        volume: 'volume',
        volumetitle: jurism && 'volumeTitle',
        websitetitle: 'publicationTitle',
        websitetype: 'type',
        yearasvolume: jurism && 'yearAsVolume',
    },
};
// maps variable to its extra-field label
exports.label = {
    abstractnote: 'Abstract note',
    accessdate: 'Access date',
    adminflag: jurism && 'Admin flag',
    adoptiondate: jurism && 'Adoption date',
    album: jurism && 'Publication title',
    applicationnumber: 'Application number',
    archive: 'Archive',
    archivelocation: 'Archive location',
    artwork: 'Artwork',
    artworkmedium: 'Medium',
    artworksize: 'Artwork size',
    assemblynumber: jurism && 'Series number',
    assignee: 'Assignee',
    attachment: 'Attachment',
    audiofiletype: 'Medium',
    audiorecording: 'Audio recording',
    audiorecordingformat: 'Medium',
    bill: 'Bill',
    billnumber: 'Number',
    blogpost: 'Blog post',
    blogtitle: 'Publication title',
    book: 'Book',
    booksection: 'Book section',
    booktitle: 'Publication title',
    callnumber: 'Call number',
    case: 'Case',
    casename: 'Title',
    classic: jurism && 'Classic',
    code: 'Code',
    codenumber: 'Code number',
    codepages: 'Pages',
    codevolume: 'Volume',
    committee: 'Committee',
    company: 'Publisher',
    computerprogram: 'Computer program',
    conferencedate: jurism && 'Conference date',
    conferencename: 'Conference name',
    conferencepaper: 'Conference paper',
    country: 'Country',
    court: 'Court',
    date: 'Date',
    dateamended: jurism && 'Date amended',
    datedecided: 'Date',
    dateenacted: 'Date',
    dictionaryentry: 'Dictionary entry',
    dictionarytitle: 'Publication title',
    distributor: 'Publisher',
    docketnumber: 'Number',
    document: 'Document',
    documentname: jurism && 'Document name',
    documentnumber: 'Number',
    doi: 'DOI',
    edition: 'Edition',
    email: 'Email',
    encyclopediaarticle: 'Encyclopedia article',
    encyclopediatitle: 'Publication title',
    episodenumber: 'Number',
    extra: 'Extra',
    filingdate: 'Filing date',
    film: 'Film',
    firstpage: 'Pages',
    forumpost: 'Forum post',
    forumtitle: 'Publication title',
    gazette: jurism && 'Gazette',
    gazetteflag: jurism && 'Gazette flag',
    genre: 'Type',
    hearing: 'Hearing',
    history: 'History',
    instantmessage: 'Instant message',
    institution: zotero ? 'Publisher' : 'Institution',
    interview: 'Interview',
    interviewmedium: 'Medium',
    isbn: 'ISBN',
    issn: 'ISSN',
    issue: 'Issue',
    issuedate: 'Date',
    issuingauthority: 'Issuing authority',
    journalabbreviation: 'Journal abbreviation',
    journalarticle: 'Journal article',
    jurisdiction: jurism && 'Jurisdiction',
    label: 'Publisher',
    language: 'Language',
    legalstatus: 'Legal status',
    legislativebody: 'Legislative body',
    letter: 'Letter',
    lettertype: 'Type',
    librarycatalog: 'Library catalog',
    magazinearticle: 'Magazine article',
    manuscript: 'Manuscript',
    manuscripttype: 'Type',
    map: 'Map',
    maptype: 'Type',
    medium: 'Medium',
    meetingname: 'Meeting name',
    meetingnumber: jurism && 'Meeting number',
    nameofact: 'Title',
    network: 'Publisher',
    newscasedate: jurism && 'News case date',
    newspaperarticle: 'Newspaper article',
    number: 'Number',
    numberofvolumes: 'Number of volumes',
    numpages: 'Number of pages',
    openingdate: jurism && 'Opening date',
    opus: jurism && 'Opus',
    originaldate: jurism && 'Original date',
    pages: 'Pages',
    parenttreaty: jurism && 'Parent treaty',
    patent: 'Patent',
    patentnumber: 'Number',
    place: 'Place',
    podcast: 'Podcast',
    posttype: 'Type',
    presentation: 'Presentation',
    presentationtype: 'Type',
    prioritydate: jurism && 'Priority date',
    prioritynumbers: 'Priority numbers',
    proceedingstitle: 'Publication title',
    programminglanguage: 'Programming language',
    programtitle: 'Publication title',
    publicationdate: jurism && 'Publication date',
    publicationnumber: jurism && 'Publication number',
    publicationtitle: 'Publication title',
    publiclawnumber: 'Number',
    publisher: 'Publisher',
    radiobroadcast: 'Radio broadcast',
    references: 'References',
    regnalyear: jurism && 'Regnal year',
    regulation: jurism && 'Regulation',
    regulationtype: jurism && 'Type',
    regulatorybody: jurism && 'Legislative body',
    reign: jurism && 'Reign',
    release: jurism && 'Edition',
    report: 'Report',
    reporter: zotero ? 'Reporter' : 'Publication title',
    reportervolume: 'Volume',
    reportnumber: 'Number',
    reporttype: 'Type',
    resolutionlabel: jurism && 'Resolution label',
    rights: 'Rights',
    runningtime: 'Running time',
    scale: 'Scale',
    section: 'Section',
    series: 'Series',
    seriesnumber: 'Series number',
    seriestext: 'Series text',
    seriestitle: 'Series title',
    session: 'Session',
    sessiontype: jurism && 'Type',
    shorttitle: 'Short title',
    signingdate: jurism && 'Signing date',
    standard: jurism && 'Standard',
    status: jurism && 'Status',
    statute: 'Statute',
    studio: 'Publisher',
    subject: 'Title',
    supplementname: jurism && 'Supplement name',
    system: 'System',
    thesis: 'Thesis',
    thesistype: 'Type',
    title: 'Title',
    treaty: jurism && 'Treaty',
    treatynumber: jurism && 'Number',
    tvbroadcast: 'Tv broadcast',
    type: 'Type',
    university: 'Publisher',
    url: 'Url',
    versionnumber: 'Version number',
    videorecording: 'Video recording',
    videorecordingformat: 'Medium',
    volume: 'Volume',
    volumetitle: jurism && 'Volume title',
    webpage: 'Webpage',
    websitetitle: 'Publication title',
    websitetype: 'Type',
    yearasvolume: jurism && 'Year as volume',
};
function unalias(item) {
    delete item.inPublications;
    let v;
    if (v = (item.artworkMedium || item.audioRecordingFormat || item.videoRecordingFormat || item.interviewMedium || item.audioFileType))
        item.medium = v;
    delete item.artworkMedium;
    delete item.audioRecordingFormat;
    delete item.videoRecordingFormat;
    delete item.interviewMedium;
    delete item.audioFileType;
    if (v = (item.label || item.company || item.distributor || item.network || item.university || item.studio))
        item.publisher = v;
    delete item.label;
    delete item.company;
    delete item.distributor;
    delete item.network;
    delete item.university;
    delete item.studio;
    if (v = (item.billNumber || item.docketNumber || item.documentNumber || item.patentNumber || item.episodeNumber || item.reportNumber || item.publicLawNumber))
        item.number = v;
    delete item.billNumber;
    delete item.docketNumber;
    delete item.documentNumber;
    delete item.patentNumber;
    delete item.episodeNumber;
    delete item.reportNumber;
    delete item.publicLawNumber;
    if (v = (item.codeVolume || item.reporterVolume))
        item.volume = v;
    delete item.codeVolume;
    delete item.reporterVolume;
    if (v = (item.codePages || item.firstPage))
        item.pages = v;
    delete item.codePages;
    delete item.firstPage;
    if (v = (item.blogTitle || item.bookTitle || item.proceedingsTitle || item.dictionaryTitle || item.encyclopediaTitle || item.forumTitle || item.programTitle || item.websiteTitle))
        item.publicationTitle = v;
    delete item.blogTitle;
    delete item.bookTitle;
    delete item.proceedingsTitle;
    delete item.dictionaryTitle;
    delete item.encyclopediaTitle;
    delete item.forumTitle;
    delete item.programTitle;
    delete item.websiteTitle;
    if (v = (item.websiteType || item.genre || item.postType || item.letterType || item.manuscriptType || item.mapType || item.presentationType || item.reportType || item.thesisType))
        item.type = v;
    delete item.websiteType;
    delete item.genre;
    delete item.postType;
    delete item.letterType;
    delete item.manuscriptType;
    delete item.mapType;
    delete item.presentationType;
    delete item.reportType;
    delete item.thesisType;
    if (v = (item.caseName || item.subject || item.nameOfAct))
        item.title = v;
    delete item.caseName;
    delete item.subject;
    delete item.nameOfAct;
    if (v = (item.dateDecided || item.issueDate || item.dateEnacted))
        item.date = v;
    delete item.dateDecided;
    delete item.issueDate;
    delete item.dateEnacted;
    if (zotero) {
        if (item.institution)
            item.publisher = item.institution;
        delete item.institution;
    }
    if (jurism) {
        if (v = (item.album || item.reporter))
            item.publicationTitle = v;
        delete item.album;
        delete item.reporter;
        if (item.release)
            item.edition = item.release;
        delete item.release;
        if (item.assemblyNumber)
            item.seriesNumber = item.assemblyNumber;
        delete item.assemblyNumber;
        if (v = (item.sessionType || item.regulationType))
            item.type = v;
        delete item.sessionType;
        delete item.regulationType;
        if (item.regulatoryBody)
            item.legislativeBody = item.regulatoryBody;
        delete item.regulatoryBody;
        if (item.treatyNumber)
            item.number = item.treatyNumber;
        delete item.treatyNumber;
    }
}
// import & export translators expect different creator formats... nice
function simplifyForExport(item, dropAttachments = false) {
    unalias(item);
    if (item.filingDate)
        item.filingDate = item.filingDate.replace(/^0000-00-00 /, '');
    if (item.creators) {
        for (const creator of item.creators) {
            if (creator.fieldMode) {
                creator.name = creator.name || creator.lastName;
                delete creator.lastName;
                delete creator.firstName;
                delete creator.fieldMode;
            }
        }
    }
    if (item.itemType === 'attachment' || item.itemType === 'note') {
        delete item.attachments;
        delete item.notes;
    }
    else {
        item.attachments = (!dropAttachments && item.attachments) || [];
        item.notes = item.notes ? item.notes.map(note => note.note || note) : [];
    }
    return item;
}
exports.simplifyForExport = simplifyForExport;
function simplifyForImport(item) {
    unalias(item);
    if (item.creators) {
        for (const creator of item.creators) {
            if (creator.name) {
                creator.lastName = creator.lastName || creator.name;
                creator.fieldMode = 1;
                delete creator.firstName;
                delete creator.name;
            }
            if (!jurism)
                delete creator.multi;
        }
    }
    if (!jurism)
        delete item.multi;
    return item;
}
exports.simplifyForImport = simplifyForImport;


/***/ }),

/***/ "../gen/preferences/defaults.json":
/*!****************************************!*\
  !*** ../gen/preferences/defaults.json ***!
  \****************************************/
/*! exports provided: DOIandURL, automaticTags, asciiBibLaTeX, ascii, asciiBibTeX, autoExport, quickCopyMode, citeCommand, quickCopyPandocBrackets, citekeyFormat, citekeyFold, keyConflictPolicy, auxImport, keyScope, exportBibTeXStrings, importBibTeXStrings, bibtexParticleNoOp, skipFields, bibtexURL, warnBulkModify, postscript, strings, autoAbbrev, autoAbbrevStyle, autoExportIdleWait, cacheFlushInterval, csquotes, rawLaTag, rawImports, skipWords, verbatimFields, jabrefFormat, qualityReport, biblatexExtendedDateFormat, biblatexExtendedNameFormat, exportTitleCase, exportBraceProtection, retainCache, importSentenceCase, importCaseProtection, autoExportDelay, correctTitleCase, tagCorrectedTitleCase, itemObserverDelay, autoPinDelay, parseParticles, citeprocNoteCitekey, import, importExtra, importCitationKey, extraMergeTeX, extraMergeCSL, extraMergeCitekeys, importJabRefStrings, importJabRefAbbreviations, autoExportPathReplaceDirSep, autoExportPathReplaceSpace, autoExportPathReplaceDiacritics, postscriptOverride, scrubDatabase, ignorePostscriptErrors, debugLogDir, testing, kuroshiro, relativeFilePaths, git, mapUnicode, mapText, mapMath, newTranslatorsAskRestart, workers, platform, default */
/*! all exports used */
/***/ (function(module) {

module.exports = JSON.parse("{\"DOIandURL\":\"both\",\"automaticTags\":true,\"asciiBibLaTeX\":false,\"ascii\":\"\",\"asciiBibTeX\":true,\"autoExport\":\"immediate\",\"quickCopyMode\":\"latex\",\"citeCommand\":\"cite\",\"quickCopyPandocBrackets\":false,\"citekeyFormat\":\"​[auth:lower][shorttitle3_3][year]\",\"citekeyFold\":true,\"keyConflictPolicy\":\"keep\",\"auxImport\":false,\"keyScope\":\"library\",\"exportBibTeXStrings\":\"off\",\"importBibTeXStrings\":true,\"bibtexParticleNoOp\":false,\"skipFields\":\"\",\"bibtexURL\":\"off\",\"warnBulkModify\":10,\"postscript\":\"\",\"strings\":\"\",\"autoAbbrev\":false,\"autoAbbrevStyle\":\"\",\"autoExportIdleWait\":10,\"cacheFlushInterval\":5,\"csquotes\":\"\",\"rawLaTag\":\"#LaTeX\",\"rawImports\":false,\"skipWords\":\"a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum\",\"verbatimFields\":\"url,doi,file,eprint,verba,verbb,verbc\",\"jabrefFormat\":0,\"qualityReport\":false,\"biblatexExtendedDateFormat\":true,\"biblatexExtendedNameFormat\":false,\"exportTitleCase\":true,\"exportBraceProtection\":true,\"retainCache\":false,\"importSentenceCase\":\"on+guess\",\"importCaseProtection\":\"as-needed\",\"autoExportDelay\":1,\"correctTitleCase\":\"off\",\"tagCorrectedTitleCase\":\"#sentence-cased\",\"itemObserverDelay\":5,\"autoPinDelay\":0,\"parseParticles\":true,\"citeprocNoteCitekey\":false,\"import\":true,\"importExtra\":true,\"importCitationKey\":true,\"extraMergeTeX\":true,\"extraMergeCSL\":true,\"extraMergeCitekeys\":true,\"importJabRefStrings\":true,\"importJabRefAbbreviations\":true,\"autoExportPathReplaceDirSep\":\"-\",\"autoExportPathReplaceSpace\":\" \",\"autoExportPathReplaceDiacritics\":false,\"postscriptOverride\":\"\",\"scrubDatabase\":false,\"ignorePostscriptErrors\":true,\"debugLogDir\":\"\",\"testing\":false,\"kuroshiro\":false,\"relativeFilePaths\":false,\"git\":\"config\",\"mapUnicode\":\"conservative\",\"mapText\":\"\",\"mapMath\":\"\",\"newTranslatorsAskRestart\":true,\"workers\":1,\"platform\":\"\"}");

/***/ }),

/***/ "../node_modules/@retorquere/bibtex-parser/chunker.js":
/*!************************************************************!*\
  !*** ../node_modules/@retorquere/bibtex-parser/chunker.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Original work by Henrik Muehe (c) 2010
//
// CommonJS port by Mikola Lysenko 2013
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
class ParseError extends Error {
    constructor(message, parser) {
        message += ` @ ${parser.pos}`;
        if (parser.parsing)
            message += ` in ${JSON.stringify(parser.parsing)}`;
        super(message);
        this.name = 'ParseError';
    }
}
// tslint:disable-next-line prefer-template
const letter = new RegExp('[' + [
    // Letter, Uppercase
    /\u0041-\u005A\u00C0-\u00D6\u00D8-\u00DE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178-\u0179\u017B\u017D\u0181-\u0182\u0184\u0186-\u0187\u0189-\u018B\u018E-\u0191\u0193-\u0194\u0196-\u0198\u019C-\u019D\u019F-\u01A0\u01A2\u01A4\u01A6-\u01A7\u01A9\u01AC\u01AE-\u01AF\u01B1-\u01B3\u01B5\u01B7-\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A-\u023B\u023D-\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E-\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9-\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0-\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E-\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D-\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A/.source,
    // Letter, Titlecase
    /\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC/.source,
    // Letter, Lowercase
    /\u0061-\u007A\u00B5\u00DF-\u00F6\u00F8-\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137-\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148-\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C-\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA-\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9-\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC-\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF-\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F-\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0-\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB-\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE-\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6-\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FC7\u1FD0-\u1FD3\u1FD6-\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6-\u1FF7\u210A\u210E-\u210F\u2113\u212F\u2134\u2139\u213C-\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65-\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73-\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3-\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A/.source,
    // Letter, Modifier
    /\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5-\u06E6\u07F4-\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C-\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D-\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C-\uA69D\uA717-\uA71F\uA770\uA788\uA7F8-\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3-\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E-\uFF9F/.source,
    // Letter, Other
    /\u00AA\u00BA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0-\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60-\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0-\u0CE1\u0CF1-\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E45\u0E81-\u0E82\u0E84\u0E87-\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065-\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE-\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5-\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A-\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/.source,
].join('') + ']');
class BibtexParser {
    parse(input, options = {}) {
        // this._progress = 0
        this.pos = 0;
        this.input = input;
        this.max_entries = options.max_entries || 0;
        this.entries = 0;
        this.parsing = null;
        this.chunks = [];
        if (options.async) {
            return this.bibtexAsync().then(() => this.chunks);
        }
        else {
            this.bibtex();
            return this.chunks;
        }
    }
    isWhitespace(s, horizontalOnly = false) {
        return (s === ' ' || s === '\t' || (!horizontalOnly && (s === '\r' || s === '\n')));
    }
    match(s) {
        this.skipWhitespace();
        if (this.input.substr(this.pos, s.length) !== s) {
            throw new ParseError(`Token mismatch, expected ${JSON.stringify(s)}, found ${JSON.stringify(this.input.substr(this.pos, 20))}...`, this); // tslint:disable-line no-magic-numbers
        }
        this.pos += s.length;
        this.skipWhitespace();
    }
    tryMatch(s) {
        this.skipWhitespace();
        return (this.input.substr(this.pos, s.length) === s);
        // this.skipWhitespace()
    }
    skipWhitespace() {
        while (this.isWhitespace(this.input[this.pos]))
            this.pos++;
        // shady
        if (this.input[this.pos] === '%') {
            while (this.input[this.pos] !== '\n')
                this.pos++;
            this.skipWhitespace();
        }
    }
    value_braces() {
        let bracecount = 0;
        this.match('{');
        const start = this.pos;
        let math = false;
        while (true) {
            switch (this.input[this.pos]) {
                case '\\':
                    this.pos += 1;
                    break;
                case '{':
                    bracecount++;
                    break;
                case '}':
                    if (bracecount === 0) {
                        if (math)
                            throw new ParseError('Unclosed math section', this);
                        this.pos++;
                        return this.input.substring(start, this.pos - 1);
                    }
                    bracecount--;
                    break;
                case '$':
                    math = !math;
                    break;
            }
            this.pos++;
            if (this.pos >= this.input.length) {
                throw new ParseError(`Unterminated brace-value ${JSON.stringify(this.input.substr(start, 20))}`, this); // tslint:disable-line no-magic-numbers
            }
        }
    }
    value_quotes() {
        this.match('"');
        const start = this.pos;
        let bracecount = 0;
        while (true) {
            switch (this.input[this.pos]) {
                case '\\':
                    this.pos += 1;
                    break;
                case '{':
                    bracecount++;
                    break;
                case '}':
                    bracecount--;
                    break;
                case '"':
                    if (bracecount <= 0) {
                        this.pos++;
                        return this.input.substring(start, this.pos - 1);
                    }
            }
            this.pos++;
            if (this.pos >= this.input.length) {
                throw new ParseError(`Unterminated quote-value ${JSON.stringify(this.input.substr(start, 20))}`, this); // tslint:disable-line no-magic-numbers
            }
        }
    }
    single_value() {
        if (this.tryMatch('{')) {
            return this.value_braces();
        }
        else if (this.tryMatch('"')) {
            return this.value_quotes();
        }
        else {
            return this.key();
        }
    }
    value() {
        const values = [];
        values.push(this.single_value());
        while (this.tryMatch('#')) {
            this.match('#');
            values.push(this.single_value());
        }
        return values.join('');
    }
    key(allowUnicode = false) {
        const start = this.pos;
        while (true) {
            if (this.pos === this.input.length) {
                throw new ParseError('Runaway key', this);
            }
            if (this.input[this.pos].match(/['a-zA-Z0-9&;_:\\./-]/)) {
                this.pos++;
            }
            else if (allowUnicode && this.input[this.pos].match(letter)) {
                this.pos++;
            }
            else {
                return this.input.substring(start, this.pos);
            }
        }
    }
    key_equals_value() {
        const key = this.key();
        if (!this.tryMatch('=')) {
            throw new ParseError(`... = value expected, equals sign missing: ${JSON.stringify(this.input.substr(this.pos, 20))}...`, this); // tslint:disable-line no-magic-numbers
        }
        this.match('=');
        const val = this.value();
        return [key, val];
    }
    key_value_list() {
        this.key_equals_value();
        while (this.tryMatch(',')) {
            this.match(',');
            // fixes problems with commas at the end of a list
            if (this.tryMatch('}')) {
                break;
            }
            this.key_equals_value();
        }
    }
    entry(d) {
        this.parsing = this.key(true);
        this.match(',');
        this.key_value_list();
    }
    directive() {
        this.match('@');
        return `@${this.key()}`.toLowerCase();
    }
    string() {
        this.key_equals_value();
    }
    preamble() {
        this.value();
    }
    comment() {
        while (this.isWhitespace(this.input[this.pos], true))
            this.pos++;
        if (this.input[this.pos] === '{') {
            this.value_braces();
            return;
        }
        while (this.input[this.pos] !== '\n' && this.pos < this.input.length)
            this.pos++;
    }
    /*
    private progress() {
      const progress = Math.round((this.pos / this.input.length * 100) / 5) * 5 // tslint:disable-line no-magic-numbers
      if (this._progress !== progress) {
        this._progress = progress
        process.stdout.write(` (${this._progress}%) `)
      }
    }
    */
    hasMore() {
        if (this.max_entries && this.entries >= this.max_entries)
            return false;
        return (this.pos < this.input.length);
    }
    bibtex() {
        while (this.hasMore()) {
            this.parseNext();
        }
    }
    bibtexAsync() {
        return this.hasMore() ? (new Promise(resolve => resolve(this.parseNext()))).then(() => this.bibtexAsync()) : Promise.resolve(null);
    }
    parseNext() {
        // this.progress()
        const chunk = {
            offset: {
                pos: this.pos,
                line: this.input.substring(0, this.pos).split('\n').length - 1,
            },
            error: null,
            text: null,
        };
        this.skipWhitespace();
        if (this.pos >= this.input.length)
            return;
        let guard = '';
        try {
            const d = this.directive();
            switch (d) {
                case '@string':
                    this.match('{');
                    this.string();
                    this.match('}');
                    chunk.stringDeclaration = true;
                    break;
                case '@preamble':
                    this.match('{');
                    this.preamble();
                    this.match('}');
                    chunk.preamble = true;
                    break;
                case '@comment':
                    this.comment();
                    chunk.comment = true;
                    break;
                default:
                    if (this.tryMatch('{')) {
                        guard = '{}';
                    }
                    else if (this.tryMatch('(')) {
                        guard = '()';
                    }
                    else {
                        throw new ParseError(`Token mismatch, expected '{' or '(', found ${JSON.stringify(this.input.substr(this.pos, 20))}...`, this); // tslint:disable-line no-magic-numbers
                    }
                    this.match(guard[0]);
                    this.entry(d);
                    this.match(guard[1]);
                    chunk.entry = true;
                    this.entries++;
                    break;
            }
        }
        catch (err) {
            if (err.name !== 'ParseError')
                throw err;
            chunk.error = err.message,
                // skip ahead to the next @ and try again
                this.pos = chunk.offset.pos + 1;
            while (this.pos < this.input.length && this.input[this.pos] !== '@')
                this.pos++;
        }
        const text = this.input.substring(chunk.offset.pos, this.pos);
        const last = this.chunks.length - 1;
        if (chunk.error && this.chunks.length && this.chunks[last].error) {
            this.chunks[last].text += text;
        }
        else {
            chunk.text = text;
            this.chunks.push(chunk);
        }
    }
}
/**
 * Reads the bibtex input and splits it into separate chunks of `@string`s, `@comment`s, and bibtex entries. Useful for detecting if a file is bibtex file and for filtering out basic errors that would
 * make the more sophisticated [[bibtex.parse]] reject the whole file
 *
 * @returns array of chunks, with markers for type and errors (if any) found.
 */
function parse(input, options = {}) {
    return (new BibtexParser).parse(input, options);
}
exports.parse = parse;
//# sourceMappingURL=chunker.js.map

/***/ }),

/***/ "../node_modules/@retorquere/bibtex-parser/grammar.js":
/*!************************************************************!*\
  !*** ../node_modules/@retorquere/bibtex-parser/grammar.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { Bibliography: peg$parseBibliography },
      peg$startRuleFunction  = peg$parseBibliography,

      peg$c0 = function(r) {
          return {
            kind: 'Bibliography',
            loc: location(),
            source: text(),
            children: r,
          }
        },
      peg$c1 = "@",
      peg$c2 = peg$literalExpectation("@", false),
      peg$c3 = "comment",
      peg$c4 = peg$literalExpectation("comment", true),
      peg$c5 = function(v) {
          return {
            kind: 'BracedComment',
            loc: location(),
            source: text(),
            value: v.slice(1, -1),
          }
        },
      peg$c6 = /^[^\n\r]/,
      peg$c7 = peg$classExpectation(["\n", "\r"], true, false),
      peg$c8 = /^[\n\r]/,
      peg$c9 = peg$classExpectation(["\n", "\r"], false, false),
      peg$c10 = function(v) {
          return {
            kind: 'LineComment',
            loc: location(),
            source: text(),
            value: normalizeWhitespace(v),
          }
          },
      peg$c11 = /^[^@]/,
      peg$c12 = peg$classExpectation(["@"], true, false),
      peg$c13 = function(v) {
          return {
            kind: 'NonEntryText',
            loc: location(),
            source: text(),
            value: normalizeWhitespace(v),
          }
        },
      peg$c14 = function(n) { return n; },
      peg$c15 = "{",
      peg$c16 = peg$literalExpectation("{", false),
      peg$c17 = /^[^{}]/,
      peg$c18 = peg$classExpectation(["{", "}"], true, false),
      peg$c19 = "}",
      peg$c20 = peg$literalExpectation("}", false),
      peg$c21 = function(comment) { return '{' + comment.join('') + '}' },
      peg$c22 = /^[A-Za-z]/,
      peg$c23 = peg$classExpectation([["A", "Z"], ["a", "z"]], false, false),
      peg$c24 = /^[({]/,
      peg$c25 = peg$classExpectation(["(", "{"], false, false),
      peg$c26 = /^[})]/,
      peg$c27 = peg$classExpectation(["}", ")"], false, false),
      peg$c28 = function(type, id, fields) {
          return {
            kind: 'Entry',
            id: id || '',
            type: type.toLowerCase(),
            loc: location(),
            source: text(),
            fields: fields,
          }
        },
      peg$c29 = "preamble",
      peg$c30 = peg$literalExpectation("preamble", true),
      peg$c31 = function(opener, v, closer) {
          switch (opener + closer) {
            case '{}':
            case '()':
              break
            default:
              throw new Error(`Unbalanced opener-closer for preamble: ${opener}...${closer}`)
              break
          }
          return {
            kind: 'PreambleExpression',
            loc: location(),
            source: text(),
            value: v.reduce((a, b) => a.concat(b), []),
          }
        },
      peg$c32 = "string",
      peg$c33 = peg$literalExpectation("string", true),
      peg$c34 = function(k, v) {
          return {
            kind: 'StringDeclaration',
            loc: location(),
            source: text(),
            name: k,
            value: v.reduce((a, b) => a.concat(b), []),
          }
        },
      peg$c35 = /^[^ \t\r\n,]/,
      peg$c36 = peg$classExpectation([" ", "\t", "\r", "\n", ","], true, false),
      peg$c37 = ",",
      peg$c38 = peg$literalExpectation(",", false),
      peg$c39 = function(id) { return id; },
      peg$c40 = function(name) { return isVerbatimField(name) && unnestFields.includes(name) },
      peg$c41 = function(name, value) {
          // because this was abused so much, many processors treat double-outer-braces as single
          return {
            kind: 'Field',
            loc: location(),
            source: text(),
            name: name,
            loc: location(),
            value: [ protect(value) ]
          }
        },
      peg$c42 = function(name) { return isVerbatimField(name) },
      peg$c43 = function(name, value) {
          return {
            kind: 'Field',
            loc: location(),
            source: text(),
            name: name,
            loc: location(),
            value: [ protect(value) ]
          }
        },
      peg$c44 = function(name, value) {
          // because this was abused so much, many processors treat double-outer-braces as single
          if (unnestFields.includes(name) && Array.isArray(value) && value.length === 1 && value[0].kind === 'Block') {
            if (options.unnestMode === 'preserve') {
              value[0].case = 'preserve'
            } else {
              value = value[0].value
            }
          }

          return {
            kind: 'Field',
            loc: location(),
            source: text(),
            name: name,
            value: value,
          }
        },
      peg$c45 = /^[_:a-zA-Z0-9\-]/,
      peg$c46 = peg$classExpectation(["_", ":", ["a", "z"], ["A", "Z"], ["0", "9"], "-"], false, false),
      peg$c47 = function(name) { return name.toLowerCase() },
      peg$c48 = "\"",
      peg$c49 = peg$literalExpectation("\"", false),
      peg$c50 = function(v) {
          v = v || {
            kind: 'Text',
            loc: location(),
            source: text(),
            value: '',
            mode: 'verbatim',
          }
          v.mode = 'verbatim'
          return basicTextConversions(v)
        },
      peg$c51 = function(v) {
          return basicTextConversions({
            kind: 'Text',
            loc: location(),
            source: text(),
            value: v.join('').trim(),
            mode: 'verbatim',
          })
        },
      peg$c52 = function(v) { return v },
      peg$c53 = function(v) { return '{' + v.join('') + '}' },
      peg$c54 = function() { return math.set(false) },
      peg$c55 = function(v) {
          return v.reduce((a, b) => a.concat(b), []);
        },
      peg$c56 = function(v) { return v; },
      peg$c57 = /^[^\^_${}\\]/,
      peg$c58 = peg$classExpectation(["^", "_", "$", "{", "}", "\\"], true, false),
      peg$c59 = function(v) {
          return basicTextConversions({
            kind: 'Text',
            loc: location(),
            source: text(),
            value: normalizeWhitespace(v),
            mode: math.on ? 'math' : 'text',
          })
        },
      peg$c60 = /^[^\^_${}"\\]/,
      peg$c61 = peg$classExpectation(["^", "_", "$", "{", "}", "\"", "\\"], true, false),
      peg$c62 = /^[0-9]/,
      peg$c63 = peg$classExpectation([["0", "9"]], false, false),
      peg$c64 = function(v) {
          return {
            kind: 'Number',
            loc: location(),
            source: text(),
            value: parseInt(v, 10),
          }
        },
      peg$c65 = function(v) {
          return {
            kind: 'StringReference',
            loc: location(),
            source: text(),
            name: v,
          }
        },
      peg$c66 = "{\\",
      peg$c67 = peg$literalExpectation("{\\", false),
      peg$c68 = /^[a-zA-Z0-9]/,
      peg$c69 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"]], false, false),
      peg$c70 = "\\",
      peg$c71 = peg$literalExpectation("\\", false),
      peg$c72 = /^[ij]/,
      peg$c73 = peg$classExpectation(["i", "j"], false, false),
      peg$c74 = function(mark, char) {
          return {
            kind: 'DiacriticCommand',
            loc: location(),
            source: text(),
            mark: mark,
            dotless: !!char[1],
            character: char[1] || char[0],
          }
        },
      peg$c75 = function(v) {
          const block = {
            kind: 'Block',
            loc: location(),
            source: text(),
            value: v,
            markup: {},
            case: 'protect',
          }

          let cmd = v.length && v[0].kind.endsWith('Command') ? v[0] : null
          let cmdblock = cmd && cmd.kind === 'RegularCommand' && cmd.arguments.required.length && cmd.arguments.required[0] && cmd.arguments.required[0].kind === 'Block' && cmd.arguments.required[0]

          // https://github.com/retorquere/zotero-better-bibtex/issues/541#issuecomment-240156274
          if (cmd) {
            delete block.case

            // command with a block cancels out case protection with containing block
            // if a smallcaps block has set case to 'preserve' we want to keep this
            if (cmdblock && cmdblock.case === 'protect') delete cmdblock.case

            // \sl, \it etc
            if (markup[cmd.command]) block.markup[markup[cmd.command]] = true
          }

          return block
        },
      peg$c76 = function() { return !math.on },
      peg$c77 = "$",
      peg$c78 = peg$literalExpectation("$", false),
      peg$c79 = "$$",
      peg$c80 = peg$literalExpectation("$$", false),
      peg$c81 = function(mode) { return math.set(true) },
      peg$c82 = function(mode, v) { return math.set(false) },
      peg$c83 = function(mode, v) {
          return {
            kind: mode == '$$' ? 'DisplayMath' : 'InlineMath',
            loc: location(),
            source: text(),
            value: v,
            case: 'protect',
            markup: {},
          }
        },
      peg$c84 = "%",
      peg$c85 = peg$literalExpectation("%", false),
      peg$c86 = /^[^\r\n]/,
      peg$c87 = peg$classExpectation(["\r", "\n"], true, false),
      peg$c88 = function(v) {
          return {
            kind: 'LineComment',
            loc: location(),
            source: text(),
            value: v,
          }
        },
      peg$c89 = /^[_\^]/,
      peg$c90 = peg$classExpectation(["_", "^"], false, false),
      peg$c91 = function(mode, v) {
          if (v.kind === 'Block') v = v.value

          return {
            kind: mode === '_' ? 'SubscriptCommand' : 'SuperscriptCommand',
            loc: location(),
            source: text(),
            value: v,
          }
        },
      peg$c92 = function(mark, v) {
          return {
            kind: 'RegularCommand',
            loc: location(),
            source: text(),
            command: mark,
            arguments: {
              optional: [],
              required: [ protect(v) ],
            },
          }
        },
      peg$c93 = /^[^A-Za-z0-9\t\r\n]/,
      peg$c94 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"], "\t", "\r", "\n"], true, false),
      peg$c95 = function(v) {
          return {
            kind: 'SymbolCommand',
            loc: location(),
            source: text(),
            command: v,
          }
        },
      peg$c96 = function(v) { return verbatimCommands.includes(v) && (has_arguments[v] === 2) },
      peg$c97 = function(v, optional, req1, req2) {
          return {
            kind: 'RegularCommand',
            loc: location(),
            source: text(),
            command: v,
            arguments: {
              optional: optional,
              required: [protect(req1), protect(req2)],
            },
          }
        },
      peg$c98 = function(v) { return verbatimCommands.includes(v) && (has_arguments[v] === 1) },
      peg$c99 = function(v, optional, req) {
          const cmd  = {
            kind: 'RegularCommand',
            loc: location(),
            source: text(),
            command: v,
            arguments: {
              optional: optional,
              required: [protect(req)],
            },
          }
          return cmd
        },
      peg$c100 = function(v) { return (has_arguments[v] === 2) },
      peg$c101 = function(v, optional, req1, req2) {
          return {
            kind: 'RegularCommand',
            loc: location(),
            source: text(),
            command: v,
            arguments: {
              optional: optional,
              required: [req1, req2],
            },
          }
        },
      peg$c102 = function(v) { return (has_arguments[v] === 1) },
      peg$c103 = function(v, optional, req) {
          if (req.kind === 'Block') {
            switch (v) {
              case 'textsuperscript':
              case 'sp':
                req.markup.sup = true
                break
              case 'textsubscript':
              case 'sb':
                req.markup.sub = true
                break
              case 'textsc':
                req.markup.smallCaps = true
                break
              case 'enquote':
              case 'mkbibquote':
                req.markup.enquote = true
                break
              case 'textbf':
              case 'mkbibbold':
                req.markup.bold = true
                break
              case 'emph':
              case 'textit':
              case 'mkbibitalic':
              case 'mkbibemph':
                req.markup.italics = true
                break
              case 'section':
                req.markup.h1 = true
                break
              case 'subsection':
                req.markup.h2 = true
                break
            }
          }

          // ignore case stuff on bibcyr
          if (v === 'bibcyr') delete req.case

          return {
            kind: 'RegularCommand',
            loc: location(),
            source: text(),
            command: v,
            arguments: {
              optional: optional,
              required: [req],
            }
          }
        },
      peg$c104 = function(v, optional) {
          return {
            kind: 'RegularCommand',
            loc: location(),
            source: text(),
            command: v,
            arguments: {
              optional: optional,
              required: [],
            }
          }
        },
      peg$c105 = "[",
      peg$c106 = peg$literalExpectation("[", false),
      peg$c107 = /^[^\]]/,
      peg$c108 = peg$classExpectation(["]"], true, false),
      peg$c109 = "]",
      peg$c110 = peg$literalExpectation("]", false),
      peg$c111 = function(v) {
          return basicTextConversions({
            kind: 'Text', // this isn't really correct but I don't need these right now
            loc: location(),
            source: text(),
            value: v,
            mode: math.on ? 'math' : 'text',
          })
        },
      peg$c112 = /^[^ \t\^_${}\\]/,
      peg$c113 = peg$classExpectation([" ", "\t", "^", "_", "$", "{", "}", "\\"], true, false),
      peg$c114 = function(v) {
          return basicTextConversions({
            kind: 'Text',
            loc: location(),
            source: text(),
            value: normalizeWhitespace([v]),
            mode: math.on ? 'math' : 'text',
          })
        },
      peg$c115 = /^[a-zA-Z\-_]/,
      peg$c116 = peg$classExpectation([["a", "z"], ["A", "Z"], "-", "_"], false, false),
      peg$c117 = /^[a-zA-Z0-9\-&_:]/,
      peg$c118 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "-", "&", "_", ":"], false, false),
      peg$c119 = /^['`"=~\^.]/,
      peg$c120 = peg$classExpectation(["'", "`", "\"", "=", "~", "^", "."], false, false),
      peg$c121 = /^['`"=~\^.cbuvdrHk]/,
      peg$c122 = peg$classExpectation(["'", "`", "\"", "=", "~", "^", ".", "c", "b", "u", "v", "d", "r", "H", "k"], false, false),
      peg$c123 = "=",
      peg$c124 = peg$literalExpectation("=", false),
      peg$c125 = "#",
      peg$c126 = peg$literalExpectation("#", false),
      peg$c127 = /^[\r\n]/,
      peg$c128 = peg$classExpectation(["\r", "\n"], false, false),
      peg$c129 = peg$otherExpectation("Mandatory Horizontal Whitespace"),
      peg$c130 = /^[ \t]/,
      peg$c131 = peg$classExpectation([" ", "\t"], false, false),
      peg$c132 = peg$otherExpectation("Optional Horizontal Whitespace"),
      peg$c133 = peg$otherExpectation("Mandatory Vertical Whitespace"),
      peg$c134 = peg$otherExpectation("Optional Vertical Whitespace"),
      peg$c135 = peg$otherExpectation("Mandatory Whitespace"),
      peg$c136 = /^[ \t\n\r]/,
      peg$c137 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false),
      peg$c138 = peg$otherExpectation("Optional Whitespace"),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseBibliography() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse__();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseNode();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseNode();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseComment() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 64) {
      s1 = peg$c1;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c2); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 7).toLowerCase() === peg$c3) {
          s3 = input.substr(peg$currPos, 7);
          peg$currPos += 7;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__h();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseBracedComment();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c5(s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 64) {
        s1 = peg$c1;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c2); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 7).toLowerCase() === peg$c3) {
            s3 = input.substr(peg$currPos, 7);
            peg$currPos += 7;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse__h();
            if (s4 !== peg$FAILED) {
              s5 = [];
              if (peg$c6.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c7); }
              }
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                if (peg$c6.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c7); }
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                if (peg$c8.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c9); }
                }
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  if (peg$c8.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c9); }
                  }
                }
                if (s6 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c10(s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (peg$c11.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c12); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          if (peg$c6.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c7); }
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (peg$c6.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c7); }
            }
          }
          if (s3 !== peg$FAILED) {
            s2 = [s2, s3];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          if (peg$c8.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            if (peg$c8.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c9); }
            }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c13(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parseNode() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseComment();
    if (s1 === peg$FAILED) {
      s1 = peg$parsePreambleExpression();
      if (s1 === peg$FAILED) {
        s1 = peg$parseStringDeclaration();
        if (s1 === peg$FAILED) {
          s1 = peg$parseEntry();
        }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c14(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseBracedComment() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c15;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c16); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$c17.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }
      if (s3 === peg$FAILED) {
        s3 = peg$parseBracedComment();
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$c17.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c18); }
        }
        if (s3 === peg$FAILED) {
          s3 = peg$parseBracedComment();
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 125) {
          s3 = peg$c19;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c20); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c21(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEntry() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 64) {
      s1 = peg$c1;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c2); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        if (peg$c22.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c23); }
        }
        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c22.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c23); }
            }
          }
        } else {
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            if (peg$c24.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c25); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseEntryId();
                if (s7 === peg$FAILED) {
                  s7 = null;
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse__();
                  if (s8 !== peg$FAILED) {
                    s9 = [];
                    s10 = peg$parseField();
                    while (s10 !== peg$FAILED) {
                      s9.push(s10);
                      s10 = peg$parseField();
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse__();
                      if (s10 !== peg$FAILED) {
                        if (peg$c26.test(input.charAt(peg$currPos))) {
                          s11 = input.charAt(peg$currPos);
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c27); }
                        }
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parse__();
                          if (s12 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c28(s3, s7, s9);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsePreambleExpression() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 64) {
      s1 = peg$c1;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c2); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 8).toLowerCase() === peg$c29) {
          s3 = input.substr(peg$currPos, 8);
          peg$currPos += 8;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c30); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            if (peg$c24.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c25); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parseBlock();
                if (s8 === peg$FAILED) {
                  s8 = peg$parseMath();
                  if (s8 === peg$FAILED) {
                    s8 = peg$parseCommand();
                    if (s8 === peg$FAILED) {
                      s8 = peg$parseText();
                    }
                  }
                }
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parseBlock();
                  if (s8 === peg$FAILED) {
                    s8 = peg$parseMath();
                    if (s8 === peg$FAILED) {
                      s8 = peg$parseCommand();
                      if (s8 === peg$FAILED) {
                        s8 = peg$parseText();
                      }
                    }
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse__();
                  if (s8 !== peg$FAILED) {
                    if (peg$c26.test(input.charAt(peg$currPos))) {
                      s9 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c27); }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse__();
                      if (s10 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c31(s5, s7, s9);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseStringDeclaration() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 64) {
      s1 = peg$c1;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c2); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 6).toLowerCase() === peg$c32) {
          s3 = input.substr(peg$currPos, 6);
          peg$currPos += 6;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c33); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            if (peg$c24.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c25); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse__();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseVariableName();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseFieldSeparator();
                  if (s8 !== peg$FAILED) {
                    s9 = [];
                    s10 = peg$parseRegularValue();
                    if (s10 !== peg$FAILED) {
                      while (s10 !== peg$FAILED) {
                        s9.push(s10);
                        s10 = peg$parseRegularValue();
                      }
                    } else {
                      s9 = peg$FAILED;
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse__();
                      if (s10 !== peg$FAILED) {
                        if (peg$c26.test(input.charAt(peg$currPos))) {
                          s11 = input.charAt(peg$currPos);
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c27); }
                        }
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parse__();
                          if (s12 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c34(s7, s9);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEntryId() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parse__();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (peg$c35.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c36); }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        if (peg$c35.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c36); }
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c37;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c38); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c39(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseField() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = peg$parseFieldName();
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c40(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseFieldSeparator();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 123) {
            s4 = peg$c15;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c16); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            peg$silentFails++;
            if (input.charCodeAt(peg$currPos) === 123) {
              s6 = peg$c15;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c16); }
            }
            peg$silentFails--;
            if (s6 !== peg$FAILED) {
              peg$currPos = s5;
              s5 = void 0;
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseVerbatimFieldValue();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s7 = peg$c19;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c20); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseFieldTerminator();
                  if (s8 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c41(s1, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseFieldName();
      if (s1 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s2 = peg$c42(s1);
        if (s2) {
          s2 = void 0;
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseFieldSeparator();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseVerbatimFieldValue();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseFieldTerminator();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c43(s1, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseFieldName();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseFieldSeparator();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseFieldValue();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseFieldTerminator();
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c44(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parseFieldName() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parse__();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (peg$c45.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c46); }
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c45.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseVerbatimFieldValue() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c48;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c49); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseTextNoQuotes();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c48;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c49); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c50(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c15;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseVerbatimText();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseVerbatimText();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 125) {
            s3 = peg$c19;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c51(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseVerbatimText() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    if (peg$c17.test(input.charAt(peg$currPos))) {
      s3 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s3 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c18); }
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$c17.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c18); }
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c52(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c15;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseVerbatimText();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseVerbatimText();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 125) {
            s3 = peg$c19;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c53(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseFieldValue() {
    var s0, s1, s2, s3;

    s0 = peg$parseNumber();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      peg$savedPos = peg$currPos;
      s1 = peg$c54();
      if (s1) {
        s1 = void 0;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseRegularValue();
        if (s3 === peg$FAILED) {
          s3 = peg$parseStringValue();
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseRegularValue();
          if (s3 === peg$FAILED) {
            s3 = peg$parseStringValue();
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c55(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseRegularValue() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c48;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c49); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseBlock();
      if (s3 === peg$FAILED) {
        s3 = peg$parseMath();
        if (s3 === peg$FAILED) {
          s3 = peg$parseCommand();
          if (s3 === peg$FAILED) {
            s3 = peg$parseTextNoQuotes();
          }
        }
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseBlock();
        if (s3 === peg$FAILED) {
          s3 = peg$parseMath();
          if (s3 === peg$FAILED) {
            s3 = peg$parseCommand();
            if (s3 === peg$FAILED) {
              s3 = peg$parseTextNoQuotes();
            }
          }
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c48;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c49); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseConcat();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c56(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c15;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseBlock();
        if (s3 === peg$FAILED) {
          s3 = peg$parseMath();
          if (s3 === peg$FAILED) {
            s3 = peg$parseCommand();
            if (s3 === peg$FAILED) {
              s3 = peg$parseText();
            }
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseBlock();
          if (s3 === peg$FAILED) {
            s3 = peg$parseMath();
            if (s3 === peg$FAILED) {
              s3 = peg$parseCommand();
              if (s3 === peg$FAILED) {
                s3 = peg$parseText();
              }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 125) {
            s3 = peg$c19;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseConcat();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c56(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseStringReference();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseConcat();
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c56(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parseStringValue() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseStringReference();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseConcat();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c56(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseText() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c57.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c58); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c57.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c58); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c59(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseTextNoQuotes() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c60.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c61); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c60.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c61); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c59(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseNumber() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    if (peg$c62.test(input.charAt(peg$currPos))) {
      s3 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s3 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c63); }
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$c62.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c63); }
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c64(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseStringReference() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseVariableName();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c65(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseBlock() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c66) {
      s1 = peg$c66;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c67); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseExtendedDiacritic();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 !== peg$FAILED) {
          if (peg$c68.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c69); }
          }
          if (s4 === peg$FAILED) {
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 92) {
              s5 = peg$c70;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c71); }
            }
            if (s5 !== peg$FAILED) {
              if (peg$c72.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c73); }
              }
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s5 = peg$c19;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c20); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c74(s2, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c15;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseText();
        if (s3 === peg$FAILED) {
          s3 = peg$parseCommand();
          if (s3 === peg$FAILED) {
            s3 = peg$parseBlock();
            if (s3 === peg$FAILED) {
              s3 = peg$parseMath();
            }
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseText();
          if (s3 === peg$FAILED) {
            s3 = peg$parseCommand();
            if (s3 === peg$FAILED) {
              s3 = peg$parseBlock();
              if (s3 === peg$FAILED) {
                s3 = peg$parseMath();
              }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 125) {
            s3 = peg$c19;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c75(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseMath() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    peg$savedPos = peg$currPos;
    s1 = peg$c76();
    if (s1) {
      s1 = void 0;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 36) {
        s2 = peg$c77;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c78); }
      }
      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c79) {
          s2 = peg$c79;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c80); }
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c81(s2);
        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseText();
          if (s5 === peg$FAILED) {
            s5 = peg$parseCommand();
            if (s5 === peg$FAILED) {
              s5 = peg$parseBlock();
            }
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseText();
            if (s5 === peg$FAILED) {
              s5 = peg$parseCommand();
              if (s5 === peg$FAILED) {
                s5 = peg$parseBlock();
              }
            }
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 36) {
              s5 = peg$c77;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c78); }
            }
            if (s5 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c79) {
                s5 = peg$c79;
                peg$currPos += 2;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c80); }
              }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s6 = peg$c82(s2, s4);
              if (s6) {
                s6 = void 0;
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c83(s2, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLineComment() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 37) {
      s1 = peg$c84;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c85); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__h();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        if (peg$c86.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c87); }
        }
        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c86.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c87); }
            }
          }
        } else {
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseEOL();
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseEOL();
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c88(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCommand() {
    var s0;

    s0 = peg$parseScriptCommand();
    if (s0 === peg$FAILED) {
      s0 = peg$parseDiacriticCommand();
      if (s0 === peg$FAILED) {
        s0 = peg$parseRegularCommand();
        if (s0 === peg$FAILED) {
          s0 = peg$parseSymbolCommand();
        }
      }
    }

    return s0;
  }

  function peg$parseScriptCommand() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c89.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c90); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__h();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseRequiredArgument();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c91(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDiacriticCommand() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c70;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c71); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSimpleDiacritic();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 !== peg$FAILED) {
          if (peg$c68.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c69); }
          }
          if (s4 === peg$FAILED) {
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 92) {
              s5 = peg$c70;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c71); }
            }
            if (s5 !== peg$FAILED) {
              if (peg$c72.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c73); }
              }
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c74(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c70;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c71); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseExtendedDiacritic();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 123) {
            s3 = peg$c15;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c16); }
          }
          if (s3 !== peg$FAILED) {
            if (peg$c68.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c69); }
            }
            if (s4 === peg$FAILED) {
              s4 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 92) {
                s5 = peg$c70;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c71); }
              }
              if (s5 !== peg$FAILED) {
                if (peg$c72.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c73); }
                }
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s5 = peg$c19;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c20); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c74(s2, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 92) {
          s1 = peg$c70;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c71); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseExtendedDiacritic();
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            peg$silentFails++;
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c15;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c16); }
            }
            peg$silentFails--;
            if (s4 !== peg$FAILED) {
              peg$currPos = s3;
              s3 = void 0;
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseRegularValue();
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c92(s2, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parseSymbolCommand() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c70;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c71); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      if (peg$c93.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c94); }
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c95(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseRegularCommand() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c70;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c71); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      if (peg$c22.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c22.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c23); }
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c96(s2);
        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseOptionalArgument();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseOptionalArgument();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse__h();
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              peg$silentFails++;
              if (input.charCodeAt(peg$currPos) === 123) {
                s7 = peg$c15;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c16); }
              }
              peg$silentFails--;
              if (s7 !== peg$FAILED) {
                peg$currPos = s6;
                s6 = void 0;
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseVerbatimFieldValue();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseVerbatimFieldValue();
                  if (s8 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c97(s2, s4, s7, s8);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c70;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c71); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        if (peg$c22.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c23); }
        }
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (peg$c22.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c23); }
            }
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = peg$currPos;
          s3 = peg$c98(s2);
          if (s3) {
            s3 = void 0;
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseOptionalArgument();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseOptionalArgument();
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse__h();
              if (s5 !== peg$FAILED) {
                s6 = peg$currPos;
                peg$silentFails++;
                if (input.charCodeAt(peg$currPos) === 123) {
                  s7 = peg$c15;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c16); }
                }
                peg$silentFails--;
                if (s7 !== peg$FAILED) {
                  peg$currPos = s6;
                  s6 = void 0;
                } else {
                  s6 = peg$FAILED;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseVerbatimFieldValue();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c99(s2, s4, s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 92) {
          s1 = peg$c70;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c71); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = [];
          if (peg$c22.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c23); }
          }
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              if (peg$c22.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c23); }
              }
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s2 = input.substring(s2, peg$currPos);
          } else {
            s2 = s3;
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s3 = peg$c100(s2);
            if (s3) {
              s3 = void 0;
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              s5 = peg$parseOptionalArgument();
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                s5 = peg$parseOptionalArgument();
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parse__h();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseRequiredArgument();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parseRequiredArgument();
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c101(s2, s4, s6, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 92) {
            s1 = peg$c70;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c71); }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$currPos;
            s3 = [];
            if (peg$c22.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c23); }
            }
            if (s4 !== peg$FAILED) {
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                if (peg$c22.test(input.charAt(peg$currPos))) {
                  s4 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c23); }
                }
              }
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              s2 = input.substring(s2, peg$currPos);
            } else {
              s2 = s3;
            }
            if (s2 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s3 = peg$c102(s2);
              if (s3) {
                s3 = void 0;
              } else {
                s3 = peg$FAILED;
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parseOptionalArgument();
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parseOptionalArgument();
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parse__h();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseRequiredArgument();
                    if (s6 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c103(s2, s4, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 92) {
              s1 = peg$c70;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c71); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$currPos;
              s3 = [];
              if (peg$c22.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c23); }
              }
              if (s4 !== peg$FAILED) {
                while (s4 !== peg$FAILED) {
                  s3.push(s4);
                  if (peg$c22.test(input.charAt(peg$currPos))) {
                    s4 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c23); }
                  }
                }
              } else {
                s3 = peg$FAILED;
              }
              if (s3 !== peg$FAILED) {
                s2 = input.substring(s2, peg$currPos);
              } else {
                s2 = s3;
              }
              if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parseOptionalArgument();
                while (s4 !== peg$FAILED) {
                  s3.push(s4);
                  s4 = peg$parseOptionalArgument();
                }
                if (s3 !== peg$FAILED) {
                  s4 = peg$parse__();
                  if (s4 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c104(s2, s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseOptionalArgument() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c105;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c106); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__h();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        if (peg$c107.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c108); }
        }
        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c107.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c108); }
            }
          }
        } else {
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__h();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s5 = peg$c109;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c110); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c111(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseRequiredArgument() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parse__h();
    if (s1 !== peg$FAILED) {
      if (peg$c112.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c113); }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c114(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseCommand();
      if (s1 === peg$FAILED) {
        s1 = peg$parseBlock();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c52(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parseVariableName() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (peg$c115.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c116); }
    }
    if (s2 !== peg$FAILED) {
      s3 = [];
      if (peg$c117.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c118); }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        if (peg$c117.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c118); }
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    return s0;
  }

  function peg$parseSimpleDiacritic() {
    var s0;

    if (peg$c119.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c120); }
    }

    return s0;
  }

  function peg$parseExtendedDiacritic() {
    var s0;

    if (peg$c121.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c122); }
    }

    return s0;
  }

  function peg$parseFieldSeparator() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse__();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 61) {
        s2 = peg$c123;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c124); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFieldTerminator() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parse__();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 44) {
        s2 = peg$c37;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__h();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseLineComment();
          if (s5 === peg$FAILED) {
            s5 = peg$parseEOL();
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseLineComment();
            if (s5 === peg$FAILED) {
              s5 = peg$parseEOL();
            }
          }
          if (s4 !== peg$FAILED) {
            s1 = [s1, s2, s3, s4];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseConcat() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse__();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 35) {
        s2 = peg$c125;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c126); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEOL() {
    var s0;

    if (peg$c127.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c128); }
    }

    return s0;
  }

  function peg$parse_h() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c130.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c131); }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (peg$c130.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c131); }
        }
      }
    } else {
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c129); }
    }

    return s0;
  }

  function peg$parse__h() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c130.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c131); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (peg$c130.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c131); }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c132); }
    }

    return s0;
  }

  function peg$parse_v() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c127.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c128); }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (peg$c127.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c128); }
        }
      }
    } else {
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c133); }
    }

    return s0;
  }

  function peg$parse__v() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c127.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c128); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (peg$c127.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c128); }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c134); }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c136.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c137); }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (peg$c136.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c137); }
        }
      }
    } else {
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c135); }
    }

    return s0;
  }

  function peg$parse__() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c136.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c137); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (peg$c136.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c137); }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c138); }
    }

    return s0;
  }


    /*
      MIT License

      Copyright (c) 2017 Derek P Sifford, parts copyright (c) 2019 by Emiliano Heyns

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    */

    const markup = {
      sl: 'italics',
      em: 'italics',
      it: 'italics',
      itshape: 'italics',

      bf: 'bold',
      bfseries: 'bold',

      sc: 'smallCaps',
      scshape: 'smallCaps',

      tt: 'fixedWidth',
      rm: 'roman',
      sf: 'sansSerif',
      verb: 'verbatim',
    }

    const unnestFields = (options.unnestFields || []).map(field => field.toLowerCase())
    const verbatimFields = (options.verbatimFields || [ 'urlraw', 'url', 'doi', 'file', 'files', 'eprint', 'verba', 'verbb', 'verbc' ]).map(field => typeof field === 'string' ? field.toLowerCase() : field)
    const verbatimCommands = (options.verbatimCommands || ['url', 'href'])

    function isVerbatimField(name) {
      return verbatimFields.find(p => (typeof p === 'string') ? name === p : name.match(p))
    }

    function normalizeWhitespace(textArr) {
      return textArr.reduce((prev, curr) => {
        if (/\s/.test(curr)) {
          if (/\s/.test(prev[prev.length - 1])) {
            return prev;
          } else {
            return prev + ' ';
          }
        }
        return prev + curr;
      }, '');
    }

    const has_arguments = {
      ElsevierGlyph: 1,
      end: 1,
      begin: 1,
      bibcyr: 1,
      bibstring: 1,
      chsf: 1,
      cite: 1,
      cyrchar: 1,
      ding: 1,
      emph: 1,
      enquote: 1,
      frac: 2,
      href: 2,
      hspace: 1,
      mathrm: 1,
      mbox: 1,
      mkbibbold: 1,
      mkbibemph: 1,
      mkbibitalic: 1,
      mkbibquote: 1,
      noopsort: 1,
      ocirc: 1,
      section: 1,
      sb: 1,
      sp: 1,
      subsection: 1,
      t: 1,
      textbf: 1,
      textit: 1,
      textrm: 1,
      textsc: 1,
      textsubscript: 1,
      textsuperscript: 1,
      url: 1,
      vphantom: 1,
      vspace: 1,
    }

    if (options.combiningDiacritics) {
      for (const cmd of options.combiningDiacritics) {
        has_arguments[cmd] = 1
      }
    }

    function say() {
      console.log(JSON.stringify(Array.from(arguments), null, 2))
      return true
    }

    const math = {
      on: false,

      set: function(state) {
        this.on = state
        return true
      }
    }

    function basicTextConversions(node) {
      if (node.kind !== 'Text') throw new Error(node.kind + ' is not a Text node')

      switch (node.mode) {
        case 'verbatim':
          break

        case 'math':
          node.value = node.value.replace(/~/g, '\u00A0')
          break

        case 'text':
          node.value = node.value
            .replace(/---/g, '\u2014')
            .replace(/--/g, '\u2013')
            .replace(/</g, '\u00A1')
            .replace(/>/g, '\u00BF')
            .replace(/~/g, '\u00A0')
            .replace(/``/g, options.markup.enquote.open)
            .replace(/''/g, options.markup.enquote.close)
          break

        default:
          throw new Error(`Unexpected text mode ${node.mode}`)
      }

      return node
    }

    function protect(v) {
      let source
      if (Array.isArray(v)) {
        source = v.map(e => e.source).join('')
      } else {
        v = [ v ]
        source = v.source
      }

      return {
        kind: 'Block',
        value: v,
        markup: {},
        case: 'protect',
        source: source,
      }
    }


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};


/***/ }),

/***/ "../node_modules/@retorquere/bibtex-parser/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/@retorquere/bibtex-parser/index.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ast = exports.parse = void 0;
const bibtex = __webpack_require__(/*! ./grammar */ "../node_modules/@retorquere/bibtex-parser/grammar.js");
const chunker_1 = __webpack_require__(/*! ./chunker */ "../node_modules/@retorquere/bibtex-parser/chunker.js");
const unicode2latex_1 = __webpack_require__(/*! unicode2latex */ "../node_modules/unicode2latex/index.js");
class ParserError extends Error {
    constructor(message, node) {
        super(message); // 'Error' breaks prototype chain here
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = this.constructor.name;
        this.node = node;
    }
}
class TeXError extends Error {
    constructor(message, node, text) {
        super(message); // 'Error' breaks prototype chain here
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = this.constructor.name;
        this.node = node;
        this.text = text;
    }
}
const charCategories = __webpack_require__(/*! xregexp/tools/output/categories */ "../node_modules/xregexp/tools/output/categories.js");
const charClass = {
    Lu: charCategories.filter(cat => ['Uppercase_Letter', 'Titlecase_Letter'].includes(cat.alias)).map(cat => cat.bmp).join(''),
    Ll: charCategories.find(cat => cat.alias === 'Lowercase_Letter').bmp,
    LnotLu: charCategories.filter(cat => ['Lowercase_Letter', 'Modifier_Letter', 'Other_Letter', 'Nonspacing_Mark', 'Spacing_Mark', 'Decimal_Number', 'Letter_Number'].includes(cat.alias)).map(cat => cat.bmp).join(''),
    P: charCategories.find(cat => cat.alias === 'Punctuation').bmp,
    L: charCategories.find(cat => cat.alias === 'Letter').bmp,
    N: charCategories.filter(cat => ['Decimal_Number', 'Letter_Number'].includes(cat.alias)).map(cat => cat.bmp).join(''),
    AlphaNum: charCategories.filter(cat => ['Letter', 'Decimal_Number', 'Letter_Number'].includes(cat.alias)).map(cat => cat.bmp).join(''),
    LC: charCategories.find(cat => cat.alias === 'Cased_Letter').bmp,
};
const marker = {
    and: '\u0001',
    comma: '\u0002',
    space: '\u0003',
    literal: '\u0004',
    markup: '\u0005',
    re: {
        and: /./,
        comma: /./,
        space: /./,
        literal: /./,
        literalName: /./,
    },
};
marker.re = {
    and: new RegExp(marker.and, 'g'),
    comma: new RegExp(marker.comma, 'g'),
    space: new RegExp(marker.space, 'g'),
    literal: new RegExp(marker.literal, 'g'),
    literalName: new RegExp(`^${marker.literal}[^${marker.literal}]*${marker.literal}$`),
};
const preserveCase = {
    leadingCap: new RegExp(`^[${charClass.Lu}][${charClass.LnotLu}]+[${charClass.P}]?$`),
    allCaps: new RegExp(`^[${charClass.Lu}${charClass.N}]{2,}$`),
    allLower: new RegExp(`^[${charClass.Ll}${charClass.N}]{2,}$`),
    joined: new RegExp(`^[${charClass.Lu}][${charClass.LnotLu}]*([-+][${charClass.L}${charClass.N}]+)*[${charClass.P}]*$`),
    hasUppercase: new RegExp(`[${charClass.Lu}]`),
    isNumber: /^[0-9]+$/,
    hasAlpha: new RegExp(`[${charClass.L}]`),
    hasAlphaNum: new RegExp(`[${charClass.AlphaNum}]`),
    notAlphaNum: new RegExp(`[^${charClass.AlphaNum}]`, 'g'),
    sentenceStart: new RegExp(`(^|([\u2014:?!.]\\s+))[${charClass.Lu}]`, 'g'),
    markup: /<\/?span[^>]*>/g,
    acronym: new RegExp(`.*\\.${marker.markup}*[${charClass.Lu}]${marker.markup}*\\.$`),
    nonCased: new RegExp(`[^${charClass.LC}]`),
    hasCased: new RegExp(`[${charClass.LC}]`),
    quoted: /("[^"]+")|(“[^“]+“)/g,
};
const fields = {
    creator: [
        'author',
        'bookauthor',
        'collaborator',
        'commentator',
        'director',
        'editor',
        'editora',
        'editorb',
        'editors',
        'holder',
        'scriptwriter',
        'translator',
    ],
    title: [
        'title',
        'series',
        'shorttitle',
        'booktitle',
        'type',
        'origtitle',
        'maintitle',
        'eventtitle',
    ],
    unnest: [
        'publisher',
        'location',
    ],
    verbatim: [
        'url',
        'doi',
        'file',
        'files',
        'eprint',
        'verba',
        'verbb',
        'verbc',
    ],
    html: [
        'annotation',
        'comment',
        'annote',
        'review',
        'notes',
        'note',
    ],
    unabbrev: [
        'journal',
        'journaltitle',
        'journal-full',
    ],
};
const english = [
    'american',
    'british',
    'canadian',
    'english',
    'australian',
    'newzealand',
    'usenglish',
    'ukenglish',
    'en',
    'eng',
    'en-au',
    'en-bz',
    'en-ca',
    'en-cb',
    'en-gb',
    'en-ie',
    'en-jm',
    'en-nz',
    'en-ph',
    'en-tt',
    'en-us',
    'en-za',
    'en-zw',
    'anglais',
];
class Parser {
    constructor(options = {}) {
        this.preamble = [];
        this.log = function (str) { }; // tslint:disable-line variable-name only-arrow-functions no-empty
        for (const [option, value] of Object.entries(options)) {
            if (typeof value === 'undefined')
                delete options[option];
        }
        if (options.errorHandler === false) {
            // tslint:disable-next-line only-arrow-functions no-empty
            options.errorHandler = function (err) { };
        }
        else if (options.errorHandler === undefined) {
            // tslint:disable-next-line only-arrow-functions
            options.errorHandler = function (err) { throw err; };
        }
        if (typeof options.sentenceCase === 'boolean') {
            options.sentenceCase = options.sentenceCase ? english : [];
        }
        else {
            options.sentenceCase = options.sentenceCase || english;
        }
        if (!options.strings)
            options.strings = {};
        if (!options.unabbreviate)
            options.unabbreviate = {};
        if (options.raw) {
            options.sentenceCase = false;
            options.caseProtection = false;
        }
        this.options = Object.assign({ caseProtection: 'as-needed', verbatimFields: [/^citeulike-linkout-[0-9]+$/, ...fields.verbatim], verbatimCommands: ['url', 'href'], unnestFields: [...fields.title, ...fields.unnest, ...fields.verbatim], unnestMode: 'unwrap', htmlFields: fields.html, guessAlreadySentenceCased: true, markup: {} }, options);
        const markup_defaults = {
            enquote: { open: '\u201c', close: '\u201d' },
            sub: { open: '<sub>', close: '</sub>' },
            sup: { open: '<sup>', close: '</sup>' },
            bold: { open: '<b>', close: '</b>' },
            italics: { open: '<i>', close: '</i>' },
            smallCaps: { open: '<span style="font-variant:small-caps;">', close: '</span>' },
            caseProtect: { open: '<span class="nocase">', close: '</span>' },
            roman: { open: '', close: '' },
            fixedWidth: { open: '', close: '' },
            h1: { open: '<h1>', close: '</h1>' },
            h2: { open: '<h2>', close: '</h2>' },
        };
        // patch in because the options will likely not have enquote and case-protect
        for (const [markup, { open, close }] of Object.entries(markup_defaults)) {
            this.options.markup[markup] = this.options.markup[markup] || { open, close };
        }
        this.unresolvedStrings = {};
        this.errors = [];
        this.comments = [];
        this.entries = [];
        this.strings = {};
        this.default_strings = {
            JAN: [this.text('01')],
            FEB: [this.text('02')],
            MAR: [this.text('03')],
            APR: [this.text('04')],
            MAY: [this.text('05')],
            JUN: [this.text('06')],
            JUL: [this.text('07')],
            AUG: [this.text('08')],
            SEP: [this.text('09')],
            OCT: [this.text('10')],
            NOV: [this.text('11')],
            DEC: [this.text('12')],
            ACMCS: [this.text('ACM Computing Surveys')],
            ACTA: [this.text('Acta Informatica')],
            CACM: [this.text('Communications of the ACM')],
            IBMJRD: [this.text('IBM Journal of Research and Development')],
            IBMSJ: [this.text('IBM Systems Journal')],
            IEEESE: [this.text('IEEE Transactions on Software Engineering')],
            IEEETC: [this.text('IEEE Transactions on Computers')],
            IEEETCAD: [this.text('IEEE Transactions on Computer-Aided Design of Integrated Circuits')],
            IPL: [this.text('Information Processing Letters')],
            JACM: [this.text('Journal of the ACM')],
            JCSS: [this.text('Journal of Computer and System Sciences')],
            SCP: [this.text('Science of Computer Programming')],
            SICOMP: [this.text('SIAM Journal on Computing')],
            TOCS: [this.text('ACM Transactions on Computer Systems')],
            TODS: [this.text('ACM Transactions on Database Systems')],
            TOG: [this.text('ACM Transactions on Graphics')],
            TOMS: [this.text('ACM Transactions on Mathematical Software')],
            TOOIS: [this.text('ACM Transactions on Office Information Systems')],
            TOPLAS: [this.text('ACM Transactions on Programming Languages and Systems')],
            TCS: [this.text('Theoretical Computer Science')],
        };
    }
    ast(input, clean = true) {
        const _ast = [];
        for (const chunk of chunker_1.parse(input)) {
            let chunk_ast = bibtex.parse(chunk.text, Object.assign(Object.assign({}, this.options), { combiningDiacritics: unicode2latex_1.diacritics.commands }));
            if (clean)
                chunk_ast = this.clean(chunk_ast);
            _ast.push(chunk_ast);
        }
        return _ast;
    }
    parse(input) {
        return this.options.async ? this.parseAsync(input) : this.parseSync(input);
    }
    parseSync(input) {
        for (const chunk of chunker_1.parse(input)) {
            this.parseChunk(chunk);
        }
        return this.parsed();
    }
    async parseAsync(input) {
        for (const chunk of await chunker_1.parse(input, { async: true })) {
            this.parseChunk(chunk);
        }
        return this.parsed();
    }
    parsed() {
        this.field = null;
        const strings = {};
        this.cleaning = { type: 'other' };
        for (const [key, value] of Object.entries(this.strings)) {
            this.field = {
                name: '@string',
                text: '',
                level: 0,
                preserveRanges: null,
                words: {
                    upper: 0,
                    lower: 0,
                    other: 0,
                },
            };
            this.convert(this.clean(value));
            strings[key] = this.field.text;
        }
        return {
            errors: this.errors,
            entries: this.entries,
            comments: this.comments,
            strings,
            preamble: this.preamble,
        };
    }
    preserve(start, end, reason) {
        if (!this.field.preserveRanges)
            return;
        if (!end) {
            this.field.preserveRanges = null;
            return;
        }
        /*
        this.field.preserveRanges = this.field.preserveRanges.filter(range => range.start < start || range.end > end)
        if (this.field.preserveRanges.find(range => range.start <= start && range.end >= end)) return
        */
        /*
        if (this.field.preserveRanges && this.field.preserveRanges.length) {
          const last = this.field.preserveRanges[this.field.preserveRanges.length - 1]
          if (start < last.start) throw new Error(JSON.stringify({...last, new: { start, end, reason }, text: this.field.text}))
        }
        */
        this.field.preserveRanges.push({ start, end, reason });
    }
    parseChunk(chunk) {
        this.chunk = chunk.text;
        try {
            let bib = bibtex.parse(chunk.text, Object.assign(Object.assign({}, this.options), { combiningDiacritics: unicode2latex_1.diacritics.commands }));
            if (bib.kind !== 'Bibliography')
                throw new Error(this.show(bib));
            bib = this.clean(bib);
            for (const entity of bib.children) {
                switch (entity.kind) {
                    case 'Entry':
                    case 'BracedComment':
                    case 'LineComment':
                    case 'PreambleExpression':
                        this.convert(entity);
                        break;
                    case 'StringDeclaration':
                    case 'NonEntryText':
                        break;
                }
            }
            return bib;
        }
        catch (err) {
            if (!err.location)
                throw err;
            this.errors.push({
                message: err.message,
                line: err.location.start.line + chunk.offset.line,
                column: err.location.start.column,
                source: this.chunk,
            });
            return null;
        }
    }
    show(o) {
        // tslint:disable-next-line prefer-template
        let text = JSON.stringify(o);
        if (this.chunk)
            text += '\n' + this.chunk.trim();
        return text;
    }
    text(value = '') {
        return { kind: 'Text', value, mode: 'text' };
    }
    error(err, returnvalue) {
        if (typeof this.options.errorHandler === 'function')
            this.options.errorHandler(err);
        return returnvalue;
    }
    condense(node) {
        // apply cleaning to resulting children
        node.value = node.value.map(child => this.clean(child));
        // unpack redundant blocks
        node.value = node.value.reduce((acc, child, i) => {
            if (child.kind === 'Block' && !child.case && Object.keys(child.markup).length === 0) {
                acc = acc.concat(child.value);
            }
            else {
                acc.push(child);
            }
            return acc;
        }, []);
        // condense text nodes to make whole words for sentence casing
        node.value = node.value.reduce((acc, child, i) => {
            if (acc.length === 0) {
                acc.push(child);
                return acc;
            }
            const last = acc[acc.length - 1];
            const next = node.value[i + 1];
            if (this.options.caseProtection === 'strict' && this.onlyCaseProtected(last) && child.kind === 'Text' && !child.value.match(preserveCase.hasCased) && this.onlyCaseProtected(next)) {
                last.value.push(child);
                delete last.source;
                return acc;
            }
            if (last.kind === 'Block' && child.kind === 'Block' && Object.keys(last.markup).sort().join('/') === Object.keys(child.markup).sort().join('/')) {
                last.value = last.value.concat(child.value);
                delete last.source;
                return acc;
            }
            if (last.kind === 'Text' && child.kind === 'Text' && last.mode === child.mode) {
                last.value += child.value;
                delete last.source;
                return acc;
            }
            acc.push(child);
            return acc;
        }, []);
    }
    onlyCaseProtected(node) {
        return (node === null || node === void 0 ? void 0 : node.kind) === 'Block' && node.case === 'protect' && Object.keys(node.markup).join('/') === '';
    }
    argument(node, kind) {
        if (!node.arguments || !node.arguments.required.length)
            return (kind === 'none');
        // expect 'n' text arguments
        if (typeof kind === 'number') {
            if (node.arguments.required.length !== kind)
                return false;
            return node.arguments.required;
        }
        // return first argument if it's the only one
        if (node.arguments.required.length !== 1)
            return false;
        // loose checking for text
        if (kind === 'text') {
            const first = node.arguments.required[0];
            if (first.kind === 'Block' && first.value.length === 1) {
                if (first.value[0].kind === 'Text')
                    return first.value[0].value;
            }
            // fall back to strict kind check
            kind = 'Text';
        }
        // return first argument if it's the only one and is of the specified kind
        if (node.arguments.required.length !== 1 || node.arguments.required[0].kind !== kind)
            return false;
        switch (kind) {
            case 'Text':
                return node.arguments.required[0].value;
            case 'RegularCommand':
            case 'Block':
                return node.arguments.required[0];
        }
        return false;
    }
    clean(node) {
        if (Array.isArray(node))
            return node.map(child => this.clean(child));
        delete node.loc;
        switch (node.kind) {
            case 'InlineMath':
            case 'DisplayMath':
            case 'Block':
                return this.clean_block(node);
            case 'Bibliography':
                return this.clean_bib(node);
            case 'RegularCommand':
                return this.clean_command(node);
            case 'DiacriticCommand':
                return this.clean_diacritic(node);
            case 'Entry':
                return this.clean_entry(node);
            case 'Field':
                return this.options.raw ? node : this.clean_field(node);
            case 'StringDeclaration':
                return this.clean_stringdecl(node);
            case 'StringReference':
                return this.clean_stringref(node);
            case 'SubscriptCommand':
            case 'SuperscriptCommand':
                return this.clean_script(node);
            case 'SymbolCommand':
                return this.clean_symbol(node);
            case 'Number':
            case 'Text':
            case 'PreambleExpression':
            case 'BracedComment':
            case 'LineComment':
                return node;
            default:
                return this.error(new ParserError(`no cleanup method for ${this.show(node)}`, node), this.text());
        }
    }
    clean_bib(node) {
        node.children = node.children.filter(child => child.kind !== 'NonEntryText').map(child => this.clean(child));
        return node;
    }
    clean_stringdecl(node) {
        this.strings[node.name.toUpperCase()] = node.value;
        return node;
    }
    clean_stringref(node) {
        var _a;
        const name = node.name.toUpperCase();
        const _string = this.strings[name]
            || this.options.strings[name]
            || this.default_strings[name]
            || (fields.unabbrev.includes(this.cleaning.name) && ((_a = this.options.unabbreviate[name]) === null || _a === void 0 ? void 0 : _a.text) && [this.text(this.options.unabbreviate[name].text)]);
        if (!_string) {
            if (!this.unresolvedStrings[name])
                this.errors.push({ message: `Unresolved @string reference ${JSON.stringify(node.name)}` });
            this.unresolvedStrings[name] = true;
        }
        return this.clean({
            kind: 'Block',
            // if the string isn't found, add it as-is but exempt it from sentence casing
            case: _string ? undefined : 'preserve',
            markup: {},
            value: _string ? JSON.parse(JSON.stringify(_string)) : [this.text(node.name)],
        });
    }
    clean_entry(node) {
        const shortjournals = [];
        for (const field of node.fields) {
            if (fields.unabbrev.includes(field.name) && Array.isArray(field.value)) {
                const abbr = field.value.map(v => v.source).join('');
                const journal = this.options.unabbreviate[abbr];
                if (journal) {
                    shortjournals.push(Object.assign(Object.assign({}, JSON.parse(JSON.stringify(field))), { name: 'shortjournal' }));
                    field.value = JSON.parse(JSON.stringify(journal.ast));
                }
            }
        }
        node.fields = node.fields.concat(shortjournals).map(child => this.clean(child));
        return node;
    }
    startCleaning(name) {
        name = name.toLowerCase();
        if (fields.title.includes(name)) {
            this.cleaning = { type: 'title', name };
        }
        else if (fields.creator.includes(name.replace(/s$/, ''))) {
            this.cleaning = { type: 'creator', name: name.replace(/s$/, '') };
        }
        else {
            this.cleaning = { type: 'other', name };
        }
    }
    stripNoCase(node, strip, preserve) {
        switch (node.kind) {
            case 'RegularCommand':
                // a bit cheaty to assume these to be nocased, but it's just more likely to be what people want
                if (['chsf', 'bibstring', 'cite'].includes(node.command))
                    strip = true;
                node.arguments.required.map(arg => this.stripNoCase(arg, strip, preserve));
                break;
            case 'Block':
            case 'InlineMath':
            case 'DisplayMath':
                if (strip && node.case === 'protect') {
                    if (preserve) {
                        node.case = 'preserve';
                    }
                    else {
                        delete node.case;
                    }
                }
                node.value.map(v => this.stripNoCase(v, strip || node.case === 'protect', preserve));
                break;
            case 'Field':
                if (Array.isArray(node.value))
                    node.value.map(v => this.stripNoCase(v, strip, preserve));
                break;
        }
    }
    isVerbatimField(name) {
        return !!this.options.verbatimFields.find(p => (typeof p === 'string') ? name === p : name.match(p));
    }
    clean_field(node) {
        this.startCleaning(node.name);
        this.stripNoCase(node, !this.options.caseProtection || this.isVerbatimField(node.name), this.options.sentenceCase.length === 0);
        if (Array.isArray(node.value))
            this.condense(node);
        return node;
    }
    clean_script(node) {
        let m, value, singlechar;
        // recognize combined forms like \^\circ
        if (singlechar = unicode2latex_1.latex[node.source])
            return this.text(singlechar);
        if ((m = node.source.match(/^([\^_])([^{}]+)$/)) && ((singlechar = unicode2latex_1.latex[`${m[1]}${m[2]}`]) || (singlechar = unicode2latex_1.latex[`${m[1]}{${m[2]}}`])))
            return this.text(singlechar);
        if ((m = node.source.match(/^([\^_])\{([^{}]+)\}$/)) && ((singlechar = unicode2latex_1.latex[`${m[1]}${m[2]}`]) || (singlechar = unicode2latex_1.latex[`${m[1]}{${m[2]}}`])))
            return this.text(singlechar);
        const cmd = node.kind === 'SuperscriptCommand' ? '^' : '_';
        if (typeof node.value === 'string' && (singlechar = unicode2latex_1.latex[`${cmd}${node.value}`] || unicode2latex_1.latex[`${cmd}{${node.value}}`])) {
            return this.text(singlechar);
        }
        if (typeof node.value === 'string') {
            value = [this.text(node.value)];
        }
        else if (!Array.isArray(node.value)) {
            value = [node.value];
        }
        else {
            value = node.value;
        }
        const mode = node.kind === 'SuperscriptCommand' ? 'sup' : 'sub';
        return this.clean({
            kind: 'Block',
            markup: { [mode]: true },
            value,
        });
    }
    clean_block(node) {
        this.condense(node);
        if (this.options.caseProtection !== 'strict' && this.cleaning.type === 'title' && node.case === 'protect') {
            // test whether we can get away with skipping case protection because it contains all words that will be preserved anyway when converting back to Title Case
            let preserve = true;
            for (const child of node.value) {
                if (child.kind === 'Text') {
                    const value = child.value.trim();
                    preserve = !value.match(preserveCase.hasCased) || !value.split(/\s+/).find(word => !word.match(preserveCase.hasUppercase) && !word.match(preserveCase.isNumber));
                }
                else {
                    preserve = false;
                }
                if (!preserve)
                    break;
            }
            if (preserve)
                node.case = 'preserve';
        }
        for (const [markup, on] of Object.entries(node.markup)) {
            if (!on)
                delete node.markup[markup];
        }
        return node;
    }
    clean_diacritic(node) {
        const char = node.dotless ? `\\${node.character}` : node.character;
        let unicode = unicode2latex_1.latex[`\\${node.mark}{${char}}`]
            || unicode2latex_1.latex[`\\${node.mark}${char}`]
            || unicode2latex_1.latex[`{\\${node.mark} ${char}}`]
            || unicode2latex_1.latex[`{\\${node.mark}${char}}`]
            || unicode2latex_1.latex[`\\${node.mark} ${char}`];
        if (!unicode && !node.dotless && node.character.length === 1 && unicode2latex_1.diacritics.tounicode[node.mark])
            unicode = node.character + unicode2latex_1.diacritics.tounicode[node.mark];
        if (!unicode)
            return this.error(new TeXError(`Unhandled \\${node.mark}{${char}}`, node, this.chunk), this.text());
        return this.text(unicode);
    }
    clean_symbol(node) {
        if (node.command === '\\')
            return this.text('\n');
        return this.text(unicode2latex_1.latex[`\\${node.command}`] || node.command);
    }
    first_text_block(node) {
        if (!node)
            return null;
        if (node.kind === 'Block') {
            for (const child of node.value) {
                switch (child.kind) {
                    case 'Text':
                        return child.value ? node : null;
                    case 'Block':
                        const candidate = this.first_text_block(child);
                        if (candidate)
                            return candidate;
                        break;
                    default:
                        return null;
                }
            }
        }
        else {
            return null;
        }
    }
    clean_command(node) {
        let arg, unicode;
        if (unicode = unicode2latex_1.latex[node.source])
            return this.text(unicode);
        switch (node.command) {
            case 'begin':
                if (arg = this.argument(node, 'text')) {
                    switch (arg) {
                        case 'itemize': return { kind: 'Markup', value: '<ul>', source: node.source };
                        case 'enumerate': return { kind: 'Markup', value: '<ol>', source: node.source };
                    }
                }
                break;
            case 'end':
                if (arg = this.argument(node, 'text')) {
                    switch (arg) {
                        case 'itemize': return { kind: 'Markup', value: '</ul>', source: node.source };
                        case 'enumerate': return { kind: 'Markup', value: '</ol>', source: node.source };
                    }
                }
                break;
            case 'item':
                return { kind: 'Markup', value: '<li>', source: node.source };
            case 'frac':
                if (arg = this.argument(node, 2)) {
                    if (arg[0].kind === 'Text' && arg[1].kind === 'Text' && (unicode = unicode2latex_1.latex[`\\frac{${arg[0].value}}{${arg[1].value}}`]))
                        return this.text(unicode);
                    return this.clean({
                        kind: 'Block',
                        case: 'protect',
                        markup: {},
                        value: [
                            { kind: 'Block', markup: { sup: true }, value: [arg[0]] },
                            this.text('\u2044'),
                            { kind: 'Block', markup: { sub: true }, value: [arg[1]] },
                        ],
                    });
                }
                break;
            // ignore
            case 'vspace':
            case 'vphantom':
            case 'path':
            case 'aftergroup':
            case 'ignorespaces':
            case 'relax':
            case 'noopsort':
                return this.text();
            case 'ElsevierGlyph':
                if (arg = this.argument(node, 'Text')) {
                    if (unicode = unicode2latex_1.latex[`\\${node.command}{${arg}}`])
                        return this.text(unicode);
                    return this.text(String.fromCharCode(parseInt(arg, 16)));
                }
                break;
            case 'chsf':
                if (this.argument(node, 'none'))
                    return this.text();
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'bibstring':
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'cite':
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'textsuperscript':
            case 'sp':
                if ((arg = this.argument(node, 'Text')) && (unicode = unicode2latex_1.latex[`^{${arg}}`]))
                    return this.text(unicode);
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'textsubscript':
            case 'sb':
                if ((arg = this.argument(node, 'Text')) && (unicode = unicode2latex_1.latex[`_{${arg}}`]))
                    return this.text(unicode);
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'textsc':
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'enquote':
            case 'mkbibquote':
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'textbf':
            case 'mkbibbold':
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'section':
            case 'subsection':
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'mkbibitalic':
            case 'mkbibemph':
            case 'textit':
            case 'emph':
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                if (arg = this.argument(node, 'Text'))
                    return this.clean({ kind: 'Block', markup: { italics: true }, value: [this.text(arg)] });
                break;
            case 'bibcyr':
                if (this.argument(node, 'none'))
                    return this.text();
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'hspace':
            case 'mathrm':
            case 'textrm':
            case 'ocirc':
            case 'mbox':
                if (arg = this.argument(node, 'text')) {
                    unicode = unicode2latex_1.latex[`\\${node.command}{${arg}}`];
                    return this.text(unicode || (node.command === 'hspace' ? ' ' : arg));
                }
                else if (!node.arguments.required.length) {
                    return this.text();
                }
                else if (arg = this.argument(node, 'Block')) {
                    return this.clean(arg);
                }
                break;
            // just take the URL? Not the label?
            case 'href':
                if (arg = this.argument(node, 2))
                    return this.clean(arg[0]);
                break;
            case 'url':
                if (arg = this.argument(node, 'Text'))
                    return this.text(arg);
                if (arg = this.argument(node, 'Block'))
                    return this.clean(arg);
                break;
            case 'sl':
            case 'em':
            case 'it':
            case 'itshape':
            case 'bf':
            case 'bfseries':
            case 'sc':
            case 'scshape':
            case 'tt':
            case 'rm':
            case 'sf':
            case 'verb':
                // handled in the grammar
                return this.text();
            // wouldn't know what to do with these
            case 'left':
            case 'right':
                return this.text();
            case 'par':
                return this.text('\n\n');
            case 'cyr':
                if (this.argument(node, 'none'))
                    return this.text();
                break;
            case 'polhk':
                if (unicode = this.argument(node, 'text')) {
                    if (unicode.length === 1)
                        return this.text(unicode + '\u0328');
                }
                if (this.argument(node, 'none'))
                    return this.text('\u0328');
                break;
            default:
                if (unicode2latex_1.diacritics.tounicode[node.command]) {
                    node.arguments.required = this.clean(node.arguments.required);
                    let block;
                    if (node.arguments.required.length === 1 && node.arguments.required[0].kind === 'Text') {
                        // no idea why I can't just straight return this but typescript just won't shut up
                        block = {
                            kind: 'Block',
                            markup: {},
                            value: [{
                                    kind: 'DiacriticCommand',
                                    mark: node.command,
                                    character: node.arguments.required[0].value,
                                    dotless: false,
                                    loc: node.arguments.required[0].loc,
                                    source: node.arguments.required[0].source,
                                }],
                        };
                        return this.clean(block);
                    }
                    else if (block = this.first_text_block(node.arguments.required[0])) {
                        let fixed = false;
                        block.value = block.value.reduce((value, child) => {
                            if (!fixed && child.kind === 'Text') {
                                fixed = true;
                                value.push({ kind: 'DiacriticCommand', mark: node.command, character: child.value[0] });
                                value.push(Object.assign(Object.assign({}, child), { value: child.value.substring(1) }));
                            }
                            else {
                                value.push(child);
                            }
                            return value;
                        }, []);
                        return this.clean({
                            kind: 'Block',
                            markup: {},
                            value: node.arguments.required,
                        });
                    }
                    else {
                        // overline without arguments doesn't seem to render in LaTeX
                        if (node.command === 'overline')
                            return this.text(' ');
                        return this.clean({
                            kind: 'Block',
                            markup: {},
                            value: [this.text(' ' + unicode2latex_1.diacritics.tounicode[node.command])].concat(node.arguments.required),
                        });
                    }
                }
                if (unicode = unicode2latex_1.latex[node.source] || unicode2latex_1.latex[`${node.source}{}`])
                    return this.text(unicode);
                if ((unicode = unicode2latex_1.latex[`\\${node.command}`] || unicode2latex_1.latex[`\\${node.command}{}`]) && this.argument(node, 'none'))
                    return this.text(unicode);
                if ((arg = this.argument(node, 'Text')) && (unicode = unicode2latex_1.latex[`\\${node.command}{${arg}}`]))
                    return this.text(unicode);
                break;
        }
        return this.error(new TeXError(`Unhandled command: ${node.command}` + this.show(node), node, this.chunk), this.text());
    }
    preserveCase(word) {
        // word = word.replace(new RegExp(`"[${this.markup.enquote.open}${this.markup.enquote.close}:()]`, 'g'), '')
        var _a, _b;
        if (!word.trim())
            return false;
        if (!word.match(preserveCase.hasAlphaNum))
            return true;
        word = word.replace(/[\/’'”:()]/g, '');
        if (word === 'I')
            return true;
        if (word.length === 1)
            return false;
        if (word.replace(preserveCase.nonCased) === '')
            return false;
        // word = word.replace(preserveCase.notAlphaNum, '')
        // simple cap at start of field
        if (word.match(preserveCase.leadingCap) && ((_b = (_a = this.field) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.length) === 0)
            return false;
        if (word.match(preserveCase.allCaps))
            return true;
        if (word.length > 1 && word.match(preserveCase.joined))
            return false;
        if (word.match(preserveCase.hasUppercase))
            return true;
        if (word.match(preserveCase.isNumber))
            return true;
        return false;
    }
    convert(node) {
        if (Array.isArray(node))
            return node.map(child => this.convert(child));
        if (this.options.raw && this.field)
            node = this.text(node.source);
        switch (node.kind) {
            case 'Markup':
                if (this.field)
                    this.field.text += node.value;
                break;
            case 'BracedComment':
            case 'LineComment':
                this.comments.push(node.value);
                break;
            case 'Entry':
                this.convert_entry(node);
                break;
            case 'Number':
                this.convert_number(node);
                break;
            case 'Text':
                this.convert_text(node);
                break;
            case 'Block':
            case 'InlineMath':
            case 'DisplayMath':
                const start = this.field ? this.field.text.length : null;
                const preserve = typeof start === 'number' && this.field.preserveRanges;
                this.convert_block(node);
                if (preserve && (node.case || node.kind.endsWith('Math')))
                    this.preserve(start, this.field.text.length); // , `convert-block: case=${node.case}, math=${node.kind.endsWith('Math')}`)
                break;
            case 'PreambleExpression':
                this.preamble.push(node.value.map(preamble => preamble.source).join('\n\n'));
                break;
            case 'DisplayMath':
            case 'InlineMath':
            case 'StringDeclaration':
                break;
            default:
                return this.error(new ParserError(`no converter for ${node.kind}: ${this.show(node)}`, node), undefined);
        }
    }
    splitOnce(s, sep, fromEnd = false) {
        const split = fromEnd ? s.lastIndexOf(sep) : s.indexOf(sep);
        return (split < 0) ? [s, ''] : [s.substr(0, split), s.substr(split + 1)];
    }
    parseName(name) {
        let parsed = null;
        const parts = name.split(marker.comma);
        if (parts.length && !parts.find(p => !p.match(/^[a-z]+(-i)?=/i))) { // extended name format
            parsed = {};
            for (const part of parts) {
                const [attr, value] = this.splitOnce(part.replace(marker.re.space, ''), '=').map(v => v.trim());
                switch (attr.toLowerCase()) {
                    case 'family':
                        parsed.lastName = value;
                        break;
                    case 'given-i':
                        parsed.initial = value;
                        break;
                    case 'given':
                        parsed.firstName = value;
                        break;
                    case 'prefix':
                        parsed.prefix = value;
                        break;
                    case 'suffix':
                        parsed.suffix = value;
                        break;
                    case 'useprefix':
                        parsed.useprefix = value.toLowerCase() === 'true';
                        break;
                    case 'juniorcomma':
                        parsed.useprefix = value.toLowerCase() === 'true';
                        break;
                    default:
                        parsed = null;
                        break;
                }
            }
            if (parsed)
                return parsed;
        }
        const prefix = /(.+?)\s+(vere|von|van den|van der|van|de|del|della|der|di|da|pietro|vanden|du|st.|st|la|lo|ter|bin|ibn|te|ten|op|ben|al)\s+(.+)/;
        let m;
        switch (parsed ? -1 : parts.length) {
            case -1:
                // already parsed
                break;
            case 0: // should never happen
                throw new Error(name);
            case 1: // name without commas
                // literal
                if (marker.re.literalName.test(parts[0])) {
                    parsed = { literal: parts[0] };
                }
                else if (m = parts[0].replace(marker.re.space, ' ').match(prefix)) { // split on prefix
                    parsed = {
                        firstName: m[1],
                        prefix: m[2],
                        lastName: m[3],
                    };
                }
                else {
                    // top-level "firstname lastname"
                    const [firstName, lastName] = this.splitOnce(parts[0], marker.space, true);
                    if (lastName) {
                        parsed = { firstName, lastName };
                    }
                    else {
                        parsed = { lastName: firstName };
                    }
                }
                break;
            case 2: // lastname, firstname
                parsed = {
                    lastName: parts[0],
                    firstName: parts[1],
                };
                break;
            default: // lastname, suffix, firstname
                parsed = {
                    lastName: parts[0],
                    suffix: parts[1],
                    firstName: parts.slice(2).join(marker.comma),
                };
        }
        for (const [k, v] of Object.entries(parsed)) {
            if (typeof v !== 'string')
                continue;
            parsed[k] = v.replace(marker.re.space, ' ').replace(marker.re.comma, ', ').replace(marker.re.literal, '').trim();
        }
        return parsed;
    }
    convert_entry(node) {
        var _a;
        this.entry = {
            key: node.id,
            type: node.type,
            fields: {},
            creators: {},
        };
        this.entries.push(this.entry);
        // order these first for language-dependent sentence casing
        const order = ['langid', 'hyphenation', 'language'];
        node.fields.sort((a, b) => {
            const ia = order.indexOf(a.name);
            const ib = order.indexOf(b.name);
            if (ia === -1 && ib === -1)
                return a.name.localeCompare(b.name); // doesn't matter really
            if (ia === -1)
                return 1;
            if (ib === -1)
                return -1;
            return ia - ib;
        });
        let sentenceCase = !!this.options.sentenceCase.length; // if sentenceCase is empty, no sentence casing
        for (const field of node.fields) {
            if (field.kind !== 'Field')
                return this.error(new ParserError(`Expected Field, got ${field.kind}`, node), undefined);
            this.startCleaning(field.name);
            /*
            if (this.options.raw && this.fieldType !== 'creator') {
              this.entry.fields[field.name] = [ field.value.map(v => v.source).join('') ]
              continue
            }
            */
            this.field = {
                name: field.name,
                text: '',
                level: 0,
                words: {
                    upper: 0,
                    lower: 0,
                    other: 0,
                },
                preserveRanges: (sentenceCase && fields.title.includes(field.name)) ? [] : null,
                html: this.options.htmlFields.includes(field.name),
            };
            this.entry.fields[this.field.name] = this.entry.fields[this.field.name] || [];
            // special case for 'title = 2020'
            if (field.value.kind === 'Number') {
                this.entry.fields[this.field.name].push(field.value.value);
                this.field = null;
                continue;
            }
            this.convert(field.value);
            this.field.text = this.field.text.trim();
            if (!this.field.text)
                continue;
            // disable sentenceCasing if not an english
            switch (this.field.name) {
                case 'langid':
                case 'hyphenation':
                    sentenceCase = sentenceCase && this.options.sentenceCase.includes(this.field.text.toLowerCase());
                    break;
                case 'language':
                    sentenceCase = sentenceCase && !!(this.field.text.toLowerCase().trim().split(/\s*,\s*/).find(lang => this.options.sentenceCase.includes(lang)));
                    break;
            }
            // "groups" is a jabref 3.8+ monstrosity
            if (this.field.name.match(/^(keywords?|groups)$/)) {
                for (let text of this.field.text.split(marker.comma)) {
                    text = text.trim();
                    if (text)
                        this.entry.fields[this.field.name].push(text);
                }
            }
            else if (this.cleaning.type === 'creator') {
                if (!this.entry.creators[this.field.name])
                    this.entry.creators[this.field.name] = [];
                // {M. Halle, J. Bresnan, and G. Miller}
                if (this.field.text.includes(`${marker.comma}${marker.and}`)) { //
                    this.field.text = this.field.text.replace(new RegExp(`${marker.comma}${marker.and}`, 'g'), marker.and).replace(new RegExp(marker.comma), marker.and);
                }
                for (const creator of this.field.text.split(marker.and)) {
                    this.entry.fields[this.field.name].push(creator.replace(marker.re.comma, ', ').replace(marker.re.space, ' ').replace(marker.re.literal, ''));
                    this.entry.creators[this.field.name].push(this.parseName(creator));
                }
            }
            else if (fields.unabbrev.includes(field.name)) { // doesn't get sentence casing anyhow TODO: booktitle does!
                this.entry.fields[this.field.name].push((((_a = this.options.unabbreviate[this.field.text]) === null || _a === void 0 ? void 0 : _a.text) || this.field.text).normalize('NFC'));
            }
            else {
                if (this.field.preserveRanges) {
                    if (this.options.guessAlreadySentenceCased && Math.max(this.field.words.upper, this.field.words.lower) > (this.field.words.other + Math.min(this.field.words.upper, this.field.words.lower))) {
                        this.preserve(null, null); // , 'mostly sentence cased already')
                    }
                    else {
                        const txt = this.field.text.replace(preserveCase.markup, markup => marker.markup.repeat(markup.length));
                        let match;
                        preserveCase.sentenceStart.lastIndex = 0;
                        while ((match = preserveCase.sentenceStart.exec(txt))) {
                            // exclude stuff like "U.S. Taxes"
                            if (match.index > 2 && txt.substr(0, match.index + 1).match(preserveCase.acronym))
                                continue;
                            this.preserve(match.index, match.index + match[0].length); // , `sentenceStart: ${match[0]} at ${match.index}..${match.index + match[0].length}`)
                        }
                        preserveCase.quoted.lastIndex = 0;
                        while ((match = preserveCase.quoted.exec(this.field.text))) {
                            this.preserve(match.index, match.index + match[0].length); // , 'quoted')
                        }
                    }
                }
                this.entry.fields[this.field.name].push(this.convertToSentenceCase(this.field.text).normalize('NFC'));
            }
        }
        this.field = null;
    }
    convertToSentenceCase(text) {
        if (!this.field.preserveRanges)
            return text;
        // always keep the leading char, but skip markup
        const lead = text.match(/^(<[^>]+>)*./);
        if (lead) {
            this.preserve(lead[0].length - 1, lead[0].length);
        }
        else {
            this.preserve(0, 1);
        }
        let sentenceCased = text.toLowerCase().replace(/(([\?!]\s*|^)([\'\"¡¿“‘„«\s]+)?[^\s])/g, x => x.toUpperCase());
        for (const { start, end } of this.field.preserveRanges) {
            sentenceCased = sentenceCased.substring(0, start) + text.substring(start, end) + sentenceCased.substring(end);
        }
        if (text !== sentenceCased)
            this.entry.sentenceCased = true;
        return sentenceCased;
    }
    convert_number(node) {
        this.field.text += `${node.value}`;
    }
    convert_text(node) {
        if (node.mode === 'verbatim') {
            this.field.text += node.value.trim();
            return;
        }
        // heuristic to detect pre-sentencecased text
        for (const word of node.value.split(/\b/)) {
            if (word.match(preserveCase.allLower)) {
                this.field.words.lower++;
            }
            else if (word.match(preserveCase.allCaps)) {
                this.field.words.upper++;
            }
            else if (word.match(preserveCase.hasAlpha)) {
                this.field.words.other++;
            }
        }
        if (this.field.level === 0 && this.cleaning.type === 'creator') {
            this.field.text += node.value.replace(/\s+and\s+/ig, marker.and).replace(/\s*,\s*/g, marker.comma).replace(/\s+/g, marker.space);
            return;
        }
        if (this.field.level === 0 && this.field.name.match(/^(keywords?|groups)$/)) {
            this.field.text += node.value.replace(/\s*[;,]\s*/g, marker.comma);
            return;
        }
        if (this.field.html) {
            this.field.text += node.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
        else if (this.field.preserveRanges) {
            const words = node.value.split(/(\s+)/);
            for (const word of words) {
                const start = this.field.text.length;
                this.field.text += word;
                if (this.preserveCase(word))
                    this.preserve(start, this.field.text.length); // , `word: ${JSON.stringify(word)}`)
            }
        }
        else {
            this.field.text += node.value;
        }
    }
    convert_block(node) {
        const start = this.field.text.length;
        let prefix = '';
        let postfix = '';
        if (this.options.caseProtection !== 'strict' && this.cleaning.type === 'other')
            delete node.case;
        if (this.cleaning.type === 'creator' && node.case === 'protect') {
            prefix += marker.literal;
            postfix = marker.literal + postfix;
            delete node.case;
        }
        if (node.case === 'protect') {
            prefix += this.options.markup.caseProtect.open;
            postfix = this.options.markup.caseProtect.close + postfix;
        }
        for (const markup of Object.keys(node.markup)) {
            if (!this.options.markup[markup])
                return this.error(new ParserError(`markup: ${markup}`, node), undefined);
            prefix += this.options.markup[markup].open;
            postfix = this.options.markup[markup].close + postfix;
        }
        const end = {
            withoutPrefix: this.field.text.length,
            withPrefix: this.field.text.length + prefix.length,
        };
        this.field.text += prefix;
        this.field.level++;
        this.convert(node.value);
        this.field.level--;
        const added = this.field.text.substring(end.withPrefix);
        if (!added) { // nothing was added, so remove prefix
            this.field.text = this.field.text.substring(0, end.withoutPrefix);
        }
        else if (this.field.preserveRanges && prefix === this.options.markup.caseProtect.open && !added.match(preserveCase.hasCased)) { // something was added that didn't actually need case protection
            this.field.text = this.field.text.substring(0, end.withoutPrefix) + added;
            this.field.preserveRanges = this.field.preserveRanges.filter(range => range.start < end.withoutPrefix);
        }
        else {
            this.field.text += postfix;
        }
        this.field.text = this.field.text.replace(/<(sup|sub)>([^<>]+)<\/\1>$/i, (m, mode, chars) => {
            const cmd = mode === 'sup' ? '^' : '_';
            let script = '';
            for (const char of chars) {
                const unicode = unicode2latex_1.latex[`${cmd}${char}`] || unicode2latex_1.latex[`${cmd}{${char}}`];
                script += unicode ? unicode : `<${mode}>${char}</${mode}>`;
            }
            script = script.replace(new RegExp(`</${mode}><${mode}>`, 'g'), '');
            return script.length < m.length ? script : m;
        });
        if (node.case && this.field.preserveRanges)
            this.preserve(start, this.field.text.length); // , 'in convert-block ' + node.source || '<source>')
    }
}
/**
 * parse bibtex. This will try to convert TeX commands into unicode equivalents, and apply `@string` expansion
 */
function parse(input, options = {}) {
    const parser = new Parser(options);
    return parser.parse(input);
}
exports.parse = parse;
function ast(input, options = {}, clean = true) {
    const parser = new Parser(options);
    return parser.ast(input, clean);
}
exports.ast = ast;
var chunker_2 = __webpack_require__(/*! ./chunker */ "../node_modules/@retorquere/bibtex-parser/chunker.js");
Object.defineProperty(exports, "chunker", { enumerable: true, get: function () { return chunker_2.parse; } });
var jabref_1 = __webpack_require__(/*! ./jabref */ "../node_modules/@retorquere/bibtex-parser/jabref.js");
Object.defineProperty(exports, "jabref", { enumerable: true, get: function () { return jabref_1.parse; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@retorquere/bibtex-parser/jabref.js":
/*!***********************************************************!*\
  !*** ../node_modules/@retorquere/bibtex-parser/jabref.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
function decode(s, sep = ';') {
    s = s.replace(/\n/g, '');
    let pos = 0;
    const records = [''];
    while (pos < s.length) {
        switch (s[pos]) {
            case '\\':
                pos++;
                records[0] += s[pos];
                break;
            case sep:
                records.unshift('');
                break;
            default:
                records[0] += s[pos];
        }
        pos++;
    }
    return records.reverse().filter(record => record);
}
const prefixes = {
    fileDirectory: 'jabref-meta: fileDirectory:',
    groupsversion: 'jabref-meta: groupsversion:',
    groupstree: 'jabref-meta: groupstree:',
};
/**
 * Import the JabRef groups from the `@string` comments in which they were stored. You would typically pass the comments parsed by [[bibtex.parse]] in here.
 *
 * JabRef knows several group types, and this parser parses most, but not all of them:
 *
 * * independent group: the keys listed in the group are the entries that are considered to belong to it
 * * intersection: the keys listed in the group are considered to belong to the group if they're also in the parent group
 * * union: the keys listed in the group are considered to belong to the group, and also the keys that are in the parent group
 * * query: not supported by this parser
 */
function parse(comments) {
    const result = {
        root: [],
        groups: {},
        fileDirectory: '',
        version: '',
    };
    const levels = [];
    const decoded = {
        fileDirectory: null,
        groupsversion: null,
        groupstree: null,
    };
    for (const comment of comments) {
        for (const [meta, prefix] of Object.entries(prefixes)) {
            if (comment.startsWith(prefix)) {
                decoded[meta] = decode(comment.substring(prefix.length));
            }
        }
    }
    result.version = decoded.groupsversion && decoded.groupsversion[0];
    result.fileDirectory = decoded.fileDirectory && decoded.fileDirectory[0];
    if (!decoded.groupstree)
        return result;
    for (const encoded of decoded.groupstree) {
        const fields = decode(encoded);
        const level_type_name = decode(fields.shift(), ':');
        const m = /^([0-9]+) (.+)/.exec(level_type_name[0]);
        if (!m)
            break;
        const level = parseInt(m[1]);
        // const type = m[2]
        if (level === 0)
            continue; // root
        const name = level_type_name[1];
        const intersection = decode(fields.shift())[0];
        const keys = fields.map(field => decode(field)[0]);
        const group = {
            name,
            entries: keys,
            groups: [],
        };
        result.groups[name] = result.groups[name] || group;
        if (levels.length < level) {
            levels.push(group);
        }
        else {
            levels[level - 1] = group;
        }
        if (level === 1) {
            result.root.push(group);
        }
        else {
            const parent = levels[level - 2];
            switch (intersection) {
                case '0': // independent
                    break;
                case '1': // intersect
                    group.entries = group.entries.filter(key => parent.entries.includes(key));
                    break;
                case '2': // union
                    group.entries = group.entries.concat(parent.entries.filter(key => !group.entries.includes(key)));
                    break;
            }
            levels[level - 2].groups.push(group);
        }
    }
    return result;
}
exports.parse = parse;
//# sourceMappingURL=jabref.js.map

/***/ }),

/***/ "../node_modules/string-template/index.js":
/*!************************************************!*\
  !*** ../node_modules/string-template/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var nargs = /\{([0-9a-zA-Z_]+)\}/g

module.exports = template

function template(string) {
    var args

    if (arguments.length === 2 && typeof arguments[1] === "object") {
        args = arguments[1]
    } else {
        args = new Array(arguments.length - 1)
        for (var i = 1; i < arguments.length; ++i) {
            args[i - 1] = arguments[i]
        }
    }

    if (!args || !args.hasOwnProperty) {
        args = {}
    }

    return string.replace(nargs, function replaceArg(match, i, index) {
        var result

        if (string[index - 1] === "{" &&
            string[index + match.length] === "}") {
            return i
        } else {
            result = args.hasOwnProperty(i) ? args[i] : null
            if (result === null || result === undefined) {
                return ""
            }

            return result
        }
    })
}


/***/ }),

/***/ "../node_modules/unicode2latex/index.js":
/*!**********************************************!*\
  !*** ../node_modules/unicode2latex/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ascii: __webpack_require__(/*! ./tables/ascii.json */ "../node_modules/unicode2latex/tables/ascii.json"),
  ascii_bibtex_creator: __webpack_require__(/*! ./tables/ascii-bibtex-creator.json */ "../node_modules/unicode2latex/tables/ascii-bibtex-creator.json"),
  unicode: __webpack_require__(/*! ./tables/unicode.json */ "../node_modules/unicode2latex/tables/unicode.json"),
  latex: __webpack_require__(/*! ./tables/latex.json */ "../node_modules/unicode2latex/tables/latex.json"),
  diacritics: __webpack_require__(/*! ./tables/diacritics.json */ "../node_modules/unicode2latex/tables/diacritics.json"),
};


/***/ }),

/***/ "../node_modules/unicode2latex/tables/ascii-bibtex-creator.json":
/*!**********************************************************************!*\
  !*** ../node_modules/unicode2latex/tables/ascii-bibtex-creator.json ***!
  \**********************************************************************/
/*! exports provided: #, $, %, &, /​, <, >, \, ^, _, i︠a︡, {, }, ~,  , ¡, ¢, £, ¤, ¥, ¦, §, ¨, ©, ª, «, ¬, ­, ®, ¯, °, ±, ², ³, ´, µ, ¶, ·, ¸, ¹, º, », ¼, ½, ¾, ¿, À, Á, Â, Ã, Ä, Å, Æ, Ç, È, É, Ê, Ë, Ì, Í, Î, Ï, Ð, Ñ, Ò, Ó, Ô, Õ, Ö, ×, Ø, Ù, Ú, Û, Ü, Ý, Þ, ß, à, á, â, ã, ä, å, æ, ç, è, é, ê, ë, ì, í, î, ï, ð, ñ, ò, ó, ô, õ, ö, ÷, ø, ù, ú, û, ü, ý, þ, ÿ, Ā, ā, Ă, ă, Ą, ą, Ć, ć, Ĉ, ĉ, Ċ, ċ, Č, č, Ď, ď, Đ, đ, Ē, ē, Ĕ, ĕ, Ė, ė, Ę, ę, Ě, ě, Ĝ, ĝ, Ğ, ğ, Ġ, ġ, Ģ, ģ, Ĥ, ĥ, Ħ, ħ, Ĩ, ĩ, Ī, ī, Ĭ, ĭ, Į, į, İ, ı, Ĳ, ĳ, Ĵ, ĵ, Ķ, ķ, ĸ, Ĺ, ĺ, Ļ, ļ, Ľ, ľ, Ŀ, ŀ, Ł, ł, Ń, ń, Ņ, ņ, Ň, ň, ŉ, Ŋ, ŋ, Ō, ō, Ŏ, ŏ, Ő, ő, Œ, œ, Ŕ, ŕ, Ŗ, ŗ, Ř, ř, Ś, ś, Ŝ, ŝ, Ş, ş, Š, š, Ţ, ţ, Ť, ť, Ŧ, ŧ, Ũ, ũ, Ū, ū, Ŭ, ŭ, Ů, ů, Ű, ű, Ų, ų, Ŵ, ŵ, Ŷ, ŷ, Ÿ, Ź, ź, Ż, ż, Ž, ž, ſ, ƒ, ƕ, ƞ, ƪ, Ƶ, ƺ, ǂ, Ǎ, ǎ, Ǐ, ǐ, Ǒ, ǒ, Ǔ, ǔ, Ǧ, ǧ, Ǩ, ǩ, Ǫ, ǫ, ǰ, Ǵ, ǵ, Ȩ, ȩ, ȷ, ɐ, ɒ, ɔ, ɖ, ɘ, ə, ɛ, ɡ, ɣ, ɤ, ɥ, ɬ, ɭ, ɯ, ɰ, ɱ, ɲ, ɳ, ɷ, ɸ, ɹ, ɺ, ɻ, ɼ, ɽ, ɾ, ɿ, ʂ, ʃ, ʇ, ʈ, ʊ, ʋ, ʌ, ʍ, ʎ, ʐ, ʒ, ʔ, ʕ, ʖ, ʞ, ʤ, ʧ, ʰ, ʲ, ʳ, ʷ, ʸ, ʹ, ʻ, ʼ, ʽ, ʿ, ˆ, ˇ, ˈ, ˉ, ˌ, ː, ˑ, ˒, ˓, ˔, ˕, ˘, ˙, ˚, ˛, ˜, ˝, ˡ, ˢ, ˣ, ˥, ˦, ˧, ˨, ˩, ̀, ̀̄, ̄̀, ̀̇, ̇̀, ́, ́̄, ̄́, ́̌, ̌́, ̂, ̂̇, ̇̂, ̃, ̃̇, ̇̃, ̄, ̅, ̆, ̆̄, ̄̆, ̇, ̇́, ́̇, ̇̆, ̆̇, ̈, ̉, ̊, ̊̄, ̄̊, ̋, ̌, ̍, ̎, ̏, ̐, ̑, ̒, ̕, ̖, ̘, ̙, ̚, ̜, ̝, ̞, ̟, ̡, ̢, ̣, ̤, ̥, ̧, ̨, ̩, ̪, ̫, ̬, ̯, ̰, ̱, ̲, ̴, ̵, ̶, ̷, ̸, ̹, ̺, ̻, ̼, ̽, ͡, ʹ, ͵, ;, Ά, Έ, Ή, Ί, Ό, Ύ, Ώ, ΐ, Α, Β, Γ, Δ, Ε, Ζ, Η, Θ, Ι, Κ, Λ, Μ, Ν, Ξ, Ο, Π, Ρ, Σ, Τ, Υ, Φ, Χ, Ψ, Ω, Ϊ, Ϋ, ά, έ, ή, ί, ΰ, α, β, γ, δ, ε, ζ, η, θ, ι, κ, λ, μ, ν, ξ, ο, π, ρ, ς, σ, τ, υ, φ, χ, ψ, ω, ϊ, ϋ, ό, ύ, ώ, ϐ, ϑ, ϒ, ϕ, ϖ, Ϙ, ϙ, Ϛ, ϛ, Ϝ, ϝ, Ϟ, ϟ, Ϡ, ϡ, ϰ, ϱ, ϴ, ϵ, ϶, Ё, Ђ, Ѓ, Є, Ѕ, І, Ї, Ј, Љ, Њ, Ћ, Ќ, Ў, Џ, А, Б, В, Г, Д, Е, Ж, З, И, Й, К, Л, М, Н, О, П, Р, С, Т, У, Ф, Х, Ц, Ч, Ш, Щ, Ъ, Ы, Ь, Э, Ю, Я, а, б, в, г, д, е, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я, ё, ђ, ѓ, є, ѕ, і, ї, ј, љ, њ, ћ, ќ, ў, џ, Ѡ, ѡ, Ѣ, Ѥ, ѥ, Ѧ, ѧ, Ѩ, ѩ, Ѫ, Ѭ, ѭ, Ѯ, ѯ, Ѱ, ѱ, Ѳ, Ѵ, Ѹ, ѹ, Ѻ, ѻ, Ѽ, ѽ, Ѿ, ѿ, Ҁ, ҁ, ҂, ҈, ҉, Ҍ, ҍ, Ҏ, ҏ, Ґ, ґ, Ғ, ғ, Ҕ, ҕ, Җ, җ, Ҙ, ҙ, Қ, қ, Ҝ, ҝ, Ҟ, ҟ, Ҡ, ҡ, Ң, ң, Ҥ, ҥ, Ҧ, ҧ, Ҩ, ҩ, Ҫ, ҫ, Ҭ, ҭ, Ү, ү, Ұ, ұ, Ҳ, ҳ, Ҵ, ҵ, Ҷ, ҷ, Ҹ, ҹ, Һ, һ, Ҽ, ҽ, Ҿ, ҿ, Ӏ, Ӄ, ӄ, Ӈ, ӈ, Ӌ, ӌ, Ӕ, ӕ, Ә, ә, Ӡ, ӡ, Ө, ө, ࡱ, ᵃ, ᵇ, ᵈ, ᵉ, ᵍ, ᵏ, ᵐ, ᵒ, ᵖ, ᵗ, ᵘ, ᵛ, ᶜ, ᶠ, ᶻ, Ḃ, ḃ, Ḅ, ḅ, Ḇ, ḇ, Ḋ, ḋ, Ḍ, ḍ, Ḏ, ḏ, Ḑ, ḑ, Ḝ, ḝ, Ḟ, ḟ, Ḡ, ḡ, Ḣ, ḣ, Ḥ, ḥ, Ḧ, ḧ, Ḩ, ḩ, Ḱ, ḱ, Ḳ, ḳ, Ḵ, ḵ, Ḷ, ḷ, Ḻ, ḻ, Ḿ, ḿ, Ṁ, ṁ, Ṃ, ṃ, Ṅ, ṅ, Ṇ, ṇ, Ṉ, ṉ, Ṕ, ṕ, Ṗ, ṗ, Ṙ, ṙ, Ṛ, ṛ, Ṟ, ṟ, Ṡ, ṡ, Ṣ, ṣ, Ṫ, ṫ, Ṭ, ṭ, Ṯ, ṯ, Ṽ, ṽ, Ṿ, ṿ, Ẁ, ẁ, Ẃ, ẃ, Ẅ, ẅ, Ẇ, ẇ, Ẉ, ẉ, Ẋ, ẋ, Ẍ, ẍ, Ẏ, ẏ, Ẑ, ẑ, Ẓ, ẓ, Ẕ, ẕ, ẖ, ẗ, ẘ, ẙ, Ạ, ạ, Ẹ, ẹ, Ẽ, ẽ, Ị, ị, Ọ, ọ, Ụ, ụ, Ỳ, ỳ, Ỵ, ỵ, Ỹ, ỹ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , ​, ‌, ‐, ‑, ‒, –, —, ―, ‖, ‗, ‘, ’, ‚, ‛, “, ”, „, ‟, †, ‡, •, ‣, ․, ‥, …, ‧,  , ‰, ‱, ′, ″, ‴, ‵, ‶, ‷, ‸, ‹, ›, ‼, ‾, ⁃, ⁄, ⁇, ⁈, ⁉, ⁊, ⁐, ⁗,  , ⁠, ⁰, ⁱ, ⁴, ⁵, ⁶, ⁷, ⁸, ⁹, ⁺, ⁻, ⁼, ⁽, ⁾, ⁿ, ₀, ₁, ₂, ₃, ₄, ₅, ₆, ₇, ₈, ₉, ₊, ₋, ₌, ₍, ₎, ₐ, ₑ, ₒ, ₓ, ₔ, ₕ, ₖ, ₗ, ₘ, ₙ, ₚ, ₛ, ₜ, ₧, €, ⃐, ⃑, ⃒, ⃖, ⃗, ⃛, ⃜, ⃝, ⃞, ⃟, ⃡, ⃤, ⃧, ⃨, ⃩, ⃬, ⃭, ⃮, ⃯, ⃰, ℀, ℁, ℂ, ℃, ℅, ℆, ℇ, ℉, ℊ, ℋ, ℌ, ℍ, ℎ, ℏ, ℐ, ℑ, ℒ, ℓ, ℕ, №, ℗, ℘, ℙ, ℚ, ℛ, ℜ, ℝ, ℞, ℠, ℡, ™, ℤ, Ω, ℧, ℨ, ℩, K, Å, ℬ, ℭ, ℮, ℯ, ℰ, ℱ, Ⅎ, ℳ, ℴ, ℵ, ℶ, ℷ, ℸ, ℼ, ℽ, ℾ, ℿ, ⅀, ⅁, ⅂, ⅃, ⅄, ⅅ, ⅆ, ⅇ, ⅈ, ⅉ, ⅊, ⅋, ⅐, ⅑, ⅒, ⅓, ⅔, ⅕, ⅖, ⅗, ⅘, ⅙, ⅚, ⅛, ⅜, ⅝, ⅞, ⅟, Ⅰ, Ⅱ, Ⅲ, Ⅳ, Ⅴ, Ⅵ, Ⅶ, Ⅷ, Ⅸ, Ⅹ, Ⅺ, Ⅻ, Ⅼ, Ⅽ, Ⅾ, Ⅿ, ⅰ, ⅱ, ⅲ, ⅳ, ⅴ, ⅵ, ⅶ, ⅷ, ⅸ, ⅹ, ⅺ, ⅻ, ⅼ, ⅽ, ⅾ, ⅿ, ↉, ←, ↑, →, ↓, ↔, ↕, ↖, ↗, ↘, ↙, ↚, ↛, ↜, ↝, ↞, ↟, ↠, ↡, ↢, ↣, ↤, ↥, ↦, ↧, ↨, ↩, ↪, ↫, ↬, ↭, ↮, ↯, ↰, ↱, ↲, ↳, ↴, ↵, ↶, ↷, ↸, ↹, ↺, ↻, ↼, ↽, ↾, ↿, ⇀, ⇁, ⇂, ⇃, ⇄, ⇅, ⇆, ⇇, ⇈, ⇉, ⇊, ⇋, ⇌, ⇍, ⇎, ⇏, ⇐, ⇑, ⇒, ⇓, ⇔, ⇕, ⇖, ⇗, ⇘, ⇙, ⇚, ⇛, ⇜, ⇝, ⇞, ⇟, ⇠, ⇡, ⇢, ⇣, ⇤, ⇥, ⇦, ⇧, ⇨, ⇩, ⇪, ⇴, ⇵, ⇶, ⇷, ⇸, ⇹, ⇺, ⇻, ⇼, ⇽, ⇾, ⇿, ∀, ∁, ∂, ∃, ∄, ∅, ∆, ∇, ∈, ∉, ∊, ∋, ∌, ∍, ∎, ∏, ∐, ∑, −, ∓, ∔, ∕, ∖, ∗, ∘, ∙, √, ∛, ∜, ∝, ∞, ∟, ∠, ∡, ∢, ∣, ∤, ∥, ∦, ∧, ∨, ∩, ∪, ∫, ∬, ∭, ∮, ∯, ∰, ∱, ∲, ∳, ∴, ∵, ∶, ∷, ∸, ∹, ∺, ∻, ∼, ∽, ∾, ∿, ≀, ≁, ≂, ≂̸, ≃, ≄, ≅, ≆, ≇, ≈, ≉, ≊, ≋, ≋̸, ≌, ≍, ≎, ≎̸, ≏, ≏̸, ≐, ≐̸, ≑, ≒, ≓, ≔, ≕, ≖, ≗, ≘, ≙, ≛, ≜, ≝, ≞, ≠, ≡, ≢, ≣, ≤, ≥, ≦, ≧, ≨, ≨︀, ≩, ≩︀, ≪, ≪̸, ≫, ≫̸, ≬, ≭, ≮, ≯, ≰, ≱, ≲, ≳, ≶, ≷, ≸, ≹, ≺, ≻, ≼, ≽, ≾, ≾̸, ≿, ≿̸, ⊀, ⊁, ⊂, ⊃, ⊄, ⊅, ⊆, ⊇, ⊈, ⊉, ⊊, ⊊︀, ⊋, ⊋︀, ⊌, ⊍, ⊎, ⊏, ⊏̸, ⊐, ⊐̸, ⊑, ⊒, ⊓, ⊔, ⊕, ⊖, ⊗, ⊘, ⊙, ⊚, ⊛, ⊜, ⊝, ⊞, ⊟, ⊠, ⊡, ⊢, ⊣, ⊤, ⊥, ⊦, ⊧, ⊨, ⊩, ⊪, ⊫, ⊬, ⊭, ⊮, ⊯, ⊰, ⊱, ⊲, ⊳, ⊴, ⊵, ⊶, ⊷, ⊸, ⊹, ⊺, ⊻, ⊼, ⊽, ⊾, ⊿, ⋂, ⋃, ⋄, ⋅, ⋆, ⋇, ⋈, ⋉, ⋊, ⋋, ⋌, ⋍, ⋎, ⋏, ⋐, ⋑, ⋒, ⋓, ⋔, ⋕, ⋖, ⋗, ⋘, ⋙, ⋚, ⋛, ⋜, ⋝, ⋞, ⋟, ⋠, ⋡, ⋢, ⋣, ⋤, ⋥, ⋦, ⋧, ⋨, ⋩, ⋪, ⋫, ⋬, ⋭, ⋮, ⋯, ⋰, ⋱, ⋲, ⋳, ⋴, ⋵, ⋶, ⋷, ⋸, ⋹, ⋺, ⋻, ⋼, ⋽, ⋾, ⋿, ⌀, ⌂, ⌅, ⌆, ⌈, ⌉, ⌊, ⌋, ⌐, ⌑, ⌒, ⌓, ⌕, ⌖, ⌗, ⌙, ⌜, ⌝, ⌞, ⌟, ⌠, ⌡, ⌢, ⌣, 〈, 〉, ⌬, ⌲, ⌶, ⌹, ⌿, ⍀, ⍇, ⍈, ⍉, ⍐, ⍓, ⍗, ⍝, ⍞, ⍟, ⍰, ⍼, ⎔, ⎛, ⎜, ⎝, ⎞, ⎟, ⎠, ⎡, ⎢, ⎣, ⎤, ⎥, ⎦, ⎧, ⎨, ⎩, ⎪, ⎫, ⎬, ⎭, ⎮, ⎯, ⎰, ⎱, ⎲, ⎳, ⎴, ⎵, ⎶, ⎷, ⎸, ⎹, ⏎, ⏜, ⏝, ⏞, ⏟, ⏠, ⏡, ⏢, ⏣, ⏤, ⏥, ⏦, ⏧, ␀, ␁, ␂, ␃, ␄, ␅, ␆, ␇, ␈, ␉, ␊, ␋, ␌, ␍, ␎, ␏, ␐, ␑, ␒, ␓, ␔, ␕, ␖, ␗, ␘, ␙, ␚, ␛, ␜, ␝, ␞, ␟, ␠, ␡, ␣, ␤, ␥, ␦, ①, ②, ③, ④, ⑤, ⑥, ⑦, ⑧, ⑨, ⑩, ⑪, ⑫, ⑬, ⑭, ⑮, ⑯, ⑰, ⑱, ⑲, ⑳, ⑴, ⑵, ⑶, ⑷, ⑸, ⑹, ⑺, ⑻, ⑼, ⑽, ⑾, ⑿, ⒀, ⒁, ⒂, ⒃, ⒄, ⒅, ⒆, ⒇, ⒈, ⒉, ⒊, ⒋, ⒌, ⒍, ⒎, ⒏, ⒐, ⒑, ⒒, ⒓, ⒔, ⒕, ⒖, ⒗, ⒘, ⒙, ⒚, ⒛, ⒜, ⒝, ⒞, ⒟, ⒠, ⒡, ⒢, ⒣, ⒤, ⒥, ⒦, ⒧, ⒨, ⒩, ⒪, ⒫, ⒬, ⒭, ⒮, ⒯, ⒰, ⒱, ⒲, ⒳, ⒴, ⒵, Ⓐ, Ⓑ, Ⓒ, Ⓓ, Ⓔ, Ⓕ, Ⓖ, Ⓗ, Ⓘ, Ⓙ, Ⓚ, Ⓛ, Ⓜ, Ⓝ, Ⓞ, Ⓟ, Ⓠ, Ⓡ, Ⓢ, Ⓣ, Ⓤ, Ⓥ, Ⓦ, Ⓧ, Ⓨ, Ⓩ, ⓐ, ⓑ, ⓒ, ⓓ, ⓔ, ⓕ, ⓖ, ⓗ, ⓘ, ⓙ, ⓚ, ⓛ, ⓜ, ⓝ, ⓞ, ⓟ, ⓠ, ⓡ, ⓢ, ⓣ, ⓤ, ⓥ, ⓦ, ⓧ, ⓨ, ⓩ, ⓪, ─, ━, │, ┃, ┄, ┅, ┆, ┇, ┈, ┉, ┊, ┋, ┌, ┍, ┎, ┏, ┐, ┑, ┒, ┓, └, ┕, ┖, ┗, ┘, ┙, ┚, ┛, ├, ┝, ┞, ┟, ┠, ┡, ┢, ┣, ┤, ┥, ┦, ┧, ┨, ┩, ┪, ┫, ┬, ┭, ┮, ┯, ┰, ┱, ┲, ┳, ┴, ┵, ┶, ┷, ┸, ┹, ┺, ┻, ┼, ┽, ┾, ┿, ╀, ╁, ╂, ╃, ╄, ╅, ╆, ╇, ╈, ╉, ╊, ╋, ╌, ╍, ╎, ╏, ═, ║, ╒, ╓, ╔, ╕, ╖, ╗, ╘, ╙, ╚, ╛, ╜, ╝, ╞, ╟, ╠, ╡, ╢, ╣, ╤, ╥, ╦, ╧, ╨, ╩, ╪, ╫, ╬, ╭, ╮, ╯, ╰, ╱, ╲, ╳, ╼, ╽, ╾, ╿, ▀, ▄, █, ▌, ▐, ░, ▒, ▓, ■, □, ▢, ▣, ▤, ▥, ▦, ▧, ▨, ▩, ▪, ▫, ▬, ▭, ▮, ▯, ▰, ▲, △, ▴, ▵, ▶, ▷, ▸, ▹, ►, ▻, ▼, ▽, ▾, ▿, ◀, ◁, ◂, ◃, ◄, ◅, ◆, ◇, ◈, ◉, ◊, ○, ◌, ◍, ◎, ●, ◐, ◑, ◒, ◓, ◔, ◕, ◖, ◗, ◘, ◙, ◚, ◛, ◜, ◝, ◞, ◟, ◠, ◡, ◢, ◣, ◤, ◥, ◦, ◧, ◨, ◩, ◪, ◫, ◬, ◭, ◮, ◯, ◰, ◱, ◲, ◳, ◴, ◵, ◶, ◷, ◸, ◹, ◺, ◻, ◼, ◽, ◾, ◿, ★, ☆, ☉, ☎, ☐, ☑, ☒, ☓, ☕, ☛, ☞, ☠, ☡, ☢, ☣, ☯, ☹, ☺, ☻, ☼, ☽, ☾, ☿, ♀, ♁, ♂, ♃, ♄, ♅, ♆, ♇, ♈, ♉, ♊, ♋, ♌, ♍, ♎, ♏, ♐, ♑, ♒, ♓, ♠, ♡, ♢, ♣, ♤, ♥, ♦, ♧, ♩, ♪, ♫, ♬, ♭, ♮, ♯, ♻, ♾, ⚀, ⚁, ⚂, ⚃, ⚄, ⚅, ⚆, ⚇, ⚈, ⚉, ⚓, ⚔, ⚠, ⚥, ⚪, ⚫, ⚬, ⚲, ✁, ✂, ✃, ✄, ✆, ✇, ✈, ✉, ✌, ✍, ✎, ✏, ✐, ✑, ✒, ✓, ✔, ✕, ✖, ✗, ✘, ✙, ✚, ✛, ✜, ✝, ✞, ✟, ✠, ✡, ✢, ✣, ✤, ✥, ✦, ✧, ✩, ✪, ✫, ✬, ✭, ✮, ✯, ✰, ✱, ✲, ✳, ✴, ✵, ✶, ✷, ✸, ✹, ✺, ✻, ✼, ✽, ✾, ✿, ❀, ❁, ❂, ❃, ❄, ❅, ❆, ❇, ❈, ❉, ❊, ❋, ❍, ❏, ❐, ❑, ❒, ❖, ❘, ❙, ❚, ❛, ❜, ❝, ❞, ❡, ❢, ❣, ❤, ❥, ❦, ❧, ❲, ❳, ❶, ❷, ❸, ❹, ❺, ❻, ❼, ❽, ❾, ❿, ➀, ➁, ➂, ➃, ➄, ➅, ➆, ➇, ➈, ➉, ➊, ➋, ➌, ➍, ➎, ➏, ➐, ➑, ➒, ➓, ➔, ➘, ➙, ➚, ➛, ➜, ➝, ➞, ➟, ➠, ➡, ➢, ➣, ➤, ➥, ➦, ➧, ➨, ➩, ➪, ➫, ➬, ➭, ➮, ➯, ➱, ➲, ➳, ➴, ➵, ➶, ➷, ➸, ➹, ➺, ➻, ➼, ➽, ➾, ⟀, ⟁, ⟂, ⟃, ⟄, ⟅, ⟆, ⟇, ⟈, ⟉, ⟌, ⟐, ⟑, ⟒, ⟓, ⟔, ⟕, ⟖, ⟗, ⟘, ⟙, ⟚, ⟛, ⟜, ⟝, ⟞, ⟟, ⟠, ⟡, ⟢, ⟣, ⟤, ⟥, ⟦, ⟧, ⟨, ⟩, ⟪, ⟫, ⟬, ⟭, ⟮, ⟯, ⟰, ⟱, ⟲, ⟳, ⟴, ⟵, ⟶, ⟷, ⟸, ⟹, ⟺, ⟻, ⟼, ⟽, ⟾, ⟿, ⤀, ⤁, ⤂, ⤃, ⤄, ⤆, ⤇, ⤈, ⤉, ⤊, ⤋, ⤌, ⤍, ⤎, ⤏, ⤐, ⤑, ⤒, ⤓, ⤔, ⤕, ⤖, ⤗, ⤘, ⤙, ⤚, ⤛, ⤜, ⤝, ⤞, ⤟, ⤠, ⤡, ⤢, ⤫, ⤬, ⤭, ⤮, ⤯, ⤰, ⤱, ⤲, ⤴, ⤵, ⤸, ⤹, ⤺, ⤻, ⤼, ⤽, ⤾, ⤿, ⥀, ⥁, ⥂, ⥃, ⥄, ⥅, ⥆, ⥇, ⥈, ⥉, ⥊, ⥋, ⥌, ⥍, ⥎, ⥏, ⥐, ⥑, ⥒, ⥓, ⥔, ⥕, ⥖, ⥗, ⥘, ⥙, ⥚, ⥛, ⥜, ⥝, ⥞, ⥟, ⥠, ⥡, ⥢, ⥣, ⥤, ⥥, ⥦, ⥧, ⥨, ⥩, ⥪, ⥫, ⥬, ⥭, ⥮, ⥯, ⥰, ⥱, ⥲, ⥳, ⥴, ⥵, ⥶, ⥷, ⥸, ⥹, ⥺, ⥻, ⥾, ⥿, ⦀, ⦁, ⦂, ⦃, ⦄, ⦆, ⦇, ⦈, ⦉, ⦊, ⦋, ⦌, ⦍, ⦎, ⦏, ⦐, ⦑, ⦒, ⦓, ⦕, ⦖, ⦗, ⦘, ⦙, ⦚, ⦛, ⦜, ⦝, ⦞, ⦟, ⦠, ⦡, ⦢, ⦣, ⦤, ⦥, ⦦, ⦧, ⦨, ⦩, ⦪, ⦫, ⦬, ⦭, ⦮, ⦯, ⦰, ⦱, ⦲, ⦳, ⦴, ⦷, ⦸, ⦹, ⦺, ⦻, ⦼, ⦽, ⦾, ⦿, ⧀, ⧁, ⧂, ⧃, ⧄, ⧅, ⧆, ⧇, ⧈, ⧉, ⧊, ⧋, ⧌, ⧍, ⧎, ⧏, ⧏̸, ⧐, ⧐̸, ⧑, ⧒, ⧓, ⧔, ⧕, ⧖, ⧗, ⧘, ⧙, ⧚, ⧛, ⧝, ⧞, ⧟, ⧠, ⧡, ⧢, ⧣, ⧤, ⧥, ⧦, ⧧, ⧨, ⧩, ⧪, ⧫, ⧬, ⧭, ⧮, ⧯, ⧰, ⧱, ⧲, ⧳, ⧴, ⧵, ⧶, ⧷, ⧸, ⧹, ⧺, ⧻, ⧼, ⧽, ⧾, ⧿, ⨀, ⨁, ⨂, ⨃, ⨄, ⨅, ⨆, ⨇, ⨈, ⨉, ⨊, ⨋, ⨌, ⨍, ⨎, ⨏, ⨑, ⨒, ⨓, ⨔, ⨕, ⨖, ⨗, ⨘, ⨙, ⨚, ⨛, ⨜, ⨝, ⨞, ⨟, ⨠, ⨡, ⨢, ⨣, ⨤, ⨦, ⨧, ⨨, ⨩, ⨫, ⨬, ⨯, ⨰, ⨱, ⨲, ⨳, ⨶, ⨷, ⨸, ⨹, ⨺, ⨻, ⨽, ⨾, ⨿, ⩀, ⩁, ⩂, ⩃, ⩄, ⩅, ⩆, ⩇, ⩈, ⩉, ⩊, ⩋, ⩌, ⩍, ⩎, ⩏, ⩐, ⩑, ⩒, ⩓, ⩔, ⩖, ⩗, ⩘, ⩙, ⩚, ⩛, ⩜, ⩝, ⩞, ⩟, ⩠, ⩡, ⩢, ⩤, ⩥, ⩦, ⩧, ⩨, ⩩, ⩪, ⩫, ⩬, ⩭, ⩮, ⩯, ⩰, ⩱, ⩲, ⩳, ⩴, ⩵, ⩶, ⩷, ⩸, ⩹, ⩺, ⩻, ⩼, ⩽, ⩽̸, ⩾, ⩾̸, ⩿, ⪀, ⪁, ⪂, ⪃, ⪄, ⪅, ⪆, ⪇, ⪈, ⪉, ⪊, ⪋, ⪌, ⪍, ⪎, ⪏, ⪐, ⪑, ⪒, ⪓, ⪔, ⪕, ⪖, ⪗, ⪘, ⪙, ⪚, ⪛, ⪜, ⪝, ⪞, ⪟, ⪠, ⪡, ⪡̸, ⪢, ⪢̸, ⪣, ⪤, ⪥, ⪦, ⪧, ⪨, ⪩, ⪪, ⪫, ⪬, ⪭, ⪮, ⪯, ⪯̸, ⪰, ⪰̸, ⪱, ⪲, ⪳, ⪴, ⪵, ⪶, ⪷, ⪸, ⪹, ⪺, ⪻, ⪼, ⪽, ⪾, ⪿, ⫀, ⫁, ⫂, ⫃, ⫄, ⫅, ⫅̸, ⫆, ⫆̸, ⫇, ⫈, ⫉, ⫊, ⫋, ⫌, ⫍, ⫎, ⫏, ⫐, ⫑, ⫒, ⫓, ⫔, ⫕, ⫖, ⫗, ⫘, ⫙, ⫚, ⫛, ⫝̸, ⫝, ⫝̸, ⫞, ⫟, ⫠, ⫡, ⫢, ⫣, ⫤, ⫥, ⫦, ⫧, ⫨, ⫩, ⫪, ⫬, ⫭, ⫮, ⫯, ⫰, ⫱, ⫲, ⫳, ⫴, ⫵, ⫶, ⫷, ⫸, ⫹, ⫺, ⫻, ⫼, ⫽, ⫽⃥, ⫾, ⫿, ⬒, ⬓, ⬔, ⬕, ⬖, ⬗, ⬘, ⬙, ⬚, ⬛, ⬜, ⬝, ⬞, ⬟, ⬠, ⬡, ⬢, ⬣, ⬤, ⬥, ⬦, ⬧, ⬨, ⬩, ⬪, ⬫, ⬬, ⬭, ⬮, ⬯, ⬰, ⬱, ⬲, ⬳, ⬴, ⬵, ⬶, ⬷, ⬸, ⬹, ⬺, ⬻, ⬼, ⬽, ⬾, ⬿, ⭀, ⭁, ⭂, ⭃, ⭄, ⭅, ⭆, ⭇, ⭈, ⭉, ⭊, ⭋, ⭌, ⭐, ⭑, ⭒, ⭓, ⭔, 〈, 〉, 〒, 〔, 〕, 〚, 〛, 〰, ﬀ, ﬁ, ﬂ, ﬃ, ﬄ, ﬅ, ﬆ, �, 𝐀, 𝐁, 𝐂, 𝐃, 𝐄, 𝐅, 𝐆, 𝐇, 𝐈, 𝐉, 𝐊, 𝐋, 𝐌, 𝐍, 𝐎, 𝐏, 𝐐, 𝐑, 𝐒, 𝐓, 𝐔, 𝐕, 𝐖, 𝐗, 𝐘, 𝐙, 𝐚, 𝐛, 𝐜, 𝐝, 𝐞, 𝐟, 𝐠, 𝐡, 𝐢, 𝐣, 𝐤, 𝐥, 𝐦, 𝐧, 𝐨, 𝐩, 𝐪, 𝐫, 𝐬, 𝐭, 𝐮, 𝐯, 𝐰, 𝐱, 𝐲, 𝐳, 𝐴, 𝐵, 𝐶, 𝐷, 𝐸, 𝐹, 𝐺, 𝐻, 𝐼, 𝐽, 𝐾, 𝐿, 𝑀, 𝑁, 𝑂, 𝑃, 𝑄, 𝑅, 𝑆, 𝑇, 𝑈, 𝑉, 𝑊, 𝑋, 𝑌, 𝑍, 𝑎, 𝑏, 𝑐, 𝑑, 𝑒, 𝑓, 𝑔, 𝑖, 𝑗, 𝑘, 𝑙, 𝑚, 𝑛, 𝑜, 𝑝, 𝑞, 𝑟, 𝑠, 𝑡, 𝑢, 𝑣, 𝑤, 𝑥, 𝑦, 𝑧, 𝑨, 𝑩, 𝑪, 𝑫, 𝑬, 𝑭, 𝑮, 𝑯, 𝑰, 𝑱, 𝑲, 𝑳, 𝑴, 𝑵, 𝑶, 𝑷, 𝑸, 𝑹, 𝑺, 𝑻, 𝑼, 𝑽, 𝑾, 𝑿, 𝒀, 𝒁, 𝒂, 𝒃, 𝒄, 𝒅, 𝒆, 𝒇, 𝒈, 𝒉, 𝒊, 𝒋, 𝒌, 𝒍, 𝒎, 𝒏, 𝒐, 𝒑, 𝒒, 𝒓, 𝒔, 𝒕, 𝒖, 𝒗, 𝒘, 𝒙, 𝒚, 𝒛, 𝒜, 𝒞, 𝒟, 𝒢, 𝒥, 𝒦, 𝒩, 𝒪, 𝒫, 𝒬, 𝒮, 𝒯, 𝒰, 𝒱, 𝒲, 𝒳, 𝒴, 𝒵, 𝒶, 𝒷, 𝒸, 𝒹, 𝒻, 𝒽, 𝒾, 𝒿, 𝓀, 𝓁, 𝓂, 𝓃, 𝓅, 𝓆, 𝓇, 𝓈, 𝓉, 𝓊, 𝓋, 𝓌, 𝓍, 𝓎, 𝓏, 𝓐, 𝓑, 𝓒, 𝓓, 𝓔, 𝓕, 𝓖, 𝓗, 𝓘, 𝓙, 𝓚, 𝓛, 𝓜, 𝓝, 𝓞, 𝓟, 𝓠, 𝓡, 𝓢, 𝓣, 𝓤, 𝓥, 𝓦, 𝓧, 𝓨, 𝓩, 𝓪, 𝓫, 𝓬, 𝓭, 𝓮, 𝓯, 𝓰, 𝓱, 𝓲, 𝓳, 𝓴, 𝓵, 𝓶, 𝓷, 𝓸, 𝓹, 𝓺, 𝓻, 𝓼, 𝓽, 𝓾, 𝓿, 𝔀, 𝔁, 𝔂, 𝔃, 𝔄, 𝔅, 𝔇, 𝔈, 𝔉, 𝔊, 𝔍, 𝔎, 𝔏, 𝔐, 𝔑, 𝔒, 𝔓, 𝔔, 𝔖, 𝔗, 𝔘, 𝔙, 𝔚, 𝔛, 𝔜, 𝔞, 𝔟, 𝔠, 𝔡, 𝔢, 𝔣, 𝔤, 𝔥, 𝔦, 𝔧, 𝔨, 𝔩, 𝔪, 𝔫, 𝔬, 𝔭, 𝔮, 𝔯, 𝔰, 𝔱, 𝔲, 𝔳, 𝔴, 𝔵, 𝔶, 𝔷, 𝔸, 𝔹, 𝔻, 𝔼, 𝔽, 𝔾, 𝕀, 𝕁, 𝕂, 𝕃, 𝕄, 𝕆, 𝕊, 𝕋, 𝕌, 𝕍, 𝕎, 𝕏, 𝕐, 𝕒, 𝕓, 𝕔, 𝕕, 𝕖, 𝕗, 𝕘, 𝕙, 𝕚, 𝕛, 𝕜, 𝕝, 𝕞, 𝕟, 𝕠, 𝕡, 𝕢, 𝕣, 𝕤, 𝕥, 𝕦, 𝕧, 𝕨, 𝕩, 𝕪, 𝕫, 𝕬, 𝕭, 𝕮, 𝕯, 𝕰, 𝕱, 𝕲, 𝕳, 𝕴, 𝕵, 𝕶, 𝕷, 𝕸, 𝕹, 𝕺, 𝕻, 𝕼, 𝕽, 𝕾, 𝕿, 𝖀, 𝖁, 𝖂, 𝖃, 𝖄, 𝖅, 𝖆, 𝖇, 𝖈, 𝖉, 𝖊, 𝖋, 𝖌, 𝖍, 𝖎, 𝖏, 𝖐, 𝖑, 𝖒, 𝖓, 𝖔, 𝖕, 𝖖, 𝖗, 𝖘, 𝖙, 𝖚, 𝖛, 𝖜, 𝖝, 𝖞, 𝖟, 𝖠, 𝖡, 𝖢, 𝖣, 𝖤, 𝖥, 𝖦, 𝖧, 𝖨, 𝖩, 𝖪, 𝖫, 𝖬, 𝖭, 𝖮, 𝖯, 𝖰, 𝖱, 𝖲, 𝖳, 𝖴, 𝖵, 𝖶, 𝖷, 𝖸, 𝖹, 𝖺, 𝖻, 𝖼, 𝖽, 𝖾, 𝖿, 𝗀, 𝗁, 𝗂, 𝗃, 𝗄, 𝗅, 𝗆, 𝗇, 𝗈, 𝗉, 𝗊, 𝗋, 𝗌, 𝗍, 𝗎, 𝗏, 𝗐, 𝗑, 𝗒, 𝗓, 𝗔, 𝗕, 𝗖, 𝗗, 𝗘, 𝗙, 𝗚, 𝗛, 𝗜, 𝗝, 𝗞, 𝗟, 𝗠, 𝗡, 𝗢, 𝗣, 𝗤, 𝗥, 𝗦, 𝗧, 𝗨, 𝗩, 𝗪, 𝗫, 𝗬, 𝗭, 𝗮, 𝗯, 𝗰, 𝗱, 𝗲, 𝗳, 𝗴, 𝗵, 𝗶, 𝗷, 𝗸, 𝗹, 𝗺, 𝗻, 𝗼, 𝗽, 𝗾, 𝗿, 𝘀, 𝘁, 𝘂, 𝘃, 𝘄, 𝘅, 𝘆, 𝘇, 𝘈, 𝘉, 𝘊, 𝘋, 𝘌, 𝘍, 𝘎, 𝘏, 𝘐, 𝘑, 𝘒, 𝘓, 𝘔, 𝘕, 𝘖, 𝘗, 𝘘, 𝘙, 𝘚, 𝘛, 𝘜, 𝘝, 𝘞, 𝘟, 𝘠, 𝘡, 𝘢, 𝘣, 𝘤, 𝘥, 𝘦, 𝘧, 𝘨, 𝘩, 𝘪, 𝘫, 𝘬, 𝘭, 𝘮, 𝘯, 𝘰, 𝘱, 𝘲, 𝘳, 𝘴, 𝘵, 𝘶, 𝘷, 𝘸, 𝘹, 𝘺, 𝘻, 𝘼, 𝘽, 𝘾, 𝘿, 𝙀, 𝙁, 𝙂, 𝙃, 𝙄, 𝙅, 𝙆, 𝙇, 𝙈, 𝙉, 𝙊, 𝙋, 𝙌, 𝙍, 𝙎, 𝙏, 𝙐, 𝙑, 𝙒, 𝙓, 𝙔, 𝙕, 𝙖, 𝙗, 𝙘, 𝙙, 𝙚, 𝙛, 𝙜, 𝙝, 𝙞, 𝙟, 𝙠, 𝙡, 𝙢, 𝙣, 𝙤, 𝙥, 𝙦, 𝙧, 𝙨, 𝙩, 𝙪, 𝙫, 𝙬, 𝙭, 𝙮, 𝙯, 𝙰, 𝙱, 𝙲, 𝙳, 𝙴, 𝙵, 𝙶, 𝙷, 𝙸, 𝙹, 𝙺, 𝙻, 𝙼, 𝙽, 𝙾, 𝙿, 𝚀, 𝚁, 𝚂, 𝚃, 𝚄, 𝚅, 𝚆, 𝚇, 𝚈, 𝚉, 𝚊, 𝚋, 𝚌, 𝚍, 𝚎, 𝚏, 𝚐, 𝚑, 𝚒, 𝚓, 𝚔, 𝚕, 𝚖, 𝚗, 𝚘, 𝚙, 𝚚, 𝚛, 𝚜, 𝚝, 𝚞, 𝚟, 𝚠, 𝚡, 𝚢, 𝚣, 𝚤, 𝚥, 𝚨, 𝚩, 𝚪, 𝚫, 𝚬, 𝚭, 𝚮, 𝚯, 𝚰, 𝚱, 𝚲, 𝚳, 𝚴, 𝚵, 𝚶, 𝚷, 𝚸, 𝚹, 𝚺, 𝚻, 𝚼, 𝚽, 𝚾, 𝚿, 𝛀, 𝛁, 𝛂, 𝛃, 𝛄, 𝛅, 𝛆, 𝛇, 𝛈, 𝛉, 𝛊, 𝛋, 𝛌, 𝛍, 𝛎, 𝛏, 𝛐, 𝛑, 𝛒, 𝛓, 𝛔, 𝛕, 𝛖, 𝛗, 𝛘, 𝛙, 𝛚, 𝛛, 𝛜, 𝛝, 𝛞, 𝛟, 𝛠, 𝛡, 𝛢, 𝛣, 𝛤, 𝛥, 𝛦, 𝛧, 𝛨, 𝛩, 𝛪, 𝛫, 𝛬, 𝛭, 𝛮, 𝛯, 𝛰, 𝛱, 𝛲, 𝛳, 𝛴, 𝛵, 𝛶, 𝛷, 𝛸, 𝛹, 𝛺, 𝛻, 𝛼, 𝛽, 𝛾, 𝛿, 𝜀, 𝜁, 𝜂, 𝜃, 𝜄, 𝜅, 𝜆, 𝜇, 𝜈, 𝜉, 𝜊, 𝜋, 𝜌, 𝜍, 𝜎, 𝜏, 𝜐, 𝜑, 𝜒, 𝜓, 𝜔, 𝜕, 𝜖, 𝜗, 𝜘, 𝜙, 𝜚, 𝜛, 𝜜, 𝜝, 𝜞, 𝜟, 𝜠, 𝜡, 𝜢, 𝜣, 𝜤, 𝜥, 𝜦, 𝜧, 𝜨, 𝜩, 𝜪, 𝜫, 𝜬, 𝜭, 𝜮, 𝜯, 𝜰, 𝜱, 𝜲, 𝜳, 𝜴, 𝜵, 𝜶, 𝜷, 𝜸, 𝜹, 𝜺, 𝜻, 𝜼, 𝜽, 𝜾, 𝜿, 𝝀, 𝝁, 𝝂, 𝝃, 𝝄, 𝝅, 𝝆, 𝝇, 𝝈, 𝝉, 𝝊, 𝝋, 𝝌, 𝝍, 𝝎, 𝝏, 𝝐, 𝝑, 𝝒, 𝝓, 𝝔, 𝝕, 𝝖, 𝝗, 𝝘, 𝝙, 𝝚, 𝝛, 𝝜, 𝝝, 𝝞, 𝝟, 𝝠, 𝝡, 𝝢, 𝝣, 𝝤, 𝝥, 𝝦, 𝝧, 𝝨, 𝝩, 𝝪, 𝝫, 𝝬, 𝝭, 𝝮, 𝝯, 𝝰, 𝝱, 𝝲, 𝝳, 𝝴, 𝝵, 𝝶, 𝝷, 𝝸, 𝝹, 𝝺, 𝝻, 𝝼, 𝝽, 𝝾, 𝝿, 𝞀, 𝞁, 𝞂, 𝞃, 𝞄, 𝞅, 𝞆, 𝞇, 𝞈, 𝞉, 𝞊, 𝞋, 𝞌, 𝞍, 𝞎, 𝞏, 𝞐, 𝞑, 𝞒, 𝞓, 𝞔, 𝞕, 𝞖, 𝞗, 𝞘, 𝞙, 𝞚, 𝞛, 𝞜, 𝞝, 𝞞, 𝞟, 𝞠, 𝞡, 𝞢, 𝞣, 𝞤, 𝞥, 𝞦, 𝞧, 𝞨, 𝞩, 𝞪, 𝞫, 𝞬, 𝞭, 𝞮, 𝞯, 𝞰, 𝞱, 𝞲, 𝞳, 𝞴, 𝞵, 𝞶, 𝞷, 𝞸, 𝞹, 𝞺, 𝞻, 𝞼, 𝞽, 𝞾, 𝞿, 𝟀, 𝟁, 𝟂, 𝟃, 𝟄, 𝟅, 𝟆, 𝟇, 𝟈, 𝟉, 𝟊, 𝟋, 𝟎, 𝟏, 𝟐, 𝟑, 𝟒, 𝟓, 𝟔, 𝟕, 𝟖, 𝟗, 𝟘, 𝟙, 𝟚, 𝟛, 𝟜, 𝟝, 𝟞, 𝟟, 𝟠, 𝟡, 𝟢, 𝟣, 𝟤, 𝟥, 𝟦, 𝟧, 𝟨, 𝟩, 𝟪, 𝟫, 𝟬, 𝟭, 𝟮, 𝟯, 𝟰, 𝟱, 𝟲, 𝟳, 𝟴, 𝟵, 𝟶, 𝟷, 𝟸, 𝟹, 𝟺, 𝟻, 𝟼, 𝟽, 𝟾, 𝟿, default */
/*! all exports used */
/***/ (function(module) {

module.exports = JSON.parse("{\"#\":{\"math\":\"\\\\#\",\"text\":\"\\\\#\"},\"$\":{\"math\":\"\\\\$\",\"text\":\"\\\\$\"},\"%\":{\"math\":\"\\\\%\",\"text\":\"\\\\%\"},\"&\":{\"math\":\"\\\\&\",\"text\":\"\\\\&\"},\"/​\":{\"text\":\"{\\\\slash}\"},\"<\":{\"math\":\"<\"},\">\":{\"math\":\">\"},\"\\\\\":{\"math\":\"\\\\backslash\",\"text\":\"{\\\\textbackslash}\"},\"^\":{\"math\":\"\\\\sphat\",\"text\":\"\\\\^\"},\"_\":{\"math\":\"\\\\_\",\"text\":\"\\\\_\"},\"i︠a︡\":{\"text\":\"\\\\t{ia}\"},\"{\":{\"math\":\"\\\\lbrace\",\"text\":\"\\\\{\"},\"}\":{\"math\":\"\\\\rbrace\",\"text\":\"\\\\}\"},\"~\":{\"math\":\"\\\\sptilde\",\"text\":\"{\\\\textasciitilde}\"},\" \":{\"math\":\"~\",\"space\":true,\"text\":\"~\"},\"¡\":{\"text\":\"{\\\\textexclamdown}\"},\"¢\":{\"math\":\"\\\\cent\",\"text\":\"{\\\\textcent}\",\"textpackages\":[\"textcomp\"]},\"£\":{\"math\":\"\\\\pounds\",\"text\":\"{\\\\textsterling}\",\"textpackages\":[\"textcomp\"]},\"¤\":{\"text\":\"{\\\\textcurrency}\",\"textpackages\":[\"textcomp\"]},\"¥\":{\"math\":\"\\\\yen\",\"text\":\"{\\\\textyen}\",\"textpackages\":[\"textcomp\"]},\"¦\":{\"text\":\"{\\\\textbrokenbar}\",\"textpackages\":[\"textcomp\"]},\"§\":{\"text\":\"{\\\\textsection}\",\"textpackages\":[\"textcomp\"]},\"¨\":{\"math\":\"\\\\spddot\",\"text\":\"{\\\\textasciidieresis}\"},\"©\":{\"text\":\"{\\\\textcopyright}\",\"textpackages\":[\"textcomp\"]},\"ª\":{\"text\":\"{\\\\textordfeminine}\",\"textpackages\":[\"textcomp\"]},\"«\":{\"text\":\"{\\\\guillemotleft}\"},\"¬\":{\"math\":\"\\\\lnot\"},\"­\":{\"math\":\"\\\\-\",\"text\":\"\\\\-\"},\"®\":{\"math\":\"\\\\circledR\",\"text\":\"{\\\\textregistered}\",\"textpackages\":[\"textcomp\"]},\"¯\":{\"text\":\"{\\\\textasciimacron}\"},\"°\":{\"math\":\"^\\\\circ\",\"text\":\"{\\\\textdegree}\",\"textpackages\":[\"textcomp\"]},\"±\":{\"math\":\"\\\\pm\"},\"²\":{\"math\":\"^{2}\"},\"³\":{\"math\":\"^{3}\"},\"´\":{\"text\":\"{\\\\textasciiacute}\"},\"µ\":{\"text\":\"{\\\\textmu}\"},\"¶\":{\"text\":\"{\\\\textparagraph}\",\"textpackages\":[\"textcomp\"]},\"·\":{\"math\":\"\\\\cdot\"},\"¸\":{\"text\":\"{\\\\c}\"},\"¹\":{\"math\":\"^{1}\"},\"º\":{\"text\":\"{\\\\textordmasculine}\",\"textpackages\":[\"textcomp\"]},\"»\":{\"text\":\"{\\\\guillemotright}\"},\"¼\":{\"math\":\"\\\\frac{1}{4}\"},\"½\":{\"math\":\"\\\\frac{1}{2}\"},\"¾\":{\"math\":\"\\\\frac{3}{4}\"},\"¿\":{\"text\":\"{\\\\textquestiondown}\"},\"À\":{\"text\":\"{\\\\`A}\"},\"Á\":{\"text\":\"{\\\\'A}\"},\"Â\":{\"text\":\"{\\\\^A}\"},\"Ã\":{\"text\":\"{\\\\~A}\"},\"Ä\":{\"text\":\"{\\\\\\\"A}\"},\"Å\":{\"text\":\"{\\\\AA}\"},\"Æ\":{\"text\":\"{\\\\AE}\"},\"Ç\":{\"text\":\"{\\\\c C}\"},\"È\":{\"text\":\"{\\\\`E}\"},\"É\":{\"text\":\"{\\\\'E}\"},\"Ê\":{\"text\":\"{\\\\^E}\"},\"Ë\":{\"text\":\"{\\\\\\\"E}\"},\"Ì\":{\"text\":\"{\\\\`I}\"},\"Í\":{\"text\":\"{\\\\'I}\"},\"Î\":{\"text\":\"{\\\\^I}\"},\"Ï\":{\"text\":\"{\\\\\\\"I}\"},\"Ð\":{\"text\":\"{\\\\DH}\"},\"Ñ\":{\"text\":\"{\\\\~N}\"},\"Ò\":{\"text\":\"{\\\\`O}\"},\"Ó\":{\"text\":\"{\\\\'O}\"},\"Ô\":{\"text\":\"{\\\\^O}\"},\"Õ\":{\"text\":\"{\\\\~O}\"},\"Ö\":{\"text\":\"{\\\\\\\"O}\"},\"×\":{\"math\":\"\\\\times\",\"text\":\"{\\\\texttimes}\"},\"Ø\":{\"text\":\"{\\\\O}\"},\"Ù\":{\"text\":\"{\\\\`U}\"},\"Ú\":{\"text\":\"{\\\\'U}\"},\"Û\":{\"text\":\"{\\\\^U}\"},\"Ü\":{\"text\":\"{\\\\\\\"U}\"},\"Ý\":{\"text\":\"{\\\\'Y}\"},\"Þ\":{\"text\":\"{\\\\TH}\"},\"ß\":{\"text\":\"{\\\\ss}\"},\"à\":{\"text\":\"{\\\\`a}\"},\"á\":{\"text\":\"{\\\\'a}\"},\"â\":{\"text\":\"{\\\\^a}\"},\"ã\":{\"text\":\"{\\\\~a}\"},\"ä\":{\"text\":\"{\\\\\\\"a}\"},\"å\":{\"text\":\"{\\\\aa}\"},\"æ\":{\"text\":\"{\\\\ae}\"},\"ç\":{\"text\":\"{\\\\c c}\"},\"è\":{\"text\":\"{\\\\`e}\"},\"é\":{\"text\":\"{\\\\'e}\"},\"ê\":{\"text\":\"{\\\\^e}\"},\"ë\":{\"text\":\"{\\\\\\\"e}\"},\"ì\":{\"text\":\"{\\\\`i}\"},\"í\":{\"text\":\"{\\\\'i}\"},\"î\":{\"text\":\"{\\\\^i}\"},\"ï\":{\"text\":\"{\\\\\\\"i}\"},\"ð\":{\"math\":\"\\\\eth\",\"mathpackages\":[\"amssymb\",\"arevmath\"],\"text\":\"{\\\\dh}\"},\"ñ\":{\"text\":\"{\\\\~n}\"},\"ò\":{\"text\":\"{\\\\`o}\"},\"ó\":{\"text\":\"{\\\\'o}\"},\"ô\":{\"text\":\"{\\\\^o}\"},\"õ\":{\"text\":\"{\\\\~o}\"},\"ö\":{\"text\":\"{\\\\\\\"o}\"},\"÷\":{\"math\":\"\\\\div\"},\"ø\":{\"text\":\"{\\\\o}\"},\"ù\":{\"text\":\"{\\\\`u}\"},\"ú\":{\"text\":\"{\\\\'u}\"},\"û\":{\"text\":\"{\\\\^u}\"},\"ü\":{\"text\":\"{\\\\\\\"u}\"},\"ý\":{\"text\":\"{\\\\'y}\"},\"þ\":{\"text\":\"{\\\\th}\"},\"ÿ\":{\"text\":\"{\\\\\\\"y}\"},\"Ā\":{\"text\":\"{\\\\=A}\"},\"ā\":{\"text\":\"{\\\\=a}\"},\"Ă\":{\"text\":\"{\\\\u A}\"},\"ă\":{\"text\":\"{\\\\u a}\"},\"Ą\":{\"text\":\"{\\\\k{A}}\"},\"ą\":{\"text\":\"{\\\\k{a}}\"},\"Ć\":{\"text\":\"{\\\\'C}\"},\"ć\":{\"text\":\"{\\\\'c}\"},\"Ĉ\":{\"text\":\"{\\\\^C}\"},\"ĉ\":{\"text\":\"{\\\\^c}\"},\"Ċ\":{\"text\":\"{\\\\.C}\"},\"ċ\":{\"text\":\"{\\\\.c}\"},\"Č\":{\"text\":\"{\\\\v C}\"},\"č\":{\"text\":\"{\\\\v c}\"},\"Ď\":{\"text\":\"{\\\\v D}\"},\"ď\":{\"text\":\"{\\\\v d}\"},\"Đ\":{\"text\":\"{\\\\DJ}\"},\"đ\":{\"text\":\"{\\\\dj}\"},\"Ē\":{\"text\":\"{\\\\=E}\"},\"ē\":{\"text\":\"{\\\\=e}\"},\"Ĕ\":{\"text\":\"{\\\\u E}\"},\"ĕ\":{\"text\":\"{\\\\u e}\"},\"Ė\":{\"text\":\"{\\\\.E}\"},\"ė\":{\"text\":\"{\\\\.e}\"},\"Ę\":{\"text\":\"{\\\\k{E}}\"},\"ę\":{\"text\":\"{\\\\k{e}}\"},\"Ě\":{\"text\":\"{\\\\v E}\"},\"ě\":{\"text\":\"{\\\\v e}\"},\"Ĝ\":{\"text\":\"{\\\\^G}\"},\"ĝ\":{\"text\":\"{\\\\^g}\"},\"Ğ\":{\"text\":\"{\\\\u G}\"},\"ğ\":{\"text\":\"{\\\\u g}\"},\"Ġ\":{\"text\":\"{\\\\.G}\"},\"ġ\":{\"text\":\"{\\\\.g}\"},\"Ģ\":{\"text\":\"{\\\\c G}\"},\"ģ\":{\"text\":\"{\\\\c g}\"},\"Ĥ\":{\"text\":\"{\\\\^H}\"},\"ĥ\":{\"text\":\"{\\\\^h}\"},\"Ħ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char40}\"},\"ħ\":{\"math\":\"\\\\Elzxh\"},\"Ĩ\":{\"text\":\"{\\\\~I}\"},\"ĩ\":{\"text\":\"{\\\\~i}\"},\"Ī\":{\"text\":\"{\\\\=I}\"},\"ī\":{\"text\":\"{\\\\=i}\"},\"Ĭ\":{\"text\":\"{\\\\u I}\"},\"ĭ\":{\"text\":\"{\\\\u \\\\i}\"},\"Į\":{\"text\":\"{\\\\k{I}}\"},\"į\":{\"text\":\"{\\\\k{i}}\"},\"İ\":{\"text\":\"{\\\\.I}\"},\"ı\":{\"math\":\"\\\\imath\",\"text\":\"{\\\\i}\"},\"Ĳ\":{\"text\":\"IJ\"},\"ĳ\":{\"text\":\"ij\"},\"Ĵ\":{\"text\":\"{\\\\^J}\"},\"ĵ\":{\"text\":\"{\\\\^\\\\j}\"},\"Ķ\":{\"text\":\"{\\\\c K}\"},\"ķ\":{\"text\":\"{\\\\c k}\"},\"ĸ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char91}\"},\"Ĺ\":{\"text\":\"{\\\\'L}\"},\"ĺ\":{\"text\":\"{\\\\'l}\"},\"Ļ\":{\"text\":\"{\\\\c L}\"},\"ļ\":{\"text\":\"{\\\\c l}\"},\"Ľ\":{\"text\":\"{\\\\v L}\"},\"ľ\":{\"text\":\"{\\\\v l}\"},\"Ŀ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char201}\"},\"ŀ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char202}\"},\"Ł\":{\"text\":\"{\\\\L}\"},\"ł\":{\"text\":\"{\\\\l}\"},\"Ń\":{\"text\":\"{\\\\'N}\"},\"ń\":{\"text\":\"{\\\\'n}\"},\"Ņ\":{\"text\":\"{\\\\c N}\"},\"ņ\":{\"text\":\"{\\\\c n}\"},\"Ň\":{\"text\":\"{\\\\v N}\"},\"ň\":{\"text\":\"{\\\\v n}\"},\"ŉ\":{\"text\":\"'n\"},\"Ŋ\":{\"text\":\"{\\\\NG}\"},\"ŋ\":{\"text\":\"{\\\\ng}\"},\"Ō\":{\"text\":\"{\\\\=O}\"},\"ō\":{\"text\":\"{\\\\=o}\"},\"Ŏ\":{\"text\":\"{\\\\u O}\"},\"ŏ\":{\"text\":\"{\\\\u o}\"},\"Ő\":{\"text\":\"{\\\\H O}\"},\"ő\":{\"text\":\"{\\\\H o}\"},\"Œ\":{\"text\":\"{\\\\OE}\"},\"œ\":{\"text\":\"{\\\\oe}\"},\"Ŕ\":{\"text\":\"{\\\\'R}\"},\"ŕ\":{\"text\":\"{\\\\'r}\"},\"Ŗ\":{\"text\":\"{\\\\c R}\"},\"ŗ\":{\"text\":\"{\\\\c r}\"},\"Ř\":{\"text\":\"{\\\\v R}\"},\"ř\":{\"text\":\"{\\\\v r}\"},\"Ś\":{\"text\":\"{\\\\'S}\"},\"ś\":{\"text\":\"{\\\\'s}\"},\"Ŝ\":{\"text\":\"{\\\\^S}\"},\"ŝ\":{\"text\":\"{\\\\^s}\"},\"Ş\":{\"text\":\"{\\\\c S}\"},\"ş\":{\"text\":\"{\\\\c s}\"},\"Š\":{\"text\":\"{\\\\v S}\"},\"š\":{\"text\":\"{\\\\v s}\"},\"Ţ\":{\"text\":\"{\\\\c T}\"},\"ţ\":{\"text\":\"{\\\\c t}\"},\"Ť\":{\"text\":\"{\\\\v T}\"},\"ť\":{\"text\":\"{\\\\v t}\"},\"Ŧ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char47}\"},\"ŧ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char63}\"},\"Ũ\":{\"text\":\"{\\\\~U}\"},\"ũ\":{\"text\":\"{\\\\~u}\"},\"Ū\":{\"text\":\"{\\\\=U}\"},\"ū\":{\"text\":\"{\\\\=u}\"},\"Ŭ\":{\"text\":\"{\\\\u U}\"},\"ŭ\":{\"text\":\"{\\\\u u}\"},\"Ů\":{\"text\":\"{\\\\r{U}}\"},\"ů\":{\"text\":\"{\\\\r{u}}\"},\"Ű\":{\"text\":\"{\\\\H U}\"},\"ű\":{\"text\":\"{\\\\H u}\"},\"Ų\":{\"text\":\"{\\\\k{U}}\"},\"ų\":{\"text\":\"{\\\\k{u}}\"},\"Ŵ\":{\"text\":\"{\\\\^W}\"},\"ŵ\":{\"text\":\"{\\\\^w}\"},\"Ŷ\":{\"text\":\"{\\\\^Y}\"},\"ŷ\":{\"text\":\"{\\\\^y}\"},\"Ÿ\":{\"text\":\"{\\\\\\\"Y}\"},\"Ź\":{\"text\":\"{\\\\'Z}\"},\"ź\":{\"text\":\"{\\\\'z}\"},\"Ż\":{\"text\":\"{\\\\.Z}\"},\"ż\":{\"text\":\"{\\\\.z}\"},\"Ž\":{\"text\":\"{\\\\v Z}\"},\"ž\":{\"text\":\"{\\\\v z}\"},\"ſ\":{\"text\":\"s\"},\"ƒ\":{\"math\":\"f\"},\"ƕ\":{\"text\":\"{\\\\texthvlig}\"},\"ƞ\":{\"text\":\"{\\\\textnrleg}\"},\"ƪ\":{\"text\":\"{\\\\textesh}\"},\"Ƶ\":{\"math\":\"\\\\Zbar\"},\"ƺ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char195}\"},\"ǂ\":{\"text\":\"{\\\\textdoublepipe}\"},\"Ǎ\":{\"text\":\"{\\\\v A}\"},\"ǎ\":{\"text\":\"{\\\\v a}\"},\"Ǐ\":{\"text\":\"{\\\\v I}\"},\"ǐ\":{\"text\":\"{\\\\v i}\"},\"Ǒ\":{\"text\":\"{\\\\v O}\"},\"ǒ\":{\"text\":\"{\\\\v o}\"},\"Ǔ\":{\"text\":\"{\\\\v U}\"},\"ǔ\":{\"text\":\"{\\\\v u}\"},\"Ǧ\":{\"text\":\"{\\\\v G}\"},\"ǧ\":{\"text\":\"{\\\\v g}\"},\"Ǩ\":{\"text\":\"{\\\\v K}\"},\"ǩ\":{\"text\":\"{\\\\v k}\"},\"Ǫ\":{\"text\":\"{\\\\k{O}}\"},\"ǫ\":{\"text\":\"{\\\\k{o}}\"},\"ǰ\":{\"text\":\"{\\\\v j}\"},\"Ǵ\":{\"text\":\"{\\\\'G}\"},\"ǵ\":{\"text\":\"{\\\\'g}\"},\"Ȩ\":{\"text\":\"{\\\\c E}\"},\"ȩ\":{\"text\":\"{\\\\c e}\"},\"ȷ\":{\"math\":\"\\\\jmath\"},\"ɐ\":{\"math\":\"\\\\Elztrna\"},\"ɒ\":{\"math\":\"\\\\Elztrnsa\"},\"ɔ\":{\"math\":\"\\\\Elzopeno\"},\"ɖ\":{\"math\":\"\\\\Elzrtld\"},\"ɘ\":{\"text\":\"{\\\\fontencoding{LEIP}\\\\selectfont\\\\char61}\"},\"ə\":{\"math\":\"\\\\Elzschwa\"},\"ɛ\":{\"math\":\"\\\\varepsilon\"},\"ɡ\":{\"text\":\"g\"},\"ɣ\":{\"math\":\"\\\\Elzpgamma\"},\"ɤ\":{\"math\":\"\\\\Elzpbgam\"},\"ɥ\":{\"math\":\"\\\\Elztrnh\"},\"ɬ\":{\"math\":\"\\\\Elzbtdl\"},\"ɭ\":{\"math\":\"\\\\Elzrtll\"},\"ɯ\":{\"math\":\"\\\\Elztrnm\"},\"ɰ\":{\"math\":\"\\\\Elztrnmlr\"},\"ɱ\":{\"math\":\"\\\\Elzltlmr\"},\"ɲ\":{\"text\":\"{\\\\Elzltln}\"},\"ɳ\":{\"math\":\"\\\\Elzrtln\"},\"ɷ\":{\"math\":\"\\\\Elzclomeg\"},\"ɸ\":{\"text\":\"{\\\\textphi}\"},\"ɹ\":{\"math\":\"\\\\Elztrnr\"},\"ɺ\":{\"math\":\"\\\\Elztrnrl\"},\"ɻ\":{\"math\":\"\\\\Elzrttrnr\"},\"ɼ\":{\"math\":\"\\\\Elzrl\"},\"ɽ\":{\"math\":\"\\\\Elzrtlr\"},\"ɾ\":{\"math\":\"\\\\Elzfhr\"},\"ɿ\":{\"text\":\"{\\\\fontencoding{LEIP}\\\\selectfont\\\\char202}\"},\"ʂ\":{\"math\":\"\\\\Elzrtls\"},\"ʃ\":{\"math\":\"\\\\Elzesh\"},\"ʇ\":{\"math\":\"\\\\Elztrnt\"},\"ʈ\":{\"math\":\"\\\\Elzrtlt\"},\"ʊ\":{\"math\":\"\\\\Elzpupsil\"},\"ʋ\":{\"math\":\"\\\\Elzpscrv\"},\"ʌ\":{\"math\":\"\\\\Elzinvv\"},\"ʍ\":{\"math\":\"\\\\Elzinvw\"},\"ʎ\":{\"math\":\"\\\\Elztrny\"},\"ʐ\":{\"math\":\"\\\\Elzrtlz\"},\"ʒ\":{\"math\":\"\\\\Elzyogh\"},\"ʔ\":{\"math\":\"\\\\Elzglst\"},\"ʕ\":{\"math\":\"\\\\Elzreglst\"},\"ʖ\":{\"math\":\"\\\\Elzinglst\"},\"ʞ\":{\"text\":\"{\\\\textturnk}\"},\"ʤ\":{\"math\":\"\\\\Elzdyogh\"},\"ʧ\":{\"math\":\"\\\\Elztesh\"},\"ʰ\":{\"math\":\"^{h}\",\"text\":\"\\\\textsuperscript{h}\"},\"ʲ\":{\"math\":\"^{j}\",\"text\":\"\\\\textsuperscript{j}\"},\"ʳ\":{\"math\":\"^{r}\",\"text\":\"\\\\textsuperscript{r}\"},\"ʷ\":{\"math\":\"^{w}\",\"text\":\"\\\\textsuperscript{w}\"},\"ʸ\":{\"math\":\"^{y}\",\"text\":\"\\\\textsuperscript{y}\"},\"ʹ\":{\"text\":\"'\"},\"ʻ\":{\"text\":\"'\"},\"ʼ\":{\"text\":\"'\"},\"ʽ\":{\"text\":\"'\"},\"ʿ\":{\"text\":\"{\\\\lasp}\",\"textpackages\":[\"mathscinet\"]},\"ˆ\":{\"text\":\"{\\\\textasciicircum}\"},\"ˇ\":{\"text\":\"{\\\\textasciicaron}\"},\"ˈ\":{\"math\":\"\\\\Elzverts\"},\"ˉ\":{\"text\":\"-\"},\"ˌ\":{\"math\":\"\\\\Elzverti\"},\"ː\":{\"math\":\"\\\\Elzlmrk\"},\"ˑ\":{\"math\":\"\\\\Elzhlmrk\"},\"˒\":{\"math\":\"\\\\Elzsbrhr\"},\"˓\":{\"math\":\"\\\\Elzsblhr\"},\"˔\":{\"math\":\"\\\\Elzrais\"},\"˕\":{\"math\":\"\\\\Elzlow\"},\"˘\":{\"text\":\"{\\\\textasciibreve}\"},\"˙\":{\"text\":\"{\\\\textperiodcentered}\",\"textpackages\":[\"textcomp\"]},\"˚\":{\"text\":\"{\\\\r{}}\"},\"˛\":{\"text\":\"{\\\\k{}}\"},\"˜\":{\"text\":\"{\\\\texttildelow}\"},\"˝\":{\"text\":\"{\\\\H{}}\"},\"ˡ\":{\"math\":\"^{l}\",\"text\":\"\\\\textsuperscript{l}\"},\"ˢ\":{\"math\":\"^{s}\",\"text\":\"\\\\textsuperscript{s}\"},\"ˣ\":{\"math\":\"^{x}\",\"text\":\"\\\\textsuperscript{x}\"},\"˥\":{\"text\":\"\\\\tone{55}\"},\"˦\":{\"text\":\"\\\\tone{44}\"},\"˧\":{\"text\":\"\\\\tone{33}\"},\"˨\":{\"text\":\"\\\\tone{22}\"},\"˩\":{\"text\":\"\\\\tone{11}\"},\"̀\":{\"math\":\"\\\\grave\",\"combiningdiacritic\":true,\"text\":\"\\\\`\"},\"̀̄\":{\"text\":\"{\\\\textgravemacron}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̄̀\":{\"text\":\"{\\\\textgravemacron}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̀̇\":{\"text\":\"{\\\\textgravedot}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̇̀\":{\"text\":\"{\\\\textgravedot}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"́\":{\"math\":\"\\\\acute\",\"combiningdiacritic\":true,\"text\":\"\\\\'\"},\"́̄\":{\"text\":\"{\\\\textacutemacron}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̄́\":{\"text\":\"{\\\\textacutemacron}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"́̌\":{\"text\":\"{\\\\textacutewedge}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̌́\":{\"text\":\"{\\\\textacutewedge}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̂\":{\"math\":\"\\\\hat\",\"combiningdiacritic\":true,\"text\":\"\\\\^\"},\"̂̇\":{\"text\":\"{\\\\textcircumdot}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̇̂\":{\"text\":\"{\\\\textcircumdot}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̃\":{\"math\":\"\\\\tilde\",\"combiningdiacritic\":true,\"text\":\"\\\\~\"},\"̃̇\":{\"text\":\"{\\\\texttildedot}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̇̃\":{\"text\":\"{\\\\texttildedot}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̄\":{\"math\":\"\\\\bar\",\"combiningdiacritic\":true,\"text\":\"\\\\=\"},\"̅\":{\"math\":\"\\\\overline\",\"combiningdiacritic\":true},\"̆\":{\"math\":\"\\\\breve\",\"combiningdiacritic\":true,\"text\":\"{\\\\u}\"},\"̆̄\":{\"text\":\"{\\\\textbrevemacron}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̄̆\":{\"text\":\"{\\\\textbrevemacron}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̇\":{\"math\":\"\\\\dot\",\"combiningdiacritic\":true,\"text\":\"\\\\.\"},\"̇́\":{\"text\":\"{\\\\textdotacute}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"́̇\":{\"text\":\"{\\\\textdotacute}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̇̆\":{\"text\":\"{\\\\textdotbreve}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̆̇\":{\"text\":\"{\\\\textdotbreve}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̈\":{\"math\":\"\\\\ddot\",\"combiningdiacritic\":true,\"text\":\"\\\\\\\"\"},\"̉\":{\"math\":\"\\\\ovhook\"},\"̊\":{\"math\":\"\\\\mathring\",\"combiningdiacritic\":true,\"text\":\"{\\\\r}\"},\"̊̄\":{\"text\":\"{\\\\textringmacron}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̄̊\":{\"text\":\"{\\\\textringmacron}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̋\":{\"text\":\"{\\\\H}\",\"combiningdiacritic\":true},\"̌\":{\"math\":\"\\\\check\",\"text\":\"{\\\\v}\",\"combiningdiacritic\":true},\"̍\":{\"text\":\"{\\\\textvbaraccent}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̎\":{\"text\":\"{\\\\textdoublevbaraccent}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̏\":{\"text\":\"{\\\\textdoublegrave}\",\"combiningdiacritic\":true},\"̐\":{\"text\":\"{\\\\textdotbreve}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̑\":{\"text\":\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char177}\"},\"̒\":{\"math\":\"\\\\oturnedcomma\"},\"̕\":{\"math\":\"\\\\ocommatopright\"},\"̖\":{\"text\":\"{\\\\textsubgrave}\",\"combiningdiacritic\":true},\"̘\":{\"text\":\"{\\\\textadvancing}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̙\":{\"text\":\"{\\\\textretracting}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̚\":{\"math\":\"\\\\droang\",\"text\":\"{\\\\textcorner}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̜\":{\"text\":\"{\\\\textsublhalfring}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̝\":{\"text\":\"{\\\\textraising}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̞\":{\"text\":\"{\\\\textlowering}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̟\":{\"text\":\"{\\\\textsubplus}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̡\":{\"math\":\"\\\\Elzpalh\"},\"̢\":{\"text\":\"{\\\\Elzrh}\"},\"̣\":{\"text\":\"{\\\\d}\",\"combiningdiacritic\":true},\"̤\":{\"text\":\"{\\\\textsubumlaut}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̥\":{\"text\":\"{\\\\textsubring}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̧\":{\"text\":\"{\\\\c}\",\"combiningdiacritic\":true},\"̨\":{\"text\":\"{\\\\k}\",\"combiningdiacritic\":true},\"̩\":{\"text\":\"{\\\\textsyllabic}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̪\":{\"math\":\"\\\\Elzsbbrg\",\"text\":\"{\\\\textsubbridge}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̫\":{\"text\":\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char203}\"},\"̬\":{\"text\":\"{\\\\textsubwedge}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̯\":{\"text\":\"{\\\\textsubarch}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̰\":{\"math\":\"\\\\utilde\",\"text\":\"{\\\\textsubtilde}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̱\":{\"math\":\"\\\\underbar\",\"combiningdiacritic\":true,\"text\":\"{\\\\textsubbar}\",\"textpackages\":[\"tipa\"]},\"̲\":{\"math\":\"\\\\underline\"},\"̴\":{\"text\":\"{\\\\textsuperimposetilde}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̵\":{\"text\":\"{\\\\Elzxl}\"},\"̶\":{\"text\":\"{\\\\Elzbar}\"},\"̷\":{\"text\":\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char215}\"},\"̸\":{\"math\":\"\\\\not\"},\"̹\":{\"text\":\"{\\\\textsubrhalfring}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̺\":{\"text\":\"{\\\\textinvsubbridge}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̻\":{\"text\":\"{\\\\textsubsquare}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̼\":{\"text\":\"{\\\\textseagull}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̽\":{\"text\":\"{\\\\textovercross}\",\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"͡\":{\"text\":\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char225}\"},\"ʹ\":{\"text\":\"'\"},\"͵\":{\"text\":\",\"},\";\":{\"text\":\";\"},\"Ά\":{\"text\":\"{\\\\'A}\"},\"Έ\":{\"text\":\"{\\\\'E}\"},\"Ή\":{\"text\":\"{\\\\'H}\"},\"Ί\":{\"text\":\"{\\\\'{}I}\"},\"Ό\":{\"text\":\"{\\\\'{}O}\"},\"Ύ\":{\"math\":\"\\\\mathrm{'Y}\"},\"Ώ\":{\"math\":\"\\\\mathrm{'\\\\Omega}\"},\"ΐ\":{\"math\":\"\\\\acute{\\\\ddot{\\\\iota}}\"},\"Α\":{\"math\":\"A\"},\"Β\":{\"math\":\"B\"},\"Γ\":{\"math\":\"\\\\Gamma\"},\"Δ\":{\"math\":\"\\\\Delta\"},\"Ε\":{\"math\":\"E\"},\"Ζ\":{\"math\":\"Z\"},\"Η\":{\"math\":\"H\"},\"Θ\":{\"math\":\"\\\\Theta\"},\"Ι\":{\"math\":\"I\"},\"Κ\":{\"math\":\"K\"},\"Λ\":{\"math\":\"\\\\Lambda\"},\"Μ\":{\"math\":\"M\"},\"Ν\":{\"math\":\"N\"},\"Ξ\":{\"math\":\"\\\\Xi\"},\"Ο\":{\"math\":\"O\"},\"Π\":{\"math\":\"\\\\Pi\"},\"Ρ\":{\"math\":\"P\"},\"Σ\":{\"math\":\"\\\\Sigma\"},\"Τ\":{\"math\":\"T\"},\"Υ\":{\"math\":\"\\\\Upsilon\"},\"Φ\":{\"math\":\"\\\\Phi\"},\"Χ\":{\"math\":\"X\"},\"Ψ\":{\"math\":\"\\\\Psi\"},\"Ω\":{\"math\":\"\\\\Omega\"},\"Ϊ\":{\"math\":\"\\\\mathrm{\\\\ddot{I}}\"},\"Ϋ\":{\"math\":\"\\\\mathrm{\\\\ddot{Y}}\"},\"ά\":{\"text\":\"{\\\\'$\\\\alpha$}\"},\"έ\":{\"math\":\"\\\\acute{\\\\epsilon}\"},\"ή\":{\"math\":\"\\\\acute{\\\\eta}\"},\"ί\":{\"math\":\"\\\\acute{\\\\iota}\"},\"ΰ\":{\"math\":\"\\\\acute{\\\\ddot{\\\\upsilon}}\"},\"α\":{\"math\":\"\\\\alpha\"},\"β\":{\"math\":\"\\\\beta\"},\"γ\":{\"math\":\"\\\\gamma\"},\"δ\":{\"math\":\"\\\\delta\"},\"ε\":{\"math\":\"\\\\epsilon\"},\"ζ\":{\"math\":\"\\\\zeta\"},\"η\":{\"math\":\"\\\\eta\"},\"θ\":{\"math\":\"\\\\theta\",\"text\":\"{\\\\texttheta}\"},\"ι\":{\"math\":\"\\\\iota\"},\"κ\":{\"math\":\"\\\\kappa\"},\"λ\":{\"math\":\"\\\\lambda\"},\"μ\":{\"math\":\"\\\\mu\"},\"ν\":{\"math\":\"\\\\nu\"},\"ξ\":{\"math\":\"\\\\xi\"},\"ο\":{\"math\":\"o\"},\"π\":{\"math\":\"\\\\pi\"},\"ρ\":{\"math\":\"\\\\rho\"},\"ς\":{\"math\":\"\\\\varsigma\"},\"σ\":{\"math\":\"\\\\sigma\"},\"τ\":{\"math\":\"\\\\tau\"},\"υ\":{\"math\":\"\\\\upsilon\"},\"φ\":{\"math\":\"\\\\varphi\"},\"χ\":{\"math\":\"\\\\chi\"},\"ψ\":{\"math\":\"\\\\psi\"},\"ω\":{\"math\":\"\\\\omega\"},\"ϊ\":{\"math\":\"\\\\ddot{\\\\iota}\"},\"ϋ\":{\"math\":\"\\\\ddot{\\\\upsilon}\"},\"ό\":{\"text\":\"{\\\\'o}\"},\"ύ\":{\"math\":\"\\\\acute{\\\\upsilon}\"},\"ώ\":{\"math\":\"\\\\acute{\\\\omega}\"},\"ϐ\":{\"math\":\"\\\\varbeta\",\"text\":\"\\\\Pisymbol{ppi022}{87}\"},\"ϑ\":{\"math\":\"\\\\vartheta\",\"text\":\"{\\\\textvartheta}\"},\"ϒ\":{\"math\":\"\\\\Upsilon\"},\"ϕ\":{\"math\":\"\\\\phi\"},\"ϖ\":{\"math\":\"\\\\varpi\"},\"Ϙ\":{\"math\":\"\\\\Qoppa\"},\"ϙ\":{\"math\":\"\\\\qoppa\"},\"Ϛ\":{\"math\":\"\\\\Stigma\"},\"ϛ\":{\"math\":\"\\\\stigma\"},\"Ϝ\":{\"math\":\"\\\\Digamma\"},\"ϝ\":{\"math\":\"\\\\digamma\"},\"Ϟ\":{\"math\":\"\\\\Koppa\"},\"ϟ\":{\"math\":\"\\\\koppa\"},\"Ϡ\":{\"math\":\"\\\\Sampi\"},\"ϡ\":{\"math\":\"\\\\sampi\"},\"ϰ\":{\"math\":\"\\\\varkappa\"},\"ϱ\":{\"math\":\"\\\\varrho\"},\"ϴ\":{\"math\":\"\\\\upvarTheta\",\"text\":\"{\\\\textTheta}\"},\"ϵ\":{\"math\":\"\\\\epsilon\"},\"϶\":{\"math\":\"\\\\backepsilon\"},\"Ё\":{\"text\":\"{\\\\cyrchar\\\\CYRYO}\"},\"Ђ\":{\"text\":\"{\\\\cyrchar\\\\CYRDJE}\"},\"Ѓ\":{\"text\":\"{\\\\cyrchar{\\\\'\\\\CYRG}}\"},\"Є\":{\"text\":\"{\\\\cyrchar\\\\CYRIE}\"},\"Ѕ\":{\"text\":\"{\\\\cyrchar\\\\CYRDZE}\"},\"І\":{\"text\":\"{\\\\cyrchar\\\\CYRII}\"},\"Ї\":{\"text\":\"{\\\\cyrchar\\\\CYRYI}\"},\"Ј\":{\"text\":\"{\\\\cyrchar\\\\CYRJE}\"},\"Љ\":{\"text\":\"{\\\\cyrchar\\\\CYRLJE}\"},\"Њ\":{\"text\":\"{\\\\cyrchar\\\\CYRNJE}\"},\"Ћ\":{\"text\":\"{\\\\cyrchar\\\\CYRTSHE}\"},\"Ќ\":{\"text\":\"{\\\\cyrchar{\\\\'\\\\CYRK}}\"},\"Ў\":{\"text\":\"{\\\\cyrchar\\\\CYRUSHRT}\"},\"Џ\":{\"text\":\"{\\\\cyrchar\\\\CYRDZHE}\"},\"А\":{\"text\":\"{\\\\cyrchar\\\\CYRA}\"},\"Б\":{\"text\":\"{\\\\cyrchar\\\\CYRB}\"},\"В\":{\"text\":\"{\\\\cyrchar\\\\CYRV}\"},\"Г\":{\"text\":\"{\\\\cyrchar\\\\CYRG}\"},\"Д\":{\"text\":\"{\\\\cyrchar\\\\CYRD}\"},\"Е\":{\"text\":\"{\\\\cyrchar\\\\CYRE}\"},\"Ж\":{\"text\":\"{\\\\cyrchar\\\\CYRZH}\"},\"З\":{\"text\":\"{\\\\cyrchar\\\\CYRZ}\"},\"И\":{\"text\":\"{\\\\cyrchar\\\\CYRI}\"},\"Й\":{\"text\":\"{\\\\cyrchar\\\\CYRISHRT}\"},\"К\":{\"text\":\"{\\\\cyrchar\\\\CYRK}\"},\"Л\":{\"text\":\"{\\\\cyrchar\\\\CYRL}\"},\"М\":{\"text\":\"{\\\\cyrchar\\\\CYRM}\"},\"Н\":{\"text\":\"{\\\\cyrchar\\\\CYRN}\"},\"О\":{\"text\":\"{\\\\cyrchar\\\\CYRO}\"},\"П\":{\"text\":\"{\\\\cyrchar\\\\CYRP}\"},\"Р\":{\"text\":\"{\\\\cyrchar\\\\CYRR}\"},\"С\":{\"text\":\"{\\\\cyrchar\\\\CYRS}\"},\"Т\":{\"text\":\"{\\\\cyrchar\\\\CYRT}\"},\"У\":{\"text\":\"{\\\\cyrchar\\\\CYRU}\"},\"Ф\":{\"text\":\"{\\\\cyrchar\\\\CYRF}\"},\"Х\":{\"text\":\"{\\\\cyrchar\\\\CYRH}\"},\"Ц\":{\"text\":\"{\\\\cyrchar\\\\CYRC}\"},\"Ч\":{\"text\":\"{\\\\cyrchar\\\\CYRCH}\"},\"Ш\":{\"text\":\"{\\\\cyrchar\\\\CYRSH}\"},\"Щ\":{\"text\":\"{\\\\cyrchar\\\\CYRSHCH}\"},\"Ъ\":{\"text\":\"{\\\\cyrchar\\\\CYRHRDSN}\"},\"Ы\":{\"text\":\"{\\\\cyrchar\\\\CYRERY}\"},\"Ь\":{\"text\":\"{\\\\cyrchar\\\\CYRSFTSN}\"},\"Э\":{\"text\":\"{\\\\cyrchar\\\\CYREREV}\"},\"Ю\":{\"text\":\"{\\\\cyrchar\\\\CYRYU}\"},\"Я\":{\"text\":\"{\\\\cyrchar\\\\CYRYA}\"},\"а\":{\"text\":\"{\\\\cyrchar\\\\cyra}\"},\"б\":{\"text\":\"{\\\\cyrchar\\\\cyrb}\"},\"в\":{\"text\":\"{\\\\cyrchar\\\\cyrv}\"},\"г\":{\"text\":\"{\\\\cyrchar\\\\cyrg}\"},\"д\":{\"text\":\"{\\\\cyrchar\\\\cyrd}\"},\"е\":{\"text\":\"{\\\\cyrchar\\\\cyre}\"},\"ж\":{\"text\":\"{\\\\cyrchar\\\\cyrzh}\"},\"з\":{\"text\":\"{\\\\cyrchar\\\\cyrz}\"},\"и\":{\"text\":\"{\\\\cyrchar\\\\cyri}\"},\"й\":{\"text\":\"{\\\\cyrchar\\\\cyrishrt}\"},\"к\":{\"text\":\"{\\\\cyrchar\\\\cyrk}\"},\"л\":{\"text\":\"{\\\\cyrchar\\\\cyrl}\"},\"м\":{\"text\":\"{\\\\cyrchar\\\\cyrm}\"},\"н\":{\"text\":\"{\\\\cyrchar\\\\cyrn}\"},\"о\":{\"text\":\"{\\\\cyrchar\\\\cyro}\"},\"п\":{\"text\":\"{\\\\cyrchar\\\\cyrp}\"},\"р\":{\"text\":\"{\\\\cyrchar\\\\cyrr}\"},\"с\":{\"text\":\"{\\\\cyrchar\\\\cyrs}\"},\"т\":{\"text\":\"{\\\\cyrchar\\\\cyrt}\"},\"у\":{\"text\":\"{\\\\cyrchar\\\\cyru}\"},\"ф\":{\"text\":\"{\\\\cyrchar\\\\cyrf}\"},\"х\":{\"text\":\"{\\\\cyrchar\\\\cyrh}\"},\"ц\":{\"text\":\"{\\\\cyrchar\\\\cyrc}\"},\"ч\":{\"text\":\"{\\\\cyrchar\\\\cyrch}\"},\"ш\":{\"text\":\"{\\\\cyrchar\\\\cyrsh}\"},\"щ\":{\"text\":\"{\\\\cyrchar\\\\cyrshch}\"},\"ъ\":{\"text\":\"{\\\\cyrchar\\\\cyrhrdsn}\"},\"ы\":{\"text\":\"{\\\\cyrchar\\\\cyrery}\"},\"ь\":{\"text\":\"{\\\\cyrchar\\\\cyrsftsn}\"},\"э\":{\"text\":\"{\\\\cyrchar\\\\cyrerev}\"},\"ю\":{\"text\":\"{\\\\cyrchar\\\\cyryu}\"},\"я\":{\"text\":\"{\\\\cyrchar\\\\cyrya}\"},\"ё\":{\"text\":\"{\\\\cyrchar\\\\cyryo}\"},\"ђ\":{\"text\":\"{\\\\cyrchar\\\\cyrdje}\"},\"ѓ\":{\"text\":\"{\\\\cyrchar{\\\\'\\\\cyrg}}\"},\"є\":{\"text\":\"{\\\\cyrchar\\\\cyrie}\"},\"ѕ\":{\"text\":\"{\\\\cyrchar\\\\cyrdze}\"},\"і\":{\"text\":\"{\\\\cyrchar\\\\cyrii}\"},\"ї\":{\"text\":\"{\\\\cyrchar\\\\cyryi}\"},\"ј\":{\"text\":\"{\\\\cyrchar\\\\cyrje}\"},\"љ\":{\"text\":\"{\\\\cyrchar\\\\cyrlje}\"},\"њ\":{\"text\":\"{\\\\cyrchar\\\\cyrnje}\"},\"ћ\":{\"text\":\"{\\\\cyrchar\\\\cyrtshe}\"},\"ќ\":{\"text\":\"{\\\\cyrchar{\\\\'\\\\cyrk}}\"},\"ў\":{\"text\":\"{\\\\cyrchar\\\\cyrushrt}\"},\"џ\":{\"text\":\"{\\\\cyrchar\\\\cyrdzhe}\"},\"Ѡ\":{\"text\":\"{\\\\cyrchar\\\\CYROMEGA}\"},\"ѡ\":{\"text\":\"{\\\\cyrchar\\\\cyromega}\"},\"Ѣ\":{\"text\":\"{\\\\cyrchar\\\\CYRYAT}\"},\"Ѥ\":{\"text\":\"{\\\\cyrchar\\\\CYRIOTE}\"},\"ѥ\":{\"text\":\"{\\\\cyrchar\\\\cyriote}\"},\"Ѧ\":{\"text\":\"{\\\\cyrchar\\\\CYRLYUS}\"},\"ѧ\":{\"text\":\"{\\\\cyrchar\\\\cyrlyus}\"},\"Ѩ\":{\"text\":\"{\\\\cyrchar\\\\CYRIOTLYUS}\"},\"ѩ\":{\"text\":\"{\\\\cyrchar\\\\cyriotlyus}\"},\"Ѫ\":{\"text\":\"{\\\\cyrchar\\\\CYRBYUS}\"},\"Ѭ\":{\"text\":\"{\\\\cyrchar\\\\CYRIOTBYUS}\"},\"ѭ\":{\"text\":\"{\\\\cyrchar\\\\cyriotbyus}\"},\"Ѯ\":{\"text\":\"{\\\\cyrchar\\\\CYRKSI}\"},\"ѯ\":{\"text\":\"{\\\\cyrchar\\\\cyrksi}\"},\"Ѱ\":{\"text\":\"{\\\\cyrchar\\\\CYRPSI}\"},\"ѱ\":{\"text\":\"{\\\\cyrchar\\\\cyrpsi}\"},\"Ѳ\":{\"text\":\"{\\\\cyrchar\\\\CYRFITA}\"},\"Ѵ\":{\"text\":\"{\\\\cyrchar\\\\CYRIZH}\"},\"Ѹ\":{\"text\":\"{\\\\cyrchar\\\\CYRUK}\"},\"ѹ\":{\"text\":\"{\\\\cyrchar\\\\cyruk}\"},\"Ѻ\":{\"text\":\"{\\\\cyrchar\\\\CYROMEGARND}\"},\"ѻ\":{\"text\":\"{\\\\cyrchar\\\\cyromegarnd}\"},\"Ѽ\":{\"text\":\"{\\\\cyrchar\\\\CYROMEGATITLO}\"},\"ѽ\":{\"text\":\"{\\\\cyrchar\\\\cyromegatitlo}\"},\"Ѿ\":{\"text\":\"{\\\\cyrchar\\\\CYROT}\"},\"ѿ\":{\"text\":\"{\\\\cyrchar\\\\cyrot}\"},\"Ҁ\":{\"text\":\"{\\\\cyrchar\\\\CYRKOPPA}\"},\"ҁ\":{\"text\":\"{\\\\cyrchar\\\\cyrkoppa}\"},\"҂\":{\"text\":\"{\\\\cyrchar\\\\cyrthousands}\"},\"҈\":{\"text\":\"{\\\\cyrchar\\\\cyrhundredthousands}\"},\"҉\":{\"text\":\"{\\\\cyrchar\\\\cyrmillions}\"},\"Ҍ\":{\"text\":\"{\\\\cyrchar\\\\CYRSEMISFTSN}\"},\"ҍ\":{\"text\":\"{\\\\cyrchar\\\\cyrsemisftsn}\"},\"Ҏ\":{\"text\":\"{\\\\cyrchar\\\\CYRRTICK}\"},\"ҏ\":{\"text\":\"{\\\\cyrchar\\\\cyrrtick}\"},\"Ґ\":{\"text\":\"{\\\\cyrchar\\\\CYRGUP}\"},\"ґ\":{\"text\":\"{\\\\cyrchar\\\\cyrgup}\"},\"Ғ\":{\"text\":\"{\\\\cyrchar\\\\CYRGHCRS}\"},\"ғ\":{\"text\":\"{\\\\cyrchar\\\\cyrghcrs}\"},\"Ҕ\":{\"text\":\"{\\\\cyrchar\\\\CYRGHK}\"},\"ҕ\":{\"text\":\"{\\\\cyrchar\\\\cyrghk}\"},\"Җ\":{\"text\":\"{\\\\cyrchar\\\\CYRZHDSC}\"},\"җ\":{\"text\":\"{\\\\cyrchar\\\\cyrzhdsc}\"},\"Ҙ\":{\"text\":\"{\\\\cyrchar\\\\CYRZDSC}\"},\"ҙ\":{\"text\":\"{\\\\cyrchar\\\\cyrzdsc}\"},\"Қ\":{\"text\":\"{\\\\cyrchar\\\\CYRKDSC}\"},\"қ\":{\"text\":\"{\\\\cyrchar\\\\cyrkdsc}\"},\"Ҝ\":{\"text\":\"{\\\\cyrchar\\\\CYRKVCRS}\"},\"ҝ\":{\"text\":\"{\\\\cyrchar\\\\cyrkvcrs}\"},\"Ҟ\":{\"text\":\"{\\\\cyrchar\\\\CYRKHCRS}\"},\"ҟ\":{\"text\":\"{\\\\cyrchar\\\\cyrkhcrs}\"},\"Ҡ\":{\"text\":\"{\\\\cyrchar\\\\CYRKBEAK}\"},\"ҡ\":{\"text\":\"{\\\\cyrchar\\\\cyrkbeak}\"},\"Ң\":{\"text\":\"{\\\\cyrchar\\\\CYRNDSC}\"},\"ң\":{\"text\":\"{\\\\cyrchar\\\\cyrndsc}\"},\"Ҥ\":{\"text\":\"{\\\\cyrchar\\\\CYRNG}\"},\"ҥ\":{\"text\":\"{\\\\cyrchar\\\\cyrng}\"},\"Ҧ\":{\"text\":\"{\\\\cyrchar\\\\CYRPHK}\"},\"ҧ\":{\"text\":\"{\\\\cyrchar\\\\cyrphk}\"},\"Ҩ\":{\"text\":\"{\\\\cyrchar\\\\CYRABHHA}\"},\"ҩ\":{\"text\":\"{\\\\cyrchar\\\\cyrabhha}\"},\"Ҫ\":{\"text\":\"{\\\\cyrchar\\\\CYRSDSC}\"},\"ҫ\":{\"text\":\"{\\\\cyrchar\\\\cyrsdsc}\"},\"Ҭ\":{\"text\":\"{\\\\cyrchar\\\\CYRTDSC}\"},\"ҭ\":{\"text\":\"{\\\\cyrchar\\\\cyrtdsc}\"},\"Ү\":{\"text\":\"{\\\\cyrchar\\\\CYRY}\"},\"ү\":{\"text\":\"{\\\\cyrchar\\\\cyry}\"},\"Ұ\":{\"text\":\"{\\\\cyrchar\\\\CYRYHCRS}\"},\"ұ\":{\"text\":\"{\\\\cyrchar\\\\cyryhcrs}\"},\"Ҳ\":{\"text\":\"{\\\\cyrchar\\\\CYRHDSC}\"},\"ҳ\":{\"text\":\"{\\\\cyrchar\\\\cyrhdsc}\"},\"Ҵ\":{\"text\":\"{\\\\cyrchar\\\\CYRTETSE}\"},\"ҵ\":{\"text\":\"{\\\\cyrchar\\\\cyrtetse}\"},\"Ҷ\":{\"text\":\"{\\\\cyrchar\\\\CYRCHRDSC}\"},\"ҷ\":{\"text\":\"{\\\\cyrchar\\\\cyrchrdsc}\"},\"Ҹ\":{\"text\":\"{\\\\cyrchar\\\\CYRCHVCRS}\"},\"ҹ\":{\"text\":\"{\\\\cyrchar\\\\cyrchvcrs}\"},\"Һ\":{\"text\":\"{\\\\cyrchar\\\\CYRSHHA}\"},\"һ\":{\"text\":\"{\\\\cyrchar\\\\cyrshha}\"},\"Ҽ\":{\"text\":\"{\\\\cyrchar\\\\CYRABHCH}\"},\"ҽ\":{\"text\":\"{\\\\cyrchar\\\\cyrabhch}\"},\"Ҿ\":{\"text\":\"{\\\\cyrchar\\\\CYRABHCHDSC}\"},\"ҿ\":{\"text\":\"{\\\\cyrchar\\\\cyrabhchdsc}\"},\"Ӏ\":{\"text\":\"{\\\\cyrchar\\\\CYRpalochka}\"},\"Ӄ\":{\"text\":\"{\\\\cyrchar\\\\CYRKHK}\"},\"ӄ\":{\"text\":\"{\\\\cyrchar\\\\cyrkhk}\"},\"Ӈ\":{\"text\":\"{\\\\cyrchar\\\\CYRNHK}\"},\"ӈ\":{\"text\":\"{\\\\cyrchar\\\\cyrnhk}\"},\"Ӌ\":{\"text\":\"{\\\\cyrchar\\\\CYRCHLDSC}\"},\"ӌ\":{\"text\":\"{\\\\cyrchar\\\\cyrchldsc}\"},\"Ӕ\":{\"text\":\"{\\\\cyrchar\\\\CYRAE}\"},\"ӕ\":{\"text\":\"{\\\\cyrchar\\\\cyrae}\"},\"Ә\":{\"text\":\"{\\\\cyrchar\\\\CYRSCHWA}\"},\"ә\":{\"text\":\"{\\\\cyrchar\\\\cyrschwa}\"},\"Ӡ\":{\"text\":\"{\\\\cyrchar\\\\CYRABHDZE}\"},\"ӡ\":{\"text\":\"{\\\\cyrchar\\\\cyrabhdze}\"},\"Ө\":{\"text\":\"{\\\\cyrchar\\\\CYROTLD}\"},\"ө\":{\"text\":\"{\\\\cyrchar\\\\cyrotld}\"},\"ࡱ\":{\"math\":\"\\\\\\\\backslash\"},\"ᵃ\":{\"math\":\"^{a}\",\"text\":\"\\\\textsuperscript{a}\"},\"ᵇ\":{\"math\":\"^{b}\",\"text\":\"\\\\textsuperscript{b}\"},\"ᵈ\":{\"math\":\"^{d}\",\"text\":\"\\\\textsuperscript{d}\"},\"ᵉ\":{\"math\":\"^{e}\",\"text\":\"\\\\textsuperscript{e}\"},\"ᵍ\":{\"math\":\"^{g}\",\"text\":\"\\\\textsuperscript{g}\"},\"ᵏ\":{\"math\":\"^{k}\",\"text\":\"\\\\textsuperscript{k}\"},\"ᵐ\":{\"math\":\"^{m}\",\"text\":\"\\\\textsuperscript{m}\"},\"ᵒ\":{\"math\":\"^{o}\",\"text\":\"\\\\textsuperscript{o}\"},\"ᵖ\":{\"math\":\"^{p}\",\"text\":\"\\\\textsuperscript{p}\"},\"ᵗ\":{\"math\":\"^{t}\",\"text\":\"\\\\textsuperscript{t}\"},\"ᵘ\":{\"math\":\"^{u}\",\"text\":\"\\\\textsuperscript{u}\"},\"ᵛ\":{\"math\":\"^{v}\",\"text\":\"\\\\textsuperscript{v}\"},\"ᶜ\":{\"math\":\"^{c}\",\"text\":\"\\\\textsuperscript{c}\"},\"ᶠ\":{\"math\":\"^{f}\",\"text\":\"\\\\textsuperscript{f}\"},\"ᶻ\":{\"math\":\"^{z}\",\"text\":\"\\\\textsuperscript{z}\"},\"Ḃ\":{\"text\":\"{\\\\.B}\"},\"ḃ\":{\"text\":\"{\\\\.b}\"},\"Ḅ\":{\"text\":\"{\\\\d B}\"},\"ḅ\":{\"text\":\"{\\\\d b}\"},\"Ḇ\":{\"text\":\"{\\\\b B}\"},\"ḇ\":{\"text\":\"{\\\\b b}\"},\"Ḋ\":{\"text\":\"{\\\\.D}\"},\"ḋ\":{\"text\":\"{\\\\.d}\"},\"Ḍ\":{\"text\":\"{\\\\d D}\"},\"ḍ\":{\"text\":\"{\\\\d d}\"},\"Ḏ\":{\"text\":\"{\\\\b D}\"},\"ḏ\":{\"text\":\"{\\\\b d}\"},\"Ḑ\":{\"text\":\"{\\\\c D}\"},\"ḑ\":{\"text\":\"{\\\\c d}\"},\"Ḝ\":{\"text\":\"{\\\\c{\\\\u{E}}}\"},\"ḝ\":{\"text\":\"{\\\\c{\\\\u{e}}}\"},\"Ḟ\":{\"text\":\"{\\\\.F}\"},\"ḟ\":{\"text\":\"{\\\\.f}\"},\"Ḡ\":{\"text\":\"{\\\\=G}\"},\"ḡ\":{\"text\":\"{\\\\=g}\"},\"Ḣ\":{\"text\":\"{\\\\.H}\"},\"ḣ\":{\"text\":\"{\\\\.h}\"},\"Ḥ\":{\"text\":\"{\\\\d H}\"},\"ḥ\":{\"text\":\"{\\\\d h}\"},\"Ḧ\":{\"text\":\"{\\\\\\\"H}\"},\"ḧ\":{\"text\":\"{\\\\\\\"h}\"},\"Ḩ\":{\"text\":\"{\\\\c H}\"},\"ḩ\":{\"text\":\"{\\\\c h}\"},\"Ḱ\":{\"text\":\"{\\\\'K}\"},\"ḱ\":{\"text\":\"{\\\\'k}\"},\"Ḳ\":{\"text\":\"{\\\\d K}\"},\"ḳ\":{\"text\":\"{\\\\d k}\"},\"Ḵ\":{\"text\":\"{\\\\b K}\"},\"ḵ\":{\"text\":\"{\\\\b k}\"},\"Ḷ\":{\"text\":\"{\\\\d L}\"},\"ḷ\":{\"text\":\"{\\\\d l}\"},\"Ḻ\":{\"text\":\"{\\\\b L}\"},\"ḻ\":{\"text\":\"{\\\\b l}\"},\"Ḿ\":{\"text\":\"{\\\\'M}\"},\"ḿ\":{\"text\":\"{\\\\'m}\"},\"Ṁ\":{\"text\":\"{\\\\.M}\"},\"ṁ\":{\"text\":\"{\\\\.m}\"},\"Ṃ\":{\"text\":\"{\\\\d M}\"},\"ṃ\":{\"text\":\"{\\\\d m}\"},\"Ṅ\":{\"text\":\"{\\\\.N}\"},\"ṅ\":{\"text\":\"{\\\\.n}\"},\"Ṇ\":{\"text\":\"{\\\\d N}\"},\"ṇ\":{\"text\":\"{\\\\d n}\"},\"Ṉ\":{\"text\":\"{\\\\b N}\"},\"ṉ\":{\"text\":\"{\\\\b n}\"},\"Ṕ\":{\"text\":\"{\\\\'P}\"},\"ṕ\":{\"text\":\"{\\\\'p}\"},\"Ṗ\":{\"text\":\"{\\\\.P}\"},\"ṗ\":{\"text\":\"{\\\\.p}\"},\"Ṙ\":{\"text\":\"{\\\\.R}\"},\"ṙ\":{\"text\":\"{\\\\.r}\"},\"Ṛ\":{\"text\":\"{\\\\d R}\"},\"ṛ\":{\"text\":\"{\\\\d r}\"},\"Ṟ\":{\"text\":\"{\\\\b R}\"},\"ṟ\":{\"text\":\"{\\\\b r}\"},\"Ṡ\":{\"text\":\"{\\\\.S}\"},\"ṡ\":{\"text\":\"{\\\\.s}\"},\"Ṣ\":{\"text\":\"{\\\\d S}\"},\"ṣ\":{\"text\":\"{\\\\d s}\"},\"Ṫ\":{\"text\":\"{\\\\.T}\"},\"ṫ\":{\"text\":\"{\\\\.t}\"},\"Ṭ\":{\"text\":\"{\\\\d T}\"},\"ṭ\":{\"text\":\"{\\\\d t}\"},\"Ṯ\":{\"text\":\"{\\\\b T}\"},\"ṯ\":{\"text\":\"{\\\\b t}\"},\"Ṽ\":{\"text\":\"{\\\\~V}\"},\"ṽ\":{\"text\":\"{\\\\~v}\"},\"Ṿ\":{\"text\":\"{\\\\d V}\"},\"ṿ\":{\"text\":\"{\\\\d v}\"},\"Ẁ\":{\"text\":\"{\\\\`W}\"},\"ẁ\":{\"text\":\"{\\\\`w}\"},\"Ẃ\":{\"text\":\"{\\\\'W}\"},\"ẃ\":{\"text\":\"{\\\\'w}\"},\"Ẅ\":{\"text\":\"{\\\\\\\"W}\"},\"ẅ\":{\"text\":\"{\\\\\\\"w}\"},\"Ẇ\":{\"text\":\"{\\\\.W}\"},\"ẇ\":{\"text\":\"{\\\\.w}\"},\"Ẉ\":{\"text\":\"{\\\\d W}\"},\"ẉ\":{\"text\":\"{\\\\d w}\"},\"Ẋ\":{\"text\":\"{\\\\.X}\"},\"ẋ\":{\"text\":\"{\\\\.x}\"},\"Ẍ\":{\"text\":\"{\\\\\\\"X}\"},\"ẍ\":{\"text\":\"{\\\\\\\"x}\"},\"Ẏ\":{\"text\":\"{\\\\.Y}\"},\"ẏ\":{\"text\":\"{\\\\.y}\"},\"Ẑ\":{\"text\":\"{\\\\^Z}\"},\"ẑ\":{\"text\":\"{\\\\^z}\"},\"Ẓ\":{\"text\":\"{\\\\d Z}\"},\"ẓ\":{\"text\":\"{\\\\d z}\"},\"Ẕ\":{\"text\":\"{\\\\b Z}\"},\"ẕ\":{\"text\":\"{\\\\b z}\"},\"ẖ\":{\"text\":\"{\\\\b h}\"},\"ẗ\":{\"text\":\"{\\\\\\\"t}\"},\"ẘ\":{\"text\":\"{\\\\r{w}}\"},\"ẙ\":{\"text\":\"{\\\\r{y}}\"},\"Ạ\":{\"text\":\"{\\\\d A}\"},\"ạ\":{\"text\":\"{\\\\d a}\"},\"Ẹ\":{\"text\":\"{\\\\d E}\"},\"ẹ\":{\"text\":\"{\\\\d e}\"},\"Ẽ\":{\"text\":\"{\\\\~E}\"},\"ẽ\":{\"text\":\"{\\\\~e}\"},\"Ị\":{\"text\":\"{\\\\d I}\"},\"ị\":{\"text\":\"{\\\\d i}\"},\"Ọ\":{\"text\":\"{\\\\d O}\"},\"ọ\":{\"text\":\"{\\\\d o}\"},\"Ụ\":{\"text\":\"{\\\\d U}\"},\"ụ\":{\"text\":\"{\\\\d u}\"},\"Ỳ\":{\"text\":\"{\\\\`Y}\"},\"ỳ\":{\"text\":\"{\\\\`y}\"},\"Ỵ\":{\"text\":\"{\\\\d Y}\"},\"ỵ\":{\"text\":\"{\\\\d y}\"},\"Ỹ\":{\"text\":\"{\\\\~Y}\"},\"ỹ\":{\"text\":\"{\\\\~y}\"},\" \":{\"text\":\" \",\"space\":true},\" \":{\"math\":\"\\\\quad\",\"space\":true},\" \":{\"text\":\"\\\\hspace{0.6em}\",\"space\":true},\" \":{\"math\":\"\\\\quad\",\"space\":true,\"text\":\"\\\\hspace{1em}\"},\" \":{\"text\":\"\\\\;\",\"space\":true},\" \":{\"text\":\"\\\\hspace{0.25em}\",\"space\":true},\" \":{\"text\":\"\\\\hspace{0.166em}\",\"space\":true},\" \":{\"text\":\"\\\\hphantom{0}\",\"space\":true},\" \":{\"text\":\"\\\\hphantom{,}\",\"space\":true},\" \":{\"text\":\"\\\\,\",\"space\":true},\" \":{\"math\":\"\\\\mkern1mu\",\"space\":true},\"​\":{\"text\":\"{\\\\mbox}\",\"space\":true},\"‌\":{\"text\":\"{\\\\aftergroup\\\\ignorespaces}\"},\"‐\":{\"text\":\"-\"},\"‑\":{\"text\":\"-\"},\"‒\":{\"text\":\"-\"},\"–\":{\"text\":\"{\\\\textendash}\"},\"—\":{\"text\":\"{\\\\textemdash}\"},\"―\":{\"math\":\"\\\\horizbar\",\"text\":\"\\\\rule{1em}{1pt}\"},\"‖\":{\"math\":\"\\\\Vert\"},\"‗\":{\"math\":\"\\\\twolowline\"},\"‘\":{\"text\":\"`\"},\"’\":{\"text\":\"'\"},\"‚\":{\"text\":\",\"},\"‛\":{\"math\":\"\\\\Elzreapos\"},\"“\":{\"text\":\"``\"},\"”\":{\"text\":\"''\"},\"„\":{\"text\":\",,\"},\"‟\":{\"text\":\"{\\\\quotedblbase}\"},\"†\":{\"math\":\"\\\\dagger\",\"text\":\"{\\\\textdagger}\",\"textpackages\":[\"textcomp\"]},\"‡\":{\"math\":\"\\\\ddagger\",\"text\":\"{\\\\textdaggerdbl}\",\"textpackages\":[\"textcomp\"]},\"•\":{\"math\":\"\\\\bullet\",\"text\":\"{\\\\textbullet}\",\"textpackages\":[\"textcomp\"]},\"‣\":{\"text\":\">\"},\"․\":{\"text\":\".\"},\"‥\":{\"math\":\"\\\\enleadertwodots\",\"text\":\"..\"},\"…\":{\"math\":\"\\\\ldots\",\"text\":\"{\\\\ldots}\"},\"‧\":{\"text\":\"-\"},\" \":{\"text\":\" \",\"space\":true},\"‰\":{\"text\":\"{\\\\textperthousand}\",\"textpackages\":[\"textcomp\"]},\"‱\":{\"text\":\"{\\\\textpertenthousand}\",\"textpackages\":[\"textcomp\"]},\"′\":{\"math\":\"{'}\"},\"″\":{\"math\":\"{''}\"},\"‴\":{\"math\":\"{'''}\"},\"‵\":{\"math\":\"\\\\backprime\"},\"‶\":{\"math\":\"\\\\backdprime\"},\"‷\":{\"math\":\"\\\\backtrprime\"},\"‸\":{\"math\":\"\\\\caretinsert\"},\"‹\":{\"text\":\"{\\\\guilsinglleft}\"},\"›\":{\"text\":\"{\\\\guilsinglright}\"},\"‼\":{\"math\":\"\\\\Exclam\"},\"‾\":{\"text\":\"-\"},\"⁃\":{\"math\":\"\\\\hyphenbullet\"},\"⁄\":{\"math\":\"\\\\fracslash\"},\"⁇\":{\"math\":\"\\\\Question\"},\"⁈\":{\"text\":\"?!\"},\"⁉\":{\"text\":\"!?\"},\"⁊\":{\"text\":\"7\"},\"⁐\":{\"math\":\"\\\\closure\"},\"⁗\":{\"math\":\"''''\"},\" \":{\"math\":\"\\\\:\",\"space\":true,\"text\":\"\\\\:\"},\"⁠\":{\"text\":\"{\\\\nolinebreak}\"},\"⁰\":{\"math\":\"^{0}\"},\"ⁱ\":{\"math\":\"^{i}\",\"text\":\"\\\\textsuperscript{i}\"},\"⁴\":{\"math\":\"^{4}\"},\"⁵\":{\"math\":\"^{5}\"},\"⁶\":{\"math\":\"^{6}\"},\"⁷\":{\"math\":\"^{7}\"},\"⁸\":{\"math\":\"^{8}\"},\"⁹\":{\"math\":\"^{9}\"},\"⁺\":{\"math\":\"^{+}\"},\"⁻\":{\"math\":\"^{-}\"},\"⁼\":{\"math\":\"^{=}\"},\"⁽\":{\"math\":\"^{(}\"},\"⁾\":{\"math\":\"^{)}\"},\"ⁿ\":{\"math\":\"^{n}\",\"text\":\"\\\\textsuperscript{n}\"},\"₀\":{\"math\":\"_{0}\"},\"₁\":{\"math\":\"_{1}\"},\"₂\":{\"math\":\"_{2}\"},\"₃\":{\"math\":\"_{3}\"},\"₄\":{\"math\":\"_{4}\"},\"₅\":{\"math\":\"_{5}\"},\"₆\":{\"math\":\"_{6}\"},\"₇\":{\"math\":\"_{7}\"},\"₈\":{\"math\":\"_{8}\"},\"₉\":{\"math\":\"_{9}\"},\"₊\":{\"math\":\"_{+}\"},\"₋\":{\"math\":\"_{-}\"},\"₌\":{\"math\":\"_{=}\"},\"₍\":{\"math\":\"_{(}\"},\"₎\":{\"math\":\"_{)}\"},\"ₐ\":{\"math\":\"_{a}\",\"text\":\"\\\\textsubscript{a}\"},\"ₑ\":{\"math\":\"_{e}\",\"text\":\"\\\\textsubscript{e}\"},\"ₒ\":{\"math\":\"_{o}\",\"text\":\"\\\\textsubscript{o}\"},\"ₓ\":{\"math\":\"_{x}\",\"text\":\"\\\\textsubscript{x}\"},\"ₔ\":{\"text\":\"\\\\textsubscript{\\\\textschwa}\",\"textpackages\":[\"tipa\"]},\"ₕ\":{\"math\":\"_{h}\",\"text\":\"\\\\textsubscript{h}\"},\"ₖ\":{\"math\":\"_{k}\",\"text\":\"\\\\textsubscript{k}\"},\"ₗ\":{\"math\":\"_{l}\",\"text\":\"\\\\textsubscript{l}\"},\"ₘ\":{\"math\":\"_{m}\",\"text\":\"\\\\textsubscript{m}\"},\"ₙ\":{\"math\":\"_{n}\",\"text\":\"\\\\textsubscript{n}\"},\"ₚ\":{\"math\":\"_{p}\",\"text\":\"\\\\textsubscript{p}\"},\"ₛ\":{\"math\":\"_{s}\",\"text\":\"\\\\textsubscript{s}\"},\"ₜ\":{\"math\":\"_{t}\",\"text\":\"\\\\textsubscript{t}\"},\"₧\":{\"text\":\"\\\\ensuremath{\\\\Elzpes}\"},\"€\":{\"math\":\"\\\\euro\",\"text\":\"{\\\\texteuro}\"},\"⃐\":{\"math\":\"\\\\lvec\"},\"⃑\":{\"math\":\"\\\\rightharpoonup\",\"mathpackages\":[\"amsmath\",\"amssymb\"]},\"⃒\":{\"math\":\"\\\\vertoverlay\"},\"⃖\":{\"math\":\"\\\\LVec\"},\"⃗\":{\"math\":\"\\\\vec\"},\"⃛\":{\"math\":\"\\\\dddot\"},\"⃜\":{\"math\":\"\\\\ddddot\"},\"⃝\":{\"math\":\"\\\\enclosecircle\"},\"⃞\":{\"math\":\"\\\\enclosesquare\"},\"⃟\":{\"math\":\"\\\\enclosediamond\"},\"⃡\":{\"math\":\"\\\\overleftrightarrow\"},\"⃤\":{\"math\":\"\\\\enclosetriangle\"},\"⃧\":{\"math\":\"\\\\annuity\"},\"⃨\":{\"math\":\"\\\\threeunderdot\"},\"⃩\":{\"math\":\"\\\\widebridgeabove\"},\"⃬\":{\"math\":\"\\\\underrightharpoondown\"},\"⃭\":{\"math\":\"\\\\underleftharpoondown\"},\"⃮\":{\"math\":\"\\\\underleftarrow\"},\"⃯\":{\"math\":\"\\\\underrightarrow\"},\"⃰\":{\"math\":\"\\\\asteraccent\"},\"℀\":{\"text\":\"a/c\"},\"℁\":{\"text\":\"a/s\"},\"ℂ\":{\"math\":\"\\\\mathbb{C}\"},\"℃\":{\"text\":\"{\\\\textcelsius}\"},\"℅\":{\"text\":\"c/o\"},\"℆\":{\"text\":\"c/u\"},\"ℇ\":{\"math\":\"\\\\Euler\"},\"℉\":{\"text\":\"F\"},\"ℊ\":{\"math\":\"\\\\mathscr{g}\"},\"ℋ\":{\"math\":\"\\\\mathscr{H}\"},\"ℌ\":{\"math\":\"\\\\mathfrak{H}\"},\"ℍ\":{\"math\":\"\\\\mathbb{H}\"},\"ℎ\":{\"math\":\"\\\\Planckconst\"},\"ℏ\":{\"math\":\"\\\\hslash\"},\"ℐ\":{\"math\":\"\\\\mathscr{I}\"},\"ℑ\":{\"math\":\"\\\\mathfrak{I}\"},\"ℒ\":{\"math\":\"\\\\mathscr{L}\"},\"ℓ\":{\"math\":\"\\\\mathscr{l}\"},\"ℕ\":{\"math\":\"\\\\mathbb{N}\"},\"№\":{\"text\":\"{\\\\cyrchar\\\\textnumero}\"},\"℗\":{\"text\":\"{\\\\textcircledP}\"},\"℘\":{\"math\":\"\\\\wp\"},\"ℙ\":{\"math\":\"\\\\mathbb{P}\"},\"ℚ\":{\"math\":\"\\\\mathbb{Q}\"},\"ℛ\":{\"math\":\"\\\\mathscr{R}\"},\"ℜ\":{\"math\":\"\\\\mathfrak{R}\"},\"ℝ\":{\"math\":\"\\\\mathbb{R}\"},\"℞\":{\"math\":\"\\\\Elzxrat\"},\"℠\":{\"text\":\"{\\\\textservicemark}\"},\"℡\":{\"text\":\"TEL\"},\"™\":{\"text\":\"{\\\\texttrademark}\",\"textpackages\":[\"textcomp\"]},\"ℤ\":{\"math\":\"\\\\mathbb{Z}\"},\"Ω\":{\"math\":\"\\\\Omega\"},\"℧\":{\"math\":\"\\\\mho\"},\"ℨ\":{\"math\":\"\\\\mathfrak{Z}\"},\"℩\":{\"text\":\"{\\\\textriota}\"},\"K\":{\"text\":\"K\"},\"Å\":{\"math\":\"\\\\Angstroem\",\"text\":\"{\\\\AA}\"},\"ℬ\":{\"math\":\"\\\\mathscr{B}\"},\"ℭ\":{\"math\":\"\\\\mathfrak{C}\"},\"℮\":{\"text\":\"{\\\\textestimated}\"},\"ℯ\":{\"math\":\"\\\\mathscr{e}\"},\"ℰ\":{\"math\":\"\\\\mathscr{E}\"},\"ℱ\":{\"math\":\"\\\\mathscr{F}\"},\"Ⅎ\":{\"math\":\"\\\\Finv\"},\"ℳ\":{\"math\":\"\\\\mathscr{M}\"},\"ℴ\":{\"math\":\"\\\\mathscr{o}\"},\"ℵ\":{\"math\":\"\\\\aleph\"},\"ℶ\":{\"math\":\"\\\\beth\"},\"ℷ\":{\"math\":\"\\\\gimel\"},\"ℸ\":{\"math\":\"\\\\daleth\"},\"ℼ\":{\"math\":\"\\\\mathbb{\\\\pi}\"},\"ℽ\":{\"math\":\"\\\\mathbb{\\\\gamma}\"},\"ℾ\":{\"math\":\"\\\\mathbb{\\\\Gamma}\"},\"ℿ\":{\"math\":\"\\\\mathbb{\\\\Pi}\"},\"⅀\":{\"math\":\"\\\\mathbb{\\\\Sigma}\"},\"⅁\":{\"math\":\"\\\\Game\"},\"⅂\":{\"math\":\"\\\\sansLturned\"},\"⅃\":{\"math\":\"\\\\sansLmirrored\"},\"⅄\":{\"math\":\"\\\\Yup\"},\"ⅅ\":{\"math\":\"\\\\CapitalDifferentialD\"},\"ⅆ\":{\"math\":\"\\\\DifferentialD\"},\"ⅇ\":{\"math\":\"\\\\ExponetialE\"},\"ⅈ\":{\"math\":\"\\\\ComplexI\"},\"ⅉ\":{\"math\":\"\\\\ComplexJ\"},\"⅊\":{\"math\":\"\\\\PropertyLine\"},\"⅋\":{\"math\":\"\\\\invamp\"},\"⅐\":{\"math\":\"\\\\frac{1}{7}\"},\"⅑\":{\"math\":\"\\\\frac{1}{9}\"},\"⅒\":{\"math\":\"\\\\frac{1}{10}\"},\"⅓\":{\"math\":\"\\\\frac{1}{3}\"},\"⅔\":{\"math\":\"\\\\frac{2}{3}\"},\"⅕\":{\"math\":\"\\\\frac{1}{5}\"},\"⅖\":{\"math\":\"\\\\frac{2}{5}\"},\"⅗\":{\"math\":\"\\\\frac{3}{5}\"},\"⅘\":{\"math\":\"\\\\frac{4}{5}\"},\"⅙\":{\"math\":\"\\\\frac{1}{6}\"},\"⅚\":{\"math\":\"\\\\frac{5}{6}\"},\"⅛\":{\"math\":\"\\\\frac{1}{8}\"},\"⅜\":{\"math\":\"\\\\frac{3}{8}\"},\"⅝\":{\"math\":\"\\\\frac{5}{8}\"},\"⅞\":{\"math\":\"\\\\frac{7}{8}\"},\"⅟\":{\"math\":\"\\\\frac{1}\"},\"Ⅰ\":{\"text\":\"I\"},\"Ⅱ\":{\"text\":\"II\"},\"Ⅲ\":{\"text\":\"III\"},\"Ⅳ\":{\"text\":\"IV\"},\"Ⅴ\":{\"text\":\"V\"},\"Ⅵ\":{\"text\":\"VI\"},\"Ⅶ\":{\"text\":\"VII\"},\"Ⅷ\":{\"text\":\"VIII\"},\"Ⅸ\":{\"text\":\"IX\"},\"Ⅹ\":{\"text\":\"X\"},\"Ⅺ\":{\"text\":\"XI\"},\"Ⅻ\":{\"text\":\"XII\"},\"Ⅼ\":{\"text\":\"L\"},\"Ⅽ\":{\"text\":\"C\"},\"Ⅾ\":{\"text\":\"D\"},\"Ⅿ\":{\"text\":\"M\"},\"ⅰ\":{\"text\":\"i\"},\"ⅱ\":{\"text\":\"ii\"},\"ⅲ\":{\"text\":\"iii\"},\"ⅳ\":{\"text\":\"iv\"},\"ⅴ\":{\"text\":\"v\"},\"ⅵ\":{\"text\":\"vi\"},\"ⅶ\":{\"text\":\"vii\"},\"ⅷ\":{\"text\":\"viii\"},\"ⅸ\":{\"text\":\"ix\"},\"ⅹ\":{\"text\":\"x\"},\"ⅺ\":{\"text\":\"xi\"},\"ⅻ\":{\"text\":\"xii\"},\"ⅼ\":{\"text\":\"l\"},\"ⅽ\":{\"text\":\"c\"},\"ⅾ\":{\"text\":\"d\"},\"ⅿ\":{\"text\":\"m\"},\"↉\":{\"math\":\"\\\\frac{0}{3}\"},\"←\":{\"math\":\"\\\\leftarrow\"},\"↑\":{\"math\":\"\\\\uparrow\"},\"→\":{\"math\":\"\\\\rightarrow\",\"text\":\"{\\\\textrightarrow}\",\"textpackages\":[\"textcomp\"]},\"↓\":{\"math\":\"\\\\downarrow\"},\"↔\":{\"math\":\"\\\\leftrightarrow\"},\"↕\":{\"math\":\"\\\\updownarrow\"},\"↖\":{\"math\":\"\\\\nwarrow\"},\"↗\":{\"math\":\"\\\\nearrow\"},\"↘\":{\"math\":\"\\\\searrow\"},\"↙\":{\"math\":\"\\\\swarrow\"},\"↚\":{\"math\":\"\\\\nleftarrow\"},\"↛\":{\"math\":\"\\\\nrightarrow\"},\"↜\":{\"math\":\"\\\\arrowwaveleft\"},\"↝\":{\"math\":\"\\\\arrowwaveright\"},\"↞\":{\"math\":\"\\\\twoheadleftarrow\"},\"↟\":{\"math\":\"\\\\twoheaduparrow\"},\"↠\":{\"math\":\"\\\\twoheadrightarrow\"},\"↡\":{\"math\":\"\\\\twoheaddownarrow\"},\"↢\":{\"math\":\"\\\\leftarrowtail\"},\"↣\":{\"math\":\"\\\\rightarrowtail\"},\"↤\":{\"math\":\"\\\\mapsfrom\"},\"↥\":{\"math\":\"\\\\MapsUp\"},\"↦\":{\"math\":\"\\\\mapsto\"},\"↧\":{\"math\":\"\\\\MapsDown\"},\"↨\":{\"math\":\"\\\\updownarrowbar\"},\"↩\":{\"math\":\"\\\\hookleftarrow\"},\"↪\":{\"math\":\"\\\\hookrightarrow\"},\"↫\":{\"math\":\"\\\\looparrowleft\"},\"↬\":{\"math\":\"\\\\looparrowright\"},\"↭\":{\"math\":\"\\\\leftrightsquigarrow\"},\"↮\":{\"math\":\"\\\\nleftrightarrow\"},\"↯\":{\"math\":\"\\\\lightning\"},\"↰\":{\"math\":\"\\\\Lsh\"},\"↱\":{\"math\":\"\\\\Rsh\"},\"↲\":{\"math\":\"\\\\dlsh\"},\"↳\":{\"text\":\"\\\\reflectbox{\\\\carriagereturn}\",\"textpackages\":[\"graphics\",\"unicode-math\"]},\"↴\":{\"math\":\"\\\\linefeed\"},\"↵\":{\"math\":\"\\\\carriagereturn\"},\"↶\":{\"math\":\"\\\\curvearrowleft\"},\"↷\":{\"math\":\"\\\\curvearrowright\"},\"↸\":{\"math\":\"\\\\barovernorthwestarrow\"},\"↹\":{\"math\":\"\\\\barleftarrowrightarrowba\"},\"↺\":{\"math\":\"\\\\circlearrowleft\"},\"↻\":{\"math\":\"\\\\circlearrowright\"},\"↼\":{\"math\":\"\\\\leftharpoonup\"},\"↽\":{\"math\":\"\\\\leftharpoondown\"},\"↾\":{\"math\":\"\\\\upharpoonright\"},\"↿\":{\"math\":\"\\\\upharpoonleft\"},\"⇀\":{\"math\":\"\\\\rightharpoonup\",\"mathpackages\":[\"amsmath\",\"amssymb\"]},\"⇁\":{\"math\":\"\\\\rightharpoondown\"},\"⇂\":{\"math\":\"\\\\downharpoonright\"},\"⇃\":{\"math\":\"\\\\downharpoonleft\"},\"⇄\":{\"math\":\"\\\\rightleftarrows\"},\"⇅\":{\"math\":\"\\\\dblarrowupdown\"},\"⇆\":{\"math\":\"\\\\leftrightarrows\"},\"⇇\":{\"math\":\"\\\\leftleftarrows\"},\"⇈\":{\"math\":\"\\\\upuparrows\"},\"⇉\":{\"math\":\"\\\\rightrightarrows\"},\"⇊\":{\"math\":\"\\\\downdownarrows\"},\"⇋\":{\"math\":\"\\\\leftrightharpoons\"},\"⇌\":{\"math\":\"\\\\rightleftharpoons\"},\"⇍\":{\"math\":\"\\\\nLeftarrow\"},\"⇎\":{\"math\":\"\\\\nLeftrightarrow\"},\"⇏\":{\"math\":\"\\\\nRightarrow\"},\"⇐\":{\"math\":\"\\\\Leftarrow\"},\"⇑\":{\"math\":\"\\\\Uparrow\"},\"⇒\":{\"math\":\"\\\\Rightarrow\"},\"⇓\":{\"math\":\"\\\\Downarrow\"},\"⇔\":{\"math\":\"\\\\Leftrightarrow\"},\"⇕\":{\"math\":\"\\\\Updownarrow\"},\"⇖\":{\"math\":\"\\\\Nwarrow\"},\"⇗\":{\"math\":\"\\\\Nearrow\"},\"⇘\":{\"math\":\"\\\\Searrow\"},\"⇙\":{\"math\":\"\\\\Swarrow\"},\"⇚\":{\"math\":\"\\\\Lleftarrow\"},\"⇛\":{\"math\":\"\\\\Rrightarrow\"},\"⇜\":{\"math\":\"\\\\leftsquigarrow\"},\"⇝\":{\"math\":\"\\\\rightsquigarrow\"},\"⇞\":{\"math\":\"\\\\nHuparrow\"},\"⇟\":{\"math\":\"\\\\nHdownarrow\"},\"⇠\":{\"math\":\"\\\\dashleftarrow\"},\"⇡\":{\"math\":\"\\\\updasharrow\"},\"⇢\":{\"math\":\"\\\\dashrightarrow\"},\"⇣\":{\"math\":\"\\\\downdasharrow\"},\"⇤\":{\"math\":\"\\\\LeftArrowBar\"},\"⇥\":{\"math\":\"\\\\RightArrowBar\"},\"⇦\":{\"math\":\"\\\\leftwhitearrow\"},\"⇧\":{\"math\":\"\\\\upwhitearrow\"},\"⇨\":{\"math\":\"\\\\rightwhitearrow\"},\"⇩\":{\"math\":\"\\\\downwhitearrow\"},\"⇪\":{\"math\":\"\\\\whitearrowupfrombar\"},\"⇴\":{\"math\":\"\\\\circleonrightarrow\"},\"⇵\":{\"math\":\"\\\\DownArrowUpArrow\"},\"⇶\":{\"math\":\"\\\\rightthreearrows\"},\"⇷\":{\"math\":\"\\\\nvleftarrow\"},\"⇸\":{\"math\":\"\\\\pfun\"},\"⇹\":{\"math\":\"\\\\nvleftrightarrow\"},\"⇺\":{\"math\":\"\\\\nVleftarrow\"},\"⇻\":{\"math\":\"\\\\ffun\"},\"⇼\":{\"math\":\"\\\\nVleftrightarrow\"},\"⇽\":{\"math\":\"\\\\leftarrowtriangle\"},\"⇾\":{\"math\":\"\\\\rightarrowtriangle\"},\"⇿\":{\"math\":\"\\\\leftrightarrowtriangle\"},\"∀\":{\"math\":\"\\\\forall\"},\"∁\":{\"math\":\"\\\\complement\"},\"∂\":{\"math\":\"\\\\partial\"},\"∃\":{\"math\":\"\\\\exists\"},\"∄\":{\"math\":\"\\\\nexists\"},\"∅\":{\"math\":\"\\\\varnothing\"},\"∆\":{\"math\":\"\\\\increment\"},\"∇\":{\"math\":\"\\\\nabla\"},\"∈\":{\"math\":\"\\\\in\"},\"∉\":{\"math\":\"\\\\not\\\\in\"},\"∊\":{\"math\":\"\\\\smallin\"},\"∋\":{\"math\":\"\\\\ni\"},\"∌\":{\"math\":\"\\\\not\\\\ni\"},\"∍\":{\"math\":\"\\\\smallni\"},\"∎\":{\"math\":\"\\\\QED\"},\"∏\":{\"math\":\"\\\\prod\"},\"∐\":{\"math\":\"\\\\coprod\"},\"∑\":{\"math\":\"\\\\sum\"},\"−\":{\"math\":\"-\",\"text\":\"-\"},\"∓\":{\"math\":\"\\\\mp\"},\"∔\":{\"math\":\"\\\\dotplus\"},\"∕\":{\"text\":\"/\"},\"∖\":{\"math\":\"\\\\setminus\"},\"∗\":{\"math\":\"{_\\\\ast}\"},\"∘\":{\"math\":\"\\\\circ\"},\"∙\":{\"math\":\"\\\\bullet\"},\"√\":{\"math\":\"\\\\surd\"},\"∛\":{\"math\":\"\\\\sqrt[3]\"},\"∜\":{\"math\":\"\\\\sqrt[4]\"},\"∝\":{\"math\":\"\\\\propto\"},\"∞\":{\"math\":\"\\\\infty\"},\"∟\":{\"math\":\"\\\\rightangle\"},\"∠\":{\"math\":\"\\\\angle\"},\"∡\":{\"math\":\"\\\\measuredangle\"},\"∢\":{\"math\":\"\\\\sphericalangle\"},\"∣\":{\"math\":\"\\\\mid\"},\"∤\":{\"math\":\"\\\\nmid\"},\"∥\":{\"math\":\"\\\\parallel\"},\"∦\":{\"math\":\"\\\\nparallel\"},\"∧\":{\"math\":\"\\\\wedge\"},\"∨\":{\"math\":\"\\\\vee\"},\"∩\":{\"math\":\"\\\\cap\"},\"∪\":{\"math\":\"\\\\cup\"},\"∫\":{\"math\":\"\\\\int\"},\"∬\":{\"math\":\"{\\\\int\\\\!\\\\int}\"},\"∭\":{\"math\":\"{\\\\int\\\\!\\\\int\\\\!\\\\int}\"},\"∮\":{\"math\":\"\\\\oint\"},\"∯\":{\"math\":\"\\\\surfintegral\"},\"∰\":{\"math\":\"\\\\volintegral\"},\"∱\":{\"math\":\"\\\\clwintegral\"},\"∲\":{\"math\":\"\\\\lcirclerightint\",\"mathpackages\":[\"MnSymbol\"]},\"∳\":{\"math\":\"\\\\rcirclerightint\",\"mathpackages\":[\"MnSymbol\"]},\"∴\":{\"math\":\"\\\\therefore\"},\"∵\":{\"math\":\"\\\\because\"},\"∶\":{\"math\":\":\"},\"∷\":{\"math\":\"\\\\Colon\"},\"∸\":{\"math\":\"\\\\dotdiv\",\"mathpackages\":[\"mathabx\"]},\"∹\":{\"math\":\"\\\\eqcolon\"},\"∺\":{\"math\":\"\\\\mathbin{{:}\\\\!\\\\!{-}\\\\!\\\\!{:}}\"},\"∻\":{\"math\":\"\\\\homothetic\"},\"∼\":{\"math\":\"\\\\sim\"},\"∽\":{\"math\":\"\\\\backsim\"},\"∾\":{\"math\":\"\\\\lazysinv\"},\"∿\":{\"math\":\"\\\\AC\"},\"≀\":{\"math\":\"\\\\wr\"},\"≁\":{\"math\":\"\\\\not\\\\sim\"},\"≂\":{\"math\":\"\\\\texteqsim\",\"mathpackages\":[\"xecjk\"]},\"≂̸\":{\"math\":\"\\\\NotEqualTilde\"},\"≃\":{\"math\":\"\\\\simeq\"},\"≄\":{\"math\":\"\\\\not\\\\simeq\"},\"≅\":{\"math\":\"\\\\cong\"},\"≆\":{\"math\":\"\\\\approxnotequal\"},\"≇\":{\"math\":\"\\\\not\\\\cong\"},\"≈\":{\"math\":\"\\\\approx\"},\"≉\":{\"math\":\"\\\\not\\\\approx\"},\"≊\":{\"math\":\"\\\\approxeq\"},\"≋\":{\"math\":\"\\\\tildetrpl\"},\"≋̸\":{\"math\":\"\\\\not\\\\apid\"},\"≌\":{\"math\":\"\\\\allequal\"},\"≍\":{\"math\":\"\\\\asymp\"},\"≎\":{\"math\":\"\\\\Bumpeq\"},\"≎̸\":{\"math\":\"\\\\NotHumpDownHump\"},\"≏\":{\"math\":\"\\\\bumpeq\"},\"≏̸\":{\"math\":\"\\\\NotHumpEqual\"},\"≐\":{\"math\":\"\\\\doteq\"},\"≐̸\":{\"math\":\"\\\\not\\\\doteq\"},\"≑\":{\"math\":\"\\\\doteqdot\"},\"≒\":{\"math\":\"\\\\fallingdotseq\"},\"≓\":{\"math\":\"\\\\risingdotseq\"},\"≔\":{\"math\":\"\\\\coloneq\",\"text\":\":=\"},\"≕\":{\"math\":\"=:\"},\"≖\":{\"math\":\"\\\\eqcirc\"},\"≗\":{\"math\":\"\\\\circeq\"},\"≘\":{\"math\":\"\\\\arceq\"},\"≙\":{\"math\":\"\\\\estimates\"},\"≛\":{\"math\":\"\\\\starequal\"},\"≜\":{\"math\":\"\\\\triangleq\"},\"≝\":{\"math\":\"\\\\eqdef\"},\"≞\":{\"math\":\"\\\\measeq\"},\"≠\":{\"math\":\"\\\\neq\"},\"≡\":{\"math\":\"\\\\equiv\"},\"≢\":{\"math\":\"\\\\not\\\\equiv\"},\"≣\":{\"math\":\"\\\\Equiv\"},\"≤\":{\"math\":\"\\\\leq\"},\"≥\":{\"math\":\"\\\\geq\"},\"≦\":{\"math\":\"\\\\leqq\"},\"≧\":{\"math\":\"\\\\geqq\"},\"≨\":{\"math\":\"\\\\lneqq\"},\"≨︀\":{\"math\":\"\\\\lvertneqq\"},\"≩\":{\"math\":\"\\\\gneqq\"},\"≩︀\":{\"math\":\"\\\\gvertneqq\"},\"≪\":{\"math\":\"\\\\ll\"},\"≪̸\":{\"math\":\"\\\\NotLessLess\"},\"≫\":{\"math\":\"\\\\gg\"},\"≫̸\":{\"math\":\"\\\\NotGreaterGreater\"},\"≬\":{\"math\":\"\\\\between\"},\"≭\":{\"math\":\"{\\\\not\\\\kern-0.3em\\\\times}\"},\"≮\":{\"math\":\"\\\\not<\"},\"≯\":{\"math\":\"\\\\not>\"},\"≰\":{\"math\":\"\\\\not\\\\leq\"},\"≱\":{\"math\":\"\\\\not\\\\geq\"},\"≲\":{\"math\":\"\\\\lessequivlnt\"},\"≳\":{\"math\":\"\\\\greaterequivlnt\"},\"≶\":{\"math\":\"\\\\lessgtr\"},\"≷\":{\"math\":\"\\\\gtrless\"},\"≸\":{\"math\":\"\\\\notlessgreater\"},\"≹\":{\"math\":\"\\\\notgreaterless\"},\"≺\":{\"math\":\"\\\\prec\"},\"≻\":{\"math\":\"\\\\succ\"},\"≼\":{\"math\":\"\\\\preccurlyeq\"},\"≽\":{\"math\":\"\\\\succcurlyeq\"},\"≾\":{\"math\":\"\\\\precapprox\"},\"≾̸\":{\"math\":\"\\\\NotPrecedesTilde\"},\"≿\":{\"math\":\"\\\\succapprox\"},\"≿̸\":{\"math\":\"\\\\NotSucceedsTilde\"},\"⊀\":{\"math\":\"\\\\not\\\\prec\"},\"⊁\":{\"math\":\"\\\\not\\\\succ\"},\"⊂\":{\"math\":\"\\\\subset\"},\"⊃\":{\"math\":\"\\\\supset\"},\"⊄\":{\"math\":\"\\\\not\\\\subset\"},\"⊅\":{\"math\":\"\\\\not\\\\supset\"},\"⊆\":{\"math\":\"\\\\subseteq\"},\"⊇\":{\"math\":\"\\\\supseteq\"},\"⊈\":{\"math\":\"\\\\not\\\\subseteq\"},\"⊉\":{\"math\":\"\\\\not\\\\supseteq\"},\"⊊\":{\"math\":\"\\\\subsetneq\"},\"⊊︀\":{\"math\":\"\\\\varsubsetneqq\"},\"⊋\":{\"math\":\"\\\\supsetneq\"},\"⊋︀\":{\"math\":\"\\\\varsupsetneq\"},\"⊌\":{\"math\":\"\\\\cupleftarrow\"},\"⊍\":{\"math\":\"\\\\cupdot\"},\"⊎\":{\"math\":\"\\\\uplus\"},\"⊏\":{\"math\":\"\\\\sqsubset\"},\"⊏̸\":{\"math\":\"\\\\NotSquareSubset\"},\"⊐\":{\"math\":\"\\\\sqsupset\"},\"⊐̸\":{\"math\":\"\\\\NotSquareSuperset\"},\"⊑\":{\"math\":\"\\\\sqsubseteq\"},\"⊒\":{\"math\":\"\\\\sqsupseteq\"},\"⊓\":{\"math\":\"\\\\sqcap\"},\"⊔\":{\"math\":\"\\\\sqcup\"},\"⊕\":{\"math\":\"\\\\oplus\"},\"⊖\":{\"math\":\"\\\\ominus\"},\"⊗\":{\"math\":\"\\\\otimes\"},\"⊘\":{\"math\":\"\\\\oslash\"},\"⊙\":{\"math\":\"\\\\odot\"},\"⊚\":{\"math\":\"\\\\circledcirc\"},\"⊛\":{\"math\":\"\\\\circledast\"},\"⊜\":{\"math\":\"\\\\circledequal\"},\"⊝\":{\"math\":\"\\\\circleddash\"},\"⊞\":{\"math\":\"\\\\boxplus\"},\"⊟\":{\"math\":\"\\\\boxminus\"},\"⊠\":{\"math\":\"\\\\boxtimes\"},\"⊡\":{\"math\":\"\\\\boxdot\"},\"⊢\":{\"math\":\"\\\\vdash\"},\"⊣\":{\"math\":\"\\\\dashv\"},\"⊤\":{\"math\":\"\\\\top\"},\"⊥\":{\"math\":\"\\\\perp\"},\"⊦\":{\"math\":\"\\\\assert\"},\"⊧\":{\"math\":\"\\\\truestate\"},\"⊨\":{\"math\":\"\\\\forcesextra\"},\"⊩\":{\"math\":\"\\\\Vdash\"},\"⊪\":{\"math\":\"\\\\Vvdash\"},\"⊫\":{\"math\":\"\\\\VDash\"},\"⊬\":{\"math\":\"\\\\nvdash\"},\"⊭\":{\"math\":\"\\\\nvDash\"},\"⊮\":{\"math\":\"\\\\nVdash\"},\"⊯\":{\"math\":\"\\\\nVDash\"},\"⊰\":{\"math\":\"\\\\prurel\"},\"⊱\":{\"math\":\"\\\\scurel\"},\"⊲\":{\"math\":\"\\\\vartriangleleft\"},\"⊳\":{\"math\":\"\\\\vartriangleright\"},\"⊴\":{\"math\":\"\\\\trianglelefteq\"},\"⊵\":{\"math\":\"\\\\trianglerighteq\"},\"⊶\":{\"math\":\"\\\\original\"},\"⊷\":{\"math\":\"\\\\image\"},\"⊸\":{\"math\":\"\\\\multimap\"},\"⊹\":{\"math\":\"\\\\hermitconjmatrix\"},\"⊺\":{\"math\":\"\\\\intercal\"},\"⊻\":{\"math\":\"\\\\veebar\"},\"⊼\":{\"math\":\"\\\\barwedge\"},\"⊽\":{\"math\":\"\\\\barvee\"},\"⊾\":{\"math\":\"\\\\rightanglearc\"},\"⊿\":{\"math\":\"\\\\varlrtriangle\"},\"⋂\":{\"math\":\"\\\\bigcap\"},\"⋃\":{\"math\":\"\\\\bigcup\"},\"⋄\":{\"math\":\"\\\\diamond\"},\"⋅\":{\"math\":\"\\\\cdot\"},\"⋆\":{\"math\":\"\\\\star\"},\"⋇\":{\"math\":\"\\\\divideontimes\"},\"⋈\":{\"math\":\"\\\\bowtie\"},\"⋉\":{\"math\":\"\\\\ltimes\"},\"⋊\":{\"math\":\"\\\\rtimes\"},\"⋋\":{\"math\":\"\\\\leftthreetimes\"},\"⋌\":{\"math\":\"\\\\rightthreetimes\"},\"⋍\":{\"math\":\"\\\\backsimeq\"},\"⋎\":{\"math\":\"\\\\curlyvee\"},\"⋏\":{\"math\":\"\\\\curlywedge\"},\"⋐\":{\"math\":\"\\\\Subset\"},\"⋑\":{\"math\":\"\\\\Supset\"},\"⋒\":{\"math\":\"\\\\Cap\"},\"⋓\":{\"math\":\"\\\\Cup\"},\"⋔\":{\"math\":\"\\\\pitchfork\"},\"⋕\":{\"math\":\"\\\\hash\"},\"⋖\":{\"math\":\"\\\\lessdot\"},\"⋗\":{\"math\":\"\\\\gtrdot\"},\"⋘\":{\"math\":\"\\\\verymuchless\"},\"⋙\":{\"math\":\"\\\\verymuchgreater\"},\"⋚\":{\"math\":\"\\\\lesseqgtr\"},\"⋛\":{\"math\":\"\\\\gtreqless\"},\"⋜\":{\"math\":\"\\\\eqless\"},\"⋝\":{\"math\":\"\\\\eqgtr\"},\"⋞\":{\"math\":\"\\\\curlyeqprec\"},\"⋟\":{\"math\":\"\\\\curlyeqsucc\"},\"⋠\":{\"math\":\"\\\\npreceq\"},\"⋡\":{\"math\":\"\\\\nsucceq\"},\"⋢\":{\"math\":\"\\\\not\\\\sqsubseteq\"},\"⋣\":{\"math\":\"\\\\not\\\\sqsupseteq\"},\"⋤\":{\"math\":\"\\\\sqsubsetneq\"},\"⋥\":{\"math\":\"\\\\Elzsqspne\"},\"⋦\":{\"math\":\"\\\\lnsim\"},\"⋧\":{\"math\":\"\\\\gnsim\"},\"⋨\":{\"math\":\"\\\\precedesnotsimilar\"},\"⋩\":{\"math\":\"\\\\succnsim\"},\"⋪\":{\"math\":\"\\\\ntriangleleft\"},\"⋫\":{\"math\":\"\\\\ntriangleright\"},\"⋬\":{\"math\":\"\\\\ntrianglelefteq\"},\"⋭\":{\"math\":\"\\\\ntrianglerighteq\"},\"⋮\":{\"math\":\"\\\\vdots\"},\"⋯\":{\"math\":\"\\\\cdots\"},\"⋰\":{\"math\":\"\\\\upslopeellipsis\"},\"⋱\":{\"math\":\"\\\\downslopeellipsis\"},\"⋲\":{\"math\":\"\\\\disin\"},\"⋳\":{\"math\":\"\\\\varisins\"},\"⋴\":{\"math\":\"\\\\isins\"},\"⋵\":{\"math\":\"\\\\isindot\"},\"⋶\":{\"math\":\"\\\\barin\"},\"⋷\":{\"math\":\"\\\\isinobar\"},\"⋸\":{\"math\":\"\\\\isinvb\"},\"⋹\":{\"math\":\"\\\\isinE\"},\"⋺\":{\"math\":\"\\\\nisd\"},\"⋻\":{\"math\":\"\\\\varnis\"},\"⋼\":{\"math\":\"\\\\nis\"},\"⋽\":{\"math\":\"\\\\varniobar\"},\"⋾\":{\"math\":\"\\\\niobar\"},\"⋿\":{\"math\":\"\\\\bagmember\"},\"⌀\":{\"math\":\"\\\\diameter\"},\"⌂\":{\"math\":\"\\\\house\"},\"⌅\":{\"math\":\"\\\\varbarwedge\",\"text\":\"{\\\\barwedge}\"},\"⌆\":{\"math\":\"\\\\perspcorrespond\"},\"⌈\":{\"math\":\"\\\\lceil\"},\"⌉\":{\"math\":\"\\\\rceil\"},\"⌊\":{\"math\":\"\\\\lfloor\"},\"⌋\":{\"math\":\"\\\\rfloor\"},\"⌐\":{\"math\":\"\\\\invneg\"},\"⌑\":{\"math\":\"\\\\wasylozenge\"},\"⌒\":{\"math\":\"\\\\profline\"},\"⌓\":{\"math\":\"\\\\profsurf\"},\"⌕\":{\"math\":\"\\\\recorder\"},\"⌖\":{\"math\":\"{\\\\mathchar\\\"2208}\"},\"⌗\":{\"math\":\"\\\\viewdata\"},\"⌙\":{\"math\":\"\\\\turnednot\"},\"⌜\":{\"math\":\"\\\\ulcorner\"},\"⌝\":{\"math\":\"\\\\urcorner\"},\"⌞\":{\"math\":\"\\\\llcorner\"},\"⌟\":{\"math\":\"\\\\lrcorner\"},\"⌠\":{\"math\":\"\\\\inttop\"},\"⌡\":{\"math\":\"\\\\intbottom\"},\"⌢\":{\"math\":\"\\\\frown\"},\"⌣\":{\"math\":\"\\\\smile\"},\"〈\":{\"math\":\"\\\\langle\"},\"〉\":{\"math\":\"\\\\rangle\"},\"⌬\":{\"math\":\"\\\\varhexagonlrbonds\"},\"⌲\":{\"math\":\"\\\\conictaper\"},\"⌶\":{\"math\":\"\\\\topbot\"},\"⌹\":{\"math\":\"\\\\APLinv\"},\"⌿\":{\"math\":\"\\\\notslash\"},\"⍀\":{\"math\":\"\\\\notbackslash\"},\"⍇\":{\"math\":\"\\\\APLleftarrowbox\"},\"⍈\":{\"math\":\"\\\\APLrightarrowbox\"},\"⍉\":{\"math\":\"\\\\invdiameter\"},\"⍐\":{\"math\":\"\\\\APLuparrowbox\"},\"⍓\":{\"math\":\"\\\\APLboxupcaret\"},\"⍗\":{\"math\":\"\\\\APLdownarrowbox\"},\"⍝\":{\"math\":\"\\\\APLcomment\"},\"⍞\":{\"math\":\"\\\\APLinput\"},\"⍟\":{\"math\":\"\\\\APLlog\"},\"⍰\":{\"math\":\"\\\\APLboxquestion\"},\"⍼\":{\"math\":\"\\\\rangledownzigzagarrow\"},\"⎔\":{\"math\":\"\\\\hexagon\"},\"⎛\":{\"math\":\"\\\\lparenuend\"},\"⎜\":{\"math\":\"\\\\lparenextender\"},\"⎝\":{\"math\":\"\\\\lparenlend\"},\"⎞\":{\"math\":\"\\\\rparenuend\"},\"⎟\":{\"math\":\"\\\\rparenextender\"},\"⎠\":{\"math\":\"\\\\rparenlend\"},\"⎡\":{\"math\":\"\\\\lbrackuend\"},\"⎢\":{\"math\":\"\\\\lbrackextender\"},\"⎣\":{\"math\":\"\\\\Elzdlcorn\"},\"⎤\":{\"math\":\"\\\\rbrackuend\"},\"⎥\":{\"math\":\"\\\\rbrackextender\"},\"⎦\":{\"math\":\"\\\\rbracklend\"},\"⎧\":{\"math\":\"\\\\lbraceuend\"},\"⎨\":{\"math\":\"\\\\lbracemid\"},\"⎩\":{\"math\":\"\\\\lbracelend\"},\"⎪\":{\"math\":\"\\\\vbraceextender\"},\"⎫\":{\"math\":\"\\\\rbraceuend\"},\"⎬\":{\"math\":\"\\\\rbracemid\"},\"⎭\":{\"math\":\"\\\\rbracelend\"},\"⎮\":{\"math\":\"\\\\intextender\"},\"⎯\":{\"math\":\"\\\\harrowextender\"},\"⎰\":{\"math\":\"\\\\lmoustache\"},\"⎱\":{\"math\":\"\\\\rmoustache\"},\"⎲\":{\"math\":\"\\\\sumtop\"},\"⎳\":{\"math\":\"\\\\sumbottom\"},\"⎴\":{\"math\":\"\\\\overbracket\"},\"⎵\":{\"math\":\"\\\\underbracket\"},\"⎶\":{\"math\":\"\\\\bbrktbrk\"},\"⎷\":{\"math\":\"\\\\sqrtbottom\"},\"⎸\":{\"math\":\"\\\\lvboxline\"},\"⎹\":{\"math\":\"\\\\rvboxline\"},\"⏎\":{\"math\":\"\\\\varcarriagereturn\"},\"⏜\":{\"math\":\"\\\\overparen\"},\"⏝\":{\"math\":\"\\\\underparen\"},\"⏞\":{\"math\":\"\\\\overbrace\"},\"⏟\":{\"math\":\"\\\\underbrace\"},\"⏠\":{\"math\":\"\\\\obrbrak\"},\"⏡\":{\"math\":\"\\\\ubrbrak\"},\"⏢\":{\"math\":\"\\\\trapezium\"},\"⏣\":{\"math\":\"\\\\benzenr\"},\"⏤\":{\"math\":\"\\\\strns\"},\"⏥\":{\"math\":\"\\\\fltns\"},\"⏦\":{\"math\":\"\\\\accurrent\"},\"⏧\":{\"math\":\"\\\\elinters\"},\"␀\":{\"text\":\"NUL\"},\"␁\":{\"text\":\"SOH\"},\"␂\":{\"text\":\"STX\"},\"␃\":{\"text\":\"ETX\"},\"␄\":{\"text\":\"EOT\"},\"␅\":{\"text\":\"ENQ\"},\"␆\":{\"text\":\"ACK\"},\"␇\":{\"text\":\"BEL\"},\"␈\":{\"text\":\"BS\"},\"␉\":{\"text\":\"HT\"},\"␊\":{\"text\":\"LF\"},\"␋\":{\"text\":\"VT\"},\"␌\":{\"text\":\"FF\"},\"␍\":{\"text\":\"CR\"},\"␎\":{\"text\":\"SO\"},\"␏\":{\"text\":\"SI\"},\"␐\":{\"text\":\"DLE\"},\"␑\":{\"text\":\"DC1\"},\"␒\":{\"text\":\"DC2\"},\"␓\":{\"text\":\"DC3\"},\"␔\":{\"text\":\"DC4\"},\"␕\":{\"text\":\"NAK\"},\"␖\":{\"text\":\"SYN\"},\"␗\":{\"text\":\"ETB\"},\"␘\":{\"text\":\"CAN\"},\"␙\":{\"text\":\"EM\"},\"␚\":{\"text\":\"SUB\"},\"␛\":{\"text\":\"ESC\"},\"␜\":{\"text\":\"FS\"},\"␝\":{\"text\":\"GS\"},\"␞\":{\"text\":\"RS\"},\"␟\":{\"text\":\"US\"},\"␠\":{\"text\":\"SP\"},\"␡\":{\"text\":\"DEL\"},\"␣\":{\"text\":\"{\\\\textvisiblespace}\"},\"␤\":{\"text\":\"NL\"},\"␥\":{\"text\":\"///\"},\"␦\":{\"text\":\"?\"},\"①\":{\"text\":\"\\\\ding{172}\"},\"②\":{\"text\":\"\\\\ding{173}\"},\"③\":{\"text\":\"\\\\ding{174}\"},\"④\":{\"text\":\"\\\\ding{175}\"},\"⑤\":{\"text\":\"\\\\ding{176}\"},\"⑥\":{\"text\":\"\\\\ding{177}\"},\"⑦\":{\"text\":\"\\\\ding{178}\"},\"⑧\":{\"text\":\"\\\\ding{179}\"},\"⑨\":{\"text\":\"\\\\ding{180}\"},\"⑩\":{\"text\":\"\\\\ding{181}\"},\"⑪\":{\"text\":\"(11)\"},\"⑫\":{\"text\":\"(12)\"},\"⑬\":{\"text\":\"(13)\"},\"⑭\":{\"text\":\"(14)\"},\"⑮\":{\"text\":\"(15)\"},\"⑯\":{\"text\":\"(16)\"},\"⑰\":{\"text\":\"(17)\"},\"⑱\":{\"text\":\"(18)\"},\"⑲\":{\"text\":\"(19)\"},\"⑳\":{\"text\":\"(20)\"},\"⑴\":{\"text\":\"(1)\"},\"⑵\":{\"text\":\"(2)\"},\"⑶\":{\"text\":\"(3)\"},\"⑷\":{\"text\":\"(4)\"},\"⑸\":{\"text\":\"(5)\"},\"⑹\":{\"text\":\"(6)\"},\"⑺\":{\"text\":\"(7)\"},\"⑻\":{\"text\":\"(8)\"},\"⑼\":{\"text\":\"(9)\"},\"⑽\":{\"text\":\"(10)\"},\"⑾\":{\"text\":\"(11)\"},\"⑿\":{\"text\":\"(12)\"},\"⒀\":{\"text\":\"(13)\"},\"⒁\":{\"text\":\"(14)\"},\"⒂\":{\"text\":\"(15)\"},\"⒃\":{\"text\":\"(16)\"},\"⒄\":{\"text\":\"(17)\"},\"⒅\":{\"text\":\"(18)\"},\"⒆\":{\"text\":\"(19)\"},\"⒇\":{\"text\":\"(20)\"},\"⒈\":{\"text\":\"1.\"},\"⒉\":{\"text\":\"2.\"},\"⒊\":{\"text\":\"3.\"},\"⒋\":{\"text\":\"4.\"},\"⒌\":{\"text\":\"5.\"},\"⒍\":{\"text\":\"6.\"},\"⒎\":{\"text\":\"7.\"},\"⒏\":{\"text\":\"8.\"},\"⒐\":{\"text\":\"9.\"},\"⒑\":{\"text\":\"10.\"},\"⒒\":{\"text\":\"11.\"},\"⒓\":{\"text\":\"12.\"},\"⒔\":{\"text\":\"13.\"},\"⒕\":{\"text\":\"14.\"},\"⒖\":{\"text\":\"15.\"},\"⒗\":{\"text\":\"16.\"},\"⒘\":{\"text\":\"17.\"},\"⒙\":{\"text\":\"18.\"},\"⒚\":{\"text\":\"19.\"},\"⒛\":{\"text\":\"20.\"},\"⒜\":{\"text\":\"(a)\"},\"⒝\":{\"text\":\"(b)\"},\"⒞\":{\"text\":\"(c)\"},\"⒟\":{\"text\":\"(d)\"},\"⒠\":{\"text\":\"(e)\"},\"⒡\":{\"text\":\"(f)\"},\"⒢\":{\"text\":\"(g)\"},\"⒣\":{\"text\":\"(h)\"},\"⒤\":{\"text\":\"(i)\"},\"⒥\":{\"text\":\"(j)\"},\"⒦\":{\"text\":\"(k)\"},\"⒧\":{\"text\":\"(l)\"},\"⒨\":{\"text\":\"(m)\"},\"⒩\":{\"text\":\"(n)\"},\"⒪\":{\"text\":\"(o)\"},\"⒫\":{\"text\":\"(p)\"},\"⒬\":{\"text\":\"(q)\"},\"⒭\":{\"text\":\"(r)\"},\"⒮\":{\"text\":\"(s)\"},\"⒯\":{\"text\":\"(t)\"},\"⒰\":{\"text\":\"(u)\"},\"⒱\":{\"text\":\"(v)\"},\"⒲\":{\"text\":\"(w)\"},\"⒳\":{\"text\":\"(x)\"},\"⒴\":{\"text\":\"(y)\"},\"⒵\":{\"text\":\"(z)\"},\"Ⓐ\":{\"text\":\"(A)\"},\"Ⓑ\":{\"text\":\"(B)\"},\"Ⓒ\":{\"text\":\"(C)\"},\"Ⓓ\":{\"text\":\"(D)\"},\"Ⓔ\":{\"text\":\"(E)\"},\"Ⓕ\":{\"text\":\"(F)\"},\"Ⓖ\":{\"text\":\"(G)\"},\"Ⓗ\":{\"text\":\"(H)\"},\"Ⓘ\":{\"text\":\"(I)\"},\"Ⓙ\":{\"text\":\"(J)\"},\"Ⓚ\":{\"text\":\"(K)\"},\"Ⓛ\":{\"text\":\"(L)\"},\"Ⓜ\":{\"text\":\"(M)\"},\"Ⓝ\":{\"text\":\"(N)\"},\"Ⓞ\":{\"text\":\"(O)\"},\"Ⓟ\":{\"text\":\"(P)\"},\"Ⓠ\":{\"text\":\"(Q)\"},\"Ⓡ\":{\"text\":\"(R)\"},\"Ⓢ\":{\"math\":\"\\\\circledS\"},\"Ⓣ\":{\"text\":\"(T)\"},\"Ⓤ\":{\"text\":\"(U)\"},\"Ⓥ\":{\"text\":\"(V)\"},\"Ⓦ\":{\"text\":\"(W)\"},\"Ⓧ\":{\"text\":\"(X)\"},\"Ⓨ\":{\"text\":\"(Y)\"},\"Ⓩ\":{\"text\":\"(Z)\"},\"ⓐ\":{\"text\":\"(a)\"},\"ⓑ\":{\"text\":\"(b)\"},\"ⓒ\":{\"text\":\"(c)\"},\"ⓓ\":{\"text\":\"(d)\"},\"ⓔ\":{\"text\":\"(e)\"},\"ⓕ\":{\"text\":\"(f)\"},\"ⓖ\":{\"text\":\"(g)\"},\"ⓗ\":{\"text\":\"(h)\"},\"ⓘ\":{\"text\":\"(i)\"},\"ⓙ\":{\"text\":\"(j)\"},\"ⓚ\":{\"text\":\"(k)\"},\"ⓛ\":{\"text\":\"(l)\"},\"ⓜ\":{\"text\":\"(m)\"},\"ⓝ\":{\"text\":\"(n)\"},\"ⓞ\":{\"text\":\"(o)\"},\"ⓟ\":{\"text\":\"(p)\"},\"ⓠ\":{\"text\":\"(q)\"},\"ⓡ\":{\"text\":\"(r)\"},\"ⓢ\":{\"text\":\"(s)\"},\"ⓣ\":{\"text\":\"(t)\"},\"ⓤ\":{\"text\":\"(u)\"},\"ⓥ\":{\"text\":\"(v)\"},\"ⓦ\":{\"text\":\"(w)\"},\"ⓧ\":{\"text\":\"(x)\"},\"ⓨ\":{\"text\":\"(y)\"},\"ⓩ\":{\"text\":\"(z)\"},\"⓪\":{\"text\":\"(0)\"},\"─\":{\"text\":\"-\"},\"━\":{\"text\":\"=\"},\"│\":{\"text\":\"|\"},\"┃\":{\"text\":\"|\"},\"┄\":{\"text\":\"-\"},\"┅\":{\"text\":\"=\"},\"┆\":{\"math\":\"\\\\Elzdshfnc\"},\"┇\":{\"text\":\"|\"},\"┈\":{\"text\":\"-\"},\"┉\":{\"text\":\"=\"},\"┊\":{\"text\":\"|\"},\"┋\":{\"text\":\"|\"},\"┌\":{\"text\":\"+\"},\"┍\":{\"text\":\"+\"},\"┎\":{\"text\":\"+\"},\"┏\":{\"text\":\"+\"},\"┐\":{\"text\":\"+\"},\"┑\":{\"text\":\"+\"},\"┒\":{\"text\":\"+\"},\"┓\":{\"text\":\"+\"},\"└\":{\"text\":\"+\"},\"┕\":{\"text\":\"+\"},\"┖\":{\"text\":\"+\"},\"┗\":{\"text\":\"+\"},\"┘\":{\"text\":\"+\"},\"┙\":{\"math\":\"\\\\Elzsqfnw\"},\"┚\":{\"text\":\"+\"},\"┛\":{\"text\":\"+\"},\"├\":{\"text\":\"+\"},\"┝\":{\"text\":\"+\"},\"┞\":{\"text\":\"+\"},\"┟\":{\"text\":\"+\"},\"┠\":{\"text\":\"+\"},\"┡\":{\"text\":\"+\"},\"┢\":{\"text\":\"+\"},\"┣\":{\"text\":\"+\"},\"┤\":{\"text\":\"+\"},\"┥\":{\"text\":\"+\"},\"┦\":{\"text\":\"+\"},\"┧\":{\"text\":\"+\"},\"┨\":{\"text\":\"+\"},\"┩\":{\"text\":\"+\"},\"┪\":{\"text\":\"+\"},\"┫\":{\"text\":\"+\"},\"┬\":{\"text\":\"+\"},\"┭\":{\"text\":\"+\"},\"┮\":{\"text\":\"+\"},\"┯\":{\"text\":\"+\"},\"┰\":{\"text\":\"+\"},\"┱\":{\"text\":\"+\"},\"┲\":{\"text\":\"+\"},\"┳\":{\"text\":\"+\"},\"┴\":{\"text\":\"+\"},\"┵\":{\"text\":\"+\"},\"┶\":{\"text\":\"+\"},\"┷\":{\"text\":\"+\"},\"┸\":{\"text\":\"+\"},\"┹\":{\"text\":\"+\"},\"┺\":{\"text\":\"+\"},\"┻\":{\"text\":\"+\"},\"┼\":{\"text\":\"+\"},\"┽\":{\"text\":\"+\"},\"┾\":{\"text\":\"+\"},\"┿\":{\"text\":\"+\"},\"╀\":{\"text\":\"+\"},\"╁\":{\"text\":\"+\"},\"╂\":{\"text\":\"+\"},\"╃\":{\"text\":\"+\"},\"╄\":{\"text\":\"+\"},\"╅\":{\"text\":\"+\"},\"╆\":{\"text\":\"+\"},\"╇\":{\"text\":\"+\"},\"╈\":{\"text\":\"+\"},\"╉\":{\"text\":\"+\"},\"╊\":{\"text\":\"+\"},\"╋\":{\"text\":\"+\"},\"╌\":{\"text\":\"-\"},\"╍\":{\"text\":\"=\"},\"╎\":{\"text\":\"|\"},\"╏\":{\"text\":\"|\"},\"═\":{\"text\":\"=\"},\"║\":{\"text\":\"|\"},\"╒\":{\"text\":\"+\"},\"╓\":{\"text\":\"+\"},\"╔\":{\"text\":\"+\"},\"╕\":{\"text\":\"+\"},\"╖\":{\"text\":\"+\"},\"╗\":{\"text\":\"+\"},\"╘\":{\"text\":\"+\"},\"╙\":{\"text\":\"+\"},\"╚\":{\"text\":\"+\"},\"╛\":{\"text\":\"+\"},\"╜\":{\"text\":\"+\"},\"╝\":{\"text\":\"+\"},\"╞\":{\"text\":\"+\"},\"╟\":{\"text\":\"+\"},\"╠\":{\"text\":\"+\"},\"╡\":{\"text\":\"+\"},\"╢\":{\"text\":\"+\"},\"╣\":{\"text\":\"+\"},\"╤\":{\"text\":\"+\"},\"╥\":{\"text\":\"+\"},\"╦\":{\"text\":\"+\"},\"╧\":{\"text\":\"+\"},\"╨\":{\"text\":\"+\"},\"╩\":{\"text\":\"+\"},\"╪\":{\"text\":\"+\"},\"╫\":{\"text\":\"+\"},\"╬\":{\"text\":\"+\"},\"╭\":{\"text\":\"+\"},\"╮\":{\"text\":\"+\"},\"╯\":{\"text\":\"+\"},\"╰\":{\"text\":\"+\"},\"╱\":{\"math\":\"\\\\diagup\"},\"╲\":{\"text\":\"\\\\\"},\"╳\":{\"text\":\"X\"},\"╼\":{\"text\":\"-\"},\"╽\":{\"text\":\"|\"},\"╾\":{\"text\":\"-\"},\"╿\":{\"text\":\"|\"},\"▀\":{\"math\":\"\\\\blockuphalf\"},\"▄\":{\"math\":\"\\\\blocklowhalf\"},\"█\":{\"math\":\"\\\\blockfull\"},\"▌\":{\"math\":\"\\\\blocklefthalf\"},\"▐\":{\"math\":\"\\\\blockrighthalf\"},\"░\":{\"math\":\"\\\\blockqtrshaded\"},\"▒\":{\"math\":\"\\\\blockhalfshaded\"},\"▓\":{\"math\":\"\\\\blockthreeqtrshaded\"},\"■\":{\"math\":\"\\\\mdlgblksquare\",\"text\":\"\\\\ding{110}\"},\"□\":{\"math\":\"\\\\square\"},\"▢\":{\"math\":\"\\\\squoval\"},\"▣\":{\"math\":\"\\\\blackinwhitesquare\"},\"▤\":{\"math\":\"\\\\squarehfill\"},\"▥\":{\"math\":\"\\\\squarevfill\"},\"▦\":{\"math\":\"\\\\squarehvfill\"},\"▧\":{\"math\":\"\\\\squarenwsefill\"},\"▨\":{\"math\":\"\\\\squareneswfill\"},\"▩\":{\"math\":\"\\\\squarecrossfill\"},\"▪\":{\"math\":\"\\\\blacksquare\"},\"▫\":{\"math\":\"\\\\smwhtsquare\"},\"▬\":{\"math\":\"\\\\hrectangleblack\"},\"▭\":{\"math\":\"\\\\fbox{~~}\"},\"▮\":{\"math\":\"\\\\vrectangleblack\"},\"▯\":{\"math\":\"\\\\Elzvrecto\"},\"▰\":{\"math\":\"\\\\parallelogramblack\"},\"▲\":{\"math\":\"\\\\bigblacktriangleup\",\"text\":\"\\\\ding{115}\"},\"△\":{\"math\":\"\\\\bigtriangleup\"},\"▴\":{\"math\":\"\\\\blacktriangle\"},\"▵\":{\"math\":\"\\\\vartriangle\"},\"▶\":{\"math\":\"\\\\RHD\"},\"▷\":{\"math\":\"\\\\rhd\"},\"▸\":{\"math\":\"\\\\blacktriangleright\"},\"▹\":{\"math\":\"\\\\triangleright\"},\"►\":{\"math\":\"\\\\blackpointerright\"},\"▻\":{\"math\":\"\\\\whitepointerright\"},\"▼\":{\"math\":\"\\\\bigblacktriangledown\",\"text\":\"\\\\ding{116}\"},\"▽\":{\"math\":\"\\\\bigtriangledown\"},\"▾\":{\"math\":\"\\\\blacktriangledown\"},\"▿\":{\"math\":\"\\\\triangledown\"},\"◀\":{\"math\":\"\\\\LHD\"},\"◁\":{\"math\":\"\\\\lhd\"},\"◂\":{\"math\":\"\\\\blacktriangleleft\"},\"◃\":{\"math\":\"\\\\triangleleft\"},\"◄\":{\"math\":\"\\\\blackpointerleft\"},\"◅\":{\"math\":\"\\\\whitepointerleft\"},\"◆\":{\"math\":\"\\\\Diamondblack\",\"text\":\"\\\\ding{117}\"},\"◇\":{\"math\":\"\\\\Diamond\"},\"◈\":{\"math\":\"\\\\blackinwhitediamond\"},\"◉\":{\"math\":\"\\\\fisheye\"},\"◊\":{\"math\":\"\\\\lozenge\"},\"○\":{\"math\":\"\\\\bigcirc\"},\"◌\":{\"math\":\"\\\\dottedcircle\"},\"◍\":{\"math\":\"\\\\circlevertfill\"},\"◎\":{\"math\":\"\\\\bullseye\"},\"●\":{\"math\":\"\\\\CIRCLE\",\"text\":\"\\\\ding{108}\"},\"◐\":{\"math\":\"\\\\Elzcirfl\"},\"◑\":{\"math\":\"\\\\Elzcirfr\"},\"◒\":{\"math\":\"\\\\Elzcirfb\"},\"◓\":{\"math\":\"\\\\circletophalfblack\"},\"◔\":{\"math\":\"\\\\circleurquadblack\"},\"◕\":{\"math\":\"\\\\blackcircleulquadwhite\"},\"◖\":{\"math\":\"\\\\LEFTCIRCLE\"},\"◗\":{\"math\":\"\\\\RIGHTCIRCLE\",\"text\":\"\\\\ding{119}\"},\"◘\":{\"math\":\"\\\\Elzrvbull\"},\"◙\":{\"math\":\"\\\\inversewhitecircle\"},\"◚\":{\"math\":\"\\\\invwhiteupperhalfcircle\"},\"◛\":{\"math\":\"\\\\invwhitelowerhalfcircle\"},\"◜\":{\"math\":\"\\\\ularc\"},\"◝\":{\"math\":\"\\\\urarc\"},\"◞\":{\"math\":\"\\\\lrarc\"},\"◟\":{\"math\":\"\\\\llarc\"},\"◠\":{\"math\":\"\\\\topsemicircle\"},\"◡\":{\"math\":\"\\\\botsemicircle\"},\"◢\":{\"math\":\"\\\\lrblacktriangle\"},\"◣\":{\"math\":\"\\\\llblacktriangle\"},\"◤\":{\"math\":\"\\\\ulblacktriangle\"},\"◥\":{\"math\":\"\\\\urblacktriangle\"},\"◦\":{\"math\":\"\\\\smwhtcircle\"},\"◧\":{\"math\":\"\\\\Elzsqfl\"},\"◨\":{\"math\":\"\\\\Elzsqfr\"},\"◩\":{\"math\":\"\\\\squareulblack\"},\"◪\":{\"math\":\"\\\\Elzsqfse\"},\"◫\":{\"math\":\"\\\\boxbar\"},\"◬\":{\"math\":\"\\\\trianglecdot\"},\"◭\":{\"math\":\"\\\\triangleleftblack\"},\"◮\":{\"math\":\"\\\\trianglerightblack\"},\"◯\":{\"math\":\"\\\\bigcirc\"},\"◰\":{\"math\":\"\\\\squareulquad\"},\"◱\":{\"math\":\"\\\\squarellquad\"},\"◲\":{\"math\":\"\\\\squarelrquad\"},\"◳\":{\"math\":\"\\\\squareurquad\"},\"◴\":{\"math\":\"\\\\circleulquad\"},\"◵\":{\"math\":\"\\\\circlellquad\"},\"◶\":{\"math\":\"\\\\circlelrquad\"},\"◷\":{\"math\":\"\\\\circleurquad\"},\"◸\":{\"math\":\"\\\\ultriangle\"},\"◹\":{\"math\":\"\\\\urtriangle\"},\"◺\":{\"math\":\"\\\\lltriangle\"},\"◻\":{\"math\":\"\\\\square\"},\"◼\":{\"math\":\"\\\\blacksquare\"},\"◽\":{\"math\":\"\\\\mdsmwhtsquare\"},\"◾\":{\"math\":\"\\\\mdsmblksquare\"},\"◿\":{\"math\":\"\\\\lrtriangle\"},\"★\":{\"math\":\"\\\\bigstar\",\"text\":\"\\\\ding{72}\"},\"☆\":{\"math\":\"\\\\bigwhitestar\",\"text\":\"\\\\ding{73}\"},\"☉\":{\"math\":\"\\\\Sun\"},\"☎\":{\"text\":\"\\\\ding{37}\"},\"☐\":{\"math\":\"\\\\Square\"},\"☑\":{\"math\":\"\\\\CheckedBox\"},\"☒\":{\"math\":\"\\\\XBox\"},\"☓\":{\"text\":\"X\"},\"☕\":{\"math\":\"\\\\steaming\"},\"☛\":{\"text\":\"\\\\ding{42}\"},\"☞\":{\"math\":\"\\\\pointright\",\"text\":\"\\\\ding{43}\"},\"☠\":{\"math\":\"\\\\skull\"},\"☡\":{\"math\":\"\\\\danger\"},\"☢\":{\"math\":\"\\\\radiation\"},\"☣\":{\"math\":\"\\\\biohazard\"},\"☯\":{\"math\":\"\\\\yinyang\"},\"☹\":{\"math\":\"\\\\frownie\"},\"☺\":{\"math\":\"\\\\smiley\"},\"☻\":{\"math\":\"\\\\blacksmiley\"},\"☼\":{\"math\":\"\\\\sun\"},\"☽\":{\"text\":\"{\\\\rightmoon}\",\"textpackages\":[\"wasysym\"]},\"☾\":{\"text\":\"{\\\\leftmoon}\",\"textpackages\":[\"wasysym\"]},\"☿\":{\"math\":\"\\\\mercury\",\"text\":\"{\\\\mercury}\"},\"♀\":{\"math\":\"\\\\female\",\"text\":\"{\\\\venus}\"},\"♁\":{\"math\":\"\\\\earth\"},\"♂\":{\"math\":\"\\\\male\",\"text\":\"{\\\\male}\"},\"♃\":{\"math\":\"\\\\jupiter\",\"text\":\"{\\\\jupiter}\"},\"♄\":{\"math\":\"\\\\saturn\",\"text\":\"{\\\\saturn}\"},\"♅\":{\"math\":\"\\\\uranus\",\"text\":\"{\\\\uranus}\"},\"♆\":{\"math\":\"\\\\neptune\",\"text\":\"{\\\\neptune}\"},\"♇\":{\"math\":\"\\\\pluto\",\"text\":\"{\\\\pluto}\"},\"♈\":{\"math\":\"\\\\aries\",\"text\":\"{\\\\aries}\"},\"♉\":{\"math\":\"\\\\taurus\",\"text\":\"{\\\\taurus}\"},\"♊\":{\"math\":\"\\\\gemini\",\"text\":\"{\\\\gemini}\"},\"♋\":{\"math\":\"\\\\cancer\",\"text\":\"{\\\\cancer}\"},\"♌\":{\"math\":\"\\\\leo\",\"text\":\"{\\\\leo}\"},\"♍\":{\"math\":\"\\\\virgo\",\"text\":\"{\\\\virgo}\"},\"♎\":{\"math\":\"\\\\libra\",\"text\":\"{\\\\libra}\"},\"♏\":{\"math\":\"\\\\scorpio\",\"text\":\"{\\\\scorpio}\"},\"♐\":{\"math\":\"\\\\sagittarius\",\"text\":\"{\\\\sagittarius}\"},\"♑\":{\"math\":\"\\\\capricornus\",\"text\":\"{\\\\capricornus}\"},\"♒\":{\"math\":\"\\\\aquarius\",\"text\":\"{\\\\aquarius}\"},\"♓\":{\"math\":\"\\\\pisces\",\"text\":\"{\\\\pisces}\"},\"♠\":{\"math\":\"\\\\spadesuit\",\"text\":\"\\\\ding{171}\"},\"♡\":{\"math\":\"\\\\heartsuit\"},\"♢\":{\"math\":\"\\\\diamond\"},\"♣\":{\"math\":\"\\\\clubsuit\",\"text\":\"\\\\ding{168}\"},\"♤\":{\"math\":\"\\\\varspadesuit\"},\"♥\":{\"math\":\"\\\\varheartsuit\",\"text\":\"\\\\ding{170}\"},\"♦\":{\"math\":\"\\\\vardiamondsuit\",\"text\":\"\\\\ding{169}\"},\"♧\":{\"math\":\"\\\\varclubsuit\"},\"♩\":{\"math\":\"\\\\quarternote\",\"text\":\"{\\\\quarternote}\"},\"♪\":{\"math\":\"\\\\eighthnote\",\"text\":\"{\\\\eighthnote}\"},\"♫\":{\"math\":\"\\\\twonotes\"},\"♬\":{\"math\":\"\\\\sixteenthnote\"},\"♭\":{\"math\":\"\\\\flat\"},\"♮\":{\"math\":\"\\\\natural\"},\"♯\":{\"math\":\"\\\\sharp\"},\"♻\":{\"math\":\"\\\\recycle\"},\"♾\":{\"math\":\"\\\\acidfree\"},\"⚀\":{\"math\":\"\\\\dicei\"},\"⚁\":{\"math\":\"\\\\diceii\"},\"⚂\":{\"math\":\"\\\\diceiii\"},\"⚃\":{\"math\":\"\\\\diceiv\"},\"⚄\":{\"math\":\"\\\\dicev\"},\"⚅\":{\"math\":\"\\\\dicevi\"},\"⚆\":{\"math\":\"\\\\circledrightdot\"},\"⚇\":{\"math\":\"\\\\circledtwodots\"},\"⚈\":{\"math\":\"\\\\blackcircledrightdot\"},\"⚉\":{\"math\":\"\\\\blackcircledtwodots\"},\"⚓\":{\"math\":\"\\\\anchor\"},\"⚔\":{\"math\":\"\\\\swords\"},\"⚠\":{\"math\":\"\\\\warning\"},\"⚥\":{\"math\":\"\\\\Hermaphrodite\"},\"⚪\":{\"math\":\"\\\\medcirc\"},\"⚫\":{\"math\":\"\\\\medbullet\"},\"⚬\":{\"math\":\"\\\\mdsmwhtcircle\"},\"⚲\":{\"math\":\"\\\\neuter\"},\"✁\":{\"text\":\"\\\\ding{33}\"},\"✂\":{\"text\":\"\\\\ding{34}\"},\"✃\":{\"text\":\"\\\\ding{35}\"},\"✄\":{\"text\":\"\\\\ding{36}\"},\"✆\":{\"text\":\"\\\\ding{38}\"},\"✇\":{\"text\":\"\\\\ding{39}\"},\"✈\":{\"text\":\"\\\\ding{40}\"},\"✉\":{\"text\":\"\\\\ding{41}\"},\"✌\":{\"text\":\"\\\\ding{44}\"},\"✍\":{\"text\":\"\\\\ding{45}\"},\"✎\":{\"math\":\"\\\\pencil\",\"text\":\"\\\\ding{46}\"},\"✏\":{\"text\":\"\\\\ding{47}\"},\"✐\":{\"text\":\"\\\\ding{48}\"},\"✑\":{\"text\":\"\\\\ding{49}\"},\"✒\":{\"text\":\"\\\\ding{50}\"},\"✓\":{\"math\":\"\\\\checkmark\",\"text\":\"\\\\ding{51}\"},\"✔\":{\"text\":\"\\\\ding{52}\"},\"✕\":{\"text\":\"\\\\ding{53}\"},\"✖\":{\"text\":\"\\\\ding{54}\"},\"✗\":{\"math\":\"\\\\ballotx\",\"text\":\"\\\\ding{55}\"},\"✘\":{\"text\":\"\\\\ding{56}\"},\"✙\":{\"text\":\"\\\\ding{57}\"},\"✚\":{\"text\":\"\\\\ding{58}\"},\"✛\":{\"text\":\"\\\\ding{59}\"},\"✜\":{\"text\":\"\\\\ding{60}\"},\"✝\":{\"text\":\"\\\\ding{61}\"},\"✞\":{\"text\":\"\\\\ding{62}\"},\"✟\":{\"text\":\"\\\\ding{63}\"},\"✠\":{\"math\":\"\\\\maltese\",\"text\":\"\\\\ding{64}\"},\"✡\":{\"text\":\"\\\\ding{65}\"},\"✢\":{\"text\":\"\\\\ding{66}\"},\"✣\":{\"text\":\"\\\\ding{67}\"},\"✤\":{\"text\":\"\\\\ding{68}\"},\"✥\":{\"text\":\"\\\\ding{69}\"},\"✦\":{\"text\":\"\\\\ding{70}\"},\"✧\":{\"text\":\"\\\\ding{71}\"},\"✩\":{\"text\":\"\\\\ding{73}\"},\"✪\":{\"math\":\"\\\\circledstar\",\"text\":\"\\\\ding{74}\"},\"✫\":{\"text\":\"\\\\ding{75}\"},\"✬\":{\"text\":\"\\\\ding{76}\"},\"✭\":{\"text\":\"\\\\ding{77}\"},\"✮\":{\"text\":\"\\\\ding{78}\"},\"✯\":{\"text\":\"\\\\ding{79}\"},\"✰\":{\"text\":\"\\\\ding{80}\"},\"✱\":{\"text\":\"\\\\ding{81}\"},\"✲\":{\"text\":\"\\\\ding{82}\"},\"✳\":{\"text\":\"\\\\ding{83}\"},\"✴\":{\"text\":\"\\\\ding{84}\"},\"✵\":{\"text\":\"\\\\ding{85}\"},\"✶\":{\"math\":\"\\\\varstar\",\"text\":\"\\\\ding{86}\"},\"✷\":{\"text\":\"\\\\ding{87}\"},\"✸\":{\"text\":\"\\\\ding{88}\"},\"✹\":{\"text\":\"\\\\ding{89}\"},\"✺\":{\"text\":\"\\\\ding{90}\"},\"✻\":{\"text\":\"\\\\ding{91}\"},\"✼\":{\"text\":\"\\\\ding{92}\"},\"✽\":{\"math\":\"\\\\dingasterisk\",\"text\":\"\\\\ding{93}\"},\"✾\":{\"text\":\"\\\\ding{94}\"},\"✿\":{\"text\":\"\\\\ding{95}\"},\"❀\":{\"text\":\"\\\\ding{96}\"},\"❁\":{\"text\":\"\\\\ding{97}\"},\"❂\":{\"text\":\"\\\\ding{98}\"},\"❃\":{\"text\":\"\\\\ding{99}\"},\"❄\":{\"text\":\"\\\\ding{100}\"},\"❅\":{\"text\":\"\\\\ding{101}\"},\"❆\":{\"text\":\"\\\\ding{102}\"},\"❇\":{\"text\":\"\\\\ding{103}\"},\"❈\":{\"text\":\"\\\\ding{104}\"},\"❉\":{\"text\":\"\\\\ding{105}\"},\"❊\":{\"text\":\"\\\\ding{106}\"},\"❋\":{\"text\":\"\\\\ding{107}\"},\"❍\":{\"text\":\"\\\\ding{109}\"},\"❏\":{\"text\":\"\\\\ding{111}\"},\"❐\":{\"text\":\"\\\\ding{112}\"},\"❑\":{\"text\":\"\\\\ding{113}\"},\"❒\":{\"text\":\"\\\\ding{114}\"},\"❖\":{\"text\":\"\\\\ding{118}\"},\"❘\":{\"text\":\"\\\\ding{120}\"},\"❙\":{\"text\":\"\\\\ding{121}\"},\"❚\":{\"text\":\"\\\\ding{122}\"},\"❛\":{\"text\":\"\\\\ding{123}\"},\"❜\":{\"text\":\"\\\\ding{124}\"},\"❝\":{\"text\":\"\\\\ding{125}\"},\"❞\":{\"text\":\"\\\\ding{126}\"},\"❡\":{\"text\":\"\\\\ding{161}\"},\"❢\":{\"text\":\"\\\\ding{162}\"},\"❣\":{\"text\":\"\\\\ding{163}\"},\"❤\":{\"text\":\"\\\\ding{164}\"},\"❥\":{\"text\":\"\\\\ding{165}\"},\"❦\":{\"text\":\"\\\\ding{166}\"},\"❧\":{\"text\":\"\\\\ding{167}\"},\"❲\":{\"math\":\"\\\\lbrbrak\"},\"❳\":{\"math\":\"\\\\rbrbrak\"},\"❶\":{\"text\":\"\\\\ding{182}\"},\"❷\":{\"text\":\"\\\\ding{183}\"},\"❸\":{\"text\":\"\\\\ding{184}\"},\"❹\":{\"text\":\"\\\\ding{185}\"},\"❺\":{\"text\":\"\\\\ding{186}\"},\"❻\":{\"text\":\"\\\\ding{187}\"},\"❼\":{\"text\":\"\\\\ding{188}\"},\"❽\":{\"text\":\"\\\\ding{189}\"},\"❾\":{\"text\":\"\\\\ding{190}\"},\"❿\":{\"text\":\"\\\\ding{191}\"},\"➀\":{\"text\":\"\\\\ding{192}\"},\"➁\":{\"text\":\"\\\\ding{193}\"},\"➂\":{\"text\":\"\\\\ding{194}\"},\"➃\":{\"text\":\"\\\\ding{195}\"},\"➄\":{\"text\":\"\\\\ding{196}\"},\"➅\":{\"text\":\"\\\\ding{197}\"},\"➆\":{\"text\":\"\\\\ding{198}\"},\"➇\":{\"text\":\"\\\\ding{199}\"},\"➈\":{\"text\":\"\\\\ding{200}\"},\"➉\":{\"text\":\"\\\\ding{201}\"},\"➊\":{\"text\":\"\\\\ding{202}\"},\"➋\":{\"text\":\"\\\\ding{203}\"},\"➌\":{\"text\":\"\\\\ding{204}\"},\"➍\":{\"text\":\"\\\\ding{205}\"},\"➎\":{\"text\":\"\\\\ding{206}\"},\"➏\":{\"text\":\"\\\\ding{207}\"},\"➐\":{\"text\":\"\\\\ding{208}\"},\"➑\":{\"text\":\"\\\\ding{209}\"},\"➒\":{\"text\":\"\\\\ding{210}\"},\"➓\":{\"text\":\"\\\\ding{211}\"},\"➔\":{\"text\":\"\\\\ding{212}\"},\"➘\":{\"text\":\"\\\\ding{216}\"},\"➙\":{\"text\":\"\\\\ding{217}\"},\"➚\":{\"text\":\"\\\\ding{218}\"},\"➛\":{\"math\":\"\\\\draftingarrow\",\"text\":\"\\\\ding{219}\"},\"➜\":{\"text\":\"\\\\ding{220}\"},\"➝\":{\"text\":\"\\\\ding{221}\"},\"➞\":{\"text\":\"\\\\ding{222}\"},\"➟\":{\"text\":\"\\\\ding{223}\"},\"➠\":{\"text\":\"\\\\ding{224}\"},\"➡\":{\"text\":\"\\\\ding{225}\"},\"➢\":{\"math\":\"\\\\arrowbullet\",\"text\":\"\\\\ding{226}\"},\"➣\":{\"text\":\"\\\\ding{227}\"},\"➤\":{\"text\":\"\\\\ding{228}\"},\"➥\":{\"text\":\"\\\\ding{229}\"},\"➦\":{\"text\":\"\\\\ding{230}\"},\"➧\":{\"text\":\"\\\\ding{231}\"},\"➨\":{\"text\":\"\\\\ding{232}\"},\"➩\":{\"text\":\"\\\\ding{233}\"},\"➪\":{\"text\":\"\\\\ding{234}\"},\"➫\":{\"text\":\"\\\\ding{235}\"},\"➬\":{\"text\":\"\\\\ding{236}\"},\"➭\":{\"text\":\"\\\\ding{237}\"},\"➮\":{\"text\":\"\\\\ding{238}\"},\"➯\":{\"text\":\"\\\\ding{239}\"},\"➱\":{\"text\":\"\\\\ding{241}\"},\"➲\":{\"text\":\"\\\\ding{242}\"},\"➳\":{\"text\":\"\\\\ding{243}\"},\"➴\":{\"text\":\"\\\\ding{244}\"},\"➵\":{\"text\":\"\\\\ding{245}\"},\"➶\":{\"text\":\"\\\\ding{246}\"},\"➷\":{\"text\":\"\\\\ding{247}\"},\"➸\":{\"text\":\"\\\\ding{248}\"},\"➹\":{\"text\":\"\\\\ding{249}\"},\"➺\":{\"text\":\"\\\\ding{250}\"},\"➻\":{\"text\":\"\\\\ding{251}\"},\"➼\":{\"text\":\"\\\\ding{252}\"},\"➽\":{\"text\":\"\\\\ding{253}\"},\"➾\":{\"text\":\"\\\\ding{254}\"},\"⟀\":{\"math\":\"\\\\threedangle\"},\"⟁\":{\"math\":\"\\\\whiteinwhitetriangle\"},\"⟂\":{\"math\":\"\\\\perp\"},\"⟃\":{\"math\":\"\\\\subsetcirc\"},\"⟄\":{\"math\":\"\\\\supsetcirc\"},\"⟅\":{\"math\":\"\\\\Lbag\"},\"⟆\":{\"math\":\"\\\\Rbag\"},\"⟇\":{\"math\":\"\\\\veedot\"},\"⟈\":{\"math\":\"\\\\bsolhsub\"},\"⟉\":{\"math\":\"\\\\suphsol\"},\"⟌\":{\"math\":\"\\\\longdivision\"},\"⟐\":{\"math\":\"\\\\Diamonddot\"},\"⟑\":{\"math\":\"\\\\wedgedot\"},\"⟒\":{\"math\":\"\\\\upin\"},\"⟓\":{\"math\":\"\\\\pullback\"},\"⟔\":{\"math\":\"\\\\pushout\"},\"⟕\":{\"math\":\"\\\\leftouterjoin\"},\"⟖\":{\"math\":\"\\\\rightouterjoin\"},\"⟗\":{\"math\":\"\\\\fullouterjoin\"},\"⟘\":{\"math\":\"\\\\bigbot\"},\"⟙\":{\"math\":\"\\\\bigtop\"},\"⟚\":{\"math\":\"\\\\DashVDash\"},\"⟛\":{\"math\":\"\\\\dashVdash\"},\"⟜\":{\"math\":\"\\\\multimapinv\"},\"⟝\":{\"math\":\"\\\\vlongdash\"},\"⟞\":{\"math\":\"\\\\longdashv\"},\"⟟\":{\"math\":\"\\\\cirbot\"},\"⟠\":{\"math\":\"\\\\lozengeminus\"},\"⟡\":{\"math\":\"\\\\concavediamond\"},\"⟢\":{\"math\":\"\\\\concavediamondtickleft\"},\"⟣\":{\"math\":\"\\\\concavediamondtickright\"},\"⟤\":{\"math\":\"\\\\whitesquaretickleft\"},\"⟥\":{\"math\":\"\\\\whitesquaretickright\"},\"⟦\":{\"math\":\"\\\\llbracket\"},\"⟧\":{\"math\":\"\\\\rrbracket\"},\"⟨\":{\"math\":\"\\\\langle\"},\"⟩\":{\"math\":\"\\\\rangle\"},\"⟪\":{\"math\":\"\\\\lang\"},\"⟫\":{\"math\":\"\\\\rang\"},\"⟬\":{\"math\":\"\\\\Lbrbrak\"},\"⟭\":{\"math\":\"\\\\Rbrbrak\"},\"⟮\":{\"math\":\"\\\\lgroup\"},\"⟯\":{\"math\":\"\\\\rgroup\"},\"⟰\":{\"math\":\"\\\\UUparrow\"},\"⟱\":{\"math\":\"\\\\DDownarrow\"},\"⟲\":{\"math\":\"\\\\acwgapcirclearrow\"},\"⟳\":{\"math\":\"\\\\cwgapcirclearrow\"},\"⟴\":{\"math\":\"\\\\rightarrowonoplus\"},\"⟵\":{\"math\":\"\\\\longleftarrow\"},\"⟶\":{\"math\":\"\\\\longrightarrow\"},\"⟷\":{\"math\":\"\\\\longleftrightarrow\"},\"⟸\":{\"math\":\"\\\\Longleftarrow\"},\"⟹\":{\"math\":\"\\\\Longrightarrow\"},\"⟺\":{\"math\":\"\\\\Longleftrightarrow\"},\"⟻\":{\"math\":\"\\\\longmapsfrom\"},\"⟼\":{\"math\":\"\\\\longmapsto\"},\"⟽\":{\"math\":\"\\\\Longmapsfrom\"},\"⟾\":{\"math\":\"\\\\Longmapsto\"},\"⟿\":{\"math\":\"\\\\sim\\\\joinrel\\\\leadsto\"},\"⤀\":{\"math\":\"\\\\psur\"},\"⤁\":{\"math\":\"\\\\nVtwoheadrightarrow\"},\"⤂\":{\"math\":\"\\\\nvLeftarrow\"},\"⤃\":{\"math\":\"\\\\nvRightarrow\"},\"⤄\":{\"math\":\"\\\\nvLeftrightarrow\"},\"⤆\":{\"math\":\"\\\\Mapsfrom\"},\"⤇\":{\"math\":\"\\\\Mapsto\"},\"⤈\":{\"math\":\"\\\\downarrowbarred\"},\"⤉\":{\"math\":\"\\\\uparrowbarred\"},\"⤊\":{\"math\":\"\\\\Uuparrow\"},\"⤋\":{\"math\":\"\\\\Ddownarrow\"},\"⤌\":{\"math\":\"\\\\leftbkarrow\"},\"⤍\":{\"math\":\"\\\\rightbkarrow\"},\"⤎\":{\"math\":\"\\\\leftdbkarrow\"},\"⤏\":{\"math\":\"\\\\dbkarow\"},\"⤐\":{\"math\":\"\\\\drbkarow\"},\"⤑\":{\"math\":\"\\\\rightdotarrow\"},\"⤒\":{\"math\":\"\\\\UpArrowBar\"},\"⤓\":{\"math\":\"\\\\DownArrowBar\"},\"⤔\":{\"math\":\"\\\\pinj\"},\"⤕\":{\"math\":\"\\\\finj\"},\"⤖\":{\"math\":\"\\\\bij\"},\"⤗\":{\"math\":\"\\\\nvtwoheadrightarrowtail\"},\"⤘\":{\"math\":\"\\\\nVtwoheadrightarrowtail\"},\"⤙\":{\"math\":\"\\\\lefttail\"},\"⤚\":{\"math\":\"\\\\righttail\"},\"⤛\":{\"math\":\"\\\\leftdbltail\"},\"⤜\":{\"math\":\"\\\\rightdbltail\"},\"⤝\":{\"math\":\"\\\\diamondleftarrow\"},\"⤞\":{\"math\":\"\\\\rightarrowdiamond\"},\"⤟\":{\"math\":\"\\\\diamondleftarrowbar\"},\"⤠\":{\"math\":\"\\\\barrightarrowdiamond\"},\"⤡\":{\"math\":\"\\\\nwsearrow\"},\"⤢\":{\"math\":\"\\\\neswarrow\"},\"⤫\":{\"math\":\"\\\\rdiagovfdiag\"},\"⤬\":{\"math\":\"\\\\fdiagovrdiag\"},\"⤭\":{\"math\":\"\\\\seovnearrow\"},\"⤮\":{\"math\":\"\\\\neovsearrow\"},\"⤯\":{\"math\":\"\\\\fdiagovnearrow\"},\"⤰\":{\"math\":\"\\\\rdiagovsearrow\"},\"⤱\":{\"math\":\"\\\\neovnwarrow\"},\"⤲\":{\"math\":\"\\\\nwovnearrow\"},\"⤴\":{\"math\":\"\\\\uprightcurvearrow\"},\"⤵\":{\"math\":\"\\\\downrightcurvedarrow\"},\"⤸\":{\"math\":\"\\\\cwrightarcarrow\"},\"⤹\":{\"math\":\"\\\\acwleftarcarrow\"},\"⤺\":{\"math\":\"\\\\acwoverarcarrow\"},\"⤻\":{\"math\":\"\\\\acwunderarcarrow\"},\"⤼\":{\"math\":\"\\\\curvearrowrightminus\"},\"⤽\":{\"math\":\"\\\\curvearrowleftplus\"},\"⤾\":{\"math\":\"\\\\cwundercurvearrow\"},\"⤿\":{\"math\":\"\\\\ccwundercurvearrow\"},\"⥀\":{\"math\":\"\\\\Elolarr\"},\"⥁\":{\"math\":\"\\\\Elorarr\"},\"⥂\":{\"math\":\"\\\\ElzRlarr\"},\"⥃\":{\"math\":\"\\\\leftarrowshortrightarrow\"},\"⥄\":{\"math\":\"\\\\ElzrLarr\"},\"⥅\":{\"math\":\"\\\\rightarrowplus\"},\"⥆\":{\"math\":\"\\\\leftarrowplus\"},\"⥇\":{\"math\":\"\\\\Elzrarrx\"},\"⥈\":{\"math\":\"\\\\leftrightarrowcircle\"},\"⥉\":{\"math\":\"\\\\twoheaduparrowcircle\"},\"⥊\":{\"math\":\"\\\\leftrightharpoon\"},\"⥋\":{\"math\":\"\\\\rightleftharpoon\"},\"⥌\":{\"math\":\"\\\\updownharpoonrightleft\"},\"⥍\":{\"math\":\"\\\\updownharpoonleftright\"},\"⥎\":{\"math\":\"\\\\LeftRightVector\"},\"⥏\":{\"math\":\"\\\\RightUpDownVector\"},\"⥐\":{\"math\":\"\\\\DownLeftRightVector\"},\"⥑\":{\"math\":\"\\\\LeftUpDownVector\"},\"⥒\":{\"math\":\"\\\\LeftVectorBar\"},\"⥓\":{\"math\":\"\\\\RightVectorBar\"},\"⥔\":{\"math\":\"\\\\RightUpVectorBar\"},\"⥕\":{\"math\":\"\\\\RightDownVectorBar\"},\"⥖\":{\"math\":\"\\\\DownLeftVectorBar\"},\"⥗\":{\"math\":\"\\\\DownRightVectorBar\"},\"⥘\":{\"math\":\"\\\\LeftUpVectorBar\"},\"⥙\":{\"math\":\"\\\\LeftDownVectorBar\"},\"⥚\":{\"math\":\"\\\\LeftTeeVector\"},\"⥛\":{\"math\":\"\\\\RightTeeVector\"},\"⥜\":{\"math\":\"\\\\RightUpTeeVector\"},\"⥝\":{\"math\":\"\\\\RightDownTeeVector\"},\"⥞\":{\"math\":\"\\\\DownLeftTeeVector\"},\"⥟\":{\"math\":\"\\\\DownRightTeeVector\"},\"⥠\":{\"math\":\"\\\\LeftUpTeeVector\"},\"⥡\":{\"math\":\"\\\\LeftDownTeeVector\"},\"⥢\":{\"math\":\"\\\\leftleftharpoons\"},\"⥣\":{\"math\":\"\\\\upupharpoons\"},\"⥤\":{\"math\":\"\\\\rightrightharpoons\"},\"⥥\":{\"math\":\"\\\\downdownharpoons\"},\"⥦\":{\"math\":\"\\\\leftrightharpoonsup\"},\"⥧\":{\"math\":\"\\\\leftrightharpoonsdown\"},\"⥨\":{\"math\":\"\\\\rightleftharpoonsup\"},\"⥩\":{\"math\":\"\\\\rightleftharpoonsdown\"},\"⥪\":{\"math\":\"\\\\leftbarharpoon\"},\"⥫\":{\"math\":\"\\\\barleftharpoon\"},\"⥬\":{\"math\":\"\\\\rightbarharpoon\"},\"⥭\":{\"math\":\"\\\\barrightharpoon\"},\"⥮\":{\"math\":\"\\\\UpEquilibrium\"},\"⥯\":{\"math\":\"\\\\ReverseUpEquilibrium\"},\"⥰\":{\"math\":\"\\\\RoundImplies\"},\"⥱\":{\"math\":\"\\\\equalrightarrow\"},\"⥲\":{\"math\":\"\\\\similarrightarrow\"},\"⥳\":{\"math\":\"\\\\leftarrowsimilar\"},\"⥴\":{\"math\":\"\\\\rightarrowsimilar\"},\"⥵\":{\"math\":\"\\\\rightarrowapprox\"},\"⥶\":{\"math\":\"\\\\ltlarr\"},\"⥷\":{\"math\":\"\\\\leftarrowless\"},\"⥸\":{\"math\":\"\\\\gtrarr\"},\"⥹\":{\"math\":\"\\\\subrarr\"},\"⥺\":{\"math\":\"\\\\leftarrowsubset\"},\"⥻\":{\"math\":\"\\\\suplarr\"},\"⥾\":{\"math\":\"\\\\upfishtail\"},\"⥿\":{\"math\":\"\\\\downfishtail\"},\"⦀\":{\"math\":\"\\\\Elztfnc\"},\"⦁\":{\"math\":\"\\\\spot\"},\"⦂\":{\"math\":\"\\\\typecolon\"},\"⦃\":{\"math\":\"\\\\lBrace\"},\"⦄\":{\"math\":\"\\\\rBrace\"},\"⦆\":{\"math\":\"\\\\Elroang\"},\"⦇\":{\"math\":\"\\\\limg\"},\"⦈\":{\"math\":\"\\\\rimg\"},\"⦉\":{\"math\":\"\\\\lblot\"},\"⦊\":{\"math\":\"\\\\rblot\"},\"⦋\":{\"math\":\"\\\\lbrackubar\"},\"⦌\":{\"math\":\"\\\\rbrackubar\"},\"⦍\":{\"math\":\"\\\\lbrackultick\"},\"⦎\":{\"math\":\"\\\\rbracklrtick\"},\"⦏\":{\"math\":\"\\\\lbracklltick\"},\"⦐\":{\"math\":\"\\\\rbrackurtick\"},\"⦑\":{\"math\":\"\\\\langledot\"},\"⦒\":{\"math\":\"\\\\rangledot\"},\"⦓\":{\"math\":\"<\\\\kern-0.58em(\"},\"⦕\":{\"math\":\"\\\\Lparengtr\"},\"⦖\":{\"math\":\"\\\\Rparenless\"},\"⦗\":{\"math\":\"\\\\lblkbrbrak\"},\"⦘\":{\"math\":\"\\\\rblkbrbrak\"},\"⦙\":{\"math\":\"\\\\Elzddfnc\"},\"⦚\":{\"math\":\"\\\\vzigzag\"},\"⦛\":{\"math\":\"\\\\measuredangleleft\"},\"⦜\":{\"math\":\"\\\\Angle\"},\"⦝\":{\"math\":\"\\\\rightanglemdot\"},\"⦞\":{\"math\":\"\\\\angles\"},\"⦟\":{\"math\":\"\\\\angdnr\"},\"⦠\":{\"math\":\"\\\\Elzlpargt\"},\"⦡\":{\"math\":\"\\\\sphericalangleup\"},\"⦢\":{\"math\":\"\\\\turnangle\"},\"⦣\":{\"math\":\"\\\\revangle\"},\"⦤\":{\"math\":\"\\\\angleubar\"},\"⦥\":{\"math\":\"\\\\revangleubar\"},\"⦦\":{\"math\":\"\\\\wideangledown\"},\"⦧\":{\"math\":\"\\\\wideangleup\"},\"⦨\":{\"math\":\"\\\\measanglerutone\"},\"⦩\":{\"math\":\"\\\\measanglelutonw\"},\"⦪\":{\"math\":\"\\\\measanglerdtose\"},\"⦫\":{\"math\":\"\\\\measangleldtosw\"},\"⦬\":{\"math\":\"\\\\measangleurtone\"},\"⦭\":{\"math\":\"\\\\measangleultonw\"},\"⦮\":{\"math\":\"\\\\measangledrtose\"},\"⦯\":{\"math\":\"\\\\measangledltosw\"},\"⦰\":{\"math\":\"\\\\revemptyset\"},\"⦱\":{\"math\":\"\\\\emptysetobar\"},\"⦲\":{\"math\":\"\\\\emptysetocirc\"},\"⦳\":{\"math\":\"\\\\emptysetoarr\"},\"⦴\":{\"math\":\"\\\\emptysetoarrl\"},\"⦷\":{\"math\":\"\\\\circledparallel\"},\"⦸\":{\"math\":\"\\\\circledbslash\"},\"⦹\":{\"math\":\"\\\\operp\"},\"⦺\":{\"math\":\"\\\\obot\"},\"⦻\":{\"math\":\"\\\\olcross\"},\"⦼\":{\"math\":\"\\\\odotslashdot\"},\"⦽\":{\"math\":\"\\\\uparrowoncircle\"},\"⦾\":{\"math\":\"\\\\circledwhitebullet\"},\"⦿\":{\"math\":\"\\\\circledbullet\"},\"⧀\":{\"math\":\"\\\\circledless\"},\"⧁\":{\"math\":\"\\\\circledgtr\"},\"⧂\":{\"math\":\"\\\\cirscir\"},\"⧃\":{\"math\":\"\\\\cirE\"},\"⧄\":{\"math\":\"\\\\boxslash\"},\"⧅\":{\"math\":\"\\\\boxbslash\"},\"⧆\":{\"math\":\"\\\\boxast\"},\"⧇\":{\"math\":\"\\\\boxcircle\"},\"⧈\":{\"math\":\"\\\\boxbox\"},\"⧉\":{\"math\":\"\\\\boxonbox\"},\"⧊\":{\"math\":\"\\\\ElzLap\"},\"⧋\":{\"math\":\"\\\\Elzdefas\"},\"⧌\":{\"math\":\"\\\\triangles\"},\"⧍\":{\"math\":\"\\\\triangleserifs\"},\"⧎\":{\"math\":\"\\\\rtriltri\"},\"⧏\":{\"math\":\"\\\\LeftTriangleBar\"},\"⧏̸\":{\"math\":\"\\\\NotLeftTriangleBar\"},\"⧐\":{\"math\":\"\\\\RightTriangleBar\"},\"⧐̸\":{\"math\":\"\\\\NotRightTriangleBar\"},\"⧑\":{\"math\":\"\\\\lfbowtie\"},\"⧒\":{\"math\":\"\\\\rfbowtie\"},\"⧓\":{\"math\":\"\\\\fbowtie\"},\"⧔\":{\"math\":\"\\\\lftimes\"},\"⧕\":{\"math\":\"\\\\rftimes\"},\"⧖\":{\"math\":\"\\\\hourglass\"},\"⧗\":{\"math\":\"\\\\blackhourglass\"},\"⧘\":{\"math\":\"\\\\lvzigzag\"},\"⧙\":{\"math\":\"\\\\rvzigzag\"},\"⧚\":{\"math\":\"\\\\Lvzigzag\"},\"⧛\":{\"math\":\"\\\\Rvzigzag\"},\"⧝\":{\"math\":\"\\\\tieinfty\"},\"⧞\":{\"math\":\"\\\\nvinfty\"},\"⧟\":{\"math\":\"\\\\multimapboth\"},\"⧠\":{\"math\":\"\\\\laplac\"},\"⧡\":{\"math\":\"\\\\lrtriangleeq\"},\"⧢\":{\"math\":\"\\\\shuffle\"},\"⧣\":{\"math\":\"\\\\eparsl\"},\"⧤\":{\"math\":\"\\\\smeparsl\"},\"⧥\":{\"math\":\"\\\\eqvparsl\"},\"⧦\":{\"math\":\"\\\\gleichstark\"},\"⧧\":{\"math\":\"\\\\thermod\"},\"⧨\":{\"math\":\"\\\\downtriangleleftblack\"},\"⧩\":{\"math\":\"\\\\downtrianglerightblack\"},\"⧪\":{\"math\":\"\\\\blackdiamonddownarrow\"},\"⧫\":{\"math\":\"\\\\blacklozenge\"},\"⧬\":{\"math\":\"\\\\circledownarrow\"},\"⧭\":{\"math\":\"\\\\blackcircledownarrow\"},\"⧮\":{\"math\":\"\\\\errbarsquare\"},\"⧯\":{\"math\":\"\\\\errbarblacksquare\"},\"⧰\":{\"math\":\"\\\\errbardiamond\"},\"⧱\":{\"math\":\"\\\\errbarblackdiamond\"},\"⧲\":{\"math\":\"\\\\errbarcircle\"},\"⧳\":{\"math\":\"\\\\errbarblackcircle\"},\"⧴\":{\"math\":\"\\\\RuleDelayed\"},\"⧵\":{\"math\":\"\\\\setminus\"},\"⧶\":{\"math\":\"\\\\dsol\"},\"⧷\":{\"math\":\"\\\\rsolbar\"},\"⧸\":{\"math\":\"\\\\xsol\"},\"⧹\":{\"math\":\"\\\\zhide\"},\"⧺\":{\"math\":\"\\\\doubleplus\"},\"⧻\":{\"math\":\"\\\\tripleplus\"},\"⧼\":{\"math\":\"\\\\lcurvyangle\"},\"⧽\":{\"math\":\"\\\\rcurvyangle\"},\"⧾\":{\"math\":\"\\\\tplus\"},\"⧿\":{\"math\":\"\\\\tminus\"},\"⨀\":{\"math\":\"\\\\bigodot\"},\"⨁\":{\"math\":\"\\\\bigoplus\"},\"⨂\":{\"math\":\"\\\\bigotimes\"},\"⨃\":{\"math\":\"\\\\bigcupdot\"},\"⨄\":{\"math\":\"\\\\Elxuplus\"},\"⨅\":{\"math\":\"\\\\ElzThr\"},\"⨆\":{\"math\":\"\\\\Elxsqcup\"},\"⨇\":{\"math\":\"\\\\ElzInf\"},\"⨈\":{\"math\":\"\\\\ElzSup\"},\"⨉\":{\"math\":\"\\\\varprod\"},\"⨊\":{\"math\":\"\\\\modtwosum\"},\"⨋\":{\"math\":\"\\\\sumint\"},\"⨌\":{\"math\":\"\\\\iiiint\"},\"⨍\":{\"math\":\"\\\\ElzCint\"},\"⨎\":{\"math\":\"\\\\intBar\"},\"⨏\":{\"math\":\"\\\\clockoint\"},\"⨑\":{\"math\":\"\\\\awint\"},\"⨒\":{\"math\":\"\\\\rppolint\"},\"⨓\":{\"math\":\"\\\\scpolint\"},\"⨔\":{\"math\":\"\\\\npolint\"},\"⨕\":{\"math\":\"\\\\pointint\"},\"⨖\":{\"math\":\"\\\\sqrint\"},\"⨗\":{\"math\":\"\\\\intlarhk\"},\"⨘\":{\"math\":\"\\\\intx\"},\"⨙\":{\"math\":\"\\\\intcap\"},\"⨚\":{\"math\":\"\\\\intcup\"},\"⨛\":{\"math\":\"\\\\upint\"},\"⨜\":{\"math\":\"\\\\lowint\"},\"⨝\":{\"math\":\"\\\\Join\"},\"⨞\":{\"math\":\"\\\\bigtriangleleft\"},\"⨟\":{\"math\":\"\\\\zcmp\"},\"⨠\":{\"math\":\"\\\\zpipe\"},\"⨡\":{\"math\":\"\\\\zproject\"},\"⨢\":{\"math\":\"\\\\ringplus\"},\"⨣\":{\"math\":\"\\\\plushat\"},\"⨤\":{\"math\":\"\\\\simplus\"},\"⨦\":{\"math\":\"\\\\plussim\"},\"⨧\":{\"math\":\"\\\\plussubtwo\"},\"⨨\":{\"math\":\"\\\\plustrif\"},\"⨩\":{\"math\":\"\\\\commaminus\"},\"⨫\":{\"math\":\"\\\\minusfdots\"},\"⨬\":{\"math\":\"\\\\minusrdots\"},\"⨯\":{\"math\":\"\\\\ElzTimes\"},\"⨰\":{\"math\":\"\\\\dottimes\"},\"⨱\":{\"math\":\"\\\\timesbar\"},\"⨲\":{\"math\":\"\\\\btimes\"},\"⨳\":{\"math\":\"\\\\smashtimes\"},\"⨶\":{\"math\":\"\\\\otimeshat\"},\"⨷\":{\"math\":\"\\\\Otimes\"},\"⨸\":{\"math\":\"\\\\odiv\"},\"⨹\":{\"math\":\"\\\\triangleplus\"},\"⨺\":{\"math\":\"\\\\triangleminus\"},\"⨻\":{\"math\":\"\\\\triangletimes\"},\"⨽\":{\"math\":\"\\\\intprodr\"},\"⨾\":{\"math\":\"\\\\fcmp\"},\"⨿\":{\"math\":\"\\\\amalg\"},\"⩀\":{\"math\":\"\\\\capdot\"},\"⩁\":{\"math\":\"\\\\uminus\"},\"⩂\":{\"math\":\"\\\\barcup\"},\"⩃\":{\"math\":\"\\\\barcap\"},\"⩄\":{\"math\":\"\\\\capwedge\"},\"⩅\":{\"math\":\"\\\\cupvee\"},\"⩆\":{\"math\":\"\\\\cupovercap\"},\"⩇\":{\"math\":\"\\\\capovercup\"},\"⩈\":{\"math\":\"\\\\cupbarcap\"},\"⩉\":{\"math\":\"\\\\capbarcup\"},\"⩊\":{\"math\":\"\\\\twocups\"},\"⩋\":{\"math\":\"\\\\twocaps\"},\"⩌\":{\"math\":\"\\\\closedvarcup\"},\"⩍\":{\"math\":\"\\\\closedvarcap\"},\"⩎\":{\"math\":\"\\\\Sqcap\"},\"⩏\":{\"math\":\"\\\\Sqcup\"},\"⩐\":{\"math\":\"\\\\closedvarcupsmashprod\"},\"⩑\":{\"math\":\"\\\\wedgeodot\"},\"⩒\":{\"math\":\"\\\\veeodot\"},\"⩓\":{\"math\":\"\\\\ElzAnd\"},\"⩔\":{\"math\":\"\\\\ElzOr\"},\"⩖\":{\"math\":\"\\\\ElOr\"},\"⩗\":{\"math\":\"\\\\bigslopedvee\"},\"⩘\":{\"math\":\"\\\\bigslopedwedge\"},\"⩙\":{\"math\":\"\\\\veeonwedge\"},\"⩚\":{\"math\":\"\\\\wedgemidvert\"},\"⩛\":{\"math\":\"\\\\veemidvert\"},\"⩜\":{\"math\":\"\\\\midbarwedge\"},\"⩝\":{\"math\":\"\\\\midbarvee\"},\"⩞\":{\"math\":\"\\\\perspcorrespond\"},\"⩟\":{\"math\":\"\\\\Elzminhat\"},\"⩠\":{\"math\":\"\\\\wedgedoublebar\"},\"⩡\":{\"math\":\"\\\\varveebar\"},\"⩢\":{\"math\":\"\\\\doublebarvee\"},\"⩤\":{\"math\":\"\\\\dsub\"},\"⩥\":{\"math\":\"\\\\rsub\"},\"⩦\":{\"math\":\"\\\\eqdot\"},\"⩧\":{\"math\":\"\\\\dotequiv\"},\"⩨\":{\"math\":\"\\\\equivVert\"},\"⩩\":{\"math\":\"\\\\equivVvert\"},\"⩪\":{\"math\":\"\\\\dotsim\"},\"⩫\":{\"math\":\"\\\\simrdots\"},\"⩬\":{\"math\":\"\\\\simminussim\"},\"⩭\":{\"math\":\"\\\\congdot\"},\"⩮\":{\"math\":\"\\\\stackrel{*}{=}\"},\"⩯\":{\"math\":\"\\\\hatapprox\"},\"⩰\":{\"math\":\"\\\\approxeqq\"},\"⩱\":{\"math\":\"\\\\eqqplus\"},\"⩲\":{\"math\":\"\\\\pluseqq\"},\"⩳\":{\"math\":\"\\\\eqqsim\"},\"⩴\":{\"math\":\"\\\\Coloneqq\"},\"⩵\":{\"math\":\"\\\\Equal\"},\"⩶\":{\"math\":\"\\\\Same\"},\"⩷\":{\"math\":\"\\\\ddotseq\"},\"⩸\":{\"math\":\"\\\\equivDD\"},\"⩹\":{\"math\":\"\\\\ltcir\"},\"⩺\":{\"math\":\"\\\\gtcir\"},\"⩻\":{\"math\":\"\\\\ltquest\"},\"⩼\":{\"math\":\"\\\\gtquest\"},\"⩽\":{\"math\":\"\\\\leqslant\",\"mathpackages\":[\"amssymb\"]},\"⩽̸\":{\"math\":\"\\\\nleqslant\",\"mathpackages\":[\"amssymb\"]},\"⩾\":{\"math\":\"\\\\geqslant\",\"mathpackages\":[\"amssymb\"]},\"⩾̸\":{\"math\":\"\\\\ngeqslant\",\"mathpackages\":[\"amssymb\"]},\"⩿\":{\"math\":\"\\\\lesdot\"},\"⪀\":{\"math\":\"\\\\gesdot\"},\"⪁\":{\"math\":\"\\\\lesdoto\"},\"⪂\":{\"math\":\"\\\\gesdoto\"},\"⪃\":{\"math\":\"\\\\lesdotor\"},\"⪄\":{\"math\":\"\\\\gesdotol\"},\"⪅\":{\"math\":\"\\\\lessapprox\"},\"⪆\":{\"math\":\"\\\\gtrapprox\"},\"⪇\":{\"math\":\"\\\\lneq\"},\"⪈\":{\"math\":\"\\\\gneq\"},\"⪉\":{\"math\":\"\\\\lnapprox\"},\"⪊\":{\"math\":\"\\\\gnapprox\"},\"⪋\":{\"math\":\"\\\\lesseqqgtr\"},\"⪌\":{\"math\":\"\\\\gtreqqless\"},\"⪍\":{\"math\":\"\\\\lsime\"},\"⪎\":{\"math\":\"\\\\gsime\"},\"⪏\":{\"math\":\"\\\\lsimg\"},\"⪐\":{\"math\":\"\\\\gsiml\"},\"⪑\":{\"math\":\"\\\\lgE\"},\"⪒\":{\"math\":\"\\\\glE\"},\"⪓\":{\"math\":\"\\\\lesges\"},\"⪔\":{\"math\":\"\\\\gesles\"},\"⪕\":{\"math\":\"\\\\eqslantless\"},\"⪖\":{\"math\":\"\\\\eqslantgtr\"},\"⪗\":{\"math\":\"\\\\elsdot\"},\"⪘\":{\"math\":\"\\\\egsdot\"},\"⪙\":{\"math\":\"\\\\eqqless\"},\"⪚\":{\"math\":\"\\\\eqqgtr\"},\"⪛\":{\"math\":\"\\\\eqqslantless\"},\"⪜\":{\"math\":\"\\\\eqqslantgtr\"},\"⪝\":{\"math\":\"\\\\Pisymbol{ppi020}{117}\"},\"⪞\":{\"math\":\"\\\\Pisymbol{ppi020}{105}\"},\"⪟\":{\"math\":\"\\\\simlE\"},\"⪠\":{\"math\":\"\\\\simgE\"},\"⪡\":{\"math\":\"\\\\NestedLessLess\"},\"⪡̸\":{\"math\":\"\\\\NotNestedLessLess\"},\"⪢\":{\"math\":\"\\\\NestedGreaterGreater\"},\"⪢̸\":{\"math\":\"\\\\NotNestedGreaterGreater\"},\"⪣\":{\"math\":\"\\\\partialmeetcontraction\"},\"⪤\":{\"math\":\"\\\\glj\"},\"⪥\":{\"math\":\"\\\\gla\"},\"⪦\":{\"math\":\"\\\\leftslice\"},\"⪧\":{\"math\":\"\\\\rightslice\"},\"⪨\":{\"math\":\"\\\\lescc\"},\"⪩\":{\"math\":\"\\\\gescc\"},\"⪪\":{\"math\":\"\\\\smt\"},\"⪫\":{\"math\":\"\\\\lat\"},\"⪬\":{\"math\":\"\\\\smte\"},\"⪭\":{\"math\":\"\\\\late\"},\"⪮\":{\"math\":\"\\\\bumpeqq\"},\"⪯\":{\"math\":\"\\\\preceq\"},\"⪯̸\":{\"math\":\"\\\\not\\\\preceq\"},\"⪰\":{\"math\":\"\\\\succeq\"},\"⪰̸\":{\"math\":\"\\\\not\\\\succeq\"},\"⪱\":{\"math\":\"\\\\precneq\"},\"⪲\":{\"math\":\"\\\\succneq\"},\"⪳\":{\"math\":\"\\\\preceqq\"},\"⪴\":{\"math\":\"\\\\succeqq\"},\"⪵\":{\"math\":\"\\\\precneqq\"},\"⪶\":{\"math\":\"\\\\succneqq\"},\"⪷\":{\"math\":\"\\\\precapprox\"},\"⪸\":{\"math\":\"\\\\succapprox\"},\"⪹\":{\"math\":\"\\\\precnapprox\"},\"⪺\":{\"math\":\"\\\\succnapprox\"},\"⪻\":{\"math\":\"\\\\llcurly\"},\"⪼\":{\"math\":\"\\\\ggcurly\"},\"⪽\":{\"math\":\"\\\\subsetdot\"},\"⪾\":{\"math\":\"\\\\supsetdot\"},\"⪿\":{\"math\":\"\\\\subsetplus\"},\"⫀\":{\"math\":\"\\\\supsetplus\"},\"⫁\":{\"math\":\"\\\\submult\"},\"⫂\":{\"math\":\"\\\\supmult\"},\"⫃\":{\"math\":\"\\\\subedot\"},\"⫄\":{\"math\":\"\\\\supedot\"},\"⫅\":{\"math\":\"\\\\subseteqq\"},\"⫅̸\":{\"math\":\"\\\\nsubseteqq\"},\"⫆\":{\"math\":\"\\\\supseteqq\"},\"⫆̸\":{\"math\":\"\\\\nsupseteqq\"},\"⫇\":{\"math\":\"\\\\subsim\"},\"⫈\":{\"math\":\"\\\\supsim\"},\"⫉\":{\"math\":\"\\\\subsetapprox\"},\"⫊\":{\"math\":\"\\\\supsetapprox\"},\"⫋\":{\"math\":\"\\\\subsetneqq\"},\"⫌\":{\"math\":\"\\\\supsetneqq\"},\"⫍\":{\"math\":\"\\\\lsqhook\"},\"⫎\":{\"math\":\"\\\\rsqhook\"},\"⫏\":{\"math\":\"\\\\csub\"},\"⫐\":{\"math\":\"\\\\csup\"},\"⫑\":{\"math\":\"\\\\csube\"},\"⫒\":{\"math\":\"\\\\csupe\"},\"⫓\":{\"math\":\"\\\\subsup\"},\"⫔\":{\"math\":\"\\\\supsub\"},\"⫕\":{\"math\":\"\\\\subsub\"},\"⫖\":{\"math\":\"\\\\supsup\"},\"⫗\":{\"math\":\"\\\\suphsub\"},\"⫘\":{\"math\":\"\\\\supdsub\"},\"⫙\":{\"math\":\"\\\\forkv\"},\"⫚\":{\"math\":\"\\\\topfork\"},\"⫛\":{\"math\":\"\\\\mlcp\"},\"⫝̸\":{\"math\":\"\\\\forks\"},\"⫝\":{\"math\":\"\\\\forksnot\"},\"⫝̸\":{\"math\":\"\\\\forks\"},\"⫞\":{\"math\":\"\\\\shortlefttack\"},\"⫟\":{\"math\":\"\\\\shortdowntack\"},\"⫠\":{\"math\":\"\\\\shortuptack\"},\"⫡\":{\"math\":\"\\\\perps\"},\"⫢\":{\"math\":\"\\\\vDdash\"},\"⫣\":{\"math\":\"\\\\dashV\"},\"⫤\":{\"math\":\"\\\\Dashv\"},\"⫥\":{\"math\":\"\\\\DashV\"},\"⫦\":{\"math\":\"\\\\varVdash\"},\"⫧\":{\"math\":\"\\\\Barv\"},\"⫨\":{\"math\":\"\\\\vBar\"},\"⫩\":{\"math\":\"\\\\vBarv\"},\"⫪\":{\"math\":\"\\\\Top\"},\"⫬\":{\"math\":\"\\\\Not\"},\"⫭\":{\"math\":\"\\\\bNot\"},\"⫮\":{\"math\":\"\\\\revnmid\"},\"⫯\":{\"math\":\"\\\\cirmid\"},\"⫰\":{\"math\":\"\\\\midcir\"},\"⫱\":{\"math\":\"\\\\topcir\"},\"⫲\":{\"math\":\"\\\\nhpar\"},\"⫳\":{\"math\":\"\\\\parsim\"},\"⫴\":{\"math\":\"\\\\interleave\"},\"⫵\":{\"math\":\"\\\\nhVvert\"},\"⫶\":{\"math\":\"\\\\Elztdcol\"},\"⫷\":{\"math\":\"\\\\lllnest\"},\"⫸\":{\"math\":\"\\\\gggnest\"},\"⫹\":{\"math\":\"\\\\leqqslant\"},\"⫺\":{\"math\":\"\\\\geqqslant\"},\"⫻\":{\"math\":\"\\\\trslash\"},\"⫼\":{\"math\":\"\\\\biginterleave\"},\"⫽\":{\"math\":\"{{/}\\\\!\\\\!{/}}\"},\"⫽⃥\":{\"math\":\"{\\\\rlap{\\\\textbackslash}{{/}\\\\!\\\\!{/}}}\"},\"⫾\":{\"math\":\"\\\\talloblong\"},\"⫿\":{\"math\":\"\\\\bigtalloblong\"},\"⬒\":{\"math\":\"\\\\squaretopblack\"},\"⬓\":{\"math\":\"\\\\squarebotblack\"},\"⬔\":{\"math\":\"\\\\squareurblack\"},\"⬕\":{\"math\":\"\\\\squarellblack\"},\"⬖\":{\"math\":\"\\\\diamondleftblack\"},\"⬗\":{\"math\":\"\\\\diamondrightblack\"},\"⬘\":{\"math\":\"\\\\diamondtopblack\"},\"⬙\":{\"math\":\"\\\\diamondbotblack\"},\"⬚\":{\"math\":\"\\\\dottedsquare\"},\"⬛\":{\"math\":\"\\\\blacksquare\"},\"⬜\":{\"math\":\"\\\\square\"},\"⬝\":{\"math\":\"\\\\vysmblksquare\"},\"⬞\":{\"math\":\"\\\\vysmwhtsquare\"},\"⬟\":{\"math\":\"\\\\pentagonblack\"},\"⬠\":{\"math\":\"\\\\pentagon\"},\"⬡\":{\"math\":\"\\\\varhexagon\"},\"⬢\":{\"math\":\"\\\\varhexagonblack\"},\"⬣\":{\"math\":\"\\\\hexagonblack\"},\"⬤\":{\"math\":\"\\\\lgblkcircle\"},\"⬥\":{\"math\":\"\\\\mdblkdiamond\"},\"⬦\":{\"math\":\"\\\\mdwhtdiamond\"},\"⬧\":{\"math\":\"\\\\mdblklozenge\"},\"⬨\":{\"math\":\"\\\\mdwhtlozenge\"},\"⬩\":{\"math\":\"\\\\smblkdiamond\"},\"⬪\":{\"math\":\"\\\\smblklozenge\"},\"⬫\":{\"math\":\"\\\\smwhtlozenge\"},\"⬬\":{\"math\":\"\\\\blkhorzoval\"},\"⬭\":{\"math\":\"\\\\whthorzoval\"},\"⬮\":{\"math\":\"\\\\blkvertoval\"},\"⬯\":{\"math\":\"\\\\whtvertoval\"},\"⬰\":{\"math\":\"\\\\circleonleftarrow\"},\"⬱\":{\"math\":\"\\\\leftthreearrows\"},\"⬲\":{\"math\":\"\\\\leftarrowonoplus\"},\"⬳\":{\"math\":\"\\\\longleftsquigarrow\"},\"⬴\":{\"math\":\"\\\\nvtwoheadleftarrow\"},\"⬵\":{\"math\":\"\\\\nVtwoheadleftarrow\"},\"⬶\":{\"math\":\"\\\\twoheadmapsfrom\"},\"⬷\":{\"math\":\"\\\\twoheadleftdbkarrow\"},\"⬸\":{\"math\":\"\\\\leftdotarrow\"},\"⬹\":{\"math\":\"\\\\nvleftarrowtail\"},\"⬺\":{\"math\":\"\\\\nVleftarrowtail\"},\"⬻\":{\"math\":\"\\\\twoheadleftarrowtail\"},\"⬼\":{\"math\":\"\\\\nvtwoheadleftarrowtail\"},\"⬽\":{\"math\":\"\\\\nVtwoheadleftarrowtail\"},\"⬾\":{\"math\":\"\\\\leftarrowx\"},\"⬿\":{\"math\":\"\\\\leftcurvedarrow\"},\"⭀\":{\"math\":\"\\\\equalleftarrow\"},\"⭁\":{\"math\":\"\\\\bsimilarleftarrow\"},\"⭂\":{\"math\":\"\\\\leftarrowbackapprox\"},\"⭃\":{\"math\":\"\\\\rightarrowgtr\"},\"⭄\":{\"math\":\"\\\\rightarrowsupset\"},\"⭅\":{\"math\":\"\\\\LLeftarrow\"},\"⭆\":{\"math\":\"\\\\RRightarrow\"},\"⭇\":{\"math\":\"\\\\bsimilarrightarrow\"},\"⭈\":{\"math\":\"\\\\rightarrowbackapprox\"},\"⭉\":{\"math\":\"\\\\similarleftarrow\"},\"⭊\":{\"math\":\"\\\\leftarrowapprox\"},\"⭋\":{\"math\":\"\\\\leftarrowbsimilar\"},\"⭌\":{\"math\":\"\\\\rightarrowbsimilar\"},\"⭐\":{\"math\":\"\\\\medwhitestar\"},\"⭑\":{\"math\":\"\\\\medblackstar\"},\"⭒\":{\"math\":\"\\\\smwhitestar\"},\"⭓\":{\"math\":\"\\\\rightpentagonblack\"},\"⭔\":{\"math\":\"\\\\rightpentagon\"},\"〈\":{\"math\":\"\\\\langle\"},\"〉\":{\"math\":\"\\\\rangle\"},\"〒\":{\"math\":\"\\\\postalmark\"},\"〔\":{\"math\":\"\\\\lbrbrak\"},\"〕\":{\"math\":\"\\\\rbrbrak\"},\"〚\":{\"math\":\"\\\\openbracketleft\"},\"〛\":{\"math\":\"\\\\openbracketright\"},\"〰\":{\"math\":\"\\\\hzigzag\"},\"ﬀ\":{\"text\":\"ff\"},\"ﬁ\":{\"text\":\"fi\"},\"ﬂ\":{\"text\":\"fl\"},\"ﬃ\":{\"text\":\"ffi\"},\"ﬄ\":{\"text\":\"ffl\"},\"ﬅ\":{\"text\":\"st\"},\"ﬆ\":{\"text\":\"st\"},\"�\":{\"text\":\"{\\\\dbend}\"},\"𝐀\":{\"math\":\"\\\\mathbf{A}\"},\"𝐁\":{\"math\":\"\\\\mathbf{B}\"},\"𝐂\":{\"math\":\"\\\\mathbf{C}\"},\"𝐃\":{\"math\":\"\\\\mathbf{D}\"},\"𝐄\":{\"math\":\"\\\\mathbf{E}\"},\"𝐅\":{\"math\":\"\\\\mathbf{F}\"},\"𝐆\":{\"math\":\"\\\\mathbf{G}\"},\"𝐇\":{\"math\":\"\\\\mathbf{H}\"},\"𝐈\":{\"math\":\"\\\\mathbf{I}\"},\"𝐉\":{\"math\":\"\\\\mathbf{J}\"},\"𝐊\":{\"math\":\"\\\\mathbf{K}\"},\"𝐋\":{\"math\":\"\\\\mathbf{L}\"},\"𝐌\":{\"math\":\"\\\\mathbf{M}\"},\"𝐍\":{\"math\":\"\\\\mathbf{N}\"},\"𝐎\":{\"math\":\"\\\\mathbf{O}\"},\"𝐏\":{\"math\":\"\\\\mathbf{P}\"},\"𝐐\":{\"math\":\"\\\\mathbf{Q}\"},\"𝐑\":{\"math\":\"\\\\mathbf{R}\"},\"𝐒\":{\"math\":\"\\\\mathbf{S}\"},\"𝐓\":{\"math\":\"\\\\mathbf{T}\"},\"𝐔\":{\"math\":\"\\\\mathbf{U}\"},\"𝐕\":{\"math\":\"\\\\mathbf{V}\"},\"𝐖\":{\"math\":\"\\\\mathbf{W}\"},\"𝐗\":{\"math\":\"\\\\mathbf{X}\"},\"𝐘\":{\"math\":\"\\\\mathbf{Y}\"},\"𝐙\":{\"math\":\"\\\\mathbf{Z}\"},\"𝐚\":{\"math\":\"\\\\mathbf{a}\"},\"𝐛\":{\"math\":\"\\\\mathbf{b}\"},\"𝐜\":{\"math\":\"\\\\mathbf{c}\"},\"𝐝\":{\"math\":\"\\\\mathbf{d}\"},\"𝐞\":{\"math\":\"\\\\mathbf{e}\"},\"𝐟\":{\"math\":\"\\\\mathbf{f}\"},\"𝐠\":{\"math\":\"\\\\mathbf{g}\"},\"𝐡\":{\"math\":\"\\\\mathbf{h}\"},\"𝐢\":{\"math\":\"\\\\mathbf{i}\"},\"𝐣\":{\"math\":\"\\\\mathbf{j}\"},\"𝐤\":{\"math\":\"\\\\mathbf{k}\"},\"𝐥\":{\"math\":\"\\\\mathbf{l}\"},\"𝐦\":{\"math\":\"\\\\mathbf{m}\"},\"𝐧\":{\"math\":\"\\\\mathbf{n}\"},\"𝐨\":{\"math\":\"\\\\mathbf{o}\"},\"𝐩\":{\"math\":\"\\\\mathbf{p}\"},\"𝐪\":{\"math\":\"\\\\mathbf{q}\"},\"𝐫\":{\"math\":\"\\\\mathbf{r}\"},\"𝐬\":{\"math\":\"\\\\mathbf{s}\"},\"𝐭\":{\"math\":\"\\\\mathbf{t}\"},\"𝐮\":{\"math\":\"\\\\mathbf{u}\"},\"𝐯\":{\"math\":\"\\\\mathbf{v}\"},\"𝐰\":{\"math\":\"\\\\mathbf{w}\"},\"𝐱\":{\"math\":\"\\\\mathbf{x}\"},\"𝐲\":{\"math\":\"\\\\mathbf{y}\"},\"𝐳\":{\"math\":\"\\\\mathbf{z}\"},\"𝐴\":{\"math\":\"\\\\mathsl{A}\"},\"𝐵\":{\"math\":\"\\\\mathsl{B}\"},\"𝐶\":{\"math\":\"\\\\mathsl{C}\"},\"𝐷\":{\"math\":\"\\\\mathsl{D}\"},\"𝐸\":{\"math\":\"\\\\mathsl{E}\"},\"𝐹\":{\"math\":\"\\\\mathsl{F}\"},\"𝐺\":{\"math\":\"\\\\mathsl{G}\"},\"𝐻\":{\"math\":\"\\\\mathsl{H}\"},\"𝐼\":{\"math\":\"\\\\mathsl{I}\"},\"𝐽\":{\"math\":\"\\\\mathsl{J}\"},\"𝐾\":{\"math\":\"\\\\mathsl{K}\"},\"𝐿\":{\"math\":\"\\\\mathsl{L}\"},\"𝑀\":{\"math\":\"\\\\mathsl{M}\"},\"𝑁\":{\"math\":\"\\\\mathsl{N}\"},\"𝑂\":{\"math\":\"\\\\mathsl{O}\"},\"𝑃\":{\"math\":\"\\\\mathsl{P}\"},\"𝑄\":{\"math\":\"\\\\mathsl{Q}\"},\"𝑅\":{\"math\":\"\\\\mathsl{R}\"},\"𝑆\":{\"math\":\"\\\\mathsl{S}\"},\"𝑇\":{\"math\":\"\\\\mathsl{T}\"},\"𝑈\":{\"math\":\"\\\\mathsl{U}\"},\"𝑉\":{\"math\":\"\\\\mathsl{V}\"},\"𝑊\":{\"math\":\"\\\\mathsl{W}\"},\"𝑋\":{\"math\":\"\\\\mathsl{X}\"},\"𝑌\":{\"math\":\"\\\\mathsl{Y}\"},\"𝑍\":{\"math\":\"\\\\mathsl{Z}\"},\"𝑎\":{\"math\":\"\\\\mathsl{a}\"},\"𝑏\":{\"math\":\"\\\\mathsl{b}\"},\"𝑐\":{\"math\":\"\\\\mathsl{c}\"},\"𝑑\":{\"math\":\"\\\\mathsl{d}\"},\"𝑒\":{\"math\":\"\\\\mathsl{e}\"},\"𝑓\":{\"math\":\"\\\\mathsl{f}\"},\"𝑔\":{\"math\":\"\\\\mathsl{g}\"},\"𝑖\":{\"math\":\"\\\\mathsl{i}\"},\"𝑗\":{\"math\":\"\\\\mathsl{j}\"},\"𝑘\":{\"math\":\"\\\\mathsl{k}\"},\"𝑙\":{\"math\":\"\\\\mathsl{l}\"},\"𝑚\":{\"math\":\"\\\\mathsl{m}\"},\"𝑛\":{\"math\":\"\\\\mathsl{n}\"},\"𝑜\":{\"math\":\"\\\\mathsl{o}\"},\"𝑝\":{\"math\":\"\\\\mathsl{p}\"},\"𝑞\":{\"math\":\"\\\\mathsl{q}\"},\"𝑟\":{\"math\":\"\\\\mathsl{r}\"},\"𝑠\":{\"math\":\"\\\\mathsl{s}\"},\"𝑡\":{\"math\":\"\\\\mathsl{t}\"},\"𝑢\":{\"math\":\"\\\\mathsl{u}\"},\"𝑣\":{\"math\":\"\\\\mathsl{v}\"},\"𝑤\":{\"math\":\"\\\\mathsl{w}\"},\"𝑥\":{\"math\":\"\\\\mathsl{x}\"},\"𝑦\":{\"math\":\"\\\\mathsl{y}\"},\"𝑧\":{\"math\":\"\\\\mathsl{z}\"},\"𝑨\":{\"math\":\"\\\\mathbit{A}\"},\"𝑩\":{\"math\":\"\\\\mathbit{B}\"},\"𝑪\":{\"math\":\"\\\\mathbit{C}\"},\"𝑫\":{\"math\":\"\\\\mathbit{D}\"},\"𝑬\":{\"math\":\"\\\\mathbit{E}\"},\"𝑭\":{\"math\":\"\\\\mathbit{F}\"},\"𝑮\":{\"math\":\"\\\\mathbit{G}\"},\"𝑯\":{\"math\":\"\\\\mathbit{H}\"},\"𝑰\":{\"math\":\"\\\\mathbit{I}\"},\"𝑱\":{\"math\":\"\\\\mathbit{J}\"},\"𝑲\":{\"math\":\"\\\\mathbit{K}\"},\"𝑳\":{\"math\":\"\\\\mathbit{L}\"},\"𝑴\":{\"math\":\"\\\\mathbit{M}\"},\"𝑵\":{\"math\":\"\\\\mathbit{N}\"},\"𝑶\":{\"math\":\"\\\\mathbit{O}\"},\"𝑷\":{\"math\":\"\\\\mathbit{P}\"},\"𝑸\":{\"math\":\"\\\\mathbit{Q}\"},\"𝑹\":{\"math\":\"\\\\mathbit{R}\"},\"𝑺\":{\"math\":\"\\\\mathbit{S}\"},\"𝑻\":{\"math\":\"\\\\mathbit{T}\"},\"𝑼\":{\"math\":\"\\\\mathbit{U}\"},\"𝑽\":{\"math\":\"\\\\mathbit{V}\"},\"𝑾\":{\"math\":\"\\\\mathbit{W}\"},\"𝑿\":{\"math\":\"\\\\mathbit{X}\"},\"𝒀\":{\"math\":\"\\\\mathbit{Y}\"},\"𝒁\":{\"math\":\"\\\\mathbit{Z}\"},\"𝒂\":{\"math\":\"\\\\mathbit{a}\"},\"𝒃\":{\"math\":\"\\\\mathbit{b}\"},\"𝒄\":{\"math\":\"\\\\mathbit{c}\"},\"𝒅\":{\"math\":\"\\\\mathbit{d}\"},\"𝒆\":{\"math\":\"\\\\mathbit{e}\"},\"𝒇\":{\"math\":\"\\\\mathbit{f}\"},\"𝒈\":{\"math\":\"\\\\mathbit{g}\"},\"𝒉\":{\"math\":\"\\\\mathbit{h}\"},\"𝒊\":{\"math\":\"\\\\mathbit{i}\"},\"𝒋\":{\"math\":\"\\\\mathbit{j}\"},\"𝒌\":{\"math\":\"\\\\mathbit{k}\"},\"𝒍\":{\"math\":\"\\\\mathbit{l}\"},\"𝒎\":{\"math\":\"\\\\mathbit{m}\"},\"𝒏\":{\"math\":\"\\\\mathbit{n}\"},\"𝒐\":{\"math\":\"\\\\mathbit{o}\"},\"𝒑\":{\"math\":\"\\\\mathbit{p}\"},\"𝒒\":{\"math\":\"\\\\mathbit{q}\"},\"𝒓\":{\"math\":\"\\\\mathbit{r}\"},\"𝒔\":{\"math\":\"\\\\mathbit{s}\"},\"𝒕\":{\"math\":\"\\\\mathbit{t}\"},\"𝒖\":{\"math\":\"\\\\mathbit{u}\"},\"𝒗\":{\"math\":\"\\\\mathbit{v}\"},\"𝒘\":{\"math\":\"\\\\mathbit{w}\"},\"𝒙\":{\"math\":\"\\\\mathbit{x}\"},\"𝒚\":{\"math\":\"\\\\mathbit{y}\"},\"𝒛\":{\"math\":\"\\\\mathbit{z}\"},\"𝒜\":{\"math\":\"\\\\mathscr{A}\"},\"𝒞\":{\"math\":\"\\\\mathscr{C}\"},\"𝒟\":{\"math\":\"\\\\mathscr{D}\"},\"𝒢\":{\"math\":\"\\\\mathscr{G}\"},\"𝒥\":{\"math\":\"\\\\mathscr{J}\"},\"𝒦\":{\"math\":\"\\\\mathscr{K}\"},\"𝒩\":{\"math\":\"\\\\mathscr{N}\"},\"𝒪\":{\"math\":\"\\\\mathscr{O}\"},\"𝒫\":{\"math\":\"\\\\mathscr{P}\"},\"𝒬\":{\"math\":\"\\\\mathscr{Q}\"},\"𝒮\":{\"math\":\"\\\\mathscr{S}\"},\"𝒯\":{\"math\":\"\\\\mathscr{T}\"},\"𝒰\":{\"math\":\"\\\\mathscr{U}\"},\"𝒱\":{\"math\":\"\\\\mathscr{V}\"},\"𝒲\":{\"math\":\"\\\\mathscr{W}\"},\"𝒳\":{\"math\":\"\\\\mathscr{X}\"},\"𝒴\":{\"math\":\"\\\\mathscr{Y}\"},\"𝒵\":{\"math\":\"\\\\mathscr{Z}\"},\"𝒶\":{\"math\":\"\\\\mathscr{a}\"},\"𝒷\":{\"math\":\"\\\\mathscr{b}\"},\"𝒸\":{\"math\":\"\\\\mathscr{c}\"},\"𝒹\":{\"math\":\"\\\\mathscr{d}\"},\"𝒻\":{\"math\":\"\\\\mathscr{f}\"},\"𝒽\":{\"math\":\"\\\\mathscr{h}\"},\"𝒾\":{\"math\":\"\\\\mathscr{i}\"},\"𝒿\":{\"math\":\"\\\\mathscr{j}\"},\"𝓀\":{\"math\":\"\\\\mathscr{k}\"},\"𝓁\":{\"math\":\"\\\\mathscr{l}\"},\"𝓂\":{\"math\":\"\\\\mathscr{m}\"},\"𝓃\":{\"math\":\"\\\\mathscr{n}\"},\"𝓅\":{\"math\":\"\\\\mathscr{p}\"},\"𝓆\":{\"math\":\"\\\\mathscr{q}\"},\"𝓇\":{\"math\":\"\\\\mathscr{r}\"},\"𝓈\":{\"math\":\"\\\\mathscr{s}\"},\"𝓉\":{\"math\":\"\\\\mathscr{t}\"},\"𝓊\":{\"math\":\"\\\\mathscr{u}\"},\"𝓋\":{\"math\":\"\\\\mathscr{v}\"},\"𝓌\":{\"math\":\"\\\\mathscr{w}\"},\"𝓍\":{\"math\":\"\\\\mathscr{x}\"},\"𝓎\":{\"math\":\"\\\\mathscr{y}\"},\"𝓏\":{\"math\":\"\\\\mathscr{z}\"},\"𝓐\":{\"math\":\"\\\\mathmit{A}\"},\"𝓑\":{\"math\":\"\\\\mathmit{B}\"},\"𝓒\":{\"math\":\"\\\\mathmit{C}\"},\"𝓓\":{\"math\":\"\\\\mathmit{D}\"},\"𝓔\":{\"math\":\"\\\\mathmit{E}\"},\"𝓕\":{\"math\":\"\\\\mathmit{F}\"},\"𝓖\":{\"math\":\"\\\\mathmit{G}\"},\"𝓗\":{\"math\":\"\\\\mathmit{H}\"},\"𝓘\":{\"math\":\"\\\\mathmit{I}\"},\"𝓙\":{\"math\":\"\\\\mathmit{J}\"},\"𝓚\":{\"math\":\"\\\\mathmit{K}\"},\"𝓛\":{\"math\":\"\\\\mathmit{L}\"},\"𝓜\":{\"math\":\"\\\\mathmit{M}\"},\"𝓝\":{\"math\":\"\\\\mathmit{N}\"},\"𝓞\":{\"math\":\"\\\\mathmit{O}\"},\"𝓟\":{\"math\":\"\\\\mathmit{P}\"},\"𝓠\":{\"math\":\"\\\\mathmit{Q}\"},\"𝓡\":{\"math\":\"\\\\mathmit{R}\"},\"𝓢\":{\"math\":\"\\\\mathmit{S}\"},\"𝓣\":{\"math\":\"\\\\mathmit{T}\"},\"𝓤\":{\"math\":\"\\\\mathmit{U}\"},\"𝓥\":{\"math\":\"\\\\mathmit{V}\"},\"𝓦\":{\"math\":\"\\\\mathmit{W}\"},\"𝓧\":{\"math\":\"\\\\mathmit{X}\"},\"𝓨\":{\"math\":\"\\\\mathmit{Y}\"},\"𝓩\":{\"math\":\"\\\\mathmit{Z}\"},\"𝓪\":{\"math\":\"\\\\mathmit{a}\"},\"𝓫\":{\"math\":\"\\\\mathmit{b}\"},\"𝓬\":{\"math\":\"\\\\mathmit{c}\"},\"𝓭\":{\"math\":\"\\\\mathmit{d}\"},\"𝓮\":{\"math\":\"\\\\mathmit{e}\"},\"𝓯\":{\"math\":\"\\\\mathmit{f}\"},\"𝓰\":{\"math\":\"\\\\mathmit{g}\"},\"𝓱\":{\"math\":\"\\\\mathmit{h}\"},\"𝓲\":{\"math\":\"\\\\mathmit{i}\"},\"𝓳\":{\"math\":\"\\\\mathmit{j}\"},\"𝓴\":{\"math\":\"\\\\mathmit{k}\"},\"𝓵\":{\"math\":\"\\\\mathmit{l}\"},\"𝓶\":{\"math\":\"\\\\mathmit{m}\"},\"𝓷\":{\"math\":\"\\\\mathmit{n}\"},\"𝓸\":{\"math\":\"\\\\mathmit{o}\"},\"𝓹\":{\"math\":\"\\\\mathmit{p}\"},\"𝓺\":{\"math\":\"\\\\mathmit{q}\"},\"𝓻\":{\"math\":\"\\\\mathmit{r}\"},\"𝓼\":{\"math\":\"\\\\mathmit{s}\"},\"𝓽\":{\"math\":\"\\\\mathmit{t}\"},\"𝓾\":{\"math\":\"\\\\mathmit{u}\"},\"𝓿\":{\"math\":\"\\\\mathmit{v}\"},\"𝔀\":{\"math\":\"\\\\mathmit{w}\"},\"𝔁\":{\"math\":\"\\\\mathmit{x}\"},\"𝔂\":{\"math\":\"\\\\mathmit{y}\"},\"𝔃\":{\"math\":\"\\\\mathmit{z}\"},\"𝔄\":{\"math\":\"\\\\mathfrak{A}\"},\"𝔅\":{\"math\":\"\\\\mathfrak{B}\"},\"𝔇\":{\"math\":\"\\\\mathfrak{D}\"},\"𝔈\":{\"math\":\"\\\\mathfrak{E}\"},\"𝔉\":{\"math\":\"\\\\mathfrak{F}\"},\"𝔊\":{\"math\":\"\\\\mathfrak{G}\"},\"𝔍\":{\"math\":\"\\\\mathfrak{J}\"},\"𝔎\":{\"math\":\"\\\\mathfrak{K}\"},\"𝔏\":{\"math\":\"\\\\mathfrak{L}\"},\"𝔐\":{\"math\":\"\\\\mathfrak{M}\"},\"𝔑\":{\"math\":\"\\\\mathfrak{N}\"},\"𝔒\":{\"math\":\"\\\\mathfrak{O}\"},\"𝔓\":{\"math\":\"\\\\mathfrak{P}\"},\"𝔔\":{\"math\":\"\\\\mathfrak{Q}\"},\"𝔖\":{\"math\":\"\\\\mathfrak{S}\"},\"𝔗\":{\"math\":\"\\\\mathfrak{T}\"},\"𝔘\":{\"math\":\"\\\\mathfrak{U}\"},\"𝔙\":{\"math\":\"\\\\mathfrak{V}\"},\"𝔚\":{\"math\":\"\\\\mathfrak{W}\"},\"𝔛\":{\"math\":\"\\\\mathfrak{X}\"},\"𝔜\":{\"math\":\"\\\\mathfrak{Y}\"},\"𝔞\":{\"math\":\"\\\\mathfrak{a}\"},\"𝔟\":{\"math\":\"\\\\mathfrak{b}\"},\"𝔠\":{\"math\":\"\\\\mathfrak{c}\"},\"𝔡\":{\"math\":\"\\\\mathfrak{d}\"},\"𝔢\":{\"math\":\"\\\\mathfrak{e}\"},\"𝔣\":{\"math\":\"\\\\mathfrak{f}\"},\"𝔤\":{\"math\":\"\\\\mathfrak{g}\"},\"𝔥\":{\"math\":\"\\\\mathfrak{h}\"},\"𝔦\":{\"math\":\"\\\\mathfrak{i}\"},\"𝔧\":{\"math\":\"\\\\mathfrak{j}\"},\"𝔨\":{\"math\":\"\\\\mathfrak{k}\"},\"𝔩\":{\"math\":\"\\\\mathfrak{l}\"},\"𝔪\":{\"math\":\"\\\\mathfrak{m}\"},\"𝔫\":{\"math\":\"\\\\mathfrak{n}\"},\"𝔬\":{\"math\":\"\\\\mathfrak{o}\"},\"𝔭\":{\"math\":\"\\\\mathfrak{p}\"},\"𝔮\":{\"math\":\"\\\\mathfrak{q}\"},\"𝔯\":{\"math\":\"\\\\mathfrak{r}\"},\"𝔰\":{\"math\":\"\\\\mathfrak{s}\"},\"𝔱\":{\"math\":\"\\\\mathfrak{t}\"},\"𝔲\":{\"math\":\"\\\\mathfrak{u}\"},\"𝔳\":{\"math\":\"\\\\mathfrak{v}\"},\"𝔴\":{\"math\":\"\\\\mathfrak{w}\"},\"𝔵\":{\"math\":\"\\\\mathfrak{x}\"},\"𝔶\":{\"math\":\"\\\\mathfrak{y}\"},\"𝔷\":{\"math\":\"\\\\mathfrak{z}\"},\"𝔸\":{\"math\":\"\\\\mathbb{A}\"},\"𝔹\":{\"math\":\"\\\\mathbb{B}\"},\"𝔻\":{\"math\":\"\\\\mathbb{D}\"},\"𝔼\":{\"math\":\"\\\\mathbb{E}\"},\"𝔽\":{\"math\":\"\\\\mathbb{F}\"},\"𝔾\":{\"math\":\"\\\\mathbb{G}\"},\"𝕀\":{\"math\":\"\\\\mathbb{I}\"},\"𝕁\":{\"math\":\"\\\\mathbb{J}\"},\"𝕂\":{\"math\":\"\\\\mathbb{K}\"},\"𝕃\":{\"math\":\"\\\\mathbb{L}\"},\"𝕄\":{\"math\":\"\\\\mathbb{M}\"},\"𝕆\":{\"math\":\"\\\\mathbb{O}\"},\"𝕊\":{\"math\":\"\\\\mathbb{S}\"},\"𝕋\":{\"math\":\"\\\\mathbb{T}\"},\"𝕌\":{\"math\":\"\\\\mathbb{U}\"},\"𝕍\":{\"math\":\"\\\\mathbb{V}\"},\"𝕎\":{\"math\":\"\\\\mathbb{W}\"},\"𝕏\":{\"math\":\"\\\\mathbb{X}\"},\"𝕐\":{\"math\":\"\\\\mathbb{Y}\"},\"𝕒\":{\"math\":\"\\\\mathbb{a}\"},\"𝕓\":{\"math\":\"\\\\mathbb{b}\"},\"𝕔\":{\"math\":\"\\\\mathbb{c}\"},\"𝕕\":{\"math\":\"\\\\mathbb{d}\"},\"𝕖\":{\"math\":\"\\\\mathbb{e}\"},\"𝕗\":{\"math\":\"\\\\mathbb{f}\"},\"𝕘\":{\"math\":\"\\\\mathbb{g}\"},\"𝕙\":{\"math\":\"\\\\mathbb{h}\"},\"𝕚\":{\"math\":\"\\\\mathbb{i}\"},\"𝕛\":{\"math\":\"\\\\mathbb{j}\"},\"𝕜\":{\"math\":\"\\\\mathbb{k}\"},\"𝕝\":{\"math\":\"\\\\mathbb{l}\"},\"𝕞\":{\"math\":\"\\\\mathbb{m}\"},\"𝕟\":{\"math\":\"\\\\mathbb{n}\"},\"𝕠\":{\"math\":\"\\\\mathbb{o}\"},\"𝕡\":{\"math\":\"\\\\mathbb{p}\"},\"𝕢\":{\"math\":\"\\\\mathbb{q}\"},\"𝕣\":{\"math\":\"\\\\mathbb{r}\"},\"𝕤\":{\"math\":\"\\\\mathbb{s}\"},\"𝕥\":{\"math\":\"\\\\mathbb{t}\"},\"𝕦\":{\"math\":\"\\\\mathbb{u}\"},\"𝕧\":{\"math\":\"\\\\mathbb{v}\"},\"𝕨\":{\"math\":\"\\\\mathbb{w}\"},\"𝕩\":{\"math\":\"\\\\mathbb{x}\"},\"𝕪\":{\"math\":\"\\\\mathbb{y}\"},\"𝕫\":{\"math\":\"\\\\mathbb{z}\"},\"𝕬\":{\"math\":\"\\\\mathslbb{A}\"},\"𝕭\":{\"math\":\"\\\\mathslbb{B}\"},\"𝕮\":{\"math\":\"\\\\mathslbb{C}\"},\"𝕯\":{\"math\":\"\\\\mathslbb{D}\"},\"𝕰\":{\"math\":\"\\\\mathslbb{E}\"},\"𝕱\":{\"math\":\"\\\\mathslbb{F}\"},\"𝕲\":{\"math\":\"\\\\mathslbb{G}\"},\"𝕳\":{\"math\":\"\\\\mathslbb{H}\"},\"𝕴\":{\"math\":\"\\\\mathslbb{I}\"},\"𝕵\":{\"math\":\"\\\\mathslbb{J}\"},\"𝕶\":{\"math\":\"\\\\mathslbb{K}\"},\"𝕷\":{\"math\":\"\\\\mathslbb{L}\"},\"𝕸\":{\"math\":\"\\\\mathslbb{M}\"},\"𝕹\":{\"math\":\"\\\\mathslbb{N}\"},\"𝕺\":{\"math\":\"\\\\mathslbb{O}\"},\"𝕻\":{\"math\":\"\\\\mathslbb{P}\"},\"𝕼\":{\"math\":\"\\\\mathslbb{Q}\"},\"𝕽\":{\"math\":\"\\\\mathslbb{R}\"},\"𝕾\":{\"math\":\"\\\\mathslbb{S}\"},\"𝕿\":{\"math\":\"\\\\mathslbb{T}\"},\"𝖀\":{\"math\":\"\\\\mathslbb{U}\"},\"𝖁\":{\"math\":\"\\\\mathslbb{V}\"},\"𝖂\":{\"math\":\"\\\\mathslbb{W}\"},\"𝖃\":{\"math\":\"\\\\mathslbb{X}\"},\"𝖄\":{\"math\":\"\\\\mathslbb{Y}\"},\"𝖅\":{\"math\":\"\\\\mathslbb{Z}\"},\"𝖆\":{\"math\":\"\\\\mathslbb{a}\"},\"𝖇\":{\"math\":\"\\\\mathslbb{b}\"},\"𝖈\":{\"math\":\"\\\\mathslbb{c}\"},\"𝖉\":{\"math\":\"\\\\mathslbb{d}\"},\"𝖊\":{\"math\":\"\\\\mathslbb{e}\"},\"𝖋\":{\"math\":\"\\\\mathslbb{f}\"},\"𝖌\":{\"math\":\"\\\\mathslbb{g}\"},\"𝖍\":{\"math\":\"\\\\mathslbb{h}\"},\"𝖎\":{\"math\":\"\\\\mathslbb{i}\"},\"𝖏\":{\"math\":\"\\\\mathslbb{j}\"},\"𝖐\":{\"math\":\"\\\\mathslbb{k}\"},\"𝖑\":{\"math\":\"\\\\mathslbb{l}\"},\"𝖒\":{\"math\":\"\\\\mathslbb{m}\"},\"𝖓\":{\"math\":\"\\\\mathslbb{n}\"},\"𝖔\":{\"math\":\"\\\\mathslbb{o}\"},\"𝖕\":{\"math\":\"\\\\mathslbb{p}\"},\"𝖖\":{\"math\":\"\\\\mathslbb{q}\"},\"𝖗\":{\"math\":\"\\\\mathslbb{r}\"},\"𝖘\":{\"math\":\"\\\\mathslbb{s}\"},\"𝖙\":{\"math\":\"\\\\mathslbb{t}\"},\"𝖚\":{\"math\":\"\\\\mathslbb{u}\"},\"𝖛\":{\"math\":\"\\\\mathslbb{v}\"},\"𝖜\":{\"math\":\"\\\\mathslbb{w}\"},\"𝖝\":{\"math\":\"\\\\mathslbb{x}\"},\"𝖞\":{\"math\":\"\\\\mathslbb{y}\"},\"𝖟\":{\"math\":\"\\\\mathslbb{z}\"},\"𝖠\":{\"math\":\"\\\\mathsf{A}\"},\"𝖡\":{\"math\":\"\\\\mathsf{B}\"},\"𝖢\":{\"math\":\"\\\\mathsf{C}\"},\"𝖣\":{\"math\":\"\\\\mathsf{D}\"},\"𝖤\":{\"math\":\"\\\\mathsf{E}\"},\"𝖥\":{\"math\":\"\\\\mathsf{F}\"},\"𝖦\":{\"math\":\"\\\\mathsf{G}\"},\"𝖧\":{\"math\":\"\\\\mathsf{H}\"},\"𝖨\":{\"math\":\"\\\\mathsf{I}\"},\"𝖩\":{\"math\":\"\\\\mathsf{J}\"},\"𝖪\":{\"math\":\"\\\\mathsf{K}\"},\"𝖫\":{\"math\":\"\\\\mathsf{L}\"},\"𝖬\":{\"math\":\"\\\\mathsf{M}\"},\"𝖭\":{\"math\":\"\\\\mathsf{N}\"},\"𝖮\":{\"math\":\"\\\\mathsf{O}\"},\"𝖯\":{\"math\":\"\\\\mathsf{P}\"},\"𝖰\":{\"math\":\"\\\\mathsf{Q}\"},\"𝖱\":{\"math\":\"\\\\mathsf{R}\"},\"𝖲\":{\"math\":\"\\\\mathsf{S}\"},\"𝖳\":{\"math\":\"\\\\mathsf{T}\"},\"𝖴\":{\"math\":\"\\\\mathsf{U}\"},\"𝖵\":{\"math\":\"\\\\mathsf{V}\"},\"𝖶\":{\"math\":\"\\\\mathsf{W}\"},\"𝖷\":{\"math\":\"\\\\mathsf{X}\"},\"𝖸\":{\"math\":\"\\\\mathsf{Y}\"},\"𝖹\":{\"math\":\"\\\\mathsf{Z}\"},\"𝖺\":{\"math\":\"\\\\mathsf{a}\"},\"𝖻\":{\"math\":\"\\\\mathsf{b}\"},\"𝖼\":{\"math\":\"\\\\mathsf{c}\"},\"𝖽\":{\"math\":\"\\\\mathsf{d}\"},\"𝖾\":{\"math\":\"\\\\mathsf{e}\"},\"𝖿\":{\"math\":\"\\\\mathsf{f}\"},\"𝗀\":{\"math\":\"\\\\mathsf{g}\"},\"𝗁\":{\"math\":\"\\\\mathsf{h}\"},\"𝗂\":{\"math\":\"\\\\mathsf{i}\"},\"𝗃\":{\"math\":\"\\\\mathsf{j}\"},\"𝗄\":{\"math\":\"\\\\mathsf{k}\"},\"𝗅\":{\"math\":\"\\\\mathsf{l}\"},\"𝗆\":{\"math\":\"\\\\mathsf{m}\"},\"𝗇\":{\"math\":\"\\\\mathsf{n}\"},\"𝗈\":{\"math\":\"\\\\mathsf{o}\"},\"𝗉\":{\"math\":\"\\\\mathsf{p}\"},\"𝗊\":{\"math\":\"\\\\mathsf{q}\"},\"𝗋\":{\"math\":\"\\\\mathsf{r}\"},\"𝗌\":{\"math\":\"\\\\mathsf{s}\"},\"𝗍\":{\"math\":\"\\\\mathsf{t}\"},\"𝗎\":{\"math\":\"\\\\mathsf{u}\"},\"𝗏\":{\"math\":\"\\\\mathsf{v}\"},\"𝗐\":{\"math\":\"\\\\mathsf{w}\"},\"𝗑\":{\"math\":\"\\\\mathsf{x}\"},\"𝗒\":{\"math\":\"\\\\mathsf{y}\"},\"𝗓\":{\"math\":\"\\\\mathsf{z}\"},\"𝗔\":{\"math\":\"\\\\mathsfbf{A}\"},\"𝗕\":{\"math\":\"\\\\mathsfbf{B}\"},\"𝗖\":{\"math\":\"\\\\mathsfbf{C}\"},\"𝗗\":{\"math\":\"\\\\mathsfbf{D}\"},\"𝗘\":{\"math\":\"\\\\mathsfbf{E}\"},\"𝗙\":{\"math\":\"\\\\mathsfbf{F}\"},\"𝗚\":{\"math\":\"\\\\mathsfbf{G}\"},\"𝗛\":{\"math\":\"\\\\mathsfbf{H}\"},\"𝗜\":{\"math\":\"\\\\mathsfbf{I}\"},\"𝗝\":{\"math\":\"\\\\mathsfbf{J}\"},\"𝗞\":{\"math\":\"\\\\mathsfbf{K}\"},\"𝗟\":{\"math\":\"\\\\mathsfbf{L}\"},\"𝗠\":{\"math\":\"\\\\mathsfbf{M}\"},\"𝗡\":{\"math\":\"\\\\mathsfbf{N}\"},\"𝗢\":{\"math\":\"\\\\mathsfbf{O}\"},\"𝗣\":{\"math\":\"\\\\mathsfbf{P}\"},\"𝗤\":{\"math\":\"\\\\mathsfbf{Q}\"},\"𝗥\":{\"math\":\"\\\\mathsfbf{R}\"},\"𝗦\":{\"math\":\"\\\\mathsfbf{S}\"},\"𝗧\":{\"math\":\"\\\\mathsfbf{T}\"},\"𝗨\":{\"math\":\"\\\\mathsfbf{U}\"},\"𝗩\":{\"math\":\"\\\\mathsfbf{V}\"},\"𝗪\":{\"math\":\"\\\\mathsfbf{W}\"},\"𝗫\":{\"math\":\"\\\\mathsfbf{X}\"},\"𝗬\":{\"math\":\"\\\\mathsfbf{Y}\"},\"𝗭\":{\"math\":\"\\\\mathsfbf{Z}\"},\"𝗮\":{\"math\":\"\\\\mathsfbf{a}\"},\"𝗯\":{\"math\":\"\\\\mathsfbf{b}\"},\"𝗰\":{\"math\":\"\\\\mathsfbf{c}\"},\"𝗱\":{\"math\":\"\\\\mathsfbf{d}\"},\"𝗲\":{\"math\":\"\\\\mathsfbf{e}\"},\"𝗳\":{\"math\":\"\\\\mathsfbf{f}\"},\"𝗴\":{\"math\":\"\\\\mathsfbf{g}\"},\"𝗵\":{\"math\":\"\\\\mathsfbf{h}\"},\"𝗶\":{\"math\":\"\\\\mathsfbf{i}\"},\"𝗷\":{\"math\":\"\\\\mathsfbf{j}\"},\"𝗸\":{\"math\":\"\\\\mathsfbf{k}\"},\"𝗹\":{\"math\":\"\\\\mathsfbf{l}\"},\"𝗺\":{\"math\":\"\\\\mathsfbf{m}\"},\"𝗻\":{\"math\":\"\\\\mathsfbf{n}\"},\"𝗼\":{\"math\":\"\\\\mathsfbf{o}\"},\"𝗽\":{\"math\":\"\\\\mathsfbf{p}\"},\"𝗾\":{\"math\":\"\\\\mathsfbf{q}\"},\"𝗿\":{\"math\":\"\\\\mathsfbf{r}\"},\"𝘀\":{\"math\":\"\\\\mathsfbf{s}\"},\"𝘁\":{\"math\":\"\\\\mathsfbf{t}\"},\"𝘂\":{\"math\":\"\\\\mathsfbf{u}\"},\"𝘃\":{\"math\":\"\\\\mathsfbf{v}\"},\"𝘄\":{\"math\":\"\\\\mathsfbf{w}\"},\"𝘅\":{\"math\":\"\\\\mathsfbf{x}\"},\"𝘆\":{\"math\":\"\\\\mathsfbf{y}\"},\"𝘇\":{\"math\":\"\\\\mathsfbf{z}\"},\"𝘈\":{\"math\":\"\\\\mathsfsl{A}\"},\"𝘉\":{\"math\":\"\\\\mathsfsl{B}\"},\"𝘊\":{\"math\":\"\\\\mathsfsl{C}\"},\"𝘋\":{\"math\":\"\\\\mathsfsl{D}\"},\"𝘌\":{\"math\":\"\\\\mathsfsl{E}\"},\"𝘍\":{\"math\":\"\\\\mathsfsl{F}\"},\"𝘎\":{\"math\":\"\\\\mathsfsl{G}\"},\"𝘏\":{\"math\":\"\\\\mathsfsl{H}\"},\"𝘐\":{\"math\":\"\\\\mathsfsl{I}\"},\"𝘑\":{\"math\":\"\\\\mathsfsl{J}\"},\"𝘒\":{\"math\":\"\\\\mathsfsl{K}\"},\"𝘓\":{\"math\":\"\\\\mathsfsl{L}\"},\"𝘔\":{\"math\":\"\\\\mathsfsl{M}\"},\"𝘕\":{\"math\":\"\\\\mathsfsl{N}\"},\"𝘖\":{\"math\":\"\\\\mathsfsl{O}\"},\"𝘗\":{\"math\":\"\\\\mathsfsl{P}\"},\"𝘘\":{\"math\":\"\\\\mathsfsl{Q}\"},\"𝘙\":{\"math\":\"\\\\mathsfsl{R}\"},\"𝘚\":{\"math\":\"\\\\mathsfsl{S}\"},\"𝘛\":{\"math\":\"\\\\mathsfsl{T}\"},\"𝘜\":{\"math\":\"\\\\mathsfsl{U}\"},\"𝘝\":{\"math\":\"\\\\mathsfsl{V}\"},\"𝘞\":{\"math\":\"\\\\mathsfsl{W}\"},\"𝘟\":{\"math\":\"\\\\mathsfsl{X}\"},\"𝘠\":{\"math\":\"\\\\mathsfsl{Y}\"},\"𝘡\":{\"math\":\"\\\\mathsfsl{Z}\"},\"𝘢\":{\"math\":\"\\\\mathsfsl{a}\"},\"𝘣\":{\"math\":\"\\\\mathsfsl{b}\"},\"𝘤\":{\"math\":\"\\\\mathsfsl{c}\"},\"𝘥\":{\"math\":\"\\\\mathsfsl{d}\"},\"𝘦\":{\"math\":\"\\\\mathsfsl{e}\"},\"𝘧\":{\"math\":\"\\\\mathsfsl{f}\"},\"𝘨\":{\"math\":\"\\\\mathsfsl{g}\"},\"𝘩\":{\"math\":\"\\\\mathsfsl{h}\"},\"𝘪\":{\"math\":\"\\\\mathsfsl{i}\"},\"𝘫\":{\"math\":\"\\\\mathsfsl{j}\"},\"𝘬\":{\"math\":\"\\\\mathsfsl{k}\"},\"𝘭\":{\"math\":\"\\\\mathsfsl{l}\"},\"𝘮\":{\"math\":\"\\\\mathsfsl{m}\"},\"𝘯\":{\"math\":\"\\\\mathsfsl{n}\"},\"𝘰\":{\"math\":\"\\\\mathsfsl{o}\"},\"𝘱\":{\"math\":\"\\\\mathsfsl{p}\"},\"𝘲\":{\"math\":\"\\\\mathsfsl{q}\"},\"𝘳\":{\"math\":\"\\\\mathsfsl{r}\"},\"𝘴\":{\"math\":\"\\\\mathsfsl{s}\"},\"𝘵\":{\"math\":\"\\\\mathsfsl{t}\"},\"𝘶\":{\"math\":\"\\\\mathsfsl{u}\"},\"𝘷\":{\"math\":\"\\\\mathsfsl{v}\"},\"𝘸\":{\"math\":\"\\\\mathsfsl{w}\"},\"𝘹\":{\"math\":\"\\\\mathsfsl{x}\"},\"𝘺\":{\"math\":\"\\\\mathsfsl{y}\"},\"𝘻\":{\"math\":\"\\\\mathsfsl{z}\"},\"𝘼\":{\"math\":\"\\\\mathsfbfsl{A}\"},\"𝘽\":{\"math\":\"\\\\mathsfbfsl{B}\"},\"𝘾\":{\"math\":\"\\\\mathsfbfsl{C}\"},\"𝘿\":{\"math\":\"\\\\mathsfbfsl{D}\"},\"𝙀\":{\"math\":\"\\\\mathsfbfsl{E}\"},\"𝙁\":{\"math\":\"\\\\mathsfbfsl{F}\"},\"𝙂\":{\"math\":\"\\\\mathsfbfsl{G}\"},\"𝙃\":{\"math\":\"\\\\mathsfbfsl{H}\"},\"𝙄\":{\"math\":\"\\\\mathsfbfsl{I}\"},\"𝙅\":{\"math\":\"\\\\mathsfbfsl{J}\"},\"𝙆\":{\"math\":\"\\\\mathsfbfsl{K}\"},\"𝙇\":{\"math\":\"\\\\mathsfbfsl{L}\"},\"𝙈\":{\"math\":\"\\\\mathsfbfsl{M}\"},\"𝙉\":{\"math\":\"\\\\mathsfbfsl{N}\"},\"𝙊\":{\"math\":\"\\\\mathsfbfsl{O}\"},\"𝙋\":{\"math\":\"\\\\mathsfbfsl{P}\"},\"𝙌\":{\"math\":\"\\\\mathsfbfsl{Q}\"},\"𝙍\":{\"math\":\"\\\\mathsfbfsl{R}\"},\"𝙎\":{\"math\":\"\\\\mathsfbfsl{S}\"},\"𝙏\":{\"math\":\"\\\\mathsfbfsl{T}\"},\"𝙐\":{\"math\":\"\\\\mathsfbfsl{U}\"},\"𝙑\":{\"math\":\"\\\\mathsfbfsl{V}\"},\"𝙒\":{\"math\":\"\\\\mathsfbfsl{W}\"},\"𝙓\":{\"math\":\"\\\\mathsfbfsl{X}\"},\"𝙔\":{\"math\":\"\\\\mathsfbfsl{Y}\"},\"𝙕\":{\"math\":\"\\\\mathsfbfsl{Z}\"},\"𝙖\":{\"math\":\"\\\\mathsfbfsl{a}\"},\"𝙗\":{\"math\":\"\\\\mathsfbfsl{b}\"},\"𝙘\":{\"math\":\"\\\\mathsfbfsl{c}\"},\"𝙙\":{\"math\":\"\\\\mathsfbfsl{d}\"},\"𝙚\":{\"math\":\"\\\\mathsfbfsl{e}\"},\"𝙛\":{\"math\":\"\\\\mathsfbfsl{f}\"},\"𝙜\":{\"math\":\"\\\\mathsfbfsl{g}\"},\"𝙝\":{\"math\":\"\\\\mathsfbfsl{h}\"},\"𝙞\":{\"math\":\"\\\\mathsfbfsl{i}\"},\"𝙟\":{\"math\":\"\\\\mathsfbfsl{j}\"},\"𝙠\":{\"math\":\"\\\\mathsfbfsl{k}\"},\"𝙡\":{\"math\":\"\\\\mathsfbfsl{l}\"},\"𝙢\":{\"math\":\"\\\\mathsfbfsl{m}\"},\"𝙣\":{\"math\":\"\\\\mathsfbfsl{n}\"},\"𝙤\":{\"math\":\"\\\\mathsfbfsl{o}\"},\"𝙥\":{\"math\":\"\\\\mathsfbfsl{p}\"},\"𝙦\":{\"math\":\"\\\\mathsfbfsl{q}\"},\"𝙧\":{\"math\":\"\\\\mathsfbfsl{r}\"},\"𝙨\":{\"math\":\"\\\\mathsfbfsl{s}\"},\"𝙩\":{\"math\":\"\\\\mathsfbfsl{t}\"},\"𝙪\":{\"math\":\"\\\\mathsfbfsl{u}\"},\"𝙫\":{\"math\":\"\\\\mathsfbfsl{v}\"},\"𝙬\":{\"math\":\"\\\\mathsfbfsl{w}\"},\"𝙭\":{\"math\":\"\\\\mathsfbfsl{x}\"},\"𝙮\":{\"math\":\"\\\\mathsfbfsl{y}\"},\"𝙯\":{\"math\":\"\\\\mathsfbfsl{z}\"},\"𝙰\":{\"math\":\"\\\\mathtt{A}\"},\"𝙱\":{\"math\":\"\\\\mathtt{B}\"},\"𝙲\":{\"math\":\"\\\\mathtt{C}\"},\"𝙳\":{\"math\":\"\\\\mathtt{D}\"},\"𝙴\":{\"math\":\"\\\\mathtt{E}\"},\"𝙵\":{\"math\":\"\\\\mathtt{F}\"},\"𝙶\":{\"math\":\"\\\\mathtt{G}\"},\"𝙷\":{\"math\":\"\\\\mathtt{H}\"},\"𝙸\":{\"math\":\"\\\\mathtt{I}\"},\"𝙹\":{\"math\":\"\\\\mathtt{J}\"},\"𝙺\":{\"math\":\"\\\\mathtt{K}\"},\"𝙻\":{\"math\":\"\\\\mathtt{L}\"},\"𝙼\":{\"math\":\"\\\\mathtt{M}\"},\"𝙽\":{\"math\":\"\\\\mathtt{N}\"},\"𝙾\":{\"math\":\"\\\\mathtt{O}\"},\"𝙿\":{\"math\":\"\\\\mathtt{P}\"},\"𝚀\":{\"math\":\"\\\\mathtt{Q}\"},\"𝚁\":{\"math\":\"\\\\mathtt{R}\"},\"𝚂\":{\"math\":\"\\\\mathtt{S}\"},\"𝚃\":{\"math\":\"\\\\mathtt{T}\"},\"𝚄\":{\"math\":\"\\\\mathtt{U}\"},\"𝚅\":{\"math\":\"\\\\mathtt{V}\"},\"𝚆\":{\"math\":\"\\\\mathtt{W}\"},\"𝚇\":{\"math\":\"\\\\mathtt{X}\"},\"𝚈\":{\"math\":\"\\\\mathtt{Y}\"},\"𝚉\":{\"math\":\"\\\\mathtt{Z}\"},\"𝚊\":{\"math\":\"\\\\mathtt{a}\"},\"𝚋\":{\"math\":\"\\\\mathtt{b}\"},\"𝚌\":{\"math\":\"\\\\mathtt{c}\"},\"𝚍\":{\"math\":\"\\\\mathtt{d}\"},\"𝚎\":{\"math\":\"\\\\mathtt{e}\"},\"𝚏\":{\"math\":\"\\\\mathtt{f}\"},\"𝚐\":{\"math\":\"\\\\mathtt{g}\"},\"𝚑\":{\"math\":\"\\\\mathtt{h}\"},\"𝚒\":{\"math\":\"\\\\mathtt{i}\"},\"𝚓\":{\"math\":\"\\\\mathtt{j}\"},\"𝚔\":{\"math\":\"\\\\mathtt{k}\"},\"𝚕\":{\"math\":\"\\\\mathtt{l}\"},\"𝚖\":{\"math\":\"\\\\mathtt{m}\"},\"𝚗\":{\"math\":\"\\\\mathtt{n}\"},\"𝚘\":{\"math\":\"\\\\mathtt{o}\"},\"𝚙\":{\"math\":\"\\\\mathtt{p}\"},\"𝚚\":{\"math\":\"\\\\mathtt{q}\"},\"𝚛\":{\"math\":\"\\\\mathtt{r}\"},\"𝚜\":{\"math\":\"\\\\mathtt{s}\"},\"𝚝\":{\"math\":\"\\\\mathtt{t}\"},\"𝚞\":{\"math\":\"\\\\mathtt{u}\"},\"𝚟\":{\"math\":\"\\\\mathtt{v}\"},\"𝚠\":{\"math\":\"\\\\mathtt{w}\"},\"𝚡\":{\"math\":\"\\\\mathtt{x}\"},\"𝚢\":{\"math\":\"\\\\mathtt{y}\"},\"𝚣\":{\"math\":\"\\\\mathtt{z}\"},\"𝚤\":{\"math\":\"\\\\imath\"},\"𝚥\":{\"math\":\"\\\\jmath\"},\"𝚨\":{\"math\":\"\\\\mathbf{A}\"},\"𝚩\":{\"math\":\"\\\\mathbf{B}\"},\"𝚪\":{\"math\":\"\\\\mathbf{\\\\Gamma}\"},\"𝚫\":{\"math\":\"\\\\mathbf{\\\\Delta}\"},\"𝚬\":{\"math\":\"\\\\mathbf{E}\"},\"𝚭\":{\"math\":\"\\\\mathbf{Z}\"},\"𝚮\":{\"math\":\"\\\\mathbf{H}\"},\"𝚯\":{\"math\":\"\\\\mathbf{\\\\Theta}\"},\"𝚰\":{\"math\":\"\\\\mathbf{I}\"},\"𝚱\":{\"math\":\"\\\\mathbf{K}\"},\"𝚲\":{\"math\":\"\\\\mathbf{\\\\Lambda}\"},\"𝚳\":{\"math\":\"M\"},\"𝚴\":{\"math\":\"N\"},\"𝚵\":{\"math\":\"\\\\mathbf{\\\\Xi}\"},\"𝚶\":{\"math\":\"O\"},\"𝚷\":{\"math\":\"\\\\mathbf{\\\\Pi}\"},\"𝚸\":{\"math\":\"\\\\mathbf{P}\"},\"𝚹\":{\"math\":\"\\\\mathbf{\\\\vartheta}\"},\"𝚺\":{\"math\":\"\\\\mathbf{\\\\Sigma}\"},\"𝚻\":{\"math\":\"\\\\mathbf{T}\"},\"𝚼\":{\"math\":\"\\\\mathbf{\\\\Upsilon}\"},\"𝚽\":{\"math\":\"\\\\mathbf{\\\\Phi}\"},\"𝚾\":{\"math\":\"\\\\mathbf{X}\"},\"𝚿\":{\"math\":\"\\\\mathbf{\\\\Psi}\"},\"𝛀\":{\"math\":\"\\\\mathbf{\\\\Omega}\"},\"𝛁\":{\"math\":\"\\\\mathbf{\\\\nabla}\"},\"𝛂\":{\"math\":\"\\\\mathbf{\\\\alpha}\"},\"𝛃\":{\"math\":\"\\\\mathbf{\\\\beta}\"},\"𝛄\":{\"math\":\"\\\\mathbf{\\\\gamma}\"},\"𝛅\":{\"math\":\"\\\\mathbf{\\\\delta}\"},\"𝛆\":{\"math\":\"\\\\mathbf{\\\\epsilon}\"},\"𝛇\":{\"math\":\"\\\\mathbf{\\\\zeta}\"},\"𝛈\":{\"math\":\"\\\\mathbf{\\\\eta}\"},\"𝛉\":{\"math\":\"\\\\mathbf{\\\\theta}\"},\"𝛊\":{\"math\":\"\\\\mathbf{I}\"},\"𝛋\":{\"math\":\"\\\\mathbf{K}\"},\"𝛌\":{\"math\":\"\\\\mathbf{\\\\lambda}\"},\"𝛍\":{\"math\":\"M\"},\"𝛎\":{\"math\":\"N\"},\"𝛏\":{\"math\":\"\\\\mathbf{\\\\xi}\"},\"𝛐\":{\"math\":\"O\"},\"𝛑\":{\"math\":\"\\\\mathbf{\\\\pi}\"},\"𝛒\":{\"math\":\"\\\\mathbf{P}\"},\"𝛓\":{\"math\":\"\\\\mathbf{\\\\varsigma}\"},\"𝛔\":{\"math\":\"\\\\mathbf{\\\\sigma}\"},\"𝛕\":{\"math\":\"\\\\mathbf{T}\"},\"𝛖\":{\"math\":\"\\\\mathbf{\\\\upsilon}\"},\"𝛗\":{\"math\":\"\\\\mathbf{\\\\phi}\"},\"𝛘\":{\"math\":\"\\\\mathbf{X}\"},\"𝛙\":{\"math\":\"\\\\mathbf{\\\\psi}\"},\"𝛚\":{\"math\":\"\\\\mathbf{\\\\omega}\"},\"𝛛\":{\"math\":\"\\\\partial\"},\"𝛜\":{\"math\":\"\\\\in\"},\"𝛝\":{\"math\":\"\\\\mathbf{\\\\vartheta}\"},\"𝛞\":{\"math\":\"\\\\mathbf{\\\\varkappa}\"},\"𝛟\":{\"math\":\"\\\\mathbf{\\\\phi}\"},\"𝛠\":{\"math\":\"\\\\mathbf{\\\\varrho}\"},\"𝛡\":{\"math\":\"\\\\mathbf{\\\\varpi}\"},\"𝛢\":{\"math\":\"\\\\mathsl{A}\"},\"𝛣\":{\"math\":\"\\\\mathsl{B}\"},\"𝛤\":{\"math\":\"\\\\mathsl{\\\\Gamma}\"},\"𝛥\":{\"math\":\"\\\\mathsl{\\\\Delta}\"},\"𝛦\":{\"math\":\"\\\\mathsl{E}\"},\"𝛧\":{\"math\":\"\\\\mathsl{Z}\"},\"𝛨\":{\"math\":\"\\\\mathsl{H}\"},\"𝛩\":{\"math\":\"\\\\mathsl{\\\\Theta}\"},\"𝛪\":{\"math\":\"\\\\mathsl{I}\"},\"𝛫\":{\"math\":\"\\\\mathsl{K}\"},\"𝛬\":{\"math\":\"\\\\mathsl{\\\\Lambda}\"},\"𝛭\":{\"math\":\"M\"},\"𝛮\":{\"math\":\"N\"},\"𝛯\":{\"math\":\"\\\\mathsl{\\\\Xi}\"},\"𝛰\":{\"math\":\"O\"},\"𝛱\":{\"math\":\"\\\\mathsl{\\\\Pi}\"},\"𝛲\":{\"math\":\"\\\\mathsl{P}\"},\"𝛳\":{\"math\":\"\\\\mathsl{\\\\Theta}\"},\"𝛴\":{\"math\":\"\\\\mathsl{\\\\Sigma}\"},\"𝛵\":{\"math\":\"\\\\mathsl{T}\"},\"𝛶\":{\"math\":\"\\\\mathsl{\\\\Upsilon}\"},\"𝛷\":{\"math\":\"\\\\mathsl{\\\\Phi}\"},\"𝛸\":{\"math\":\"\\\\mathsl{X}\"},\"𝛹\":{\"math\":\"\\\\mathsl{\\\\Psi}\"},\"𝛺\":{\"math\":\"\\\\mathsl{\\\\Omega}\"},\"𝛻\":{\"math\":\"\\\\mathsl{\\\\nabla}\"},\"𝛼\":{\"math\":\"\\\\mathsl{A}\"},\"𝛽\":{\"math\":\"\\\\mathsl{B}\"},\"𝛾\":{\"math\":\"\\\\mathsl{\\\\gamma}\"},\"𝛿\":{\"math\":\"\\\\mathsl{\\\\delta}\"},\"𝜀\":{\"math\":\"\\\\mathsl{E}\"},\"𝜁\":{\"math\":\"\\\\mathsl{Z}\"},\"𝜂\":{\"math\":\"\\\\mathsl{H}\"},\"𝜃\":{\"math\":\"\\\\mathsl{\\\\theta}\"},\"𝜄\":{\"math\":\"\\\\mathsl{I}\"},\"𝜅\":{\"math\":\"\\\\mathsl{K}\"},\"𝜆\":{\"math\":\"\\\\mathsl{\\\\lambda}\"},\"𝜇\":{\"math\":\"\\\\mu\"},\"𝜈\":{\"math\":\"\\\\nu\"},\"𝜉\":{\"math\":\"\\\\mathsl{\\\\xi}\"},\"𝜊\":{\"math\":\"o\"},\"𝜋\":{\"math\":\"\\\\mathsl{\\\\pi}\"},\"𝜌\":{\"math\":\"\\\\mathsl{P}\"},\"𝜍\":{\"math\":\"\\\\mathsl{\\\\varsigma}\"},\"𝜎\":{\"math\":\"\\\\mathsl{\\\\sigma}\"},\"𝜏\":{\"math\":\"\\\\mathsl{T}\"},\"𝜐\":{\"math\":\"\\\\mathsl{\\\\upsilon}\"},\"𝜑\":{\"math\":\"\\\\mathsl{\\\\varphi}\"},\"𝜒\":{\"math\":\"\\\\mathsl{X}\"},\"𝜓\":{\"math\":\"\\\\mathsl{\\\\psi}\"},\"𝜔\":{\"math\":\"\\\\mathsl{\\\\omega}\"},\"𝜕\":{\"math\":\"\\\\partial\"},\"𝜖\":{\"math\":\"\\\\in\"},\"𝜗\":{\"math\":\"\\\\mathsl{\\\\vartheta}\"},\"𝜘\":{\"math\":\"\\\\mathsl{\\\\varkappa}\"},\"𝜙\":{\"math\":\"\\\\mathsl{\\\\phi}\"},\"𝜚\":{\"math\":\"\\\\mathsl{\\\\varrho}\"},\"𝜛\":{\"math\":\"\\\\mathsl{\\\\varpi}\"},\"𝜜\":{\"math\":\"\\\\mathbit{A}\"},\"𝜝\":{\"math\":\"\\\\mathbit{B}\"},\"𝜞\":{\"math\":\"\\\\mathbit{\\\\Gamma}\"},\"𝜟\":{\"math\":\"\\\\mathbit{\\\\Delta}\"},\"𝜠\":{\"math\":\"\\\\mathbit{E}\"},\"𝜡\":{\"math\":\"\\\\mathbit{Z}\"},\"𝜢\":{\"math\":\"\\\\mathbit{H}\"},\"𝜣\":{\"math\":\"\\\\mathbit{\\\\Theta}\"},\"𝜤\":{\"math\":\"\\\\mathbit{I}\"},\"𝜥\":{\"math\":\"\\\\mathbit{K}\"},\"𝜦\":{\"math\":\"\\\\mathbit{\\\\Lambda}\"},\"𝜧\":{\"math\":\"M\"},\"𝜨\":{\"math\":\"N\"},\"𝜩\":{\"math\":\"\\\\mathbit{\\\\Xi}\"},\"𝜪\":{\"math\":\"O\"},\"𝜫\":{\"math\":\"\\\\mathbit{\\\\Pi}\"},\"𝜬\":{\"math\":\"\\\\mathbit{P}\"},\"𝜭\":{\"math\":\"\\\\mathbit{O}\"},\"𝜮\":{\"math\":\"\\\\mathbit{\\\\Sigma}\"},\"𝜯\":{\"math\":\"\\\\mathbit{T}\"},\"𝜰\":{\"math\":\"\\\\mathbit{\\\\Upsilon}\"},\"𝜱\":{\"math\":\"\\\\mathbit{\\\\Phi}\"},\"𝜲\":{\"math\":\"\\\\mathbit{X}\"},\"𝜳\":{\"math\":\"\\\\mathbit{\\\\Psi}\"},\"𝜴\":{\"math\":\"\\\\mathbit{\\\\Omega}\"},\"𝜵\":{\"math\":\"\\\\mathbit{\\\\nabla}\"},\"𝜶\":{\"math\":\"\\\\mathbit{\\\\alpha}\"},\"𝜷\":{\"math\":\"\\\\mathbit{\\\\beta}\"},\"𝜸\":{\"math\":\"\\\\mathbit{\\\\gamma}\"},\"𝜹\":{\"math\":\"\\\\mathbit{\\\\delta}\"},\"𝜺\":{\"math\":\"\\\\mathbit{\\\\epsilon}\"},\"𝜻\":{\"math\":\"\\\\mathbit{\\\\zeta}\"},\"𝜼\":{\"math\":\"\\\\mathbit{\\\\eta}\"},\"𝜽\":{\"math\":\"\\\\mathbit{\\\\theta}\"},\"𝜾\":{\"math\":\"\\\\mathbit{\\\\imath}\"},\"𝜿\":{\"math\":\"\\\\mathbit{\\\\kappa}\"},\"𝝀\":{\"math\":\"\\\\mathbit{\\\\lambda}\"},\"𝝁\":{\"math\":\"\\\\mu\"},\"𝝂\":{\"math\":\"N\"},\"𝝃\":{\"math\":\"\\\\mathbit{\\\\xi}\"},\"𝝄\":{\"math\":\"O\"},\"𝝅\":{\"math\":\"\\\\mathbit{\\\\pi}\"},\"𝝆\":{\"math\":\"\\\\mathbit{\\\\rho}\"},\"𝝇\":{\"math\":\"\\\\mathbit{\\\\varsigma}\"},\"𝝈\":{\"math\":\"\\\\mathbit{\\\\sigma}\"},\"𝝉\":{\"math\":\"\\\\mathbit{\\\\tau}\"},\"𝝊\":{\"math\":\"\\\\mathbit{\\\\upsilon}\"},\"𝝋\":{\"math\":\"\\\\mathbit{\\\\varphi}\"},\"𝝌\":{\"math\":\"\\\\mathbit{\\\\chi}\"},\"𝝍\":{\"math\":\"\\\\mathbit{\\\\psi}\"},\"𝝎\":{\"math\":\"\\\\mathbit{\\\\omega}\"},\"𝝏\":{\"math\":\"\\\\partial\"},\"𝝐\":{\"math\":\"\\\\in\"},\"𝝑\":{\"math\":\"\\\\mathbit{\\\\vartheta}\"},\"𝝒\":{\"math\":\"\\\\mathbit{\\\\varkappa}\"},\"𝝓\":{\"math\":\"\\\\mathbit{\\\\phi}\"},\"𝝔\":{\"math\":\"\\\\mathbit{\\\\varrho}\"},\"𝝕\":{\"math\":\"\\\\mathbit{\\\\varpi}\"},\"𝝖\":{\"math\":\"\\\\mathsfbf{A}\"},\"𝝗\":{\"math\":\"\\\\mathsfbf{B}\"},\"𝝘\":{\"math\":\"\\\\mathsfbf{\\\\Gamma}\"},\"𝝙\":{\"math\":\"\\\\mathsfbf{\\\\Delta}\"},\"𝝚\":{\"math\":\"\\\\mathsfbf{E}\"},\"𝝛\":{\"math\":\"\\\\mathsfbf{Z}\"},\"𝝜\":{\"math\":\"\\\\mathsfbf{H}\"},\"𝝝\":{\"math\":\"\\\\mathsfbf{\\\\Theta}\"},\"𝝞\":{\"math\":\"\\\\mathsfbf{I}\"},\"𝝟\":{\"math\":\"\\\\mathsfbf{K}\"},\"𝝠\":{\"math\":\"\\\\mathsfbf{\\\\Lambda}\"},\"𝝡\":{\"math\":\"M\"},\"𝝢\":{\"math\":\"N\"},\"𝝣\":{\"math\":\"\\\\mathsfbf{\\\\Xi}\"},\"𝝤\":{\"math\":\"O\"},\"𝝥\":{\"math\":\"\\\\mathsfbf{\\\\Pi}\"},\"𝝦\":{\"math\":\"\\\\mathsfbf{P}\"},\"𝝧\":{\"math\":\"\\\\mathsfbf{\\\\Theta}\"},\"𝝨\":{\"math\":\"\\\\mathsfbf{\\\\Sigma}\"},\"𝝩\":{\"math\":\"\\\\mathsfbf{T}\"},\"𝝪\":{\"math\":\"\\\\mathsfbf{\\\\Upsilon}\"},\"𝝫\":{\"math\":\"\\\\mathsfbf{\\\\Phi}\"},\"𝝬\":{\"math\":\"\\\\mathsfbf{X}\"},\"𝝭\":{\"math\":\"\\\\mathsfbf{\\\\Psi}\"},\"𝝮\":{\"math\":\"\\\\mathsfbf{\\\\Omega}\"},\"𝝯\":{\"math\":\"\\\\mathsfbf{\\\\nabla}\"},\"𝝰\":{\"math\":\"\\\\mathsfbf{\\\\alpha}\"},\"𝝱\":{\"math\":\"\\\\mathsfbf{\\\\beta}\"},\"𝝲\":{\"math\":\"\\\\mathsfbf{\\\\gamma}\"},\"𝝳\":{\"math\":\"\\\\mathsfbf{\\\\delta}\"},\"𝝴\":{\"math\":\"\\\\mathsfbf{\\\\varepsilon}\"},\"𝝵\":{\"math\":\"\\\\mathsfbf{\\\\zeta}\"},\"𝝶\":{\"math\":\"\\\\mathsfbf{\\\\eta}\"},\"𝝷\":{\"math\":\"\\\\mathsfbf{\\\\theta}\"},\"𝝸\":{\"math\":\"\\\\mathsfbf{\\\\imath}\"},\"𝝹\":{\"math\":\"\\\\mathsfbf{\\\\kappa}\"},\"𝝺\":{\"math\":\"\\\\mathsfbf{\\\\lambda}\"},\"𝝻\":{\"math\":\"\\\\mu\"},\"𝝼\":{\"math\":\"\\\\nu\"},\"𝝽\":{\"math\":\"\\\\mathsfbf{\\\\xi}\"},\"𝝾\":{\"math\":\"o\"},\"𝝿\":{\"math\":\"\\\\mathsfbf{\\\\pi}\"},\"𝞀\":{\"math\":\"\\\\mathsfbf{\\\\rho}\"},\"𝞁\":{\"math\":\"\\\\mathsfbf{\\\\varsigma}\"},\"𝞂\":{\"math\":\"\\\\mathsfbf{\\\\sigma}\"},\"𝞃\":{\"math\":\"\\\\mathsfbf{\\\\tau}\"},\"𝞄\":{\"math\":\"\\\\mathsfbf{\\\\upsilon}\"},\"𝞅\":{\"math\":\"\\\\mathsfbf{\\\\varphi}\"},\"𝞆\":{\"math\":\"\\\\mathsfbf{\\\\chi}\"},\"𝞇\":{\"math\":\"\\\\mathsfbf{\\\\psi}\"},\"𝞈\":{\"math\":\"\\\\mathsfbf{\\\\omega}\"},\"𝞉\":{\"math\":\"\\\\partial\"},\"𝞊\":{\"math\":\"\\\\in\"},\"𝞋\":{\"math\":\"\\\\mathsfbf{\\\\vartheta}\"},\"𝞌\":{\"math\":\"\\\\mathsfbf{\\\\varkappa}\"},\"𝞍\":{\"math\":\"\\\\mathsfbf{\\\\phi}\"},\"𝞎\":{\"math\":\"\\\\mathsfbf{\\\\varrho}\"},\"𝞏\":{\"math\":\"\\\\mathsfbf{\\\\varpi}\"},\"𝞐\":{\"math\":\"\\\\mathsfbfsl{A}\"},\"𝞑\":{\"math\":\"\\\\mathsfbfsl{B}\"},\"𝞒\":{\"math\":\"\\\\mathsfbfsl{\\\\Gamma}\"},\"𝞓\":{\"math\":\"\\\\mathsfbfsl{\\\\Delta}\"},\"𝞔\":{\"math\":\"\\\\mathsfbfsl{E}\"},\"𝞕\":{\"math\":\"\\\\mathsfbfsl{Z}\"},\"𝞖\":{\"math\":\"\\\\mathsfbfsl{H}\"},\"𝞗\":{\"math\":\"\\\\mathsfbfsl{\\\\Theta}\"},\"𝞘\":{\"math\":\"\\\\mathsfbfsl{I}\"},\"𝞙\":{\"math\":\"\\\\mathsfbfsl{K}\"},\"𝞚\":{\"math\":\"\\\\mathsfbfsl{\\\\Lambda}\"},\"𝞛\":{\"math\":\"\\\\mathsfbfsl{M}\"},\"𝞜\":{\"math\":\"\\\\mathsfbfsl{N}\"},\"𝞝\":{\"math\":\"\\\\mathsfbfsl{\\\\Xi}\"},\"𝞞\":{\"math\":\"\\\\mathsfbfsl{O}\"},\"𝞟\":{\"math\":\"\\\\mathsfbfsl{\\\\Pi}\"},\"𝞠\":{\"math\":\"\\\\mathsfbfsl{P}\"},\"𝞡\":{\"math\":\"\\\\mathsfbfsl{\\\\Theta}\"},\"𝞢\":{\"math\":\"\\\\mathsfbfsl{\\\\Sigma}\"},\"𝞣\":{\"math\":\"\\\\mathsfbfsl{T}\"},\"𝞤\":{\"math\":\"\\\\mathsfbfsl{\\\\Upsilon}\"},\"𝞥\":{\"math\":\"\\\\mathsfbfsl{\\\\Phi}\"},\"𝞦\":{\"math\":\"\\\\mathsfbfsl{X}\"},\"𝞧\":{\"math\":\"\\\\mathsfbfsl{\\\\Psi}\"},\"𝞨\":{\"math\":\"\\\\mathsfbfsl{\\\\Omega}\"},\"𝞩\":{\"math\":\"\\\\mathsfbfsl{\\\\nabla}\"},\"𝞪\":{\"math\":\"\\\\mathsfbfsl{\\\\alpha}\"},\"𝞫\":{\"math\":\"\\\\mathsfbfsl{\\\\beta}\"},\"𝞬\":{\"math\":\"\\\\mathsfbfsl{\\\\gamma}\"},\"𝞭\":{\"math\":\"\\\\mathsfbfsl{\\\\delta}\"},\"𝞮\":{\"math\":\"\\\\mathsfbfsl{\\\\varepsilon}\"},\"𝞯\":{\"math\":\"\\\\mathsfbfsl{\\\\zeta}\"},\"𝞰\":{\"math\":\"\\\\mathsfbfsl{\\\\eta}\"},\"𝞱\":{\"math\":\"\\\\mathsfbfsl{\\\\theta}\"},\"𝞲\":{\"math\":\"\\\\mathsfbfsl{\\\\imath}\"},\"𝞳\":{\"math\":\"\\\\mathsfbfsl{\\\\kappa}\"},\"𝞴\":{\"math\":\"\\\\mathsfbfsl{\\\\lambda}\"},\"𝞵\":{\"math\":\"\\\\mu\"},\"𝞶\":{\"math\":\"\\\\nu\"},\"𝞷\":{\"math\":\"\\\\mathsfbfsl{\\\\xi}\"},\"𝞸\":{\"math\":\"o\"},\"𝞹\":{\"math\":\"\\\\mathsfbfsl{\\\\pi}\"},\"𝞺\":{\"math\":\"\\\\mathsfbfsl{\\\\rho}\"},\"𝞻\":{\"math\":\"\\\\mathsfbfsl{\\\\varsigma}\"},\"𝞼\":{\"math\":\"\\\\mathsfbfsl{\\\\sigma}\"},\"𝞽\":{\"math\":\"\\\\mathsfbfsl{\\\\tau}\"},\"𝞾\":{\"math\":\"\\\\mathsfbfsl{\\\\upsilon}\"},\"𝞿\":{\"math\":\"\\\\mathsfbfsl{\\\\varphi}\"},\"𝟀\":{\"math\":\"\\\\mathsfbfsl{\\\\chi}\"},\"𝟁\":{\"math\":\"\\\\mathsfbfsl{\\\\psi}\"},\"𝟂\":{\"math\":\"\\\\mathsfbfsl{\\\\omega}\"},\"𝟃\":{\"math\":\"\\\\partial\"},\"𝟄\":{\"math\":\"\\\\in\"},\"𝟅\":{\"math\":\"\\\\mathsfbfsl{\\\\vartheta}\"},\"𝟆\":{\"math\":\"\\\\mathsfbfsl{\\\\varkappa}\"},\"𝟇\":{\"math\":\"\\\\mathsfbfsl{\\\\phi}\"},\"𝟈\":{\"math\":\"\\\\mathsfbfsl{\\\\varrho}\"},\"𝟉\":{\"math\":\"\\\\mathsfbfsl{\\\\varpi}\"},\"𝟊\":{\"math\":\"\\\\mbfDigamma\"},\"𝟋\":{\"math\":\"\\\\mbfdigamma\"},\"𝟎\":{\"math\":\"\\\\mathbf{0}\"},\"𝟏\":{\"math\":\"\\\\mathbf{1}\"},\"𝟐\":{\"math\":\"\\\\mathbf{2}\"},\"𝟑\":{\"math\":\"\\\\mathbf{3}\"},\"𝟒\":{\"math\":\"\\\\mathbf{4}\"},\"𝟓\":{\"math\":\"\\\\mathbf{5}\"},\"𝟔\":{\"math\":\"\\\\mathbf{6}\"},\"𝟕\":{\"math\":\"\\\\mathbf{7}\"},\"𝟖\":{\"math\":\"\\\\mathbf{8}\"},\"𝟗\":{\"math\":\"\\\\mathbf{9}\"},\"𝟘\":{\"math\":\"\\\\mathbb{0}\"},\"𝟙\":{\"math\":\"\\\\mathbb{1}\"},\"𝟚\":{\"math\":\"\\\\mathbb{2}\"},\"𝟛\":{\"math\":\"\\\\mathbb{3}\"},\"𝟜\":{\"math\":\"\\\\mathbb{4}\"},\"𝟝\":{\"math\":\"\\\\mathbb{5}\"},\"𝟞\":{\"math\":\"\\\\mathbb{6}\"},\"𝟟\":{\"math\":\"\\\\mathbb{7}\"},\"𝟠\":{\"math\":\"\\\\mathbb{8}\"},\"𝟡\":{\"math\":\"\\\\mathbb{9}\"},\"𝟢\":{\"math\":\"\\\\mathsf{0}\"},\"𝟣\":{\"math\":\"\\\\mathsf{1}\"},\"𝟤\":{\"math\":\"\\\\mathsf{2}\"},\"𝟥\":{\"math\":\"\\\\mathsf{3}\"},\"𝟦\":{\"math\":\"\\\\mathsf{4}\"},\"𝟧\":{\"math\":\"\\\\mathsf{5}\"},\"𝟨\":{\"math\":\"\\\\mathsf{6}\"},\"𝟩\":{\"math\":\"\\\\mathsf{7}\"},\"𝟪\":{\"math\":\"\\\\mathsf{8}\"},\"𝟫\":{\"math\":\"\\\\mathsf{9}\"},\"𝟬\":{\"math\":\"\\\\mathsfbf{0}\"},\"𝟭\":{\"math\":\"\\\\mathsfbf{1}\"},\"𝟮\":{\"math\":\"\\\\mathsfbf{2}\"},\"𝟯\":{\"math\":\"\\\\mathsfbf{3}\"},\"𝟰\":{\"math\":\"\\\\mathsfbf{4}\"},\"𝟱\":{\"math\":\"\\\\mathsfbf{5}\"},\"𝟲\":{\"math\":\"\\\\mathsfbf{6}\"},\"𝟳\":{\"math\":\"\\\\mathsfbf{7}\"},\"𝟴\":{\"math\":\"\\\\mathsfbf{8}\"},\"𝟵\":{\"math\":\"\\\\mathsfbf{9}\"},\"𝟶\":{\"math\":\"\\\\mathtt{0}\"},\"𝟷\":{\"math\":\"\\\\mathtt{1}\"},\"𝟸\":{\"math\":\"\\\\mathtt{2}\"},\"𝟹\":{\"math\":\"\\\\mathtt{3}\"},\"𝟺\":{\"math\":\"\\\\mathtt{4}\"},\"𝟻\":{\"math\":\"\\\\mathtt{5}\"},\"𝟼\":{\"math\":\"\\\\mathtt{6}\"},\"𝟽\":{\"math\":\"\\\\mathtt{7}\"},\"𝟾\":{\"math\":\"\\\\mathtt{8}\"},\"𝟿\":{\"math\":\"\\\\mathtt{9}\"}}");

/***/ }),

/***/ "../node_modules/unicode2latex/tables/ascii.json":
/*!*******************************************************!*\
  !*** ../node_modules/unicode2latex/tables/ascii.json ***!
  \*******************************************************/
/*! exports provided: #, $, %, &, /​, <, >, \, ^, _, i︠a︡, {, }, ~,  , ¡, ¢, £, ¤, ¥, ¦, §, ¨, ©, ª, «, ¬, ­, ®, ¯, °, ±, ², ³, ´, µ, ¶, ·, ¸, ¹, º, », ¼, ½, ¾, ¿, À, Á, Â, Ã, Ä, Å, Æ, Ç, È, É, Ê, Ë, Ì, Í, Î, Ï, Ð, Ñ, Ò, Ó, Ô, Õ, Ö, ×, Ø, Ù, Ú, Û, Ü, Ý, Þ, ß, à, á, â, ã, ä, å, æ, ç, è, é, ê, ë, ì, í, î, ï, ð, ñ, ò, ó, ô, õ, ö, ÷, ø, ù, ú, û, ü, ý, þ, ÿ, Ā, ā, Ă, ă, Ą, ą, Ć, ć, Ĉ, ĉ, Ċ, ċ, Č, č, Ď, ď, Đ, đ, Ē, ē, Ĕ, ĕ, Ė, ė, Ę, ę, Ě, ě, Ĝ, ĝ, Ğ, ğ, Ġ, ġ, Ģ, ģ, Ĥ, ĥ, Ħ, ħ, Ĩ, ĩ, Ī, ī, Ĭ, ĭ, Į, į, İ, ı, Ĳ, ĳ, Ĵ, ĵ, Ķ, ķ, ĸ, Ĺ, ĺ, Ļ, ļ, Ľ, ľ, Ŀ, ŀ, Ł, ł, Ń, ń, Ņ, ņ, Ň, ň, ŉ, Ŋ, ŋ, Ō, ō, Ŏ, ŏ, Ő, ő, Œ, œ, Ŕ, ŕ, Ŗ, ŗ, Ř, ř, Ś, ś, Ŝ, ŝ, Ş, ş, Š, š, Ţ, ţ, Ť, ť, Ŧ, ŧ, Ũ, ũ, Ū, ū, Ŭ, ŭ, Ů, ů, Ű, ű, Ų, ų, Ŵ, ŵ, Ŷ, ŷ, Ÿ, Ź, ź, Ż, ż, Ž, ž, ſ, ƒ, ƕ, ƞ, ƪ, Ƶ, ƺ, ǂ, Ǎ, ǎ, Ǐ, ǐ, Ǒ, ǒ, Ǔ, ǔ, Ǧ, ǧ, Ǩ, ǩ, Ǫ, ǫ, ǰ, Ǵ, ǵ, Ȩ, ȩ, ȷ, ɐ, ɒ, ɔ, ɖ, ɘ, ə, ɛ, ɡ, ɣ, ɤ, ɥ, ɬ, ɭ, ɯ, ɰ, ɱ, ɲ, ɳ, ɷ, ɸ, ɹ, ɺ, ɻ, ɼ, ɽ, ɾ, ɿ, ʂ, ʃ, ʇ, ʈ, ʊ, ʋ, ʌ, ʍ, ʎ, ʐ, ʒ, ʔ, ʕ, ʖ, ʞ, ʤ, ʧ, ʰ, ʲ, ʳ, ʷ, ʸ, ʹ, ʻ, ʼ, ʽ, ʿ, ˆ, ˇ, ˈ, ˉ, ˌ, ː, ˑ, ˒, ˓, ˔, ˕, ˘, ˙, ˚, ˛, ˜, ˝, ˡ, ˢ, ˣ, ˥, ˦, ˧, ˨, ˩, ̀, ̀̄, ̄̀, ̀̇, ̇̀, ́, ́̄, ̄́, ́̌, ̌́, ̂, ̂̇, ̇̂, ̃, ̃̇, ̇̃, ̄, ̅, ̆, ̆̄, ̄̆, ̇, ̇́, ́̇, ̇̆, ̆̇, ̈, ̉, ̊, ̊̄, ̄̊, ̋, ̌, ̍, ̎, ̏, ̐, ̑, ̒, ̕, ̖, ̘, ̙, ̚, ̜, ̝, ̞, ̟, ̡, ̢, ̣, ̤, ̥, ̧, ̨, ̩, ̪, ̫, ̬, ̯, ̰, ̱, ̲, ̴, ̵, ̶, ̷, ̸, ̹, ̺, ̻, ̼, ̽, ͡, ʹ, ͵, ;, Ά, Έ, Ή, Ί, Ό, Ύ, Ώ, ΐ, Α, Β, Γ, Δ, Ε, Ζ, Η, Θ, Ι, Κ, Λ, Μ, Ν, Ξ, Ο, Π, Ρ, Σ, Τ, Υ, Φ, Χ, Ψ, Ω, Ϊ, Ϋ, ά, έ, ή, ί, ΰ, α, β, γ, δ, ε, ζ, η, θ, ι, κ, λ, μ, ν, ξ, ο, π, ρ, ς, σ, τ, υ, φ, χ, ψ, ω, ϊ, ϋ, ό, ύ, ώ, ϐ, ϑ, ϒ, ϕ, ϖ, Ϙ, ϙ, Ϛ, ϛ, Ϝ, ϝ, Ϟ, ϟ, Ϡ, ϡ, ϰ, ϱ, ϴ, ϵ, ϶, Ё, Ђ, Ѓ, Є, Ѕ, І, Ї, Ј, Љ, Њ, Ћ, Ќ, Ў, Џ, А, Б, В, Г, Д, Е, Ж, З, И, Й, К, Л, М, Н, О, П, Р, С, Т, У, Ф, Х, Ц, Ч, Ш, Щ, Ъ, Ы, Ь, Э, Ю, Я, а, б, в, г, д, е, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я, ё, ђ, ѓ, є, ѕ, і, ї, ј, љ, њ, ћ, ќ, ў, џ, Ѡ, ѡ, Ѣ, Ѥ, ѥ, Ѧ, ѧ, Ѩ, ѩ, Ѫ, Ѭ, ѭ, Ѯ, ѯ, Ѱ, ѱ, Ѳ, Ѵ, Ѹ, ѹ, Ѻ, ѻ, Ѽ, ѽ, Ѿ, ѿ, Ҁ, ҁ, ҂, ҈, ҉, Ҍ, ҍ, Ҏ, ҏ, Ґ, ґ, Ғ, ғ, Ҕ, ҕ, Җ, җ, Ҙ, ҙ, Қ, қ, Ҝ, ҝ, Ҟ, ҟ, Ҡ, ҡ, Ң, ң, Ҥ, ҥ, Ҧ, ҧ, Ҩ, ҩ, Ҫ, ҫ, Ҭ, ҭ, Ү, ү, Ұ, ұ, Ҳ, ҳ, Ҵ, ҵ, Ҷ, ҷ, Ҹ, ҹ, Һ, һ, Ҽ, ҽ, Ҿ, ҿ, Ӏ, Ӄ, ӄ, Ӈ, ӈ, Ӌ, ӌ, Ӕ, ӕ, Ә, ә, Ӡ, ӡ, Ө, ө, ࡱ, ᵃ, ᵇ, ᵈ, ᵉ, ᵍ, ᵏ, ᵐ, ᵒ, ᵖ, ᵗ, ᵘ, ᵛ, ᶜ, ᶠ, ᶻ, Ḃ, ḃ, Ḅ, ḅ, Ḇ, ḇ, Ḋ, ḋ, Ḍ, ḍ, Ḏ, ḏ, Ḑ, ḑ, Ḝ, ḝ, Ḟ, ḟ, Ḡ, ḡ, Ḣ, ḣ, Ḥ, ḥ, Ḧ, ḧ, Ḩ, ḩ, Ḱ, ḱ, Ḳ, ḳ, Ḵ, ḵ, Ḷ, ḷ, Ḻ, ḻ, Ḿ, ḿ, Ṁ, ṁ, Ṃ, ṃ, Ṅ, ṅ, Ṇ, ṇ, Ṉ, ṉ, Ṕ, ṕ, Ṗ, ṗ, Ṙ, ṙ, Ṛ, ṛ, Ṟ, ṟ, Ṡ, ṡ, Ṣ, ṣ, Ṫ, ṫ, Ṭ, ṭ, Ṯ, ṯ, Ṽ, ṽ, Ṿ, ṿ, Ẁ, ẁ, Ẃ, ẃ, Ẅ, ẅ, Ẇ, ẇ, Ẉ, ẉ, Ẋ, ẋ, Ẍ, ẍ, Ẏ, ẏ, Ẑ, ẑ, Ẓ, ẓ, Ẕ, ẕ, ẖ, ẗ, ẘ, ẙ, Ạ, ạ, Ẹ, ẹ, Ẽ, ẽ, Ị, ị, Ọ, ọ, Ụ, ụ, Ỳ, ỳ, Ỵ, ỵ, Ỹ, ỹ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , ​, ‌, ‐, ‑, ‒, –, —, ―, ‖, ‗, ‘, ’, ‚, ‛, “, ”, „, ‟, †, ‡, •, ‣, ․, ‥, …, ‧,  , ‰, ‱, ′, ″, ‴, ‵, ‶, ‷, ‸, ‹, ›, ‼, ‾, ⁃, ⁄, ⁇, ⁈, ⁉, ⁊, ⁐, ⁗,  , ⁠, ⁰, ⁱ, ⁴, ⁵, ⁶, ⁷, ⁸, ⁹, ⁺, ⁻, ⁼, ⁽, ⁾, ⁿ, ₀, ₁, ₂, ₃, ₄, ₅, ₆, ₇, ₈, ₉, ₊, ₋, ₌, ₍, ₎, ₐ, ₑ, ₒ, ₓ, ₔ, ₕ, ₖ, ₗ, ₘ, ₙ, ₚ, ₛ, ₜ, ₧, €, ⃐, ⃑, ⃒, ⃖, ⃗, ⃛, ⃜, ⃝, ⃞, ⃟, ⃡, ⃤, ⃧, ⃨, ⃩, ⃬, ⃭, ⃮, ⃯, ⃰, ℀, ℁, ℂ, ℃, ℅, ℆, ℇ, ℉, ℊ, ℋ, ℌ, ℍ, ℎ, ℏ, ℐ, ℑ, ℒ, ℓ, ℕ, №, ℗, ℘, ℙ, ℚ, ℛ, ℜ, ℝ, ℞, ℠, ℡, ™, ℤ, Ω, ℧, ℨ, ℩, K, Å, ℬ, ℭ, ℮, ℯ, ℰ, ℱ, Ⅎ, ℳ, ℴ, ℵ, ℶ, ℷ, ℸ, ℼ, ℽ, ℾ, ℿ, ⅀, ⅁, ⅂, ⅃, ⅄, ⅅ, ⅆ, ⅇ, ⅈ, ⅉ, ⅊, ⅋, ⅐, ⅑, ⅒, ⅓, ⅔, ⅕, ⅖, ⅗, ⅘, ⅙, ⅚, ⅛, ⅜, ⅝, ⅞, ⅟, Ⅰ, Ⅱ, Ⅲ, Ⅳ, Ⅴ, Ⅵ, Ⅶ, Ⅷ, Ⅸ, Ⅹ, Ⅺ, Ⅻ, Ⅼ, Ⅽ, Ⅾ, Ⅿ, ⅰ, ⅱ, ⅲ, ⅳ, ⅴ, ⅵ, ⅶ, ⅷ, ⅸ, ⅹ, ⅺ, ⅻ, ⅼ, ⅽ, ⅾ, ⅿ, ↉, ←, ↑, →, ↓, ↔, ↕, ↖, ↗, ↘, ↙, ↚, ↛, ↜, ↝, ↞, ↟, ↠, ↡, ↢, ↣, ↤, ↥, ↦, ↧, ↨, ↩, ↪, ↫, ↬, ↭, ↮, ↯, ↰, ↱, ↲, ↳, ↴, ↵, ↶, ↷, ↸, ↹, ↺, ↻, ↼, ↽, ↾, ↿, ⇀, ⇁, ⇂, ⇃, ⇄, ⇅, ⇆, ⇇, ⇈, ⇉, ⇊, ⇋, ⇌, ⇍, ⇎, ⇏, ⇐, ⇑, ⇒, ⇓, ⇔, ⇕, ⇖, ⇗, ⇘, ⇙, ⇚, ⇛, ⇜, ⇝, ⇞, ⇟, ⇠, ⇡, ⇢, ⇣, ⇤, ⇥, ⇦, ⇧, ⇨, ⇩, ⇪, ⇴, ⇵, ⇶, ⇷, ⇸, ⇹, ⇺, ⇻, ⇼, ⇽, ⇾, ⇿, ∀, ∁, ∂, ∃, ∄, ∅, ∆, ∇, ∈, ∉, ∊, ∋, ∌, ∍, ∎, ∏, ∐, ∑, −, ∓, ∔, ∕, ∖, ∗, ∘, ∙, √, ∛, ∜, ∝, ∞, ∟, ∠, ∡, ∢, ∣, ∤, ∥, ∦, ∧, ∨, ∩, ∪, ∫, ∬, ∭, ∮, ∯, ∰, ∱, ∲, ∳, ∴, ∵, ∶, ∷, ∸, ∹, ∺, ∻, ∼, ∽, ∾, ∿, ≀, ≁, ≂, ≂̸, ≃, ≄, ≅, ≆, ≇, ≈, ≉, ≊, ≋, ≋̸, ≌, ≍, ≎, ≎̸, ≏, ≏̸, ≐, ≐̸, ≑, ≒, ≓, ≔, ≕, ≖, ≗, ≘, ≙, ≛, ≜, ≝, ≞, ≠, ≡, ≢, ≣, ≤, ≥, ≦, ≧, ≨, ≨︀, ≩, ≩︀, ≪, ≪̸, ≫, ≫̸, ≬, ≭, ≮, ≯, ≰, ≱, ≲, ≳, ≶, ≷, ≸, ≹, ≺, ≻, ≼, ≽, ≾, ≾̸, ≿, ≿̸, ⊀, ⊁, ⊂, ⊃, ⊄, ⊅, ⊆, ⊇, ⊈, ⊉, ⊊, ⊊︀, ⊋, ⊋︀, ⊌, ⊍, ⊎, ⊏, ⊏̸, ⊐, ⊐̸, ⊑, ⊒, ⊓, ⊔, ⊕, ⊖, ⊗, ⊘, ⊙, ⊚, ⊛, ⊜, ⊝, ⊞, ⊟, ⊠, ⊡, ⊢, ⊣, ⊤, ⊥, ⊦, ⊧, ⊨, ⊩, ⊪, ⊫, ⊬, ⊭, ⊮, ⊯, ⊰, ⊱, ⊲, ⊳, ⊴, ⊵, ⊶, ⊷, ⊸, ⊹, ⊺, ⊻, ⊼, ⊽, ⊾, ⊿, ⋂, ⋃, ⋄, ⋅, ⋆, ⋇, ⋈, ⋉, ⋊, ⋋, ⋌, ⋍, ⋎, ⋏, ⋐, ⋑, ⋒, ⋓, ⋔, ⋕, ⋖, ⋗, ⋘, ⋙, ⋚, ⋛, ⋜, ⋝, ⋞, ⋟, ⋠, ⋡, ⋢, ⋣, ⋤, ⋥, ⋦, ⋧, ⋨, ⋩, ⋪, ⋫, ⋬, ⋭, ⋮, ⋯, ⋰, ⋱, ⋲, ⋳, ⋴, ⋵, ⋶, ⋷, ⋸, ⋹, ⋺, ⋻, ⋼, ⋽, ⋾, ⋿, ⌀, ⌂, ⌅, ⌆, ⌈, ⌉, ⌊, ⌋, ⌐, ⌑, ⌒, ⌓, ⌕, ⌖, ⌗, ⌙, ⌜, ⌝, ⌞, ⌟, ⌠, ⌡, ⌢, ⌣, 〈, 〉, ⌬, ⌲, ⌶, ⌹, ⌿, ⍀, ⍇, ⍈, ⍉, ⍐, ⍓, ⍗, ⍝, ⍞, ⍟, ⍰, ⍼, ⎔, ⎛, ⎜, ⎝, ⎞, ⎟, ⎠, ⎡, ⎢, ⎣, ⎤, ⎥, ⎦, ⎧, ⎨, ⎩, ⎪, ⎫, ⎬, ⎭, ⎮, ⎯, ⎰, ⎱, ⎲, ⎳, ⎴, ⎵, ⎶, ⎷, ⎸, ⎹, ⏎, ⏜, ⏝, ⏞, ⏟, ⏠, ⏡, ⏢, ⏣, ⏤, ⏥, ⏦, ⏧, ␀, ␁, ␂, ␃, ␄, ␅, ␆, ␇, ␈, ␉, ␊, ␋, ␌, ␍, ␎, ␏, ␐, ␑, ␒, ␓, ␔, ␕, ␖, ␗, ␘, ␙, ␚, ␛, ␜, ␝, ␞, ␟, ␠, ␡, ␣, ␤, ␥, ␦, ①, ②, ③, ④, ⑤, ⑥, ⑦, ⑧, ⑨, ⑩, ⑪, ⑫, ⑬, ⑭, ⑮, ⑯, ⑰, ⑱, ⑲, ⑳, ⑴, ⑵, ⑶, ⑷, ⑸, ⑹, ⑺, ⑻, ⑼, ⑽, ⑾, ⑿, ⒀, ⒁, ⒂, ⒃, ⒄, ⒅, ⒆, ⒇, ⒈, ⒉, ⒊, ⒋, ⒌, ⒍, ⒎, ⒏, ⒐, ⒑, ⒒, ⒓, ⒔, ⒕, ⒖, ⒗, ⒘, ⒙, ⒚, ⒛, ⒜, ⒝, ⒞, ⒟, ⒠, ⒡, ⒢, ⒣, ⒤, ⒥, ⒦, ⒧, ⒨, ⒩, ⒪, ⒫, ⒬, ⒭, ⒮, ⒯, ⒰, ⒱, ⒲, ⒳, ⒴, ⒵, Ⓐ, Ⓑ, Ⓒ, Ⓓ, Ⓔ, Ⓕ, Ⓖ, Ⓗ, Ⓘ, Ⓙ, Ⓚ, Ⓛ, Ⓜ, Ⓝ, Ⓞ, Ⓟ, Ⓠ, Ⓡ, Ⓢ, Ⓣ, Ⓤ, Ⓥ, Ⓦ, Ⓧ, Ⓨ, Ⓩ, ⓐ, ⓑ, ⓒ, ⓓ, ⓔ, ⓕ, ⓖ, ⓗ, ⓘ, ⓙ, ⓚ, ⓛ, ⓜ, ⓝ, ⓞ, ⓟ, ⓠ, ⓡ, ⓢ, ⓣ, ⓤ, ⓥ, ⓦ, ⓧ, ⓨ, ⓩ, ⓪, ─, ━, │, ┃, ┄, ┅, ┆, ┇, ┈, ┉, ┊, ┋, ┌, ┍, ┎, ┏, ┐, ┑, ┒, ┓, └, ┕, ┖, ┗, ┘, ┙, ┚, ┛, ├, ┝, ┞, ┟, ┠, ┡, ┢, ┣, ┤, ┥, ┦, ┧, ┨, ┩, ┪, ┫, ┬, ┭, ┮, ┯, ┰, ┱, ┲, ┳, ┴, ┵, ┶, ┷, ┸, ┹, ┺, ┻, ┼, ┽, ┾, ┿, ╀, ╁, ╂, ╃, ╄, ╅, ╆, ╇, ╈, ╉, ╊, ╋, ╌, ╍, ╎, ╏, ═, ║, ╒, ╓, ╔, ╕, ╖, ╗, ╘, ╙, ╚, ╛, ╜, ╝, ╞, ╟, ╠, ╡, ╢, ╣, ╤, ╥, ╦, ╧, ╨, ╩, ╪, ╫, ╬, ╭, ╮, ╯, ╰, ╱, ╲, ╳, ╼, ╽, ╾, ╿, ▀, ▄, █, ▌, ▐, ░, ▒, ▓, ■, □, ▢, ▣, ▤, ▥, ▦, ▧, ▨, ▩, ▪, ▫, ▬, ▭, ▮, ▯, ▰, ▲, △, ▴, ▵, ▶, ▷, ▸, ▹, ►, ▻, ▼, ▽, ▾, ▿, ◀, ◁, ◂, ◃, ◄, ◅, ◆, ◇, ◈, ◉, ◊, ○, ◌, ◍, ◎, ●, ◐, ◑, ◒, ◓, ◔, ◕, ◖, ◗, ◘, ◙, ◚, ◛, ◜, ◝, ◞, ◟, ◠, ◡, ◢, ◣, ◤, ◥, ◦, ◧, ◨, ◩, ◪, ◫, ◬, ◭, ◮, ◯, ◰, ◱, ◲, ◳, ◴, ◵, ◶, ◷, ◸, ◹, ◺, ◻, ◼, ◽, ◾, ◿, ★, ☆, ☉, ☎, ☐, ☑, ☒, ☓, ☕, ☛, ☞, ☠, ☡, ☢, ☣, ☯, ☹, ☺, ☻, ☼, ☽, ☾, ☿, ♀, ♁, ♂, ♃, ♄, ♅, ♆, ♇, ♈, ♉, ♊, ♋, ♌, ♍, ♎, ♏, ♐, ♑, ♒, ♓, ♠, ♡, ♢, ♣, ♤, ♥, ♦, ♧, ♩, ♪, ♫, ♬, ♭, ♮, ♯, ♻, ♾, ⚀, ⚁, ⚂, ⚃, ⚄, ⚅, ⚆, ⚇, ⚈, ⚉, ⚓, ⚔, ⚠, ⚥, ⚪, ⚫, ⚬, ⚲, ✁, ✂, ✃, ✄, ✆, ✇, ✈, ✉, ✌, ✍, ✎, ✏, ✐, ✑, ✒, ✓, ✔, ✕, ✖, ✗, ✘, ✙, ✚, ✛, ✜, ✝, ✞, ✟, ✠, ✡, ✢, ✣, ✤, ✥, ✦, ✧, ✩, ✪, ✫, ✬, ✭, ✮, ✯, ✰, ✱, ✲, ✳, ✴, ✵, ✶, ✷, ✸, ✹, ✺, ✻, ✼, ✽, ✾, ✿, ❀, ❁, ❂, ❃, ❄, ❅, ❆, ❇, ❈, ❉, ❊, ❋, ❍, ❏, ❐, ❑, ❒, ❖, ❘, ❙, ❚, ❛, ❜, ❝, ❞, ❡, ❢, ❣, ❤, ❥, ❦, ❧, ❲, ❳, ❶, ❷, ❸, ❹, ❺, ❻, ❼, ❽, ❾, ❿, ➀, ➁, ➂, ➃, ➄, ➅, ➆, ➇, ➈, ➉, ➊, ➋, ➌, ➍, ➎, ➏, ➐, ➑, ➒, ➓, ➔, ➘, ➙, ➚, ➛, ➜, ➝, ➞, ➟, ➠, ➡, ➢, ➣, ➤, ➥, ➦, ➧, ➨, ➩, ➪, ➫, ➬, ➭, ➮, ➯, ➱, ➲, ➳, ➴, ➵, ➶, ➷, ➸, ➹, ➺, ➻, ➼, ➽, ➾, ⟀, ⟁, ⟂, ⟃, ⟄, ⟅, ⟆, ⟇, ⟈, ⟉, ⟌, ⟐, ⟑, ⟒, ⟓, ⟔, ⟕, ⟖, ⟗, ⟘, ⟙, ⟚, ⟛, ⟜, ⟝, ⟞, ⟟, ⟠, ⟡, ⟢, ⟣, ⟤, ⟥, ⟦, ⟧, ⟨, ⟩, ⟪, ⟫, ⟬, ⟭, ⟮, ⟯, ⟰, ⟱, ⟲, ⟳, ⟴, ⟵, ⟶, ⟷, ⟸, ⟹, ⟺, ⟻, ⟼, ⟽, ⟾, ⟿, ⤀, ⤁, ⤂, ⤃, ⤄, ⤆, ⤇, ⤈, ⤉, ⤊, ⤋, ⤌, ⤍, ⤎, ⤏, ⤐, ⤑, ⤒, ⤓, ⤔, ⤕, ⤖, ⤗, ⤘, ⤙, ⤚, ⤛, ⤜, ⤝, ⤞, ⤟, ⤠, ⤡, ⤢, ⤫, ⤬, ⤭, ⤮, ⤯, ⤰, ⤱, ⤲, ⤴, ⤵, ⤸, ⤹, ⤺, ⤻, ⤼, ⤽, ⤾, ⤿, ⥀, ⥁, ⥂, ⥃, ⥄, ⥅, ⥆, ⥇, ⥈, ⥉, ⥊, ⥋, ⥌, ⥍, ⥎, ⥏, ⥐, ⥑, ⥒, ⥓, ⥔, ⥕, ⥖, ⥗, ⥘, ⥙, ⥚, ⥛, ⥜, ⥝, ⥞, ⥟, ⥠, ⥡, ⥢, ⥣, ⥤, ⥥, ⥦, ⥧, ⥨, ⥩, ⥪, ⥫, ⥬, ⥭, ⥮, ⥯, ⥰, ⥱, ⥲, ⥳, ⥴, ⥵, ⥶, ⥷, ⥸, ⥹, ⥺, ⥻, ⥾, ⥿, ⦀, ⦁, ⦂, ⦃, ⦄, ⦆, ⦇, ⦈, ⦉, ⦊, ⦋, ⦌, ⦍, ⦎, ⦏, ⦐, ⦑, ⦒, ⦓, ⦕, ⦖, ⦗, ⦘, ⦙, ⦚, ⦛, ⦜, ⦝, ⦞, ⦟, ⦠, ⦡, ⦢, ⦣, ⦤, ⦥, ⦦, ⦧, ⦨, ⦩, ⦪, ⦫, ⦬, ⦭, ⦮, ⦯, ⦰, ⦱, ⦲, ⦳, ⦴, ⦷, ⦸, ⦹, ⦺, ⦻, ⦼, ⦽, ⦾, ⦿, ⧀, ⧁, ⧂, ⧃, ⧄, ⧅, ⧆, ⧇, ⧈, ⧉, ⧊, ⧋, ⧌, ⧍, ⧎, ⧏, ⧏̸, ⧐, ⧐̸, ⧑, ⧒, ⧓, ⧔, ⧕, ⧖, ⧗, ⧘, ⧙, ⧚, ⧛, ⧝, ⧞, ⧟, ⧠, ⧡, ⧢, ⧣, ⧤, ⧥, ⧦, ⧧, ⧨, ⧩, ⧪, ⧫, ⧬, ⧭, ⧮, ⧯, ⧰, ⧱, ⧲, ⧳, ⧴, ⧵, ⧶, ⧷, ⧸, ⧹, ⧺, ⧻, ⧼, ⧽, ⧾, ⧿, ⨀, ⨁, ⨂, ⨃, ⨄, ⨅, ⨆, ⨇, ⨈, ⨉, ⨊, ⨋, ⨌, ⨍, ⨎, ⨏, ⨑, ⨒, ⨓, ⨔, ⨕, ⨖, ⨗, ⨘, ⨙, ⨚, ⨛, ⨜, ⨝, ⨞, ⨟, ⨠, ⨡, ⨢, ⨣, ⨤, ⨦, ⨧, ⨨, ⨩, ⨫, ⨬, ⨯, ⨰, ⨱, ⨲, ⨳, ⨶, ⨷, ⨸, ⨹, ⨺, ⨻, ⨽, ⨾, ⨿, ⩀, ⩁, ⩂, ⩃, ⩄, ⩅, ⩆, ⩇, ⩈, ⩉, ⩊, ⩋, ⩌, ⩍, ⩎, ⩏, ⩐, ⩑, ⩒, ⩓, ⩔, ⩖, ⩗, ⩘, ⩙, ⩚, ⩛, ⩜, ⩝, ⩞, ⩟, ⩠, ⩡, ⩢, ⩤, ⩥, ⩦, ⩧, ⩨, ⩩, ⩪, ⩫, ⩬, ⩭, ⩮, ⩯, ⩰, ⩱, ⩲, ⩳, ⩴, ⩵, ⩶, ⩷, ⩸, ⩹, ⩺, ⩻, ⩼, ⩽, ⩽̸, ⩾, ⩾̸, ⩿, ⪀, ⪁, ⪂, ⪃, ⪄, ⪅, ⪆, ⪇, ⪈, ⪉, ⪊, ⪋, ⪌, ⪍, ⪎, ⪏, ⪐, ⪑, ⪒, ⪓, ⪔, ⪕, ⪖, ⪗, ⪘, ⪙, ⪚, ⪛, ⪜, ⪝, ⪞, ⪟, ⪠, ⪡, ⪡̸, ⪢, ⪢̸, ⪣, ⪤, ⪥, ⪦, ⪧, ⪨, ⪩, ⪪, ⪫, ⪬, ⪭, ⪮, ⪯, ⪯̸, ⪰, ⪰̸, ⪱, ⪲, ⪳, ⪴, ⪵, ⪶, ⪷, ⪸, ⪹, ⪺, ⪻, ⪼, ⪽, ⪾, ⪿, ⫀, ⫁, ⫂, ⫃, ⫄, ⫅, ⫅̸, ⫆, ⫆̸, ⫇, ⫈, ⫉, ⫊, ⫋, ⫌, ⫍, ⫎, ⫏, ⫐, ⫑, ⫒, ⫓, ⫔, ⫕, ⫖, ⫗, ⫘, ⫙, ⫚, ⫛, ⫝̸, ⫝, ⫝̸, ⫞, ⫟, ⫠, ⫡, ⫢, ⫣, ⫤, ⫥, ⫦, ⫧, ⫨, ⫩, ⫪, ⫬, ⫭, ⫮, ⫯, ⫰, ⫱, ⫲, ⫳, ⫴, ⫵, ⫶, ⫷, ⫸, ⫹, ⫺, ⫻, ⫼, ⫽, ⫽⃥, ⫾, ⫿, ⬒, ⬓, ⬔, ⬕, ⬖, ⬗, ⬘, ⬙, ⬚, ⬛, ⬜, ⬝, ⬞, ⬟, ⬠, ⬡, ⬢, ⬣, ⬤, ⬥, ⬦, ⬧, ⬨, ⬩, ⬪, ⬫, ⬬, ⬭, ⬮, ⬯, ⬰, ⬱, ⬲, ⬳, ⬴, ⬵, ⬶, ⬷, ⬸, ⬹, ⬺, ⬻, ⬼, ⬽, ⬾, ⬿, ⭀, ⭁, ⭂, ⭃, ⭄, ⭅, ⭆, ⭇, ⭈, ⭉, ⭊, ⭋, ⭌, ⭐, ⭑, ⭒, ⭓, ⭔, 〈, 〉, 〒, 〔, 〕, 〚, 〛, 〰, ﬀ, ﬁ, ﬂ, ﬃ, ﬄ, ﬅ, ﬆ, �, 𝐀, 𝐁, 𝐂, 𝐃, 𝐄, 𝐅, 𝐆, 𝐇, 𝐈, 𝐉, 𝐊, 𝐋, 𝐌, 𝐍, 𝐎, 𝐏, 𝐐, 𝐑, 𝐒, 𝐓, 𝐔, 𝐕, 𝐖, 𝐗, 𝐘, 𝐙, 𝐚, 𝐛, 𝐜, 𝐝, 𝐞, 𝐟, 𝐠, 𝐡, 𝐢, 𝐣, 𝐤, 𝐥, 𝐦, 𝐧, 𝐨, 𝐩, 𝐪, 𝐫, 𝐬, 𝐭, 𝐮, 𝐯, 𝐰, 𝐱, 𝐲, 𝐳, 𝐴, 𝐵, 𝐶, 𝐷, 𝐸, 𝐹, 𝐺, 𝐻, 𝐼, 𝐽, 𝐾, 𝐿, 𝑀, 𝑁, 𝑂, 𝑃, 𝑄, 𝑅, 𝑆, 𝑇, 𝑈, 𝑉, 𝑊, 𝑋, 𝑌, 𝑍, 𝑎, 𝑏, 𝑐, 𝑑, 𝑒, 𝑓, 𝑔, 𝑖, 𝑗, 𝑘, 𝑙, 𝑚, 𝑛, 𝑜, 𝑝, 𝑞, 𝑟, 𝑠, 𝑡, 𝑢, 𝑣, 𝑤, 𝑥, 𝑦, 𝑧, 𝑨, 𝑩, 𝑪, 𝑫, 𝑬, 𝑭, 𝑮, 𝑯, 𝑰, 𝑱, 𝑲, 𝑳, 𝑴, 𝑵, 𝑶, 𝑷, 𝑸, 𝑹, 𝑺, 𝑻, 𝑼, 𝑽, 𝑾, 𝑿, 𝒀, 𝒁, 𝒂, 𝒃, 𝒄, 𝒅, 𝒆, 𝒇, 𝒈, 𝒉, 𝒊, 𝒋, 𝒌, 𝒍, 𝒎, 𝒏, 𝒐, 𝒑, 𝒒, 𝒓, 𝒔, 𝒕, 𝒖, 𝒗, 𝒘, 𝒙, 𝒚, 𝒛, 𝒜, 𝒞, 𝒟, 𝒢, 𝒥, 𝒦, 𝒩, 𝒪, 𝒫, 𝒬, 𝒮, 𝒯, 𝒰, 𝒱, 𝒲, 𝒳, 𝒴, 𝒵, 𝒶, 𝒷, 𝒸, 𝒹, 𝒻, 𝒽, 𝒾, 𝒿, 𝓀, 𝓁, 𝓂, 𝓃, 𝓅, 𝓆, 𝓇, 𝓈, 𝓉, 𝓊, 𝓋, 𝓌, 𝓍, 𝓎, 𝓏, 𝓐, 𝓑, 𝓒, 𝓓, 𝓔, 𝓕, 𝓖, 𝓗, 𝓘, 𝓙, 𝓚, 𝓛, 𝓜, 𝓝, 𝓞, 𝓟, 𝓠, 𝓡, 𝓢, 𝓣, 𝓤, 𝓥, 𝓦, 𝓧, 𝓨, 𝓩, 𝓪, 𝓫, 𝓬, 𝓭, 𝓮, 𝓯, 𝓰, 𝓱, 𝓲, 𝓳, 𝓴, 𝓵, 𝓶, 𝓷, 𝓸, 𝓹, 𝓺, 𝓻, 𝓼, 𝓽, 𝓾, 𝓿, 𝔀, 𝔁, 𝔂, 𝔃, 𝔄, 𝔅, 𝔇, 𝔈, 𝔉, 𝔊, 𝔍, 𝔎, 𝔏, 𝔐, 𝔑, 𝔒, 𝔓, 𝔔, 𝔖, 𝔗, 𝔘, 𝔙, 𝔚, 𝔛, 𝔜, 𝔞, 𝔟, 𝔠, 𝔡, 𝔢, 𝔣, 𝔤, 𝔥, 𝔦, 𝔧, 𝔨, 𝔩, 𝔪, 𝔫, 𝔬, 𝔭, 𝔮, 𝔯, 𝔰, 𝔱, 𝔲, 𝔳, 𝔴, 𝔵, 𝔶, 𝔷, 𝔸, 𝔹, 𝔻, 𝔼, 𝔽, 𝔾, 𝕀, 𝕁, 𝕂, 𝕃, 𝕄, 𝕆, 𝕊, 𝕋, 𝕌, 𝕍, 𝕎, 𝕏, 𝕐, 𝕒, 𝕓, 𝕔, 𝕕, 𝕖, 𝕗, 𝕘, 𝕙, 𝕚, 𝕛, 𝕜, 𝕝, 𝕞, 𝕟, 𝕠, 𝕡, 𝕢, 𝕣, 𝕤, 𝕥, 𝕦, 𝕧, 𝕨, 𝕩, 𝕪, 𝕫, 𝕬, 𝕭, 𝕮, 𝕯, 𝕰, 𝕱, 𝕲, 𝕳, 𝕴, 𝕵, 𝕶, 𝕷, 𝕸, 𝕹, 𝕺, 𝕻, 𝕼, 𝕽, 𝕾, 𝕿, 𝖀, 𝖁, 𝖂, 𝖃, 𝖄, 𝖅, 𝖆, 𝖇, 𝖈, 𝖉, 𝖊, 𝖋, 𝖌, 𝖍, 𝖎, 𝖏, 𝖐, 𝖑, 𝖒, 𝖓, 𝖔, 𝖕, 𝖖, 𝖗, 𝖘, 𝖙, 𝖚, 𝖛, 𝖜, 𝖝, 𝖞, 𝖟, 𝖠, 𝖡, 𝖢, 𝖣, 𝖤, 𝖥, 𝖦, 𝖧, 𝖨, 𝖩, 𝖪, 𝖫, 𝖬, 𝖭, 𝖮, 𝖯, 𝖰, 𝖱, 𝖲, 𝖳, 𝖴, 𝖵, 𝖶, 𝖷, 𝖸, 𝖹, 𝖺, 𝖻, 𝖼, 𝖽, 𝖾, 𝖿, 𝗀, 𝗁, 𝗂, 𝗃, 𝗄, 𝗅, 𝗆, 𝗇, 𝗈, 𝗉, 𝗊, 𝗋, 𝗌, 𝗍, 𝗎, 𝗏, 𝗐, 𝗑, 𝗒, 𝗓, 𝗔, 𝗕, 𝗖, 𝗗, 𝗘, 𝗙, 𝗚, 𝗛, 𝗜, 𝗝, 𝗞, 𝗟, 𝗠, 𝗡, 𝗢, 𝗣, 𝗤, 𝗥, 𝗦, 𝗧, 𝗨, 𝗩, 𝗪, 𝗫, 𝗬, 𝗭, 𝗮, 𝗯, 𝗰, 𝗱, 𝗲, 𝗳, 𝗴, 𝗵, 𝗶, 𝗷, 𝗸, 𝗹, 𝗺, 𝗻, 𝗼, 𝗽, 𝗾, 𝗿, 𝘀, 𝘁, 𝘂, 𝘃, 𝘄, 𝘅, 𝘆, 𝘇, 𝘈, 𝘉, 𝘊, 𝘋, 𝘌, 𝘍, 𝘎, 𝘏, 𝘐, 𝘑, 𝘒, 𝘓, 𝘔, 𝘕, 𝘖, 𝘗, 𝘘, 𝘙, 𝘚, 𝘛, 𝘜, 𝘝, 𝘞, 𝘟, 𝘠, 𝘡, 𝘢, 𝘣, 𝘤, 𝘥, 𝘦, 𝘧, 𝘨, 𝘩, 𝘪, 𝘫, 𝘬, 𝘭, 𝘮, 𝘯, 𝘰, 𝘱, 𝘲, 𝘳, 𝘴, 𝘵, 𝘶, 𝘷, 𝘸, 𝘹, 𝘺, 𝘻, 𝘼, 𝘽, 𝘾, 𝘿, 𝙀, 𝙁, 𝙂, 𝙃, 𝙄, 𝙅, 𝙆, 𝙇, 𝙈, 𝙉, 𝙊, 𝙋, 𝙌, 𝙍, 𝙎, 𝙏, 𝙐, 𝙑, 𝙒, 𝙓, 𝙔, 𝙕, 𝙖, 𝙗, 𝙘, 𝙙, 𝙚, 𝙛, 𝙜, 𝙝, 𝙞, 𝙟, 𝙠, 𝙡, 𝙢, 𝙣, 𝙤, 𝙥, 𝙦, 𝙧, 𝙨, 𝙩, 𝙪, 𝙫, 𝙬, 𝙭, 𝙮, 𝙯, 𝙰, 𝙱, 𝙲, 𝙳, 𝙴, 𝙵, 𝙶, 𝙷, 𝙸, 𝙹, 𝙺, 𝙻, 𝙼, 𝙽, 𝙾, 𝙿, 𝚀, 𝚁, 𝚂, 𝚃, 𝚄, 𝚅, 𝚆, 𝚇, 𝚈, 𝚉, 𝚊, 𝚋, 𝚌, 𝚍, 𝚎, 𝚏, 𝚐, 𝚑, 𝚒, 𝚓, 𝚔, 𝚕, 𝚖, 𝚗, 𝚘, 𝚙, 𝚚, 𝚛, 𝚜, 𝚝, 𝚞, 𝚟, 𝚠, 𝚡, 𝚢, 𝚣, 𝚤, 𝚥, 𝚨, 𝚩, 𝚪, 𝚫, 𝚬, 𝚭, 𝚮, 𝚯, 𝚰, 𝚱, 𝚲, 𝚳, 𝚴, 𝚵, 𝚶, 𝚷, 𝚸, 𝚹, 𝚺, 𝚻, 𝚼, 𝚽, 𝚾, 𝚿, 𝛀, 𝛁, 𝛂, 𝛃, 𝛄, 𝛅, 𝛆, 𝛇, 𝛈, 𝛉, 𝛊, 𝛋, 𝛌, 𝛍, 𝛎, 𝛏, 𝛐, 𝛑, 𝛒, 𝛓, 𝛔, 𝛕, 𝛖, 𝛗, 𝛘, 𝛙, 𝛚, 𝛛, 𝛜, 𝛝, 𝛞, 𝛟, 𝛠, 𝛡, 𝛢, 𝛣, 𝛤, 𝛥, 𝛦, 𝛧, 𝛨, 𝛩, 𝛪, 𝛫, 𝛬, 𝛭, 𝛮, 𝛯, 𝛰, 𝛱, 𝛲, 𝛳, 𝛴, 𝛵, 𝛶, 𝛷, 𝛸, 𝛹, 𝛺, 𝛻, 𝛼, 𝛽, 𝛾, 𝛿, 𝜀, 𝜁, 𝜂, 𝜃, 𝜄, 𝜅, 𝜆, 𝜇, 𝜈, 𝜉, 𝜊, 𝜋, 𝜌, 𝜍, 𝜎, 𝜏, 𝜐, 𝜑, 𝜒, 𝜓, 𝜔, 𝜕, 𝜖, 𝜗, 𝜘, 𝜙, 𝜚, 𝜛, 𝜜, 𝜝, 𝜞, 𝜟, 𝜠, 𝜡, 𝜢, 𝜣, 𝜤, 𝜥, 𝜦, 𝜧, 𝜨, 𝜩, 𝜪, 𝜫, 𝜬, 𝜭, 𝜮, 𝜯, 𝜰, 𝜱, 𝜲, 𝜳, 𝜴, 𝜵, 𝜶, 𝜷, 𝜸, 𝜹, 𝜺, 𝜻, 𝜼, 𝜽, 𝜾, 𝜿, 𝝀, 𝝁, 𝝂, 𝝃, 𝝄, 𝝅, 𝝆, 𝝇, 𝝈, 𝝉, 𝝊, 𝝋, 𝝌, 𝝍, 𝝎, 𝝏, 𝝐, 𝝑, 𝝒, 𝝓, 𝝔, 𝝕, 𝝖, 𝝗, 𝝘, 𝝙, 𝝚, 𝝛, 𝝜, 𝝝, 𝝞, 𝝟, 𝝠, 𝝡, 𝝢, 𝝣, 𝝤, 𝝥, 𝝦, 𝝧, 𝝨, 𝝩, 𝝪, 𝝫, 𝝬, 𝝭, 𝝮, 𝝯, 𝝰, 𝝱, 𝝲, 𝝳, 𝝴, 𝝵, 𝝶, 𝝷, 𝝸, 𝝹, 𝝺, 𝝻, 𝝼, 𝝽, 𝝾, 𝝿, 𝞀, 𝞁, 𝞂, 𝞃, 𝞄, 𝞅, 𝞆, 𝞇, 𝞈, 𝞉, 𝞊, 𝞋, 𝞌, 𝞍, 𝞎, 𝞏, 𝞐, 𝞑, 𝞒, 𝞓, 𝞔, 𝞕, 𝞖, 𝞗, 𝞘, 𝞙, 𝞚, 𝞛, 𝞜, 𝞝, 𝞞, 𝞟, 𝞠, 𝞡, 𝞢, 𝞣, 𝞤, 𝞥, 𝞦, 𝞧, 𝞨, 𝞩, 𝞪, 𝞫, 𝞬, 𝞭, 𝞮, 𝞯, 𝞰, 𝞱, 𝞲, 𝞳, 𝞴, 𝞵, 𝞶, 𝞷, 𝞸, 𝞹, 𝞺, 𝞻, 𝞼, 𝞽, 𝞾, 𝞿, 𝟀, 𝟁, 𝟂, 𝟃, 𝟄, 𝟅, 𝟆, 𝟇, 𝟈, 𝟉, 𝟊, 𝟋, 𝟎, 𝟏, 𝟐, 𝟑, 𝟒, 𝟓, 𝟔, 𝟕, 𝟖, 𝟗, 𝟘, 𝟙, 𝟚, 𝟛, 𝟜, 𝟝, 𝟞, 𝟟, 𝟠, 𝟡, 𝟢, 𝟣, 𝟤, 𝟥, 𝟦, 𝟧, 𝟨, 𝟩, 𝟪, 𝟫, 𝟬, 𝟭, 𝟮, 𝟯, 𝟰, 𝟱, 𝟲, 𝟳, 𝟴, 𝟵, 𝟶, 𝟷, 𝟸, 𝟹, 𝟺, 𝟻, 𝟼, 𝟽, 𝟾, 𝟿, default */
/*! all exports used */
/***/ (function(module) {

module.exports = JSON.parse("{\"#\":{\"math\":\"\\\\#\",\"text\":\"\\\\#\"},\"$\":{\"math\":\"\\\\$\",\"text\":\"\\\\$\"},\"%\":{\"math\":\"\\\\%\",\"text\":\"\\\\%\"},\"&\":{\"math\":\"\\\\&\",\"text\":\"\\\\&\"},\"/​\":{\"text\":\"\\\\slash\",\"commandspacer\":true},\"<\":{\"math\":\"<\"},\">\":{\"math\":\">\"},\"\\\\\":{\"math\":\"\\\\backslash\",\"text\":\"\\\\textbackslash\",\"commandspacer\":true},\"^\":{\"math\":\"\\\\sphat\",\"text\":\"\\\\^\"},\"_\":{\"math\":\"\\\\_\",\"text\":\"\\\\_\"},\"i︠a︡\":{\"text\":\"\\\\t{ia}\"},\"{\":{\"math\":\"\\\\lbrace\",\"text\":\"\\\\{\"},\"}\":{\"math\":\"\\\\rbrace\",\"text\":\"\\\\}\"},\"~\":{\"math\":\"\\\\sptilde\",\"text\":\"\\\\textasciitilde\",\"commandspacer\":true},\" \":{\"math\":\"~\",\"space\":true,\"text\":\"~\"},\"¡\":{\"text\":\"\\\\textexclamdown\",\"commandspacer\":true},\"¢\":{\"math\":\"\\\\cent\",\"text\":\"\\\\textcent\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"£\":{\"math\":\"\\\\pounds\",\"text\":\"\\\\textsterling\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"¤\":{\"text\":\"\\\\textcurrency\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"¥\":{\"math\":\"\\\\yen\",\"text\":\"\\\\textyen\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"¦\":{\"text\":\"\\\\textbrokenbar\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"§\":{\"text\":\"\\\\textsection\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"¨\":{\"math\":\"\\\\spddot\",\"text\":\"\\\\textasciidieresis\",\"commandspacer\":true},\"©\":{\"text\":\"\\\\textcopyright\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"ª\":{\"text\":\"\\\\textordfeminine\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"«\":{\"text\":\"\\\\guillemotleft\",\"commandspacer\":true},\"¬\":{\"math\":\"\\\\lnot\"},\"­\":{\"math\":\"\\\\-\",\"text\":\"\\\\-\"},\"®\":{\"math\":\"\\\\circledR\",\"text\":\"\\\\textregistered\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"¯\":{\"text\":\"\\\\textasciimacron\",\"commandspacer\":true},\"°\":{\"math\":\"^\\\\circ\",\"text\":\"\\\\textdegree\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"±\":{\"math\":\"\\\\pm\"},\"²\":{\"math\":\"^{2}\"},\"³\":{\"math\":\"^{3}\"},\"´\":{\"text\":\"\\\\textasciiacute\",\"commandspacer\":true},\"µ\":{\"text\":\"\\\\textmu\",\"commandspacer\":true},\"¶\":{\"text\":\"\\\\textparagraph\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"·\":{\"math\":\"\\\\cdot\"},\"¸\":{\"text\":\"\\\\c\",\"commandspacer\":true},\"¹\":{\"math\":\"^{1}\"},\"º\":{\"text\":\"\\\\textordmasculine\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"»\":{\"text\":\"\\\\guillemotright\",\"commandspacer\":true},\"¼\":{\"math\":\"\\\\frac{1}{4}\"},\"½\":{\"math\":\"\\\\frac{1}{2}\"},\"¾\":{\"math\":\"\\\\frac{3}{4}\"},\"¿\":{\"text\":\"\\\\textquestiondown\",\"commandspacer\":true},\"À\":{\"text\":\"\\\\`A\"},\"Á\":{\"text\":\"\\\\'A\"},\"Â\":{\"text\":\"\\\\^A\"},\"Ã\":{\"text\":\"\\\\~A\"},\"Ä\":{\"text\":\"\\\\\\\"A\"},\"Å\":{\"text\":\"\\\\AA\",\"commandspacer\":true},\"Æ\":{\"text\":\"\\\\AE\",\"commandspacer\":true},\"Ç\":{\"text\":\"\\\\c{C}\"},\"È\":{\"text\":\"\\\\`E\"},\"É\":{\"text\":\"\\\\'E\"},\"Ê\":{\"text\":\"\\\\^E\"},\"Ë\":{\"text\":\"\\\\\\\"E\"},\"Ì\":{\"text\":\"\\\\`I\"},\"Í\":{\"text\":\"\\\\'I\"},\"Î\":{\"text\":\"\\\\^I\"},\"Ï\":{\"text\":\"\\\\\\\"I\"},\"Ð\":{\"text\":\"\\\\DH\",\"commandspacer\":true},\"Ñ\":{\"text\":\"\\\\~N\"},\"Ò\":{\"text\":\"\\\\`O\"},\"Ó\":{\"text\":\"\\\\'O\"},\"Ô\":{\"text\":\"\\\\^O\"},\"Õ\":{\"text\":\"\\\\~O\"},\"Ö\":{\"text\":\"\\\\\\\"O\"},\"×\":{\"math\":\"\\\\times\",\"text\":\"\\\\texttimes\",\"commandspacer\":true},\"Ø\":{\"text\":\"\\\\O\",\"commandspacer\":true},\"Ù\":{\"text\":\"\\\\`U\"},\"Ú\":{\"text\":\"\\\\'U\"},\"Û\":{\"text\":\"\\\\^U\"},\"Ü\":{\"text\":\"\\\\\\\"U\"},\"Ý\":{\"text\":\"\\\\'Y\"},\"Þ\":{\"text\":\"\\\\TH\",\"commandspacer\":true},\"ß\":{\"text\":\"\\\\ss\",\"commandspacer\":true},\"à\":{\"text\":\"\\\\`a\"},\"á\":{\"text\":\"\\\\'a\"},\"â\":{\"text\":\"\\\\^a\"},\"ã\":{\"text\":\"\\\\~a\"},\"ä\":{\"text\":\"\\\\\\\"a\"},\"å\":{\"text\":\"\\\\aa\",\"commandspacer\":true},\"æ\":{\"text\":\"\\\\ae\",\"commandspacer\":true},\"ç\":{\"text\":\"\\\\c{c}\"},\"è\":{\"text\":\"\\\\`e\"},\"é\":{\"text\":\"\\\\'e\"},\"ê\":{\"text\":\"\\\\^e\"},\"ë\":{\"text\":\"\\\\\\\"e\"},\"ì\":{\"text\":\"\\\\`i\"},\"í\":{\"text\":\"\\\\'i\"},\"î\":{\"text\":\"\\\\^i\"},\"ï\":{\"text\":\"\\\\\\\"i\"},\"ð\":{\"math\":\"\\\\eth\",\"mathpackages\":[\"amssymb\",\"arevmath\"],\"text\":\"\\\\dh\",\"commandspacer\":true},\"ñ\":{\"text\":\"\\\\~n\"},\"ò\":{\"text\":\"\\\\`o\"},\"ó\":{\"text\":\"\\\\'o\"},\"ô\":{\"text\":\"\\\\^o\"},\"õ\":{\"text\":\"\\\\~o\"},\"ö\":{\"text\":\"\\\\\\\"o\"},\"÷\":{\"math\":\"\\\\div\"},\"ø\":{\"text\":\"\\\\o\",\"commandspacer\":true},\"ù\":{\"text\":\"\\\\`u\"},\"ú\":{\"text\":\"\\\\'u\"},\"û\":{\"text\":\"\\\\^u\"},\"ü\":{\"text\":\"\\\\\\\"u\"},\"ý\":{\"text\":\"\\\\'y\"},\"þ\":{\"text\":\"\\\\th\",\"commandspacer\":true},\"ÿ\":{\"text\":\"\\\\\\\"y\"},\"Ā\":{\"text\":\"\\\\=A\"},\"ā\":{\"text\":\"\\\\=a\"},\"Ă\":{\"text\":\"\\\\u{A}\"},\"ă\":{\"text\":\"\\\\u{a}\"},\"Ą\":{\"text\":\"\\\\k{A}\"},\"ą\":{\"text\":\"\\\\k{a}\"},\"Ć\":{\"text\":\"\\\\'C\"},\"ć\":{\"text\":\"\\\\'c\"},\"Ĉ\":{\"text\":\"\\\\^C\"},\"ĉ\":{\"text\":\"\\\\^c\"},\"Ċ\":{\"text\":\"\\\\.C\"},\"ċ\":{\"text\":\"\\\\.c\"},\"Č\":{\"text\":\"\\\\v{C}\"},\"č\":{\"text\":\"\\\\v{c}\"},\"Ď\":{\"text\":\"\\\\v{D}\"},\"ď\":{\"text\":\"\\\\v{d}\"},\"Đ\":{\"text\":\"\\\\DJ\",\"commandspacer\":true},\"đ\":{\"text\":\"\\\\dj\",\"commandspacer\":true},\"Ē\":{\"text\":\"\\\\=E\"},\"ē\":{\"text\":\"\\\\=e\"},\"Ĕ\":{\"text\":\"\\\\u{E}\"},\"ĕ\":{\"text\":\"\\\\u{e}\"},\"Ė\":{\"text\":\"\\\\.E\"},\"ė\":{\"text\":\"\\\\.e\"},\"Ę\":{\"text\":\"\\\\k{E}\"},\"ę\":{\"text\":\"\\\\k{e}\"},\"Ě\":{\"text\":\"\\\\v{E}\"},\"ě\":{\"text\":\"\\\\v{e}\"},\"Ĝ\":{\"text\":\"\\\\^G\"},\"ĝ\":{\"text\":\"\\\\^g\"},\"Ğ\":{\"text\":\"\\\\u{G}\"},\"ğ\":{\"text\":\"\\\\u{g}\"},\"Ġ\":{\"text\":\"\\\\.G\"},\"ġ\":{\"text\":\"\\\\.g\"},\"Ģ\":{\"text\":\"\\\\c{G}\"},\"ģ\":{\"text\":\"\\\\c{g}\"},\"Ĥ\":{\"text\":\"\\\\^H\"},\"ĥ\":{\"text\":\"\\\\^h\"},\"Ħ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char40}\"},\"ħ\":{\"math\":\"\\\\Elzxh\"},\"Ĩ\":{\"text\":\"\\\\~I\"},\"ĩ\":{\"text\":\"\\\\~i\"},\"Ī\":{\"text\":\"\\\\=I\"},\"ī\":{\"text\":\"\\\\=i\"},\"Ĭ\":{\"text\":\"\\\\u{I}\"},\"ĭ\":{\"text\":\"{\\\\u \\\\i}\"},\"Į\":{\"text\":\"\\\\k{I}\"},\"į\":{\"text\":\"\\\\k{i}\"},\"İ\":{\"text\":\"\\\\.I\"},\"ı\":{\"math\":\"\\\\imath\",\"text\":\"\\\\i\",\"commandspacer\":true},\"Ĳ\":{\"text\":\"IJ\"},\"ĳ\":{\"text\":\"ij\"},\"Ĵ\":{\"text\":\"\\\\^J\"},\"ĵ\":{\"text\":\"\\\\^\\\\j\",\"commandspacer\":true},\"Ķ\":{\"text\":\"\\\\c{K}\"},\"ķ\":{\"text\":\"\\\\c{k}\"},\"ĸ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char91}\"},\"Ĺ\":{\"text\":\"\\\\'L\"},\"ĺ\":{\"text\":\"\\\\'l\"},\"Ļ\":{\"text\":\"\\\\c{L}\"},\"ļ\":{\"text\":\"\\\\c{l}\"},\"Ľ\":{\"text\":\"\\\\v{L}\"},\"ľ\":{\"text\":\"\\\\v{l}\"},\"Ŀ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char201}\"},\"ŀ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char202}\"},\"Ł\":{\"text\":\"\\\\L\",\"commandspacer\":true},\"ł\":{\"text\":\"\\\\l\",\"commandspacer\":true},\"Ń\":{\"text\":\"\\\\'N\"},\"ń\":{\"text\":\"\\\\'n\"},\"Ņ\":{\"text\":\"\\\\c{N}\"},\"ņ\":{\"text\":\"\\\\c{n}\"},\"Ň\":{\"text\":\"\\\\v{N}\"},\"ň\":{\"text\":\"\\\\v{n}\"},\"ŉ\":{\"text\":\"'n\"},\"Ŋ\":{\"text\":\"\\\\NG\",\"commandspacer\":true},\"ŋ\":{\"text\":\"\\\\ng\",\"commandspacer\":true},\"Ō\":{\"text\":\"\\\\=O\"},\"ō\":{\"text\":\"\\\\=o\"},\"Ŏ\":{\"text\":\"\\\\u{O}\"},\"ŏ\":{\"text\":\"\\\\u{o}\"},\"Ő\":{\"text\":\"\\\\H{O}\"},\"ő\":{\"text\":\"\\\\H{o}\"},\"Œ\":{\"text\":\"\\\\OE\",\"commandspacer\":true},\"œ\":{\"text\":\"\\\\oe\",\"commandspacer\":true},\"Ŕ\":{\"text\":\"\\\\'R\"},\"ŕ\":{\"text\":\"\\\\'r\"},\"Ŗ\":{\"text\":\"\\\\c{R}\"},\"ŗ\":{\"text\":\"\\\\c{r}\"},\"Ř\":{\"text\":\"\\\\v{R}\"},\"ř\":{\"text\":\"\\\\v{r}\"},\"Ś\":{\"text\":\"\\\\'S\"},\"ś\":{\"text\":\"\\\\'s\"},\"Ŝ\":{\"text\":\"\\\\^S\"},\"ŝ\":{\"text\":\"\\\\^s\"},\"Ş\":{\"text\":\"\\\\c{S}\"},\"ş\":{\"text\":\"\\\\c{s}\"},\"Š\":{\"text\":\"\\\\v{S}\"},\"š\":{\"text\":\"\\\\v{s}\"},\"Ţ\":{\"text\":\"\\\\c{T}\"},\"ţ\":{\"text\":\"\\\\c{t}\"},\"Ť\":{\"text\":\"\\\\v{T}\"},\"ť\":{\"text\":\"\\\\v{t}\"},\"Ŧ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char47}\"},\"ŧ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char63}\"},\"Ũ\":{\"text\":\"\\\\~U\"},\"ũ\":{\"text\":\"\\\\~u\"},\"Ū\":{\"text\":\"\\\\=U\"},\"ū\":{\"text\":\"\\\\=u\"},\"Ŭ\":{\"text\":\"\\\\u{U}\"},\"ŭ\":{\"text\":\"\\\\u{u}\"},\"Ů\":{\"text\":\"\\\\r{U}\"},\"ů\":{\"text\":\"\\\\r{u}\"},\"Ű\":{\"text\":\"\\\\H{U}\"},\"ű\":{\"text\":\"\\\\H{u}\"},\"Ų\":{\"text\":\"\\\\k{U}\"},\"ų\":{\"text\":\"\\\\k{u}\"},\"Ŵ\":{\"text\":\"\\\\^W\"},\"ŵ\":{\"text\":\"\\\\^w\"},\"Ŷ\":{\"text\":\"\\\\^Y\"},\"ŷ\":{\"text\":\"\\\\^y\"},\"Ÿ\":{\"text\":\"\\\\\\\"Y\"},\"Ź\":{\"text\":\"\\\\'Z\"},\"ź\":{\"text\":\"\\\\'z\"},\"Ż\":{\"text\":\"\\\\.Z\"},\"ż\":{\"text\":\"\\\\.z\"},\"Ž\":{\"text\":\"\\\\v{Z}\"},\"ž\":{\"text\":\"\\\\v{z}\"},\"ſ\":{\"text\":\"s\"},\"ƒ\":{\"math\":\"f\"},\"ƕ\":{\"text\":\"\\\\texthvlig\",\"commandspacer\":true},\"ƞ\":{\"text\":\"\\\\textnrleg\",\"commandspacer\":true},\"ƪ\":{\"text\":\"\\\\textesh\",\"commandspacer\":true},\"Ƶ\":{\"math\":\"\\\\Zbar\"},\"ƺ\":{\"text\":\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char195}\"},\"ǂ\":{\"text\":\"\\\\textdoublepipe\",\"commandspacer\":true},\"Ǎ\":{\"text\":\"\\\\v{A}\"},\"ǎ\":{\"text\":\"\\\\v{a}\"},\"Ǐ\":{\"text\":\"\\\\v{I}\"},\"ǐ\":{\"text\":\"\\\\v{i}\"},\"Ǒ\":{\"text\":\"\\\\v{O}\"},\"ǒ\":{\"text\":\"\\\\v{o}\"},\"Ǔ\":{\"text\":\"\\\\v{U}\"},\"ǔ\":{\"text\":\"\\\\v{u}\"},\"Ǧ\":{\"text\":\"\\\\v{G}\"},\"ǧ\":{\"text\":\"\\\\v{g}\"},\"Ǩ\":{\"text\":\"\\\\v{K}\"},\"ǩ\":{\"text\":\"\\\\v{k}\"},\"Ǫ\":{\"text\":\"\\\\k{O}\"},\"ǫ\":{\"text\":\"\\\\k{o}\"},\"ǰ\":{\"text\":\"\\\\v{j}\"},\"Ǵ\":{\"text\":\"\\\\'G\"},\"ǵ\":{\"text\":\"\\\\'g\"},\"Ȩ\":{\"text\":\"\\\\c{E}\"},\"ȩ\":{\"text\":\"\\\\c{e}\"},\"ȷ\":{\"math\":\"\\\\jmath\"},\"ɐ\":{\"math\":\"\\\\Elztrna\"},\"ɒ\":{\"math\":\"\\\\Elztrnsa\"},\"ɔ\":{\"math\":\"\\\\Elzopeno\"},\"ɖ\":{\"math\":\"\\\\Elzrtld\"},\"ɘ\":{\"text\":\"{\\\\fontencoding{LEIP}\\\\selectfont\\\\char61}\"},\"ə\":{\"math\":\"\\\\Elzschwa\"},\"ɛ\":{\"math\":\"\\\\varepsilon\"},\"ɡ\":{\"text\":\"g\"},\"ɣ\":{\"math\":\"\\\\Elzpgamma\"},\"ɤ\":{\"math\":\"\\\\Elzpbgam\"},\"ɥ\":{\"math\":\"\\\\Elztrnh\"},\"ɬ\":{\"math\":\"\\\\Elzbtdl\"},\"ɭ\":{\"math\":\"\\\\Elzrtll\"},\"ɯ\":{\"math\":\"\\\\Elztrnm\"},\"ɰ\":{\"math\":\"\\\\Elztrnmlr\"},\"ɱ\":{\"math\":\"\\\\Elzltlmr\"},\"ɲ\":{\"text\":\"\\\\Elzltln\",\"commandspacer\":true},\"ɳ\":{\"math\":\"\\\\Elzrtln\"},\"ɷ\":{\"math\":\"\\\\Elzclomeg\"},\"ɸ\":{\"text\":\"\\\\textphi\",\"commandspacer\":true},\"ɹ\":{\"math\":\"\\\\Elztrnr\"},\"ɺ\":{\"math\":\"\\\\Elztrnrl\"},\"ɻ\":{\"math\":\"\\\\Elzrttrnr\"},\"ɼ\":{\"math\":\"\\\\Elzrl\"},\"ɽ\":{\"math\":\"\\\\Elzrtlr\"},\"ɾ\":{\"math\":\"\\\\Elzfhr\"},\"ɿ\":{\"text\":\"{\\\\fontencoding{LEIP}\\\\selectfont\\\\char202}\"},\"ʂ\":{\"math\":\"\\\\Elzrtls\"},\"ʃ\":{\"math\":\"\\\\Elzesh\"},\"ʇ\":{\"math\":\"\\\\Elztrnt\"},\"ʈ\":{\"math\":\"\\\\Elzrtlt\"},\"ʊ\":{\"math\":\"\\\\Elzpupsil\"},\"ʋ\":{\"math\":\"\\\\Elzpscrv\"},\"ʌ\":{\"math\":\"\\\\Elzinvv\"},\"ʍ\":{\"math\":\"\\\\Elzinvw\"},\"ʎ\":{\"math\":\"\\\\Elztrny\"},\"ʐ\":{\"math\":\"\\\\Elzrtlz\"},\"ʒ\":{\"math\":\"\\\\Elzyogh\"},\"ʔ\":{\"math\":\"\\\\Elzglst\"},\"ʕ\":{\"math\":\"\\\\Elzreglst\"},\"ʖ\":{\"math\":\"\\\\Elzinglst\"},\"ʞ\":{\"text\":\"\\\\textturnk\",\"commandspacer\":true},\"ʤ\":{\"math\":\"\\\\Elzdyogh\"},\"ʧ\":{\"math\":\"\\\\Elztesh\"},\"ʰ\":{\"math\":\"^{h}\",\"text\":\"\\\\textsuperscript{h}\"},\"ʲ\":{\"math\":\"^{j}\",\"text\":\"\\\\textsuperscript{j}\"},\"ʳ\":{\"math\":\"^{r}\",\"text\":\"\\\\textsuperscript{r}\"},\"ʷ\":{\"math\":\"^{w}\",\"text\":\"\\\\textsuperscript{w}\"},\"ʸ\":{\"math\":\"^{y}\",\"text\":\"\\\\textsuperscript{y}\"},\"ʹ\":{\"text\":\"'\"},\"ʻ\":{\"text\":\"'\"},\"ʼ\":{\"text\":\"'\"},\"ʽ\":{\"text\":\"'\"},\"ʿ\":{\"text\":\"\\\\lasp\",\"commandspacer\":true,\"textpackages\":[\"mathscinet\"]},\"ˆ\":{\"text\":\"\\\\textasciicircum\",\"commandspacer\":true},\"ˇ\":{\"text\":\"\\\\textasciicaron\",\"commandspacer\":true},\"ˈ\":{\"math\":\"\\\\Elzverts\"},\"ˉ\":{\"text\":\"-\"},\"ˌ\":{\"math\":\"\\\\Elzverti\"},\"ː\":{\"math\":\"\\\\Elzlmrk\"},\"ˑ\":{\"math\":\"\\\\Elzhlmrk\"},\"˒\":{\"math\":\"\\\\Elzsbrhr\"},\"˓\":{\"math\":\"\\\\Elzsblhr\"},\"˔\":{\"math\":\"\\\\Elzrais\"},\"˕\":{\"math\":\"\\\\Elzlow\"},\"˘\":{\"text\":\"\\\\textasciibreve\",\"commandspacer\":true},\"˙\":{\"text\":\"\\\\textperiodcentered\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"˚\":{\"text\":\"\\\\r{}\"},\"˛\":{\"text\":\"\\\\k{}\"},\"˜\":{\"text\":\"\\\\texttildelow\",\"commandspacer\":true},\"˝\":{\"text\":\"\\\\H{}\"},\"ˡ\":{\"math\":\"^{l}\",\"text\":\"\\\\textsuperscript{l}\"},\"ˢ\":{\"math\":\"^{s}\",\"text\":\"\\\\textsuperscript{s}\"},\"ˣ\":{\"math\":\"^{x}\",\"text\":\"\\\\textsuperscript{x}\"},\"˥\":{\"text\":\"\\\\tone{55}\"},\"˦\":{\"text\":\"\\\\tone{44}\"},\"˧\":{\"text\":\"\\\\tone{33}\"},\"˨\":{\"text\":\"\\\\tone{22}\"},\"˩\":{\"text\":\"\\\\tone{11}\"},\"̀\":{\"math\":\"\\\\grave\",\"combiningdiacritic\":true,\"text\":\"\\\\`\"},\"̀̄\":{\"text\":\"\\\\textgravemacron\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̄̀\":{\"text\":\"\\\\textgravemacron\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̀̇\":{\"text\":\"\\\\textgravedot\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̇̀\":{\"text\":\"\\\\textgravedot\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"́\":{\"math\":\"\\\\acute\",\"combiningdiacritic\":true,\"text\":\"\\\\'\"},\"́̄\":{\"text\":\"\\\\textacutemacron\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̄́\":{\"text\":\"\\\\textacutemacron\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"́̌\":{\"text\":\"\\\\textacutewedge\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̌́\":{\"text\":\"\\\\textacutewedge\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̂\":{\"math\":\"\\\\hat\",\"combiningdiacritic\":true,\"text\":\"\\\\^\"},\"̂̇\":{\"text\":\"\\\\textcircumdot\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̇̂\":{\"text\":\"\\\\textcircumdot\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̃\":{\"math\":\"\\\\tilde\",\"combiningdiacritic\":true,\"text\":\"\\\\~\"},\"̃̇\":{\"text\":\"\\\\texttildedot\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̇̃\":{\"text\":\"\\\\texttildedot\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̄\":{\"math\":\"\\\\bar\",\"combiningdiacritic\":true,\"text\":\"\\\\=\"},\"̅\":{\"math\":\"\\\\overline\",\"combiningdiacritic\":true},\"̆\":{\"math\":\"\\\\breve\",\"combiningdiacritic\":true,\"text\":\"\\\\u\",\"commandspacer\":true},\"̆̄\":{\"text\":\"\\\\textbrevemacron\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̄̆\":{\"text\":\"\\\\textbrevemacron\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̇\":{\"math\":\"\\\\dot\",\"combiningdiacritic\":true,\"text\":\"\\\\.\"},\"̇́\":{\"text\":\"\\\\textdotacute\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"́̇\":{\"text\":\"\\\\textdotacute\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̇̆\":{\"text\":\"\\\\textdotbreve\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̆̇\":{\"text\":\"\\\\textdotbreve\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̈\":{\"math\":\"\\\\ddot\",\"combiningdiacritic\":true,\"text\":\"\\\\\\\"\"},\"̉\":{\"math\":\"\\\\ovhook\"},\"̊\":{\"math\":\"\\\\mathring\",\"combiningdiacritic\":true,\"text\":\"\\\\r\",\"commandspacer\":true},\"̊̄\":{\"text\":\"\\\\textringmacron\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̄̊\":{\"text\":\"\\\\textringmacron\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̋\":{\"text\":\"\\\\H\",\"commandspacer\":true,\"combiningdiacritic\":true},\"̌\":{\"math\":\"\\\\check\",\"text\":\"\\\\v\",\"commandspacer\":true,\"combiningdiacritic\":true},\"̍\":{\"text\":\"\\\\textvbaraccent\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̎\":{\"text\":\"\\\\textdoublevbaraccent\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̏\":{\"text\":\"\\\\textdoublegrave\",\"commandspacer\":true,\"combiningdiacritic\":true},\"̐\":{\"text\":\"\\\\textdotbreve\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̑\":{\"text\":\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char177}\"},\"̒\":{\"math\":\"\\\\oturnedcomma\"},\"̕\":{\"math\":\"\\\\ocommatopright\"},\"̖\":{\"text\":\"\\\\textsubgrave\",\"commandspacer\":true,\"combiningdiacritic\":true},\"̘\":{\"text\":\"\\\\textadvancing\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̙\":{\"text\":\"\\\\textretracting\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̚\":{\"math\":\"\\\\droang\",\"text\":\"\\\\textcorner\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̜\":{\"text\":\"\\\\textsublhalfring\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̝\":{\"text\":\"\\\\textraising\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̞\":{\"text\":\"\\\\textlowering\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̟\":{\"text\":\"\\\\textsubplus\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̡\":{\"math\":\"\\\\Elzpalh\"},\"̢\":{\"text\":\"\\\\Elzrh\",\"commandspacer\":true},\"̣\":{\"text\":\"\\\\d\",\"commandspacer\":true,\"combiningdiacritic\":true},\"̤\":{\"text\":\"\\\\textsubumlaut\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̥\":{\"text\":\"\\\\textsubring\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̧\":{\"text\":\"\\\\c\",\"commandspacer\":true,\"combiningdiacritic\":true},\"̨\":{\"text\":\"\\\\k\",\"commandspacer\":true,\"combiningdiacritic\":true},\"̩\":{\"text\":\"\\\\textsyllabic\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̪\":{\"math\":\"\\\\Elzsbbrg\",\"text\":\"\\\\textsubbridge\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̫\":{\"text\":\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char203}\"},\"̬\":{\"text\":\"\\\\textsubwedge\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̯\":{\"text\":\"\\\\textsubarch\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̰\":{\"math\":\"\\\\utilde\",\"text\":\"\\\\textsubtilde\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̱\":{\"math\":\"\\\\underbar\",\"combiningdiacritic\":true,\"text\":\"\\\\textsubbar\",\"commandspacer\":true,\"textpackages\":[\"tipa\"]},\"̲\":{\"math\":\"\\\\underline\"},\"̴\":{\"text\":\"\\\\textsuperimposetilde\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̵\":{\"text\":\"\\\\Elzxl\",\"commandspacer\":true},\"̶\":{\"text\":\"\\\\Elzbar\",\"commandspacer\":true},\"̷\":{\"text\":\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char215}\"},\"̸\":{\"math\":\"\\\\not\"},\"̹\":{\"text\":\"\\\\textsubrhalfring\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̺\":{\"text\":\"\\\\textinvsubbridge\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̻\":{\"text\":\"\\\\textsubsquare\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̼\":{\"text\":\"\\\\textseagull\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"̽\":{\"text\":\"\\\\textovercross\",\"commandspacer\":true,\"combiningdiacritic\":true,\"textpackages\":[\"tipa\"]},\"͡\":{\"text\":\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char225}\"},\"ʹ\":{\"text\":\"'\"},\"͵\":{\"text\":\",\"},\";\":{\"text\":\";\"},\"Ά\":{\"text\":\"\\\\'A\"},\"Έ\":{\"text\":\"\\\\'E\"},\"Ή\":{\"text\":\"\\\\'H\"},\"Ί\":{\"text\":\"{\\\\'{}I}\"},\"Ό\":{\"text\":\"{\\\\'{}O}\"},\"Ύ\":{\"math\":\"\\\\mathrm{'Y}\"},\"Ώ\":{\"math\":\"\\\\mathrm{'\\\\Omega}\"},\"ΐ\":{\"math\":\"\\\\acute{\\\\ddot{\\\\iota}}\"},\"Α\":{\"math\":\"A\"},\"Β\":{\"math\":\"B\"},\"Γ\":{\"math\":\"\\\\Gamma\"},\"Δ\":{\"math\":\"\\\\Delta\"},\"Ε\":{\"math\":\"E\"},\"Ζ\":{\"math\":\"Z\"},\"Η\":{\"math\":\"H\"},\"Θ\":{\"math\":\"\\\\Theta\"},\"Ι\":{\"math\":\"I\"},\"Κ\":{\"math\":\"K\"},\"Λ\":{\"math\":\"\\\\Lambda\"},\"Μ\":{\"math\":\"M\"},\"Ν\":{\"math\":\"N\"},\"Ξ\":{\"math\":\"\\\\Xi\"},\"Ο\":{\"math\":\"O\"},\"Π\":{\"math\":\"\\\\Pi\"},\"Ρ\":{\"math\":\"P\"},\"Σ\":{\"math\":\"\\\\Sigma\"},\"Τ\":{\"math\":\"T\"},\"Υ\":{\"math\":\"\\\\Upsilon\"},\"Φ\":{\"math\":\"\\\\Phi\"},\"Χ\":{\"math\":\"X\"},\"Ψ\":{\"math\":\"\\\\Psi\"},\"Ω\":{\"math\":\"\\\\Omega\"},\"Ϊ\":{\"math\":\"\\\\mathrm{\\\\ddot{I}}\"},\"Ϋ\":{\"math\":\"\\\\mathrm{\\\\ddot{Y}}\"},\"ά\":{\"text\":\"{\\\\'$\\\\alpha$}\"},\"έ\":{\"math\":\"\\\\acute{\\\\epsilon}\"},\"ή\":{\"math\":\"\\\\acute{\\\\eta}\"},\"ί\":{\"math\":\"\\\\acute{\\\\iota}\"},\"ΰ\":{\"math\":\"\\\\acute{\\\\ddot{\\\\upsilon}}\"},\"α\":{\"math\":\"\\\\alpha\"},\"β\":{\"math\":\"\\\\beta\"},\"γ\":{\"math\":\"\\\\gamma\"},\"δ\":{\"math\":\"\\\\delta\"},\"ε\":{\"math\":\"\\\\epsilon\"},\"ζ\":{\"math\":\"\\\\zeta\"},\"η\":{\"math\":\"\\\\eta\"},\"θ\":{\"math\":\"\\\\theta\",\"text\":\"\\\\texttheta\",\"commandspacer\":true},\"ι\":{\"math\":\"\\\\iota\"},\"κ\":{\"math\":\"\\\\kappa\"},\"λ\":{\"math\":\"\\\\lambda\"},\"μ\":{\"math\":\"\\\\mu\"},\"ν\":{\"math\":\"\\\\nu\"},\"ξ\":{\"math\":\"\\\\xi\"},\"ο\":{\"math\":\"o\"},\"π\":{\"math\":\"\\\\pi\"},\"ρ\":{\"math\":\"\\\\rho\"},\"ς\":{\"math\":\"\\\\varsigma\"},\"σ\":{\"math\":\"\\\\sigma\"},\"τ\":{\"math\":\"\\\\tau\"},\"υ\":{\"math\":\"\\\\upsilon\"},\"φ\":{\"math\":\"\\\\varphi\"},\"χ\":{\"math\":\"\\\\chi\"},\"ψ\":{\"math\":\"\\\\psi\"},\"ω\":{\"math\":\"\\\\omega\"},\"ϊ\":{\"math\":\"\\\\ddot{\\\\iota}\"},\"ϋ\":{\"math\":\"\\\\ddot{\\\\upsilon}\"},\"ό\":{\"text\":\"\\\\'o\"},\"ύ\":{\"math\":\"\\\\acute{\\\\upsilon}\"},\"ώ\":{\"math\":\"\\\\acute{\\\\omega}\"},\"ϐ\":{\"math\":\"\\\\varbeta\",\"text\":\"\\\\Pisymbol{ppi022}{87}\"},\"ϑ\":{\"math\":\"\\\\vartheta\",\"text\":\"\\\\textvartheta\",\"commandspacer\":true},\"ϒ\":{\"math\":\"\\\\Upsilon\"},\"ϕ\":{\"math\":\"\\\\phi\"},\"ϖ\":{\"math\":\"\\\\varpi\"},\"Ϙ\":{\"math\":\"\\\\Qoppa\"},\"ϙ\":{\"math\":\"\\\\qoppa\"},\"Ϛ\":{\"math\":\"\\\\Stigma\"},\"ϛ\":{\"math\":\"\\\\stigma\"},\"Ϝ\":{\"math\":\"\\\\Digamma\"},\"ϝ\":{\"math\":\"\\\\digamma\"},\"Ϟ\":{\"math\":\"\\\\Koppa\"},\"ϟ\":{\"math\":\"\\\\koppa\"},\"Ϡ\":{\"math\":\"\\\\Sampi\"},\"ϡ\":{\"math\":\"\\\\sampi\"},\"ϰ\":{\"math\":\"\\\\varkappa\"},\"ϱ\":{\"math\":\"\\\\varrho\"},\"ϴ\":{\"math\":\"\\\\upvarTheta\",\"text\":\"\\\\textTheta\",\"commandspacer\":true},\"ϵ\":{\"math\":\"\\\\epsilon\"},\"϶\":{\"math\":\"\\\\backepsilon\"},\"Ё\":{\"text\":\"\\\\cyrchar\\\\CYRYO\",\"commandspacer\":true},\"Ђ\":{\"text\":\"\\\\cyrchar\\\\CYRDJE\",\"commandspacer\":true},\"Ѓ\":{\"text\":\"\\\\cyrchar{\\\\'\\\\CYRG}\"},\"Є\":{\"text\":\"\\\\cyrchar\\\\CYRIE\",\"commandspacer\":true},\"Ѕ\":{\"text\":\"\\\\cyrchar\\\\CYRDZE\",\"commandspacer\":true},\"І\":{\"text\":\"\\\\cyrchar\\\\CYRII\",\"commandspacer\":true},\"Ї\":{\"text\":\"\\\\cyrchar\\\\CYRYI\",\"commandspacer\":true},\"Ј\":{\"text\":\"\\\\cyrchar\\\\CYRJE\",\"commandspacer\":true},\"Љ\":{\"text\":\"\\\\cyrchar\\\\CYRLJE\",\"commandspacer\":true},\"Њ\":{\"text\":\"\\\\cyrchar\\\\CYRNJE\",\"commandspacer\":true},\"Ћ\":{\"text\":\"\\\\cyrchar\\\\CYRTSHE\",\"commandspacer\":true},\"Ќ\":{\"text\":\"\\\\cyrchar{\\\\'\\\\CYRK}\"},\"Ў\":{\"text\":\"\\\\cyrchar\\\\CYRUSHRT\",\"commandspacer\":true},\"Џ\":{\"text\":\"\\\\cyrchar\\\\CYRDZHE\",\"commandspacer\":true},\"А\":{\"text\":\"\\\\cyrchar\\\\CYRA\",\"commandspacer\":true},\"Б\":{\"text\":\"\\\\cyrchar\\\\CYRB\",\"commandspacer\":true},\"В\":{\"text\":\"\\\\cyrchar\\\\CYRV\",\"commandspacer\":true},\"Г\":{\"text\":\"\\\\cyrchar\\\\CYRG\",\"commandspacer\":true},\"Д\":{\"text\":\"\\\\cyrchar\\\\CYRD\",\"commandspacer\":true},\"Е\":{\"text\":\"\\\\cyrchar\\\\CYRE\",\"commandspacer\":true},\"Ж\":{\"text\":\"\\\\cyrchar\\\\CYRZH\",\"commandspacer\":true},\"З\":{\"text\":\"\\\\cyrchar\\\\CYRZ\",\"commandspacer\":true},\"И\":{\"text\":\"\\\\cyrchar\\\\CYRI\",\"commandspacer\":true},\"Й\":{\"text\":\"\\\\cyrchar\\\\CYRISHRT\",\"commandspacer\":true},\"К\":{\"text\":\"\\\\cyrchar\\\\CYRK\",\"commandspacer\":true},\"Л\":{\"text\":\"\\\\cyrchar\\\\CYRL\",\"commandspacer\":true},\"М\":{\"text\":\"\\\\cyrchar\\\\CYRM\",\"commandspacer\":true},\"Н\":{\"text\":\"\\\\cyrchar\\\\CYRN\",\"commandspacer\":true},\"О\":{\"text\":\"\\\\cyrchar\\\\CYRO\",\"commandspacer\":true},\"П\":{\"text\":\"\\\\cyrchar\\\\CYRP\",\"commandspacer\":true},\"Р\":{\"text\":\"\\\\cyrchar\\\\CYRR\",\"commandspacer\":true},\"С\":{\"text\":\"\\\\cyrchar\\\\CYRS\",\"commandspacer\":true},\"Т\":{\"text\":\"\\\\cyrchar\\\\CYRT\",\"commandspacer\":true},\"У\":{\"text\":\"\\\\cyrchar\\\\CYRU\",\"commandspacer\":true},\"Ф\":{\"text\":\"\\\\cyrchar\\\\CYRF\",\"commandspacer\":true},\"Х\":{\"text\":\"\\\\cyrchar\\\\CYRH\",\"commandspacer\":true},\"Ц\":{\"text\":\"\\\\cyrchar\\\\CYRC\",\"commandspacer\":true},\"Ч\":{\"text\":\"\\\\cyrchar\\\\CYRCH\",\"commandspacer\":true},\"Ш\":{\"text\":\"\\\\cyrchar\\\\CYRSH\",\"commandspacer\":true},\"Щ\":{\"text\":\"\\\\cyrchar\\\\CYRSHCH\",\"commandspacer\":true},\"Ъ\":{\"text\":\"\\\\cyrchar\\\\CYRHRDSN\",\"commandspacer\":true},\"Ы\":{\"text\":\"\\\\cyrchar\\\\CYRERY\",\"commandspacer\":true},\"Ь\":{\"text\":\"\\\\cyrchar\\\\CYRSFTSN\",\"commandspacer\":true},\"Э\":{\"text\":\"\\\\cyrchar\\\\CYREREV\",\"commandspacer\":true},\"Ю\":{\"text\":\"\\\\cyrchar\\\\CYRYU\",\"commandspacer\":true},\"Я\":{\"text\":\"\\\\cyrchar\\\\CYRYA\",\"commandspacer\":true},\"а\":{\"text\":\"\\\\cyrchar\\\\cyra\",\"commandspacer\":true},\"б\":{\"text\":\"\\\\cyrchar\\\\cyrb\",\"commandspacer\":true},\"в\":{\"text\":\"\\\\cyrchar\\\\cyrv\",\"commandspacer\":true},\"г\":{\"text\":\"\\\\cyrchar\\\\cyrg\",\"commandspacer\":true},\"д\":{\"text\":\"\\\\cyrchar\\\\cyrd\",\"commandspacer\":true},\"е\":{\"text\":\"\\\\cyrchar\\\\cyre\",\"commandspacer\":true},\"ж\":{\"text\":\"\\\\cyrchar\\\\cyrzh\",\"commandspacer\":true},\"з\":{\"text\":\"\\\\cyrchar\\\\cyrz\",\"commandspacer\":true},\"и\":{\"text\":\"\\\\cyrchar\\\\cyri\",\"commandspacer\":true},\"й\":{\"text\":\"\\\\cyrchar\\\\cyrishrt\",\"commandspacer\":true},\"к\":{\"text\":\"\\\\cyrchar\\\\cyrk\",\"commandspacer\":true},\"л\":{\"text\":\"\\\\cyrchar\\\\cyrl\",\"commandspacer\":true},\"м\":{\"text\":\"\\\\cyrchar\\\\cyrm\",\"commandspacer\":true},\"н\":{\"text\":\"\\\\cyrchar\\\\cyrn\",\"commandspacer\":true},\"о\":{\"text\":\"\\\\cyrchar\\\\cyro\",\"commandspacer\":true},\"п\":{\"text\":\"\\\\cyrchar\\\\cyrp\",\"commandspacer\":true},\"р\":{\"text\":\"\\\\cyrchar\\\\cyrr\",\"commandspacer\":true},\"с\":{\"text\":\"\\\\cyrchar\\\\cyrs\",\"commandspacer\":true},\"т\":{\"text\":\"\\\\cyrchar\\\\cyrt\",\"commandspacer\":true},\"у\":{\"text\":\"\\\\cyrchar\\\\cyru\",\"commandspacer\":true},\"ф\":{\"text\":\"\\\\cyrchar\\\\cyrf\",\"commandspacer\":true},\"х\":{\"text\":\"\\\\cyrchar\\\\cyrh\",\"commandspacer\":true},\"ц\":{\"text\":\"\\\\cyrchar\\\\cyrc\",\"commandspacer\":true},\"ч\":{\"text\":\"\\\\cyrchar\\\\cyrch\",\"commandspacer\":true},\"ш\":{\"text\":\"\\\\cyrchar\\\\cyrsh\",\"commandspacer\":true},\"щ\":{\"text\":\"\\\\cyrchar\\\\cyrshch\",\"commandspacer\":true},\"ъ\":{\"text\":\"\\\\cyrchar\\\\cyrhrdsn\",\"commandspacer\":true},\"ы\":{\"text\":\"\\\\cyrchar\\\\cyrery\",\"commandspacer\":true},\"ь\":{\"text\":\"\\\\cyrchar\\\\cyrsftsn\",\"commandspacer\":true},\"э\":{\"text\":\"\\\\cyrchar\\\\cyrerev\",\"commandspacer\":true},\"ю\":{\"text\":\"\\\\cyrchar\\\\cyryu\",\"commandspacer\":true},\"я\":{\"text\":\"\\\\cyrchar\\\\cyrya\",\"commandspacer\":true},\"ё\":{\"text\":\"\\\\cyrchar\\\\cyryo\",\"commandspacer\":true},\"ђ\":{\"text\":\"\\\\cyrchar\\\\cyrdje\",\"commandspacer\":true},\"ѓ\":{\"text\":\"\\\\cyrchar{\\\\'\\\\cyrg}\"},\"є\":{\"text\":\"\\\\cyrchar\\\\cyrie\",\"commandspacer\":true},\"ѕ\":{\"text\":\"\\\\cyrchar\\\\cyrdze\",\"commandspacer\":true},\"і\":{\"text\":\"\\\\cyrchar\\\\cyrii\",\"commandspacer\":true},\"ї\":{\"text\":\"\\\\cyrchar\\\\cyryi\",\"commandspacer\":true},\"ј\":{\"text\":\"\\\\cyrchar\\\\cyrje\",\"commandspacer\":true},\"љ\":{\"text\":\"\\\\cyrchar\\\\cyrlje\",\"commandspacer\":true},\"њ\":{\"text\":\"\\\\cyrchar\\\\cyrnje\",\"commandspacer\":true},\"ћ\":{\"text\":\"\\\\cyrchar\\\\cyrtshe\",\"commandspacer\":true},\"ќ\":{\"text\":\"\\\\cyrchar{\\\\'\\\\cyrk}\"},\"ў\":{\"text\":\"\\\\cyrchar\\\\cyrushrt\",\"commandspacer\":true},\"џ\":{\"text\":\"\\\\cyrchar\\\\cyrdzhe\",\"commandspacer\":true},\"Ѡ\":{\"text\":\"\\\\cyrchar\\\\CYROMEGA\",\"commandspacer\":true},\"ѡ\":{\"text\":\"\\\\cyrchar\\\\cyromega\",\"commandspacer\":true},\"Ѣ\":{\"text\":\"\\\\cyrchar\\\\CYRYAT\",\"commandspacer\":true},\"Ѥ\":{\"text\":\"\\\\cyrchar\\\\CYRIOTE\",\"commandspacer\":true},\"ѥ\":{\"text\":\"\\\\cyrchar\\\\cyriote\",\"commandspacer\":true},\"Ѧ\":{\"text\":\"\\\\cyrchar\\\\CYRLYUS\",\"commandspacer\":true},\"ѧ\":{\"text\":\"\\\\cyrchar\\\\cyrlyus\",\"commandspacer\":true},\"Ѩ\":{\"text\":\"\\\\cyrchar\\\\CYRIOTLYUS\",\"commandspacer\":true},\"ѩ\":{\"text\":\"\\\\cyrchar\\\\cyriotlyus\",\"commandspacer\":true},\"Ѫ\":{\"text\":\"\\\\cyrchar\\\\CYRBYUS\",\"commandspacer\":true},\"Ѭ\":{\"text\":\"\\\\cyrchar\\\\CYRIOTBYUS\",\"commandspacer\":true},\"ѭ\":{\"text\":\"\\\\cyrchar\\\\cyriotbyus\",\"commandspacer\":true},\"Ѯ\":{\"text\":\"\\\\cyrchar\\\\CYRKSI\",\"commandspacer\":true},\"ѯ\":{\"text\":\"\\\\cyrchar\\\\cyrksi\",\"commandspacer\":true},\"Ѱ\":{\"text\":\"\\\\cyrchar\\\\CYRPSI\",\"commandspacer\":true},\"ѱ\":{\"text\":\"\\\\cyrchar\\\\cyrpsi\",\"commandspacer\":true},\"Ѳ\":{\"text\":\"\\\\cyrchar\\\\CYRFITA\",\"commandspacer\":true},\"Ѵ\":{\"text\":\"\\\\cyrchar\\\\CYRIZH\",\"commandspacer\":true},\"Ѹ\":{\"text\":\"\\\\cyrchar\\\\CYRUK\",\"commandspacer\":true},\"ѹ\":{\"text\":\"\\\\cyrchar\\\\cyruk\",\"commandspacer\":true},\"Ѻ\":{\"text\":\"\\\\cyrchar\\\\CYROMEGARND\",\"commandspacer\":true},\"ѻ\":{\"text\":\"\\\\cyrchar\\\\cyromegarnd\",\"commandspacer\":true},\"Ѽ\":{\"text\":\"\\\\cyrchar\\\\CYROMEGATITLO\",\"commandspacer\":true},\"ѽ\":{\"text\":\"\\\\cyrchar\\\\cyromegatitlo\",\"commandspacer\":true},\"Ѿ\":{\"text\":\"\\\\cyrchar\\\\CYROT\",\"commandspacer\":true},\"ѿ\":{\"text\":\"\\\\cyrchar\\\\cyrot\",\"commandspacer\":true},\"Ҁ\":{\"text\":\"\\\\cyrchar\\\\CYRKOPPA\",\"commandspacer\":true},\"ҁ\":{\"text\":\"\\\\cyrchar\\\\cyrkoppa\",\"commandspacer\":true},\"҂\":{\"text\":\"\\\\cyrchar\\\\cyrthousands\",\"commandspacer\":true},\"҈\":{\"text\":\"\\\\cyrchar\\\\cyrhundredthousands\",\"commandspacer\":true},\"҉\":{\"text\":\"\\\\cyrchar\\\\cyrmillions\",\"commandspacer\":true},\"Ҍ\":{\"text\":\"\\\\cyrchar\\\\CYRSEMISFTSN\",\"commandspacer\":true},\"ҍ\":{\"text\":\"\\\\cyrchar\\\\cyrsemisftsn\",\"commandspacer\":true},\"Ҏ\":{\"text\":\"\\\\cyrchar\\\\CYRRTICK\",\"commandspacer\":true},\"ҏ\":{\"text\":\"\\\\cyrchar\\\\cyrrtick\",\"commandspacer\":true},\"Ґ\":{\"text\":\"\\\\cyrchar\\\\CYRGUP\",\"commandspacer\":true},\"ґ\":{\"text\":\"\\\\cyrchar\\\\cyrgup\",\"commandspacer\":true},\"Ғ\":{\"text\":\"\\\\cyrchar\\\\CYRGHCRS\",\"commandspacer\":true},\"ғ\":{\"text\":\"\\\\cyrchar\\\\cyrghcrs\",\"commandspacer\":true},\"Ҕ\":{\"text\":\"\\\\cyrchar\\\\CYRGHK\",\"commandspacer\":true},\"ҕ\":{\"text\":\"\\\\cyrchar\\\\cyrghk\",\"commandspacer\":true},\"Җ\":{\"text\":\"\\\\cyrchar\\\\CYRZHDSC\",\"commandspacer\":true},\"җ\":{\"text\":\"\\\\cyrchar\\\\cyrzhdsc\",\"commandspacer\":true},\"Ҙ\":{\"text\":\"\\\\cyrchar\\\\CYRZDSC\",\"commandspacer\":true},\"ҙ\":{\"text\":\"\\\\cyrchar\\\\cyrzdsc\",\"commandspacer\":true},\"Қ\":{\"text\":\"\\\\cyrchar\\\\CYRKDSC\",\"commandspacer\":true},\"қ\":{\"text\":\"\\\\cyrchar\\\\cyrkdsc\",\"commandspacer\":true},\"Ҝ\":{\"text\":\"\\\\cyrchar\\\\CYRKVCRS\",\"commandspacer\":true},\"ҝ\":{\"text\":\"\\\\cyrchar\\\\cyrkvcrs\",\"commandspacer\":true},\"Ҟ\":{\"text\":\"\\\\cyrchar\\\\CYRKHCRS\",\"commandspacer\":true},\"ҟ\":{\"text\":\"\\\\cyrchar\\\\cyrkhcrs\",\"commandspacer\":true},\"Ҡ\":{\"text\":\"\\\\cyrchar\\\\CYRKBEAK\",\"commandspacer\":true},\"ҡ\":{\"text\":\"\\\\cyrchar\\\\cyrkbeak\",\"commandspacer\":true},\"Ң\":{\"text\":\"\\\\cyrchar\\\\CYRNDSC\",\"commandspacer\":true},\"ң\":{\"text\":\"\\\\cyrchar\\\\cyrndsc\",\"commandspacer\":true},\"Ҥ\":{\"text\":\"\\\\cyrchar\\\\CYRNG\",\"commandspacer\":true},\"ҥ\":{\"text\":\"\\\\cyrchar\\\\cyrng\",\"commandspacer\":true},\"Ҧ\":{\"text\":\"\\\\cyrchar\\\\CYRPHK\",\"commandspacer\":true},\"ҧ\":{\"text\":\"\\\\cyrchar\\\\cyrphk\",\"commandspacer\":true},\"Ҩ\":{\"text\":\"\\\\cyrchar\\\\CYRABHHA\",\"commandspacer\":true},\"ҩ\":{\"text\":\"\\\\cyrchar\\\\cyrabhha\",\"commandspacer\":true},\"Ҫ\":{\"text\":\"\\\\cyrchar\\\\CYRSDSC\",\"commandspacer\":true},\"ҫ\":{\"text\":\"\\\\cyrchar\\\\cyrsdsc\",\"commandspacer\":true},\"Ҭ\":{\"text\":\"\\\\cyrchar\\\\CYRTDSC\",\"commandspacer\":true},\"ҭ\":{\"text\":\"\\\\cyrchar\\\\cyrtdsc\",\"commandspacer\":true},\"Ү\":{\"text\":\"\\\\cyrchar\\\\CYRY\",\"commandspacer\":true},\"ү\":{\"text\":\"\\\\cyrchar\\\\cyry\",\"commandspacer\":true},\"Ұ\":{\"text\":\"\\\\cyrchar\\\\CYRYHCRS\",\"commandspacer\":true},\"ұ\":{\"text\":\"\\\\cyrchar\\\\cyryhcrs\",\"commandspacer\":true},\"Ҳ\":{\"text\":\"\\\\cyrchar\\\\CYRHDSC\",\"commandspacer\":true},\"ҳ\":{\"text\":\"\\\\cyrchar\\\\cyrhdsc\",\"commandspacer\":true},\"Ҵ\":{\"text\":\"\\\\cyrchar\\\\CYRTETSE\",\"commandspacer\":true},\"ҵ\":{\"text\":\"\\\\cyrchar\\\\cyrtetse\",\"commandspacer\":true},\"Ҷ\":{\"text\":\"\\\\cyrchar\\\\CYRCHRDSC\",\"commandspacer\":true},\"ҷ\":{\"text\":\"\\\\cyrchar\\\\cyrchrdsc\",\"commandspacer\":true},\"Ҹ\":{\"text\":\"\\\\cyrchar\\\\CYRCHVCRS\",\"commandspacer\":true},\"ҹ\":{\"text\":\"\\\\cyrchar\\\\cyrchvcrs\",\"commandspacer\":true},\"Һ\":{\"text\":\"\\\\cyrchar\\\\CYRSHHA\",\"commandspacer\":true},\"һ\":{\"text\":\"\\\\cyrchar\\\\cyrshha\",\"commandspacer\":true},\"Ҽ\":{\"text\":\"\\\\cyrchar\\\\CYRABHCH\",\"commandspacer\":true},\"ҽ\":{\"text\":\"\\\\cyrchar\\\\cyrabhch\",\"commandspacer\":true},\"Ҿ\":{\"text\":\"\\\\cyrchar\\\\CYRABHCHDSC\",\"commandspacer\":true},\"ҿ\":{\"text\":\"\\\\cyrchar\\\\cyrabhchdsc\",\"commandspacer\":true},\"Ӏ\":{\"text\":\"\\\\cyrchar\\\\CYRpalochka\",\"commandspacer\":true},\"Ӄ\":{\"text\":\"\\\\cyrchar\\\\CYRKHK\",\"commandspacer\":true},\"ӄ\":{\"text\":\"\\\\cyrchar\\\\cyrkhk\",\"commandspacer\":true},\"Ӈ\":{\"text\":\"\\\\cyrchar\\\\CYRNHK\",\"commandspacer\":true},\"ӈ\":{\"text\":\"\\\\cyrchar\\\\cyrnhk\",\"commandspacer\":true},\"Ӌ\":{\"text\":\"\\\\cyrchar\\\\CYRCHLDSC\",\"commandspacer\":true},\"ӌ\":{\"text\":\"\\\\cyrchar\\\\cyrchldsc\",\"commandspacer\":true},\"Ӕ\":{\"text\":\"\\\\cyrchar\\\\CYRAE\",\"commandspacer\":true},\"ӕ\":{\"text\":\"\\\\cyrchar\\\\cyrae\",\"commandspacer\":true},\"Ә\":{\"text\":\"\\\\cyrchar\\\\CYRSCHWA\",\"commandspacer\":true},\"ә\":{\"text\":\"\\\\cyrchar\\\\cyrschwa\",\"commandspacer\":true},\"Ӡ\":{\"text\":\"\\\\cyrchar\\\\CYRABHDZE\",\"commandspacer\":true},\"ӡ\":{\"text\":\"\\\\cyrchar\\\\cyrabhdze\",\"commandspacer\":true},\"Ө\":{\"text\":\"\\\\cyrchar\\\\CYROTLD\",\"commandspacer\":true},\"ө\":{\"text\":\"\\\\cyrchar\\\\cyrotld\",\"commandspacer\":true},\"ࡱ\":{\"math\":\"\\\\\\\\backslash\"},\"ᵃ\":{\"math\":\"^{a}\",\"text\":\"\\\\textsuperscript{a}\"},\"ᵇ\":{\"math\":\"^{b}\",\"text\":\"\\\\textsuperscript{b}\"},\"ᵈ\":{\"math\":\"^{d}\",\"text\":\"\\\\textsuperscript{d}\"},\"ᵉ\":{\"math\":\"^{e}\",\"text\":\"\\\\textsuperscript{e}\"},\"ᵍ\":{\"math\":\"^{g}\",\"text\":\"\\\\textsuperscript{g}\"},\"ᵏ\":{\"math\":\"^{k}\",\"text\":\"\\\\textsuperscript{k}\"},\"ᵐ\":{\"math\":\"^{m}\",\"text\":\"\\\\textsuperscript{m}\"},\"ᵒ\":{\"math\":\"^{o}\",\"text\":\"\\\\textsuperscript{o}\"},\"ᵖ\":{\"math\":\"^{p}\",\"text\":\"\\\\textsuperscript{p}\"},\"ᵗ\":{\"math\":\"^{t}\",\"text\":\"\\\\textsuperscript{t}\"},\"ᵘ\":{\"math\":\"^{u}\",\"text\":\"\\\\textsuperscript{u}\"},\"ᵛ\":{\"math\":\"^{v}\",\"text\":\"\\\\textsuperscript{v}\"},\"ᶜ\":{\"math\":\"^{c}\",\"text\":\"\\\\textsuperscript{c}\"},\"ᶠ\":{\"math\":\"^{f}\",\"text\":\"\\\\textsuperscript{f}\"},\"ᶻ\":{\"math\":\"^{z}\",\"text\":\"\\\\textsuperscript{z}\"},\"Ḃ\":{\"text\":\"\\\\.B\"},\"ḃ\":{\"text\":\"\\\\.b\"},\"Ḅ\":{\"text\":\"\\\\d{B}\"},\"ḅ\":{\"text\":\"\\\\d{b}\"},\"Ḇ\":{\"text\":\"\\\\b{B}\"},\"ḇ\":{\"text\":\"\\\\b{b}\"},\"Ḋ\":{\"text\":\"\\\\.D\"},\"ḋ\":{\"text\":\"\\\\.d\"},\"Ḍ\":{\"text\":\"\\\\d{D}\"},\"ḍ\":{\"text\":\"\\\\d{d}\"},\"Ḏ\":{\"text\":\"\\\\b{D}\"},\"ḏ\":{\"text\":\"\\\\b{d}\"},\"Ḑ\":{\"text\":\"\\\\c{D}\"},\"ḑ\":{\"text\":\"\\\\c{d}\"},\"Ḝ\":{\"text\":\"\\\\c{\\\\u{E}}\"},\"ḝ\":{\"text\":\"\\\\c{\\\\u{e}}\"},\"Ḟ\":{\"text\":\"\\\\.F\"},\"ḟ\":{\"text\":\"\\\\.f\"},\"Ḡ\":{\"text\":\"\\\\=G\"},\"ḡ\":{\"text\":\"\\\\=g\"},\"Ḣ\":{\"text\":\"\\\\.H\"},\"ḣ\":{\"text\":\"\\\\.h\"},\"Ḥ\":{\"text\":\"\\\\d{H}\"},\"ḥ\":{\"text\":\"\\\\d{h}\"},\"Ḧ\":{\"text\":\"\\\\\\\"H\"},\"ḧ\":{\"text\":\"\\\\\\\"h\"},\"Ḩ\":{\"text\":\"\\\\c{H}\"},\"ḩ\":{\"text\":\"\\\\c{h}\"},\"Ḱ\":{\"text\":\"\\\\'K\"},\"ḱ\":{\"text\":\"\\\\'k\"},\"Ḳ\":{\"text\":\"\\\\d{K}\"},\"ḳ\":{\"text\":\"\\\\d{k}\"},\"Ḵ\":{\"text\":\"\\\\b{K}\"},\"ḵ\":{\"text\":\"\\\\b{k}\"},\"Ḷ\":{\"text\":\"\\\\d{L}\"},\"ḷ\":{\"text\":\"\\\\d{l}\"},\"Ḻ\":{\"text\":\"\\\\b{L}\"},\"ḻ\":{\"text\":\"\\\\b{l}\"},\"Ḿ\":{\"text\":\"\\\\'M\"},\"ḿ\":{\"text\":\"\\\\'m\"},\"Ṁ\":{\"text\":\"\\\\.M\"},\"ṁ\":{\"text\":\"\\\\.m\"},\"Ṃ\":{\"text\":\"\\\\d{M}\"},\"ṃ\":{\"text\":\"\\\\d{m}\"},\"Ṅ\":{\"text\":\"\\\\.N\"},\"ṅ\":{\"text\":\"\\\\.n\"},\"Ṇ\":{\"text\":\"\\\\d{N}\"},\"ṇ\":{\"text\":\"\\\\d{n}\"},\"Ṉ\":{\"text\":\"\\\\b{N}\"},\"ṉ\":{\"text\":\"\\\\b{n}\"},\"Ṕ\":{\"text\":\"\\\\'P\"},\"ṕ\":{\"text\":\"\\\\'p\"},\"Ṗ\":{\"text\":\"\\\\.P\"},\"ṗ\":{\"text\":\"\\\\.p\"},\"Ṙ\":{\"text\":\"\\\\.R\"},\"ṙ\":{\"text\":\"\\\\.r\"},\"Ṛ\":{\"text\":\"\\\\d{R}\"},\"ṛ\":{\"text\":\"\\\\d{r}\"},\"Ṟ\":{\"text\":\"\\\\b{R}\"},\"ṟ\":{\"text\":\"\\\\b{r}\"},\"Ṡ\":{\"text\":\"\\\\.S\"},\"ṡ\":{\"text\":\"\\\\.s\"},\"Ṣ\":{\"text\":\"\\\\d{S}\"},\"ṣ\":{\"text\":\"\\\\d{s}\"},\"Ṫ\":{\"text\":\"\\\\.T\"},\"ṫ\":{\"text\":\"\\\\.t\"},\"Ṭ\":{\"text\":\"\\\\d{T}\"},\"ṭ\":{\"text\":\"\\\\d{t}\"},\"Ṯ\":{\"text\":\"\\\\b{T}\"},\"ṯ\":{\"text\":\"\\\\b{t}\"},\"Ṽ\":{\"text\":\"\\\\~V\"},\"ṽ\":{\"text\":\"\\\\~v\"},\"Ṿ\":{\"text\":\"\\\\d{V}\"},\"ṿ\":{\"text\":\"\\\\d{v}\"},\"Ẁ\":{\"text\":\"\\\\`W\"},\"ẁ\":{\"text\":\"\\\\`w\"},\"Ẃ\":{\"text\":\"\\\\'W\"},\"ẃ\":{\"text\":\"\\\\'w\"},\"Ẅ\":{\"text\":\"\\\\\\\"W\"},\"ẅ\":{\"text\":\"\\\\\\\"w\"},\"Ẇ\":{\"text\":\"\\\\.W\"},\"ẇ\":{\"text\":\"\\\\.w\"},\"Ẉ\":{\"text\":\"\\\\d{W}\"},\"ẉ\":{\"text\":\"\\\\d{w}\"},\"Ẋ\":{\"text\":\"\\\\.X\"},\"ẋ\":{\"text\":\"\\\\.x\"},\"Ẍ\":{\"text\":\"\\\\\\\"X\"},\"ẍ\":{\"text\":\"\\\\\\\"x\"},\"Ẏ\":{\"text\":\"\\\\.Y\"},\"ẏ\":{\"text\":\"\\\\.y\"},\"Ẑ\":{\"text\":\"\\\\^Z\"},\"ẑ\":{\"text\":\"\\\\^z\"},\"Ẓ\":{\"text\":\"\\\\d{Z}\"},\"ẓ\":{\"text\":\"\\\\d{z}\"},\"Ẕ\":{\"text\":\"\\\\b{Z}\"},\"ẕ\":{\"text\":\"\\\\b{z}\"},\"ẖ\":{\"text\":\"\\\\b{h}\"},\"ẗ\":{\"text\":\"\\\\\\\"t\"},\"ẘ\":{\"text\":\"\\\\r{w}\"},\"ẙ\":{\"text\":\"\\\\r{y}\"},\"Ạ\":{\"text\":\"\\\\d{A}\"},\"ạ\":{\"text\":\"\\\\d{a}\"},\"Ẹ\":{\"text\":\"\\\\d{E}\"},\"ẹ\":{\"text\":\"\\\\d{e}\"},\"Ẽ\":{\"text\":\"\\\\~E\"},\"ẽ\":{\"text\":\"\\\\~e\"},\"Ị\":{\"text\":\"\\\\d{I}\"},\"ị\":{\"text\":\"\\\\d{i}\"},\"Ọ\":{\"text\":\"\\\\d{O}\"},\"ọ\":{\"text\":\"\\\\d{o}\"},\"Ụ\":{\"text\":\"\\\\d{U}\"},\"ụ\":{\"text\":\"\\\\d{u}\"},\"Ỳ\":{\"text\":\"\\\\`Y\"},\"ỳ\":{\"text\":\"\\\\`y\"},\"Ỵ\":{\"text\":\"\\\\d{Y}\"},\"ỵ\":{\"text\":\"\\\\d{y}\"},\"Ỹ\":{\"text\":\"\\\\~Y\"},\"ỹ\":{\"text\":\"\\\\~y\"},\" \":{\"text\":\" \",\"space\":true},\" \":{\"math\":\"\\\\quad\",\"space\":true},\" \":{\"text\":\"\\\\hspace{0.6em}\",\"space\":true},\" \":{\"math\":\"\\\\quad\",\"space\":true,\"text\":\"\\\\hspace{1em}\"},\" \":{\"text\":\"\\\\;\",\"space\":true},\" \":{\"text\":\"\\\\hspace{0.25em}\",\"space\":true},\" \":{\"text\":\"\\\\hspace{0.166em}\",\"space\":true},\" \":{\"text\":\"\\\\hphantom{0}\",\"space\":true},\" \":{\"text\":\"\\\\hphantom{,}\",\"space\":true},\" \":{\"text\":\"\\\\,\",\"space\":true},\" \":{\"math\":\"\\\\mkern1mu\",\"space\":true},\"​\":{\"text\":\"\\\\mbox\",\"commandspacer\":true,\"space\":true},\"‌\":{\"text\":\"{\\\\aftergroup\\\\ignorespaces}\"},\"‐\":{\"text\":\"-\"},\"‑\":{\"text\":\"-\"},\"‒\":{\"text\":\"-\"},\"–\":{\"text\":\"\\\\textendash\",\"commandspacer\":true},\"—\":{\"text\":\"\\\\textemdash\",\"commandspacer\":true},\"―\":{\"math\":\"\\\\horizbar\",\"text\":\"\\\\rule{1em}{1pt}\"},\"‖\":{\"math\":\"\\\\Vert\"},\"‗\":{\"math\":\"\\\\twolowline\"},\"‘\":{\"text\":\"`\"},\"’\":{\"text\":\"'\"},\"‚\":{\"text\":\",\"},\"‛\":{\"math\":\"\\\\Elzreapos\"},\"“\":{\"text\":\"``\"},\"”\":{\"text\":\"''\"},\"„\":{\"text\":\",,\"},\"‟\":{\"text\":\"\\\\quotedblbase\",\"commandspacer\":true},\"†\":{\"math\":\"\\\\dagger\",\"text\":\"\\\\textdagger\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"‡\":{\"math\":\"\\\\ddagger\",\"text\":\"\\\\textdaggerdbl\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"•\":{\"math\":\"\\\\bullet\",\"text\":\"\\\\textbullet\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"‣\":{\"text\":\">\"},\"․\":{\"text\":\".\"},\"‥\":{\"math\":\"\\\\enleadertwodots\",\"text\":\"..\"},\"…\":{\"math\":\"\\\\ldots\",\"text\":\"\\\\ldots\",\"commandspacer\":true},\"‧\":{\"text\":\"-\"},\" \":{\"text\":\" \",\"space\":true},\"‰\":{\"text\":\"\\\\textperthousand\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"‱\":{\"text\":\"\\\\textpertenthousand\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"′\":{\"math\":\"{'}\"},\"″\":{\"math\":\"{''}\"},\"‴\":{\"math\":\"{'''}\"},\"‵\":{\"math\":\"\\\\backprime\"},\"‶\":{\"math\":\"\\\\backdprime\"},\"‷\":{\"math\":\"\\\\backtrprime\"},\"‸\":{\"math\":\"\\\\caretinsert\"},\"‹\":{\"text\":\"\\\\guilsinglleft\",\"commandspacer\":true},\"›\":{\"text\":\"\\\\guilsinglright\",\"commandspacer\":true},\"‼\":{\"math\":\"\\\\Exclam\"},\"‾\":{\"text\":\"-\"},\"⁃\":{\"math\":\"\\\\hyphenbullet\"},\"⁄\":{\"math\":\"\\\\fracslash\"},\"⁇\":{\"math\":\"\\\\Question\"},\"⁈\":{\"text\":\"?!\"},\"⁉\":{\"text\":\"!?\"},\"⁊\":{\"text\":\"7\"},\"⁐\":{\"math\":\"\\\\closure\"},\"⁗\":{\"math\":\"''''\"},\" \":{\"math\":\"\\\\:\",\"space\":true,\"text\":\"\\\\:\"},\"⁠\":{\"text\":\"\\\\nolinebreak\",\"commandspacer\":true},\"⁰\":{\"math\":\"^{0}\"},\"ⁱ\":{\"math\":\"^{i}\",\"text\":\"\\\\textsuperscript{i}\"},\"⁴\":{\"math\":\"^{4}\"},\"⁵\":{\"math\":\"^{5}\"},\"⁶\":{\"math\":\"^{6}\"},\"⁷\":{\"math\":\"^{7}\"},\"⁸\":{\"math\":\"^{8}\"},\"⁹\":{\"math\":\"^{9}\"},\"⁺\":{\"math\":\"^{+}\"},\"⁻\":{\"math\":\"^{-}\"},\"⁼\":{\"math\":\"^{=}\"},\"⁽\":{\"math\":\"^{(}\"},\"⁾\":{\"math\":\"^{)}\"},\"ⁿ\":{\"math\":\"^{n}\",\"text\":\"\\\\textsuperscript{n}\"},\"₀\":{\"math\":\"_{0}\"},\"₁\":{\"math\":\"_{1}\"},\"₂\":{\"math\":\"_{2}\"},\"₃\":{\"math\":\"_{3}\"},\"₄\":{\"math\":\"_{4}\"},\"₅\":{\"math\":\"_{5}\"},\"₆\":{\"math\":\"_{6}\"},\"₇\":{\"math\":\"_{7}\"},\"₈\":{\"math\":\"_{8}\"},\"₉\":{\"math\":\"_{9}\"},\"₊\":{\"math\":\"_{+}\"},\"₋\":{\"math\":\"_{-}\"},\"₌\":{\"math\":\"_{=}\"},\"₍\":{\"math\":\"_{(}\"},\"₎\":{\"math\":\"_{)}\"},\"ₐ\":{\"math\":\"_{a}\",\"text\":\"\\\\textsubscript{a}\"},\"ₑ\":{\"math\":\"_{e}\",\"text\":\"\\\\textsubscript{e}\"},\"ₒ\":{\"math\":\"_{o}\",\"text\":\"\\\\textsubscript{o}\"},\"ₓ\":{\"math\":\"_{x}\",\"text\":\"\\\\textsubscript{x}\"},\"ₔ\":{\"text\":\"\\\\textsubscript{\\\\textschwa}\",\"textpackages\":[\"tipa\"]},\"ₕ\":{\"math\":\"_{h}\",\"text\":\"\\\\textsubscript{h}\"},\"ₖ\":{\"math\":\"_{k}\",\"text\":\"\\\\textsubscript{k}\"},\"ₗ\":{\"math\":\"_{l}\",\"text\":\"\\\\textsubscript{l}\"},\"ₘ\":{\"math\":\"_{m}\",\"text\":\"\\\\textsubscript{m}\"},\"ₙ\":{\"math\":\"_{n}\",\"text\":\"\\\\textsubscript{n}\"},\"ₚ\":{\"math\":\"_{p}\",\"text\":\"\\\\textsubscript{p}\"},\"ₛ\":{\"math\":\"_{s}\",\"text\":\"\\\\textsubscript{s}\"},\"ₜ\":{\"math\":\"_{t}\",\"text\":\"\\\\textsubscript{t}\"},\"₧\":{\"text\":\"\\\\ensuremath{\\\\Elzpes}\"},\"€\":{\"math\":\"\\\\euro\",\"text\":\"\\\\texteuro\",\"commandspacer\":true},\"⃐\":{\"math\":\"\\\\lvec\"},\"⃑\":{\"math\":\"\\\\rightharpoonup\",\"mathpackages\":[\"amsmath\",\"amssymb\"]},\"⃒\":{\"math\":\"\\\\vertoverlay\"},\"⃖\":{\"math\":\"\\\\LVec\"},\"⃗\":{\"math\":\"\\\\vec\"},\"⃛\":{\"math\":\"\\\\dddot\"},\"⃜\":{\"math\":\"\\\\ddddot\"},\"⃝\":{\"math\":\"\\\\enclosecircle\"},\"⃞\":{\"math\":\"\\\\enclosesquare\"},\"⃟\":{\"math\":\"\\\\enclosediamond\"},\"⃡\":{\"math\":\"\\\\overleftrightarrow\"},\"⃤\":{\"math\":\"\\\\enclosetriangle\"},\"⃧\":{\"math\":\"\\\\annuity\"},\"⃨\":{\"math\":\"\\\\threeunderdot\"},\"⃩\":{\"math\":\"\\\\widebridgeabove\"},\"⃬\":{\"math\":\"\\\\underrightharpoondown\"},\"⃭\":{\"math\":\"\\\\underleftharpoondown\"},\"⃮\":{\"math\":\"\\\\underleftarrow\"},\"⃯\":{\"math\":\"\\\\underrightarrow\"},\"⃰\":{\"math\":\"\\\\asteraccent\"},\"℀\":{\"text\":\"a/c\"},\"℁\":{\"text\":\"a/s\"},\"ℂ\":{\"math\":\"\\\\mathbb{C}\"},\"℃\":{\"text\":\"\\\\textcelsius\",\"commandspacer\":true},\"℅\":{\"text\":\"c/o\"},\"℆\":{\"text\":\"c/u\"},\"ℇ\":{\"math\":\"\\\\Euler\"},\"℉\":{\"text\":\"F\"},\"ℊ\":{\"math\":\"\\\\mathscr{g}\"},\"ℋ\":{\"math\":\"\\\\mathscr{H}\"},\"ℌ\":{\"math\":\"\\\\mathfrak{H}\"},\"ℍ\":{\"math\":\"\\\\mathbb{H}\"},\"ℎ\":{\"math\":\"\\\\Planckconst\"},\"ℏ\":{\"math\":\"\\\\hslash\"},\"ℐ\":{\"math\":\"\\\\mathscr{I}\"},\"ℑ\":{\"math\":\"\\\\mathfrak{I}\"},\"ℒ\":{\"math\":\"\\\\mathscr{L}\"},\"ℓ\":{\"math\":\"\\\\mathscr{l}\"},\"ℕ\":{\"math\":\"\\\\mathbb{N}\"},\"№\":{\"text\":\"\\\\cyrchar\\\\textnumero\",\"commandspacer\":true},\"℗\":{\"text\":\"\\\\textcircledP\",\"commandspacer\":true},\"℘\":{\"math\":\"\\\\wp\"},\"ℙ\":{\"math\":\"\\\\mathbb{P}\"},\"ℚ\":{\"math\":\"\\\\mathbb{Q}\"},\"ℛ\":{\"math\":\"\\\\mathscr{R}\"},\"ℜ\":{\"math\":\"\\\\mathfrak{R}\"},\"ℝ\":{\"math\":\"\\\\mathbb{R}\"},\"℞\":{\"math\":\"\\\\Elzxrat\"},\"℠\":{\"text\":\"\\\\textservicemark\",\"commandspacer\":true},\"℡\":{\"text\":\"TEL\"},\"™\":{\"text\":\"\\\\texttrademark\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"ℤ\":{\"math\":\"\\\\mathbb{Z}\"},\"Ω\":{\"math\":\"\\\\Omega\"},\"℧\":{\"math\":\"\\\\mho\"},\"ℨ\":{\"math\":\"\\\\mathfrak{Z}\"},\"℩\":{\"text\":\"\\\\textriota\",\"commandspacer\":true},\"K\":{\"text\":\"K\"},\"Å\":{\"math\":\"\\\\Angstroem\",\"text\":\"\\\\AA\",\"commandspacer\":true},\"ℬ\":{\"math\":\"\\\\mathscr{B}\"},\"ℭ\":{\"math\":\"\\\\mathfrak{C}\"},\"℮\":{\"text\":\"\\\\textestimated\",\"commandspacer\":true},\"ℯ\":{\"math\":\"\\\\mathscr{e}\"},\"ℰ\":{\"math\":\"\\\\mathscr{E}\"},\"ℱ\":{\"math\":\"\\\\mathscr{F}\"},\"Ⅎ\":{\"math\":\"\\\\Finv\"},\"ℳ\":{\"math\":\"\\\\mathscr{M}\"},\"ℴ\":{\"math\":\"\\\\mathscr{o}\"},\"ℵ\":{\"math\":\"\\\\aleph\"},\"ℶ\":{\"math\":\"\\\\beth\"},\"ℷ\":{\"math\":\"\\\\gimel\"},\"ℸ\":{\"math\":\"\\\\daleth\"},\"ℼ\":{\"math\":\"\\\\mathbb{\\\\pi}\"},\"ℽ\":{\"math\":\"\\\\mathbb{\\\\gamma}\"},\"ℾ\":{\"math\":\"\\\\mathbb{\\\\Gamma}\"},\"ℿ\":{\"math\":\"\\\\mathbb{\\\\Pi}\"},\"⅀\":{\"math\":\"\\\\mathbb{\\\\Sigma}\"},\"⅁\":{\"math\":\"\\\\Game\"},\"⅂\":{\"math\":\"\\\\sansLturned\"},\"⅃\":{\"math\":\"\\\\sansLmirrored\"},\"⅄\":{\"math\":\"\\\\Yup\"},\"ⅅ\":{\"math\":\"\\\\CapitalDifferentialD\"},\"ⅆ\":{\"math\":\"\\\\DifferentialD\"},\"ⅇ\":{\"math\":\"\\\\ExponetialE\"},\"ⅈ\":{\"math\":\"\\\\ComplexI\"},\"ⅉ\":{\"math\":\"\\\\ComplexJ\"},\"⅊\":{\"math\":\"\\\\PropertyLine\"},\"⅋\":{\"math\":\"\\\\invamp\"},\"⅐\":{\"math\":\"\\\\frac{1}{7}\"},\"⅑\":{\"math\":\"\\\\frac{1}{9}\"},\"⅒\":{\"math\":\"\\\\frac{1}{10}\"},\"⅓\":{\"math\":\"\\\\frac{1}{3}\"},\"⅔\":{\"math\":\"\\\\frac{2}{3}\"},\"⅕\":{\"math\":\"\\\\frac{1}{5}\"},\"⅖\":{\"math\":\"\\\\frac{2}{5}\"},\"⅗\":{\"math\":\"\\\\frac{3}{5}\"},\"⅘\":{\"math\":\"\\\\frac{4}{5}\"},\"⅙\":{\"math\":\"\\\\frac{1}{6}\"},\"⅚\":{\"math\":\"\\\\frac{5}{6}\"},\"⅛\":{\"math\":\"\\\\frac{1}{8}\"},\"⅜\":{\"math\":\"\\\\frac{3}{8}\"},\"⅝\":{\"math\":\"\\\\frac{5}{8}\"},\"⅞\":{\"math\":\"\\\\frac{7}{8}\"},\"⅟\":{\"math\":\"\\\\frac{1}\"},\"Ⅰ\":{\"text\":\"I\"},\"Ⅱ\":{\"text\":\"II\"},\"Ⅲ\":{\"text\":\"III\"},\"Ⅳ\":{\"text\":\"IV\"},\"Ⅴ\":{\"text\":\"V\"},\"Ⅵ\":{\"text\":\"VI\"},\"Ⅶ\":{\"text\":\"VII\"},\"Ⅷ\":{\"text\":\"VIII\"},\"Ⅸ\":{\"text\":\"IX\"},\"Ⅹ\":{\"text\":\"X\"},\"Ⅺ\":{\"text\":\"XI\"},\"Ⅻ\":{\"text\":\"XII\"},\"Ⅼ\":{\"text\":\"L\"},\"Ⅽ\":{\"text\":\"C\"},\"Ⅾ\":{\"text\":\"D\"},\"Ⅿ\":{\"text\":\"M\"},\"ⅰ\":{\"text\":\"i\"},\"ⅱ\":{\"text\":\"ii\"},\"ⅲ\":{\"text\":\"iii\"},\"ⅳ\":{\"text\":\"iv\"},\"ⅴ\":{\"text\":\"v\"},\"ⅵ\":{\"text\":\"vi\"},\"ⅶ\":{\"text\":\"vii\"},\"ⅷ\":{\"text\":\"viii\"},\"ⅸ\":{\"text\":\"ix\"},\"ⅹ\":{\"text\":\"x\"},\"ⅺ\":{\"text\":\"xi\"},\"ⅻ\":{\"text\":\"xii\"},\"ⅼ\":{\"text\":\"l\"},\"ⅽ\":{\"text\":\"c\"},\"ⅾ\":{\"text\":\"d\"},\"ⅿ\":{\"text\":\"m\"},\"↉\":{\"math\":\"\\\\frac{0}{3}\"},\"←\":{\"math\":\"\\\\leftarrow\"},\"↑\":{\"math\":\"\\\\uparrow\"},\"→\":{\"math\":\"\\\\rightarrow\",\"text\":\"\\\\textrightarrow\",\"commandspacer\":true,\"textpackages\":[\"textcomp\"]},\"↓\":{\"math\":\"\\\\downarrow\"},\"↔\":{\"math\":\"\\\\leftrightarrow\"},\"↕\":{\"math\":\"\\\\updownarrow\"},\"↖\":{\"math\":\"\\\\nwarrow\"},\"↗\":{\"math\":\"\\\\nearrow\"},\"↘\":{\"math\":\"\\\\searrow\"},\"↙\":{\"math\":\"\\\\swarrow\"},\"↚\":{\"math\":\"\\\\nleftarrow\"},\"↛\":{\"math\":\"\\\\nrightarrow\"},\"↜\":{\"math\":\"\\\\arrowwaveleft\"},\"↝\":{\"math\":\"\\\\arrowwaveright\"},\"↞\":{\"math\":\"\\\\twoheadleftarrow\"},\"↟\":{\"math\":\"\\\\twoheaduparrow\"},\"↠\":{\"math\":\"\\\\twoheadrightarrow\"},\"↡\":{\"math\":\"\\\\twoheaddownarrow\"},\"↢\":{\"math\":\"\\\\leftarrowtail\"},\"↣\":{\"math\":\"\\\\rightarrowtail\"},\"↤\":{\"math\":\"\\\\mapsfrom\"},\"↥\":{\"math\":\"\\\\MapsUp\"},\"↦\":{\"math\":\"\\\\mapsto\"},\"↧\":{\"math\":\"\\\\MapsDown\"},\"↨\":{\"math\":\"\\\\updownarrowbar\"},\"↩\":{\"math\":\"\\\\hookleftarrow\"},\"↪\":{\"math\":\"\\\\hookrightarrow\"},\"↫\":{\"math\":\"\\\\looparrowleft\"},\"↬\":{\"math\":\"\\\\looparrowright\"},\"↭\":{\"math\":\"\\\\leftrightsquigarrow\"},\"↮\":{\"math\":\"\\\\nleftrightarrow\"},\"↯\":{\"math\":\"\\\\lightning\"},\"↰\":{\"math\":\"\\\\Lsh\"},\"↱\":{\"math\":\"\\\\Rsh\"},\"↲\":{\"math\":\"\\\\dlsh\"},\"↳\":{\"text\":\"\\\\reflectbox{\\\\carriagereturn}\",\"textpackages\":[\"graphics\",\"unicode-math\"]},\"↴\":{\"math\":\"\\\\linefeed\"},\"↵\":{\"math\":\"\\\\carriagereturn\"},\"↶\":{\"math\":\"\\\\curvearrowleft\"},\"↷\":{\"math\":\"\\\\curvearrowright\"},\"↸\":{\"math\":\"\\\\barovernorthwestarrow\"},\"↹\":{\"math\":\"\\\\barleftarrowrightarrowba\"},\"↺\":{\"math\":\"\\\\circlearrowleft\"},\"↻\":{\"math\":\"\\\\circlearrowright\"},\"↼\":{\"math\":\"\\\\leftharpoonup\"},\"↽\":{\"math\":\"\\\\leftharpoondown\"},\"↾\":{\"math\":\"\\\\upharpoonright\"},\"↿\":{\"math\":\"\\\\upharpoonleft\"},\"⇀\":{\"math\":\"\\\\rightharpoonup\",\"mathpackages\":[\"amsmath\",\"amssymb\"]},\"⇁\":{\"math\":\"\\\\rightharpoondown\"},\"⇂\":{\"math\":\"\\\\downharpoonright\"},\"⇃\":{\"math\":\"\\\\downharpoonleft\"},\"⇄\":{\"math\":\"\\\\rightleftarrows\"},\"⇅\":{\"math\":\"\\\\dblarrowupdown\"},\"⇆\":{\"math\":\"\\\\leftrightarrows\"},\"⇇\":{\"math\":\"\\\\leftleftarrows\"},\"⇈\":{\"math\":\"\\\\upuparrows\"},\"⇉\":{\"math\":\"\\\\rightrightarrows\"},\"⇊\":{\"math\":\"\\\\downdownarrows\"},\"⇋\":{\"math\":\"\\\\leftrightharpoons\"},\"⇌\":{\"math\":\"\\\\rightleftharpoons\"},\"⇍\":{\"math\":\"\\\\nLeftarrow\"},\"⇎\":{\"math\":\"\\\\nLeftrightarrow\"},\"⇏\":{\"math\":\"\\\\nRightarrow\"},\"⇐\":{\"math\":\"\\\\Leftarrow\"},\"⇑\":{\"math\":\"\\\\Uparrow\"},\"⇒\":{\"math\":\"\\\\Rightarrow\"},\"⇓\":{\"math\":\"\\\\Downarrow\"},\"⇔\":{\"math\":\"\\\\Leftrightarrow\"},\"⇕\":{\"math\":\"\\\\Updownarrow\"},\"⇖\":{\"math\":\"\\\\Nwarrow\"},\"⇗\":{\"math\":\"\\\\Nearrow\"},\"⇘\":{\"math\":\"\\\\Searrow\"},\"⇙\":{\"math\":\"\\\\Swarrow\"},\"⇚\":{\"math\":\"\\\\Lleftarrow\"},\"⇛\":{\"math\":\"\\\\Rrightarrow\"},\"⇜\":{\"math\":\"\\\\leftsquigarrow\"},\"⇝\":{\"math\":\"\\\\rightsquigarrow\"},\"⇞\":{\"math\":\"\\\\nHuparrow\"},\"⇟\":{\"math\":\"\\\\nHdownarrow\"},\"⇠\":{\"math\":\"\\\\dashleftarrow\"},\"⇡\":{\"math\":\"\\\\updasharrow\"},\"⇢\":{\"math\":\"\\\\dashrightarrow\"},\"⇣\":{\"math\":\"\\\\downdasharrow\"},\"⇤\":{\"math\":\"\\\\LeftArrowBar\"},\"⇥\":{\"math\":\"\\\\RightArrowBar\"},\"⇦\":{\"math\":\"\\\\leftwhitearrow\"},\"⇧\":{\"math\":\"\\\\upwhitearrow\"},\"⇨\":{\"math\":\"\\\\rightwhitearrow\"},\"⇩\":{\"math\":\"\\\\downwhitearrow\"},\"⇪\":{\"math\":\"\\\\whitearrowupfrombar\"},\"⇴\":{\"math\":\"\\\\circleonrightarrow\"},\"⇵\":{\"math\":\"\\\\DownArrowUpArrow\"},\"⇶\":{\"math\":\"\\\\rightthreearrows\"},\"⇷\":{\"math\":\"\\\\nvleftarrow\"},\"⇸\":{\"math\":\"\\\\pfun\"},\"⇹\":{\"math\":\"\\\\nvleftrightarrow\"},\"⇺\":{\"math\":\"\\\\nVleftarrow\"},\"⇻\":{\"math\":\"\\\\ffun\"},\"⇼\":{\"math\":\"\\\\nVleftrightarrow\"},\"⇽\":{\"math\":\"\\\\leftarrowtriangle\"},\"⇾\":{\"math\":\"\\\\rightarrowtriangle\"},\"⇿\":{\"math\":\"\\\\leftrightarrowtriangle\"},\"∀\":{\"math\":\"\\\\forall\"},\"∁\":{\"math\":\"\\\\complement\"},\"∂\":{\"math\":\"\\\\partial\"},\"∃\":{\"math\":\"\\\\exists\"},\"∄\":{\"math\":\"\\\\nexists\"},\"∅\":{\"math\":\"\\\\varnothing\"},\"∆\":{\"math\":\"\\\\increment\"},\"∇\":{\"math\":\"\\\\nabla\"},\"∈\":{\"math\":\"\\\\in\"},\"∉\":{\"math\":\"\\\\not\\\\in\"},\"∊\":{\"math\":\"\\\\smallin\"},\"∋\":{\"math\":\"\\\\ni\"},\"∌\":{\"math\":\"\\\\not\\\\ni\"},\"∍\":{\"math\":\"\\\\smallni\"},\"∎\":{\"math\":\"\\\\QED\"},\"∏\":{\"math\":\"\\\\prod\"},\"∐\":{\"math\":\"\\\\coprod\"},\"∑\":{\"math\":\"\\\\sum\"},\"−\":{\"math\":\"-\",\"text\":\"-\"},\"∓\":{\"math\":\"\\\\mp\"},\"∔\":{\"math\":\"\\\\dotplus\"},\"∕\":{\"text\":\"/\"},\"∖\":{\"math\":\"\\\\setminus\"},\"∗\":{\"math\":\"{_\\\\ast}\"},\"∘\":{\"math\":\"\\\\circ\"},\"∙\":{\"math\":\"\\\\bullet\"},\"√\":{\"math\":\"\\\\surd\"},\"∛\":{\"math\":\"\\\\sqrt[3]\"},\"∜\":{\"math\":\"\\\\sqrt[4]\"},\"∝\":{\"math\":\"\\\\propto\"},\"∞\":{\"math\":\"\\\\infty\"},\"∟\":{\"math\":\"\\\\rightangle\"},\"∠\":{\"math\":\"\\\\angle\"},\"∡\":{\"math\":\"\\\\measuredangle\"},\"∢\":{\"math\":\"\\\\sphericalangle\"},\"∣\":{\"math\":\"\\\\mid\"},\"∤\":{\"math\":\"\\\\nmid\"},\"∥\":{\"math\":\"\\\\parallel\"},\"∦\":{\"math\":\"\\\\nparallel\"},\"∧\":{\"math\":\"\\\\wedge\"},\"∨\":{\"math\":\"\\\\vee\"},\"∩\":{\"math\":\"\\\\cap\"},\"∪\":{\"math\":\"\\\\cup\"},\"∫\":{\"math\":\"\\\\int\"},\"∬\":{\"math\":\"{\\\\int\\\\!\\\\int}\"},\"∭\":{\"math\":\"{\\\\int\\\\!\\\\int\\\\!\\\\int}\"},\"∮\":{\"math\":\"\\\\oint\"},\"∯\":{\"math\":\"\\\\surfintegral\"},\"∰\":{\"math\":\"\\\\volintegral\"},\"∱\":{\"math\":\"\\\\clwintegral\"},\"∲\":{\"math\":\"\\\\lcirclerightint\",\"mathpackages\":[\"MnSymbol\"]},\"∳\":{\"math\":\"\\\\rcirclerightint\",\"mathpackages\":[\"MnSymbol\"]},\"∴\":{\"math\":\"\\\\therefore\"},\"∵\":{\"math\":\"\\\\because\"},\"∶\":{\"math\":\":\"},\"∷\":{\"math\":\"\\\\Colon\"},\"∸\":{\"math\":\"\\\\dotdiv\",\"mathpackages\":[\"mathabx\"]},\"∹\":{\"math\":\"\\\\eqcolon\"},\"∺\":{\"math\":\"\\\\mathbin{{:}\\\\!\\\\!{-}\\\\!\\\\!{:}}\"},\"∻\":{\"math\":\"\\\\homothetic\"},\"∼\":{\"math\":\"\\\\sim\"},\"∽\":{\"math\":\"\\\\backsim\"},\"∾\":{\"math\":\"\\\\lazysinv\"},\"∿\":{\"math\":\"\\\\AC\"},\"≀\":{\"math\":\"\\\\wr\"},\"≁\":{\"math\":\"\\\\not\\\\sim\"},\"≂\":{\"math\":\"\\\\texteqsim\",\"mathpackages\":[\"xecjk\"]},\"≂̸\":{\"math\":\"\\\\NotEqualTilde\"},\"≃\":{\"math\":\"\\\\simeq\"},\"≄\":{\"math\":\"\\\\not\\\\simeq\"},\"≅\":{\"math\":\"\\\\cong\"},\"≆\":{\"math\":\"\\\\approxnotequal\"},\"≇\":{\"math\":\"\\\\not\\\\cong\"},\"≈\":{\"math\":\"\\\\approx\"},\"≉\":{\"math\":\"\\\\not\\\\approx\"},\"≊\":{\"math\":\"\\\\approxeq\"},\"≋\":{\"math\":\"\\\\tildetrpl\"},\"≋̸\":{\"math\":\"\\\\not\\\\apid\"},\"≌\":{\"math\":\"\\\\allequal\"},\"≍\":{\"math\":\"\\\\asymp\"},\"≎\":{\"math\":\"\\\\Bumpeq\"},\"≎̸\":{\"math\":\"\\\\NotHumpDownHump\"},\"≏\":{\"math\":\"\\\\bumpeq\"},\"≏̸\":{\"math\":\"\\\\NotHumpEqual\"},\"≐\":{\"math\":\"\\\\doteq\"},\"≐̸\":{\"math\":\"\\\\not\\\\doteq\"},\"≑\":{\"math\":\"\\\\doteqdot\"},\"≒\":{\"math\":\"\\\\fallingdotseq\"},\"≓\":{\"math\":\"\\\\risingdotseq\"},\"≔\":{\"math\":\"\\\\coloneq\",\"text\":\":=\"},\"≕\":{\"math\":\"=:\"},\"≖\":{\"math\":\"\\\\eqcirc\"},\"≗\":{\"math\":\"\\\\circeq\"},\"≘\":{\"math\":\"\\\\arceq\"},\"≙\":{\"math\":\"\\\\estimates\"},\"≛\":{\"math\":\"\\\\starequal\"},\"≜\":{\"math\":\"\\\\triangleq\"},\"≝\":{\"math\":\"\\\\eqdef\"},\"≞\":{\"math\":\"\\\\measeq\"},\"≠\":{\"math\":\"\\\\neq\"},\"≡\":{\"math\":\"\\\\equiv\"},\"≢\":{\"math\":\"\\\\not\\\\equiv\"},\"≣\":{\"math\":\"\\\\Equiv\"},\"≤\":{\"math\":\"\\\\leq\"},\"≥\":{\"math\":\"\\\\geq\"},\"≦\":{\"math\":\"\\\\leqq\"},\"≧\":{\"math\":\"\\\\geqq\"},\"≨\":{\"math\":\"\\\\lneqq\"},\"≨︀\":{\"math\":\"\\\\lvertneqq\"},\"≩\":{\"math\":\"\\\\gneqq\"},\"≩︀\":{\"math\":\"\\\\gvertneqq\"},\"≪\":{\"math\":\"\\\\ll\"},\"≪̸\":{\"math\":\"\\\\NotLessLess\"},\"≫\":{\"math\":\"\\\\gg\"},\"≫̸\":{\"math\":\"\\\\NotGreaterGreater\"},\"≬\":{\"math\":\"\\\\between\"},\"≭\":{\"math\":\"{\\\\not\\\\kern-0.3em\\\\times}\"},\"≮\":{\"math\":\"\\\\not<\"},\"≯\":{\"math\":\"\\\\not>\"},\"≰\":{\"math\":\"\\\\not\\\\leq\"},\"≱\":{\"math\":\"\\\\not\\\\geq\"},\"≲\":{\"math\":\"\\\\lessequivlnt\"},\"≳\":{\"math\":\"\\\\greaterequivlnt\"},\"≶\":{\"math\":\"\\\\lessgtr\"},\"≷\":{\"math\":\"\\\\gtrless\"},\"≸\":{\"math\":\"\\\\notlessgreater\"},\"≹\":{\"math\":\"\\\\notgreaterless\"},\"≺\":{\"math\":\"\\\\prec\"},\"≻\":{\"math\":\"\\\\succ\"},\"≼\":{\"math\":\"\\\\preccurlyeq\"},\"≽\":{\"math\":\"\\\\succcurlyeq\"},\"≾\":{\"math\":\"\\\\precapprox\"},\"≾̸\":{\"math\":\"\\\\NotPrecedesTilde\"},\"≿\":{\"math\":\"\\\\succapprox\"},\"≿̸\":{\"math\":\"\\\\NotSucceedsTilde\"},\"⊀\":{\"math\":\"\\\\not\\\\prec\"},\"⊁\":{\"math\":\"\\\\not\\\\succ\"},\"⊂\":{\"math\":\"\\\\subset\"},\"⊃\":{\"math\":\"\\\\supset\"},\"⊄\":{\"math\":\"\\\\not\\\\subset\"},\"⊅\":{\"math\":\"\\\\not\\\\supset\"},\"⊆\":{\"math\":\"\\\\subseteq\"},\"⊇\":{\"math\":\"\\\\supseteq\"},\"⊈\":{\"math\":\"\\\\not\\\\subseteq\"},\"⊉\":{\"math\":\"\\\\not\\\\supseteq\"},\"⊊\":{\"math\":\"\\\\subsetneq\"},\"⊊︀\":{\"math\":\"\\\\varsubsetneqq\"},\"⊋\":{\"math\":\"\\\\supsetneq\"},\"⊋︀\":{\"math\":\"\\\\varsupsetneq\"},\"⊌\":{\"math\":\"\\\\cupleftarrow\"},\"⊍\":{\"math\":\"\\\\cupdot\"},\"⊎\":{\"math\":\"\\\\uplus\"},\"⊏\":{\"math\":\"\\\\sqsubset\"},\"⊏̸\":{\"math\":\"\\\\NotSquareSubset\"},\"⊐\":{\"math\":\"\\\\sqsupset\"},\"⊐̸\":{\"math\":\"\\\\NotSquareSuperset\"},\"⊑\":{\"math\":\"\\\\sqsubseteq\"},\"⊒\":{\"math\":\"\\\\sqsupseteq\"},\"⊓\":{\"math\":\"\\\\sqcap\"},\"⊔\":{\"math\":\"\\\\sqcup\"},\"⊕\":{\"math\":\"\\\\oplus\"},\"⊖\":{\"math\":\"\\\\ominus\"},\"⊗\":{\"math\":\"\\\\otimes\"},\"⊘\":{\"math\":\"\\\\oslash\"},\"⊙\":{\"math\":\"\\\\odot\"},\"⊚\":{\"math\":\"\\\\circledcirc\"},\"⊛\":{\"math\":\"\\\\circledast\"},\"⊜\":{\"math\":\"\\\\circledequal\"},\"⊝\":{\"math\":\"\\\\circleddash\"},\"⊞\":{\"math\":\"\\\\boxplus\"},\"⊟\":{\"math\":\"\\\\boxminus\"},\"⊠\":{\"math\":\"\\\\boxtimes\"},\"⊡\":{\"math\":\"\\\\boxdot\"},\"⊢\":{\"math\":\"\\\\vdash\"},\"⊣\":{\"math\":\"\\\\dashv\"},\"⊤\":{\"math\":\"\\\\top\"},\"⊥\":{\"math\":\"\\\\perp\"},\"⊦\":{\"math\":\"\\\\assert\"},\"⊧\":{\"math\":\"\\\\truestate\"},\"⊨\":{\"math\":\"\\\\forcesextra\"},\"⊩\":{\"math\":\"\\\\Vdash\"},\"⊪\":{\"math\":\"\\\\Vvdash\"},\"⊫\":{\"math\":\"\\\\VDash\"},\"⊬\":{\"math\":\"\\\\nvdash\"},\"⊭\":{\"math\":\"\\\\nvDash\"},\"⊮\":{\"math\":\"\\\\nVdash\"},\"⊯\":{\"math\":\"\\\\nVDash\"},\"⊰\":{\"math\":\"\\\\prurel\"},\"⊱\":{\"math\":\"\\\\scurel\"},\"⊲\":{\"math\":\"\\\\vartriangleleft\"},\"⊳\":{\"math\":\"\\\\vartriangleright\"},\"⊴\":{\"math\":\"\\\\trianglelefteq\"},\"⊵\":{\"math\":\"\\\\trianglerighteq\"},\"⊶\":{\"math\":\"\\\\original\"},\"⊷\":{\"math\":\"\\\\image\"},\"⊸\":{\"math\":\"\\\\multimap\"},\"⊹\":{\"math\":\"\\\\hermitconjmatrix\"},\"⊺\":{\"math\":\"\\\\intercal\"},\"⊻\":{\"math\":\"\\\\veebar\"},\"⊼\":{\"math\":\"\\\\barwedge\"},\"⊽\":{\"math\":\"\\\\barvee\"},\"⊾\":{\"math\":\"\\\\rightanglearc\"},\"⊿\":{\"math\":\"\\\\varlrtriangle\"},\"⋂\":{\"math\":\"\\\\bigcap\"},\"⋃\":{\"math\":\"\\\\bigcup\"},\"⋄\":{\"math\":\"\\\\diamond\"},\"⋅\":{\"math\":\"\\\\cdot\"},\"⋆\":{\"math\":\"\\\\star\"},\"⋇\":{\"math\":\"\\\\divideontimes\"},\"⋈\":{\"math\":\"\\\\bowtie\"},\"⋉\":{\"math\":\"\\\\ltimes\"},\"⋊\":{\"math\":\"\\\\rtimes\"},\"⋋\":{\"math\":\"\\\\leftthreetimes\"},\"⋌\":{\"math\":\"\\\\rightthreetimes\"},\"⋍\":{\"math\":\"\\\\backsimeq\"},\"⋎\":{\"math\":\"\\\\curlyvee\"},\"⋏\":{\"math\":\"\\\\curlywedge\"},\"⋐\":{\"math\":\"\\\\Subset\"},\"⋑\":{\"math\":\"\\\\Supset\"},\"⋒\":{\"math\":\"\\\\Cap\"},\"⋓\":{\"math\":\"\\\\Cup\"},\"⋔\":{\"math\":\"\\\\pitchfork\"},\"⋕\":{\"math\":\"\\\\hash\"},\"⋖\":{\"math\":\"\\\\lessdot\"},\"⋗\":{\"math\":\"\\\\gtrdot\"},\"⋘\":{\"math\":\"\\\\verymuchless\"},\"⋙\":{\"math\":\"\\\\verymuchgreater\"},\"⋚\":{\"math\":\"\\\\lesseqgtr\"},\"⋛\":{\"math\":\"\\\\gtreqless\"},\"⋜\":{\"math\":\"\\\\eqless\"},\"⋝\":{\"math\":\"\\\\eqgtr\"},\"⋞\":{\"math\":\"\\\\curlyeqprec\"},\"⋟\":{\"math\":\"\\\\curlyeqsucc\"},\"⋠\":{\"math\":\"\\\\npreceq\"},\"⋡\":{\"math\":\"\\\\nsucceq\"},\"⋢\":{\"math\":\"\\\\not\\\\sqsubseteq\"},\"⋣\":{\"math\":\"\\\\not\\\\sqsupseteq\"},\"⋤\":{\"math\":\"\\\\sqsubsetneq\"},\"⋥\":{\"math\":\"\\\\Elzsqspne\"},\"⋦\":{\"math\":\"\\\\lnsim\"},\"⋧\":{\"math\":\"\\\\gnsim\"},\"⋨\":{\"math\":\"\\\\precedesnotsimilar\"},\"⋩\":{\"math\":\"\\\\succnsim\"},\"⋪\":{\"math\":\"\\\\ntriangleleft\"},\"⋫\":{\"math\":\"\\\\ntriangleright\"},\"⋬\":{\"math\":\"\\\\ntrianglelefteq\"},\"⋭\":{\"math\":\"\\\\ntrianglerighteq\"},\"⋮\":{\"math\":\"\\\\vdots\"},\"⋯\":{\"math\":\"\\\\cdots\"},\"⋰\":{\"math\":\"\\\\upslopeellipsis\"},\"⋱\":{\"math\":\"\\\\downslopeellipsis\"},\"⋲\":{\"math\":\"\\\\disin\"},\"⋳\":{\"math\":\"\\\\varisins\"},\"⋴\":{\"math\":\"\\\\isins\"},\"⋵\":{\"math\":\"\\\\isindot\"},\"⋶\":{\"math\":\"\\\\barin\"},\"⋷\":{\"math\":\"\\\\isinobar\"},\"⋸\":{\"math\":\"\\\\isinvb\"},\"⋹\":{\"math\":\"\\\\isinE\"},\"⋺\":{\"math\":\"\\\\nisd\"},\"⋻\":{\"math\":\"\\\\varnis\"},\"⋼\":{\"math\":\"\\\\nis\"},\"⋽\":{\"math\":\"\\\\varniobar\"},\"⋾\":{\"math\":\"\\\\niobar\"},\"⋿\":{\"math\":\"\\\\bagmember\"},\"⌀\":{\"math\":\"\\\\diameter\"},\"⌂\":{\"math\":\"\\\\house\"},\"⌅\":{\"math\":\"\\\\varbarwedge\",\"text\":\"\\\\barwedge\",\"commandspacer\":true},\"⌆\":{\"math\":\"\\\\perspcorrespond\"},\"⌈\":{\"math\":\"\\\\lceil\"},\"⌉\":{\"math\":\"\\\\rceil\"},\"⌊\":{\"math\":\"\\\\lfloor\"},\"⌋\":{\"math\":\"\\\\rfloor\"},\"⌐\":{\"math\":\"\\\\invneg\"},\"⌑\":{\"math\":\"\\\\wasylozenge\"},\"⌒\":{\"math\":\"\\\\profline\"},\"⌓\":{\"math\":\"\\\\profsurf\"},\"⌕\":{\"math\":\"\\\\recorder\"},\"⌖\":{\"math\":\"{\\\\mathchar\\\"2208}\"},\"⌗\":{\"math\":\"\\\\viewdata\"},\"⌙\":{\"math\":\"\\\\turnednot\"},\"⌜\":{\"math\":\"\\\\ulcorner\"},\"⌝\":{\"math\":\"\\\\urcorner\"},\"⌞\":{\"math\":\"\\\\llcorner\"},\"⌟\":{\"math\":\"\\\\lrcorner\"},\"⌠\":{\"math\":\"\\\\inttop\"},\"⌡\":{\"math\":\"\\\\intbottom\"},\"⌢\":{\"math\":\"\\\\frown\"},\"⌣\":{\"math\":\"\\\\smile\"},\"〈\":{\"math\":\"\\\\langle\"},\"〉\":{\"math\":\"\\\\rangle\"},\"⌬\":{\"math\":\"\\\\varhexagonlrbonds\"},\"⌲\":{\"math\":\"\\\\conictaper\"},\"⌶\":{\"math\":\"\\\\topbot\"},\"⌹\":{\"math\":\"\\\\APLinv\"},\"⌿\":{\"math\":\"\\\\notslash\"},\"⍀\":{\"math\":\"\\\\notbackslash\"},\"⍇\":{\"math\":\"\\\\APLleftarrowbox\"},\"⍈\":{\"math\":\"\\\\APLrightarrowbox\"},\"⍉\":{\"math\":\"\\\\invdiameter\"},\"⍐\":{\"math\":\"\\\\APLuparrowbox\"},\"⍓\":{\"math\":\"\\\\APLboxupcaret\"},\"⍗\":{\"math\":\"\\\\APLdownarrowbox\"},\"⍝\":{\"math\":\"\\\\APLcomment\"},\"⍞\":{\"math\":\"\\\\APLinput\"},\"⍟\":{\"math\":\"\\\\APLlog\"},\"⍰\":{\"math\":\"\\\\APLboxquestion\"},\"⍼\":{\"math\":\"\\\\rangledownzigzagarrow\"},\"⎔\":{\"math\":\"\\\\hexagon\"},\"⎛\":{\"math\":\"\\\\lparenuend\"},\"⎜\":{\"math\":\"\\\\lparenextender\"},\"⎝\":{\"math\":\"\\\\lparenlend\"},\"⎞\":{\"math\":\"\\\\rparenuend\"},\"⎟\":{\"math\":\"\\\\rparenextender\"},\"⎠\":{\"math\":\"\\\\rparenlend\"},\"⎡\":{\"math\":\"\\\\lbrackuend\"},\"⎢\":{\"math\":\"\\\\lbrackextender\"},\"⎣\":{\"math\":\"\\\\Elzdlcorn\"},\"⎤\":{\"math\":\"\\\\rbrackuend\"},\"⎥\":{\"math\":\"\\\\rbrackextender\"},\"⎦\":{\"math\":\"\\\\rbracklend\"},\"⎧\":{\"math\":\"\\\\lbraceuend\"},\"⎨\":{\"math\":\"\\\\lbracemid\"},\"⎩\":{\"math\":\"\\\\lbracelend\"},\"⎪\":{\"math\":\"\\\\vbraceextender\"},\"⎫\":{\"math\":\"\\\\rbraceuend\"},\"⎬\":{\"math\":\"\\\\rbracemid\"},\"⎭\":{\"math\":\"\\\\rbracelend\"},\"⎮\":{\"math\":\"\\\\intextender\"},\"⎯\":{\"math\":\"\\\\harrowextender\"},\"⎰\":{\"math\":\"\\\\lmoustache\"},\"⎱\":{\"math\":\"\\\\rmoustache\"},\"⎲\":{\"math\":\"\\\\sumtop\"},\"⎳\":{\"math\":\"\\\\sumbottom\"},\"⎴\":{\"math\":\"\\\\overbracket\"},\"⎵\":{\"math\":\"\\\\underbracket\"},\"⎶\":{\"math\":\"\\\\bbrktbrk\"},\"⎷\":{\"math\":\"\\\\sqrtbottom\"},\"⎸\":{\"math\":\"\\\\lvboxline\"},\"⎹\":{\"math\":\"\\\\rvboxline\"},\"⏎\":{\"math\":\"\\\\varcarriagereturn\"},\"⏜\":{\"math\":\"\\\\overparen\"},\"⏝\":{\"math\":\"\\\\underparen\"},\"⏞\":{\"math\":\"\\\\overbrace\"},\"⏟\":{\"math\":\"\\\\underbrace\"},\"⏠\":{\"math\":\"\\\\obrbrak\"},\"⏡\":{\"math\":\"\\\\ubrbrak\"},\"⏢\":{\"math\":\"\\\\trapezium\"},\"⏣\":{\"math\":\"\\\\benzenr\"},\"⏤\":{\"math\":\"\\\\strns\"},\"⏥\":{\"math\":\"\\\\fltns\"},\"⏦\":{\"math\":\"\\\\accurrent\"},\"⏧\":{\"math\":\"\\\\elinters\"},\"␀\":{\"text\":\"NUL\"},\"␁\":{\"text\":\"SOH\"},\"␂\":{\"text\":\"STX\"},\"␃\":{\"text\":\"ETX\"},\"␄\":{\"text\":\"EOT\"},\"␅\":{\"text\":\"ENQ\"},\"␆\":{\"text\":\"ACK\"},\"␇\":{\"text\":\"BEL\"},\"␈\":{\"text\":\"BS\"},\"␉\":{\"text\":\"HT\"},\"␊\":{\"text\":\"LF\"},\"␋\":{\"text\":\"VT\"},\"␌\":{\"text\":\"FF\"},\"␍\":{\"text\":\"CR\"},\"␎\":{\"text\":\"SO\"},\"␏\":{\"text\":\"SI\"},\"␐\":{\"text\":\"DLE\"},\"␑\":{\"text\":\"DC1\"},\"␒\":{\"text\":\"DC2\"},\"␓\":{\"text\":\"DC3\"},\"␔\":{\"text\":\"DC4\"},\"␕\":{\"text\":\"NAK\"},\"␖\":{\"text\":\"SYN\"},\"␗\":{\"text\":\"ETB\"},\"␘\":{\"text\":\"CAN\"},\"␙\":{\"text\":\"EM\"},\"␚\":{\"text\":\"SUB\"},\"␛\":{\"text\":\"ESC\"},\"␜\":{\"text\":\"FS\"},\"␝\":{\"text\":\"GS\"},\"␞\":{\"text\":\"RS\"},\"␟\":{\"text\":\"US\"},\"␠\":{\"text\":\"SP\"},\"␡\":{\"text\":\"DEL\"},\"␣\":{\"text\":\"\\\\textvisiblespace\",\"commandspacer\":true},\"␤\":{\"text\":\"NL\"},\"␥\":{\"text\":\"///\"},\"␦\":{\"text\":\"?\"},\"①\":{\"text\":\"\\\\ding{172}\"},\"②\":{\"text\":\"\\\\ding{173}\"},\"③\":{\"text\":\"\\\\ding{174}\"},\"④\":{\"text\":\"\\\\ding{175}\"},\"⑤\":{\"text\":\"\\\\ding{176}\"},\"⑥\":{\"text\":\"\\\\ding{177}\"},\"⑦\":{\"text\":\"\\\\ding{178}\"},\"⑧\":{\"text\":\"\\\\ding{179}\"},\"⑨\":{\"text\":\"\\\\ding{180}\"},\"⑩\":{\"text\":\"\\\\ding{181}\"},\"⑪\":{\"text\":\"(11)\"},\"⑫\":{\"text\":\"(12)\"},\"⑬\":{\"text\":\"(13)\"},\"⑭\":{\"text\":\"(14)\"},\"⑮\":{\"text\":\"(15)\"},\"⑯\":{\"text\":\"(16)\"},\"⑰\":{\"text\":\"(17)\"},\"⑱\":{\"text\":\"(18)\"},\"⑲\":{\"text\":\"(19)\"},\"⑳\":{\"text\":\"(20)\"},\"⑴\":{\"text\":\"(1)\"},\"⑵\":{\"text\":\"(2)\"},\"⑶\":{\"text\":\"(3)\"},\"⑷\":{\"text\":\"(4)\"},\"⑸\":{\"text\":\"(5)\"},\"⑹\":{\"text\":\"(6)\"},\"⑺\":{\"text\":\"(7)\"},\"⑻\":{\"text\":\"(8)\"},\"⑼\":{\"text\":\"(9)\"},\"⑽\":{\"text\":\"(10)\"},\"⑾\":{\"text\":\"(11)\"},\"⑿\":{\"text\":\"(12)\"},\"⒀\":{\"text\":\"(13)\"},\"⒁\":{\"text\":\"(14)\"},\"⒂\":{\"text\":\"(15)\"},\"⒃\":{\"text\":\"(16)\"},\"⒄\":{\"text\":\"(17)\"},\"⒅\":{\"text\":\"(18)\"},\"⒆\":{\"text\":\"(19)\"},\"⒇\":{\"text\":\"(20)\"},\"⒈\":{\"text\":\"1.\"},\"⒉\":{\"text\":\"2.\"},\"⒊\":{\"text\":\"3.\"},\"⒋\":{\"text\":\"4.\"},\"⒌\":{\"text\":\"5.\"},\"⒍\":{\"text\":\"6.\"},\"⒎\":{\"text\":\"7.\"},\"⒏\":{\"text\":\"8.\"},\"⒐\":{\"text\":\"9.\"},\"⒑\":{\"text\":\"10.\"},\"⒒\":{\"text\":\"11.\"},\"⒓\":{\"text\":\"12.\"},\"⒔\":{\"text\":\"13.\"},\"⒕\":{\"text\":\"14.\"},\"⒖\":{\"text\":\"15.\"},\"⒗\":{\"text\":\"16.\"},\"⒘\":{\"text\":\"17.\"},\"⒙\":{\"text\":\"18.\"},\"⒚\":{\"text\":\"19.\"},\"⒛\":{\"text\":\"20.\"},\"⒜\":{\"text\":\"(a)\"},\"⒝\":{\"text\":\"(b)\"},\"⒞\":{\"text\":\"(c)\"},\"⒟\":{\"text\":\"(d)\"},\"⒠\":{\"text\":\"(e)\"},\"⒡\":{\"text\":\"(f)\"},\"⒢\":{\"text\":\"(g)\"},\"⒣\":{\"text\":\"(h)\"},\"⒤\":{\"text\":\"(i)\"},\"⒥\":{\"text\":\"(j)\"},\"⒦\":{\"text\":\"(k)\"},\"⒧\":{\"text\":\"(l)\"},\"⒨\":{\"text\":\"(m)\"},\"⒩\":{\"text\":\"(n)\"},\"⒪\":{\"text\":\"(o)\"},\"⒫\":{\"text\":\"(p)\"},\"⒬\":{\"text\":\"(q)\"},\"⒭\":{\"text\":\"(r)\"},\"⒮\":{\"text\":\"(s)\"},\"⒯\":{\"text\":\"(t)\"},\"⒰\":{\"text\":\"(u)\"},\"⒱\":{\"text\":\"(v)\"},\"⒲\":{\"text\":\"(w)\"},\"⒳\":{\"text\":\"(x)\"},\"⒴\":{\"text\":\"(y)\"},\"⒵\":{\"text\":\"(z)\"},\"Ⓐ\":{\"text\":\"(A)\"},\"Ⓑ\":{\"text\":\"(B)\"},\"Ⓒ\":{\"text\":\"(C)\"},\"Ⓓ\":{\"text\":\"(D)\"},\"Ⓔ\":{\"text\":\"(E)\"},\"Ⓕ\":{\"text\":\"(F)\"},\"Ⓖ\":{\"text\":\"(G)\"},\"Ⓗ\":{\"text\":\"(H)\"},\"Ⓘ\":{\"text\":\"(I)\"},\"Ⓙ\":{\"text\":\"(J)\"},\"Ⓚ\":{\"text\":\"(K)\"},\"Ⓛ\":{\"text\":\"(L)\"},\"Ⓜ\":{\"text\":\"(M)\"},\"Ⓝ\":{\"text\":\"(N)\"},\"Ⓞ\":{\"text\":\"(O)\"},\"Ⓟ\":{\"text\":\"(P)\"},\"Ⓠ\":{\"text\":\"(Q)\"},\"Ⓡ\":{\"text\":\"(R)\"},\"Ⓢ\":{\"math\":\"\\\\circledS\"},\"Ⓣ\":{\"text\":\"(T)\"},\"Ⓤ\":{\"text\":\"(U)\"},\"Ⓥ\":{\"text\":\"(V)\"},\"Ⓦ\":{\"text\":\"(W)\"},\"Ⓧ\":{\"text\":\"(X)\"},\"Ⓨ\":{\"text\":\"(Y)\"},\"Ⓩ\":{\"text\":\"(Z)\"},\"ⓐ\":{\"text\":\"(a)\"},\"ⓑ\":{\"text\":\"(b)\"},\"ⓒ\":{\"text\":\"(c)\"},\"ⓓ\":{\"text\":\"(d)\"},\"ⓔ\":{\"text\":\"(e)\"},\"ⓕ\":{\"text\":\"(f)\"},\"ⓖ\":{\"text\":\"(g)\"},\"ⓗ\":{\"text\":\"(h)\"},\"ⓘ\":{\"text\":\"(i)\"},\"ⓙ\":{\"text\":\"(j)\"},\"ⓚ\":{\"text\":\"(k)\"},\"ⓛ\":{\"text\":\"(l)\"},\"ⓜ\":{\"text\":\"(m)\"},\"ⓝ\":{\"text\":\"(n)\"},\"ⓞ\":{\"text\":\"(o)\"},\"ⓟ\":{\"text\":\"(p)\"},\"ⓠ\":{\"text\":\"(q)\"},\"ⓡ\":{\"text\":\"(r)\"},\"ⓢ\":{\"text\":\"(s)\"},\"ⓣ\":{\"text\":\"(t)\"},\"ⓤ\":{\"text\":\"(u)\"},\"ⓥ\":{\"text\":\"(v)\"},\"ⓦ\":{\"text\":\"(w)\"},\"ⓧ\":{\"text\":\"(x)\"},\"ⓨ\":{\"text\":\"(y)\"},\"ⓩ\":{\"text\":\"(z)\"},\"⓪\":{\"text\":\"(0)\"},\"─\":{\"text\":\"-\"},\"━\":{\"text\":\"=\"},\"│\":{\"text\":\"|\"},\"┃\":{\"text\":\"|\"},\"┄\":{\"text\":\"-\"},\"┅\":{\"text\":\"=\"},\"┆\":{\"math\":\"\\\\Elzdshfnc\"},\"┇\":{\"text\":\"|\"},\"┈\":{\"text\":\"-\"},\"┉\":{\"text\":\"=\"},\"┊\":{\"text\":\"|\"},\"┋\":{\"text\":\"|\"},\"┌\":{\"text\":\"+\"},\"┍\":{\"text\":\"+\"},\"┎\":{\"text\":\"+\"},\"┏\":{\"text\":\"+\"},\"┐\":{\"text\":\"+\"},\"┑\":{\"text\":\"+\"},\"┒\":{\"text\":\"+\"},\"┓\":{\"text\":\"+\"},\"└\":{\"text\":\"+\"},\"┕\":{\"text\":\"+\"},\"┖\":{\"text\":\"+\"},\"┗\":{\"text\":\"+\"},\"┘\":{\"text\":\"+\"},\"┙\":{\"math\":\"\\\\Elzsqfnw\"},\"┚\":{\"text\":\"+\"},\"┛\":{\"text\":\"+\"},\"├\":{\"text\":\"+\"},\"┝\":{\"text\":\"+\"},\"┞\":{\"text\":\"+\"},\"┟\":{\"text\":\"+\"},\"┠\":{\"text\":\"+\"},\"┡\":{\"text\":\"+\"},\"┢\":{\"text\":\"+\"},\"┣\":{\"text\":\"+\"},\"┤\":{\"text\":\"+\"},\"┥\":{\"text\":\"+\"},\"┦\":{\"text\":\"+\"},\"┧\":{\"text\":\"+\"},\"┨\":{\"text\":\"+\"},\"┩\":{\"text\":\"+\"},\"┪\":{\"text\":\"+\"},\"┫\":{\"text\":\"+\"},\"┬\":{\"text\":\"+\"},\"┭\":{\"text\":\"+\"},\"┮\":{\"text\":\"+\"},\"┯\":{\"text\":\"+\"},\"┰\":{\"text\":\"+\"},\"┱\":{\"text\":\"+\"},\"┲\":{\"text\":\"+\"},\"┳\":{\"text\":\"+\"},\"┴\":{\"text\":\"+\"},\"┵\":{\"text\":\"+\"},\"┶\":{\"text\":\"+\"},\"┷\":{\"text\":\"+\"},\"┸\":{\"text\":\"+\"},\"┹\":{\"text\":\"+\"},\"┺\":{\"text\":\"+\"},\"┻\":{\"text\":\"+\"},\"┼\":{\"text\":\"+\"},\"┽\":{\"text\":\"+\"},\"┾\":{\"text\":\"+\"},\"┿\":{\"text\":\"+\"},\"╀\":{\"text\":\"+\"},\"╁\":{\"text\":\"+\"},\"╂\":{\"text\":\"+\"},\"╃\":{\"text\":\"+\"},\"╄\":{\"text\":\"+\"},\"╅\":{\"text\":\"+\"},\"╆\":{\"text\":\"+\"},\"╇\":{\"text\":\"+\"},\"╈\":{\"text\":\"+\"},\"╉\":{\"text\":\"+\"},\"╊\":{\"text\":\"+\"},\"╋\":{\"text\":\"+\"},\"╌\":{\"text\":\"-\"},\"╍\":{\"text\":\"=\"},\"╎\":{\"text\":\"|\"},\"╏\":{\"text\":\"|\"},\"═\":{\"text\":\"=\"},\"║\":{\"text\":\"|\"},\"╒\":{\"text\":\"+\"},\"╓\":{\"text\":\"+\"},\"╔\":{\"text\":\"+\"},\"╕\":{\"text\":\"+\"},\"╖\":{\"text\":\"+\"},\"╗\":{\"text\":\"+\"},\"╘\":{\"text\":\"+\"},\"╙\":{\"text\":\"+\"},\"╚\":{\"text\":\"+\"},\"╛\":{\"text\":\"+\"},\"╜\":{\"text\":\"+\"},\"╝\":{\"text\":\"+\"},\"╞\":{\"text\":\"+\"},\"╟\":{\"text\":\"+\"},\"╠\":{\"text\":\"+\"},\"╡\":{\"text\":\"+\"},\"╢\":{\"text\":\"+\"},\"╣\":{\"text\":\"+\"},\"╤\":{\"text\":\"+\"},\"╥\":{\"text\":\"+\"},\"╦\":{\"text\":\"+\"},\"╧\":{\"text\":\"+\"},\"╨\":{\"text\":\"+\"},\"╩\":{\"text\":\"+\"},\"╪\":{\"text\":\"+\"},\"╫\":{\"text\":\"+\"},\"╬\":{\"text\":\"+\"},\"╭\":{\"text\":\"+\"},\"╮\":{\"text\":\"+\"},\"╯\":{\"text\":\"+\"},\"╰\":{\"text\":\"+\"},\"╱\":{\"math\":\"\\\\diagup\"},\"╲\":{\"text\":\"\\\\\"},\"╳\":{\"text\":\"X\"},\"╼\":{\"text\":\"-\"},\"╽\":{\"text\":\"|\"},\"╾\":{\"text\":\"-\"},\"╿\":{\"text\":\"|\"},\"▀\":{\"math\":\"\\\\blockuphalf\"},\"▄\":{\"math\":\"\\\\blocklowhalf\"},\"█\":{\"math\":\"\\\\blockfull\"},\"▌\":{\"math\":\"\\\\blocklefthalf\"},\"▐\":{\"math\":\"\\\\blockrighthalf\"},\"░\":{\"math\":\"\\\\blockqtrshaded\"},\"▒\":{\"math\":\"\\\\blockhalfshaded\"},\"▓\":{\"math\":\"\\\\blockthreeqtrshaded\"},\"■\":{\"math\":\"\\\\mdlgblksquare\",\"text\":\"\\\\ding{110}\"},\"□\":{\"math\":\"\\\\square\"},\"▢\":{\"math\":\"\\\\squoval\"},\"▣\":{\"math\":\"\\\\blackinwhitesquare\"},\"▤\":{\"math\":\"\\\\squarehfill\"},\"▥\":{\"math\":\"\\\\squarevfill\"},\"▦\":{\"math\":\"\\\\squarehvfill\"},\"▧\":{\"math\":\"\\\\squarenwsefill\"},\"▨\":{\"math\":\"\\\\squareneswfill\"},\"▩\":{\"math\":\"\\\\squarecrossfill\"},\"▪\":{\"math\":\"\\\\blacksquare\"},\"▫\":{\"math\":\"\\\\smwhtsquare\"},\"▬\":{\"math\":\"\\\\hrectangleblack\"},\"▭\":{\"math\":\"\\\\fbox{~~}\"},\"▮\":{\"math\":\"\\\\vrectangleblack\"},\"▯\":{\"math\":\"\\\\Elzvrecto\"},\"▰\":{\"math\":\"\\\\parallelogramblack\"},\"▲\":{\"math\":\"\\\\bigblacktriangleup\",\"text\":\"\\\\ding{115}\"},\"△\":{\"math\":\"\\\\bigtriangleup\"},\"▴\":{\"math\":\"\\\\blacktriangle\"},\"▵\":{\"math\":\"\\\\vartriangle\"},\"▶\":{\"math\":\"\\\\RHD\"},\"▷\":{\"math\":\"\\\\rhd\"},\"▸\":{\"math\":\"\\\\blacktriangleright\"},\"▹\":{\"math\":\"\\\\triangleright\"},\"►\":{\"math\":\"\\\\blackpointerright\"},\"▻\":{\"math\":\"\\\\whitepointerright\"},\"▼\":{\"math\":\"\\\\bigblacktriangledown\",\"text\":\"\\\\ding{116}\"},\"▽\":{\"math\":\"\\\\bigtriangledown\"},\"▾\":{\"math\":\"\\\\blacktriangledown\"},\"▿\":{\"math\":\"\\\\triangledown\"},\"◀\":{\"math\":\"\\\\LHD\"},\"◁\":{\"math\":\"\\\\lhd\"},\"◂\":{\"math\":\"\\\\blacktriangleleft\"},\"◃\":{\"math\":\"\\\\triangleleft\"},\"◄\":{\"math\":\"\\\\blackpointerleft\"},\"◅\":{\"math\":\"\\\\whitepointerleft\"},\"◆\":{\"math\":\"\\\\Diamondblack\",\"text\":\"\\\\ding{117}\"},\"◇\":{\"math\":\"\\\\Diamond\"},\"◈\":{\"math\":\"\\\\blackinwhitediamond\"},\"◉\":{\"math\":\"\\\\fisheye\"},\"◊\":{\"math\":\"\\\\lozenge\"},\"○\":{\"math\":\"\\\\bigcirc\"},\"◌\":{\"math\":\"\\\\dottedcircle\"},\"◍\":{\"math\":\"\\\\circlevertfill\"},\"◎\":{\"math\":\"\\\\bullseye\"},\"●\":{\"math\":\"\\\\CIRCLE\",\"text\":\"\\\\ding{108}\"},\"◐\":{\"math\":\"\\\\Elzcirfl\"},\"◑\":{\"math\":\"\\\\Elzcirfr\"},\"◒\":{\"math\":\"\\\\Elzcirfb\"},\"◓\":{\"math\":\"\\\\circletophalfblack\"},\"◔\":{\"math\":\"\\\\circleurquadblack\"},\"◕\":{\"math\":\"\\\\blackcircleulquadwhite\"},\"◖\":{\"math\":\"\\\\LEFTCIRCLE\"},\"◗\":{\"math\":\"\\\\RIGHTCIRCLE\",\"text\":\"\\\\ding{119}\"},\"◘\":{\"math\":\"\\\\Elzrvbull\"},\"◙\":{\"math\":\"\\\\inversewhitecircle\"},\"◚\":{\"math\":\"\\\\invwhiteupperhalfcircle\"},\"◛\":{\"math\":\"\\\\invwhitelowerhalfcircle\"},\"◜\":{\"math\":\"\\\\ularc\"},\"◝\":{\"math\":\"\\\\urarc\"},\"◞\":{\"math\":\"\\\\lrarc\"},\"◟\":{\"math\":\"\\\\llarc\"},\"◠\":{\"math\":\"\\\\topsemicircle\"},\"◡\":{\"math\":\"\\\\botsemicircle\"},\"◢\":{\"math\":\"\\\\lrblacktriangle\"},\"◣\":{\"math\":\"\\\\llblacktriangle\"},\"◤\":{\"math\":\"\\\\ulblacktriangle\"},\"◥\":{\"math\":\"\\\\urblacktriangle\"},\"◦\":{\"math\":\"\\\\smwhtcircle\"},\"◧\":{\"math\":\"\\\\Elzsqfl\"},\"◨\":{\"math\":\"\\\\Elzsqfr\"},\"◩\":{\"math\":\"\\\\squareulblack\"},\"◪\":{\"math\":\"\\\\Elzsqfse\"},\"◫\":{\"math\":\"\\\\boxbar\"},\"◬\":{\"math\":\"\\\\trianglecdot\"},\"◭\":{\"math\":\"\\\\triangleleftblack\"},\"◮\":{\"math\":\"\\\\trianglerightblack\"},\"◯\":{\"math\":\"\\\\bigcirc\"},\"◰\":{\"math\":\"\\\\squareulquad\"},\"◱\":{\"math\":\"\\\\squarellquad\"},\"◲\":{\"math\":\"\\\\squarelrquad\"},\"◳\":{\"math\":\"\\\\squareurquad\"},\"◴\":{\"math\":\"\\\\circleulquad\"},\"◵\":{\"math\":\"\\\\circlellquad\"},\"◶\":{\"math\":\"\\\\circlelrquad\"},\"◷\":{\"math\":\"\\\\circleurquad\"},\"◸\":{\"math\":\"\\\\ultriangle\"},\"◹\":{\"math\":\"\\\\urtriangle\"},\"◺\":{\"math\":\"\\\\lltriangle\"},\"◻\":{\"math\":\"\\\\square\"},\"◼\":{\"math\":\"\\\\blacksquare\"},\"◽\":{\"math\":\"\\\\mdsmwhtsquare\"},\"◾\":{\"math\":\"\\\\mdsmblksquare\"},\"◿\":{\"math\":\"\\\\lrtriangle\"},\"★\":{\"math\":\"\\\\bigstar\",\"text\":\"\\\\ding{72}\"},\"☆\":{\"math\":\"\\\\bigwhitestar\",\"text\":\"\\\\ding{73}\"},\"☉\":{\"math\":\"\\\\Sun\"},\"☎\":{\"text\":\"\\\\ding{37}\"},\"☐\":{\"math\":\"\\\\Square\"},\"☑\":{\"math\":\"\\\\CheckedBox\"},\"☒\":{\"math\":\"\\\\XBox\"},\"☓\":{\"text\":\"X\"},\"☕\":{\"math\":\"\\\\steaming\"},\"☛\":{\"text\":\"\\\\ding{42}\"},\"☞\":{\"math\":\"\\\\pointright\",\"text\":\"\\\\ding{43}\"},\"☠\":{\"math\":\"\\\\skull\"},\"☡\":{\"math\":\"\\\\danger\"},\"☢\":{\"math\":\"\\\\radiation\"},\"☣\":{\"math\":\"\\\\biohazard\"},\"☯\":{\"math\":\"\\\\yinyang\"},\"☹\":{\"math\":\"\\\\frownie\"},\"☺\":{\"math\":\"\\\\smiley\"},\"☻\":{\"math\":\"\\\\blacksmiley\"},\"☼\":{\"math\":\"\\\\sun\"},\"☽\":{\"text\":\"\\\\rightmoon\",\"commandspacer\":true,\"textpackages\":[\"wasysym\"]},\"☾\":{\"text\":\"\\\\leftmoon\",\"commandspacer\":true,\"textpackages\":[\"wasysym\"]},\"☿\":{\"math\":\"\\\\mercury\",\"text\":\"\\\\mercury\",\"commandspacer\":true},\"♀\":{\"math\":\"\\\\female\",\"text\":\"\\\\venus\",\"commandspacer\":true},\"♁\":{\"math\":\"\\\\earth\"},\"♂\":{\"math\":\"\\\\male\",\"text\":\"\\\\male\",\"commandspacer\":true},\"♃\":{\"math\":\"\\\\jupiter\",\"text\":\"\\\\jupiter\",\"commandspacer\":true},\"♄\":{\"math\":\"\\\\saturn\",\"text\":\"\\\\saturn\",\"commandspacer\":true},\"♅\":{\"math\":\"\\\\uranus\",\"text\":\"\\\\uranus\",\"commandspacer\":true},\"♆\":{\"math\":\"\\\\neptune\",\"text\":\"\\\\neptune\",\"commandspacer\":true},\"♇\":{\"math\":\"\\\\pluto\",\"text\":\"\\\\pluto\",\"commandspacer\":true},\"♈\":{\"math\":\"\\\\aries\",\"text\":\"\\\\aries\",\"commandspacer\":true},\"♉\":{\"math\":\"\\\\taurus\",\"text\":\"\\\\taurus\",\"commandspacer\":true},\"♊\":{\"math\":\"\\\\gemini\",\"text\":\"\\\\gemini\",\"commandspacer\":true},\"♋\":{\"math\":\"\\\\cancer\",\"text\":\"\\\\cancer\",\"commandspacer\":true},\"♌\":{\"math\":\"\\\\leo\",\"text\":\"\\\\leo\",\"commandspacer\":true},\"♍\":{\"math\":\"\\\\virgo\",\"text\":\"\\\\virgo\",\"commandspacer\":true},\"♎\":{\"math\":\"\\\\libra\",\"text\":\"\\\\libra\",\"commandspacer\":true},\"♏\":{\"math\":\"\\\\scorpio\",\"text\":\"\\\\scorpio\",\"commandspacer\":true},\"♐\":{\"math\":\"\\\\sagittarius\",\"text\":\"\\\\sagittarius\",\"commandspacer\":true},\"♑\":{\"math\":\"\\\\capricornus\",\"text\":\"\\\\capricornus\",\"commandspacer\":true},\"♒\":{\"math\":\"\\\\aquarius\",\"text\":\"\\\\aquarius\",\"commandspacer\":true},\"♓\":{\"math\":\"\\\\pisces\",\"text\":\"\\\\pisces\",\"commandspacer\":true},\"♠\":{\"math\":\"\\\\spadesuit\",\"text\":\"\\\\ding{171}\"},\"♡\":{\"math\":\"\\\\heartsuit\"},\"♢\":{\"math\":\"\\\\diamond\"},\"♣\":{\"math\":\"\\\\clubsuit\",\"text\":\"\\\\ding{168}\"},\"♤\":{\"math\":\"\\\\varspadesuit\"},\"♥\":{\"math\":\"\\\\varheartsuit\",\"text\":\"\\\\ding{170}\"},\"♦\":{\"math\":\"\\\\vardiamondsuit\",\"text\":\"\\\\ding{169}\"},\"♧\":{\"math\":\"\\\\varclubsuit\"},\"♩\":{\"math\":\"\\\\quarternote\",\"text\":\"\\\\quarternote\",\"commandspacer\":true},\"♪\":{\"math\":\"\\\\eighthnote\",\"text\":\"\\\\eighthnote\",\"commandspacer\":true},\"♫\":{\"math\":\"\\\\twonotes\"},\"♬\":{\"math\":\"\\\\sixteenthnote\"},\"♭\":{\"math\":\"\\\\flat\"},\"♮\":{\"math\":\"\\\\natural\"},\"♯\":{\"math\":\"\\\\sharp\"},\"♻\":{\"math\":\"\\\\recycle\"},\"♾\":{\"math\":\"\\\\acidfree\"},\"⚀\":{\"math\":\"\\\\dicei\"},\"⚁\":{\"math\":\"\\\\diceii\"},\"⚂\":{\"math\":\"\\\\diceiii\"},\"⚃\":{\"math\":\"\\\\diceiv\"},\"⚄\":{\"math\":\"\\\\dicev\"},\"⚅\":{\"math\":\"\\\\dicevi\"},\"⚆\":{\"math\":\"\\\\circledrightdot\"},\"⚇\":{\"math\":\"\\\\circledtwodots\"},\"⚈\":{\"math\":\"\\\\blackcircledrightdot\"},\"⚉\":{\"math\":\"\\\\blackcircledtwodots\"},\"⚓\":{\"math\":\"\\\\anchor\"},\"⚔\":{\"math\":\"\\\\swords\"},\"⚠\":{\"math\":\"\\\\warning\"},\"⚥\":{\"math\":\"\\\\Hermaphrodite\"},\"⚪\":{\"math\":\"\\\\medcirc\"},\"⚫\":{\"math\":\"\\\\medbullet\"},\"⚬\":{\"math\":\"\\\\mdsmwhtcircle\"},\"⚲\":{\"math\":\"\\\\neuter\"},\"✁\":{\"text\":\"\\\\ding{33}\"},\"✂\":{\"text\":\"\\\\ding{34}\"},\"✃\":{\"text\":\"\\\\ding{35}\"},\"✄\":{\"text\":\"\\\\ding{36}\"},\"✆\":{\"text\":\"\\\\ding{38}\"},\"✇\":{\"text\":\"\\\\ding{39}\"},\"✈\":{\"text\":\"\\\\ding{40}\"},\"✉\":{\"text\":\"\\\\ding{41}\"},\"✌\":{\"text\":\"\\\\ding{44}\"},\"✍\":{\"text\":\"\\\\ding{45}\"},\"✎\":{\"math\":\"\\\\pencil\",\"text\":\"\\\\ding{46}\"},\"✏\":{\"text\":\"\\\\ding{47}\"},\"✐\":{\"text\":\"\\\\ding{48}\"},\"✑\":{\"text\":\"\\\\ding{49}\"},\"✒\":{\"text\":\"\\\\ding{50}\"},\"✓\":{\"math\":\"\\\\checkmark\",\"text\":\"\\\\ding{51}\"},\"✔\":{\"text\":\"\\\\ding{52}\"},\"✕\":{\"text\":\"\\\\ding{53}\"},\"✖\":{\"text\":\"\\\\ding{54}\"},\"✗\":{\"math\":\"\\\\ballotx\",\"text\":\"\\\\ding{55}\"},\"✘\":{\"text\":\"\\\\ding{56}\"},\"✙\":{\"text\":\"\\\\ding{57}\"},\"✚\":{\"text\":\"\\\\ding{58}\"},\"✛\":{\"text\":\"\\\\ding{59}\"},\"✜\":{\"text\":\"\\\\ding{60}\"},\"✝\":{\"text\":\"\\\\ding{61}\"},\"✞\":{\"text\":\"\\\\ding{62}\"},\"✟\":{\"text\":\"\\\\ding{63}\"},\"✠\":{\"math\":\"\\\\maltese\",\"text\":\"\\\\ding{64}\"},\"✡\":{\"text\":\"\\\\ding{65}\"},\"✢\":{\"text\":\"\\\\ding{66}\"},\"✣\":{\"text\":\"\\\\ding{67}\"},\"✤\":{\"text\":\"\\\\ding{68}\"},\"✥\":{\"text\":\"\\\\ding{69}\"},\"✦\":{\"text\":\"\\\\ding{70}\"},\"✧\":{\"text\":\"\\\\ding{71}\"},\"✩\":{\"text\":\"\\\\ding{73}\"},\"✪\":{\"math\":\"\\\\circledstar\",\"text\":\"\\\\ding{74}\"},\"✫\":{\"text\":\"\\\\ding{75}\"},\"✬\":{\"text\":\"\\\\ding{76}\"},\"✭\":{\"text\":\"\\\\ding{77}\"},\"✮\":{\"text\":\"\\\\ding{78}\"},\"✯\":{\"text\":\"\\\\ding{79}\"},\"✰\":{\"text\":\"\\\\ding{80}\"},\"✱\":{\"text\":\"\\\\ding{81}\"},\"✲\":{\"text\":\"\\\\ding{82}\"},\"✳\":{\"text\":\"\\\\ding{83}\"},\"✴\":{\"text\":\"\\\\ding{84}\"},\"✵\":{\"text\":\"\\\\ding{85}\"},\"✶\":{\"math\":\"\\\\varstar\",\"text\":\"\\\\ding{86}\"},\"✷\":{\"text\":\"\\\\ding{87}\"},\"✸\":{\"text\":\"\\\\ding{88}\"},\"✹\":{\"text\":\"\\\\ding{89}\"},\"✺\":{\"text\":\"\\\\ding{90}\"},\"✻\":{\"text\":\"\\\\ding{91}\"},\"✼\":{\"text\":\"\\\\ding{92}\"},\"✽\":{\"math\":\"\\\\dingasterisk\",\"text\":\"\\\\ding{93}\"},\"✾\":{\"text\":\"\\\\ding{94}\"},\"✿\":{\"text\":\"\\\\ding{95}\"},\"❀\":{\"text\":\"\\\\ding{96}\"},\"❁\":{\"text\":\"\\\\ding{97}\"},\"❂\":{\"text\":\"\\\\ding{98}\"},\"❃\":{\"text\":\"\\\\ding{99}\"},\"❄\":{\"text\":\"\\\\ding{100}\"},\"❅\":{\"text\":\"\\\\ding{101}\"},\"❆\":{\"text\":\"\\\\ding{102}\"},\"❇\":{\"text\":\"\\\\ding{103}\"},\"❈\":{\"text\":\"\\\\ding{104}\"},\"❉\":{\"text\":\"\\\\ding{105}\"},\"❊\":{\"text\":\"\\\\ding{106}\"},\"❋\":{\"text\":\"\\\\ding{107}\"},\"❍\":{\"text\":\"\\\\ding{109}\"},\"❏\":{\"text\":\"\\\\ding{111}\"},\"❐\":{\"text\":\"\\\\ding{112}\"},\"❑\":{\"text\":\"\\\\ding{113}\"},\"❒\":{\"text\":\"\\\\ding{114}\"},\"❖\":{\"text\":\"\\\\ding{118}\"},\"❘\":{\"text\":\"\\\\ding{120}\"},\"❙\":{\"text\":\"\\\\ding{121}\"},\"❚\":{\"text\":\"\\\\ding{122}\"},\"❛\":{\"text\":\"\\\\ding{123}\"},\"❜\":{\"text\":\"\\\\ding{124}\"},\"❝\":{\"text\":\"\\\\ding{125}\"},\"❞\":{\"text\":\"\\\\ding{126}\"},\"❡\":{\"text\":\"\\\\ding{161}\"},\"❢\":{\"text\":\"\\\\ding{162}\"},\"❣\":{\"text\":\"\\\\ding{163}\"},\"❤\":{\"text\":\"\\\\ding{164}\"},\"❥\":{\"text\":\"\\\\ding{165}\"},\"❦\":{\"text\":\"\\\\ding{166}\"},\"❧\":{\"text\":\"\\\\ding{167}\"},\"❲\":{\"math\":\"\\\\lbrbrak\"},\"❳\":{\"math\":\"\\\\rbrbrak\"},\"❶\":{\"text\":\"\\\\ding{182}\"},\"❷\":{\"text\":\"\\\\ding{183}\"},\"❸\":{\"text\":\"\\\\ding{184}\"},\"❹\":{\"text\":\"\\\\ding{185}\"},\"❺\":{\"text\":\"\\\\ding{186}\"},\"❻\":{\"text\":\"\\\\ding{187}\"},\"❼\":{\"text\":\"\\\\ding{188}\"},\"❽\":{\"text\":\"\\\\ding{189}\"},\"❾\":{\"text\":\"\\\\ding{190}\"},\"❿\":{\"text\":\"\\\\ding{191}\"},\"➀\":{\"text\":\"\\\\ding{192}\"},\"➁\":{\"text\":\"\\\\ding{193}\"},\"➂\":{\"text\":\"\\\\ding{194}\"},\"➃\":{\"text\":\"\\\\ding{195}\"},\"➄\":{\"text\":\"\\\\ding{196}\"},\"➅\":{\"text\":\"\\\\ding{197}\"},\"➆\":{\"text\":\"\\\\ding{198}\"},\"➇\":{\"text\":\"\\\\ding{199}\"},\"➈\":{\"text\":\"\\\\ding{200}\"},\"➉\":{\"text\":\"\\\\ding{201}\"},\"➊\":{\"text\":\"\\\\ding{202}\"},\"➋\":{\"text\":\"\\\\ding{203}\"},\"➌\":{\"text\":\"\\\\ding{204}\"},\"➍\":{\"text\":\"\\\\ding{205}\"},\"➎\":{\"text\":\"\\\\ding{206}\"},\"➏\":{\"text\":\"\\\\ding{207}\"},\"➐\":{\"text\":\"\\\\ding{208}\"},\"➑\":{\"text\":\"\\\\ding{209}\"},\"➒\":{\"text\":\"\\\\ding{210}\"},\"➓\":{\"text\":\"\\\\ding{211}\"},\"➔\":{\"text\":\"\\\\ding{212}\"},\"➘\":{\"text\":\"\\\\ding{216}\"},\"➙\":{\"text\":\"\\\\ding{217}\"},\"➚\":{\"text\":\"\\\\ding{218}\"},\"➛\":{\"math\":\"\\\\draftingarrow\",\"text\":\"\\\\ding{219}\"},\"➜\":{\"text\":\"\\\\ding{220}\"},\"➝\":{\"text\":\"\\\\ding{221}\"},\"➞\":{\"text\":\"\\\\ding{222}\"},\"➟\":{\"text\":\"\\\\ding{223}\"},\"➠\":{\"text\":\"\\\\ding{224}\"},\"➡\":{\"text\":\"\\\\ding{225}\"},\"➢\":{\"math\":\"\\\\arrowbullet\",\"text\":\"\\\\ding{226}\"},\"➣\":{\"text\":\"\\\\ding{227}\"},\"➤\":{\"text\":\"\\\\ding{228}\"},\"➥\":{\"text\":\"\\\\ding{229}\"},\"➦\":{\"text\":\"\\\\ding{230}\"},\"➧\":{\"text\":\"\\\\ding{231}\"},\"➨\":{\"text\":\"\\\\ding{232}\"},\"➩\":{\"text\":\"\\\\ding{233}\"},\"➪\":{\"text\":\"\\\\ding{234}\"},\"➫\":{\"text\":\"\\\\ding{235}\"},\"➬\":{\"text\":\"\\\\ding{236}\"},\"➭\":{\"text\":\"\\\\ding{237}\"},\"➮\":{\"text\":\"\\\\ding{238}\"},\"➯\":{\"text\":\"\\\\ding{239}\"},\"➱\":{\"text\":\"\\\\ding{241}\"},\"➲\":{\"text\":\"\\\\ding{242}\"},\"➳\":{\"text\":\"\\\\ding{243}\"},\"➴\":{\"text\":\"\\\\ding{244}\"},\"➵\":{\"text\":\"\\\\ding{245}\"},\"➶\":{\"text\":\"\\\\ding{246}\"},\"➷\":{\"text\":\"\\\\ding{247}\"},\"➸\":{\"text\":\"\\\\ding{248}\"},\"➹\":{\"text\":\"\\\\ding{249}\"},\"➺\":{\"text\":\"\\\\ding{250}\"},\"➻\":{\"text\":\"\\\\ding{251}\"},\"➼\":{\"text\":\"\\\\ding{252}\"},\"➽\":{\"text\":\"\\\\ding{253}\"},\"➾\":{\"text\":\"\\\\ding{254}\"},\"⟀\":{\"math\":\"\\\\threedangle\"},\"⟁\":{\"math\":\"\\\\whiteinwhitetriangle\"},\"⟂\":{\"math\":\"\\\\perp\"},\"⟃\":{\"math\":\"\\\\subsetcirc\"},\"⟄\":{\"math\":\"\\\\supsetcirc\"},\"⟅\":{\"math\":\"\\\\Lbag\"},\"⟆\":{\"math\":\"\\\\Rbag\"},\"⟇\":{\"math\":\"\\\\veedot\"},\"⟈\":{\"math\":\"\\\\bsolhsub\"},\"⟉\":{\"math\":\"\\\\suphsol\"},\"⟌\":{\"math\":\"\\\\longdivision\"},\"⟐\":{\"math\":\"\\\\Diamonddot\"},\"⟑\":{\"math\":\"\\\\wedgedot\"},\"⟒\":{\"math\":\"\\\\upin\"},\"⟓\":{\"math\":\"\\\\pullback\"},\"⟔\":{\"math\":\"\\\\pushout\"},\"⟕\":{\"math\":\"\\\\leftouterjoin\"},\"⟖\":{\"math\":\"\\\\rightouterjoin\"},\"⟗\":{\"math\":\"\\\\fullouterjoin\"},\"⟘\":{\"math\":\"\\\\bigbot\"},\"⟙\":{\"math\":\"\\\\bigtop\"},\"⟚\":{\"math\":\"\\\\DashVDash\"},\"⟛\":{\"math\":\"\\\\dashVdash\"},\"⟜\":{\"math\":\"\\\\multimapinv\"},\"⟝\":{\"math\":\"\\\\vlongdash\"},\"⟞\":{\"math\":\"\\\\longdashv\"},\"⟟\":{\"math\":\"\\\\cirbot\"},\"⟠\":{\"math\":\"\\\\lozengeminus\"},\"⟡\":{\"math\":\"\\\\concavediamond\"},\"⟢\":{\"math\":\"\\\\concavediamondtickleft\"},\"⟣\":{\"math\":\"\\\\concavediamondtickright\"},\"⟤\":{\"math\":\"\\\\whitesquaretickleft\"},\"⟥\":{\"math\":\"\\\\whitesquaretickright\"},\"⟦\":{\"math\":\"\\\\llbracket\"},\"⟧\":{\"math\":\"\\\\rrbracket\"},\"⟨\":{\"math\":\"\\\\langle\"},\"⟩\":{\"math\":\"\\\\rangle\"},\"⟪\":{\"math\":\"\\\\lang\"},\"⟫\":{\"math\":\"\\\\rang\"},\"⟬\":{\"math\":\"\\\\Lbrbrak\"},\"⟭\":{\"math\":\"\\\\Rbrbrak\"},\"⟮\":{\"math\":\"\\\\lgroup\"},\"⟯\":{\"math\":\"\\\\rgroup\"},\"⟰\":{\"math\":\"\\\\UUparrow\"},\"⟱\":{\"math\":\"\\\\DDownarrow\"},\"⟲\":{\"math\":\"\\\\acwgapcirclearrow\"},\"⟳\":{\"math\":\"\\\\cwgapcirclearrow\"},\"⟴\":{\"math\":\"\\\\rightarrowonoplus\"},\"⟵\":{\"math\":\"\\\\longleftarrow\"},\"⟶\":{\"math\":\"\\\\longrightarrow\"},\"⟷\":{\"math\":\"\\\\longleftrightarrow\"},\"⟸\":{\"math\":\"\\\\Longleftarrow\"},\"⟹\":{\"math\":\"\\\\Longrightarrow\"},\"⟺\":{\"math\":\"\\\\Longleftrightarrow\"},\"⟻\":{\"math\":\"\\\\longmapsfrom\"},\"⟼\":{\"math\":\"\\\\longmapsto\"},\"⟽\":{\"math\":\"\\\\Longmapsfrom\"},\"⟾\":{\"math\":\"\\\\Longmapsto\"},\"⟿\":{\"math\":\"\\\\sim\\\\joinrel\\\\leadsto\"},\"⤀\":{\"math\":\"\\\\psur\"},\"⤁\":{\"math\":\"\\\\nVtwoheadrightarrow\"},\"⤂\":{\"math\":\"\\\\nvLeftarrow\"},\"⤃\":{\"math\":\"\\\\nvRightarrow\"},\"⤄\":{\"math\":\"\\\\nvLeftrightarrow\"},\"⤆\":{\"math\":\"\\\\Mapsfrom\"},\"⤇\":{\"math\":\"\\\\Mapsto\"},\"⤈\":{\"math\":\"\\\\downarrowbarred\"},\"⤉\":{\"math\":\"\\\\uparrowbarred\"},\"⤊\":{\"math\":\"\\\\Uuparrow\"},\"⤋\":{\"math\":\"\\\\Ddownarrow\"},\"⤌\":{\"math\":\"\\\\leftbkarrow\"},\"⤍\":{\"math\":\"\\\\rightbkarrow\"},\"⤎\":{\"math\":\"\\\\leftdbkarrow\"},\"⤏\":{\"math\":\"\\\\dbkarow\"},\"⤐\":{\"math\":\"\\\\drbkarow\"},\"⤑\":{\"math\":\"\\\\rightdotarrow\"},\"⤒\":{\"math\":\"\\\\UpArrowBar\"},\"⤓\":{\"math\":\"\\\\DownArrowBar\"},\"⤔\":{\"math\":\"\\\\pinj\"},\"⤕\":{\"math\":\"\\\\finj\"},\"⤖\":{\"math\":\"\\\\bij\"},\"⤗\":{\"math\":\"\\\\nvtwoheadrightarrowtail\"},\"⤘\":{\"math\":\"\\\\nVtwoheadrightarrowtail\"},\"⤙\":{\"math\":\"\\\\lefttail\"},\"⤚\":{\"math\":\"\\\\righttail\"},\"⤛\":{\"math\":\"\\\\leftdbltail\"},\"⤜\":{\"math\":\"\\\\rightdbltail\"},\"⤝\":{\"math\":\"\\\\diamondleftarrow\"},\"⤞\":{\"math\":\"\\\\rightarrowdiamond\"},\"⤟\":{\"math\":\"\\\\diamondleftarrowbar\"},\"⤠\":{\"math\":\"\\\\barrightarrowdiamond\"},\"⤡\":{\"math\":\"\\\\nwsearrow\"},\"⤢\":{\"math\":\"\\\\neswarrow\"},\"⤫\":{\"math\":\"\\\\rdiagovfdiag\"},\"⤬\":{\"math\":\"\\\\fdiagovrdiag\"},\"⤭\":{\"math\":\"\\\\seovnearrow\"},\"⤮\":{\"math\":\"\\\\neovsearrow\"},\"⤯\":{\"math\":\"\\\\fdiagovnearrow\"},\"⤰\":{\"math\":\"\\\\rdiagovsearrow\"},\"⤱\":{\"math\":\"\\\\neovnwarrow\"},\"⤲\":{\"math\":\"\\\\nwovnearrow\"},\"⤴\":{\"math\":\"\\\\uprightcurvearrow\"},\"⤵\":{\"math\":\"\\\\downrightcurvedarrow\"},\"⤸\":{\"math\":\"\\\\cwrightarcarrow\"},\"⤹\":{\"math\":\"\\\\acwleftarcarrow\"},\"⤺\":{\"math\":\"\\\\acwoverarcarrow\"},\"⤻\":{\"math\":\"\\\\acwunderarcarrow\"},\"⤼\":{\"math\":\"\\\\curvearrowrightminus\"},\"⤽\":{\"math\":\"\\\\curvearrowleftplus\"},\"⤾\":{\"math\":\"\\\\cwundercurvearrow\"},\"⤿\":{\"math\":\"\\\\ccwundercurvearrow\"},\"⥀\":{\"math\":\"\\\\Elolarr\"},\"⥁\":{\"math\":\"\\\\Elorarr\"},\"⥂\":{\"math\":\"\\\\ElzRlarr\"},\"⥃\":{\"math\":\"\\\\leftarrowshortrightarrow\"},\"⥄\":{\"math\":\"\\\\ElzrLarr\"},\"⥅\":{\"math\":\"\\\\rightarrowplus\"},\"⥆\":{\"math\":\"\\\\leftarrowplus\"},\"⥇\":{\"math\":\"\\\\Elzrarrx\"},\"⥈\":{\"math\":\"\\\\leftrightarrowcircle\"},\"⥉\":{\"math\":\"\\\\twoheaduparrowcircle\"},\"⥊\":{\"math\":\"\\\\leftrightharpoon\"},\"⥋\":{\"math\":\"\\\\rightleftharpoon\"},\"⥌\":{\"math\":\"\\\\updownharpoonrightleft\"},\"⥍\":{\"math\":\"\\\\updownharpoonleftright\"},\"⥎\":{\"math\":\"\\\\LeftRightVector\"},\"⥏\":{\"math\":\"\\\\RightUpDownVector\"},\"⥐\":{\"math\":\"\\\\DownLeftRightVector\"},\"⥑\":{\"math\":\"\\\\LeftUpDownVector\"},\"⥒\":{\"math\":\"\\\\LeftVectorBar\"},\"⥓\":{\"math\":\"\\\\RightVectorBar\"},\"⥔\":{\"math\":\"\\\\RightUpVectorBar\"},\"⥕\":{\"math\":\"\\\\RightDownVectorBar\"},\"⥖\":{\"math\":\"\\\\DownLeftVectorBar\"},\"⥗\":{\"math\":\"\\\\DownRightVectorBar\"},\"⥘\":{\"math\":\"\\\\LeftUpVectorBar\"},\"⥙\":{\"math\":\"\\\\LeftDownVectorBar\"},\"⥚\":{\"math\":\"\\\\LeftTeeVector\"},\"⥛\":{\"math\":\"\\\\RightTeeVector\"},\"⥜\":{\"math\":\"\\\\RightUpTeeVector\"},\"⥝\":{\"math\":\"\\\\RightDownTeeVector\"},\"⥞\":{\"math\":\"\\\\DownLeftTeeVector\"},\"⥟\":{\"math\":\"\\\\DownRightTeeVector\"},\"⥠\":{\"math\":\"\\\\LeftUpTeeVector\"},\"⥡\":{\"math\":\"\\\\LeftDownTeeVector\"},\"⥢\":{\"math\":\"\\\\leftleftharpoons\"},\"⥣\":{\"math\":\"\\\\upupharpoons\"},\"⥤\":{\"math\":\"\\\\rightrightharpoons\"},\"⥥\":{\"math\":\"\\\\downdownharpoons\"},\"⥦\":{\"math\":\"\\\\leftrightharpoonsup\"},\"⥧\":{\"math\":\"\\\\leftrightharpoonsdown\"},\"⥨\":{\"math\":\"\\\\rightleftharpoonsup\"},\"⥩\":{\"math\":\"\\\\rightleftharpoonsdown\"},\"⥪\":{\"math\":\"\\\\leftbarharpoon\"},\"⥫\":{\"math\":\"\\\\barleftharpoon\"},\"⥬\":{\"math\":\"\\\\rightbarharpoon\"},\"⥭\":{\"math\":\"\\\\barrightharpoon\"},\"⥮\":{\"math\":\"\\\\UpEquilibrium\"},\"⥯\":{\"math\":\"\\\\ReverseUpEquilibrium\"},\"⥰\":{\"math\":\"\\\\RoundImplies\"},\"⥱\":{\"math\":\"\\\\equalrightarrow\"},\"⥲\":{\"math\":\"\\\\similarrightarrow\"},\"⥳\":{\"math\":\"\\\\leftarrowsimilar\"},\"⥴\":{\"math\":\"\\\\rightarrowsimilar\"},\"⥵\":{\"math\":\"\\\\rightarrowapprox\"},\"⥶\":{\"math\":\"\\\\ltlarr\"},\"⥷\":{\"math\":\"\\\\leftarrowless\"},\"⥸\":{\"math\":\"\\\\gtrarr\"},\"⥹\":{\"math\":\"\\\\subrarr\"},\"⥺\":{\"math\":\"\\\\leftarrowsubset\"},\"⥻\":{\"math\":\"\\\\suplarr\"},\"⥾\":{\"math\":\"\\\\upfishtail\"},\"⥿\":{\"math\":\"\\\\downfishtail\"},\"⦀\":{\"math\":\"\\\\Elztfnc\"},\"⦁\":{\"math\":\"\\\\spot\"},\"⦂\":{\"math\":\"\\\\typecolon\"},\"⦃\":{\"math\":\"\\\\lBrace\"},\"⦄\":{\"math\":\"\\\\rBrace\"},\"⦆\":{\"math\":\"\\\\Elroang\"},\"⦇\":{\"math\":\"\\\\limg\"},\"⦈\":{\"math\":\"\\\\rimg\"},\"⦉\":{\"math\":\"\\\\lblot\"},\"⦊\":{\"math\":\"\\\\rblot\"},\"⦋\":{\"math\":\"\\\\lbrackubar\"},\"⦌\":{\"math\":\"\\\\rbrackubar\"},\"⦍\":{\"math\":\"\\\\lbrackultick\"},\"⦎\":{\"math\":\"\\\\rbracklrtick\"},\"⦏\":{\"math\":\"\\\\lbracklltick\"},\"⦐\":{\"math\":\"\\\\rbrackurtick\"},\"⦑\":{\"math\":\"\\\\langledot\"},\"⦒\":{\"math\":\"\\\\rangledot\"},\"⦓\":{\"math\":\"<\\\\kern-0.58em(\"},\"⦕\":{\"math\":\"\\\\Lparengtr\"},\"⦖\":{\"math\":\"\\\\Rparenless\"},\"⦗\":{\"math\":\"\\\\lblkbrbrak\"},\"⦘\":{\"math\":\"\\\\rblkbrbrak\"},\"⦙\":{\"math\":\"\\\\Elzddfnc\"},\"⦚\":{\"math\":\"\\\\vzigzag\"},\"⦛\":{\"math\":\"\\\\measuredangleleft\"},\"⦜\":{\"math\":\"\\\\Angle\"},\"⦝\":{\"math\":\"\\\\rightanglemdot\"},\"⦞\":{\"math\":\"\\\\angles\"},\"⦟\":{\"math\":\"\\\\angdnr\"},\"⦠\":{\"math\":\"\\\\Elzlpargt\"},\"⦡\":{\"math\":\"\\\\sphericalangleup\"},\"⦢\":{\"math\":\"\\\\turnangle\"},\"⦣\":{\"math\":\"\\\\revangle\"},\"⦤\":{\"math\":\"\\\\angleubar\"},\"⦥\":{\"math\":\"\\\\revangleubar\"},\"⦦\":{\"math\":\"\\\\wideangledown\"},\"⦧\":{\"math\":\"\\\\wideangleup\"},\"⦨\":{\"math\":\"\\\\measanglerutone\"},\"⦩\":{\"math\":\"\\\\measanglelutonw\"},\"⦪\":{\"math\":\"\\\\measanglerdtose\"},\"⦫\":{\"math\":\"\\\\measangleldtosw\"},\"⦬\":{\"math\":\"\\\\measangleurtone\"},\"⦭\":{\"math\":\"\\\\measangleultonw\"},\"⦮\":{\"math\":\"\\\\measangledrtose\"},\"⦯\":{\"math\":\"\\\\measangledltosw\"},\"⦰\":{\"math\":\"\\\\revemptyset\"},\"⦱\":{\"math\":\"\\\\emptysetobar\"},\"⦲\":{\"math\":\"\\\\emptysetocirc\"},\"⦳\":{\"math\":\"\\\\emptysetoarr\"},\"⦴\":{\"math\":\"\\\\emptysetoarrl\"},\"⦷\":{\"math\":\"\\\\circledparallel\"},\"⦸\":{\"math\":\"\\\\circledbslash\"},\"⦹\":{\"math\":\"\\\\operp\"},\"⦺\":{\"math\":\"\\\\obot\"},\"⦻\":{\"math\":\"\\\\olcross\"},\"⦼\":{\"math\":\"\\\\odotslashdot\"},\"⦽\":{\"math\":\"\\\\uparrowoncircle\"},\"⦾\":{\"math\":\"\\\\circledwhitebullet\"},\"⦿\":{\"math\":\"\\\\circledbullet\"},\"⧀\":{\"math\":\"\\\\circledless\"},\"⧁\":{\"math\":\"\\\\circledgtr\"},\"⧂\":{\"math\":\"\\\\cirscir\"},\"⧃\":{\"math\":\"\\\\cirE\"},\"⧄\":{\"math\":\"\\\\boxslash\"},\"⧅\":{\"math\":\"\\\\boxbslash\"},\"⧆\":{\"math\":\"\\\\boxast\"},\"⧇\":{\"math\":\"\\\\boxcircle\"},\"⧈\":{\"math\":\"\\\\boxbox\"},\"⧉\":{\"math\":\"\\\\boxonbox\"},\"⧊\":{\"math\":\"\\\\ElzLap\"},\"⧋\":{\"math\":\"\\\\Elzdefas\"},\"⧌\":{\"math\":\"\\\\triangles\"},\"⧍\":{\"math\":\"\\\\triangleserifs\"},\"⧎\":{\"math\":\"\\\\rtriltri\"},\"⧏\":{\"math\":\"\\\\LeftTriangleBar\"},\"⧏̸\":{\"math\":\"\\\\NotLeftTriangleBar\"},\"⧐\":{\"math\":\"\\\\RightTriangleBar\"},\"⧐̸\":{\"math\":\"\\\\NotRightTriangleBar\"},\"⧑\":{\"math\":\"\\\\lfbowtie\"},\"⧒\":{\"math\":\"\\\\rfbowtie\"},\"⧓\":{\"math\":\"\\\\fbowtie\"},\"⧔\":{\"math\":\"\\\\lftimes\"},\"⧕\":{\"math\":\"\\\\rftimes\"},\"⧖\":{\"math\":\"\\\\hourglass\"},\"⧗\":{\"math\":\"\\\\blackhourglass\"},\"⧘\":{\"math\":\"\\\\lvzigzag\"},\"⧙\":{\"math\":\"\\\\rvzigzag\"},\"⧚\":{\"math\":\"\\\\Lvzigzag\"},\"⧛\":{\"math\":\"\\\\Rvzigzag\"},\"⧝\":{\"math\":\"\\\\tieinfty\"},\"⧞\":{\"math\":\"\\\\nvinfty\"},\"⧟\":{\"math\":\"\\\\multimapboth\"},\"⧠\":{\"math\":\"\\\\laplac\"},\"⧡\":{\"math\":\"\\\\lrtriangleeq\"},\"⧢\":{\"math\":\"\\\\shuffle\"},\"⧣\":{\"math\":\"\\\\eparsl\"},\"⧤\":{\"math\":\"\\\\smeparsl\"},\"⧥\":{\"math\":\"\\\\eqvparsl\"},\"⧦\":{\"math\":\"\\\\gleichstark\"},\"⧧\":{\"math\":\"\\\\thermod\"},\"⧨\":{\"math\":\"\\\\downtriangleleftblack\"},\"⧩\":{\"math\":\"\\\\downtrianglerightblack\"},\"⧪\":{\"math\":\"\\\\blackdiamonddownarrow\"},\"⧫\":{\"math\":\"\\\\blacklozenge\"},\"⧬\":{\"math\":\"\\\\circledownarrow\"},\"⧭\":{\"math\":\"\\\\blackcircledownarrow\"},\"⧮\":{\"math\":\"\\\\errbarsquare\"},\"⧯\":{\"math\":\"\\\\errbarblacksquare\"},\"⧰\":{\"math\":\"\\\\errbardiamond\"},\"⧱\":{\"math\":\"\\\\errbarblackdiamond\"},\"⧲\":{\"math\":\"\\\\errbarcircle\"},\"⧳\":{\"math\":\"\\\\errbarblackcircle\"},\"⧴\":{\"math\":\"\\\\RuleDelayed\"},\"⧵\":{\"math\":\"\\\\setminus\"},\"⧶\":{\"math\":\"\\\\dsol\"},\"⧷\":{\"math\":\"\\\\rsolbar\"},\"⧸\":{\"math\":\"\\\\xsol\"},\"⧹\":{\"math\":\"\\\\zhide\"},\"⧺\":{\"math\":\"\\\\doubleplus\"},\"⧻\":{\"math\":\"\\\\tripleplus\"},\"⧼\":{\"math\":\"\\\\lcurvyangle\"},\"⧽\":{\"math\":\"\\\\rcurvyangle\"},\"⧾\":{\"math\":\"\\\\tplus\"},\"⧿\":{\"math\":\"\\\\tminus\"},\"⨀\":{\"math\":\"\\\\bigodot\"},\"⨁\":{\"math\":\"\\\\bigoplus\"},\"⨂\":{\"math\":\"\\\\bigotimes\"},\"⨃\":{\"math\":\"\\\\bigcupdot\"},\"⨄\":{\"math\":\"\\\\Elxuplus\"},\"⨅\":{\"math\":\"\\\\ElzThr\"},\"⨆\":{\"math\":\"\\\\Elxsqcup\"},\"⨇\":{\"math\":\"\\\\ElzInf\"},\"⨈\":{\"math\":\"\\\\ElzSup\"},\"⨉\":{\"math\":\"\\\\varprod\"},\"⨊\":{\"math\":\"\\\\modtwosum\"},\"⨋\":{\"math\":\"\\\\sumint\"},\"⨌\":{\"math\":\"\\\\iiiint\"},\"⨍\":{\"math\":\"\\\\ElzCint\"},\"⨎\":{\"math\":\"\\\\intBar\"},\"⨏\":{\"math\":\"\\\\clockoint\"},\"⨑\":{\"math\":\"\\\\awint\"},\"⨒\":{\"math\":\"\\\\rppolint\"},\"⨓\":{\"math\":\"\\\\scpolint\"},\"⨔\":{\"math\":\"\\\\npolint\"},\"⨕\":{\"math\":\"\\\\pointint\"},\"⨖\":{\"math\":\"\\\\sqrint\"},\"⨗\":{\"math\":\"\\\\intlarhk\"},\"⨘\":{\"math\":\"\\\\intx\"},\"⨙\":{\"math\":\"\\\\intcap\"},\"⨚\":{\"math\":\"\\\\intcup\"},\"⨛\":{\"math\":\"\\\\upint\"},\"⨜\":{\"math\":\"\\\\lowint\"},\"⨝\":{\"math\":\"\\\\Join\"},\"⨞\":{\"math\":\"\\\\bigtriangleleft\"},\"⨟\":{\"math\":\"\\\\zcmp\"},\"⨠\":{\"math\":\"\\\\zpipe\"},\"⨡\":{\"math\":\"\\\\zproject\"},\"⨢\":{\"math\":\"\\\\ringplus\"},\"⨣\":{\"math\":\"\\\\plushat\"},\"⨤\":{\"math\":\"\\\\simplus\"},\"⨦\":{\"math\":\"\\\\plussim\"},\"⨧\":{\"math\":\"\\\\plussubtwo\"},\"⨨\":{\"math\":\"\\\\plustrif\"},\"⨩\":{\"math\":\"\\\\commaminus\"},\"⨫\":{\"math\":\"\\\\minusfdots\"},\"⨬\":{\"math\":\"\\\\minusrdots\"},\"⨯\":{\"math\":\"\\\\ElzTimes\"},\"⨰\":{\"math\":\"\\\\dottimes\"},\"⨱\":{\"math\":\"\\\\timesbar\"},\"⨲\":{\"math\":\"\\\\btimes\"},\"⨳\":{\"math\":\"\\\\smashtimes\"},\"⨶\":{\"math\":\"\\\\otimeshat\"},\"⨷\":{\"math\":\"\\\\Otimes\"},\"⨸\":{\"math\":\"\\\\odiv\"},\"⨹\":{\"math\":\"\\\\triangleplus\"},\"⨺\":{\"math\":\"\\\\triangleminus\"},\"⨻\":{\"math\":\"\\\\triangletimes\"},\"⨽\":{\"math\":\"\\\\intprodr\"},\"⨾\":{\"math\":\"\\\\fcmp\"},\"⨿\":{\"math\":\"\\\\amalg\"},\"⩀\":{\"math\":\"\\\\capdot\"},\"⩁\":{\"math\":\"\\\\uminus\"},\"⩂\":{\"math\":\"\\\\barcup\"},\"⩃\":{\"math\":\"\\\\barcap\"},\"⩄\":{\"math\":\"\\\\capwedge\"},\"⩅\":{\"math\":\"\\\\cupvee\"},\"⩆\":{\"math\":\"\\\\cupovercap\"},\"⩇\":{\"math\":\"\\\\capovercup\"},\"⩈\":{\"math\":\"\\\\cupbarcap\"},\"⩉\":{\"math\":\"\\\\capbarcup\"},\"⩊\":{\"math\":\"\\\\twocups\"},\"⩋\":{\"math\":\"\\\\twocaps\"},\"⩌\":{\"math\":\"\\\\closedvarcup\"},\"⩍\":{\"math\":\"\\\\closedvarcap\"},\"⩎\":{\"math\":\"\\\\Sqcap\"},\"⩏\":{\"math\":\"\\\\Sqcup\"},\"⩐\":{\"math\":\"\\\\closedvarcupsmashprod\"},\"⩑\":{\"math\":\"\\\\wedgeodot\"},\"⩒\":{\"math\":\"\\\\veeodot\"},\"⩓\":{\"math\":\"\\\\ElzAnd\"},\"⩔\":{\"math\":\"\\\\ElzOr\"},\"⩖\":{\"math\":\"\\\\ElOr\"},\"⩗\":{\"math\":\"\\\\bigslopedvee\"},\"⩘\":{\"math\":\"\\\\bigslopedwedge\"},\"⩙\":{\"math\":\"\\\\veeonwedge\"},\"⩚\":{\"math\":\"\\\\wedgemidvert\"},\"⩛\":{\"math\":\"\\\\veemidvert\"},\"⩜\":{\"math\":\"\\\\midbarwedge\"},\"⩝\":{\"math\":\"\\\\midbarvee\"},\"⩞\":{\"math\":\"\\\\perspcorrespond\"},\"⩟\":{\"math\":\"\\\\Elzminhat\"},\"⩠\":{\"math\":\"\\\\wedgedoublebar\"},\"⩡\":{\"math\":\"\\\\varveebar\"},\"⩢\":{\"math\":\"\\\\doublebarvee\"},\"⩤\":{\"math\":\"\\\\dsub\"},\"⩥\":{\"math\":\"\\\\rsub\"},\"⩦\":{\"math\":\"\\\\eqdot\"},\"⩧\":{\"math\":\"\\\\dotequiv\"},\"⩨\":{\"math\":\"\\\\equivVert\"},\"⩩\":{\"math\":\"\\\\equivVvert\"},\"⩪\":{\"math\":\"\\\\dotsim\"},\"⩫\":{\"math\":\"\\\\simrdots\"},\"⩬\":{\"math\":\"\\\\simminussim\"},\"⩭\":{\"math\":\"\\\\congdot\"},\"⩮\":{\"math\":\"\\\\stackrel{*}{=}\"},\"⩯\":{\"math\":\"\\\\hatapprox\"},\"⩰\":{\"math\":\"\\\\approxeqq\"},\"⩱\":{\"math\":\"\\\\eqqplus\"},\"⩲\":{\"math\":\"\\\\pluseqq\"},\"⩳\":{\"math\":\"\\\\eqqsim\"},\"⩴\":{\"math\":\"\\\\Coloneqq\"},\"⩵\":{\"math\":\"\\\\Equal\"},\"⩶\":{\"math\":\"\\\\Same\"},\"⩷\":{\"math\":\"\\\\ddotseq\"},\"⩸\":{\"math\":\"\\\\equivDD\"},\"⩹\":{\"math\":\"\\\\ltcir\"},\"⩺\":{\"math\":\"\\\\gtcir\"},\"⩻\":{\"math\":\"\\\\ltquest\"},\"⩼\":{\"math\":\"\\\\gtquest\"},\"⩽\":{\"math\":\"\\\\leqslant\",\"mathpackages\":[\"amssymb\"]},\"⩽̸\":{\"math\":\"\\\\nleqslant\",\"mathpackages\":[\"amssymb\"]},\"⩾\":{\"math\":\"\\\\geqslant\",\"mathpackages\":[\"amssymb\"]},\"⩾̸\":{\"math\":\"\\\\ngeqslant\",\"mathpackages\":[\"amssymb\"]},\"⩿\":{\"math\":\"\\\\lesdot\"},\"⪀\":{\"math\":\"\\\\gesdot\"},\"⪁\":{\"math\":\"\\\\lesdoto\"},\"⪂\":{\"math\":\"\\\\gesdoto\"},\"⪃\":{\"math\":\"\\\\lesdotor\"},\"⪄\":{\"math\":\"\\\\gesdotol\"},\"⪅\":{\"math\":\"\\\\lessapprox\"},\"⪆\":{\"math\":\"\\\\gtrapprox\"},\"⪇\":{\"math\":\"\\\\lneq\"},\"⪈\":{\"math\":\"\\\\gneq\"},\"⪉\":{\"math\":\"\\\\lnapprox\"},\"⪊\":{\"math\":\"\\\\gnapprox\"},\"⪋\":{\"math\":\"\\\\lesseqqgtr\"},\"⪌\":{\"math\":\"\\\\gtreqqless\"},\"⪍\":{\"math\":\"\\\\lsime\"},\"⪎\":{\"math\":\"\\\\gsime\"},\"⪏\":{\"math\":\"\\\\lsimg\"},\"⪐\":{\"math\":\"\\\\gsiml\"},\"⪑\":{\"math\":\"\\\\lgE\"},\"⪒\":{\"math\":\"\\\\glE\"},\"⪓\":{\"math\":\"\\\\lesges\"},\"⪔\":{\"math\":\"\\\\gesles\"},\"⪕\":{\"math\":\"\\\\eqslantless\"},\"⪖\":{\"math\":\"\\\\eqslantgtr\"},\"⪗\":{\"math\":\"\\\\elsdot\"},\"⪘\":{\"math\":\"\\\\egsdot\"},\"⪙\":{\"math\":\"\\\\eqqless\"},\"⪚\":{\"math\":\"\\\\eqqgtr\"},\"⪛\":{\"math\":\"\\\\eqqslantless\"},\"⪜\":{\"math\":\"\\\\eqqslantgtr\"},\"⪝\":{\"math\":\"\\\\Pisymbol{ppi020}{117}\"},\"⪞\":{\"math\":\"\\\\Pisymbol{ppi020}{105}\"},\"⪟\":{\"math\":\"\\\\simlE\"},\"⪠\":{\"math\":\"\\\\simgE\"},\"⪡\":{\"math\":\"\\\\NestedLessLess\"},\"⪡̸\":{\"math\":\"\\\\NotNestedLessLess\"},\"⪢\":{\"math\":\"\\\\NestedGreaterGreater\"},\"⪢̸\":{\"math\":\"\\\\NotNestedGreaterGreater\"},\"⪣\":{\"math\":\"\\\\partialmeetcontraction\"},\"⪤\":{\"math\":\"\\\\glj\"},\"⪥\":{\"math\":\"\\\\gla\"},\"⪦\":{\"math\":\"\\\\leftslice\"},\"⪧\":{\"math\":\"\\\\rightslice\"},\"⪨\":{\"math\":\"\\\\lescc\"},\"⪩\":{\"math\":\"\\\\gescc\"},\"⪪\":{\"math\":\"\\\\smt\"},\"⪫\":{\"math\":\"\\\\lat\"},\"⪬\":{\"math\":\"\\\\smte\"},\"⪭\":{\"math\":\"\\\\late\"},\"⪮\":{\"math\":\"\\\\bumpeqq\"},\"⪯\":{\"math\":\"\\\\preceq\"},\"⪯̸\":{\"math\":\"\\\\not\\\\preceq\"},\"⪰\":{\"math\":\"\\\\succeq\"},\"⪰̸\":{\"math\":\"\\\\not\\\\succeq\"},\"⪱\":{\"math\":\"\\\\precneq\"},\"⪲\":{\"math\":\"\\\\succneq\"},\"⪳\":{\"math\":\"\\\\preceqq\"},\"⪴\":{\"math\":\"\\\\succeqq\"},\"⪵\":{\"math\":\"\\\\precneqq\"},\"⪶\":{\"math\":\"\\\\succneqq\"},\"⪷\":{\"math\":\"\\\\precapprox\"},\"⪸\":{\"math\":\"\\\\succapprox\"},\"⪹\":{\"math\":\"\\\\precnapprox\"},\"⪺\":{\"math\":\"\\\\succnapprox\"},\"⪻\":{\"math\":\"\\\\llcurly\"},\"⪼\":{\"math\":\"\\\\ggcurly\"},\"⪽\":{\"math\":\"\\\\subsetdot\"},\"⪾\":{\"math\":\"\\\\supsetdot\"},\"⪿\":{\"math\":\"\\\\subsetplus\"},\"⫀\":{\"math\":\"\\\\supsetplus\"},\"⫁\":{\"math\":\"\\\\submult\"},\"⫂\":{\"math\":\"\\\\supmult\"},\"⫃\":{\"math\":\"\\\\subedot\"},\"⫄\":{\"math\":\"\\\\supedot\"},\"⫅\":{\"math\":\"\\\\subseteqq\"},\"⫅̸\":{\"math\":\"\\\\nsubseteqq\"},\"⫆\":{\"math\":\"\\\\supseteqq\"},\"⫆̸\":{\"math\":\"\\\\nsupseteqq\"},\"⫇\":{\"math\":\"\\\\subsim\"},\"⫈\":{\"math\":\"\\\\supsim\"},\"⫉\":{\"math\":\"\\\\subsetapprox\"},\"⫊\":{\"math\":\"\\\\supsetapprox\"},\"⫋\":{\"math\":\"\\\\subsetneqq\"},\"⫌\":{\"math\":\"\\\\supsetneqq\"},\"⫍\":{\"math\":\"\\\\lsqhook\"},\"⫎\":{\"math\":\"\\\\rsqhook\"},\"⫏\":{\"math\":\"\\\\csub\"},\"⫐\":{\"math\":\"\\\\csup\"},\"⫑\":{\"math\":\"\\\\csube\"},\"⫒\":{\"math\":\"\\\\csupe\"},\"⫓\":{\"math\":\"\\\\subsup\"},\"⫔\":{\"math\":\"\\\\supsub\"},\"⫕\":{\"math\":\"\\\\subsub\"},\"⫖\":{\"math\":\"\\\\supsup\"},\"⫗\":{\"math\":\"\\\\suphsub\"},\"⫘\":{\"math\":\"\\\\supdsub\"},\"⫙\":{\"math\":\"\\\\forkv\"},\"⫚\":{\"math\":\"\\\\topfork\"},\"⫛\":{\"math\":\"\\\\mlcp\"},\"⫝̸\":{\"math\":\"\\\\forks\"},\"⫝\":{\"math\":\"\\\\forksnot\"},\"⫝̸\":{\"math\":\"\\\\forks\"},\"⫞\":{\"math\":\"\\\\shortlefttack\"},\"⫟\":{\"math\":\"\\\\shortdowntack\"},\"⫠\":{\"math\":\"\\\\shortuptack\"},\"⫡\":{\"math\":\"\\\\perps\"},\"⫢\":{\"math\":\"\\\\vDdash\"},\"⫣\":{\"math\":\"\\\\dashV\"},\"⫤\":{\"math\":\"\\\\Dashv\"},\"⫥\":{\"math\":\"\\\\DashV\"},\"⫦\":{\"math\":\"\\\\varVdash\"},\"⫧\":{\"math\":\"\\\\Barv\"},\"⫨\":{\"math\":\"\\\\vBar\"},\"⫩\":{\"math\":\"\\\\vBarv\"},\"⫪\":{\"math\":\"\\\\Top\"},\"⫬\":{\"math\":\"\\\\Not\"},\"⫭\":{\"math\":\"\\\\bNot\"},\"⫮\":{\"math\":\"\\\\revnmid\"},\"⫯\":{\"math\":\"\\\\cirmid\"},\"⫰\":{\"math\":\"\\\\midcir\"},\"⫱\":{\"math\":\"\\\\topcir\"},\"⫲\":{\"math\":\"\\\\nhpar\"},\"⫳\":{\"math\":\"\\\\parsim\"},\"⫴\":{\"math\":\"\\\\interleave\"},\"⫵\":{\"math\":\"\\\\nhVvert\"},\"⫶\":{\"math\":\"\\\\Elztdcol\"},\"⫷\":{\"math\":\"\\\\lllnest\"},\"⫸\":{\"math\":\"\\\\gggnest\"},\"⫹\":{\"math\":\"\\\\leqqslant\"},\"⫺\":{\"math\":\"\\\\geqqslant\"},\"⫻\":{\"math\":\"\\\\trslash\"},\"⫼\":{\"math\":\"\\\\biginterleave\"},\"⫽\":{\"math\":\"{{/}\\\\!\\\\!{/}}\"},\"⫽⃥\":{\"math\":\"{\\\\rlap{\\\\textbackslash}{{/}\\\\!\\\\!{/}}}\"},\"⫾\":{\"math\":\"\\\\talloblong\"},\"⫿\":{\"math\":\"\\\\bigtalloblong\"},\"⬒\":{\"math\":\"\\\\squaretopblack\"},\"⬓\":{\"math\":\"\\\\squarebotblack\"},\"⬔\":{\"math\":\"\\\\squareurblack\"},\"⬕\":{\"math\":\"\\\\squarellblack\"},\"⬖\":{\"math\":\"\\\\diamondleftblack\"},\"⬗\":{\"math\":\"\\\\diamondrightblack\"},\"⬘\":{\"math\":\"\\\\diamondtopblack\"},\"⬙\":{\"math\":\"\\\\diamondbotblack\"},\"⬚\":{\"math\":\"\\\\dottedsquare\"},\"⬛\":{\"math\":\"\\\\blacksquare\"},\"⬜\":{\"math\":\"\\\\square\"},\"⬝\":{\"math\":\"\\\\vysmblksquare\"},\"⬞\":{\"math\":\"\\\\vysmwhtsquare\"},\"⬟\":{\"math\":\"\\\\pentagonblack\"},\"⬠\":{\"math\":\"\\\\pentagon\"},\"⬡\":{\"math\":\"\\\\varhexagon\"},\"⬢\":{\"math\":\"\\\\varhexagonblack\"},\"⬣\":{\"math\":\"\\\\hexagonblack\"},\"⬤\":{\"math\":\"\\\\lgblkcircle\"},\"⬥\":{\"math\":\"\\\\mdblkdiamond\"},\"⬦\":{\"math\":\"\\\\mdwhtdiamond\"},\"⬧\":{\"math\":\"\\\\mdblklozenge\"},\"⬨\":{\"math\":\"\\\\mdwhtlozenge\"},\"⬩\":{\"math\":\"\\\\smblkdiamond\"},\"⬪\":{\"math\":\"\\\\smblklozenge\"},\"⬫\":{\"math\":\"\\\\smwhtlozenge\"},\"⬬\":{\"math\":\"\\\\blkhorzoval\"},\"⬭\":{\"math\":\"\\\\whthorzoval\"},\"⬮\":{\"math\":\"\\\\blkvertoval\"},\"⬯\":{\"math\":\"\\\\whtvertoval\"},\"⬰\":{\"math\":\"\\\\circleonleftarrow\"},\"⬱\":{\"math\":\"\\\\leftthreearrows\"},\"⬲\":{\"math\":\"\\\\leftarrowonoplus\"},\"⬳\":{\"math\":\"\\\\longleftsquigarrow\"},\"⬴\":{\"math\":\"\\\\nvtwoheadleftarrow\"},\"⬵\":{\"math\":\"\\\\nVtwoheadleftarrow\"},\"⬶\":{\"math\":\"\\\\twoheadmapsfrom\"},\"⬷\":{\"math\":\"\\\\twoheadleftdbkarrow\"},\"⬸\":{\"math\":\"\\\\leftdotarrow\"},\"⬹\":{\"math\":\"\\\\nvleftarrowtail\"},\"⬺\":{\"math\":\"\\\\nVleftarrowtail\"},\"⬻\":{\"math\":\"\\\\twoheadleftarrowtail\"},\"⬼\":{\"math\":\"\\\\nvtwoheadleftarrowtail\"},\"⬽\":{\"math\":\"\\\\nVtwoheadleftarrowtail\"},\"⬾\":{\"math\":\"\\\\leftarrowx\"},\"⬿\":{\"math\":\"\\\\leftcurvedarrow\"},\"⭀\":{\"math\":\"\\\\equalleftarrow\"},\"⭁\":{\"math\":\"\\\\bsimilarleftarrow\"},\"⭂\":{\"math\":\"\\\\leftarrowbackapprox\"},\"⭃\":{\"math\":\"\\\\rightarrowgtr\"},\"⭄\":{\"math\":\"\\\\rightarrowsupset\"},\"⭅\":{\"math\":\"\\\\LLeftarrow\"},\"⭆\":{\"math\":\"\\\\RRightarrow\"},\"⭇\":{\"math\":\"\\\\bsimilarrightarrow\"},\"⭈\":{\"math\":\"\\\\rightarrowbackapprox\"},\"⭉\":{\"math\":\"\\\\similarleftarrow\"},\"⭊\":{\"math\":\"\\\\leftarrowapprox\"},\"⭋\":{\"math\":\"\\\\leftarrowbsimilar\"},\"⭌\":{\"math\":\"\\\\rightarrowbsimilar\"},\"⭐\":{\"math\":\"\\\\medwhitestar\"},\"⭑\":{\"math\":\"\\\\medblackstar\"},\"⭒\":{\"math\":\"\\\\smwhitestar\"},\"⭓\":{\"math\":\"\\\\rightpentagonblack\"},\"⭔\":{\"math\":\"\\\\rightpentagon\"},\"〈\":{\"math\":\"\\\\langle\"},\"〉\":{\"math\":\"\\\\rangle\"},\"〒\":{\"math\":\"\\\\postalmark\"},\"〔\":{\"math\":\"\\\\lbrbrak\"},\"〕\":{\"math\":\"\\\\rbrbrak\"},\"〚\":{\"math\":\"\\\\openbracketleft\"},\"〛\":{\"math\":\"\\\\openbracketright\"},\"〰\":{\"math\":\"\\\\hzigzag\"},\"ﬀ\":{\"text\":\"ff\"},\"ﬁ\":{\"text\":\"fi\"},\"ﬂ\":{\"text\":\"fl\"},\"ﬃ\":{\"text\":\"ffi\"},\"ﬄ\":{\"text\":\"ffl\"},\"ﬅ\":{\"text\":\"st\"},\"ﬆ\":{\"text\":\"st\"},\"�\":{\"text\":\"\\\\dbend\",\"commandspacer\":true},\"𝐀\":{\"math\":\"\\\\mathbf{A}\"},\"𝐁\":{\"math\":\"\\\\mathbf{B}\"},\"𝐂\":{\"math\":\"\\\\mathbf{C}\"},\"𝐃\":{\"math\":\"\\\\mathbf{D}\"},\"𝐄\":{\"math\":\"\\\\mathbf{E}\"},\"𝐅\":{\"math\":\"\\\\mathbf{F}\"},\"𝐆\":{\"math\":\"\\\\mathbf{G}\"},\"𝐇\":{\"math\":\"\\\\mathbf{H}\"},\"𝐈\":{\"math\":\"\\\\mathbf{I}\"},\"𝐉\":{\"math\":\"\\\\mathbf{J}\"},\"𝐊\":{\"math\":\"\\\\mathbf{K}\"},\"𝐋\":{\"math\":\"\\\\mathbf{L}\"},\"𝐌\":{\"math\":\"\\\\mathbf{M}\"},\"𝐍\":{\"math\":\"\\\\mathbf{N}\"},\"𝐎\":{\"math\":\"\\\\mathbf{O}\"},\"𝐏\":{\"math\":\"\\\\mathbf{P}\"},\"𝐐\":{\"math\":\"\\\\mathbf{Q}\"},\"𝐑\":{\"math\":\"\\\\mathbf{R}\"},\"𝐒\":{\"math\":\"\\\\mathbf{S}\"},\"𝐓\":{\"math\":\"\\\\mathbf{T}\"},\"𝐔\":{\"math\":\"\\\\mathbf{U}\"},\"𝐕\":{\"math\":\"\\\\mathbf{V}\"},\"𝐖\":{\"math\":\"\\\\mathbf{W}\"},\"𝐗\":{\"math\":\"\\\\mathbf{X}\"},\"𝐘\":{\"math\":\"\\\\mathbf{Y}\"},\"𝐙\":{\"math\":\"\\\\mathbf{Z}\"},\"𝐚\":{\"math\":\"\\\\mathbf{a}\"},\"𝐛\":{\"math\":\"\\\\mathbf{b}\"},\"𝐜\":{\"math\":\"\\\\mathbf{c}\"},\"𝐝\":{\"math\":\"\\\\mathbf{d}\"},\"𝐞\":{\"math\":\"\\\\mathbf{e}\"},\"𝐟\":{\"math\":\"\\\\mathbf{f}\"},\"𝐠\":{\"math\":\"\\\\mathbf{g}\"},\"𝐡\":{\"math\":\"\\\\mathbf{h}\"},\"𝐢\":{\"math\":\"\\\\mathbf{i}\"},\"𝐣\":{\"math\":\"\\\\mathbf{j}\"},\"𝐤\":{\"math\":\"\\\\mathbf{k}\"},\"𝐥\":{\"math\":\"\\\\mathbf{l}\"},\"𝐦\":{\"math\":\"\\\\mathbf{m}\"},\"𝐧\":{\"math\":\"\\\\mathbf{n}\"},\"𝐨\":{\"math\":\"\\\\mathbf{o}\"},\"𝐩\":{\"math\":\"\\\\mathbf{p}\"},\"𝐪\":{\"math\":\"\\\\mathbf{q}\"},\"𝐫\":{\"math\":\"\\\\mathbf{r}\"},\"𝐬\":{\"math\":\"\\\\mathbf{s}\"},\"𝐭\":{\"math\":\"\\\\mathbf{t}\"},\"𝐮\":{\"math\":\"\\\\mathbf{u}\"},\"𝐯\":{\"math\":\"\\\\mathbf{v}\"},\"𝐰\":{\"math\":\"\\\\mathbf{w}\"},\"𝐱\":{\"math\":\"\\\\mathbf{x}\"},\"𝐲\":{\"math\":\"\\\\mathbf{y}\"},\"𝐳\":{\"math\":\"\\\\mathbf{z}\"},\"𝐴\":{\"math\":\"\\\\mathsl{A}\"},\"𝐵\":{\"math\":\"\\\\mathsl{B}\"},\"𝐶\":{\"math\":\"\\\\mathsl{C}\"},\"𝐷\":{\"math\":\"\\\\mathsl{D}\"},\"𝐸\":{\"math\":\"\\\\mathsl{E}\"},\"𝐹\":{\"math\":\"\\\\mathsl{F}\"},\"𝐺\":{\"math\":\"\\\\mathsl{G}\"},\"𝐻\":{\"math\":\"\\\\mathsl{H}\"},\"𝐼\":{\"math\":\"\\\\mathsl{I}\"},\"𝐽\":{\"math\":\"\\\\mathsl{J}\"},\"𝐾\":{\"math\":\"\\\\mathsl{K}\"},\"𝐿\":{\"math\":\"\\\\mathsl{L}\"},\"𝑀\":{\"math\":\"\\\\mathsl{M}\"},\"𝑁\":{\"math\":\"\\\\mathsl{N}\"},\"𝑂\":{\"math\":\"\\\\mathsl{O}\"},\"𝑃\":{\"math\":\"\\\\mathsl{P}\"},\"𝑄\":{\"math\":\"\\\\mathsl{Q}\"},\"𝑅\":{\"math\":\"\\\\mathsl{R}\"},\"𝑆\":{\"math\":\"\\\\mathsl{S}\"},\"𝑇\":{\"math\":\"\\\\mathsl{T}\"},\"𝑈\":{\"math\":\"\\\\mathsl{U}\"},\"𝑉\":{\"math\":\"\\\\mathsl{V}\"},\"𝑊\":{\"math\":\"\\\\mathsl{W}\"},\"𝑋\":{\"math\":\"\\\\mathsl{X}\"},\"𝑌\":{\"math\":\"\\\\mathsl{Y}\"},\"𝑍\":{\"math\":\"\\\\mathsl{Z}\"},\"𝑎\":{\"math\":\"\\\\mathsl{a}\"},\"𝑏\":{\"math\":\"\\\\mathsl{b}\"},\"𝑐\":{\"math\":\"\\\\mathsl{c}\"},\"𝑑\":{\"math\":\"\\\\mathsl{d}\"},\"𝑒\":{\"math\":\"\\\\mathsl{e}\"},\"𝑓\":{\"math\":\"\\\\mathsl{f}\"},\"𝑔\":{\"math\":\"\\\\mathsl{g}\"},\"𝑖\":{\"math\":\"\\\\mathsl{i}\"},\"𝑗\":{\"math\":\"\\\\mathsl{j}\"},\"𝑘\":{\"math\":\"\\\\mathsl{k}\"},\"𝑙\":{\"math\":\"\\\\mathsl{l}\"},\"𝑚\":{\"math\":\"\\\\mathsl{m}\"},\"𝑛\":{\"math\":\"\\\\mathsl{n}\"},\"𝑜\":{\"math\":\"\\\\mathsl{o}\"},\"𝑝\":{\"math\":\"\\\\mathsl{p}\"},\"𝑞\":{\"math\":\"\\\\mathsl{q}\"},\"𝑟\":{\"math\":\"\\\\mathsl{r}\"},\"𝑠\":{\"math\":\"\\\\mathsl{s}\"},\"𝑡\":{\"math\":\"\\\\mathsl{t}\"},\"𝑢\":{\"math\":\"\\\\mathsl{u}\"},\"𝑣\":{\"math\":\"\\\\mathsl{v}\"},\"𝑤\":{\"math\":\"\\\\mathsl{w}\"},\"𝑥\":{\"math\":\"\\\\mathsl{x}\"},\"𝑦\":{\"math\":\"\\\\mathsl{y}\"},\"𝑧\":{\"math\":\"\\\\mathsl{z}\"},\"𝑨\":{\"math\":\"\\\\mathbit{A}\"},\"𝑩\":{\"math\":\"\\\\mathbit{B}\"},\"𝑪\":{\"math\":\"\\\\mathbit{C}\"},\"𝑫\":{\"math\":\"\\\\mathbit{D}\"},\"𝑬\":{\"math\":\"\\\\mathbit{E}\"},\"𝑭\":{\"math\":\"\\\\mathbit{F}\"},\"𝑮\":{\"math\":\"\\\\mathbit{G}\"},\"𝑯\":{\"math\":\"\\\\mathbit{H}\"},\"𝑰\":{\"math\":\"\\\\mathbit{I}\"},\"𝑱\":{\"math\":\"\\\\mathbit{J}\"},\"𝑲\":{\"math\":\"\\\\mathbit{K}\"},\"𝑳\":{\"math\":\"\\\\mathbit{L}\"},\"𝑴\":{\"math\":\"\\\\mathbit{M}\"},\"𝑵\":{\"math\":\"\\\\mathbit{N}\"},\"𝑶\":{\"math\":\"\\\\mathbit{O}\"},\"𝑷\":{\"math\":\"\\\\mathbit{P}\"},\"𝑸\":{\"math\":\"\\\\mathbit{Q}\"},\"𝑹\":{\"math\":\"\\\\mathbit{R}\"},\"𝑺\":{\"math\":\"\\\\mathbit{S}\"},\"𝑻\":{\"math\":\"\\\\mathbit{T}\"},\"𝑼\":{\"math\":\"\\\\mathbit{U}\"},\"𝑽\":{\"math\":\"\\\\mathbit{V}\"},\"𝑾\":{\"math\":\"\\\\mathbit{W}\"},\"𝑿\":{\"math\":\"\\\\mathbit{X}\"},\"𝒀\":{\"math\":\"\\\\mathbit{Y}\"},\"𝒁\":{\"math\":\"\\\\mathbit{Z}\"},\"𝒂\":{\"math\":\"\\\\mathbit{a}\"},\"𝒃\":{\"math\":\"\\\\mathbit{b}\"},\"𝒄\":{\"math\":\"\\\\mathbit{c}\"},\"𝒅\":{\"math\":\"\\\\mathbit{d}\"},\"𝒆\":{\"math\":\"\\\\mathbit{e}\"},\"𝒇\":{\"math\":\"\\\\mathbit{f}\"},\"𝒈\":{\"math\":\"\\\\mathbit{g}\"},\"𝒉\":{\"math\":\"\\\\mathbit{h}\"},\"𝒊\":{\"math\":\"\\\\mathbit{i}\"},\"𝒋\":{\"math\":\"\\\\mathbit{j}\"},\"𝒌\":{\"math\":\"\\\\mathbit{k}\"},\"𝒍\":{\"math\":\"\\\\mathbit{l}\"},\"𝒎\":{\"math\":\"\\\\mathbit{m}\"},\"𝒏\":{\"math\":\"\\\\mathbit{n}\"},\"𝒐\":{\"math\":\"\\\\mathbit{o}\"},\"𝒑\":{\"math\":\"\\\\mathbit{p}\"},\"𝒒\":{\"math\":\"\\\\mathbit{q}\"},\"𝒓\":{\"math\":\"\\\\mathbit{r}\"},\"𝒔\":{\"math\":\"\\\\mathbit{s}\"},\"𝒕\":{\"math\":\"\\\\mathbit{t}\"},\"𝒖\":{\"math\":\"\\\\mathbit{u}\"},\"𝒗\":{\"math\":\"\\\\mathbit{v}\"},\"𝒘\":{\"math\":\"\\\\mathbit{w}\"},\"𝒙\":{\"math\":\"\\\\mathbit{x}\"},\"𝒚\":{\"math\":\"\\\\mathbit{y}\"},\"𝒛\":{\"math\":\"\\\\mathbit{z}\"},\"𝒜\":{\"math\":\"\\\\mathscr{A}\"},\"𝒞\":{\"math\":\"\\\\mathscr{C}\"},\"𝒟\":{\"math\":\"\\\\mathscr{D}\"},\"𝒢\":{\"math\":\"\\\\mathscr{G}\"},\"𝒥\":{\"math\":\"\\\\mathscr{J}\"},\"𝒦\":{\"math\":\"\\\\mathscr{K}\"},\"𝒩\":{\"math\":\"\\\\mathscr{N}\"},\"𝒪\":{\"math\":\"\\\\mathscr{O}\"},\"𝒫\":{\"math\":\"\\\\mathscr{P}\"},\"𝒬\":{\"math\":\"\\\\mathscr{Q}\"},\"𝒮\":{\"math\":\"\\\\mathscr{S}\"},\"𝒯\":{\"math\":\"\\\\mathscr{T}\"},\"𝒰\":{\"math\":\"\\\\mathscr{U}\"},\"𝒱\":{\"math\":\"\\\\mathscr{V}\"},\"𝒲\":{\"math\":\"\\\\mathscr{W}\"},\"𝒳\":{\"math\":\"\\\\mathscr{X}\"},\"𝒴\":{\"math\":\"\\\\mathscr{Y}\"},\"𝒵\":{\"math\":\"\\\\mathscr{Z}\"},\"𝒶\":{\"math\":\"\\\\mathscr{a}\"},\"𝒷\":{\"math\":\"\\\\mathscr{b}\"},\"𝒸\":{\"math\":\"\\\\mathscr{c}\"},\"𝒹\":{\"math\":\"\\\\mathscr{d}\"},\"𝒻\":{\"math\":\"\\\\mathscr{f}\"},\"𝒽\":{\"math\":\"\\\\mathscr{h}\"},\"𝒾\":{\"math\":\"\\\\mathscr{i}\"},\"𝒿\":{\"math\":\"\\\\mathscr{j}\"},\"𝓀\":{\"math\":\"\\\\mathscr{k}\"},\"𝓁\":{\"math\":\"\\\\mathscr{l}\"},\"𝓂\":{\"math\":\"\\\\mathscr{m}\"},\"𝓃\":{\"math\":\"\\\\mathscr{n}\"},\"𝓅\":{\"math\":\"\\\\mathscr{p}\"},\"𝓆\":{\"math\":\"\\\\mathscr{q}\"},\"𝓇\":{\"math\":\"\\\\mathscr{r}\"},\"𝓈\":{\"math\":\"\\\\mathscr{s}\"},\"𝓉\":{\"math\":\"\\\\mathscr{t}\"},\"𝓊\":{\"math\":\"\\\\mathscr{u}\"},\"𝓋\":{\"math\":\"\\\\mathscr{v}\"},\"𝓌\":{\"math\":\"\\\\mathscr{w}\"},\"𝓍\":{\"math\":\"\\\\mathscr{x}\"},\"𝓎\":{\"math\":\"\\\\mathscr{y}\"},\"𝓏\":{\"math\":\"\\\\mathscr{z}\"},\"𝓐\":{\"math\":\"\\\\mathmit{A}\"},\"𝓑\":{\"math\":\"\\\\mathmit{B}\"},\"𝓒\":{\"math\":\"\\\\mathmit{C}\"},\"𝓓\":{\"math\":\"\\\\mathmit{D}\"},\"𝓔\":{\"math\":\"\\\\mathmit{E}\"},\"𝓕\":{\"math\":\"\\\\mathmit{F}\"},\"𝓖\":{\"math\":\"\\\\mathmit{G}\"},\"𝓗\":{\"math\":\"\\\\mathmit{H}\"},\"𝓘\":{\"math\":\"\\\\mathmit{I}\"},\"𝓙\":{\"math\":\"\\\\mathmit{J}\"},\"𝓚\":{\"math\":\"\\\\mathmit{K}\"},\"𝓛\":{\"math\":\"\\\\mathmit{L}\"},\"𝓜\":{\"math\":\"\\\\mathmit{M}\"},\"𝓝\":{\"math\":\"\\\\mathmit{N}\"},\"𝓞\":{\"math\":\"\\\\mathmit{O}\"},\"𝓟\":{\"math\":\"\\\\mathmit{P}\"},\"𝓠\":{\"math\":\"\\\\mathmit{Q}\"},\"𝓡\":{\"math\":\"\\\\mathmit{R}\"},\"𝓢\":{\"math\":\"\\\\mathmit{S}\"},\"𝓣\":{\"math\":\"\\\\mathmit{T}\"},\"𝓤\":{\"math\":\"\\\\mathmit{U}\"},\"𝓥\":{\"math\":\"\\\\mathmit{V}\"},\"𝓦\":{\"math\":\"\\\\mathmit{W}\"},\"𝓧\":{\"math\":\"\\\\mathmit{X}\"},\"𝓨\":{\"math\":\"\\\\mathmit{Y}\"},\"𝓩\":{\"math\":\"\\\\mathmit{Z}\"},\"𝓪\":{\"math\":\"\\\\mathmit{a}\"},\"𝓫\":{\"math\":\"\\\\mathmit{b}\"},\"𝓬\":{\"math\":\"\\\\mathmit{c}\"},\"𝓭\":{\"math\":\"\\\\mathmit{d}\"},\"𝓮\":{\"math\":\"\\\\mathmit{e}\"},\"𝓯\":{\"math\":\"\\\\mathmit{f}\"},\"𝓰\":{\"math\":\"\\\\mathmit{g}\"},\"𝓱\":{\"math\":\"\\\\mathmit{h}\"},\"𝓲\":{\"math\":\"\\\\mathmit{i}\"},\"𝓳\":{\"math\":\"\\\\mathmit{j}\"},\"𝓴\":{\"math\":\"\\\\mathmit{k}\"},\"𝓵\":{\"math\":\"\\\\mathmit{l}\"},\"𝓶\":{\"math\":\"\\\\mathmit{m}\"},\"𝓷\":{\"math\":\"\\\\mathmit{n}\"},\"𝓸\":{\"math\":\"\\\\mathmit{o}\"},\"𝓹\":{\"math\":\"\\\\mathmit{p}\"},\"𝓺\":{\"math\":\"\\\\mathmit{q}\"},\"𝓻\":{\"math\":\"\\\\mathmit{r}\"},\"𝓼\":{\"math\":\"\\\\mathmit{s}\"},\"𝓽\":{\"math\":\"\\\\mathmit{t}\"},\"𝓾\":{\"math\":\"\\\\mathmit{u}\"},\"𝓿\":{\"math\":\"\\\\mathmit{v}\"},\"𝔀\":{\"math\":\"\\\\mathmit{w}\"},\"𝔁\":{\"math\":\"\\\\mathmit{x}\"},\"𝔂\":{\"math\":\"\\\\mathmit{y}\"},\"𝔃\":{\"math\":\"\\\\mathmit{z}\"},\"𝔄\":{\"math\":\"\\\\mathfrak{A}\"},\"𝔅\":{\"math\":\"\\\\mathfrak{B}\"},\"𝔇\":{\"math\":\"\\\\mathfrak{D}\"},\"𝔈\":{\"math\":\"\\\\mathfrak{E}\"},\"𝔉\":{\"math\":\"\\\\mathfrak{F}\"},\"𝔊\":{\"math\":\"\\\\mathfrak{G}\"},\"𝔍\":{\"math\":\"\\\\mathfrak{J}\"},\"𝔎\":{\"math\":\"\\\\mathfrak{K}\"},\"𝔏\":{\"math\":\"\\\\mathfrak{L}\"},\"𝔐\":{\"math\":\"\\\\mathfrak{M}\"},\"𝔑\":{\"math\":\"\\\\mathfrak{N}\"},\"𝔒\":{\"math\":\"\\\\mathfrak{O}\"},\"𝔓\":{\"math\":\"\\\\mathfrak{P}\"},\"𝔔\":{\"math\":\"\\\\mathfrak{Q}\"},\"𝔖\":{\"math\":\"\\\\mathfrak{S}\"},\"𝔗\":{\"math\":\"\\\\mathfrak{T}\"},\"𝔘\":{\"math\":\"\\\\mathfrak{U}\"},\"𝔙\":{\"math\":\"\\\\mathfrak{V}\"},\"𝔚\":{\"math\":\"\\\\mathfrak{W}\"},\"𝔛\":{\"math\":\"\\\\mathfrak{X}\"},\"𝔜\":{\"math\":\"\\\\mathfrak{Y}\"},\"𝔞\":{\"math\":\"\\\\mathfrak{a}\"},\"𝔟\":{\"math\":\"\\\\mathfrak{b}\"},\"𝔠\":{\"math\":\"\\\\mathfrak{c}\"},\"𝔡\":{\"math\":\"\\\\mathfrak{d}\"},\"𝔢\":{\"math\":\"\\\\mathfrak{e}\"},\"𝔣\":{\"math\":\"\\\\mathfrak{f}\"},\"𝔤\":{\"math\":\"\\\\mathfrak{g}\"},\"𝔥\":{\"math\":\"\\\\mathfrak{h}\"},\"𝔦\":{\"math\":\"\\\\mathfrak{i}\"},\"𝔧\":{\"math\":\"\\\\mathfrak{j}\"},\"𝔨\":{\"math\":\"\\\\mathfrak{k}\"},\"𝔩\":{\"math\":\"\\\\mathfrak{l}\"},\"𝔪\":{\"math\":\"\\\\mathfrak{m}\"},\"𝔫\":{\"math\":\"\\\\mathfrak{n}\"},\"𝔬\":{\"math\":\"\\\\mathfrak{o}\"},\"𝔭\":{\"math\":\"\\\\mathfrak{p}\"},\"𝔮\":{\"math\":\"\\\\mathfrak{q}\"},\"𝔯\":{\"math\":\"\\\\mathfrak{r}\"},\"𝔰\":{\"math\":\"\\\\mathfrak{s}\"},\"𝔱\":{\"math\":\"\\\\mathfrak{t}\"},\"𝔲\":{\"math\":\"\\\\mathfrak{u}\"},\"𝔳\":{\"math\":\"\\\\mathfrak{v}\"},\"𝔴\":{\"math\":\"\\\\mathfrak{w}\"},\"𝔵\":{\"math\":\"\\\\mathfrak{x}\"},\"𝔶\":{\"math\":\"\\\\mathfrak{y}\"},\"𝔷\":{\"math\":\"\\\\mathfrak{z}\"},\"𝔸\":{\"math\":\"\\\\mathbb{A}\"},\"𝔹\":{\"math\":\"\\\\mathbb{B}\"},\"𝔻\":{\"math\":\"\\\\mathbb{D}\"},\"𝔼\":{\"math\":\"\\\\mathbb{E}\"},\"𝔽\":{\"math\":\"\\\\mathbb{F}\"},\"𝔾\":{\"math\":\"\\\\mathbb{G}\"},\"𝕀\":{\"math\":\"\\\\mathbb{I}\"},\"𝕁\":{\"math\":\"\\\\mathbb{J}\"},\"𝕂\":{\"math\":\"\\\\mathbb{K}\"},\"𝕃\":{\"math\":\"\\\\mathbb{L}\"},\"𝕄\":{\"math\":\"\\\\mathbb{M}\"},\"𝕆\":{\"math\":\"\\\\mathbb{O}\"},\"𝕊\":{\"math\":\"\\\\mathbb{S}\"},\"𝕋\":{\"math\":\"\\\\mathbb{T}\"},\"𝕌\":{\"math\":\"\\\\mathbb{U}\"},\"𝕍\":{\"math\":\"\\\\mathbb{V}\"},\"𝕎\":{\"math\":\"\\\\mathbb{W}\"},\"𝕏\":{\"math\":\"\\\\mathbb{X}\"},\"𝕐\":{\"math\":\"\\\\mathbb{Y}\"},\"𝕒\":{\"math\":\"\\\\mathbb{a}\"},\"𝕓\":{\"math\":\"\\\\mathbb{b}\"},\"𝕔\":{\"math\":\"\\\\mathbb{c}\"},\"𝕕\":{\"math\":\"\\\\mathbb{d}\"},\"𝕖\":{\"math\":\"\\\\mathbb{e}\"},\"𝕗\":{\"math\":\"\\\\mathbb{f}\"},\"𝕘\":{\"math\":\"\\\\mathbb{g}\"},\"𝕙\":{\"math\":\"\\\\mathbb{h}\"},\"𝕚\":{\"math\":\"\\\\mathbb{i}\"},\"𝕛\":{\"math\":\"\\\\mathbb{j}\"},\"𝕜\":{\"math\":\"\\\\mathbb{k}\"},\"𝕝\":{\"math\":\"\\\\mathbb{l}\"},\"𝕞\":{\"math\":\"\\\\mathbb{m}\"},\"𝕟\":{\"math\":\"\\\\mathbb{n}\"},\"𝕠\":{\"math\":\"\\\\mathbb{o}\"},\"𝕡\":{\"math\":\"\\\\mathbb{p}\"},\"𝕢\":{\"math\":\"\\\\mathbb{q}\"},\"𝕣\":{\"math\":\"\\\\mathbb{r}\"},\"𝕤\":{\"math\":\"\\\\mathbb{s}\"},\"𝕥\":{\"math\":\"\\\\mathbb{t}\"},\"𝕦\":{\"math\":\"\\\\mathbb{u}\"},\"𝕧\":{\"math\":\"\\\\mathbb{v}\"},\"𝕨\":{\"math\":\"\\\\mathbb{w}\"},\"𝕩\":{\"math\":\"\\\\mathbb{x}\"},\"𝕪\":{\"math\":\"\\\\mathbb{y}\"},\"𝕫\":{\"math\":\"\\\\mathbb{z}\"},\"𝕬\":{\"math\":\"\\\\mathslbb{A}\"},\"𝕭\":{\"math\":\"\\\\mathslbb{B}\"},\"𝕮\":{\"math\":\"\\\\mathslbb{C}\"},\"𝕯\":{\"math\":\"\\\\mathslbb{D}\"},\"𝕰\":{\"math\":\"\\\\mathslbb{E}\"},\"𝕱\":{\"math\":\"\\\\mathslbb{F}\"},\"𝕲\":{\"math\":\"\\\\mathslbb{G}\"},\"𝕳\":{\"math\":\"\\\\mathslbb{H}\"},\"𝕴\":{\"math\":\"\\\\mathslbb{I}\"},\"𝕵\":{\"math\":\"\\\\mathslbb{J}\"},\"𝕶\":{\"math\":\"\\\\mathslbb{K}\"},\"𝕷\":{\"math\":\"\\\\mathslbb{L}\"},\"𝕸\":{\"math\":\"\\\\mathslbb{M}\"},\"𝕹\":{\"math\":\"\\\\mathslbb{N}\"},\"𝕺\":{\"math\":\"\\\\mathslbb{O}\"},\"𝕻\":{\"math\":\"\\\\mathslbb{P}\"},\"𝕼\":{\"math\":\"\\\\mathslbb{Q}\"},\"𝕽\":{\"math\":\"\\\\mathslbb{R}\"},\"𝕾\":{\"math\":\"\\\\mathslbb{S}\"},\"𝕿\":{\"math\":\"\\\\mathslbb{T}\"},\"𝖀\":{\"math\":\"\\\\mathslbb{U}\"},\"𝖁\":{\"math\":\"\\\\mathslbb{V}\"},\"𝖂\":{\"math\":\"\\\\mathslbb{W}\"},\"𝖃\":{\"math\":\"\\\\mathslbb{X}\"},\"𝖄\":{\"math\":\"\\\\mathslbb{Y}\"},\"𝖅\":{\"math\":\"\\\\mathslbb{Z}\"},\"𝖆\":{\"math\":\"\\\\mathslbb{a}\"},\"𝖇\":{\"math\":\"\\\\mathslbb{b}\"},\"𝖈\":{\"math\":\"\\\\mathslbb{c}\"},\"𝖉\":{\"math\":\"\\\\mathslbb{d}\"},\"𝖊\":{\"math\":\"\\\\mathslbb{e}\"},\"𝖋\":{\"math\":\"\\\\mathslbb{f}\"},\"𝖌\":{\"math\":\"\\\\mathslbb{g}\"},\"𝖍\":{\"math\":\"\\\\mathslbb{h}\"},\"𝖎\":{\"math\":\"\\\\mathslbb{i}\"},\"𝖏\":{\"math\":\"\\\\mathslbb{j}\"},\"𝖐\":{\"math\":\"\\\\mathslbb{k}\"},\"𝖑\":{\"math\":\"\\\\mathslbb{l}\"},\"𝖒\":{\"math\":\"\\\\mathslbb{m}\"},\"𝖓\":{\"math\":\"\\\\mathslbb{n}\"},\"𝖔\":{\"math\":\"\\\\mathslbb{o}\"},\"𝖕\":{\"math\":\"\\\\mathslbb{p}\"},\"𝖖\":{\"math\":\"\\\\mathslbb{q}\"},\"𝖗\":{\"math\":\"\\\\mathslbb{r}\"},\"𝖘\":{\"math\":\"\\\\mathslbb{s}\"},\"𝖙\":{\"math\":\"\\\\mathslbb{t}\"},\"𝖚\":{\"math\":\"\\\\mathslbb{u}\"},\"𝖛\":{\"math\":\"\\\\mathslbb{v}\"},\"𝖜\":{\"math\":\"\\\\mathslbb{w}\"},\"𝖝\":{\"math\":\"\\\\mathslbb{x}\"},\"𝖞\":{\"math\":\"\\\\mathslbb{y}\"},\"𝖟\":{\"math\":\"\\\\mathslbb{z}\"},\"𝖠\":{\"math\":\"\\\\mathsf{A}\"},\"𝖡\":{\"math\":\"\\\\mathsf{B}\"},\"𝖢\":{\"math\":\"\\\\mathsf{C}\"},\"𝖣\":{\"math\":\"\\\\mathsf{D}\"},\"𝖤\":{\"math\":\"\\\\mathsf{E}\"},\"𝖥\":{\"math\":\"\\\\mathsf{F}\"},\"𝖦\":{\"math\":\"\\\\mathsf{G}\"},\"𝖧\":{\"math\":\"\\\\mathsf{H}\"},\"𝖨\":{\"math\":\"\\\\mathsf{I}\"},\"𝖩\":{\"math\":\"\\\\mathsf{J}\"},\"𝖪\":{\"math\":\"\\\\mathsf{K}\"},\"𝖫\":{\"math\":\"\\\\mathsf{L}\"},\"𝖬\":{\"math\":\"\\\\mathsf{M}\"},\"𝖭\":{\"math\":\"\\\\mathsf{N}\"},\"𝖮\":{\"math\":\"\\\\mathsf{O}\"},\"𝖯\":{\"math\":\"\\\\mathsf{P}\"},\"𝖰\":{\"math\":\"\\\\mathsf{Q}\"},\"𝖱\":{\"math\":\"\\\\mathsf{R}\"},\"𝖲\":{\"math\":\"\\\\mathsf{S}\"},\"𝖳\":{\"math\":\"\\\\mathsf{T}\"},\"𝖴\":{\"math\":\"\\\\mathsf{U}\"},\"𝖵\":{\"math\":\"\\\\mathsf{V}\"},\"𝖶\":{\"math\":\"\\\\mathsf{W}\"},\"𝖷\":{\"math\":\"\\\\mathsf{X}\"},\"𝖸\":{\"math\":\"\\\\mathsf{Y}\"},\"𝖹\":{\"math\":\"\\\\mathsf{Z}\"},\"𝖺\":{\"math\":\"\\\\mathsf{a}\"},\"𝖻\":{\"math\":\"\\\\mathsf{b}\"},\"𝖼\":{\"math\":\"\\\\mathsf{c}\"},\"𝖽\":{\"math\":\"\\\\mathsf{d}\"},\"𝖾\":{\"math\":\"\\\\mathsf{e}\"},\"𝖿\":{\"math\":\"\\\\mathsf{f}\"},\"𝗀\":{\"math\":\"\\\\mathsf{g}\"},\"𝗁\":{\"math\":\"\\\\mathsf{h}\"},\"𝗂\":{\"math\":\"\\\\mathsf{i}\"},\"𝗃\":{\"math\":\"\\\\mathsf{j}\"},\"𝗄\":{\"math\":\"\\\\mathsf{k}\"},\"𝗅\":{\"math\":\"\\\\mathsf{l}\"},\"𝗆\":{\"math\":\"\\\\mathsf{m}\"},\"𝗇\":{\"math\":\"\\\\mathsf{n}\"},\"𝗈\":{\"math\":\"\\\\mathsf{o}\"},\"𝗉\":{\"math\":\"\\\\mathsf{p}\"},\"𝗊\":{\"math\":\"\\\\mathsf{q}\"},\"𝗋\":{\"math\":\"\\\\mathsf{r}\"},\"𝗌\":{\"math\":\"\\\\mathsf{s}\"},\"𝗍\":{\"math\":\"\\\\mathsf{t}\"},\"𝗎\":{\"math\":\"\\\\mathsf{u}\"},\"𝗏\":{\"math\":\"\\\\mathsf{v}\"},\"𝗐\":{\"math\":\"\\\\mathsf{w}\"},\"𝗑\":{\"math\":\"\\\\mathsf{x}\"},\"𝗒\":{\"math\":\"\\\\mathsf{y}\"},\"𝗓\":{\"math\":\"\\\\mathsf{z}\"},\"𝗔\":{\"math\":\"\\\\mathsfbf{A}\"},\"𝗕\":{\"math\":\"\\\\mathsfbf{B}\"},\"𝗖\":{\"math\":\"\\\\mathsfbf{C}\"},\"𝗗\":{\"math\":\"\\\\mathsfbf{D}\"},\"𝗘\":{\"math\":\"\\\\mathsfbf{E}\"},\"𝗙\":{\"math\":\"\\\\mathsfbf{F}\"},\"𝗚\":{\"math\":\"\\\\mathsfbf{G}\"},\"𝗛\":{\"math\":\"\\\\mathsfbf{H}\"},\"𝗜\":{\"math\":\"\\\\mathsfbf{I}\"},\"𝗝\":{\"math\":\"\\\\mathsfbf{J}\"},\"𝗞\":{\"math\":\"\\\\mathsfbf{K}\"},\"𝗟\":{\"math\":\"\\\\mathsfbf{L}\"},\"𝗠\":{\"math\":\"\\\\mathsfbf{M}\"},\"𝗡\":{\"math\":\"\\\\mathsfbf{N}\"},\"𝗢\":{\"math\":\"\\\\mathsfbf{O}\"},\"𝗣\":{\"math\":\"\\\\mathsfbf{P}\"},\"𝗤\":{\"math\":\"\\\\mathsfbf{Q}\"},\"𝗥\":{\"math\":\"\\\\mathsfbf{R}\"},\"𝗦\":{\"math\":\"\\\\mathsfbf{S}\"},\"𝗧\":{\"math\":\"\\\\mathsfbf{T}\"},\"𝗨\":{\"math\":\"\\\\mathsfbf{U}\"},\"𝗩\":{\"math\":\"\\\\mathsfbf{V}\"},\"𝗪\":{\"math\":\"\\\\mathsfbf{W}\"},\"𝗫\":{\"math\":\"\\\\mathsfbf{X}\"},\"𝗬\":{\"math\":\"\\\\mathsfbf{Y}\"},\"𝗭\":{\"math\":\"\\\\mathsfbf{Z}\"},\"𝗮\":{\"math\":\"\\\\mathsfbf{a}\"},\"𝗯\":{\"math\":\"\\\\mathsfbf{b}\"},\"𝗰\":{\"math\":\"\\\\mathsfbf{c}\"},\"𝗱\":{\"math\":\"\\\\mathsfbf{d}\"},\"𝗲\":{\"math\":\"\\\\mathsfbf{e}\"},\"𝗳\":{\"math\":\"\\\\mathsfbf{f}\"},\"𝗴\":{\"math\":\"\\\\mathsfbf{g}\"},\"𝗵\":{\"math\":\"\\\\mathsfbf{h}\"},\"𝗶\":{\"math\":\"\\\\mathsfbf{i}\"},\"𝗷\":{\"math\":\"\\\\mathsfbf{j}\"},\"𝗸\":{\"math\":\"\\\\mathsfbf{k}\"},\"𝗹\":{\"math\":\"\\\\mathsfbf{l}\"},\"𝗺\":{\"math\":\"\\\\mathsfbf{m}\"},\"𝗻\":{\"math\":\"\\\\mathsfbf{n}\"},\"𝗼\":{\"math\":\"\\\\mathsfbf{o}\"},\"𝗽\":{\"math\":\"\\\\mathsfbf{p}\"},\"𝗾\":{\"math\":\"\\\\mathsfbf{q}\"},\"𝗿\":{\"math\":\"\\\\mathsfbf{r}\"},\"𝘀\":{\"math\":\"\\\\mathsfbf{s}\"},\"𝘁\":{\"math\":\"\\\\mathsfbf{t}\"},\"𝘂\":{\"math\":\"\\\\mathsfbf{u}\"},\"𝘃\":{\"math\":\"\\\\mathsfbf{v}\"},\"𝘄\":{\"math\":\"\\\\mathsfbf{w}\"},\"𝘅\":{\"math\":\"\\\\mathsfbf{x}\"},\"𝘆\":{\"math\":\"\\\\mathsfbf{y}\"},\"𝘇\":{\"math\":\"\\\\mathsfbf{z}\"},\"𝘈\":{\"math\":\"\\\\mathsfsl{A}\"},\"𝘉\":{\"math\":\"\\\\mathsfsl{B}\"},\"𝘊\":{\"math\":\"\\\\mathsfsl{C}\"},\"𝘋\":{\"math\":\"\\\\mathsfsl{D}\"},\"𝘌\":{\"math\":\"\\\\mathsfsl{E}\"},\"𝘍\":{\"math\":\"\\\\mathsfsl{F}\"},\"𝘎\":{\"math\":\"\\\\mathsfsl{G}\"},\"𝘏\":{\"math\":\"\\\\mathsfsl{H}\"},\"𝘐\":{\"math\":\"\\\\mathsfsl{I}\"},\"𝘑\":{\"math\":\"\\\\mathsfsl{J}\"},\"𝘒\":{\"math\":\"\\\\mathsfsl{K}\"},\"𝘓\":{\"math\":\"\\\\mathsfsl{L}\"},\"𝘔\":{\"math\":\"\\\\mathsfsl{M}\"},\"𝘕\":{\"math\":\"\\\\mathsfsl{N}\"},\"𝘖\":{\"math\":\"\\\\mathsfsl{O}\"},\"𝘗\":{\"math\":\"\\\\mathsfsl{P}\"},\"𝘘\":{\"math\":\"\\\\mathsfsl{Q}\"},\"𝘙\":{\"math\":\"\\\\mathsfsl{R}\"},\"𝘚\":{\"math\":\"\\\\mathsfsl{S}\"},\"𝘛\":{\"math\":\"\\\\mathsfsl{T}\"},\"𝘜\":{\"math\":\"\\\\mathsfsl{U}\"},\"𝘝\":{\"math\":\"\\\\mathsfsl{V}\"},\"𝘞\":{\"math\":\"\\\\mathsfsl{W}\"},\"𝘟\":{\"math\":\"\\\\mathsfsl{X}\"},\"𝘠\":{\"math\":\"\\\\mathsfsl{Y}\"},\"𝘡\":{\"math\":\"\\\\mathsfsl{Z}\"},\"𝘢\":{\"math\":\"\\\\mathsfsl{a}\"},\"𝘣\":{\"math\":\"\\\\mathsfsl{b}\"},\"𝘤\":{\"math\":\"\\\\mathsfsl{c}\"},\"𝘥\":{\"math\":\"\\\\mathsfsl{d}\"},\"𝘦\":{\"math\":\"\\\\mathsfsl{e}\"},\"𝘧\":{\"math\":\"\\\\mathsfsl{f}\"},\"𝘨\":{\"math\":\"\\\\mathsfsl{g}\"},\"𝘩\":{\"math\":\"\\\\mathsfsl{h}\"},\"𝘪\":{\"math\":\"\\\\mathsfsl{i}\"},\"𝘫\":{\"math\":\"\\\\mathsfsl{j}\"},\"𝘬\":{\"math\":\"\\\\mathsfsl{k}\"},\"𝘭\":{\"math\":\"\\\\mathsfsl{l}\"},\"𝘮\":{\"math\":\"\\\\mathsfsl{m}\"},\"𝘯\":{\"math\":\"\\\\mathsfsl{n}\"},\"𝘰\":{\"math\":\"\\\\mathsfsl{o}\"},\"𝘱\":{\"math\":\"\\\\mathsfsl{p}\"},\"𝘲\":{\"math\":\"\\\\mathsfsl{q}\"},\"𝘳\":{\"math\":\"\\\\mathsfsl{r}\"},\"𝘴\":{\"math\":\"\\\\mathsfsl{s}\"},\"𝘵\":{\"math\":\"\\\\mathsfsl{t}\"},\"𝘶\":{\"math\":\"\\\\mathsfsl{u}\"},\"𝘷\":{\"math\":\"\\\\mathsfsl{v}\"},\"𝘸\":{\"math\":\"\\\\mathsfsl{w}\"},\"𝘹\":{\"math\":\"\\\\mathsfsl{x}\"},\"𝘺\":{\"math\":\"\\\\mathsfsl{y}\"},\"𝘻\":{\"math\":\"\\\\mathsfsl{z}\"},\"𝘼\":{\"math\":\"\\\\mathsfbfsl{A}\"},\"𝘽\":{\"math\":\"\\\\mathsfbfsl{B}\"},\"𝘾\":{\"math\":\"\\\\mathsfbfsl{C}\"},\"𝘿\":{\"math\":\"\\\\mathsfbfsl{D}\"},\"𝙀\":{\"math\":\"\\\\mathsfbfsl{E}\"},\"𝙁\":{\"math\":\"\\\\mathsfbfsl{F}\"},\"𝙂\":{\"math\":\"\\\\mathsfbfsl{G}\"},\"𝙃\":{\"math\":\"\\\\mathsfbfsl{H}\"},\"𝙄\":{\"math\":\"\\\\mathsfbfsl{I}\"},\"𝙅\":{\"math\":\"\\\\mathsfbfsl{J}\"},\"𝙆\":{\"math\":\"\\\\mathsfbfsl{K}\"},\"𝙇\":{\"math\":\"\\\\mathsfbfsl{L}\"},\"𝙈\":{\"math\":\"\\\\mathsfbfsl{M}\"},\"𝙉\":{\"math\":\"\\\\mathsfbfsl{N}\"},\"𝙊\":{\"math\":\"\\\\mathsfbfsl{O}\"},\"𝙋\":{\"math\":\"\\\\mathsfbfsl{P}\"},\"𝙌\":{\"math\":\"\\\\mathsfbfsl{Q}\"},\"𝙍\":{\"math\":\"\\\\mathsfbfsl{R}\"},\"𝙎\":{\"math\":\"\\\\mathsfbfsl{S}\"},\"𝙏\":{\"math\":\"\\\\mathsfbfsl{T}\"},\"𝙐\":{\"math\":\"\\\\mathsfbfsl{U}\"},\"𝙑\":{\"math\":\"\\\\mathsfbfsl{V}\"},\"𝙒\":{\"math\":\"\\\\mathsfbfsl{W}\"},\"𝙓\":{\"math\":\"\\\\mathsfbfsl{X}\"},\"𝙔\":{\"math\":\"\\\\mathsfbfsl{Y}\"},\"𝙕\":{\"math\":\"\\\\mathsfbfsl{Z}\"},\"𝙖\":{\"math\":\"\\\\mathsfbfsl{a}\"},\"𝙗\":{\"math\":\"\\\\mathsfbfsl{b}\"},\"𝙘\":{\"math\":\"\\\\mathsfbfsl{c}\"},\"𝙙\":{\"math\":\"\\\\mathsfbfsl{d}\"},\"𝙚\":{\"math\":\"\\\\mathsfbfsl{e}\"},\"𝙛\":{\"math\":\"\\\\mathsfbfsl{f}\"},\"𝙜\":{\"math\":\"\\\\mathsfbfsl{g}\"},\"𝙝\":{\"math\":\"\\\\mathsfbfsl{h}\"},\"𝙞\":{\"math\":\"\\\\mathsfbfsl{i}\"},\"𝙟\":{\"math\":\"\\\\mathsfbfsl{j}\"},\"𝙠\":{\"math\":\"\\\\mathsfbfsl{k}\"},\"𝙡\":{\"math\":\"\\\\mathsfbfsl{l}\"},\"𝙢\":{\"math\":\"\\\\mathsfbfsl{m}\"},\"𝙣\":{\"math\":\"\\\\mathsfbfsl{n}\"},\"𝙤\":{\"math\":\"\\\\mathsfbfsl{o}\"},\"𝙥\":{\"math\":\"\\\\mathsfbfsl{p}\"},\"𝙦\":{\"math\":\"\\\\mathsfbfsl{q}\"},\"𝙧\":{\"math\":\"\\\\mathsfbfsl{r}\"},\"𝙨\":{\"math\":\"\\\\mathsfbfsl{s}\"},\"𝙩\":{\"math\":\"\\\\mathsfbfsl{t}\"},\"𝙪\":{\"math\":\"\\\\mathsfbfsl{u}\"},\"𝙫\":{\"math\":\"\\\\mathsfbfsl{v}\"},\"𝙬\":{\"math\":\"\\\\mathsfbfsl{w}\"},\"𝙭\":{\"math\":\"\\\\mathsfbfsl{x}\"},\"𝙮\":{\"math\":\"\\\\mathsfbfsl{y}\"},\"𝙯\":{\"math\":\"\\\\mathsfbfsl{z}\"},\"𝙰\":{\"math\":\"\\\\mathtt{A}\"},\"𝙱\":{\"math\":\"\\\\mathtt{B}\"},\"𝙲\":{\"math\":\"\\\\mathtt{C}\"},\"𝙳\":{\"math\":\"\\\\mathtt{D}\"},\"𝙴\":{\"math\":\"\\\\mathtt{E}\"},\"𝙵\":{\"math\":\"\\\\mathtt{F}\"},\"𝙶\":{\"math\":\"\\\\mathtt{G}\"},\"𝙷\":{\"math\":\"\\\\mathtt{H}\"},\"𝙸\":{\"math\":\"\\\\mathtt{I}\"},\"𝙹\":{\"math\":\"\\\\mathtt{J}\"},\"𝙺\":{\"math\":\"\\\\mathtt{K}\"},\"𝙻\":{\"math\":\"\\\\mathtt{L}\"},\"𝙼\":{\"math\":\"\\\\mathtt{M}\"},\"𝙽\":{\"math\":\"\\\\mathtt{N}\"},\"𝙾\":{\"math\":\"\\\\mathtt{O}\"},\"𝙿\":{\"math\":\"\\\\mathtt{P}\"},\"𝚀\":{\"math\":\"\\\\mathtt{Q}\"},\"𝚁\":{\"math\":\"\\\\mathtt{R}\"},\"𝚂\":{\"math\":\"\\\\mathtt{S}\"},\"𝚃\":{\"math\":\"\\\\mathtt{T}\"},\"𝚄\":{\"math\":\"\\\\mathtt{U}\"},\"𝚅\":{\"math\":\"\\\\mathtt{V}\"},\"𝚆\":{\"math\":\"\\\\mathtt{W}\"},\"𝚇\":{\"math\":\"\\\\mathtt{X}\"},\"𝚈\":{\"math\":\"\\\\mathtt{Y}\"},\"𝚉\":{\"math\":\"\\\\mathtt{Z}\"},\"𝚊\":{\"math\":\"\\\\mathtt{a}\"},\"𝚋\":{\"math\":\"\\\\mathtt{b}\"},\"𝚌\":{\"math\":\"\\\\mathtt{c}\"},\"𝚍\":{\"math\":\"\\\\mathtt{d}\"},\"𝚎\":{\"math\":\"\\\\mathtt{e}\"},\"𝚏\":{\"math\":\"\\\\mathtt{f}\"},\"𝚐\":{\"math\":\"\\\\mathtt{g}\"},\"𝚑\":{\"math\":\"\\\\mathtt{h}\"},\"𝚒\":{\"math\":\"\\\\mathtt{i}\"},\"𝚓\":{\"math\":\"\\\\mathtt{j}\"},\"𝚔\":{\"math\":\"\\\\mathtt{k}\"},\"𝚕\":{\"math\":\"\\\\mathtt{l}\"},\"𝚖\":{\"math\":\"\\\\mathtt{m}\"},\"𝚗\":{\"math\":\"\\\\mathtt{n}\"},\"𝚘\":{\"math\":\"\\\\mathtt{o}\"},\"𝚙\":{\"math\":\"\\\\mathtt{p}\"},\"𝚚\":{\"math\":\"\\\\mathtt{q}\"},\"𝚛\":{\"math\":\"\\\\mathtt{r}\"},\"𝚜\":{\"math\":\"\\\\mathtt{s}\"},\"𝚝\":{\"math\":\"\\\\mathtt{t}\"},\"𝚞\":{\"math\":\"\\\\mathtt{u}\"},\"𝚟\":{\"math\":\"\\\\mathtt{v}\"},\"𝚠\":{\"math\":\"\\\\mathtt{w}\"},\"𝚡\":{\"math\":\"\\\\mathtt{x}\"},\"𝚢\":{\"math\":\"\\\\mathtt{y}\"},\"𝚣\":{\"math\":\"\\\\mathtt{z}\"},\"𝚤\":{\"math\":\"\\\\imath\"},\"𝚥\":{\"math\":\"\\\\jmath\"},\"𝚨\":{\"math\":\"\\\\mathbf{A}\"},\"𝚩\":{\"math\":\"\\\\mathbf{B}\"},\"𝚪\":{\"math\":\"\\\\mathbf{\\\\Gamma}\"},\"𝚫\":{\"math\":\"\\\\mathbf{\\\\Delta}\"},\"𝚬\":{\"math\":\"\\\\mathbf{E}\"},\"𝚭\":{\"math\":\"\\\\mathbf{Z}\"},\"𝚮\":{\"math\":\"\\\\mathbf{H}\"},\"𝚯\":{\"math\":\"\\\\mathbf{\\\\Theta}\"},\"𝚰\":{\"math\":\"\\\\mathbf{I}\"},\"𝚱\":{\"math\":\"\\\\mathbf{K}\"},\"𝚲\":{\"math\":\"\\\\mathbf{\\\\Lambda}\"},\"𝚳\":{\"math\":\"M\"},\"𝚴\":{\"math\":\"N\"},\"𝚵\":{\"math\":\"\\\\mathbf{\\\\Xi}\"},\"𝚶\":{\"math\":\"O\"},\"𝚷\":{\"math\":\"\\\\mathbf{\\\\Pi}\"},\"𝚸\":{\"math\":\"\\\\mathbf{P}\"},\"𝚹\":{\"math\":\"\\\\mathbf{\\\\vartheta}\"},\"𝚺\":{\"math\":\"\\\\mathbf{\\\\Sigma}\"},\"𝚻\":{\"math\":\"\\\\mathbf{T}\"},\"𝚼\":{\"math\":\"\\\\mathbf{\\\\Upsilon}\"},\"𝚽\":{\"math\":\"\\\\mathbf{\\\\Phi}\"},\"𝚾\":{\"math\":\"\\\\mathbf{X}\"},\"𝚿\":{\"math\":\"\\\\mathbf{\\\\Psi}\"},\"𝛀\":{\"math\":\"\\\\mathbf{\\\\Omega}\"},\"𝛁\":{\"math\":\"\\\\mathbf{\\\\nabla}\"},\"𝛂\":{\"math\":\"\\\\mathbf{\\\\alpha}\"},\"𝛃\":{\"math\":\"\\\\mathbf{\\\\beta}\"},\"𝛄\":{\"math\":\"\\\\mathbf{\\\\gamma}\"},\"𝛅\":{\"math\":\"\\\\mathbf{\\\\delta}\"},\"𝛆\":{\"math\":\"\\\\mathbf{\\\\epsilon}\"},\"𝛇\":{\"math\":\"\\\\mathbf{\\\\zeta}\"},\"𝛈\":{\"math\":\"\\\\mathbf{\\\\eta}\"},\"𝛉\":{\"math\":\"\\\\mathbf{\\\\theta}\"},\"𝛊\":{\"math\":\"\\\\mathbf{I}\"},\"𝛋\":{\"math\":\"\\\\mathbf{K}\"},\"𝛌\":{\"math\":\"\\\\mathbf{\\\\lambda}\"},\"𝛍\":{\"math\":\"M\"},\"𝛎\":{\"math\":\"N\"},\"𝛏\":{\"math\":\"\\\\mathbf{\\\\xi}\"},\"𝛐\":{\"math\":\"O\"},\"𝛑\":{\"math\":\"\\\\mathbf{\\\\pi}\"},\"𝛒\":{\"math\":\"\\\\mathbf{P}\"},\"𝛓\":{\"math\":\"\\\\mathbf{\\\\varsigma}\"},\"𝛔\":{\"math\":\"\\\\mathbf{\\\\sigma}\"},\"𝛕\":{\"math\":\"\\\\mathbf{T}\"},\"𝛖\":{\"math\":\"\\\\mathbf{\\\\upsilon}\"},\"𝛗\":{\"math\":\"\\\\mathbf{\\\\phi}\"},\"𝛘\":{\"math\":\"\\\\mathbf{X}\"},\"𝛙\":{\"math\":\"\\\\mathbf{\\\\psi}\"},\"𝛚\":{\"math\":\"\\\\mathbf{\\\\omega}\"},\"𝛛\":{\"math\":\"\\\\partial\"},\"𝛜\":{\"math\":\"\\\\in\"},\"𝛝\":{\"math\":\"\\\\mathbf{\\\\vartheta}\"},\"𝛞\":{\"math\":\"\\\\mathbf{\\\\varkappa}\"},\"𝛟\":{\"math\":\"\\\\mathbf{\\\\phi}\"},\"𝛠\":{\"math\":\"\\\\mathbf{\\\\varrho}\"},\"𝛡\":{\"math\":\"\\\\mathbf{\\\\varpi}\"},\"𝛢\":{\"math\":\"\\\\mathsl{A}\"},\"𝛣\":{\"math\":\"\\\\mathsl{B}\"},\"𝛤\":{\"math\":\"\\\\mathsl{\\\\Gamma}\"},\"𝛥\":{\"math\":\"\\\\mathsl{\\\\Delta}\"},\"𝛦\":{\"math\":\"\\\\mathsl{E}\"},\"𝛧\":{\"math\":\"\\\\mathsl{Z}\"},\"𝛨\":{\"math\":\"\\\\mathsl{H}\"},\"𝛩\":{\"math\":\"\\\\mathsl{\\\\Theta}\"},\"𝛪\":{\"math\":\"\\\\mathsl{I}\"},\"𝛫\":{\"math\":\"\\\\mathsl{K}\"},\"𝛬\":{\"math\":\"\\\\mathsl{\\\\Lambda}\"},\"𝛭\":{\"math\":\"M\"},\"𝛮\":{\"math\":\"N\"},\"𝛯\":{\"math\":\"\\\\mathsl{\\\\Xi}\"},\"𝛰\":{\"math\":\"O\"},\"𝛱\":{\"math\":\"\\\\mathsl{\\\\Pi}\"},\"𝛲\":{\"math\":\"\\\\mathsl{P}\"},\"𝛳\":{\"math\":\"\\\\mathsl{\\\\Theta}\"},\"𝛴\":{\"math\":\"\\\\mathsl{\\\\Sigma}\"},\"𝛵\":{\"math\":\"\\\\mathsl{T}\"},\"𝛶\":{\"math\":\"\\\\mathsl{\\\\Upsilon}\"},\"𝛷\":{\"math\":\"\\\\mathsl{\\\\Phi}\"},\"𝛸\":{\"math\":\"\\\\mathsl{X}\"},\"𝛹\":{\"math\":\"\\\\mathsl{\\\\Psi}\"},\"𝛺\":{\"math\":\"\\\\mathsl{\\\\Omega}\"},\"𝛻\":{\"math\":\"\\\\mathsl{\\\\nabla}\"},\"𝛼\":{\"math\":\"\\\\mathsl{A}\"},\"𝛽\":{\"math\":\"\\\\mathsl{B}\"},\"𝛾\":{\"math\":\"\\\\mathsl{\\\\gamma}\"},\"𝛿\":{\"math\":\"\\\\mathsl{\\\\delta}\"},\"𝜀\":{\"math\":\"\\\\mathsl{E}\"},\"𝜁\":{\"math\":\"\\\\mathsl{Z}\"},\"𝜂\":{\"math\":\"\\\\mathsl{H}\"},\"𝜃\":{\"math\":\"\\\\mathsl{\\\\theta}\"},\"𝜄\":{\"math\":\"\\\\mathsl{I}\"},\"𝜅\":{\"math\":\"\\\\mathsl{K}\"},\"𝜆\":{\"math\":\"\\\\mathsl{\\\\lambda}\"},\"𝜇\":{\"math\":\"\\\\mu\"},\"𝜈\":{\"math\":\"\\\\nu\"},\"𝜉\":{\"math\":\"\\\\mathsl{\\\\xi}\"},\"𝜊\":{\"math\":\"o\"},\"𝜋\":{\"math\":\"\\\\mathsl{\\\\pi}\"},\"𝜌\":{\"math\":\"\\\\mathsl{P}\"},\"𝜍\":{\"math\":\"\\\\mathsl{\\\\varsigma}\"},\"𝜎\":{\"math\":\"\\\\mathsl{\\\\sigma}\"},\"𝜏\":{\"math\":\"\\\\mathsl{T}\"},\"𝜐\":{\"math\":\"\\\\mathsl{\\\\upsilon}\"},\"𝜑\":{\"math\":\"\\\\mathsl{\\\\varphi}\"},\"𝜒\":{\"math\":\"\\\\mathsl{X}\"},\"𝜓\":{\"math\":\"\\\\mathsl{\\\\psi}\"},\"𝜔\":{\"math\":\"\\\\mathsl{\\\\omega}\"},\"𝜕\":{\"math\":\"\\\\partial\"},\"𝜖\":{\"math\":\"\\\\in\"},\"𝜗\":{\"math\":\"\\\\mathsl{\\\\vartheta}\"},\"𝜘\":{\"math\":\"\\\\mathsl{\\\\varkappa}\"},\"𝜙\":{\"math\":\"\\\\mathsl{\\\\phi}\"},\"𝜚\":{\"math\":\"\\\\mathsl{\\\\varrho}\"},\"𝜛\":{\"math\":\"\\\\mathsl{\\\\varpi}\"},\"𝜜\":{\"math\":\"\\\\mathbit{A}\"},\"𝜝\":{\"math\":\"\\\\mathbit{B}\"},\"𝜞\":{\"math\":\"\\\\mathbit{\\\\Gamma}\"},\"𝜟\":{\"math\":\"\\\\mathbit{\\\\Delta}\"},\"𝜠\":{\"math\":\"\\\\mathbit{E}\"},\"𝜡\":{\"math\":\"\\\\mathbit{Z}\"},\"𝜢\":{\"math\":\"\\\\mathbit{H}\"},\"𝜣\":{\"math\":\"\\\\mathbit{\\\\Theta}\"},\"𝜤\":{\"math\":\"\\\\mathbit{I}\"},\"𝜥\":{\"math\":\"\\\\mathbit{K}\"},\"𝜦\":{\"math\":\"\\\\mathbit{\\\\Lambda}\"},\"𝜧\":{\"math\":\"M\"},\"𝜨\":{\"math\":\"N\"},\"𝜩\":{\"math\":\"\\\\mathbit{\\\\Xi}\"},\"𝜪\":{\"math\":\"O\"},\"𝜫\":{\"math\":\"\\\\mathbit{\\\\Pi}\"},\"𝜬\":{\"math\":\"\\\\mathbit{P}\"},\"𝜭\":{\"math\":\"\\\\mathbit{O}\"},\"𝜮\":{\"math\":\"\\\\mathbit{\\\\Sigma}\"},\"𝜯\":{\"math\":\"\\\\mathbit{T}\"},\"𝜰\":{\"math\":\"\\\\mathbit{\\\\Upsilon}\"},\"𝜱\":{\"math\":\"\\\\mathbit{\\\\Phi}\"},\"𝜲\":{\"math\":\"\\\\mathbit{X}\"},\"𝜳\":{\"math\":\"\\\\mathbit{\\\\Psi}\"},\"𝜴\":{\"math\":\"\\\\mathbit{\\\\Omega}\"},\"𝜵\":{\"math\":\"\\\\mathbit{\\\\nabla}\"},\"𝜶\":{\"math\":\"\\\\mathbit{\\\\alpha}\"},\"𝜷\":{\"math\":\"\\\\mathbit{\\\\beta}\"},\"𝜸\":{\"math\":\"\\\\mathbit{\\\\gamma}\"},\"𝜹\":{\"math\":\"\\\\mathbit{\\\\delta}\"},\"𝜺\":{\"math\":\"\\\\mathbit{\\\\epsilon}\"},\"𝜻\":{\"math\":\"\\\\mathbit{\\\\zeta}\"},\"𝜼\":{\"math\":\"\\\\mathbit{\\\\eta}\"},\"𝜽\":{\"math\":\"\\\\mathbit{\\\\theta}\"},\"𝜾\":{\"math\":\"\\\\mathbit{\\\\imath}\"},\"𝜿\":{\"math\":\"\\\\mathbit{\\\\kappa}\"},\"𝝀\":{\"math\":\"\\\\mathbit{\\\\lambda}\"},\"𝝁\":{\"math\":\"\\\\mu\"},\"𝝂\":{\"math\":\"N\"},\"𝝃\":{\"math\":\"\\\\mathbit{\\\\xi}\"},\"𝝄\":{\"math\":\"O\"},\"𝝅\":{\"math\":\"\\\\mathbit{\\\\pi}\"},\"𝝆\":{\"math\":\"\\\\mathbit{\\\\rho}\"},\"𝝇\":{\"math\":\"\\\\mathbit{\\\\varsigma}\"},\"𝝈\":{\"math\":\"\\\\mathbit{\\\\sigma}\"},\"𝝉\":{\"math\":\"\\\\mathbit{\\\\tau}\"},\"𝝊\":{\"math\":\"\\\\mathbit{\\\\upsilon}\"},\"𝝋\":{\"math\":\"\\\\mathbit{\\\\varphi}\"},\"𝝌\":{\"math\":\"\\\\mathbit{\\\\chi}\"},\"𝝍\":{\"math\":\"\\\\mathbit{\\\\psi}\"},\"𝝎\":{\"math\":\"\\\\mathbit{\\\\omega}\"},\"𝝏\":{\"math\":\"\\\\partial\"},\"𝝐\":{\"math\":\"\\\\in\"},\"𝝑\":{\"math\":\"\\\\mathbit{\\\\vartheta}\"},\"𝝒\":{\"math\":\"\\\\mathbit{\\\\varkappa}\"},\"𝝓\":{\"math\":\"\\\\mathbit{\\\\phi}\"},\"𝝔\":{\"math\":\"\\\\mathbit{\\\\varrho}\"},\"𝝕\":{\"math\":\"\\\\mathbit{\\\\varpi}\"},\"𝝖\":{\"math\":\"\\\\mathsfbf{A}\"},\"𝝗\":{\"math\":\"\\\\mathsfbf{B}\"},\"𝝘\":{\"math\":\"\\\\mathsfbf{\\\\Gamma}\"},\"𝝙\":{\"math\":\"\\\\mathsfbf{\\\\Delta}\"},\"𝝚\":{\"math\":\"\\\\mathsfbf{E}\"},\"𝝛\":{\"math\":\"\\\\mathsfbf{Z}\"},\"𝝜\":{\"math\":\"\\\\mathsfbf{H}\"},\"𝝝\":{\"math\":\"\\\\mathsfbf{\\\\Theta}\"},\"𝝞\":{\"math\":\"\\\\mathsfbf{I}\"},\"𝝟\":{\"math\":\"\\\\mathsfbf{K}\"},\"𝝠\":{\"math\":\"\\\\mathsfbf{\\\\Lambda}\"},\"𝝡\":{\"math\":\"M\"},\"𝝢\":{\"math\":\"N\"},\"𝝣\":{\"math\":\"\\\\mathsfbf{\\\\Xi}\"},\"𝝤\":{\"math\":\"O\"},\"𝝥\":{\"math\":\"\\\\mathsfbf{\\\\Pi}\"},\"𝝦\":{\"math\":\"\\\\mathsfbf{P}\"},\"𝝧\":{\"math\":\"\\\\mathsfbf{\\\\Theta}\"},\"𝝨\":{\"math\":\"\\\\mathsfbf{\\\\Sigma}\"},\"𝝩\":{\"math\":\"\\\\mathsfbf{T}\"},\"𝝪\":{\"math\":\"\\\\mathsfbf{\\\\Upsilon}\"},\"𝝫\":{\"math\":\"\\\\mathsfbf{\\\\Phi}\"},\"𝝬\":{\"math\":\"\\\\mathsfbf{X}\"},\"𝝭\":{\"math\":\"\\\\mathsfbf{\\\\Psi}\"},\"𝝮\":{\"math\":\"\\\\mathsfbf{\\\\Omega}\"},\"𝝯\":{\"math\":\"\\\\mathsfbf{\\\\nabla}\"},\"𝝰\":{\"math\":\"\\\\mathsfbf{\\\\alpha}\"},\"𝝱\":{\"math\":\"\\\\mathsfbf{\\\\beta}\"},\"𝝲\":{\"math\":\"\\\\mathsfbf{\\\\gamma}\"},\"𝝳\":{\"math\":\"\\\\mathsfbf{\\\\delta}\"},\"𝝴\":{\"math\":\"\\\\mathsfbf{\\\\varepsilon}\"},\"𝝵\":{\"math\":\"\\\\mathsfbf{\\\\zeta}\"},\"𝝶\":{\"math\":\"\\\\mathsfbf{\\\\eta}\"},\"𝝷\":{\"math\":\"\\\\mathsfbf{\\\\theta}\"},\"𝝸\":{\"math\":\"\\\\mathsfbf{\\\\imath}\"},\"𝝹\":{\"math\":\"\\\\mathsfbf{\\\\kappa}\"},\"𝝺\":{\"math\":\"\\\\mathsfbf{\\\\lambda}\"},\"𝝻\":{\"math\":\"\\\\mu\"},\"𝝼\":{\"math\":\"\\\\nu\"},\"𝝽\":{\"math\":\"\\\\mathsfbf{\\\\xi}\"},\"𝝾\":{\"math\":\"o\"},\"𝝿\":{\"math\":\"\\\\mathsfbf{\\\\pi}\"},\"𝞀\":{\"math\":\"\\\\mathsfbf{\\\\rho}\"},\"𝞁\":{\"math\":\"\\\\mathsfbf{\\\\varsigma}\"},\"𝞂\":{\"math\":\"\\\\mathsfbf{\\\\sigma}\"},\"𝞃\":{\"math\":\"\\\\mathsfbf{\\\\tau}\"},\"𝞄\":{\"math\":\"\\\\mathsfbf{\\\\upsilon}\"},\"𝞅\":{\"math\":\"\\\\mathsfbf{\\\\varphi}\"},\"𝞆\":{\"math\":\"\\\\mathsfbf{\\\\chi}\"},\"𝞇\":{\"math\":\"\\\\mathsfbf{\\\\psi}\"},\"𝞈\":{\"math\":\"\\\\mathsfbf{\\\\omega}\"},\"𝞉\":{\"math\":\"\\\\partial\"},\"𝞊\":{\"math\":\"\\\\in\"},\"𝞋\":{\"math\":\"\\\\mathsfbf{\\\\vartheta}\"},\"𝞌\":{\"math\":\"\\\\mathsfbf{\\\\varkappa}\"},\"𝞍\":{\"math\":\"\\\\mathsfbf{\\\\phi}\"},\"𝞎\":{\"math\":\"\\\\mathsfbf{\\\\varrho}\"},\"𝞏\":{\"math\":\"\\\\mathsfbf{\\\\varpi}\"},\"𝞐\":{\"math\":\"\\\\mathsfbfsl{A}\"},\"𝞑\":{\"math\":\"\\\\mathsfbfsl{B}\"},\"𝞒\":{\"math\":\"\\\\mathsfbfsl{\\\\Gamma}\"},\"𝞓\":{\"math\":\"\\\\mathsfbfsl{\\\\Delta}\"},\"𝞔\":{\"math\":\"\\\\mathsfbfsl{E}\"},\"𝞕\":{\"math\":\"\\\\mathsfbfsl{Z}\"},\"𝞖\":{\"math\":\"\\\\mathsfbfsl{H}\"},\"𝞗\":{\"math\":\"\\\\mathsfbfsl{\\\\Theta}\"},\"𝞘\":{\"math\":\"\\\\mathsfbfsl{I}\"},\"𝞙\":{\"math\":\"\\\\mathsfbfsl{K}\"},\"𝞚\":{\"math\":\"\\\\mathsfbfsl{\\\\Lambda}\"},\"𝞛\":{\"math\":\"\\\\mathsfbfsl{M}\"},\"𝞜\":{\"math\":\"\\\\mathsfbfsl{N}\"},\"𝞝\":{\"math\":\"\\\\mathsfbfsl{\\\\Xi}\"},\"𝞞\":{\"math\":\"\\\\mathsfbfsl{O}\"},\"𝞟\":{\"math\":\"\\\\mathsfbfsl{\\\\Pi}\"},\"𝞠\":{\"math\":\"\\\\mathsfbfsl{P}\"},\"𝞡\":{\"math\":\"\\\\mathsfbfsl{\\\\Theta}\"},\"𝞢\":{\"math\":\"\\\\mathsfbfsl{\\\\Sigma}\"},\"𝞣\":{\"math\":\"\\\\mathsfbfsl{T}\"},\"𝞤\":{\"math\":\"\\\\mathsfbfsl{\\\\Upsilon}\"},\"𝞥\":{\"math\":\"\\\\mathsfbfsl{\\\\Phi}\"},\"𝞦\":{\"math\":\"\\\\mathsfbfsl{X}\"},\"𝞧\":{\"math\":\"\\\\mathsfbfsl{\\\\Psi}\"},\"𝞨\":{\"math\":\"\\\\mathsfbfsl{\\\\Omega}\"},\"𝞩\":{\"math\":\"\\\\mathsfbfsl{\\\\nabla}\"},\"𝞪\":{\"math\":\"\\\\mathsfbfsl{\\\\alpha}\"},\"𝞫\":{\"math\":\"\\\\mathsfbfsl{\\\\beta}\"},\"𝞬\":{\"math\":\"\\\\mathsfbfsl{\\\\gamma}\"},\"𝞭\":{\"math\":\"\\\\mathsfbfsl{\\\\delta}\"},\"𝞮\":{\"math\":\"\\\\mathsfbfsl{\\\\varepsilon}\"},\"𝞯\":{\"math\":\"\\\\mathsfbfsl{\\\\zeta}\"},\"𝞰\":{\"math\":\"\\\\mathsfbfsl{\\\\eta}\"},\"𝞱\":{\"math\":\"\\\\mathsfbfsl{\\\\theta}\"},\"𝞲\":{\"math\":\"\\\\mathsfbfsl{\\\\imath}\"},\"𝞳\":{\"math\":\"\\\\mathsfbfsl{\\\\kappa}\"},\"𝞴\":{\"math\":\"\\\\mathsfbfsl{\\\\lambda}\"},\"𝞵\":{\"math\":\"\\\\mu\"},\"𝞶\":{\"math\":\"\\\\nu\"},\"𝞷\":{\"math\":\"\\\\mathsfbfsl{\\\\xi}\"},\"𝞸\":{\"math\":\"o\"},\"𝞹\":{\"math\":\"\\\\mathsfbfsl{\\\\pi}\"},\"𝞺\":{\"math\":\"\\\\mathsfbfsl{\\\\rho}\"},\"𝞻\":{\"math\":\"\\\\mathsfbfsl{\\\\varsigma}\"},\"𝞼\":{\"math\":\"\\\\mathsfbfsl{\\\\sigma}\"},\"𝞽\":{\"math\":\"\\\\mathsfbfsl{\\\\tau}\"},\"𝞾\":{\"math\":\"\\\\mathsfbfsl{\\\\upsilon}\"},\"𝞿\":{\"math\":\"\\\\mathsfbfsl{\\\\varphi}\"},\"𝟀\":{\"math\":\"\\\\mathsfbfsl{\\\\chi}\"},\"𝟁\":{\"math\":\"\\\\mathsfbfsl{\\\\psi}\"},\"𝟂\":{\"math\":\"\\\\mathsfbfsl{\\\\omega}\"},\"𝟃\":{\"math\":\"\\\\partial\"},\"𝟄\":{\"math\":\"\\\\in\"},\"𝟅\":{\"math\":\"\\\\mathsfbfsl{\\\\vartheta}\"},\"𝟆\":{\"math\":\"\\\\mathsfbfsl{\\\\varkappa}\"},\"𝟇\":{\"math\":\"\\\\mathsfbfsl{\\\\phi}\"},\"𝟈\":{\"math\":\"\\\\mathsfbfsl{\\\\varrho}\"},\"𝟉\":{\"math\":\"\\\\mathsfbfsl{\\\\varpi}\"},\"𝟊\":{\"math\":\"\\\\mbfDigamma\"},\"𝟋\":{\"math\":\"\\\\mbfdigamma\"},\"𝟎\":{\"math\":\"\\\\mathbf{0}\"},\"𝟏\":{\"math\":\"\\\\mathbf{1}\"},\"𝟐\":{\"math\":\"\\\\mathbf{2}\"},\"𝟑\":{\"math\":\"\\\\mathbf{3}\"},\"𝟒\":{\"math\":\"\\\\mathbf{4}\"},\"𝟓\":{\"math\":\"\\\\mathbf{5}\"},\"𝟔\":{\"math\":\"\\\\mathbf{6}\"},\"𝟕\":{\"math\":\"\\\\mathbf{7}\"},\"𝟖\":{\"math\":\"\\\\mathbf{8}\"},\"𝟗\":{\"math\":\"\\\\mathbf{9}\"},\"𝟘\":{\"math\":\"\\\\mathbb{0}\"},\"𝟙\":{\"math\":\"\\\\mathbb{1}\"},\"𝟚\":{\"math\":\"\\\\mathbb{2}\"},\"𝟛\":{\"math\":\"\\\\mathbb{3}\"},\"𝟜\":{\"math\":\"\\\\mathbb{4}\"},\"𝟝\":{\"math\":\"\\\\mathbb{5}\"},\"𝟞\":{\"math\":\"\\\\mathbb{6}\"},\"𝟟\":{\"math\":\"\\\\mathbb{7}\"},\"𝟠\":{\"math\":\"\\\\mathbb{8}\"},\"𝟡\":{\"math\":\"\\\\mathbb{9}\"},\"𝟢\":{\"math\":\"\\\\mathsf{0}\"},\"𝟣\":{\"math\":\"\\\\mathsf{1}\"},\"𝟤\":{\"math\":\"\\\\mathsf{2}\"},\"𝟥\":{\"math\":\"\\\\mathsf{3}\"},\"𝟦\":{\"math\":\"\\\\mathsf{4}\"},\"𝟧\":{\"math\":\"\\\\mathsf{5}\"},\"𝟨\":{\"math\":\"\\\\mathsf{6}\"},\"𝟩\":{\"math\":\"\\\\mathsf{7}\"},\"𝟪\":{\"math\":\"\\\\mathsf{8}\"},\"𝟫\":{\"math\":\"\\\\mathsf{9}\"},\"𝟬\":{\"math\":\"\\\\mathsfbf{0}\"},\"𝟭\":{\"math\":\"\\\\mathsfbf{1}\"},\"𝟮\":{\"math\":\"\\\\mathsfbf{2}\"},\"𝟯\":{\"math\":\"\\\\mathsfbf{3}\"},\"𝟰\":{\"math\":\"\\\\mathsfbf{4}\"},\"𝟱\":{\"math\":\"\\\\mathsfbf{5}\"},\"𝟲\":{\"math\":\"\\\\mathsfbf{6}\"},\"𝟳\":{\"math\":\"\\\\mathsfbf{7}\"},\"𝟴\":{\"math\":\"\\\\mathsfbf{8}\"},\"𝟵\":{\"math\":\"\\\\mathsfbf{9}\"},\"𝟶\":{\"math\":\"\\\\mathtt{0}\"},\"𝟷\":{\"math\":\"\\\\mathtt{1}\"},\"𝟸\":{\"math\":\"\\\\mathtt{2}\"},\"𝟹\":{\"math\":\"\\\\mathtt{3}\"},\"𝟺\":{\"math\":\"\\\\mathtt{4}\"},\"𝟻\":{\"math\":\"\\\\mathtt{5}\"},\"𝟼\":{\"math\":\"\\\\mathtt{6}\"},\"𝟽\":{\"math\":\"\\\\mathtt{7}\"},\"𝟾\":{\"math\":\"\\\\mathtt{8}\"},\"𝟿\":{\"math\":\"\\\\mathtt{9}\"}}");

/***/ }),

/***/ "../node_modules/unicode2latex/tables/diacritics.json":
/*!************************************************************!*\
  !*** ../node_modules/unicode2latex/tables/diacritics.json ***!
  \************************************************************/
/*! exports provided: commands, tolatex, tounicode, default */
/*! all exports used */
/***/ (function(module) {

module.exports = JSON.parse("{\"commands\":[\"acute\",\"bar\",\"breve\",\"c\",\"d\",\"ddot\",\"dot\",\"grave\",\"hat\",\"k\",\"mathring\",\"overline\",\"r\",\"textacutemacron\",\"textacutewedge\",\"textadvancing\",\"textbrevemacron\",\"textcircumdot\",\"textcorner\",\"textdotacute\",\"textdotbreve\",\"textdoublegrave\",\"textdoublevbaraccent\",\"textgravedot\",\"textgravemacron\",\"textinvsubbridge\",\"textlowering\",\"textovercross\",\"textraising\",\"textretracting\",\"textringmacron\",\"textseagull\",\"textsubarch\",\"textsubbar\",\"textsubbridge\",\"textsubgrave\",\"textsublhalfring\",\"textsubplus\",\"textsubrhalfring\",\"textsubring\",\"textsubsquare\",\"textsubtilde\",\"textsubumlaut\",\"textsubwedge\",\"textsuperimposetilde\",\"textsyllabic\",\"texttildedot\",\"textvbaraccent\",\"tilde\",\"u\",\"underbar\",\"v\"],\"tolatex\":{\"̀\":{\"command\":\"`\",\"mode\":\"text\"},\"̀̄\":{\"command\":\"textgravemacron\",\"mode\":\"text\"},\"̀̇\":{\"command\":\"textgravedot\",\"mode\":\"text\"},\"́\":{\"command\":\"'\",\"mode\":\"text\"},\"́̄\":{\"command\":\"textacutemacron\",\"mode\":\"text\"},\"́̇\":{\"command\":\"textdotacute\",\"mode\":\"text\"},\"́̌\":{\"command\":\"textacutewedge\",\"mode\":\"text\"},\"̂\":{\"command\":\"^\",\"mode\":\"text\"},\"̂̇\":{\"command\":\"textcircumdot\",\"mode\":\"text\"},\"̃\":{\"command\":\"~\",\"mode\":\"text\"},\"̃̇\":{\"command\":\"texttildedot\",\"mode\":\"text\"},\"̄\":{\"command\":\"=\",\"mode\":\"text\"},\"̄̀\":{\"command\":\"textgravemacron\",\"mode\":\"text\"},\"̄́\":{\"command\":\"textacutemacron\",\"mode\":\"text\"},\"̄̆\":{\"command\":\"textbrevemacron\",\"mode\":\"text\"},\"̄̊\":{\"command\":\"textringmacron\",\"mode\":\"text\"},\"̅\":{\"command\":\"overline\",\"mode\":\"math\"},\"̆\":{\"command\":\"u\",\"mode\":\"text\"},\"̆̄\":{\"command\":\"textbrevemacron\",\"mode\":\"text\"},\"̆̇\":{\"command\":\"textdotbreve\",\"mode\":\"text\"},\"̇\":{\"command\":\".\",\"mode\":\"text\"},\"̇̀\":{\"command\":\"textgravedot\",\"mode\":\"text\"},\"̇́\":{\"command\":\"textdotacute\",\"mode\":\"text\"},\"̇̂\":{\"command\":\"textcircumdot\",\"mode\":\"text\"},\"̇̃\":{\"command\":\"texttildedot\",\"mode\":\"text\"},\"̇̆\":{\"command\":\"textdotbreve\",\"mode\":\"text\"},\"̈\":{\"command\":\"\\\"\",\"mode\":\"text\"},\"̊\":{\"command\":\"r\",\"mode\":\"text\"},\"̊̄\":{\"command\":\"textringmacron\",\"mode\":\"text\"},\"̋\":{\"command\":\"H\",\"mode\":\"text\"},\"̌\":{\"command\":\"v\",\"mode\":\"text\"},\"̌́\":{\"command\":\"textacutewedge\",\"mode\":\"text\"},\"̍\":{\"command\":\"textvbaraccent\",\"mode\":\"text\"},\"̎\":{\"command\":\"textdoublevbaraccent\",\"mode\":\"text\"},\"̏\":{\"command\":\"textdoublegrave\",\"mode\":\"text\"},\"̐\":{\"command\":\"textdotbreve\",\"mode\":\"text\"},\"̖\":{\"command\":\"textsubgrave\",\"mode\":\"text\"},\"̘\":{\"command\":\"textadvancing\",\"mode\":\"text\"},\"̙\":{\"command\":\"textretracting\",\"mode\":\"text\"},\"̚\":{\"command\":\"textcorner\",\"mode\":\"text\"},\"̜\":{\"command\":\"textsublhalfring\",\"mode\":\"text\"},\"̝\":{\"command\":\"textraising\",\"mode\":\"text\"},\"̞\":{\"command\":\"textlowering\",\"mode\":\"text\"},\"̟\":{\"command\":\"textsubplus\",\"mode\":\"text\"},\"̣\":{\"command\":\"d\",\"mode\":\"text\"},\"̤\":{\"command\":\"textsubumlaut\",\"mode\":\"text\"},\"̥\":{\"command\":\"textsubring\",\"mode\":\"text\"},\"̧\":{\"command\":\"c\",\"mode\":\"text\"},\"̨\":{\"command\":\"k\",\"mode\":\"text\"},\"̩\":{\"command\":\"textsyllabic\",\"mode\":\"text\"},\"̪\":{\"command\":\"textsubbridge\",\"mode\":\"text\"},\"̬\":{\"command\":\"textsubwedge\",\"mode\":\"text\"},\"̯\":{\"command\":\"textsubarch\",\"mode\":\"text\"},\"̰\":{\"command\":\"textsubtilde\",\"mode\":\"text\"},\"̱\":{\"command\":\"textsubbar\",\"mode\":\"text\"},\"̴\":{\"command\":\"textsuperimposetilde\",\"mode\":\"text\"},\"̹\":{\"command\":\"textsubrhalfring\",\"mode\":\"text\"},\"̺\":{\"command\":\"textinvsubbridge\",\"mode\":\"text\"},\"̻\":{\"command\":\"textsubsquare\",\"mode\":\"text\"},\"̼\":{\"command\":\"textseagull\",\"mode\":\"text\"},\"̽\":{\"command\":\"textovercross\",\"mode\":\"text\"}},\"tounicode\":{\"\\\"\":\"̈\",\"'\":\"́\",\".\":\"̇\",\"=\":\"̄\",\"H\":\"̋\",\"^\":\"̂\",\"`\":\"̀\",\"acute\":\"́\",\"bar\":\"̄\",\"breve\":\"̆\",\"c\":\"̧\",\"d\":\"̣\",\"ddot\":\"̈\",\"dot\":\"̇\",\"grave\":\"̀\",\"hat\":\"̂\",\"k\":\"̨\",\"mathring\":\"̊\",\"overline\":\"̅\",\"r\":\"̊\",\"textacutemacron\":\"̄́\",\"textacutewedge\":\"̌́\",\"textadvancing\":\"̘\",\"textbrevemacron\":\"̄̆\",\"textcircumdot\":\"̇̂\",\"textcorner\":\"̚\",\"textdotacute\":\"́̇\",\"textdotbreve\":\"̐\",\"textdoublegrave\":\"̏\",\"textdoublevbaraccent\":\"̎\",\"textgravedot\":\"̇̀\",\"textgravemacron\":\"̀̄\",\"textinvsubbridge\":\"̺\",\"textlowering\":\"̞\",\"textovercross\":\"̽\",\"textraising\":\"̝\",\"textretracting\":\"̙\",\"textringmacron\":\"̄̊\",\"textseagull\":\"̼\",\"textsubarch\":\"̯\",\"textsubbar\":\"̱\",\"textsubbridge\":\"̪\",\"textsubgrave\":\"̖\",\"textsublhalfring\":\"̜\",\"textsubplus\":\"̟\",\"textsubrhalfring\":\"̹\",\"textsubring\":\"̥\",\"textsubsquare\":\"̻\",\"textsubtilde\":\"̰\",\"textsubumlaut\":\"̤\",\"textsubwedge\":\"̬\",\"textsuperimposetilde\":\"̴\",\"textsyllabic\":\"̩\",\"texttildedot\":\"̇̃\",\"textvbaraccent\":\"̍\",\"tilde\":\"̃\",\"u\":\"̆\",\"underbar\":\"̱\",\"v\":\"̌\",\"~\":\"̃\"}}");

/***/ }),

/***/ "../node_modules/unicode2latex/tables/latex.json":
/*!*******************************************************!*\
  !*** ../node_modules/unicode2latex/tables/latex.json ***!
  \*******************************************************/
/*! exports provided: \#, \$, \%, \&, \slash, \textless, \textgreater, \LaTeX, \textbackslash, \backslash, \, \^, \sphat, \_, \t{ia}, {\~ w}, \{, \lbrace, \textbar, \}, \rbrace, \textasciitilde, \sptilde, \textexclamdown, \textcent, \cent, \textsterling, \pounds, \textcurrency, \textyen, \yen, \textbrokenbar, \textsection, \textasciidieresis, \spddot, \textcopyright, \textordfeminine, \guillemotleft, \lnot, \neg, \-, \textregistered, \circledR, \textasciimacron, \textdegree, ^\circ, \pm, ^{2}, ^{3}, \textasciiacute, \textmu, \textparagraph, ^{1}, \textordmasculine, \guillemotright, \frac{1}{4}, \textonequarter, \frac{1}{2}, \textonehalf, \frac{3}{4}, \textthreequarters, \textquestiondown, \`A, \'A, \^A, \~A, \"A, \AA, \r{A}, {\r A}, \AE, \c{C}, \`E, \'E, \^E, \"E, \`I, \'I, \^I, \"I, \DH, \~N, \`O, \'O, \^O, \~O, \"O, \texttimes, \times, \O, \`U, \'U, \^U, \"U, \'Y, \TH, \ss, \`a, \'a, \^a, \~a, \"a, \aa, \r{a}, {\r a}, \ae, \c{c}, \`e, \'e, \^e, \"e, \`i, \`\i, \'i, \'\i, \^i, \^\i, \"i, \"\i, \dh, \eth, \~n, \`o, \'o, \^o, \~o, \"o, \div, \o, \`u, \'u, \^u, \"u, \'y, \th, \"y, \=A, \=a, \u{A}, \u{a}, \k{A}, \k{a}, \'C, \'c, \^C, \^c, \.C, \.c, \v{C}, \v{c}, \v{D}, \v{d}, \DJ, \dj, \=E, \=e, \u{E}, \u{e}, \.E, \.e, \k{E}, \k{e}, \v{E}, \v{e}, \^G, \^g, \u{G}, \u{g}, \.G, \.g, \c{G}, \c{g}, \^H, \^h, {\fontencoding{LELA}\selectfont\char40}, \Elzxh, \~I, \~i, \=I, \=i, \u{I}, {\u \i}, \k{I}, \k{i}, \.I, \i, \imath, \^J, \^\j, \c{K}, \c{k}, {\fontencoding{LELA}\selectfont\char91}, \'L, \'l, \c{L}, \c{l}, \v{L}, \v{l}, {\fontencoding{LELA}\selectfont\char201}, {\fontencoding{LELA}\selectfont\char202}, \L, \l, \'N, \'n, \c{N}, \c{n}, \v{N}, \v{n}, \NG, \ng, \=O, \=o, \u{O}, \u{o}, \H{O}, \H{o}, \OE, \oe, \'R, \'r, \c{R}, \c{r}, \v{R}, \v{r}, \'S, \'s, \^S, \^s, \c{S}, \c{s}, \v{S}, \v{s}, \c{T}, \c{t}, \v{T}, \v{t}, {\fontencoding{LELA}\selectfont\char47}, {\fontencoding{LELA}\selectfont\char63}, \~U, \~u, \=U, \=u, \u{U}, \u{u}, \r{U}, {\r U}, \r{u}, \ocirc{u}, {\r u}, \H{U}, \H{u}, \k{U}, \k{u}, \^W, \^w, \^Y, \^y, \"Y, \'Z, \'z, \.Z, \.z, \v{Z}, \v{z}, \texthvlig, \textnrleg, \textesh, \Zbar, {\fontencoding{LELA}\selectfont\char195}, \textdoublepipe, \v{A}, \v{a}, \v{I}, \v{i}, \v{O}, \v{o}, \v{U}, \v{u}, \v{G}, \v{g}, \v{K}, \v{k}, \k{O}, \k{o}, \v{j}, \'G, \'g, \c{E}, \c{e}, \jmath, \Elztrna, \Elztrnsa, \Elzopeno, \Elzrtld, {\fontencoding{LEIP}\selectfont\char61}, \Elzschwa, \varepsilon, \Elzpgamma, \Elzpbgam, \Elztrnh, \Elzbtdl, \Elzrtll, \Elztrnm, \Elztrnmlr, \Elzltlmr, \Elzltln, \Elzrtln, \Elzclomeg, \textphi, \Elztrnr, \Elztrnrl, \Elzrttrnr, \Elzrl, \Elzrtlr, \Elzfhr, {\fontencoding{LEIP}\selectfont\char202}, \Elzrtls, \Elzesh, \Elztrnt, \Elzrtlt, \Elzpupsil, \Elzpscrv, \Elzinvv, \Elzinvw, \Elztrny, \Elzrtlz, \Elzyogh, \Elzglst, \Elzreglst, \Elzinglst, \textturnk, \Elzdyogh, \Elztesh, \textsuperscript{h}, ^{h}, \textsuperscript{j}, ^{j}, \textsuperscript{r}, ^{r}, \textsuperscript{w}, ^{w}, \textsuperscript{y}, ^{y}, \lasp, \textasciicircum, \textasciicaron, \Elzverts, \Elzverti, \Elzlmrk, \Elzhlmrk, \Elzsbrhr, \Elzsblhr, \Elzrais, \Elzlow, \textasciibreve, \textperiodcentered, \texttildelow, \textsuperscript{l}, ^{l}, \textsuperscript{s}, ^{s}, \textsuperscript{x}, ^{x}, \tone{55}, \tone{44}, \tone{33}, \tone{22}, \tone{11}, \`, \grave, \textgravemacron, \textgravedot, \', \acute, \textacutemacron, \textacutewedge, \hat, \textcircumdot, \~, \tilde, \texttildedot, \=, \bar, \overline, \u, \breve, \textbrevemacron, \., \dot, \textdotacute, \", \ddot, \ovhook, \r, \mathring, \textringmacron, \H, \check, \v, \textvbaraccent, \textdoublevbaraccent, \textdoublegrave, \textdotbreve, {\fontencoding{LECO}\selectfont\char177}, \oturnedcomma, \ocommatopright, \textsubgrave, \textadvancing, \textretracting, \droang, \textcorner, \textsublhalfring, \textraising, \textlowering, \textsubplus, \Elzpalh, \Elzrh, \d, \textsubumlaut, \textsubring, \c, \k, \textsyllabic, \Elzsbbrg, \textsubbridge, {\fontencoding{LECO}\selectfont\char203}, \textsubwedge, \textsubarch, \utilde, \textsubtilde, \textsubbar, \underbar, \underline, \textsuperimposetilde, \Elzxl, \Elzbar, {\fontencoding{LECO}\selectfont\char215}, \not, \textsubrhalfring, \textinvsubbridge, \textsubsquare, \textseagull, \textovercross, {\fontencoding{LECO}\selectfont\char225}, \'H, {\'{}I}, {\'{}O}, \mathrm{'Y}, \mathrm{'\Omega}, \acute{\ddot{\iota}}, \Gamma, \varGamma, \Delta, \Theta, \Lambda, \Xi, \Pi, \Sigma, \Upsilon, \Phi, \Psi, \Omega, \mathrm{\ddot{I}}, \mathrm{\ddot{Y}}, {\'$\alpha$}, \acute{\epsilon}, \acute{\eta}, \acute{\iota}, \acute{\ddot{\upsilon}}, \alpha, \beta, \gamma, \delta, \zeta, \eta, \texttheta, \theta, \iota, \kappa, \lambda, \nu, \xi, \pi, \rho, \varsigma, \sigma, \tau, \upsilon, \varphi, \chi, \psi, \omega, \ddot{\iota}, \ddot{\upsilon}, \acute{\upsilon}, \acute{\omega}, \Pisymbol{ppi022}{87}, \varbeta, \textvartheta, \vartheta, \phi, \varpi, \Qoppa, \qoppa, \Stigma, \stigma, \Digamma, \digamma, \Koppa, \koppa, \Sampi, \sampi, \varkappa, \varrho, \textTheta, \upvarTheta, \epsilon, \backepsilon, \cyrchar\CYRYO, \cyrchar\CYRDJE, \cyrchar{\'\CYRG}, \cyrchar\CYRIE, \cyrchar\CYRDZE, \cyrchar\CYRII, \cyrchar\CYRYI, \cyrchar\CYRJE, \cyrchar\CYRLJE, \cyrchar\CYRNJE, \cyrchar\CYRTSHE, \cyrchar{\'\CYRK}, \cyrchar\CYRUSHRT, \cyrchar\CYRDZHE, \cyrchar\CYRA, \cyrchar\CYRB, \cyrchar\CYRV, \cyrchar\CYRG, \cyrchar\CYRD, \cyrchar\CYRE, \cyrchar\CYRZH, \cyrchar\CYRZ, \cyrchar\CYRI, \cyrchar\CYRISHRT, \cyrchar\CYRK, \cyrchar\CYRL, \cyrchar\CYRM, \cyrchar\CYRN, \cyrchar\CYRO, \cyrchar\CYRP, \cyrchar\CYRR, \cyrchar\CYRS, \cyrchar\CYRT, \cyrchar\CYRU, \cyrchar\CYRF, \cyrchar\CYRH, \cyrchar\CYRC, \cyrchar\CYRCH, \cyrchar\CYRSH, \cyrchar\CYRSHCH, \cyrchar\CYRHRDSN, \bud, \cdprime, \cyrchar\CYRERY, \cyrchar\CYRSFTSN, \cprime, \cyrchar\CYREREV, \cyrchar\CYRYU, \cyrchar\CYRYA, \cyrchar\cyra, \cyrchar\cyrb, \cyrchar\cyrv, \cyrchar\cyrg, \cyrchar\cyrd, \cyrchar\cyre, \cyrchar\cyrzh, \cyrchar\cyrz, \cyrchar\cyri, \cyrchar\cyrishrt, \cyrchar\cyrk, \cyrchar\cyrl, \cyrchar\cyrm, \cyrchar\cyrn, \cyrchar\cyro, \cyrchar\cyrp, \cyrchar\cyrr, \cyrchar\cyrs, \cyrchar\cyrt, \cyrchar\cyru, \cyrchar\cyrf, \cyrchar\cyrh, \cyrchar\cyrc, \cyrchar\cyrch, \cyrchar\cyrsh, \cyrchar\cyrshch, \cyrchar\cyrhrdsn, \cyrchar\cyrery, \cyrchar\cyrsftsn, \cyrchar\cyrerev, \cyrchar\cyryu, \cyrchar\cyrya, \cyrchar\cyryo, \cyrchar\cyrdje, \cyrchar{\'\cyrg}, \cyrchar\cyrie, \cyrchar\cyrdze, \cyrchar\cyrii, \cyrchar\cyryi, \cyrchar\cyrje, \cyrchar\cyrlje, \cyrchar\cyrnje, \cyrchar\cyrtshe, \cyrchar{\'\cyrk}, \cyrchar\cyrushrt, \cyrchar\cyrdzhe, \cyrchar\CYROMEGA, \cyrchar\cyromega, \cyrchar\CYRYAT, \cyrchar\CYRIOTE, \cyrchar\cyriote, \cyrchar\CYRLYUS, \cyrchar\cyrlyus, \cyrchar\CYRIOTLYUS, \cyrchar\cyriotlyus, \cyrchar\CYRBYUS, \cyrchar\CYRIOTBYUS, \cyrchar\cyriotbyus, \cyrchar\CYRKSI, \cyrchar\cyrksi, \cyrchar\CYRPSI, \cyrchar\cyrpsi, \cyrchar\CYRFITA, \cyrchar\CYRIZH, \cyrchar\CYRUK, \cyrchar\cyruk, \cyrchar\CYROMEGARND, \cyrchar\cyromegarnd, \cyrchar\CYROMEGATITLO, \cyrchar\cyromegatitlo, \cyrchar\CYROT, \cyrchar\cyrot, \cyrchar\CYRKOPPA, \cyrchar\cyrkoppa, \cyrchar\cyrthousands, \cyrchar\cyrhundredthousands, \cyrchar\cyrmillions, \cyrchar\CYRSEMISFTSN, \cyrchar\cyrsemisftsn, \cyrchar\CYRRTICK, \cyrchar\cyrrtick, \cyrchar\CYRGUP, \cyrchar\cyrgup, \cyrchar\CYRGHCRS, \cyrchar\cyrghcrs, \cyrchar\CYRGHK, \cyrchar\cyrghk, \cyrchar\CYRZHDSC, \cyrchar\cyrzhdsc, \cyrchar\CYRZDSC, \cyrchar\cyrzdsc, \cyrchar\CYRKDSC, \cyrchar\cyrkdsc, \cyrchar\CYRKVCRS, \cyrchar\cyrkvcrs, \cyrchar\CYRKHCRS, \cyrchar\cyrkhcrs, \cyrchar\CYRKBEAK, \cyrchar\cyrkbeak, \cyrchar\CYRNDSC, \cyrchar\cyrndsc, \cyrchar\CYRNG, \cyrchar\cyrng, \cyrchar\CYRPHK, \cyrchar\cyrphk, \cyrchar\CYRABHHA, \cyrchar\cyrabhha, \cyrchar\CYRSDSC, \cyrchar\cyrsdsc, \cyrchar\CYRTDSC, \cyrchar\cyrtdsc, \cyrchar\CYRY, \cyrchar\cyry, \cyrchar\CYRYHCRS, \cyrchar\cyryhcrs, \cyrchar\CYRHDSC, \cyrchar\cyrhdsc, \cyrchar\CYRTETSE, \cyrchar\cyrtetse, \cyrchar\CYRCHRDSC, \cyrchar\cyrchrdsc, \cyrchar\CYRCHVCRS, \cyrchar\cyrchvcrs, \cyrchar\CYRSHHA, \cyrchar\cyrshha, \cyrchar\CYRABHCH, \cyrchar\cyrabhch, \cyrchar\CYRABHCHDSC, \cyrchar\cyrabhchdsc, \cyrchar\CYRpalochka, \cyrchar\CYRKHK, \cyrchar\cyrkhk, \cyrchar\CYRNHK, \cyrchar\cyrnhk, \cyrchar\CYRCHLDSC, \cyrchar\cyrchldsc, \cyrchar\CYRAE, \cyrchar\cyrae, \cyrchar\CYRSCHWA, \cyrchar\cyrschwa, \cyrchar\CYRABHDZE, \cyrchar\cyrabhdze, \cyrchar\CYROTLD, \cyrchar\cyrotld, \\backslash, \textsuperscript{a}, ^{a}, \textsuperscript{b}, ^{b}, \textsuperscript{d}, ^{d}, \textsuperscript{e}, ^{e}, \textsuperscript{g}, ^{g}, \textsuperscript{k}, ^{k}, \textsuperscript{m}, ^{m}, \textsuperscript{o}, ^{o}, \textsuperscript{p}, ^{p}, \textsuperscript{t}, ^{t}, \textsuperscript{u}, ^{u}, \textsuperscript{v}, ^{v}, \textsuperscript{c}, ^{c}, \textsuperscript{f}, ^{f}, \textsuperscript{z}, ^{z}, \.B, \.b, \d{B}, \d{b}, \b{B}, \b{b}, \.D, \.d, \d{D}, \d{d}, \b{D}, \b{d}, \c{D}, \c{d}, \c{\u{E}}, \c{\u{e}}, \.F, \.f, \=G, \=g, \.H, \.h, \d{H}, \d{h}, \"H, \"h, \c{H}, \c{h}, \'K, \'k, \d{K}, \d{k}, \b{K}, \b{k}, \d{L}, \d{l}, \b{L}, \b{l}, \'M, \'m, \.M, \.m, \d{M}, \d{m}, \.N, \.n, \d{N}, \d{n}, \b{N}, \b{n}, \'P, \'p, \.P, \.p, \.R, \.r, \d{R}, \d{r}, \b{R}, \b{r}, \.S, \.s, \d{S}, \d{s}, \.T, \.t, \d{T}, \d{t}, \b{T}, \b{t}, \~V, \~v, \d{V}, \d{v}, \`W, \`w, \'W, \'w, \"W, \"w, \.W, \.w, \d{W}, \d{w}, \.X, \.x, \"X, \"x, \.Y, \.y, \^Z, \^z, \d{Z}, \d{z}, \b{Z}, \b{z}, \b{h}, \"t, \r{w}, \r{y}, \d{A}, \d{a}, \d{E}, \d{e}, \~E, \~e, \d{I}, \d{i}, \d{O}, \d{o}, \d{U}, \d{u}, \`Y, \`y, \d{Y}, \d{y}, \~Y, \~y, \hspace{0.6em}, \hspace{1em}, \quad, \;, \hspace{0.25em}, \hspace{0.166em}, \hphantom{0}, \hphantom{,}, \,, \mkern1mu, \mbox, {\aftergroup\ignorespaces}, \textendash, \textemdash, \rule{1em}{1pt}, \horizbar, \Vert, \twolowline, \Elzreapos, \quotedblbase, \textdagger, \dagger, \textdaggerdbl, \ddagger, \textbullet, \enleadertwodots, \ldots, \textperthousand, \textpertenthousand, {'}, {''}, {'''}, \backprime, \backdprime, \backtrprime, \caretinsert, \guilsinglleft, \guilsinglright, \Exclam, \hyphenbullet, \fracslash, \Question, \closure, \:, \nolinebreak, ^{0}, \textsuperscript{i}, ^{i}, ^{4}, ^{5}, ^{6}, ^{7}, ^{8}, ^{9}, ^{+}, ^{-}, ^{=}, ^{(}, ^{)}, \textsuperscript{n}, ^{n}, _{0}, _{1}, _{2}, _{3}, _{4}, _{5}, _{6}, _{7}, _{8}, _{9}, _{+}, _{-}, _{=}, _{(}, _{)}, \textsubscript{a}, _{a}, \textsubscript{e}, _{e}, \textsubscript{o}, _{o}, \textsubscript{x}, _{x}, \textsubscript{\textschwa}, \textsubscript{h}, _{h}, \textsubscript{k}, _{k}, \textsubscript{l}, _{l}, \textsubscript{m}, _{m}, \textsubscript{n}, _{n}, \textsubscript{p}, _{p}, \textsubscript{s}, _{s}, \textsubscript{t}, _{t}, \ensuremath{\Elzpes}, \texteuro, \euro, \lvec, \vertoverlay, \LVec, \vec, \dddot, \ddddot, \enclosecircle, \enclosesquare, \enclosediamond, \overleftrightarrow, \enclosetriangle, \annuity, \threeunderdot, \widebridgeabove, \underrightharpoondown, \underleftharpoondown, \underleftarrow, \underrightarrow, \asteraccent, \mathbb{C}, \textcelsius, \Euler, \mathscr{g}, \mathscr{H}, \mathfrak{H}, \mathbb{H}, \Planckconst, \hslash, \mathscr{I}, \mathfrak{I}, \mathscr{L}, \mathscr{l}, \mathbb{N}, \cyrchar\textnumero, \textcircledP, \wp, \mathbb{P}, \mathbb{Q}, \mathscr{R}, \mathfrak{R}, \mathbb{R}, \Elzxrat, \textservicemark, \texttrademark, \mathbb{Z}, \mho, \mathfrak{Z}, \textriota, \Angstroem, \mathscr{B}, \mathfrak{C}, \textestimated, \mathscr{e}, \mathscr{E}, \mathscr{F}, \Finv, \mathscr{M}, \mathscr{o}, \aleph, \beth, \gimel, \daleth, \mathbb{\pi}, \mathbb{\gamma}, \mathbb{\Gamma}, \mathbb{\Pi}, \mathbb{\Sigma}, \Game, \sansLturned, \sansLmirrored, \Yup, \CapitalDifferentialD, \DifferentialD, \ExponetialE, \ComplexI, \ComplexJ, \PropertyLine, \invamp, \frac{1}{7}, \textfrac{1}{7}, \frac{1}{9}, \textfrac{1}{9}, \frac{1}{10}, \textfrac{1}{10}, \frac{1}{3}, \textfrac{1}{3}, \frac{2}{3}, \textfrac{2}{3}, \frac{1}{5}, \textfrac{1}{5}, \frac{2}{5}, \textfrac{2}{5}, \frac{3}{5}, \textfrac{3}{5}, \frac{4}{5}, \textfrac{4}{5}, \frac{1}{6}, \textfrac{1}{6}, \frac{5}{6}, \textfrac{5}{6}, \frac{1}{8}, \textfrac{1}{8}, \frac{3}{8}, \textfrac{3}{8}, \frac{5}{8}, \textfrac{5}{8}, \frac{7}{8}, \textfrac{7}{8}, \frac{1}, \textfrac{1}, \frac{0}{3}, \textfrac{0}{3}, \leftarrow, \uparrow, \textrightarrow, \rightarrow, \to, \downarrow, \leftrightarrow, \updownarrow, \nwarrow, \nearrow, \searrow, \swarrow, \nleftarrow, \nrightarrow, \arrowwaveleft, \arrowwaveright, \twoheadleftarrow, \twoheaduparrow, \twoheadrightarrow, \twoheaddownarrow, \leftarrowtail, \rightarrowtail, \mapsfrom, \MapsUp, \mapsto, \MapsDown, \updownarrowbar, \hookleftarrow, \hookrightarrow, \looparrowleft, \looparrowright, \leftrightsquigarrow, \nleftrightarrow, \lightning, \Lsh, \Rsh, \dlsh, \reflectbox{\carriagereturn}, \linefeed, \carriagereturn, \curvearrowleft, \curvearrowright, \barovernorthwestarrow, \barleftarrowrightarrowba, \circlearrowleft, \circlearrowright, \leftharpoonup, \leftharpoondown, \upharpoonright, \upharpoonleft, \rightharpoonup, \rightharpoondown, \downharpoonright, \downharpoonleft, \rightleftarrows, \dblarrowupdown, \leftrightarrows, \leftleftarrows, \upuparrows, \rightrightarrows, \downdownarrows, \leftrightharpoons, \rightleftharpoons, \nLeftarrow, \nLeftrightarrow, \nRightarrow, \Leftarrow, \Uparrow, \Rightarrow, \Downarrow, \Leftrightarrow, \Updownarrow, \Nwarrow, \Nearrow, \Searrow, \Swarrow, \Lleftarrow, \Rrightarrow, \leftsquigarrow, \rightsquigarrow, \nHuparrow, \nHdownarrow, \dashleftarrow, \updasharrow, \dashrightarrow, \downdasharrow, \LeftArrowBar, \RightArrowBar, \leftwhitearrow, \upwhitearrow, \rightwhitearrow, \downwhitearrow, \whitearrowupfrombar, \circleonrightarrow, \DownArrowUpArrow, \rightthreearrows, \nvleftarrow, \pfun, \nvleftrightarrow, \nVleftarrow, \ffun, \nVleftrightarrow, \leftarrowtriangle, \rightarrowtriangle, \leftrightarrowtriangle, \forall, \complement, \partial, \exists, \nexists, \varnothing, \increment, \nabla, \in, \not\in, \smallin, \ni, \not\ni, \smallni, \QED, \prod, \coprod, \sum, \mp, \dotplus, \setminus, {_\ast}, \circ, \bullet, \surd, \sqrt[3], \sqrt[4], \propto, \infty, \rightangle, \angle, \measuredangle, \sphericalangle, \mid, \nmid, \parallel, \nparallel, \wedge, \vee, \cap, \cup, \int, {\int\!\int}, {\int\!\int\!\int}, \oint, \surfintegral, \volintegral, \clwintegral, \lcirclerightint, \rcirclerightint, \therefore, \because, \Colon, \dotdiv, \eqcolon, \mathbin{{:}\!\!{-}\!\!{:}}, \homothetic, \sim, \backsim, \lazysinv, \AC, \wr, \not\sim, \texteqsim, \NotEqualTilde, \simeq, \not\simeq, \cong, \approxnotequal, \not\cong, \approx, \not\approx, \approxeq, \tildetrpl, \not\apid, \allequal, \asymp, \Bumpeq, \NotHumpDownHump, \bumpeq, \NotHumpEqual, \doteq, \not\doteq, \doteqdot, \fallingdotseq, \risingdotseq, \coloneq, \eqcirc, \circeq, \arceq, \estimates, \starequal, \triangleq, \eqdef, \measeq, \neq, \equiv, \not\equiv, \Equiv, \leq, \le, \geq, \leqq, \geqq, \lneqq, \lvertneqq, \gneqq, \gvertneqq, \ll, \NotLessLess, \gg, \NotGreaterGreater, \between, {\not\kern-0.3em\times}, \not<, \not>, \not\leq, \not\geq, \lessequivlnt, \greaterequivlnt, \lessgtr, \gtrless, \notlessgreater, \notgreaterless, \prec, \succ, \preccurlyeq, \succcurlyeq, \NotPrecedesTilde, \NotSucceedsTilde, \not\prec, \not\succ, \subset, \supset, \not\subset, \not\supset, \subseteq, \supseteq, \not\subseteq, \not\supseteq, \subsetneq, \varsubsetneqq, \supsetneq, \varsupsetneq, \cupleftarrow, \cupdot, \uplus, \sqsubset, \NotSquareSubset, \sqsupset, \NotSquareSuperset, \sqsubseteq, \sqsupseteq, \sqcap, \sqcup, \oplus, \ominus, \otimes, \oslash, \odot, \circledcirc, \circledast, \circledequal, \circleddash, \boxplus, \boxminus, \boxtimes, \boxdot, \vdash, \dashv, \top, \assert, \truestate, \forcesextra, \Vdash, \Vvdash, \VDash, \nvdash, \nvDash, \nVdash, \nVDash, \prurel, \scurel, \vartriangleleft, \vartriangleright, \trianglelefteq, \trianglerighteq, \original, \image, \multimap, \hermitconjmatrix, \intercal, \veebar, \barvee, \rightanglearc, \varlrtriangle, \bigcap, \bigcup, \diamond, \cdot, \star, \divideontimes, \bowtie, \ltimes, \rtimes, \leftthreetimes, \rightthreetimes, \backsimeq, \curlyvee, \curlywedge, \Subset, \Supset, \Cap, \Cup, \pitchfork, \hash, \lessdot, \gtrdot, \verymuchless, \verymuchgreater, \lesseqgtr, \gtreqless, \eqless, \eqgtr, \curlyeqprec, \curlyeqsucc, \npreceq, \nsucceq, \not\sqsubseteq, \not\sqsupseteq, \sqsubsetneq, \Elzsqspne, \lnsim, \gnsim, \precedesnotsimilar, \succnsim, \ntriangleleft, \ntriangleright, \ntrianglelefteq, \ntrianglerighteq, \vdots, \cdots, \upslopeellipsis, \downslopeellipsis, \disin, \varisins, \isins, \isindot, \barin, \isinobar, \isinvb, \isinE, \nisd, \varnis, \nis, \varniobar, \niobar, \bagmember, \diameter, \house, \barwedge, \varbarwedge, \perspcorrespond, \lceil, \rceil, \lfloor, \rfloor, \invneg, \wasylozenge, \profline, \profsurf, \recorder, {\mathchar"2208}, \viewdata, \turnednot, \ulcorner, \urcorner, \llcorner, \lrcorner, \inttop, \intbottom, \frown, \smile, \varhexagonlrbonds, \conictaper, \topbot, \APLinv, \notslash, \notbackslash, \APLleftarrowbox, \APLrightarrowbox, \invdiameter, \APLuparrowbox, \APLboxupcaret, \APLdownarrowbox, \APLcomment, \APLinput, \APLlog, \APLboxquestion, \rangledownzigzagarrow, \hexagon, \lparenuend, \lparenextender, \lparenlend, \rparenuend, \rparenextender, \rparenlend, \lbrackuend, \lbrackextender, \Elzdlcorn, \rbrackuend, \rbrackextender, \rbracklend, \lbraceuend, \lbracemid, \lbracelend, \vbraceextender, \rbraceuend, \rbracemid, \rbracelend, \intextender, \harrowextender, \lmoustache, \rmoustache, \sumtop, \sumbottom, \overbracket, \underbracket, \bbrktbrk, \sqrtbottom, \lvboxline, \rvboxline, \varcarriagereturn, \overparen, \underparen, \overbrace, \underbrace, \obrbrak, \ubrbrak, \trapezium, \benzenr, \strns, \fltns, \accurrent, \elinters, \textvisiblespace, \ding{172}, \ding{173}, \ding{174}, \ding{175}, \ding{176}, \ding{177}, \ding{178}, \ding{179}, \ding{180}, \ding{181}, \circledS, \Elzdshfnc, \Elzsqfnw, \diagup, \blockuphalf, \blocklowhalf, \blockfull, \blocklefthalf, \blockrighthalf, \blockqtrshaded, \blockhalfshaded, \blockthreeqtrshaded, \ding{110}, \mdlgblksquare, \square, \Box, \squoval, \blackinwhitesquare, \squarehfill, \squarevfill, \squarehvfill, \squarenwsefill, \squareneswfill, \squarecrossfill, \smwhtsquare, \hrectangleblack, \fbox{~~}, \vrectangleblack, \Elzvrecto, \parallelogramblack, \ding{115}, \bigblacktriangleup, \bigtriangleup, \blacktriangle, \vartriangle, \RHD, \rhd, \blacktriangleright, \triangleright, \blackpointerright, \whitepointerright, \ding{116}, \bigblacktriangledown, \bigtriangledown, \blacktriangledown, \triangledown, \LHD, \lhd, \blacktriangleleft, \triangleleft, \blackpointerleft, \whitepointerleft, \ding{117}, \Diamondblack, \Diamond, \blackinwhitediamond, \fisheye, \lozenge, \dottedcircle, \circlevertfill, \bullseye, \ding{108}, \CIRCLE, \Elzcirfl, \Elzcirfr, \Elzcirfb, \circletophalfblack, \circleurquadblack, \blackcircleulquadwhite, \LEFTCIRCLE, \ding{119}, \RIGHTCIRCLE, \Elzrvbull, \inversewhitecircle, \invwhiteupperhalfcircle, \invwhitelowerhalfcircle, \ularc, \urarc, \lrarc, \llarc, \topsemicircle, \botsemicircle, \lrblacktriangle, \llblacktriangle, \ulblacktriangle, \urblacktriangle, \smwhtcircle, \Elzsqfl, \Elzsqfr, \squareulblack, \Elzsqfse, \boxbar, \trianglecdot, \triangleleftblack, \trianglerightblack, \bigcirc, \squareulquad, \squarellquad, \squarelrquad, \squareurquad, \circleulquad, \circlellquad, \circlelrquad, \circleurquad, \ultriangle, \urtriangle, \lltriangle, \mdsmwhtsquare, \mdsmblksquare, \lrtriangle, \ding{72}, \bigstar, \ding{73}, \bigwhitestar, \Sun, \ding{37}, \Square, \CheckedBox, \XBox, \steaming, \ding{42}, \ding{43}, \pointright, \skull, \danger, \radiation, \biohazard, \yinyang, \frownie, \smiley, \blacksmiley, \sun, \rightmoon, \leftmoon, \mercury, \venus, \female, \earth, \male, \jupiter, \saturn, \uranus, \neptune, \pluto, \aries, \taurus, \gemini, \cancer, \leo, \virgo, \libra, \scorpio, \sagittarius, \capricornus, \aquarius, \pisces, \ding{171}, \spadesuit, \heartsuit, \ding{168}, \clubsuit, \varspadesuit, \ding{170}, \varheartsuit, \ding{169}, \vardiamondsuit, \varclubsuit, \quarternote, \eighthnote, \twonotes, \sixteenthnote, \flat, \natural, \sharp, \recycle, \acidfree, \dicei, \diceii, \diceiii, \diceiv, \dicev, \dicevi, \circledrightdot, \circledtwodots, \blackcircledrightdot, \blackcircledtwodots, \anchor, \swords, \warning, \Hermaphrodite, \medcirc, \medbullet, \mdsmwhtcircle, \neuter, \ding{33}, \ding{34}, \ding{35}, \ding{36}, \ding{38}, \ding{39}, \ding{40}, \ding{41}, \ding{44}, \ding{45}, \ding{46}, \pencil, \ding{47}, \ding{48}, \ding{49}, \ding{50}, \ding{51}, \checkmark, \ding{52}, \ding{53}, \ding{54}, \ding{55}, \ballotx, \ding{56}, \ding{57}, \ding{58}, \ding{59}, \ding{60}, \ding{61}, \ding{62}, \ding{63}, \ding{64}, \maltese, \ding{65}, \ding{66}, \ding{67}, \ding{68}, \ding{69}, \ding{70}, \ding{71}, \ding{74}, \circledstar, \ding{75}, \ding{76}, \ding{77}, \ding{78}, \ding{79}, \ding{80}, \ding{81}, \ding{82}, \ding{83}, \ding{84}, \ding{85}, \ding{86}, \varstar, \ding{87}, \ding{88}, \ding{89}, \ding{90}, \ding{91}, \ding{92}, \ding{93}, \dingasterisk, \ding{94}, \ding{95}, \ding{96}, \ding{97}, \ding{98}, \ding{99}, \ding{100}, \ding{101}, \ding{102}, \ding{103}, \ding{104}, \ding{105}, \ding{106}, \ding{107}, \ding{109}, \ding{111}, \ding{112}, \ding{113}, \ding{114}, \ding{118}, \ding{120}, \ding{121}, \ding{122}, \ding{123}, \ding{124}, \ding{125}, \ding{126}, \ding{161}, \ding{162}, \ding{163}, \ding{164}, \ding{165}, \ding{166}, \ding{167}, \ding{182}, \ding{183}, \ding{184}, \ding{185}, \ding{186}, \ding{187}, \ding{188}, \ding{189}, \ding{190}, \ding{191}, \ding{192}, \ding{193}, \ding{194}, \ding{195}, \ding{196}, \ding{197}, \ding{198}, \ding{199}, \ding{200}, \ding{201}, \ding{202}, \ding{203}, \ding{204}, \ding{205}, \ding{206}, \ding{207}, \ding{208}, \ding{209}, \ding{210}, \ding{211}, \ding{212}, \ding{216}, \ding{217}, \ding{218}, \ding{219}, \draftingarrow, \ding{220}, \ding{221}, \ding{222}, \ding{223}, \ding{224}, \ding{225}, \ding{226}, \arrowbullet, \ding{227}, \ding{228}, \ding{229}, \ding{230}, \ding{231}, \ding{232}, \ding{233}, \ding{234}, \ding{235}, \ding{236}, \ding{237}, \ding{238}, \ding{239}, \ding{241}, \ding{242}, \ding{243}, \ding{244}, \ding{245}, \ding{246}, \ding{247}, \ding{248}, \ding{249}, \ding{250}, \ding{251}, \ding{252}, \ding{253}, \ding{254}, \threedangle, \whiteinwhitetriangle, \perp, \subsetcirc, \supsetcirc, \Lbag, \Rbag, \veedot, \bsolhsub, \suphsol, \longdivision, \Diamonddot, \wedgedot, \upin, \pullback, \pushout, \leftouterjoin, \rightouterjoin, \fullouterjoin, \bigbot, \bigtop, \DashVDash, \dashVdash, \multimapinv, \vlongdash, \longdashv, \cirbot, \lozengeminus, \concavediamond, \concavediamondtickleft, \concavediamondtickright, \whitesquaretickleft, \whitesquaretickright, \llbracket, \rrbracket, \langle, \rangle, \lang, \rang, \Lbrbrak, \Rbrbrak, \lgroup, \rgroup, \UUparrow, \DDownarrow, \acwgapcirclearrow, \cwgapcirclearrow, \rightarrowonoplus, \longleftarrow, \longrightarrow, \longleftrightarrow, \Longleftarrow, \Longrightarrow, \Longleftrightarrow, \longmapsfrom, \longmapsto, \Longmapsfrom, \Longmapsto, \sim\joinrel\leadsto, \psur, \nVtwoheadrightarrow, \nvLeftarrow, \nvRightarrow, \nvLeftrightarrow, \Mapsfrom, \Mapsto, \downarrowbarred, \uparrowbarred, \Uuparrow, \Ddownarrow, \leftbkarrow, \rightbkarrow, \leftdbkarrow, \dbkarow, \drbkarow, \rightdotarrow, \UpArrowBar, \DownArrowBar, \pinj, \finj, \bij, \nvtwoheadrightarrowtail, \nVtwoheadrightarrowtail, \lefttail, \righttail, \leftdbltail, \rightdbltail, \diamondleftarrow, \rightarrowdiamond, \diamondleftarrowbar, \barrightarrowdiamond, \nwsearrow, \neswarrow, \rdiagovfdiag, \fdiagovrdiag, \seovnearrow, \neovsearrow, \fdiagovnearrow, \rdiagovsearrow, \neovnwarrow, \nwovnearrow, \uprightcurvearrow, \downrightcurvedarrow, \cwrightarcarrow, \acwleftarcarrow, \acwoverarcarrow, \acwunderarcarrow, \curvearrowrightminus, \curvearrowleftplus, \cwundercurvearrow, \ccwundercurvearrow, \Elolarr, \Elorarr, \ElzRlarr, \leftarrowshortrightarrow, \ElzrLarr, \rightarrowplus, \leftarrowplus, \Elzrarrx, \leftrightarrowcircle, \twoheaduparrowcircle, \leftrightharpoon, \rightleftharpoon, \updownharpoonrightleft, \updownharpoonleftright, \LeftRightVector, \RightUpDownVector, \DownLeftRightVector, \LeftUpDownVector, \LeftVectorBar, \RightVectorBar, \RightUpVectorBar, \RightDownVectorBar, \DownLeftVectorBar, \DownRightVectorBar, \LeftUpVectorBar, \LeftDownVectorBar, \LeftTeeVector, \RightTeeVector, \RightUpTeeVector, \RightDownTeeVector, \DownLeftTeeVector, \DownRightTeeVector, \LeftUpTeeVector, \LeftDownTeeVector, \leftleftharpoons, \upupharpoons, \rightrightharpoons, \downdownharpoons, \leftrightharpoonsup, \leftrightharpoonsdown, \rightleftharpoonsup, \rightleftharpoonsdown, \leftbarharpoon, \barleftharpoon, \rightbarharpoon, \barrightharpoon, \UpEquilibrium, \ReverseUpEquilibrium, \RoundImplies, \equalrightarrow, \similarrightarrow, \leftarrowsimilar, \rightarrowsimilar, \rightarrowapprox, \ltlarr, \leftarrowless, \gtrarr, \subrarr, \leftarrowsubset, \suplarr, \upfishtail, \downfishtail, \Elztfnc, \spot, \typecolon, \lBrace, \rBrace, \Elroang, \limg, \rimg, \lblot, \rblot, \lbrackubar, \rbrackubar, \lbrackultick, \rbracklrtick, \lbracklltick, \rbrackurtick, \langledot, \rangledot, <\kern-0.58em(, \Lparengtr, \Rparenless, \lblkbrbrak, \rblkbrbrak, \Elzddfnc, \vzigzag, \measuredangleleft, \Angle, \rightanglemdot, \angles, \angdnr, \Elzlpargt, \sphericalangleup, \turnangle, \revangle, \angleubar, \revangleubar, \wideangledown, \wideangleup, \measanglerutone, \measanglelutonw, \measanglerdtose, \measangleldtosw, \measangleurtone, \measangleultonw, \measangledrtose, \measangledltosw, \revemptyset, \emptysetobar, \emptysetocirc, \emptysetoarr, \emptysetoarrl, \circledparallel, \circledbslash, \operp, \obot, \olcross, \odotslashdot, \uparrowoncircle, \circledwhitebullet, \circledbullet, \circledless, \circledgtr, \cirscir, \cirE, \boxslash, \boxbslash, \boxast, \boxcircle, \boxbox, \boxonbox, \ElzLap, \Elzdefas, \triangles, \triangleserifs, \rtriltri, \LeftTriangleBar, \NotLeftTriangleBar, \RightTriangleBar, \NotRightTriangleBar, \lfbowtie, \rfbowtie, \fbowtie, \lftimes, \rftimes, \hourglass, \blackhourglass, \lvzigzag, \rvzigzag, \Lvzigzag, \Rvzigzag, \tieinfty, \nvinfty, \multimapboth, \laplac, \lrtriangleeq, \shuffle, \eparsl, \smeparsl, \eqvparsl, \gleichstark, \thermod, \downtriangleleftblack, \downtrianglerightblack, \blackdiamonddownarrow, \blacklozenge, \circledownarrow, \blackcircledownarrow, \errbarsquare, \errbarblacksquare, \errbardiamond, \errbarblackdiamond, \errbarcircle, \errbarblackcircle, \RuleDelayed, \dsol, \rsolbar, \xsol, \zhide, \doubleplus, \tripleplus, \lcurvyangle, \rcurvyangle, \tplus, \tminus, \bigodot, \bigoplus, \bigotimes, \bigcupdot, \Elxuplus, \ElzThr, \Elxsqcup, \ElzInf, \ElzSup, \varprod, \modtwosum, \sumint, \iiiint, \ElzCint, \intBar, \clockoint, \awint, \rppolint, \scpolint, \npolint, \pointint, \sqrint, \intlarhk, \intx, \intcap, \intcup, \upint, \lowint, \Join, \bigtriangleleft, \zcmp, \zpipe, \zproject, \ringplus, \plushat, \simplus, \plussim, \plussubtwo, \plustrif, \commaminus, \minusfdots, \minusrdots, \ElzTimes, \dottimes, \timesbar, \btimes, \smashtimes, \otimeshat, \Otimes, \odiv, \triangleplus, \triangleminus, \triangletimes, \intprodr, \fcmp, \amalg, \capdot, \uminus, \barcup, \barcap, \capwedge, \cupvee, \cupovercap, \capovercup, \cupbarcap, \capbarcup, \twocups, \twocaps, \closedvarcup, \closedvarcap, \Sqcap, \Sqcup, \closedvarcupsmashprod, \wedgeodot, \veeodot, \ElzAnd, \ElzOr, \ElOr, \bigslopedvee, \bigslopedwedge, \veeonwedge, \wedgemidvert, \veemidvert, \midbarwedge, \midbarvee, \Elzminhat, \wedgedoublebar, \varveebar, \doublebarvee, \dsub, \rsub, \eqdot, \dotequiv, \equivVert, \equivVvert, \dotsim, \simrdots, \simminussim, \congdot, \stackrel{*}{=}, \hatapprox, \approxeqq, \eqqplus, \pluseqq, \eqqsim, \Coloneqq, \Equal, \Same, \ddotseq, \equivDD, \ltcir, \gtcir, \ltquest, \gtquest, \leqslant, \nleqslant, \geqslant, \ngeqslant, \lesdot, \gesdot, \lesdoto, \gesdoto, \lesdotor, \gesdotol, \lessapprox, \gtrapprox, \lneq, \gneq, \lnapprox, \gnapprox, \lesseqqgtr, \gtreqqless, \lsime, \gsime, \lsimg, \gsiml, \lgE, \glE, \lesges, \gesles, \eqslantless, \eqslantgtr, \elsdot, \egsdot, \eqqless, \eqqgtr, \eqqslantless, \eqqslantgtr, \Pisymbol{ppi020}{117}, \Pisymbol{ppi020}{105}, \simlE, \simgE, \NestedLessLess, \NotNestedLessLess, \NestedGreaterGreater, \NotNestedGreaterGreater, \partialmeetcontraction, \glj, \gla, \leftslice, \rightslice, \lescc, \gescc, \smt, \lat, \smte, \late, \bumpeqq, \preceq, \not\preceq, \succeq, \not\succeq, \precneq, \succneq, \preceqq, \succeqq, \precneqq, \succneqq, \precapprox, \succapprox, \precnapprox, \succnapprox, \llcurly, \ggcurly, \subsetdot, \supsetdot, \subsetplus, \supsetplus, \submult, \supmult, \subedot, \supedot, \subseteqq, \nsubseteqq, \supseteqq, \nsupseteqq, \subsim, \supsim, \subsetapprox, \supsetapprox, \subsetneqq, \supsetneqq, \lsqhook, \rsqhook, \csub, \csup, \csube, \csupe, \subsup, \supsub, \subsub, \supsup, \suphsub, \supdsub, \forkv, \topfork, \mlcp, \forks, \forksnot, \shortlefttack, \shortdowntack, \shortuptack, \perps, \vDdash, \dashV, \Dashv, \DashV, \varVdash, \Barv, \vBar, \vBarv, \Top, \Not, \bNot, \revnmid, \cirmid, \midcir, \topcir, \nhpar, \parsim, \interleave, \nhVvert, \Elztdcol, \lllnest, \gggnest, \leqqslant, \geqqslant, \trslash, \biginterleave, {{/}\!\!{/}}, {\rlap{\textbackslash}{{/}\!\!{/}}}, \talloblong, \bigtalloblong, \squaretopblack, \squarebotblack, \squareurblack, \squarellblack, \diamondleftblack, \diamondrightblack, \diamondtopblack, \diamondbotblack, \dottedsquare, \blacksquare, \vysmblksquare, \vysmwhtsquare, \pentagonblack, \pentagon, \varhexagon, \varhexagonblack, \hexagonblack, \lgblkcircle, \mdblkdiamond, \mdwhtdiamond, \mdblklozenge, \mdwhtlozenge, \smblkdiamond, \smblklozenge, \smwhtlozenge, \blkhorzoval, \whthorzoval, \blkvertoval, \whtvertoval, \circleonleftarrow, \leftthreearrows, \leftarrowonoplus, \longleftsquigarrow, \nvtwoheadleftarrow, \nVtwoheadleftarrow, \twoheadmapsfrom, \twoheadleftdbkarrow, \leftdotarrow, \nvleftarrowtail, \nVleftarrowtail, \twoheadleftarrowtail, \nvtwoheadleftarrowtail, \nVtwoheadleftarrowtail, \leftarrowx, \leftcurvedarrow, \equalleftarrow, \bsimilarleftarrow, \leftarrowbackapprox, \rightarrowgtr, \rightarrowsupset, \LLeftarrow, \RRightarrow, \bsimilarrightarrow, \rightarrowbackapprox, \similarleftarrow, \leftarrowapprox, \leftarrowbsimilar, \rightarrowbsimilar, \medwhitestar, \medblackstar, \smwhitestar, \rightpentagonblack, \rightpentagon, \postalmark, \lbrbrak, \rbrbrak, \openbracketleft, \openbracketright, \hzigzag, \dbend, \mathbf{A}, \mathbf{B}, \mathbf{C}, \mathbf{D}, \mathbf{E}, \mathbf{F}, \mathbf{G}, \mathbf{H}, \mathbf{I}, \mathbf{J}, \mathbf{K}, \mathbf{L}, \mathbf{M}, \mathbf{N}, \mathbf{O}, \mathbf{P}, \mathbf{Q}, \mathbf{R}, \mathbf{S}, \mathbf{T}, \mathbf{U}, \mathbf{V}, \mathbf{W}, \mathbf{X}, \mathbf{Y}, \mathbf{Z}, \mathbf{a}, \mathbf{b}, \mathbf{c}, \mathbf{d}, \mathbf{e}, \mathbf{f}, \mathbf{g}, \mathbf{h}, \mathbf{i}, \mathbf{j}, \mathbf{k}, \mathbf{l}, \mathbf{m}, \mathbf{n}, \mathbf{o}, \mathbf{p}, \mathbf{q}, \mathbf{r}, \mathbf{s}, \mathbf{t}, \mathbf{u}, \mathbf{v}, \mathbf{w}, \mathbf{x}, \mathbf{y}, \mathbf{z}, \mathsl{A}, \mathsl{B}, \mathsl{C}, \mathsl{D}, \mathsl{E}, \mathsl{F}, \mathsl{G}, \mathsl{H}, \mathsl{I}, \mathsl{J}, \mathsl{K}, \mathsl{L}, \mathsl{M}, \mathsl{N}, \mathsl{O}, \mathsl{P}, \mathsl{Q}, \mathsl{R}, \mathsl{S}, \mathsl{T}, \mathsl{U}, \mathsl{V}, \mathsl{W}, \mathsl{X}, \mathsl{Y}, \mathsl{Z}, \mathsl{a}, \mathsl{b}, \mathsl{c}, \mathsl{d}, \mathsl{e}, \mathsl{f}, \mathsl{g}, \mathsl{i}, \mathsl{j}, \mathsl{k}, \mathsl{l}, \mathsl{m}, \mathsl{n}, \mathsl{o}, \mathsl{p}, \mathsl{q}, \mathsl{r}, \mathsl{s}, \mathsl{t}, \mathsl{u}, \mathsl{v}, \mathsl{w}, \mathsl{x}, \mathsl{y}, \mathsl{z}, \mathbit{A}, \mathbit{B}, \mathbit{C}, \mathbit{D}, \mathbit{E}, \mathbit{F}, \mathbit{G}, \mathbit{H}, \mathbit{I}, \mathbit{J}, \mathbit{K}, \mathbit{L}, \mathbit{M}, \mathbit{N}, \mathbit{O}, \mathbit{P}, \mathbit{Q}, \mathbit{R}, \mathbit{S}, \mathbit{T}, \mathbit{U}, \mathbit{V}, \mathbit{W}, \mathbit{X}, \mathbit{Y}, \mathbit{Z}, \mathbit{a}, \mathbit{b}, \mathbit{c}, \mathbit{d}, \mathbit{e}, \mathbit{f}, \mathbit{g}, \mathbit{h}, \mathbit{i}, \mathbit{j}, \mathbit{k}, \mathbit{l}, \mathbit{m}, \mathbit{n}, \mathbit{o}, \mathbit{p}, \mathbit{q}, \mathbit{r}, \mathbit{s}, \mathbit{t}, \mathbit{u}, \mathbit{v}, \mathbit{w}, \mathbit{x}, \mathbit{y}, \mathbit{z}, \mathscr{A}, \mathscr{C}, \mathscr{D}, \mathscr{G}, \mathscr{J}, \mathscr{K}, \mathscr{N}, \mathscr{O}, \mathscr{P}, \mathscr{Q}, \mathscr{S}, \mathscr{T}, \mathscr{U}, \mathscr{V}, \mathscr{W}, \mathscr{X}, \mathscr{Y}, \mathscr{Z}, \mathscr{a}, \mathscr{b}, \mathscr{c}, \mathscr{d}, \mathscr{f}, \mathscr{h}, \mathscr{i}, \mathscr{j}, \mathscr{k}, \mathscr{m}, \mathscr{n}, \mathscr{p}, \mathscr{q}, \mathscr{r}, \mathscr{s}, \mathscr{t}, \mathscr{u}, \mathscr{v}, \mathscr{w}, \mathscr{x}, \mathscr{y}, \mathscr{z}, \mathmit{A}, \mathmit{B}, \mathmit{C}, \mathmit{D}, \mathmit{E}, \mathmit{F}, \mathmit{G}, \mathmit{H}, \mathmit{I}, \mathmit{J}, \mathmit{K}, \mathmit{L}, \mathmit{M}, \mathmit{N}, \mathmit{O}, \mathmit{P}, \mathmit{Q}, \mathmit{R}, \mathmit{S}, \mathmit{T}, \mathmit{U}, \mathmit{V}, \mathmit{W}, \mathmit{X}, \mathmit{Y}, \mathmit{Z}, \mathmit{a}, \mathmit{b}, \mathmit{c}, \mathmit{d}, \mathmit{e}, \mathmit{f}, \mathmit{g}, \mathmit{h}, \mathmit{i}, \mathmit{j}, \mathmit{k}, \mathmit{l}, \mathmit{m}, \mathmit{n}, \mathmit{o}, \mathmit{p}, \mathmit{q}, \mathmit{r}, \mathmit{s}, \mathmit{t}, \mathmit{u}, \mathmit{v}, \mathmit{w}, \mathmit{x}, \mathmit{y}, \mathmit{z}, \mathfrak{A}, \mathfrak{B}, \mathfrak{D}, \mathfrak{E}, \mathfrak{F}, \mathfrak{G}, \mathfrak{J}, \mathfrak{K}, \mathfrak{L}, \mathfrak{M}, \mathfrak{N}, \mathfrak{O}, \mathfrak{P}, \mathfrak{Q}, \mathfrak{S}, \mathfrak{T}, \mathfrak{U}, \mathfrak{V}, \mathfrak{W}, \mathfrak{X}, \mathfrak{Y}, \mathfrak{a}, \mathfrak{b}, \mathfrak{c}, \mathfrak{d}, \mathfrak{e}, \mathfrak{f}, \mathfrak{g}, \mathfrak{h}, \mathfrak{i}, \mathfrak{j}, \mathfrak{k}, \mathfrak{l}, \mathfrak{m}, \mathfrak{n}, \mathfrak{o}, \mathfrak{p}, \mathfrak{q}, \mathfrak{r}, \mathfrak{s}, \mathfrak{t}, \mathfrak{u}, \mathfrak{v}, \mathfrak{w}, \mathfrak{x}, \mathfrak{y}, \mathfrak{z}, \mathbb{A}, \mathbb{B}, \mathbb{D}, \mathbb{E}, \mathbb{F}, \mathbb{G}, \mathbb{I}, \mathbb{J}, \mathbb{K}, \mathbb{L}, \mathbb{M}, \mathbb{O}, \mathbb{S}, \mathbb{T}, \mathbb{U}, \mathbb{V}, \mathbb{W}, \mathbb{X}, \mathbb{Y}, \mathbb{a}, \mathbb{b}, \mathbb{c}, \mathbb{d}, \mathbb{e}, \mathbb{f}, \mathbb{g}, \mathbb{h}, \mathbb{i}, \mathbb{j}, \mathbb{k}, \mathbb{l}, \mathbb{m}, \mathbb{n}, \mathbb{o}, \mathbb{p}, \mathbb{q}, \mathbb{r}, \mathbb{s}, \mathbb{t}, \mathbb{u}, \mathbb{v}, \mathbb{w}, \mathbb{x}, \mathbb{y}, \mathbb{z}, \mathslbb{A}, \mathslbb{B}, \mathslbb{C}, \mathslbb{D}, \mathslbb{E}, \mathslbb{F}, \mathslbb{G}, \mathslbb{H}, \mathslbb{I}, \mathslbb{J}, \mathslbb{K}, \mathslbb{L}, \mathslbb{M}, \mathslbb{N}, \mathslbb{O}, \mathslbb{P}, \mathslbb{Q}, \mathslbb{R}, \mathslbb{S}, \mathslbb{T}, \mathslbb{U}, \mathslbb{V}, \mathslbb{W}, \mathslbb{X}, \mathslbb{Y}, \mathslbb{Z}, \mathslbb{a}, \mathslbb{b}, \mathslbb{c}, \mathslbb{d}, \mathslbb{e}, \mathslbb{f}, \mathslbb{g}, \mathslbb{h}, \mathslbb{i}, \mathslbb{j}, \mathslbb{k}, \mathslbb{l}, \mathslbb{m}, \mathslbb{n}, \mathslbb{o}, \mathslbb{p}, \mathslbb{q}, \mathslbb{r}, \mathslbb{s}, \mathslbb{t}, \mathslbb{u}, \mathslbb{v}, \mathslbb{w}, \mathslbb{x}, \mathslbb{y}, \mathslbb{z}, \mathsf{A}, \mathsf{B}, \mathsf{C}, \mathsf{D}, \mathsf{E}, \mathsf{F}, \mathsf{G}, \mathsf{H}, \mathsf{I}, \mathsf{J}, \mathsf{K}, \mathsf{L}, \mathsf{M}, \mathsf{N}, \mathsf{O}, \mathsf{P}, \mathsf{Q}, \mathsf{R}, \mathsf{S}, \mathsf{T}, \mathsf{U}, \mathsf{V}, \mathsf{W}, \mathsf{X}, \mathsf{Y}, \mathsf{Z}, \mathsf{a}, \mathsf{b}, \mathsf{c}, \mathsf{d}, \mathsf{e}, \mathsf{f}, \mathsf{g}, \mathsf{h}, \mathsf{i}, \mathsf{j}, \mathsf{k}, \mathsf{l}, \mathsf{m}, \mathsf{n}, \mathsf{o}, \mathsf{p}, \mathsf{q}, \mathsf{r}, \mathsf{s}, \mathsf{t}, \mathsf{u}, \mathsf{v}, \mathsf{w}, \mathsf{x}, \mathsf{y}, \mathsf{z}, \mathsfbf{A}, \mathsfbf{B}, \mathsfbf{C}, \mathsfbf{D}, \mathsfbf{E}, \mathsfbf{F}, \mathsfbf{G}, \mathsfbf{H}, \mathsfbf{I}, \mathsfbf{J}, \mathsfbf{K}, \mathsfbf{L}, \mathsfbf{M}, \mathsfbf{N}, \mathsfbf{O}, \mathsfbf{P}, \mathsfbf{Q}, \mathsfbf{R}, \mathsfbf{S}, \mathsfbf{T}, \mathsfbf{U}, \mathsfbf{V}, \mathsfbf{W}, \mathsfbf{X}, \mathsfbf{Y}, \mathsfbf{Z}, \mathsfbf{a}, \mathsfbf{b}, \mathsfbf{c}, \mathsfbf{d}, \mathsfbf{e}, \mathsfbf{f}, \mathsfbf{g}, \mathsfbf{h}, \mathsfbf{i}, \mathsfbf{j}, \mathsfbf{k}, \mathsfbf{l}, \mathsfbf{m}, \mathsfbf{n}, \mathsfbf{o}, \mathsfbf{p}, \mathsfbf{q}, \mathsfbf{r}, \mathsfbf{s}, \mathsfbf{t}, \mathsfbf{u}, \mathsfbf{v}, \mathsfbf{w}, \mathsfbf{x}, \mathsfbf{y}, \mathsfbf{z}, \mathsfsl{A}, \mathsfsl{B}, \mathsfsl{C}, \mathsfsl{D}, \mathsfsl{E}, \mathsfsl{F}, \mathsfsl{G}, \mathsfsl{H}, \mathsfsl{I}, \mathsfsl{J}, \mathsfsl{K}, \mathsfsl{L}, \mathsfsl{M}, \mathsfsl{N}, \mathsfsl{O}, \mathsfsl{P}, \mathsfsl{Q}, \mathsfsl{R}, \mathsfsl{S}, \mathsfsl{T}, \mathsfsl{U}, \mathsfsl{V}, \mathsfsl{W}, \mathsfsl{X}, \mathsfsl{Y}, \mathsfsl{Z}, \mathsfsl{a}, \mathsfsl{b}, \mathsfsl{c}, \mathsfsl{d}, \mathsfsl{e}, \mathsfsl{f}, \mathsfsl{g}, \mathsfsl{h}, \mathsfsl{i}, \mathsfsl{j}, \mathsfsl{k}, \mathsfsl{l}, \mathsfsl{m}, \mathsfsl{n}, \mathsfsl{o}, \mathsfsl{p}, \mathsfsl{q}, \mathsfsl{r}, \mathsfsl{s}, \mathsfsl{t}, \mathsfsl{u}, \mathsfsl{v}, \mathsfsl{w}, \mathsfsl{x}, \mathsfsl{y}, \mathsfsl{z}, \mathsfbfsl{A}, \mathsfbfsl{B}, \mathsfbfsl{C}, \mathsfbfsl{D}, \mathsfbfsl{E}, \mathsfbfsl{F}, \mathsfbfsl{G}, \mathsfbfsl{H}, \mathsfbfsl{I}, \mathsfbfsl{J}, \mathsfbfsl{K}, \mathsfbfsl{L}, \mathsfbfsl{M}, \mathsfbfsl{N}, \mathsfbfsl{O}, \mathsfbfsl{P}, \mathsfbfsl{Q}, \mathsfbfsl{R}, \mathsfbfsl{S}, \mathsfbfsl{T}, \mathsfbfsl{U}, \mathsfbfsl{V}, \mathsfbfsl{W}, \mathsfbfsl{X}, \mathsfbfsl{Y}, \mathsfbfsl{Z}, \mathsfbfsl{a}, \mathsfbfsl{b}, \mathsfbfsl{c}, \mathsfbfsl{d}, \mathsfbfsl{e}, \mathsfbfsl{f}, \mathsfbfsl{g}, \mathsfbfsl{h}, \mathsfbfsl{i}, \mathsfbfsl{j}, \mathsfbfsl{k}, \mathsfbfsl{l}, \mathsfbfsl{m}, \mathsfbfsl{n}, \mathsfbfsl{o}, \mathsfbfsl{p}, \mathsfbfsl{q}, \mathsfbfsl{r}, \mathsfbfsl{s}, \mathsfbfsl{t}, \mathsfbfsl{u}, \mathsfbfsl{v}, \mathsfbfsl{w}, \mathsfbfsl{x}, \mathsfbfsl{y}, \mathsfbfsl{z}, \mathtt{A}, \mathtt{B}, \mathtt{C}, \mathtt{D}, \mathtt{E}, \mathtt{F}, \mathtt{G}, \mathtt{H}, \mathtt{I}, \mathtt{J}, \mathtt{K}, \mathtt{L}, \mathtt{M}, \mathtt{N}, \mathtt{O}, \mathtt{P}, \mathtt{Q}, \mathtt{R}, \mathtt{S}, \mathtt{T}, \mathtt{U}, \mathtt{V}, \mathtt{W}, \mathtt{X}, \mathtt{Y}, \mathtt{Z}, \mathtt{a}, \mathtt{b}, \mathtt{c}, \mathtt{d}, \mathtt{e}, \mathtt{f}, \mathtt{g}, \mathtt{h}, \mathtt{i}, \mathtt{j}, \mathtt{k}, \mathtt{l}, \mathtt{m}, \mathtt{n}, \mathtt{o}, \mathtt{p}, \mathtt{q}, \mathtt{r}, \mathtt{s}, \mathtt{t}, \mathtt{u}, \mathtt{v}, \mathtt{w}, \mathtt{x}, \mathtt{y}, \mathtt{z}, \mathbf{\Gamma}, \mathbf{\Delta}, \mathbf{\Theta}, \mathbf{\Lambda}, \mathbf{\Xi}, \mathbf{\Pi}, \mathbf{\vartheta}, \mathbf{\Sigma}, \mathbf{\Upsilon}, \mathbf{\Phi}, \mathbf{\Psi}, \mathbf{\Omega}, \mathbf{\nabla}, \mathbf{\alpha}, \mathbf{\beta}, \mathbf{\gamma}, \mathbf{\delta}, \mathbf{\epsilon}, \mathbf{\zeta}, \mathbf{\eta}, \mathbf{\theta}, \mathbf{\lambda}, \mathbf{\xi}, \mathbf{\pi}, \mathbf{\varsigma}, \mathbf{\sigma}, \mathbf{\upsilon}, \mathbf{\phi}, \mathbf{\psi}, \mathbf{\omega}, \mathbf{\varkappa}, \mathbf{\varrho}, \mathbf{\varpi}, \mathsl{\Gamma}, \mathsl{\Delta}, \mathsl{\Lambda}, \mathsl{\Xi}, \mathsl{\Pi}, \mathsl{\Theta}, \mathsl{\Sigma}, \mathsl{\Upsilon}, \mathsl{\Phi}, \mathsl{\Psi}, \mathsl{\Omega}, \mathsl{\nabla}, \mathsl{\gamma}, \mathsl{\delta}, \mathsl{\theta}, \mathsl{\lambda}, \mu, \mathsl{\xi}, \mathsl{\pi}, \mathsl{\varsigma}, \mathsl{\sigma}, \mathsl{\upsilon}, \mathsl{\varphi}, \mathsl{\psi}, \mathsl{\omega}, \mathsl{\vartheta}, \mathsl{\varkappa}, \mathsl{\phi}, \mathsl{\varrho}, \mathsl{\varpi}, \mathbit{\Gamma}, \mathbit{\Delta}, \mathbit{\Theta}, \mathbit{\Lambda}, \mathbit{\Xi}, \mathbit{\Pi}, \mathbit{\Sigma}, \mathbit{\Upsilon}, \mathbit{\Phi}, \mathbit{\Psi}, \mathbit{\Omega}, \mathbit{\nabla}, \mathbit{\alpha}, \mathbit{\beta}, \mathbit{\gamma}, \mathbit{\delta}, \mathbit{\epsilon}, \mathbit{\zeta}, \mathbit{\eta}, \mathbit{\theta}, \mathbit{\imath}, \mathbit{\kappa}, \mathbit{\lambda}, \mathbit{\xi}, \mathbit{\pi}, \mathbit{\rho}, \mathbit{\varsigma}, \mathbit{\sigma}, \mathbit{\tau}, \mathbit{\upsilon}, \mathbit{\varphi}, \mathbit{\chi}, \mathbit{\psi}, \mathbit{\omega}, \mathbit{\vartheta}, \mathbit{\varkappa}, \mathbit{\phi}, \mathbit{\varrho}, \mathbit{\varpi}, \mathsfbf{\Gamma}, \mathsfbf{\Delta}, \mathsfbf{\Theta}, \mathsfbf{\Lambda}, \mathsfbf{\Xi}, \mathsfbf{\Pi}, \mathsfbf{\Sigma}, \mathsfbf{\Upsilon}, \mathsfbf{\Phi}, \mathsfbf{\Psi}, \mathsfbf{\Omega}, \mathsfbf{\nabla}, \mathsfbf{\alpha}, \mathsfbf{\beta}, \mathsfbf{\gamma}, \mathsfbf{\delta}, \mathsfbf{\varepsilon}, \mathsfbf{\zeta}, \mathsfbf{\eta}, \mathsfbf{\theta}, \mathsfbf{\imath}, \mathsfbf{\kappa}, \mathsfbf{\lambda}, \mathsfbf{\xi}, \mathsfbf{\pi}, \mathsfbf{\rho}, \mathsfbf{\varsigma}, \mathsfbf{\sigma}, \mathsfbf{\tau}, \mathsfbf{\upsilon}, \mathsfbf{\varphi}, \mathsfbf{\chi}, \mathsfbf{\psi}, \mathsfbf{\omega}, \mathsfbf{\vartheta}, \mathsfbf{\varkappa}, \mathsfbf{\phi}, \mathsfbf{\varrho}, \mathsfbf{\varpi}, \mathsfbfsl{\Gamma}, \mathsfbfsl{\Delta}, \mathsfbfsl{\Theta}, \mathsfbfsl{\Lambda}, \mathsfbfsl{\Xi}, \mathsfbfsl{\Pi}, \mathsfbfsl{\Sigma}, \mathsfbfsl{\Upsilon}, \mathsfbfsl{\Phi}, \mathsfbfsl{\Psi}, \mathsfbfsl{\Omega}, \mathsfbfsl{\nabla}, \mathsfbfsl{\alpha}, \mathsfbfsl{\beta}, \mathsfbfsl{\gamma}, \mathsfbfsl{\delta}, \mathsfbfsl{\varepsilon}, \mathsfbfsl{\zeta}, \mathsfbfsl{\eta}, \mathsfbfsl{\theta}, \mathsfbfsl{\imath}, \mathsfbfsl{\kappa}, \mathsfbfsl{\lambda}, \mathsfbfsl{\xi}, \mathsfbfsl{\pi}, \mathsfbfsl{\rho}, \mathsfbfsl{\varsigma}, \mathsfbfsl{\sigma}, \mathsfbfsl{\tau}, \mathsfbfsl{\upsilon}, \mathsfbfsl{\varphi}, \mathsfbfsl{\chi}, \mathsfbfsl{\psi}, \mathsfbfsl{\omega}, \mathsfbfsl{\vartheta}, \mathsfbfsl{\varkappa}, \mathsfbfsl{\phi}, \mathsfbfsl{\varrho}, \mathsfbfsl{\varpi}, \mbfDigamma, \mbfdigamma, \mathbf{0}, \mathbf{1}, \mathbf{2}, \mathbf{3}, \mathbf{4}, \mathbf{5}, \mathbf{6}, \mathbf{7}, \mathbf{8}, \mathbf{9}, \mathbb{0}, \mathbb{1}, \mathbb{2}, \mathbb{3}, \mathbb{4}, \mathbb{5}, \mathbb{6}, \mathbb{7}, \mathbb{8}, \mathbb{9}, \mathsf{0}, \mathsf{1}, \mathsf{2}, \mathsf{3}, \mathsf{4}, \mathsf{5}, \mathsf{6}, \mathsf{7}, \mathsf{8}, \mathsf{9}, \mathsfbf{0}, \mathsfbf{1}, \mathsfbf{2}, \mathsfbf{3}, \mathsfbf{4}, \mathsfbf{5}, \mathsfbf{6}, \mathsfbf{7}, \mathsfbf{8}, \mathsfbf{9}, \mathtt{0}, \mathtt{1}, \mathtt{2}, \mathtt{3}, \mathtt{4}, \mathtt{5}, \mathtt{6}, \mathtt{7}, \mathtt{8}, \mathtt{9}, default */
/*! all exports used */
/***/ (function(module) {

module.exports = JSON.parse("{\"\\\\#\":\"#\",\"\\\\$\":\"$\",\"\\\\%\":\"%\",\"\\\\&\":\"&\",\"\\\\slash\":\"/​\",\"\\\\textless\":\"<\",\"\\\\textgreater\":\">\",\"\\\\LaTeX\":\"LaTeX\",\"\\\\textbackslash\":\"\\\\\",\"\\\\backslash\":\"\\\\\",\"\\\\\":\"\\\\\",\"\\\\^\":\"^\",\"\\\\sphat\":\"^\",\"\\\\_\":\"_\",\"\\\\t{ia}\":\"i︠a︡\",\"{\\\\~ w}\":\"w̃\",\"\\\\{\":\"{\",\"\\\\lbrace\":\"{\",\"\\\\textbar\":\"|\",\"\\\\}\":\"}\",\"\\\\rbrace\":\"}\",\"\\\\textasciitilde\":\"~\",\"\\\\sptilde\":\"~\",\"\\\\textexclamdown\":\"¡\",\"\\\\textcent\":\"¢\",\"\\\\cent\":\"¢\",\"\\\\textsterling\":\"£\",\"\\\\pounds\":\"£\",\"\\\\textcurrency\":\"¤\",\"\\\\textyen\":\"¥\",\"\\\\yen\":\"¥\",\"\\\\textbrokenbar\":\"¦\",\"\\\\textsection\":\"§\",\"\\\\textasciidieresis\":\"¨\",\"\\\\spddot\":\"¨\",\"\\\\textcopyright\":\"©\",\"\\\\textordfeminine\":\"ª\",\"\\\\guillemotleft\":\"«\",\"\\\\lnot\":\"¬\",\"\\\\neg\":\"¬\",\"\\\\-\":\"­\",\"\\\\textregistered\":\"®\",\"\\\\circledR\":\"®\",\"\\\\textasciimacron\":\"¯\",\"\\\\textdegree\":\"°\",\"^\\\\circ\":\"°\",\"\\\\pm\":\"±\",\"^{2}\":\"²\",\"^{3}\":\"³\",\"\\\\textasciiacute\":\"´\",\"\\\\textmu\":\"µ\",\"\\\\textparagraph\":\"¶\",\"^{1}\":\"¹\",\"\\\\textordmasculine\":\"º\",\"\\\\guillemotright\":\"»\",\"\\\\frac{1}{4}\":\"¼\",\"\\\\textonequarter\":\"¼\",\"\\\\frac{1}{2}\":\"½\",\"\\\\textonehalf\":\"½\",\"\\\\frac{3}{4}\":\"¾\",\"\\\\textthreequarters\":\"¾\",\"\\\\textquestiondown\":\"¿\",\"\\\\`A\":\"À\",\"\\\\'A\":\"Á\",\"\\\\^A\":\"Â\",\"\\\\~A\":\"Ã\",\"\\\\\\\"A\":\"Ä\",\"\\\\AA\":\"Å\",\"\\\\r{A}\":\"Å\",\"{\\\\r A}\":\"Å\",\"\\\\AE\":\"Æ\",\"\\\\c{C}\":\"Ç\",\"\\\\`E\":\"È\",\"\\\\'E\":\"É\",\"\\\\^E\":\"Ê\",\"\\\\\\\"E\":\"Ë\",\"\\\\`I\":\"Ì\",\"\\\\'I\":\"Í\",\"\\\\^I\":\"Î\",\"\\\\\\\"I\":\"Ï\",\"\\\\DH\":\"Ð\",\"\\\\~N\":\"Ñ\",\"\\\\`O\":\"Ò\",\"\\\\'O\":\"Ó\",\"\\\\^O\":\"Ô\",\"\\\\~O\":\"Õ\",\"\\\\\\\"O\":\"Ö\",\"\\\\texttimes\":\"×\",\"\\\\times\":\"×\",\"\\\\O\":\"Ø\",\"\\\\`U\":\"Ù\",\"\\\\'U\":\"Ú\",\"\\\\^U\":\"Û\",\"\\\\\\\"U\":\"Ü\",\"\\\\'Y\":\"Ý\",\"\\\\TH\":\"Þ\",\"\\\\ss\":\"ß\",\"\\\\`a\":\"à\",\"\\\\'a\":\"á\",\"\\\\^a\":\"â\",\"\\\\~a\":\"ã\",\"\\\\\\\"a\":\"ä\",\"\\\\aa\":\"å\",\"\\\\r{a}\":\"å\",\"{\\\\r a}\":\"å\",\"\\\\ae\":\"æ\",\"\\\\c{c}\":\"ç\",\"\\\\`e\":\"è\",\"\\\\'e\":\"é\",\"\\\\^e\":\"ê\",\"\\\\\\\"e\":\"ë\",\"\\\\`i\":\"ì\",\"\\\\`\\\\i\":\"ì\",\"\\\\'i\":\"í\",\"\\\\'\\\\i\":\"í\",\"\\\\^i\":\"î\",\"\\\\^\\\\i\":\"î\",\"\\\\\\\"i\":\"ï\",\"\\\\\\\"\\\\i\":\"ï\",\"\\\\dh\":\"ð\",\"\\\\eth\":\"ð\",\"\\\\~n\":\"ñ\",\"\\\\`o\":\"ò\",\"\\\\'o\":\"ó\",\"\\\\^o\":\"ô\",\"\\\\~o\":\"õ\",\"\\\\\\\"o\":\"ö\",\"\\\\div\":\"÷\",\"\\\\o\":\"ø\",\"\\\\`u\":\"ù\",\"\\\\'u\":\"ú\",\"\\\\^u\":\"û\",\"\\\\\\\"u\":\"ü\",\"\\\\'y\":\"ý\",\"\\\\th\":\"þ\",\"\\\\\\\"y\":\"ÿ\",\"\\\\=A\":\"Ā\",\"\\\\=a\":\"ā\",\"\\\\u{A}\":\"Ă\",\"\\\\u{a}\":\"ă\",\"\\\\k{A}\":\"Ą\",\"\\\\k{a}\":\"ą\",\"\\\\'C\":\"Ć\",\"\\\\'c\":\"ć\",\"\\\\^C\":\"Ĉ\",\"\\\\^c\":\"ĉ\",\"\\\\.C\":\"Ċ\",\"\\\\.c\":\"ċ\",\"\\\\v{C}\":\"Č\",\"\\\\v{c}\":\"č\",\"\\\\v{D}\":\"Ď\",\"\\\\v{d}\":\"ď\",\"\\\\DJ\":\"Đ\",\"\\\\dj\":\"đ\",\"\\\\=E\":\"Ē\",\"\\\\=e\":\"ē\",\"\\\\u{E}\":\"Ĕ\",\"\\\\u{e}\":\"ĕ\",\"\\\\.E\":\"Ė\",\"\\\\.e\":\"ė\",\"\\\\k{E}\":\"Ę\",\"\\\\k{e}\":\"ę\",\"\\\\v{E}\":\"Ě\",\"\\\\v{e}\":\"ě\",\"\\\\^G\":\"Ĝ\",\"\\\\^g\":\"ĝ\",\"\\\\u{G}\":\"Ğ\",\"\\\\u{g}\":\"ğ\",\"\\\\.G\":\"Ġ\",\"\\\\.g\":\"ġ\",\"\\\\c{G}\":\"Ģ\",\"\\\\c{g}\":\"ģ\",\"\\\\^H\":\"Ĥ\",\"\\\\^h\":\"ĥ\",\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char40}\":\"Ħ\",\"\\\\Elzxh\":\"ħ\",\"\\\\~I\":\"Ĩ\",\"\\\\~i\":\"ĩ\",\"\\\\=I\":\"Ī\",\"\\\\=i\":\"ī\",\"\\\\u{I}\":\"Ĭ\",\"{\\\\u \\\\i}\":\"ĭ\",\"\\\\k{I}\":\"Į\",\"\\\\k{i}\":\"į\",\"\\\\.I\":\"İ\",\"\\\\i\":\"ı\",\"\\\\imath\":\"ı\",\"\\\\^J\":\"Ĵ\",\"\\\\^\\\\j\":\"ĵ\",\"\\\\c{K}\":\"Ķ\",\"\\\\c{k}\":\"ķ\",\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char91}\":\"ĸ\",\"\\\\'L\":\"Ĺ\",\"\\\\'l\":\"ĺ\",\"\\\\c{L}\":\"Ļ\",\"\\\\c{l}\":\"ļ\",\"\\\\v{L}\":\"Ľ\",\"\\\\v{l}\":\"ľ\",\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char201}\":\"Ŀ\",\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char202}\":\"ŀ\",\"\\\\L\":\"Ł\",\"\\\\l\":\"ł\",\"\\\\'N\":\"Ń\",\"\\\\'n\":\"ń\",\"\\\\c{N}\":\"Ņ\",\"\\\\c{n}\":\"ņ\",\"\\\\v{N}\":\"Ň\",\"\\\\v{n}\":\"ň\",\"\\\\NG\":\"Ŋ\",\"\\\\ng\":\"ŋ\",\"\\\\=O\":\"Ō\",\"\\\\=o\":\"ō\",\"\\\\u{O}\":\"Ŏ\",\"\\\\u{o}\":\"ŏ\",\"\\\\H{O}\":\"Ő\",\"\\\\H{o}\":\"ő\",\"\\\\OE\":\"Œ\",\"\\\\oe\":\"œ\",\"\\\\'R\":\"Ŕ\",\"\\\\'r\":\"ŕ\",\"\\\\c{R}\":\"Ŗ\",\"\\\\c{r}\":\"ŗ\",\"\\\\v{R}\":\"Ř\",\"\\\\v{r}\":\"ř\",\"\\\\'S\":\"Ś\",\"\\\\'s\":\"ś\",\"\\\\^S\":\"Ŝ\",\"\\\\^s\":\"ŝ\",\"\\\\c{S}\":\"Ş\",\"\\\\c{s}\":\"ş\",\"\\\\v{S}\":\"Š\",\"\\\\v{s}\":\"š\",\"\\\\c{T}\":\"Ţ\",\"\\\\c{t}\":\"ţ\",\"\\\\v{T}\":\"Ť\",\"\\\\v{t}\":\"ť\",\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char47}\":\"Ŧ\",\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char63}\":\"ŧ\",\"\\\\~U\":\"Ũ\",\"\\\\~u\":\"ũ\",\"\\\\=U\":\"Ū\",\"\\\\=u\":\"ū\",\"\\\\u{U}\":\"Ŭ\",\"\\\\u{u}\":\"ŭ\",\"\\\\r{U}\":\"Ů\",\"{\\\\r U}\":\"Ů\",\"\\\\r{u}\":\"ů\",\"\\\\ocirc{u}\":\"ů\",\"{\\\\r u}\":\"ů\",\"\\\\H{U}\":\"Ű\",\"\\\\H{u}\":\"ű\",\"\\\\k{U}\":\"Ų\",\"\\\\k{u}\":\"ų\",\"\\\\^W\":\"Ŵ\",\"\\\\^w\":\"ŵ\",\"\\\\^Y\":\"Ŷ\",\"\\\\^y\":\"ŷ\",\"\\\\\\\"Y\":\"Ÿ\",\"\\\\'Z\":\"Ź\",\"\\\\'z\":\"ź\",\"\\\\.Z\":\"Ż\",\"\\\\.z\":\"ż\",\"\\\\v{Z}\":\"Ž\",\"\\\\v{z}\":\"ž\",\"\\\\texthvlig\":\"ƕ\",\"\\\\textnrleg\":\"ƞ\",\"\\\\textesh\":\"ƪ\",\"\\\\Zbar\":\"Ƶ\",\"{\\\\fontencoding{LELA}\\\\selectfont\\\\char195}\":\"ƺ\",\"\\\\textdoublepipe\":\"ǂ\",\"\\\\v{A}\":\"Ǎ\",\"\\\\v{a}\":\"ǎ\",\"\\\\v{I}\":\"Ǐ\",\"\\\\v{i}\":\"ǐ\",\"\\\\v{O}\":\"Ǒ\",\"\\\\v{o}\":\"ǒ\",\"\\\\v{U}\":\"Ǔ\",\"\\\\v{u}\":\"ǔ\",\"\\\\v{G}\":\"Ǧ\",\"\\\\v{g}\":\"ǧ\",\"\\\\v{K}\":\"Ǩ\",\"\\\\v{k}\":\"ǩ\",\"\\\\k{O}\":\"Ǫ\",\"\\\\k{o}\":\"ǫ\",\"\\\\v{j}\":\"ǰ\",\"\\\\'G\":\"Ǵ\",\"\\\\'g\":\"ǵ\",\"\\\\c{E}\":\"Ȩ\",\"\\\\c{e}\":\"ȩ\",\"\\\\jmath\":\"ȷ\",\"\\\\Elztrna\":\"ɐ\",\"\\\\Elztrnsa\":\"ɒ\",\"\\\\Elzopeno\":\"ɔ\",\"\\\\Elzrtld\":\"ɖ\",\"{\\\\fontencoding{LEIP}\\\\selectfont\\\\char61}\":\"ɘ\",\"\\\\Elzschwa\":\"ə\",\"\\\\varepsilon\":\"ɛ\",\"\\\\Elzpgamma\":\"ɣ\",\"\\\\Elzpbgam\":\"ɤ\",\"\\\\Elztrnh\":\"ɥ\",\"\\\\Elzbtdl\":\"ɬ\",\"\\\\Elzrtll\":\"ɭ\",\"\\\\Elztrnm\":\"ɯ\",\"\\\\Elztrnmlr\":\"ɰ\",\"\\\\Elzltlmr\":\"ɱ\",\"\\\\Elzltln\":\"ɲ\",\"\\\\Elzrtln\":\"ɳ\",\"\\\\Elzclomeg\":\"ɷ\",\"\\\\textphi\":\"ɸ\",\"\\\\Elztrnr\":\"ɹ\",\"\\\\Elztrnrl\":\"ɺ\",\"\\\\Elzrttrnr\":\"ɻ\",\"\\\\Elzrl\":\"ɼ\",\"\\\\Elzrtlr\":\"ɽ\",\"\\\\Elzfhr\":\"ɾ\",\"{\\\\fontencoding{LEIP}\\\\selectfont\\\\char202}\":\"ɿ\",\"\\\\Elzrtls\":\"ʂ\",\"\\\\Elzesh\":\"ʃ\",\"\\\\Elztrnt\":\"ʇ\",\"\\\\Elzrtlt\":\"ʈ\",\"\\\\Elzpupsil\":\"ʊ\",\"\\\\Elzpscrv\":\"ʋ\",\"\\\\Elzinvv\":\"ʌ\",\"\\\\Elzinvw\":\"ʍ\",\"\\\\Elztrny\":\"ʎ\",\"\\\\Elzrtlz\":\"ʐ\",\"\\\\Elzyogh\":\"ʒ\",\"\\\\Elzglst\":\"ʔ\",\"\\\\Elzreglst\":\"ʕ\",\"\\\\Elzinglst\":\"ʖ\",\"\\\\textturnk\":\"ʞ\",\"\\\\Elzdyogh\":\"ʤ\",\"\\\\Elztesh\":\"ʧ\",\"\\\\textsuperscript{h}\":\"ʰ\",\"^{h}\":\"ʰ\",\"\\\\textsuperscript{j}\":\"ʲ\",\"^{j}\":\"ʲ\",\"\\\\textsuperscript{r}\":\"ʳ\",\"^{r}\":\"ʳ\",\"\\\\textsuperscript{w}\":\"ʷ\",\"^{w}\":\"ʷ\",\"\\\\textsuperscript{y}\":\"ʸ\",\"^{y}\":\"ʸ\",\"\\\\lasp\":\"ʿ\",\"\\\\textasciicircum\":\"ˆ\",\"\\\\textasciicaron\":\"ˇ\",\"\\\\Elzverts\":\"ˈ\",\"\\\\Elzverti\":\"ˌ\",\"\\\\Elzlmrk\":\"ː\",\"\\\\Elzhlmrk\":\"ˑ\",\"\\\\Elzsbrhr\":\"˒\",\"\\\\Elzsblhr\":\"˓\",\"\\\\Elzrais\":\"˔\",\"\\\\Elzlow\":\"˕\",\"\\\\textasciibreve\":\"˘\",\"\\\\textperiodcentered\":\"˙\",\"\\\\texttildelow\":\"˜\",\"\\\\textsuperscript{l}\":\"ˡ\",\"^{l}\":\"ˡ\",\"\\\\textsuperscript{s}\":\"ˢ\",\"^{s}\":\"ˢ\",\"\\\\textsuperscript{x}\":\"ˣ\",\"^{x}\":\"ˣ\",\"\\\\tone{55}\":\"˥\",\"\\\\tone{44}\":\"˦\",\"\\\\tone{33}\":\"˧\",\"\\\\tone{22}\":\"˨\",\"\\\\tone{11}\":\"˩\",\"\\\\`\":\"̀\",\"\\\\grave\":\"̀\",\"\\\\textgravemacron\":\"̀̄\",\"\\\\textgravedot\":\"̀̇\",\"\\\\'\":\"́\",\"\\\\acute\":\"́\",\"\\\\textacutemacron\":\"́̄\",\"\\\\textacutewedge\":\"́̌\",\"\\\\hat\":\"̂\",\"\\\\textcircumdot\":\"̂̇\",\"\\\\~\":\"̃\",\"\\\\tilde\":\"̃\",\"\\\\texttildedot\":\"̃̇\",\"\\\\=\":\"̄\",\"\\\\bar\":\"̄\",\"\\\\overline\":\"̅\",\"\\\\u\":\"̆\",\"\\\\breve\":\"̆\",\"\\\\textbrevemacron\":\"̆̄\",\"\\\\.\":\"̇\",\"\\\\dot\":\"̇\",\"\\\\textdotacute\":\"̇́\",\"\\\\\\\"\":\"̈\",\"\\\\ddot\":\"̈\",\"\\\\ovhook\":\"̉\",\"\\\\r\":\"̊\",\"\\\\mathring\":\"̊\",\"\\\\textringmacron\":\"̊̄\",\"\\\\H\":\"̋\",\"\\\\check\":\"̌\",\"\\\\v\":\"̌\",\"\\\\textvbaraccent\":\"̍\",\"\\\\textdoublevbaraccent\":\"̎\",\"\\\\textdoublegrave\":\"̏\",\"\\\\textdotbreve\":\"̐\",\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char177}\":\"̑\",\"\\\\oturnedcomma\":\"̒\",\"\\\\ocommatopright\":\"̕\",\"\\\\textsubgrave\":\"̖\",\"\\\\textadvancing\":\"̘\",\"\\\\textretracting\":\"̙\",\"\\\\droang\":\"̚\",\"\\\\textcorner\":\"̚\",\"\\\\textsublhalfring\":\"̜\",\"\\\\textraising\":\"̝\",\"\\\\textlowering\":\"̞\",\"\\\\textsubplus\":\"̟\",\"\\\\Elzpalh\":\"̡\",\"\\\\Elzrh\":\"̢\",\"\\\\d\":\"̣\",\"\\\\textsubumlaut\":\"̤\",\"\\\\textsubring\":\"̥\",\"\\\\c\":\"̧\",\"\\\\k\":\"̨\",\"\\\\textsyllabic\":\"̩\",\"\\\\Elzsbbrg\":\"̪\",\"\\\\textsubbridge\":\"̪\",\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char203}\":\"̫\",\"\\\\textsubwedge\":\"̬\",\"\\\\textsubarch\":\"̯\",\"\\\\utilde\":\"̰\",\"\\\\textsubtilde\":\"̰\",\"\\\\textsubbar\":\"̱\",\"\\\\underbar\":\"̱\",\"\\\\underline\":\"̲\",\"\\\\textsuperimposetilde\":\"̴\",\"\\\\Elzxl\":\"̵\",\"\\\\Elzbar\":\"̶\",\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char215}\":\"̷\",\"\\\\not\":\"̸\",\"\\\\textsubrhalfring\":\"̹\",\"\\\\textinvsubbridge\":\"̺\",\"\\\\textsubsquare\":\"̻\",\"\\\\textseagull\":\"̼\",\"\\\\textovercross\":\"̽\",\"{\\\\fontencoding{LECO}\\\\selectfont\\\\char225}\":\"͡\",\"\\\\'H\":\"Ή\",\"{\\\\'{}I}\":\"Ί\",\"{\\\\'{}O}\":\"Ό\",\"\\\\mathrm{'Y}\":\"Ύ\",\"\\\\mathrm{'\\\\Omega}\":\"Ώ\",\"\\\\acute{\\\\ddot{\\\\iota}}\":\"ΐ\",\"\\\\Gamma\":\"Γ\",\"\\\\varGamma\":\"Γ\",\"\\\\Delta\":\"Δ\",\"\\\\Theta\":\"Θ\",\"\\\\Lambda\":\"Λ\",\"\\\\Xi\":\"Ξ\",\"\\\\Pi\":\"Π\",\"\\\\Sigma\":\"Σ\",\"\\\\Upsilon\":\"Υ\",\"\\\\Phi\":\"Φ\",\"\\\\Psi\":\"Ψ\",\"\\\\Omega\":\"Ω\",\"\\\\mathrm{\\\\ddot{I}}\":\"Ϊ\",\"\\\\mathrm{\\\\ddot{Y}}\":\"Ϋ\",\"{\\\\'$\\\\alpha$}\":\"ά\",\"\\\\acute{\\\\epsilon}\":\"έ\",\"\\\\acute{\\\\eta}\":\"ή\",\"\\\\acute{\\\\iota}\":\"ί\",\"\\\\acute{\\\\ddot{\\\\upsilon}}\":\"ΰ\",\"\\\\alpha\":\"α\",\"\\\\beta\":\"β\",\"\\\\gamma\":\"γ\",\"\\\\delta\":\"δ\",\"\\\\zeta\":\"ζ\",\"\\\\eta\":\"η\",\"\\\\texttheta\":\"θ\",\"\\\\theta\":\"θ\",\"\\\\iota\":\"ι\",\"\\\\kappa\":\"κ\",\"\\\\lambda\":\"λ\",\"\\\\nu\":\"ν\",\"\\\\xi\":\"ξ\",\"\\\\pi\":\"π\",\"\\\\rho\":\"ρ\",\"\\\\varsigma\":\"ς\",\"\\\\sigma\":\"σ\",\"\\\\tau\":\"τ\",\"\\\\upsilon\":\"υ\",\"\\\\varphi\":\"φ\",\"\\\\chi\":\"χ\",\"\\\\psi\":\"ψ\",\"\\\\omega\":\"ω\",\"\\\\ddot{\\\\iota}\":\"ϊ\",\"\\\\ddot{\\\\upsilon}\":\"ϋ\",\"\\\\acute{\\\\upsilon}\":\"ύ\",\"\\\\acute{\\\\omega}\":\"ώ\",\"\\\\Pisymbol{ppi022}{87}\":\"ϐ\",\"\\\\varbeta\":\"ϐ\",\"\\\\textvartheta\":\"ϑ\",\"\\\\vartheta\":\"ϑ\",\"\\\\phi\":\"ϕ\",\"\\\\varpi\":\"ϖ\",\"\\\\Qoppa\":\"Ϙ\",\"\\\\qoppa\":\"ϙ\",\"\\\\Stigma\":\"Ϛ\",\"\\\\stigma\":\"ϛ\",\"\\\\Digamma\":\"Ϝ\",\"\\\\digamma\":\"ϝ\",\"\\\\Koppa\":\"Ϟ\",\"\\\\koppa\":\"ϟ\",\"\\\\Sampi\":\"Ϡ\",\"\\\\sampi\":\"ϡ\",\"\\\\varkappa\":\"ϰ\",\"\\\\varrho\":\"ϱ\",\"\\\\textTheta\":\"ϴ\",\"\\\\upvarTheta\":\"ϴ\",\"\\\\epsilon\":\"ϵ\",\"\\\\backepsilon\":\"϶\",\"\\\\cyrchar\\\\CYRYO\":\"Ё\",\"\\\\cyrchar\\\\CYRDJE\":\"Ђ\",\"\\\\cyrchar{\\\\'\\\\CYRG}\":\"Ѓ\",\"\\\\cyrchar\\\\CYRIE\":\"Є\",\"\\\\cyrchar\\\\CYRDZE\":\"Ѕ\",\"\\\\cyrchar\\\\CYRII\":\"І\",\"\\\\cyrchar\\\\CYRYI\":\"Ї\",\"\\\\cyrchar\\\\CYRJE\":\"Ј\",\"\\\\cyrchar\\\\CYRLJE\":\"Љ\",\"\\\\cyrchar\\\\CYRNJE\":\"Њ\",\"\\\\cyrchar\\\\CYRTSHE\":\"Ћ\",\"\\\\cyrchar{\\\\'\\\\CYRK}\":\"Ќ\",\"\\\\cyrchar\\\\CYRUSHRT\":\"Ў\",\"\\\\cyrchar\\\\CYRDZHE\":\"Џ\",\"\\\\cyrchar\\\\CYRA\":\"А\",\"\\\\cyrchar\\\\CYRB\":\"Б\",\"\\\\cyrchar\\\\CYRV\":\"В\",\"\\\\cyrchar\\\\CYRG\":\"Г\",\"\\\\cyrchar\\\\CYRD\":\"Д\",\"\\\\cyrchar\\\\CYRE\":\"Е\",\"\\\\cyrchar\\\\CYRZH\":\"Ж\",\"\\\\cyrchar\\\\CYRZ\":\"З\",\"\\\\cyrchar\\\\CYRI\":\"И\",\"\\\\cyrchar\\\\CYRISHRT\":\"Й\",\"\\\\cyrchar\\\\CYRK\":\"К\",\"\\\\cyrchar\\\\CYRL\":\"Л\",\"\\\\cyrchar\\\\CYRM\":\"М\",\"\\\\cyrchar\\\\CYRN\":\"Н\",\"\\\\cyrchar\\\\CYRO\":\"О\",\"\\\\cyrchar\\\\CYRP\":\"П\",\"\\\\cyrchar\\\\CYRR\":\"Р\",\"\\\\cyrchar\\\\CYRS\":\"С\",\"\\\\cyrchar\\\\CYRT\":\"Т\",\"\\\\cyrchar\\\\CYRU\":\"У\",\"\\\\cyrchar\\\\CYRF\":\"Ф\",\"\\\\cyrchar\\\\CYRH\":\"Х\",\"\\\\cyrchar\\\\CYRC\":\"Ц\",\"\\\\cyrchar\\\\CYRCH\":\"Ч\",\"\\\\cyrchar\\\\CYRSH\":\"Ш\",\"\\\\cyrchar\\\\CYRSHCH\":\"Щ\",\"\\\\cyrchar\\\\CYRHRDSN\":\"Ъ\",\"\\\\bud\":\"Ъ\",\"\\\\cdprime\":\"Ъ\",\"\\\\cyrchar\\\\CYRERY\":\"Ы\",\"\\\\cyrchar\\\\CYRSFTSN\":\"Ь\",\"\\\\cprime\":\"Ь\",\"\\\\cyrchar\\\\CYREREV\":\"Э\",\"\\\\cyrchar\\\\CYRYU\":\"Ю\",\"\\\\cyrchar\\\\CYRYA\":\"Я\",\"\\\\cyrchar\\\\cyra\":\"а\",\"\\\\cyrchar\\\\cyrb\":\"б\",\"\\\\cyrchar\\\\cyrv\":\"в\",\"\\\\cyrchar\\\\cyrg\":\"г\",\"\\\\cyrchar\\\\cyrd\":\"д\",\"\\\\cyrchar\\\\cyre\":\"е\",\"\\\\cyrchar\\\\cyrzh\":\"ж\",\"\\\\cyrchar\\\\cyrz\":\"з\",\"\\\\cyrchar\\\\cyri\":\"и\",\"\\\\cyrchar\\\\cyrishrt\":\"й\",\"\\\\cyrchar\\\\cyrk\":\"к\",\"\\\\cyrchar\\\\cyrl\":\"л\",\"\\\\cyrchar\\\\cyrm\":\"м\",\"\\\\cyrchar\\\\cyrn\":\"н\",\"\\\\cyrchar\\\\cyro\":\"о\",\"\\\\cyrchar\\\\cyrp\":\"п\",\"\\\\cyrchar\\\\cyrr\":\"р\",\"\\\\cyrchar\\\\cyrs\":\"с\",\"\\\\cyrchar\\\\cyrt\":\"т\",\"\\\\cyrchar\\\\cyru\":\"у\",\"\\\\cyrchar\\\\cyrf\":\"ф\",\"\\\\cyrchar\\\\cyrh\":\"х\",\"\\\\cyrchar\\\\cyrc\":\"ц\",\"\\\\cyrchar\\\\cyrch\":\"ч\",\"\\\\cyrchar\\\\cyrsh\":\"ш\",\"\\\\cyrchar\\\\cyrshch\":\"щ\",\"\\\\cyrchar\\\\cyrhrdsn\":\"ъ\",\"\\\\cyrchar\\\\cyrery\":\"ы\",\"\\\\cyrchar\\\\cyrsftsn\":\"ь\",\"\\\\cyrchar\\\\cyrerev\":\"э\",\"\\\\cyrchar\\\\cyryu\":\"ю\",\"\\\\cyrchar\\\\cyrya\":\"я\",\"\\\\cyrchar\\\\cyryo\":\"ё\",\"\\\\cyrchar\\\\cyrdje\":\"ђ\",\"\\\\cyrchar{\\\\'\\\\cyrg}\":\"ѓ\",\"\\\\cyrchar\\\\cyrie\":\"є\",\"\\\\cyrchar\\\\cyrdze\":\"ѕ\",\"\\\\cyrchar\\\\cyrii\":\"і\",\"\\\\cyrchar\\\\cyryi\":\"ї\",\"\\\\cyrchar\\\\cyrje\":\"ј\",\"\\\\cyrchar\\\\cyrlje\":\"љ\",\"\\\\cyrchar\\\\cyrnje\":\"њ\",\"\\\\cyrchar\\\\cyrtshe\":\"ћ\",\"\\\\cyrchar{\\\\'\\\\cyrk}\":\"ќ\",\"\\\\cyrchar\\\\cyrushrt\":\"ў\",\"\\\\cyrchar\\\\cyrdzhe\":\"џ\",\"\\\\cyrchar\\\\CYROMEGA\":\"Ѡ\",\"\\\\cyrchar\\\\cyromega\":\"ѡ\",\"\\\\cyrchar\\\\CYRYAT\":\"Ѣ\",\"\\\\cyrchar\\\\CYRIOTE\":\"Ѥ\",\"\\\\cyrchar\\\\cyriote\":\"ѥ\",\"\\\\cyrchar\\\\CYRLYUS\":\"Ѧ\",\"\\\\cyrchar\\\\cyrlyus\":\"ѧ\",\"\\\\cyrchar\\\\CYRIOTLYUS\":\"Ѩ\",\"\\\\cyrchar\\\\cyriotlyus\":\"ѩ\",\"\\\\cyrchar\\\\CYRBYUS\":\"Ѫ\",\"\\\\cyrchar\\\\CYRIOTBYUS\":\"Ѭ\",\"\\\\cyrchar\\\\cyriotbyus\":\"ѭ\",\"\\\\cyrchar\\\\CYRKSI\":\"Ѯ\",\"\\\\cyrchar\\\\cyrksi\":\"ѯ\",\"\\\\cyrchar\\\\CYRPSI\":\"Ѱ\",\"\\\\cyrchar\\\\cyrpsi\":\"ѱ\",\"\\\\cyrchar\\\\CYRFITA\":\"Ѳ\",\"\\\\cyrchar\\\\CYRIZH\":\"Ѵ\",\"\\\\cyrchar\\\\CYRUK\":\"Ѹ\",\"\\\\cyrchar\\\\cyruk\":\"ѹ\",\"\\\\cyrchar\\\\CYROMEGARND\":\"Ѻ\",\"\\\\cyrchar\\\\cyromegarnd\":\"ѻ\",\"\\\\cyrchar\\\\CYROMEGATITLO\":\"Ѽ\",\"\\\\cyrchar\\\\cyromegatitlo\":\"ѽ\",\"\\\\cyrchar\\\\CYROT\":\"Ѿ\",\"\\\\cyrchar\\\\cyrot\":\"ѿ\",\"\\\\cyrchar\\\\CYRKOPPA\":\"Ҁ\",\"\\\\cyrchar\\\\cyrkoppa\":\"ҁ\",\"\\\\cyrchar\\\\cyrthousands\":\"҂\",\"\\\\cyrchar\\\\cyrhundredthousands\":\"҈\",\"\\\\cyrchar\\\\cyrmillions\":\"҉\",\"\\\\cyrchar\\\\CYRSEMISFTSN\":\"Ҍ\",\"\\\\cyrchar\\\\cyrsemisftsn\":\"ҍ\",\"\\\\cyrchar\\\\CYRRTICK\":\"Ҏ\",\"\\\\cyrchar\\\\cyrrtick\":\"ҏ\",\"\\\\cyrchar\\\\CYRGUP\":\"Ґ\",\"\\\\cyrchar\\\\cyrgup\":\"ґ\",\"\\\\cyrchar\\\\CYRGHCRS\":\"Ғ\",\"\\\\cyrchar\\\\cyrghcrs\":\"ғ\",\"\\\\cyrchar\\\\CYRGHK\":\"Ҕ\",\"\\\\cyrchar\\\\cyrghk\":\"ҕ\",\"\\\\cyrchar\\\\CYRZHDSC\":\"Җ\",\"\\\\cyrchar\\\\cyrzhdsc\":\"җ\",\"\\\\cyrchar\\\\CYRZDSC\":\"Ҙ\",\"\\\\cyrchar\\\\cyrzdsc\":\"ҙ\",\"\\\\cyrchar\\\\CYRKDSC\":\"Қ\",\"\\\\cyrchar\\\\cyrkdsc\":\"қ\",\"\\\\cyrchar\\\\CYRKVCRS\":\"Ҝ\",\"\\\\cyrchar\\\\cyrkvcrs\":\"ҝ\",\"\\\\cyrchar\\\\CYRKHCRS\":\"Ҟ\",\"\\\\cyrchar\\\\cyrkhcrs\":\"ҟ\",\"\\\\cyrchar\\\\CYRKBEAK\":\"Ҡ\",\"\\\\cyrchar\\\\cyrkbeak\":\"ҡ\",\"\\\\cyrchar\\\\CYRNDSC\":\"Ң\",\"\\\\cyrchar\\\\cyrndsc\":\"ң\",\"\\\\cyrchar\\\\CYRNG\":\"Ҥ\",\"\\\\cyrchar\\\\cyrng\":\"ҥ\",\"\\\\cyrchar\\\\CYRPHK\":\"Ҧ\",\"\\\\cyrchar\\\\cyrphk\":\"ҧ\",\"\\\\cyrchar\\\\CYRABHHA\":\"Ҩ\",\"\\\\cyrchar\\\\cyrabhha\":\"ҩ\",\"\\\\cyrchar\\\\CYRSDSC\":\"Ҫ\",\"\\\\cyrchar\\\\cyrsdsc\":\"ҫ\",\"\\\\cyrchar\\\\CYRTDSC\":\"Ҭ\",\"\\\\cyrchar\\\\cyrtdsc\":\"ҭ\",\"\\\\cyrchar\\\\CYRY\":\"Ү\",\"\\\\cyrchar\\\\cyry\":\"ү\",\"\\\\cyrchar\\\\CYRYHCRS\":\"Ұ\",\"\\\\cyrchar\\\\cyryhcrs\":\"ұ\",\"\\\\cyrchar\\\\CYRHDSC\":\"Ҳ\",\"\\\\cyrchar\\\\cyrhdsc\":\"ҳ\",\"\\\\cyrchar\\\\CYRTETSE\":\"Ҵ\",\"\\\\cyrchar\\\\cyrtetse\":\"ҵ\",\"\\\\cyrchar\\\\CYRCHRDSC\":\"Ҷ\",\"\\\\cyrchar\\\\cyrchrdsc\":\"ҷ\",\"\\\\cyrchar\\\\CYRCHVCRS\":\"Ҹ\",\"\\\\cyrchar\\\\cyrchvcrs\":\"ҹ\",\"\\\\cyrchar\\\\CYRSHHA\":\"Һ\",\"\\\\cyrchar\\\\cyrshha\":\"һ\",\"\\\\cyrchar\\\\CYRABHCH\":\"Ҽ\",\"\\\\cyrchar\\\\cyrabhch\":\"ҽ\",\"\\\\cyrchar\\\\CYRABHCHDSC\":\"Ҿ\",\"\\\\cyrchar\\\\cyrabhchdsc\":\"ҿ\",\"\\\\cyrchar\\\\CYRpalochka\":\"Ӏ\",\"\\\\cyrchar\\\\CYRKHK\":\"Ӄ\",\"\\\\cyrchar\\\\cyrkhk\":\"ӄ\",\"\\\\cyrchar\\\\CYRNHK\":\"Ӈ\",\"\\\\cyrchar\\\\cyrnhk\":\"ӈ\",\"\\\\cyrchar\\\\CYRCHLDSC\":\"Ӌ\",\"\\\\cyrchar\\\\cyrchldsc\":\"ӌ\",\"\\\\cyrchar\\\\CYRAE\":\"Ӕ\",\"\\\\cyrchar\\\\cyrae\":\"ӕ\",\"\\\\cyrchar\\\\CYRSCHWA\":\"Ә\",\"\\\\cyrchar\\\\cyrschwa\":\"ә\",\"\\\\cyrchar\\\\CYRABHDZE\":\"Ӡ\",\"\\\\cyrchar\\\\cyrabhdze\":\"ӡ\",\"\\\\cyrchar\\\\CYROTLD\":\"Ө\",\"\\\\cyrchar\\\\cyrotld\":\"ө\",\"\\\\\\\\backslash\":\"ࡱ\",\"\\\\textsuperscript{a}\":\"ᵃ\",\"^{a}\":\"ᵃ\",\"\\\\textsuperscript{b}\":\"ᵇ\",\"^{b}\":\"ᵇ\",\"\\\\textsuperscript{d}\":\"ᵈ\",\"^{d}\":\"ᵈ\",\"\\\\textsuperscript{e}\":\"ᵉ\",\"^{e}\":\"ᵉ\",\"\\\\textsuperscript{g}\":\"ᵍ\",\"^{g}\":\"ᵍ\",\"\\\\textsuperscript{k}\":\"ᵏ\",\"^{k}\":\"ᵏ\",\"\\\\textsuperscript{m}\":\"ᵐ\",\"^{m}\":\"ᵐ\",\"\\\\textsuperscript{o}\":\"ᵒ\",\"^{o}\":\"ᵒ\",\"\\\\textsuperscript{p}\":\"ᵖ\",\"^{p}\":\"ᵖ\",\"\\\\textsuperscript{t}\":\"ᵗ\",\"^{t}\":\"ᵗ\",\"\\\\textsuperscript{u}\":\"ᵘ\",\"^{u}\":\"ᵘ\",\"\\\\textsuperscript{v}\":\"ᵛ\",\"^{v}\":\"ᵛ\",\"\\\\textsuperscript{c}\":\"ᶜ\",\"^{c}\":\"ᶜ\",\"\\\\textsuperscript{f}\":\"ᶠ\",\"^{f}\":\"ᶠ\",\"\\\\textsuperscript{z}\":\"ᶻ\",\"^{z}\":\"ᶻ\",\"\\\\.B\":\"Ḃ\",\"\\\\.b\":\"ḃ\",\"\\\\d{B}\":\"Ḅ\",\"\\\\d{b}\":\"ḅ\",\"\\\\b{B}\":\"Ḇ\",\"\\\\b{b}\":\"ḇ\",\"\\\\.D\":\"Ḋ\",\"\\\\.d\":\"ḋ\",\"\\\\d{D}\":\"Ḍ\",\"\\\\d{d}\":\"ḍ\",\"\\\\b{D}\":\"Ḏ\",\"\\\\b{d}\":\"ḏ\",\"\\\\c{D}\":\"Ḑ\",\"\\\\c{d}\":\"ḑ\",\"\\\\c{\\\\u{E}}\":\"Ḝ\",\"\\\\c{\\\\u{e}}\":\"ḝ\",\"\\\\.F\":\"Ḟ\",\"\\\\.f\":\"ḟ\",\"\\\\=G\":\"Ḡ\",\"\\\\=g\":\"ḡ\",\"\\\\.H\":\"Ḣ\",\"\\\\.h\":\"ḣ\",\"\\\\d{H}\":\"Ḥ\",\"\\\\d{h}\":\"ḥ\",\"\\\\\\\"H\":\"Ḧ\",\"\\\\\\\"h\":\"ḧ\",\"\\\\c{H}\":\"Ḩ\",\"\\\\c{h}\":\"ḩ\",\"\\\\'K\":\"Ḱ\",\"\\\\'k\":\"ḱ\",\"\\\\d{K}\":\"Ḳ\",\"\\\\d{k}\":\"ḳ\",\"\\\\b{K}\":\"Ḵ\",\"\\\\b{k}\":\"ḵ\",\"\\\\d{L}\":\"Ḷ\",\"\\\\d{l}\":\"ḷ\",\"\\\\b{L}\":\"Ḻ\",\"\\\\b{l}\":\"ḻ\",\"\\\\'M\":\"Ḿ\",\"\\\\'m\":\"ḿ\",\"\\\\.M\":\"Ṁ\",\"\\\\.m\":\"ṁ\",\"\\\\d{M}\":\"Ṃ\",\"\\\\d{m}\":\"ṃ\",\"\\\\.N\":\"Ṅ\",\"\\\\.n\":\"ṅ\",\"\\\\d{N}\":\"Ṇ\",\"\\\\d{n}\":\"ṇ\",\"\\\\b{N}\":\"Ṉ\",\"\\\\b{n}\":\"ṉ\",\"\\\\'P\":\"Ṕ\",\"\\\\'p\":\"ṕ\",\"\\\\.P\":\"Ṗ\",\"\\\\.p\":\"ṗ\",\"\\\\.R\":\"Ṙ\",\"\\\\.r\":\"ṙ\",\"\\\\d{R}\":\"Ṛ\",\"\\\\d{r}\":\"ṛ\",\"\\\\b{R}\":\"Ṟ\",\"\\\\b{r}\":\"ṟ\",\"\\\\.S\":\"Ṡ\",\"\\\\.s\":\"ṡ\",\"\\\\d{S}\":\"Ṣ\",\"\\\\d{s}\":\"ṣ\",\"\\\\.T\":\"Ṫ\",\"\\\\.t\":\"ṫ\",\"\\\\d{T}\":\"Ṭ\",\"\\\\d{t}\":\"ṭ\",\"\\\\b{T}\":\"Ṯ\",\"\\\\b{t}\":\"ṯ\",\"\\\\~V\":\"Ṽ\",\"\\\\~v\":\"ṽ\",\"\\\\d{V}\":\"Ṿ\",\"\\\\d{v}\":\"ṿ\",\"\\\\`W\":\"Ẁ\",\"\\\\`w\":\"ẁ\",\"\\\\'W\":\"Ẃ\",\"\\\\'w\":\"ẃ\",\"\\\\\\\"W\":\"Ẅ\",\"\\\\\\\"w\":\"ẅ\",\"\\\\.W\":\"Ẇ\",\"\\\\.w\":\"ẇ\",\"\\\\d{W}\":\"Ẉ\",\"\\\\d{w}\":\"ẉ\",\"\\\\.X\":\"Ẋ\",\"\\\\.x\":\"ẋ\",\"\\\\\\\"X\":\"Ẍ\",\"\\\\\\\"x\":\"ẍ\",\"\\\\.Y\":\"Ẏ\",\"\\\\.y\":\"ẏ\",\"\\\\^Z\":\"Ẑ\",\"\\\\^z\":\"ẑ\",\"\\\\d{Z}\":\"Ẓ\",\"\\\\d{z}\":\"ẓ\",\"\\\\b{Z}\":\"Ẕ\",\"\\\\b{z}\":\"ẕ\",\"\\\\b{h}\":\"ẖ\",\"\\\\\\\"t\":\"ẗ\",\"\\\\r{w}\":\"ẘ\",\"\\\\r{y}\":\"ẙ\",\"\\\\d{A}\":\"Ạ\",\"\\\\d{a}\":\"ạ\",\"\\\\d{E}\":\"Ẹ\",\"\\\\d{e}\":\"ẹ\",\"\\\\~E\":\"Ẽ\",\"\\\\~e\":\"ẽ\",\"\\\\d{I}\":\"Ị\",\"\\\\d{i}\":\"ị\",\"\\\\d{O}\":\"Ọ\",\"\\\\d{o}\":\"ọ\",\"\\\\d{U}\":\"Ụ\",\"\\\\d{u}\":\"ụ\",\"\\\\`Y\":\"Ỳ\",\"\\\\`y\":\"ỳ\",\"\\\\d{Y}\":\"Ỵ\",\"\\\\d{y}\":\"ỵ\",\"\\\\~Y\":\"Ỹ\",\"\\\\~y\":\"ỹ\",\"\\\\hspace{0.6em}\":\" \",\"\\\\hspace{1em}\":\" \",\"\\\\quad\":\" \",\"\\\\;\":\" \",\"\\\\hspace{0.25em}\":\" \",\"\\\\hspace{0.166em}\":\" \",\"\\\\hphantom{0}\":\" \",\"\\\\hphantom{,}\":\" \",\"\\\\,\":\" \",\"\\\\mkern1mu\":\" \",\"\\\\mbox\":\"​\",\"{\\\\aftergroup\\\\ignorespaces}\":\"‌\",\"\\\\textendash\":\"–\",\"\\\\textemdash\":\"—\",\"\\\\rule{1em}{1pt}\":\"―\",\"\\\\horizbar\":\"―\",\"\\\\Vert\":\"‖\",\"\\\\twolowline\":\"‗\",\"\\\\Elzreapos\":\"‛\",\"\\\\quotedblbase\":\"‟\",\"\\\\textdagger\":\"†\",\"\\\\dagger\":\"†\",\"\\\\textdaggerdbl\":\"‡\",\"\\\\ddagger\":\"‡\",\"\\\\textbullet\":\"•\",\"\\\\enleadertwodots\":\"‥\",\"\\\\ldots\":\"…\",\"\\\\textperthousand\":\"‰\",\"\\\\textpertenthousand\":\"‱\",\"{'}\":\"′\",\"{''}\":\"″\",\"{'''}\":\"‴\",\"\\\\backprime\":\"‵\",\"\\\\backdprime\":\"‶\",\"\\\\backtrprime\":\"‷\",\"\\\\caretinsert\":\"‸\",\"\\\\guilsinglleft\":\"‹\",\"\\\\guilsinglright\":\"›\",\"\\\\Exclam\":\"‼\",\"\\\\hyphenbullet\":\"⁃\",\"\\\\fracslash\":\"⁄\",\"\\\\Question\":\"⁇\",\"\\\\closure\":\"⁐\",\"\\\\:\":\" \",\"\\\\nolinebreak\":\"⁠\",\"^{0}\":\"⁰\",\"\\\\textsuperscript{i}\":\"ⁱ\",\"^{i}\":\"ⁱ\",\"^{4}\":\"⁴\",\"^{5}\":\"⁵\",\"^{6}\":\"⁶\",\"^{7}\":\"⁷\",\"^{8}\":\"⁸\",\"^{9}\":\"⁹\",\"^{+}\":\"⁺\",\"^{-}\":\"⁻\",\"^{=}\":\"⁼\",\"^{(}\":\"⁽\",\"^{)}\":\"⁾\",\"\\\\textsuperscript{n}\":\"ⁿ\",\"^{n}\":\"ⁿ\",\"_{0}\":\"₀\",\"_{1}\":\"₁\",\"_{2}\":\"₂\",\"_{3}\":\"₃\",\"_{4}\":\"₄\",\"_{5}\":\"₅\",\"_{6}\":\"₆\",\"_{7}\":\"₇\",\"_{8}\":\"₈\",\"_{9}\":\"₉\",\"_{+}\":\"₊\",\"_{-}\":\"₋\",\"_{=}\":\"₌\",\"_{(}\":\"₍\",\"_{)}\":\"₎\",\"\\\\textsubscript{a}\":\"ₐ\",\"_{a}\":\"ₐ\",\"\\\\textsubscript{e}\":\"ₑ\",\"_{e}\":\"ₑ\",\"\\\\textsubscript{o}\":\"ₒ\",\"_{o}\":\"ₒ\",\"\\\\textsubscript{x}\":\"ₓ\",\"_{x}\":\"ₓ\",\"\\\\textsubscript{\\\\textschwa}\":\"ₔ\",\"\\\\textsubscript{h}\":\"ₕ\",\"_{h}\":\"ₕ\",\"\\\\textsubscript{k}\":\"ₖ\",\"_{k}\":\"ₖ\",\"\\\\textsubscript{l}\":\"ₗ\",\"_{l}\":\"ₗ\",\"\\\\textsubscript{m}\":\"ₘ\",\"_{m}\":\"ₘ\",\"\\\\textsubscript{n}\":\"ₙ\",\"_{n}\":\"ₙ\",\"\\\\textsubscript{p}\":\"ₚ\",\"_{p}\":\"ₚ\",\"\\\\textsubscript{s}\":\"ₛ\",\"_{s}\":\"ₛ\",\"\\\\textsubscript{t}\":\"ₜ\",\"_{t}\":\"ₜ\",\"\\\\ensuremath{\\\\Elzpes}\":\"₧\",\"\\\\texteuro\":\"€\",\"\\\\euro\":\"€\",\"\\\\lvec\":\"⃐\",\"\\\\vertoverlay\":\"⃒\",\"\\\\LVec\":\"⃖\",\"\\\\vec\":\"⃗\",\"\\\\dddot\":\"⃛\",\"\\\\ddddot\":\"⃜\",\"\\\\enclosecircle\":\"⃝\",\"\\\\enclosesquare\":\"⃞\",\"\\\\enclosediamond\":\"⃟\",\"\\\\overleftrightarrow\":\"⃡\",\"\\\\enclosetriangle\":\"⃤\",\"\\\\annuity\":\"⃧\",\"\\\\threeunderdot\":\"⃨\",\"\\\\widebridgeabove\":\"⃩\",\"\\\\underrightharpoondown\":\"⃬\",\"\\\\underleftharpoondown\":\"⃭\",\"\\\\underleftarrow\":\"⃮\",\"\\\\underrightarrow\":\"⃯\",\"\\\\asteraccent\":\"⃰\",\"\\\\mathbb{C}\":\"ℂ\",\"\\\\textcelsius\":\"℃\",\"\\\\Euler\":\"ℇ\",\"\\\\mathscr{g}\":\"ℊ\",\"\\\\mathscr{H}\":\"ℋ\",\"\\\\mathfrak{H}\":\"ℌ\",\"\\\\mathbb{H}\":\"ℍ\",\"\\\\Planckconst\":\"ℎ\",\"\\\\hslash\":\"ℏ\",\"\\\\mathscr{I}\":\"ℐ\",\"\\\\mathfrak{I}\":\"ℑ\",\"\\\\mathscr{L}\":\"ℒ\",\"\\\\mathscr{l}\":\"ℓ\",\"\\\\mathbb{N}\":\"ℕ\",\"\\\\cyrchar\\\\textnumero\":\"№\",\"\\\\textcircledP\":\"℗\",\"\\\\wp\":\"℘\",\"\\\\mathbb{P}\":\"ℙ\",\"\\\\mathbb{Q}\":\"ℚ\",\"\\\\mathscr{R}\":\"ℛ\",\"\\\\mathfrak{R}\":\"ℜ\",\"\\\\mathbb{R}\":\"ℝ\",\"\\\\Elzxrat\":\"℞\",\"\\\\textservicemark\":\"℠\",\"\\\\texttrademark\":\"™\",\"\\\\mathbb{Z}\":\"ℤ\",\"\\\\mho\":\"℧\",\"\\\\mathfrak{Z}\":\"ℨ\",\"\\\\textriota\":\"℩\",\"\\\\Angstroem\":\"Å\",\"\\\\mathscr{B}\":\"ℬ\",\"\\\\mathfrak{C}\":\"ℭ\",\"\\\\textestimated\":\"℮\",\"\\\\mathscr{e}\":\"ℯ\",\"\\\\mathscr{E}\":\"ℰ\",\"\\\\mathscr{F}\":\"ℱ\",\"\\\\Finv\":\"Ⅎ\",\"\\\\mathscr{M}\":\"ℳ\",\"\\\\mathscr{o}\":\"ℴ\",\"\\\\aleph\":\"ℵ\",\"\\\\beth\":\"ℶ\",\"\\\\gimel\":\"ℷ\",\"\\\\daleth\":\"ℸ\",\"\\\\mathbb{\\\\pi}\":\"ℼ\",\"\\\\mathbb{\\\\gamma}\":\"ℽ\",\"\\\\mathbb{\\\\Gamma}\":\"ℾ\",\"\\\\mathbb{\\\\Pi}\":\"ℿ\",\"\\\\mathbb{\\\\Sigma}\":\"⅀\",\"\\\\Game\":\"⅁\",\"\\\\sansLturned\":\"⅂\",\"\\\\sansLmirrored\":\"⅃\",\"\\\\Yup\":\"⅄\",\"\\\\CapitalDifferentialD\":\"ⅅ\",\"\\\\DifferentialD\":\"ⅆ\",\"\\\\ExponetialE\":\"ⅇ\",\"\\\\ComplexI\":\"ⅈ\",\"\\\\ComplexJ\":\"ⅉ\",\"\\\\PropertyLine\":\"⅊\",\"\\\\invamp\":\"⅋\",\"\\\\frac{1}{7}\":\"⅐\",\"\\\\textfrac{1}{7}\":\"⅐\",\"\\\\frac{1}{9}\":\"⅑\",\"\\\\textfrac{1}{9}\":\"⅑\",\"\\\\frac{1}{10}\":\"⅒\",\"\\\\textfrac{1}{10}\":\"⅒\",\"\\\\frac{1}{3}\":\"⅓\",\"\\\\textfrac{1}{3}\":\"⅓\",\"\\\\frac{2}{3}\":\"⅔\",\"\\\\textfrac{2}{3}\":\"⅔\",\"\\\\frac{1}{5}\":\"⅕\",\"\\\\textfrac{1}{5}\":\"⅕\",\"\\\\frac{2}{5}\":\"⅖\",\"\\\\textfrac{2}{5}\":\"⅖\",\"\\\\frac{3}{5}\":\"⅗\",\"\\\\textfrac{3}{5}\":\"⅗\",\"\\\\frac{4}{5}\":\"⅘\",\"\\\\textfrac{4}{5}\":\"⅘\",\"\\\\frac{1}{6}\":\"⅙\",\"\\\\textfrac{1}{6}\":\"⅙\",\"\\\\frac{5}{6}\":\"⅚\",\"\\\\textfrac{5}{6}\":\"⅚\",\"\\\\frac{1}{8}\":\"⅛\",\"\\\\textfrac{1}{8}\":\"⅛\",\"\\\\frac{3}{8}\":\"⅜\",\"\\\\textfrac{3}{8}\":\"⅜\",\"\\\\frac{5}{8}\":\"⅝\",\"\\\\textfrac{5}{8}\":\"⅝\",\"\\\\frac{7}{8}\":\"⅞\",\"\\\\textfrac{7}{8}\":\"⅞\",\"\\\\frac{1}\":\"⅟\",\"\\\\textfrac{1}\":\"⅟\",\"\\\\frac{0}{3}\":\"↉\",\"\\\\textfrac{0}{3}\":\"↉\",\"\\\\leftarrow\":\"←\",\"\\\\uparrow\":\"↑\",\"\\\\textrightarrow\":\"→\",\"\\\\rightarrow\":\"→\",\"\\\\to\":\"→\",\"\\\\downarrow\":\"↓\",\"\\\\leftrightarrow\":\"↔\",\"\\\\updownarrow\":\"↕\",\"\\\\nwarrow\":\"↖\",\"\\\\nearrow\":\"↗\",\"\\\\searrow\":\"↘\",\"\\\\swarrow\":\"↙\",\"\\\\nleftarrow\":\"↚\",\"\\\\nrightarrow\":\"↛\",\"\\\\arrowwaveleft\":\"↜\",\"\\\\arrowwaveright\":\"↝\",\"\\\\twoheadleftarrow\":\"↞\",\"\\\\twoheaduparrow\":\"↟\",\"\\\\twoheadrightarrow\":\"↠\",\"\\\\twoheaddownarrow\":\"↡\",\"\\\\leftarrowtail\":\"↢\",\"\\\\rightarrowtail\":\"↣\",\"\\\\mapsfrom\":\"↤\",\"\\\\MapsUp\":\"↥\",\"\\\\mapsto\":\"↦\",\"\\\\MapsDown\":\"↧\",\"\\\\updownarrowbar\":\"↨\",\"\\\\hookleftarrow\":\"↩\",\"\\\\hookrightarrow\":\"↪\",\"\\\\looparrowleft\":\"↫\",\"\\\\looparrowright\":\"↬\",\"\\\\leftrightsquigarrow\":\"↭\",\"\\\\nleftrightarrow\":\"↮\",\"\\\\lightning\":\"↯\",\"\\\\Lsh\":\"↰\",\"\\\\Rsh\":\"↱\",\"\\\\dlsh\":\"↲\",\"\\\\reflectbox{\\\\carriagereturn}\":\"↳\",\"\\\\linefeed\":\"↴\",\"\\\\carriagereturn\":\"↵\",\"\\\\curvearrowleft\":\"↶\",\"\\\\curvearrowright\":\"↷\",\"\\\\barovernorthwestarrow\":\"↸\",\"\\\\barleftarrowrightarrowba\":\"↹\",\"\\\\circlearrowleft\":\"↺\",\"\\\\circlearrowright\":\"↻\",\"\\\\leftharpoonup\":\"↼\",\"\\\\leftharpoondown\":\"↽\",\"\\\\upharpoonright\":\"↾\",\"\\\\upharpoonleft\":\"↿\",\"\\\\rightharpoonup\":\"⇀\",\"\\\\rightharpoondown\":\"⇁\",\"\\\\downharpoonright\":\"⇂\",\"\\\\downharpoonleft\":\"⇃\",\"\\\\rightleftarrows\":\"⇄\",\"\\\\dblarrowupdown\":\"⇅\",\"\\\\leftrightarrows\":\"⇆\",\"\\\\leftleftarrows\":\"⇇\",\"\\\\upuparrows\":\"⇈\",\"\\\\rightrightarrows\":\"⇉\",\"\\\\downdownarrows\":\"⇊\",\"\\\\leftrightharpoons\":\"⇋\",\"\\\\rightleftharpoons\":\"⇌\",\"\\\\nLeftarrow\":\"⇍\",\"\\\\nLeftrightarrow\":\"⇎\",\"\\\\nRightarrow\":\"⇏\",\"\\\\Leftarrow\":\"⇐\",\"\\\\Uparrow\":\"⇑\",\"\\\\Rightarrow\":\"⇒\",\"\\\\Downarrow\":\"⇓\",\"\\\\Leftrightarrow\":\"⇔\",\"\\\\Updownarrow\":\"⇕\",\"\\\\Nwarrow\":\"⇖\",\"\\\\Nearrow\":\"⇗\",\"\\\\Searrow\":\"⇘\",\"\\\\Swarrow\":\"⇙\",\"\\\\Lleftarrow\":\"⇚\",\"\\\\Rrightarrow\":\"⇛\",\"\\\\leftsquigarrow\":\"⇜\",\"\\\\rightsquigarrow\":\"⇝\",\"\\\\nHuparrow\":\"⇞\",\"\\\\nHdownarrow\":\"⇟\",\"\\\\dashleftarrow\":\"⇠\",\"\\\\updasharrow\":\"⇡\",\"\\\\dashrightarrow\":\"⇢\",\"\\\\downdasharrow\":\"⇣\",\"\\\\LeftArrowBar\":\"⇤\",\"\\\\RightArrowBar\":\"⇥\",\"\\\\leftwhitearrow\":\"⇦\",\"\\\\upwhitearrow\":\"⇧\",\"\\\\rightwhitearrow\":\"⇨\",\"\\\\downwhitearrow\":\"⇩\",\"\\\\whitearrowupfrombar\":\"⇪\",\"\\\\circleonrightarrow\":\"⇴\",\"\\\\DownArrowUpArrow\":\"⇵\",\"\\\\rightthreearrows\":\"⇶\",\"\\\\nvleftarrow\":\"⇷\",\"\\\\pfun\":\"⇸\",\"\\\\nvleftrightarrow\":\"⇹\",\"\\\\nVleftarrow\":\"⇺\",\"\\\\ffun\":\"⇻\",\"\\\\nVleftrightarrow\":\"⇼\",\"\\\\leftarrowtriangle\":\"⇽\",\"\\\\rightarrowtriangle\":\"⇾\",\"\\\\leftrightarrowtriangle\":\"⇿\",\"\\\\forall\":\"∀\",\"\\\\complement\":\"∁\",\"\\\\partial\":\"∂\",\"\\\\exists\":\"∃\",\"\\\\nexists\":\"∄\",\"\\\\varnothing\":\"∅\",\"\\\\increment\":\"∆\",\"\\\\nabla\":\"∇\",\"\\\\in\":\"∈\",\"\\\\not\\\\in\":\"∉\",\"\\\\smallin\":\"∊\",\"\\\\ni\":\"∋\",\"\\\\not\\\\ni\":\"∌\",\"\\\\smallni\":\"∍\",\"\\\\QED\":\"∎\",\"\\\\prod\":\"∏\",\"\\\\coprod\":\"∐\",\"\\\\sum\":\"∑\",\"\\\\mp\":\"∓\",\"\\\\dotplus\":\"∔\",\"\\\\setminus\":\"∖\",\"{_\\\\ast}\":\"∗\",\"\\\\circ\":\"∘\",\"\\\\bullet\":\"∙\",\"\\\\surd\":\"√\",\"\\\\sqrt[3]\":\"∛\",\"\\\\sqrt[4]\":\"∜\",\"\\\\propto\":\"∝\",\"\\\\infty\":\"∞\",\"\\\\rightangle\":\"∟\",\"\\\\angle\":\"∠\",\"\\\\measuredangle\":\"∡\",\"\\\\sphericalangle\":\"∢\",\"\\\\mid\":\"∣\",\"\\\\nmid\":\"∤\",\"\\\\parallel\":\"∥\",\"\\\\nparallel\":\"∦\",\"\\\\wedge\":\"∧\",\"\\\\vee\":\"∨\",\"\\\\cap\":\"∩\",\"\\\\cup\":\"∪\",\"\\\\int\":\"∫\",\"{\\\\int\\\\!\\\\int}\":\"∬\",\"{\\\\int\\\\!\\\\int\\\\!\\\\int}\":\"∭\",\"\\\\oint\":\"∮\",\"\\\\surfintegral\":\"∯\",\"\\\\volintegral\":\"∰\",\"\\\\clwintegral\":\"∱\",\"\\\\lcirclerightint\":\"∲\",\"\\\\rcirclerightint\":\"∳\",\"\\\\therefore\":\"∴\",\"\\\\because\":\"∵\",\"\\\\Colon\":\"∷\",\"\\\\dotdiv\":\"∸\",\"\\\\eqcolon\":\"∹\",\"\\\\mathbin{{:}\\\\!\\\\!{-}\\\\!\\\\!{:}}\":\"∺\",\"\\\\homothetic\":\"∻\",\"\\\\sim\":\"∼\",\"\\\\backsim\":\"∽\",\"\\\\lazysinv\":\"∾\",\"\\\\AC\":\"∿\",\"\\\\wr\":\"≀\",\"\\\\not\\\\sim\":\"≁\",\"\\\\texteqsim\":\"≂\",\"\\\\NotEqualTilde\":\"≂̸\",\"\\\\simeq\":\"≃\",\"\\\\not\\\\simeq\":\"≄\",\"\\\\cong\":\"≅\",\"\\\\approxnotequal\":\"≆\",\"\\\\not\\\\cong\":\"≇\",\"\\\\approx\":\"≈\",\"\\\\not\\\\approx\":\"≉\",\"\\\\approxeq\":\"≊\",\"\\\\tildetrpl\":\"≋\",\"\\\\not\\\\apid\":\"≋̸\",\"\\\\allequal\":\"≌\",\"\\\\asymp\":\"≍\",\"\\\\Bumpeq\":\"≎\",\"\\\\NotHumpDownHump\":\"≎̸\",\"\\\\bumpeq\":\"≏\",\"\\\\NotHumpEqual\":\"≏̸\",\"\\\\doteq\":\"≐\",\"\\\\not\\\\doteq\":\"≐̸\",\"\\\\doteqdot\":\"≑\",\"\\\\fallingdotseq\":\"≒\",\"\\\\risingdotseq\":\"≓\",\"\\\\coloneq\":\"≔\",\"\\\\eqcirc\":\"≖\",\"\\\\circeq\":\"≗\",\"\\\\arceq\":\"≘\",\"\\\\estimates\":\"≙\",\"\\\\starequal\":\"≛\",\"\\\\triangleq\":\"≜\",\"\\\\eqdef\":\"≝\",\"\\\\measeq\":\"≞\",\"\\\\neq\":\"≠\",\"\\\\equiv\":\"≡\",\"\\\\not\\\\equiv\":\"≢\",\"\\\\Equiv\":\"≣\",\"\\\\leq\":\"≤\",\"\\\\le\":\"≤\",\"\\\\geq\":\"≥\",\"\\\\leqq\":\"≦\",\"\\\\geqq\":\"≧\",\"\\\\lneqq\":\"≨\",\"\\\\lvertneqq\":\"≨︀\",\"\\\\gneqq\":\"≩\",\"\\\\gvertneqq\":\"≩︀\",\"\\\\ll\":\"≪\",\"\\\\NotLessLess\":\"≪̸\",\"\\\\gg\":\"≫\",\"\\\\NotGreaterGreater\":\"≫̸\",\"\\\\between\":\"≬\",\"{\\\\not\\\\kern-0.3em\\\\times}\":\"≭\",\"\\\\not<\":\"≮\",\"\\\\not>\":\"≯\",\"\\\\not\\\\leq\":\"≰\",\"\\\\not\\\\geq\":\"≱\",\"\\\\lessequivlnt\":\"≲\",\"\\\\greaterequivlnt\":\"≳\",\"\\\\lessgtr\":\"≶\",\"\\\\gtrless\":\"≷\",\"\\\\notlessgreater\":\"≸\",\"\\\\notgreaterless\":\"≹\",\"\\\\prec\":\"≺\",\"\\\\succ\":\"≻\",\"\\\\preccurlyeq\":\"≼\",\"\\\\succcurlyeq\":\"≽\",\"\\\\NotPrecedesTilde\":\"≾̸\",\"\\\\NotSucceedsTilde\":\"≿̸\",\"\\\\not\\\\prec\":\"⊀\",\"\\\\not\\\\succ\":\"⊁\",\"\\\\subset\":\"⊂\",\"\\\\supset\":\"⊃\",\"\\\\not\\\\subset\":\"⊄\",\"\\\\not\\\\supset\":\"⊅\",\"\\\\subseteq\":\"⊆\",\"\\\\supseteq\":\"⊇\",\"\\\\not\\\\subseteq\":\"⊈\",\"\\\\not\\\\supseteq\":\"⊉\",\"\\\\subsetneq\":\"⊊\",\"\\\\varsubsetneqq\":\"⊊︀\",\"\\\\supsetneq\":\"⊋\",\"\\\\varsupsetneq\":\"⊋︀\",\"\\\\cupleftarrow\":\"⊌\",\"\\\\cupdot\":\"⊍\",\"\\\\uplus\":\"⊎\",\"\\\\sqsubset\":\"⊏\",\"\\\\NotSquareSubset\":\"⊏̸\",\"\\\\sqsupset\":\"⊐\",\"\\\\NotSquareSuperset\":\"⊐̸\",\"\\\\sqsubseteq\":\"⊑\",\"\\\\sqsupseteq\":\"⊒\",\"\\\\sqcap\":\"⊓\",\"\\\\sqcup\":\"⊔\",\"\\\\oplus\":\"⊕\",\"\\\\ominus\":\"⊖\",\"\\\\otimes\":\"⊗\",\"\\\\oslash\":\"⊘\",\"\\\\odot\":\"⊙\",\"\\\\circledcirc\":\"⊚\",\"\\\\circledast\":\"⊛\",\"\\\\circledequal\":\"⊜\",\"\\\\circleddash\":\"⊝\",\"\\\\boxplus\":\"⊞\",\"\\\\boxminus\":\"⊟\",\"\\\\boxtimes\":\"⊠\",\"\\\\boxdot\":\"⊡\",\"\\\\vdash\":\"⊢\",\"\\\\dashv\":\"⊣\",\"\\\\top\":\"⊤\",\"\\\\assert\":\"⊦\",\"\\\\truestate\":\"⊧\",\"\\\\forcesextra\":\"⊨\",\"\\\\Vdash\":\"⊩\",\"\\\\Vvdash\":\"⊪\",\"\\\\VDash\":\"⊫\",\"\\\\nvdash\":\"⊬\",\"\\\\nvDash\":\"⊭\",\"\\\\nVdash\":\"⊮\",\"\\\\nVDash\":\"⊯\",\"\\\\prurel\":\"⊰\",\"\\\\scurel\":\"⊱\",\"\\\\vartriangleleft\":\"⊲\",\"\\\\vartriangleright\":\"⊳\",\"\\\\trianglelefteq\":\"⊴\",\"\\\\trianglerighteq\":\"⊵\",\"\\\\original\":\"⊶\",\"\\\\image\":\"⊷\",\"\\\\multimap\":\"⊸\",\"\\\\hermitconjmatrix\":\"⊹\",\"\\\\intercal\":\"⊺\",\"\\\\veebar\":\"⊻\",\"\\\\barvee\":\"⊽\",\"\\\\rightanglearc\":\"⊾\",\"\\\\varlrtriangle\":\"⊿\",\"\\\\bigcap\":\"⋂\",\"\\\\bigcup\":\"⋃\",\"\\\\diamond\":\"⋄\",\"\\\\cdot\":\"⋅\",\"\\\\star\":\"⋆\",\"\\\\divideontimes\":\"⋇\",\"\\\\bowtie\":\"⋈\",\"\\\\ltimes\":\"⋉\",\"\\\\rtimes\":\"⋊\",\"\\\\leftthreetimes\":\"⋋\",\"\\\\rightthreetimes\":\"⋌\",\"\\\\backsimeq\":\"⋍\",\"\\\\curlyvee\":\"⋎\",\"\\\\curlywedge\":\"⋏\",\"\\\\Subset\":\"⋐\",\"\\\\Supset\":\"⋑\",\"\\\\Cap\":\"⋒\",\"\\\\Cup\":\"⋓\",\"\\\\pitchfork\":\"⋔\",\"\\\\hash\":\"⋕\",\"\\\\lessdot\":\"⋖\",\"\\\\gtrdot\":\"⋗\",\"\\\\verymuchless\":\"⋘\",\"\\\\verymuchgreater\":\"⋙\",\"\\\\lesseqgtr\":\"⋚\",\"\\\\gtreqless\":\"⋛\",\"\\\\eqless\":\"⋜\",\"\\\\eqgtr\":\"⋝\",\"\\\\curlyeqprec\":\"⋞\",\"\\\\curlyeqsucc\":\"⋟\",\"\\\\npreceq\":\"⋠\",\"\\\\nsucceq\":\"⋡\",\"\\\\not\\\\sqsubseteq\":\"⋢\",\"\\\\not\\\\sqsupseteq\":\"⋣\",\"\\\\sqsubsetneq\":\"⋤\",\"\\\\Elzsqspne\":\"⋥\",\"\\\\lnsim\":\"⋦\",\"\\\\gnsim\":\"⋧\",\"\\\\precedesnotsimilar\":\"⋨\",\"\\\\succnsim\":\"⋩\",\"\\\\ntriangleleft\":\"⋪\",\"\\\\ntriangleright\":\"⋫\",\"\\\\ntrianglelefteq\":\"⋬\",\"\\\\ntrianglerighteq\":\"⋭\",\"\\\\vdots\":\"⋮\",\"\\\\cdots\":\"⋯\",\"\\\\upslopeellipsis\":\"⋰\",\"\\\\downslopeellipsis\":\"⋱\",\"\\\\disin\":\"⋲\",\"\\\\varisins\":\"⋳\",\"\\\\isins\":\"⋴\",\"\\\\isindot\":\"⋵\",\"\\\\barin\":\"⋶\",\"\\\\isinobar\":\"⋷\",\"\\\\isinvb\":\"⋸\",\"\\\\isinE\":\"⋹\",\"\\\\nisd\":\"⋺\",\"\\\\varnis\":\"⋻\",\"\\\\nis\":\"⋼\",\"\\\\varniobar\":\"⋽\",\"\\\\niobar\":\"⋾\",\"\\\\bagmember\":\"⋿\",\"\\\\diameter\":\"⌀\",\"\\\\house\":\"⌂\",\"\\\\barwedge\":\"⌅\",\"\\\\varbarwedge\":\"⌅\",\"\\\\perspcorrespond\":\"⌆\",\"\\\\lceil\":\"⌈\",\"\\\\rceil\":\"⌉\",\"\\\\lfloor\":\"⌊\",\"\\\\rfloor\":\"⌋\",\"\\\\invneg\":\"⌐\",\"\\\\wasylozenge\":\"⌑\",\"\\\\profline\":\"⌒\",\"\\\\profsurf\":\"⌓\",\"\\\\recorder\":\"⌕\",\"{\\\\mathchar\\\"2208}\":\"⌖\",\"\\\\viewdata\":\"⌗\",\"\\\\turnednot\":\"⌙\",\"\\\\ulcorner\":\"⌜\",\"\\\\urcorner\":\"⌝\",\"\\\\llcorner\":\"⌞\",\"\\\\lrcorner\":\"⌟\",\"\\\\inttop\":\"⌠\",\"\\\\intbottom\":\"⌡\",\"\\\\frown\":\"⌢\",\"\\\\smile\":\"⌣\",\"\\\\varhexagonlrbonds\":\"⌬\",\"\\\\conictaper\":\"⌲\",\"\\\\topbot\":\"⌶\",\"\\\\APLinv\":\"⌹\",\"\\\\notslash\":\"⌿\",\"\\\\notbackslash\":\"⍀\",\"\\\\APLleftarrowbox\":\"⍇\",\"\\\\APLrightarrowbox\":\"⍈\",\"\\\\invdiameter\":\"⍉\",\"\\\\APLuparrowbox\":\"⍐\",\"\\\\APLboxupcaret\":\"⍓\",\"\\\\APLdownarrowbox\":\"⍗\",\"\\\\APLcomment\":\"⍝\",\"\\\\APLinput\":\"⍞\",\"\\\\APLlog\":\"⍟\",\"\\\\APLboxquestion\":\"⍰\",\"\\\\rangledownzigzagarrow\":\"⍼\",\"\\\\hexagon\":\"⎔\",\"\\\\lparenuend\":\"⎛\",\"\\\\lparenextender\":\"⎜\",\"\\\\lparenlend\":\"⎝\",\"\\\\rparenuend\":\"⎞\",\"\\\\rparenextender\":\"⎟\",\"\\\\rparenlend\":\"⎠\",\"\\\\lbrackuend\":\"⎡\",\"\\\\lbrackextender\":\"⎢\",\"\\\\Elzdlcorn\":\"⎣\",\"\\\\rbrackuend\":\"⎤\",\"\\\\rbrackextender\":\"⎥\",\"\\\\rbracklend\":\"⎦\",\"\\\\lbraceuend\":\"⎧\",\"\\\\lbracemid\":\"⎨\",\"\\\\lbracelend\":\"⎩\",\"\\\\vbraceextender\":\"⎪\",\"\\\\rbraceuend\":\"⎫\",\"\\\\rbracemid\":\"⎬\",\"\\\\rbracelend\":\"⎭\",\"\\\\intextender\":\"⎮\",\"\\\\harrowextender\":\"⎯\",\"\\\\lmoustache\":\"⎰\",\"\\\\rmoustache\":\"⎱\",\"\\\\sumtop\":\"⎲\",\"\\\\sumbottom\":\"⎳\",\"\\\\overbracket\":\"⎴\",\"\\\\underbracket\":\"⎵\",\"\\\\bbrktbrk\":\"⎶\",\"\\\\sqrtbottom\":\"⎷\",\"\\\\lvboxline\":\"⎸\",\"\\\\rvboxline\":\"⎹\",\"\\\\varcarriagereturn\":\"⏎\",\"\\\\overparen\":\"⏜\",\"\\\\underparen\":\"⏝\",\"\\\\overbrace\":\"⏞\",\"\\\\underbrace\":\"⏟\",\"\\\\obrbrak\":\"⏠\",\"\\\\ubrbrak\":\"⏡\",\"\\\\trapezium\":\"⏢\",\"\\\\benzenr\":\"⏣\",\"\\\\strns\":\"⏤\",\"\\\\fltns\":\"⏥\",\"\\\\accurrent\":\"⏦\",\"\\\\elinters\":\"⏧\",\"\\\\textvisiblespace\":\"␣\",\"\\\\ding{172}\":\"①\",\"\\\\ding{173}\":\"②\",\"\\\\ding{174}\":\"③\",\"\\\\ding{175}\":\"④\",\"\\\\ding{176}\":\"⑤\",\"\\\\ding{177}\":\"⑥\",\"\\\\ding{178}\":\"⑦\",\"\\\\ding{179}\":\"⑧\",\"\\\\ding{180}\":\"⑨\",\"\\\\ding{181}\":\"⑩\",\"\\\\circledS\":\"Ⓢ\",\"\\\\Elzdshfnc\":\"┆\",\"\\\\Elzsqfnw\":\"┙\",\"\\\\diagup\":\"╱\",\"\\\\blockuphalf\":\"▀\",\"\\\\blocklowhalf\":\"▄\",\"\\\\blockfull\":\"█\",\"\\\\blocklefthalf\":\"▌\",\"\\\\blockrighthalf\":\"▐\",\"\\\\blockqtrshaded\":\"░\",\"\\\\blockhalfshaded\":\"▒\",\"\\\\blockthreeqtrshaded\":\"▓\",\"\\\\ding{110}\":\"■\",\"\\\\mdlgblksquare\":\"■\",\"\\\\square\":\"□\",\"\\\\Box\":\"□\",\"\\\\squoval\":\"▢\",\"\\\\blackinwhitesquare\":\"▣\",\"\\\\squarehfill\":\"▤\",\"\\\\squarevfill\":\"▥\",\"\\\\squarehvfill\":\"▦\",\"\\\\squarenwsefill\":\"▧\",\"\\\\squareneswfill\":\"▨\",\"\\\\squarecrossfill\":\"▩\",\"\\\\smwhtsquare\":\"▫\",\"\\\\hrectangleblack\":\"▬\",\"\\\\fbox{~~}\":\"▭\",\"\\\\vrectangleblack\":\"▮\",\"\\\\Elzvrecto\":\"▯\",\"\\\\parallelogramblack\":\"▰\",\"\\\\ding{115}\":\"▲\",\"\\\\bigblacktriangleup\":\"▲\",\"\\\\bigtriangleup\":\"△\",\"\\\\blacktriangle\":\"▴\",\"\\\\vartriangle\":\"▵\",\"\\\\RHD\":\"▶\",\"\\\\rhd\":\"▷\",\"\\\\blacktriangleright\":\"▸\",\"\\\\triangleright\":\"▹\",\"\\\\blackpointerright\":\"►\",\"\\\\whitepointerright\":\"▻\",\"\\\\ding{116}\":\"▼\",\"\\\\bigblacktriangledown\":\"▼\",\"\\\\bigtriangledown\":\"▽\",\"\\\\blacktriangledown\":\"▾\",\"\\\\triangledown\":\"▿\",\"\\\\LHD\":\"◀\",\"\\\\lhd\":\"◁\",\"\\\\blacktriangleleft\":\"◂\",\"\\\\triangleleft\":\"◃\",\"\\\\blackpointerleft\":\"◄\",\"\\\\whitepointerleft\":\"◅\",\"\\\\ding{117}\":\"◆\",\"\\\\Diamondblack\":\"◆\",\"\\\\Diamond\":\"◇\",\"\\\\blackinwhitediamond\":\"◈\",\"\\\\fisheye\":\"◉\",\"\\\\lozenge\":\"◊\",\"\\\\dottedcircle\":\"◌\",\"\\\\circlevertfill\":\"◍\",\"\\\\bullseye\":\"◎\",\"\\\\ding{108}\":\"●\",\"\\\\CIRCLE\":\"●\",\"\\\\Elzcirfl\":\"◐\",\"\\\\Elzcirfr\":\"◑\",\"\\\\Elzcirfb\":\"◒\",\"\\\\circletophalfblack\":\"◓\",\"\\\\circleurquadblack\":\"◔\",\"\\\\blackcircleulquadwhite\":\"◕\",\"\\\\LEFTCIRCLE\":\"◖\",\"\\\\ding{119}\":\"◗\",\"\\\\RIGHTCIRCLE\":\"◗\",\"\\\\Elzrvbull\":\"◘\",\"\\\\inversewhitecircle\":\"◙\",\"\\\\invwhiteupperhalfcircle\":\"◚\",\"\\\\invwhitelowerhalfcircle\":\"◛\",\"\\\\ularc\":\"◜\",\"\\\\urarc\":\"◝\",\"\\\\lrarc\":\"◞\",\"\\\\llarc\":\"◟\",\"\\\\topsemicircle\":\"◠\",\"\\\\botsemicircle\":\"◡\",\"\\\\lrblacktriangle\":\"◢\",\"\\\\llblacktriangle\":\"◣\",\"\\\\ulblacktriangle\":\"◤\",\"\\\\urblacktriangle\":\"◥\",\"\\\\smwhtcircle\":\"◦\",\"\\\\Elzsqfl\":\"◧\",\"\\\\Elzsqfr\":\"◨\",\"\\\\squareulblack\":\"◩\",\"\\\\Elzsqfse\":\"◪\",\"\\\\boxbar\":\"◫\",\"\\\\trianglecdot\":\"◬\",\"\\\\triangleleftblack\":\"◭\",\"\\\\trianglerightblack\":\"◮\",\"\\\\bigcirc\":\"◯\",\"\\\\squareulquad\":\"◰\",\"\\\\squarellquad\":\"◱\",\"\\\\squarelrquad\":\"◲\",\"\\\\squareurquad\":\"◳\",\"\\\\circleulquad\":\"◴\",\"\\\\circlellquad\":\"◵\",\"\\\\circlelrquad\":\"◶\",\"\\\\circleurquad\":\"◷\",\"\\\\ultriangle\":\"◸\",\"\\\\urtriangle\":\"◹\",\"\\\\lltriangle\":\"◺\",\"\\\\mdsmwhtsquare\":\"◽\",\"\\\\mdsmblksquare\":\"◾\",\"\\\\lrtriangle\":\"◿\",\"\\\\ding{72}\":\"★\",\"\\\\bigstar\":\"★\",\"\\\\ding{73}\":\"☆\",\"\\\\bigwhitestar\":\"☆\",\"\\\\Sun\":\"☉\",\"\\\\ding{37}\":\"☎\",\"\\\\Square\":\"☐\",\"\\\\CheckedBox\":\"☑\",\"\\\\XBox\":\"☒\",\"\\\\steaming\":\"☕\",\"\\\\ding{42}\":\"☛\",\"\\\\ding{43}\":\"☞\",\"\\\\pointright\":\"☞\",\"\\\\skull\":\"☠\",\"\\\\danger\":\"☡\",\"\\\\radiation\":\"☢\",\"\\\\biohazard\":\"☣\",\"\\\\yinyang\":\"☯\",\"\\\\frownie\":\"☹\",\"\\\\smiley\":\"☺\",\"\\\\blacksmiley\":\"☻\",\"\\\\sun\":\"☼\",\"\\\\rightmoon\":\"☽\",\"\\\\leftmoon\":\"☾\",\"\\\\mercury\":\"☿\",\"\\\\venus\":\"♀\",\"\\\\female\":\"♀\",\"\\\\earth\":\"♁\",\"\\\\male\":\"♂\",\"\\\\jupiter\":\"♃\",\"\\\\saturn\":\"♄\",\"\\\\uranus\":\"♅\",\"\\\\neptune\":\"♆\",\"\\\\pluto\":\"♇\",\"\\\\aries\":\"♈\",\"\\\\taurus\":\"♉\",\"\\\\gemini\":\"♊\",\"\\\\cancer\":\"♋\",\"\\\\leo\":\"♌\",\"\\\\virgo\":\"♍\",\"\\\\libra\":\"♎\",\"\\\\scorpio\":\"♏\",\"\\\\sagittarius\":\"♐\",\"\\\\capricornus\":\"♑\",\"\\\\aquarius\":\"♒\",\"\\\\pisces\":\"♓\",\"\\\\ding{171}\":\"♠\",\"\\\\spadesuit\":\"♠\",\"\\\\heartsuit\":\"♡\",\"\\\\ding{168}\":\"♣\",\"\\\\clubsuit\":\"♣\",\"\\\\varspadesuit\":\"♤\",\"\\\\ding{170}\":\"♥\",\"\\\\varheartsuit\":\"♥\",\"\\\\ding{169}\":\"♦\",\"\\\\vardiamondsuit\":\"♦\",\"\\\\varclubsuit\":\"♧\",\"\\\\quarternote\":\"♩\",\"\\\\eighthnote\":\"♪\",\"\\\\twonotes\":\"♫\",\"\\\\sixteenthnote\":\"♬\",\"\\\\flat\":\"♭\",\"\\\\natural\":\"♮\",\"\\\\sharp\":\"♯\",\"\\\\recycle\":\"♻\",\"\\\\acidfree\":\"♾\",\"\\\\dicei\":\"⚀\",\"\\\\diceii\":\"⚁\",\"\\\\diceiii\":\"⚂\",\"\\\\diceiv\":\"⚃\",\"\\\\dicev\":\"⚄\",\"\\\\dicevi\":\"⚅\",\"\\\\circledrightdot\":\"⚆\",\"\\\\circledtwodots\":\"⚇\",\"\\\\blackcircledrightdot\":\"⚈\",\"\\\\blackcircledtwodots\":\"⚉\",\"\\\\anchor\":\"⚓\",\"\\\\swords\":\"⚔\",\"\\\\warning\":\"⚠\",\"\\\\Hermaphrodite\":\"⚥\",\"\\\\medcirc\":\"⚪\",\"\\\\medbullet\":\"⚫\",\"\\\\mdsmwhtcircle\":\"⚬\",\"\\\\neuter\":\"⚲\",\"\\\\ding{33}\":\"✁\",\"\\\\ding{34}\":\"✂\",\"\\\\ding{35}\":\"✃\",\"\\\\ding{36}\":\"✄\",\"\\\\ding{38}\":\"✆\",\"\\\\ding{39}\":\"✇\",\"\\\\ding{40}\":\"✈\",\"\\\\ding{41}\":\"✉\",\"\\\\ding{44}\":\"✌\",\"\\\\ding{45}\":\"✍\",\"\\\\ding{46}\":\"✎\",\"\\\\pencil\":\"✎\",\"\\\\ding{47}\":\"✏\",\"\\\\ding{48}\":\"✐\",\"\\\\ding{49}\":\"✑\",\"\\\\ding{50}\":\"✒\",\"\\\\ding{51}\":\"✓\",\"\\\\checkmark\":\"✓\",\"\\\\ding{52}\":\"✔\",\"\\\\ding{53}\":\"✕\",\"\\\\ding{54}\":\"✖\",\"\\\\ding{55}\":\"✗\",\"\\\\ballotx\":\"✗\",\"\\\\ding{56}\":\"✘\",\"\\\\ding{57}\":\"✙\",\"\\\\ding{58}\":\"✚\",\"\\\\ding{59}\":\"✛\",\"\\\\ding{60}\":\"✜\",\"\\\\ding{61}\":\"✝\",\"\\\\ding{62}\":\"✞\",\"\\\\ding{63}\":\"✟\",\"\\\\ding{64}\":\"✠\",\"\\\\maltese\":\"✠\",\"\\\\ding{65}\":\"✡\",\"\\\\ding{66}\":\"✢\",\"\\\\ding{67}\":\"✣\",\"\\\\ding{68}\":\"✤\",\"\\\\ding{69}\":\"✥\",\"\\\\ding{70}\":\"✦\",\"\\\\ding{71}\":\"✧\",\"\\\\ding{74}\":\"✪\",\"\\\\circledstar\":\"✪\",\"\\\\ding{75}\":\"✫\",\"\\\\ding{76}\":\"✬\",\"\\\\ding{77}\":\"✭\",\"\\\\ding{78}\":\"✮\",\"\\\\ding{79}\":\"✯\",\"\\\\ding{80}\":\"✰\",\"\\\\ding{81}\":\"✱\",\"\\\\ding{82}\":\"✲\",\"\\\\ding{83}\":\"✳\",\"\\\\ding{84}\":\"✴\",\"\\\\ding{85}\":\"✵\",\"\\\\ding{86}\":\"✶\",\"\\\\varstar\":\"✶\",\"\\\\ding{87}\":\"✷\",\"\\\\ding{88}\":\"✸\",\"\\\\ding{89}\":\"✹\",\"\\\\ding{90}\":\"✺\",\"\\\\ding{91}\":\"✻\",\"\\\\ding{92}\":\"✼\",\"\\\\ding{93}\":\"✽\",\"\\\\dingasterisk\":\"✽\",\"\\\\ding{94}\":\"✾\",\"\\\\ding{95}\":\"✿\",\"\\\\ding{96}\":\"❀\",\"\\\\ding{97}\":\"❁\",\"\\\\ding{98}\":\"❂\",\"\\\\ding{99}\":\"❃\",\"\\\\ding{100}\":\"❄\",\"\\\\ding{101}\":\"❅\",\"\\\\ding{102}\":\"❆\",\"\\\\ding{103}\":\"❇\",\"\\\\ding{104}\":\"❈\",\"\\\\ding{105}\":\"❉\",\"\\\\ding{106}\":\"❊\",\"\\\\ding{107}\":\"❋\",\"\\\\ding{109}\":\"❍\",\"\\\\ding{111}\":\"❏\",\"\\\\ding{112}\":\"❐\",\"\\\\ding{113}\":\"❑\",\"\\\\ding{114}\":\"❒\",\"\\\\ding{118}\":\"❖\",\"\\\\ding{120}\":\"❘\",\"\\\\ding{121}\":\"❙\",\"\\\\ding{122}\":\"❚\",\"\\\\ding{123}\":\"❛\",\"\\\\ding{124}\":\"❜\",\"\\\\ding{125}\":\"❝\",\"\\\\ding{126}\":\"❞\",\"\\\\ding{161}\":\"❡\",\"\\\\ding{162}\":\"❢\",\"\\\\ding{163}\":\"❣\",\"\\\\ding{164}\":\"❤\",\"\\\\ding{165}\":\"❥\",\"\\\\ding{166}\":\"❦\",\"\\\\ding{167}\":\"❧\",\"\\\\ding{182}\":\"❶\",\"\\\\ding{183}\":\"❷\",\"\\\\ding{184}\":\"❸\",\"\\\\ding{185}\":\"❹\",\"\\\\ding{186}\":\"❺\",\"\\\\ding{187}\":\"❻\",\"\\\\ding{188}\":\"❼\",\"\\\\ding{189}\":\"❽\",\"\\\\ding{190}\":\"❾\",\"\\\\ding{191}\":\"❿\",\"\\\\ding{192}\":\"➀\",\"\\\\ding{193}\":\"➁\",\"\\\\ding{194}\":\"➂\",\"\\\\ding{195}\":\"➃\",\"\\\\ding{196}\":\"➄\",\"\\\\ding{197}\":\"➅\",\"\\\\ding{198}\":\"➆\",\"\\\\ding{199}\":\"➇\",\"\\\\ding{200}\":\"➈\",\"\\\\ding{201}\":\"➉\",\"\\\\ding{202}\":\"➊\",\"\\\\ding{203}\":\"➋\",\"\\\\ding{204}\":\"➌\",\"\\\\ding{205}\":\"➍\",\"\\\\ding{206}\":\"➎\",\"\\\\ding{207}\":\"➏\",\"\\\\ding{208}\":\"➐\",\"\\\\ding{209}\":\"➑\",\"\\\\ding{210}\":\"➒\",\"\\\\ding{211}\":\"➓\",\"\\\\ding{212}\":\"➔\",\"\\\\ding{216}\":\"➘\",\"\\\\ding{217}\":\"➙\",\"\\\\ding{218}\":\"➚\",\"\\\\ding{219}\":\"➛\",\"\\\\draftingarrow\":\"➛\",\"\\\\ding{220}\":\"➜\",\"\\\\ding{221}\":\"➝\",\"\\\\ding{222}\":\"➞\",\"\\\\ding{223}\":\"➟\",\"\\\\ding{224}\":\"➠\",\"\\\\ding{225}\":\"➡\",\"\\\\ding{226}\":\"➢\",\"\\\\arrowbullet\":\"➢\",\"\\\\ding{227}\":\"➣\",\"\\\\ding{228}\":\"➤\",\"\\\\ding{229}\":\"➥\",\"\\\\ding{230}\":\"➦\",\"\\\\ding{231}\":\"➧\",\"\\\\ding{232}\":\"➨\",\"\\\\ding{233}\":\"➩\",\"\\\\ding{234}\":\"➪\",\"\\\\ding{235}\":\"➫\",\"\\\\ding{236}\":\"➬\",\"\\\\ding{237}\":\"➭\",\"\\\\ding{238}\":\"➮\",\"\\\\ding{239}\":\"➯\",\"\\\\ding{241}\":\"➱\",\"\\\\ding{242}\":\"➲\",\"\\\\ding{243}\":\"➳\",\"\\\\ding{244}\":\"➴\",\"\\\\ding{245}\":\"➵\",\"\\\\ding{246}\":\"➶\",\"\\\\ding{247}\":\"➷\",\"\\\\ding{248}\":\"➸\",\"\\\\ding{249}\":\"➹\",\"\\\\ding{250}\":\"➺\",\"\\\\ding{251}\":\"➻\",\"\\\\ding{252}\":\"➼\",\"\\\\ding{253}\":\"➽\",\"\\\\ding{254}\":\"➾\",\"\\\\threedangle\":\"⟀\",\"\\\\whiteinwhitetriangle\":\"⟁\",\"\\\\perp\":\"⟂\",\"\\\\subsetcirc\":\"⟃\",\"\\\\supsetcirc\":\"⟄\",\"\\\\Lbag\":\"⟅\",\"\\\\Rbag\":\"⟆\",\"\\\\veedot\":\"⟇\",\"\\\\bsolhsub\":\"⟈\",\"\\\\suphsol\":\"⟉\",\"\\\\longdivision\":\"⟌\",\"\\\\Diamonddot\":\"⟐\",\"\\\\wedgedot\":\"⟑\",\"\\\\upin\":\"⟒\",\"\\\\pullback\":\"⟓\",\"\\\\pushout\":\"⟔\",\"\\\\leftouterjoin\":\"⟕\",\"\\\\rightouterjoin\":\"⟖\",\"\\\\fullouterjoin\":\"⟗\",\"\\\\bigbot\":\"⟘\",\"\\\\bigtop\":\"⟙\",\"\\\\DashVDash\":\"⟚\",\"\\\\dashVdash\":\"⟛\",\"\\\\multimapinv\":\"⟜\",\"\\\\vlongdash\":\"⟝\",\"\\\\longdashv\":\"⟞\",\"\\\\cirbot\":\"⟟\",\"\\\\lozengeminus\":\"⟠\",\"\\\\concavediamond\":\"⟡\",\"\\\\concavediamondtickleft\":\"⟢\",\"\\\\concavediamondtickright\":\"⟣\",\"\\\\whitesquaretickleft\":\"⟤\",\"\\\\whitesquaretickright\":\"⟥\",\"\\\\llbracket\":\"⟦\",\"\\\\rrbracket\":\"⟧\",\"\\\\langle\":\"⟨\",\"\\\\rangle\":\"⟩\",\"\\\\lang\":\"⟪\",\"\\\\rang\":\"⟫\",\"\\\\Lbrbrak\":\"⟬\",\"\\\\Rbrbrak\":\"⟭\",\"\\\\lgroup\":\"⟮\",\"\\\\rgroup\":\"⟯\",\"\\\\UUparrow\":\"⟰\",\"\\\\DDownarrow\":\"⟱\",\"\\\\acwgapcirclearrow\":\"⟲\",\"\\\\cwgapcirclearrow\":\"⟳\",\"\\\\rightarrowonoplus\":\"⟴\",\"\\\\longleftarrow\":\"⟵\",\"\\\\longrightarrow\":\"⟶\",\"\\\\longleftrightarrow\":\"⟷\",\"\\\\Longleftarrow\":\"⟸\",\"\\\\Longrightarrow\":\"⟹\",\"\\\\Longleftrightarrow\":\"⟺\",\"\\\\longmapsfrom\":\"⟻\",\"\\\\longmapsto\":\"⟼\",\"\\\\Longmapsfrom\":\"⟽\",\"\\\\Longmapsto\":\"⟾\",\"\\\\sim\\\\joinrel\\\\leadsto\":\"⟿\",\"\\\\psur\":\"⤀\",\"\\\\nVtwoheadrightarrow\":\"⤁\",\"\\\\nvLeftarrow\":\"⤂\",\"\\\\nvRightarrow\":\"⤃\",\"\\\\nvLeftrightarrow\":\"⤄\",\"\\\\Mapsfrom\":\"⤆\",\"\\\\Mapsto\":\"⤇\",\"\\\\downarrowbarred\":\"⤈\",\"\\\\uparrowbarred\":\"⤉\",\"\\\\Uuparrow\":\"⤊\",\"\\\\Ddownarrow\":\"⤋\",\"\\\\leftbkarrow\":\"⤌\",\"\\\\rightbkarrow\":\"⤍\",\"\\\\leftdbkarrow\":\"⤎\",\"\\\\dbkarow\":\"⤏\",\"\\\\drbkarow\":\"⤐\",\"\\\\rightdotarrow\":\"⤑\",\"\\\\UpArrowBar\":\"⤒\",\"\\\\DownArrowBar\":\"⤓\",\"\\\\pinj\":\"⤔\",\"\\\\finj\":\"⤕\",\"\\\\bij\":\"⤖\",\"\\\\nvtwoheadrightarrowtail\":\"⤗\",\"\\\\nVtwoheadrightarrowtail\":\"⤘\",\"\\\\lefttail\":\"⤙\",\"\\\\righttail\":\"⤚\",\"\\\\leftdbltail\":\"⤛\",\"\\\\rightdbltail\":\"⤜\",\"\\\\diamondleftarrow\":\"⤝\",\"\\\\rightarrowdiamond\":\"⤞\",\"\\\\diamondleftarrowbar\":\"⤟\",\"\\\\barrightarrowdiamond\":\"⤠\",\"\\\\nwsearrow\":\"⤡\",\"\\\\neswarrow\":\"⤢\",\"\\\\rdiagovfdiag\":\"⤫\",\"\\\\fdiagovrdiag\":\"⤬\",\"\\\\seovnearrow\":\"⤭\",\"\\\\neovsearrow\":\"⤮\",\"\\\\fdiagovnearrow\":\"⤯\",\"\\\\rdiagovsearrow\":\"⤰\",\"\\\\neovnwarrow\":\"⤱\",\"\\\\nwovnearrow\":\"⤲\",\"\\\\uprightcurvearrow\":\"⤴\",\"\\\\downrightcurvedarrow\":\"⤵\",\"\\\\cwrightarcarrow\":\"⤸\",\"\\\\acwleftarcarrow\":\"⤹\",\"\\\\acwoverarcarrow\":\"⤺\",\"\\\\acwunderarcarrow\":\"⤻\",\"\\\\curvearrowrightminus\":\"⤼\",\"\\\\curvearrowleftplus\":\"⤽\",\"\\\\cwundercurvearrow\":\"⤾\",\"\\\\ccwundercurvearrow\":\"⤿\",\"\\\\Elolarr\":\"⥀\",\"\\\\Elorarr\":\"⥁\",\"\\\\ElzRlarr\":\"⥂\",\"\\\\leftarrowshortrightarrow\":\"⥃\",\"\\\\ElzrLarr\":\"⥄\",\"\\\\rightarrowplus\":\"⥅\",\"\\\\leftarrowplus\":\"⥆\",\"\\\\Elzrarrx\":\"⥇\",\"\\\\leftrightarrowcircle\":\"⥈\",\"\\\\twoheaduparrowcircle\":\"⥉\",\"\\\\leftrightharpoon\":\"⥊\",\"\\\\rightleftharpoon\":\"⥋\",\"\\\\updownharpoonrightleft\":\"⥌\",\"\\\\updownharpoonleftright\":\"⥍\",\"\\\\LeftRightVector\":\"⥎\",\"\\\\RightUpDownVector\":\"⥏\",\"\\\\DownLeftRightVector\":\"⥐\",\"\\\\LeftUpDownVector\":\"⥑\",\"\\\\LeftVectorBar\":\"⥒\",\"\\\\RightVectorBar\":\"⥓\",\"\\\\RightUpVectorBar\":\"⥔\",\"\\\\RightDownVectorBar\":\"⥕\",\"\\\\DownLeftVectorBar\":\"⥖\",\"\\\\DownRightVectorBar\":\"⥗\",\"\\\\LeftUpVectorBar\":\"⥘\",\"\\\\LeftDownVectorBar\":\"⥙\",\"\\\\LeftTeeVector\":\"⥚\",\"\\\\RightTeeVector\":\"⥛\",\"\\\\RightUpTeeVector\":\"⥜\",\"\\\\RightDownTeeVector\":\"⥝\",\"\\\\DownLeftTeeVector\":\"⥞\",\"\\\\DownRightTeeVector\":\"⥟\",\"\\\\LeftUpTeeVector\":\"⥠\",\"\\\\LeftDownTeeVector\":\"⥡\",\"\\\\leftleftharpoons\":\"⥢\",\"\\\\upupharpoons\":\"⥣\",\"\\\\rightrightharpoons\":\"⥤\",\"\\\\downdownharpoons\":\"⥥\",\"\\\\leftrightharpoonsup\":\"⥦\",\"\\\\leftrightharpoonsdown\":\"⥧\",\"\\\\rightleftharpoonsup\":\"⥨\",\"\\\\rightleftharpoonsdown\":\"⥩\",\"\\\\leftbarharpoon\":\"⥪\",\"\\\\barleftharpoon\":\"⥫\",\"\\\\rightbarharpoon\":\"⥬\",\"\\\\barrightharpoon\":\"⥭\",\"\\\\UpEquilibrium\":\"⥮\",\"\\\\ReverseUpEquilibrium\":\"⥯\",\"\\\\RoundImplies\":\"⥰\",\"\\\\equalrightarrow\":\"⥱\",\"\\\\similarrightarrow\":\"⥲\",\"\\\\leftarrowsimilar\":\"⥳\",\"\\\\rightarrowsimilar\":\"⥴\",\"\\\\rightarrowapprox\":\"⥵\",\"\\\\ltlarr\":\"⥶\",\"\\\\leftarrowless\":\"⥷\",\"\\\\gtrarr\":\"⥸\",\"\\\\subrarr\":\"⥹\",\"\\\\leftarrowsubset\":\"⥺\",\"\\\\suplarr\":\"⥻\",\"\\\\upfishtail\":\"⥾\",\"\\\\downfishtail\":\"⥿\",\"\\\\Elztfnc\":\"⦀\",\"\\\\spot\":\"⦁\",\"\\\\typecolon\":\"⦂\",\"\\\\lBrace\":\"⦃\",\"\\\\rBrace\":\"⦄\",\"\\\\Elroang\":\"⦆\",\"\\\\limg\":\"⦇\",\"\\\\rimg\":\"⦈\",\"\\\\lblot\":\"⦉\",\"\\\\rblot\":\"⦊\",\"\\\\lbrackubar\":\"⦋\",\"\\\\rbrackubar\":\"⦌\",\"\\\\lbrackultick\":\"⦍\",\"\\\\rbracklrtick\":\"⦎\",\"\\\\lbracklltick\":\"⦏\",\"\\\\rbrackurtick\":\"⦐\",\"\\\\langledot\":\"⦑\",\"\\\\rangledot\":\"⦒\",\"<\\\\kern-0.58em(\":\"⦓\",\"\\\\Lparengtr\":\"⦕\",\"\\\\Rparenless\":\"⦖\",\"\\\\lblkbrbrak\":\"⦗\",\"\\\\rblkbrbrak\":\"⦘\",\"\\\\Elzddfnc\":\"⦙\",\"\\\\vzigzag\":\"⦚\",\"\\\\measuredangleleft\":\"⦛\",\"\\\\Angle\":\"⦜\",\"\\\\rightanglemdot\":\"⦝\",\"\\\\angles\":\"⦞\",\"\\\\angdnr\":\"⦟\",\"\\\\Elzlpargt\":\"⦠\",\"\\\\sphericalangleup\":\"⦡\",\"\\\\turnangle\":\"⦢\",\"\\\\revangle\":\"⦣\",\"\\\\angleubar\":\"⦤\",\"\\\\revangleubar\":\"⦥\",\"\\\\wideangledown\":\"⦦\",\"\\\\wideangleup\":\"⦧\",\"\\\\measanglerutone\":\"⦨\",\"\\\\measanglelutonw\":\"⦩\",\"\\\\measanglerdtose\":\"⦪\",\"\\\\measangleldtosw\":\"⦫\",\"\\\\measangleurtone\":\"⦬\",\"\\\\measangleultonw\":\"⦭\",\"\\\\measangledrtose\":\"⦮\",\"\\\\measangledltosw\":\"⦯\",\"\\\\revemptyset\":\"⦰\",\"\\\\emptysetobar\":\"⦱\",\"\\\\emptysetocirc\":\"⦲\",\"\\\\emptysetoarr\":\"⦳\",\"\\\\emptysetoarrl\":\"⦴\",\"\\\\circledparallel\":\"⦷\",\"\\\\circledbslash\":\"⦸\",\"\\\\operp\":\"⦹\",\"\\\\obot\":\"⦺\",\"\\\\olcross\":\"⦻\",\"\\\\odotslashdot\":\"⦼\",\"\\\\uparrowoncircle\":\"⦽\",\"\\\\circledwhitebullet\":\"⦾\",\"\\\\circledbullet\":\"⦿\",\"\\\\circledless\":\"⧀\",\"\\\\circledgtr\":\"⧁\",\"\\\\cirscir\":\"⧂\",\"\\\\cirE\":\"⧃\",\"\\\\boxslash\":\"⧄\",\"\\\\boxbslash\":\"⧅\",\"\\\\boxast\":\"⧆\",\"\\\\boxcircle\":\"⧇\",\"\\\\boxbox\":\"⧈\",\"\\\\boxonbox\":\"⧉\",\"\\\\ElzLap\":\"⧊\",\"\\\\Elzdefas\":\"⧋\",\"\\\\triangles\":\"⧌\",\"\\\\triangleserifs\":\"⧍\",\"\\\\rtriltri\":\"⧎\",\"\\\\LeftTriangleBar\":\"⧏\",\"\\\\NotLeftTriangleBar\":\"⧏̸\",\"\\\\RightTriangleBar\":\"⧐\",\"\\\\NotRightTriangleBar\":\"⧐̸\",\"\\\\lfbowtie\":\"⧑\",\"\\\\rfbowtie\":\"⧒\",\"\\\\fbowtie\":\"⧓\",\"\\\\lftimes\":\"⧔\",\"\\\\rftimes\":\"⧕\",\"\\\\hourglass\":\"⧖\",\"\\\\blackhourglass\":\"⧗\",\"\\\\lvzigzag\":\"⧘\",\"\\\\rvzigzag\":\"⧙\",\"\\\\Lvzigzag\":\"⧚\",\"\\\\Rvzigzag\":\"⧛\",\"\\\\tieinfty\":\"⧝\",\"\\\\nvinfty\":\"⧞\",\"\\\\multimapboth\":\"⧟\",\"\\\\laplac\":\"⧠\",\"\\\\lrtriangleeq\":\"⧡\",\"\\\\shuffle\":\"⧢\",\"\\\\eparsl\":\"⧣\",\"\\\\smeparsl\":\"⧤\",\"\\\\eqvparsl\":\"⧥\",\"\\\\gleichstark\":\"⧦\",\"\\\\thermod\":\"⧧\",\"\\\\downtriangleleftblack\":\"⧨\",\"\\\\downtrianglerightblack\":\"⧩\",\"\\\\blackdiamonddownarrow\":\"⧪\",\"\\\\blacklozenge\":\"⧫\",\"\\\\circledownarrow\":\"⧬\",\"\\\\blackcircledownarrow\":\"⧭\",\"\\\\errbarsquare\":\"⧮\",\"\\\\errbarblacksquare\":\"⧯\",\"\\\\errbardiamond\":\"⧰\",\"\\\\errbarblackdiamond\":\"⧱\",\"\\\\errbarcircle\":\"⧲\",\"\\\\errbarblackcircle\":\"⧳\",\"\\\\RuleDelayed\":\"⧴\",\"\\\\dsol\":\"⧶\",\"\\\\rsolbar\":\"⧷\",\"\\\\xsol\":\"⧸\",\"\\\\zhide\":\"⧹\",\"\\\\doubleplus\":\"⧺\",\"\\\\tripleplus\":\"⧻\",\"\\\\lcurvyangle\":\"⧼\",\"\\\\rcurvyangle\":\"⧽\",\"\\\\tplus\":\"⧾\",\"\\\\tminus\":\"⧿\",\"\\\\bigodot\":\"⨀\",\"\\\\bigoplus\":\"⨁\",\"\\\\bigotimes\":\"⨂\",\"\\\\bigcupdot\":\"⨃\",\"\\\\Elxuplus\":\"⨄\",\"\\\\ElzThr\":\"⨅\",\"\\\\Elxsqcup\":\"⨆\",\"\\\\ElzInf\":\"⨇\",\"\\\\ElzSup\":\"⨈\",\"\\\\varprod\":\"⨉\",\"\\\\modtwosum\":\"⨊\",\"\\\\sumint\":\"⨋\",\"\\\\iiiint\":\"⨌\",\"\\\\ElzCint\":\"⨍\",\"\\\\intBar\":\"⨎\",\"\\\\clockoint\":\"⨏\",\"\\\\awint\":\"⨑\",\"\\\\rppolint\":\"⨒\",\"\\\\scpolint\":\"⨓\",\"\\\\npolint\":\"⨔\",\"\\\\pointint\":\"⨕\",\"\\\\sqrint\":\"⨖\",\"\\\\intlarhk\":\"⨗\",\"\\\\intx\":\"⨘\",\"\\\\intcap\":\"⨙\",\"\\\\intcup\":\"⨚\",\"\\\\upint\":\"⨛\",\"\\\\lowint\":\"⨜\",\"\\\\Join\":\"⨝\",\"\\\\bigtriangleleft\":\"⨞\",\"\\\\zcmp\":\"⨟\",\"\\\\zpipe\":\"⨠\",\"\\\\zproject\":\"⨡\",\"\\\\ringplus\":\"⨢\",\"\\\\plushat\":\"⨣\",\"\\\\simplus\":\"⨤\",\"\\\\plussim\":\"⨦\",\"\\\\plussubtwo\":\"⨧\",\"\\\\plustrif\":\"⨨\",\"\\\\commaminus\":\"⨩\",\"\\\\minusfdots\":\"⨫\",\"\\\\minusrdots\":\"⨬\",\"\\\\ElzTimes\":\"⨯\",\"\\\\dottimes\":\"⨰\",\"\\\\timesbar\":\"⨱\",\"\\\\btimes\":\"⨲\",\"\\\\smashtimes\":\"⨳\",\"\\\\otimeshat\":\"⨶\",\"\\\\Otimes\":\"⨷\",\"\\\\odiv\":\"⨸\",\"\\\\triangleplus\":\"⨹\",\"\\\\triangleminus\":\"⨺\",\"\\\\triangletimes\":\"⨻\",\"\\\\intprodr\":\"⨽\",\"\\\\fcmp\":\"⨾\",\"\\\\amalg\":\"⨿\",\"\\\\capdot\":\"⩀\",\"\\\\uminus\":\"⩁\",\"\\\\barcup\":\"⩂\",\"\\\\barcap\":\"⩃\",\"\\\\capwedge\":\"⩄\",\"\\\\cupvee\":\"⩅\",\"\\\\cupovercap\":\"⩆\",\"\\\\capovercup\":\"⩇\",\"\\\\cupbarcap\":\"⩈\",\"\\\\capbarcup\":\"⩉\",\"\\\\twocups\":\"⩊\",\"\\\\twocaps\":\"⩋\",\"\\\\closedvarcup\":\"⩌\",\"\\\\closedvarcap\":\"⩍\",\"\\\\Sqcap\":\"⩎\",\"\\\\Sqcup\":\"⩏\",\"\\\\closedvarcupsmashprod\":\"⩐\",\"\\\\wedgeodot\":\"⩑\",\"\\\\veeodot\":\"⩒\",\"\\\\ElzAnd\":\"⩓\",\"\\\\ElzOr\":\"⩔\",\"\\\\ElOr\":\"⩖\",\"\\\\bigslopedvee\":\"⩗\",\"\\\\bigslopedwedge\":\"⩘\",\"\\\\veeonwedge\":\"⩙\",\"\\\\wedgemidvert\":\"⩚\",\"\\\\veemidvert\":\"⩛\",\"\\\\midbarwedge\":\"⩜\",\"\\\\midbarvee\":\"⩝\",\"\\\\Elzminhat\":\"⩟\",\"\\\\wedgedoublebar\":\"⩠\",\"\\\\varveebar\":\"⩡\",\"\\\\doublebarvee\":\"⩢\",\"\\\\dsub\":\"⩤\",\"\\\\rsub\":\"⩥\",\"\\\\eqdot\":\"⩦\",\"\\\\dotequiv\":\"⩧\",\"\\\\equivVert\":\"⩨\",\"\\\\equivVvert\":\"⩩\",\"\\\\dotsim\":\"⩪\",\"\\\\simrdots\":\"⩫\",\"\\\\simminussim\":\"⩬\",\"\\\\congdot\":\"⩭\",\"\\\\stackrel{*}{=}\":\"⩮\",\"\\\\hatapprox\":\"⩯\",\"\\\\approxeqq\":\"⩰\",\"\\\\eqqplus\":\"⩱\",\"\\\\pluseqq\":\"⩲\",\"\\\\eqqsim\":\"⩳\",\"\\\\Coloneqq\":\"⩴\",\"\\\\Equal\":\"⩵\",\"\\\\Same\":\"⩶\",\"\\\\ddotseq\":\"⩷\",\"\\\\equivDD\":\"⩸\",\"\\\\ltcir\":\"⩹\",\"\\\\gtcir\":\"⩺\",\"\\\\ltquest\":\"⩻\",\"\\\\gtquest\":\"⩼\",\"\\\\leqslant\":\"⩽\",\"\\\\nleqslant\":\"⩽̸\",\"\\\\geqslant\":\"⩾\",\"\\\\ngeqslant\":\"⩾̸\",\"\\\\lesdot\":\"⩿\",\"\\\\gesdot\":\"⪀\",\"\\\\lesdoto\":\"⪁\",\"\\\\gesdoto\":\"⪂\",\"\\\\lesdotor\":\"⪃\",\"\\\\gesdotol\":\"⪄\",\"\\\\lessapprox\":\"⪅\",\"\\\\gtrapprox\":\"⪆\",\"\\\\lneq\":\"⪇\",\"\\\\gneq\":\"⪈\",\"\\\\lnapprox\":\"⪉\",\"\\\\gnapprox\":\"⪊\",\"\\\\lesseqqgtr\":\"⪋\",\"\\\\gtreqqless\":\"⪌\",\"\\\\lsime\":\"⪍\",\"\\\\gsime\":\"⪎\",\"\\\\lsimg\":\"⪏\",\"\\\\gsiml\":\"⪐\",\"\\\\lgE\":\"⪑\",\"\\\\glE\":\"⪒\",\"\\\\lesges\":\"⪓\",\"\\\\gesles\":\"⪔\",\"\\\\eqslantless\":\"⪕\",\"\\\\eqslantgtr\":\"⪖\",\"\\\\elsdot\":\"⪗\",\"\\\\egsdot\":\"⪘\",\"\\\\eqqless\":\"⪙\",\"\\\\eqqgtr\":\"⪚\",\"\\\\eqqslantless\":\"⪛\",\"\\\\eqqslantgtr\":\"⪜\",\"\\\\Pisymbol{ppi020}{117}\":\"⪝\",\"\\\\Pisymbol{ppi020}{105}\":\"⪞\",\"\\\\simlE\":\"⪟\",\"\\\\simgE\":\"⪠\",\"\\\\NestedLessLess\":\"⪡\",\"\\\\NotNestedLessLess\":\"⪡̸\",\"\\\\NestedGreaterGreater\":\"⪢\",\"\\\\NotNestedGreaterGreater\":\"⪢̸\",\"\\\\partialmeetcontraction\":\"⪣\",\"\\\\glj\":\"⪤\",\"\\\\gla\":\"⪥\",\"\\\\leftslice\":\"⪦\",\"\\\\rightslice\":\"⪧\",\"\\\\lescc\":\"⪨\",\"\\\\gescc\":\"⪩\",\"\\\\smt\":\"⪪\",\"\\\\lat\":\"⪫\",\"\\\\smte\":\"⪬\",\"\\\\late\":\"⪭\",\"\\\\bumpeqq\":\"⪮\",\"\\\\preceq\":\"⪯\",\"\\\\not\\\\preceq\":\"⪯̸\",\"\\\\succeq\":\"⪰\",\"\\\\not\\\\succeq\":\"⪰̸\",\"\\\\precneq\":\"⪱\",\"\\\\succneq\":\"⪲\",\"\\\\preceqq\":\"⪳\",\"\\\\succeqq\":\"⪴\",\"\\\\precneqq\":\"⪵\",\"\\\\succneqq\":\"⪶\",\"\\\\precapprox\":\"⪷\",\"\\\\succapprox\":\"⪸\",\"\\\\precnapprox\":\"⪹\",\"\\\\succnapprox\":\"⪺\",\"\\\\llcurly\":\"⪻\",\"\\\\ggcurly\":\"⪼\",\"\\\\subsetdot\":\"⪽\",\"\\\\supsetdot\":\"⪾\",\"\\\\subsetplus\":\"⪿\",\"\\\\supsetplus\":\"⫀\",\"\\\\submult\":\"⫁\",\"\\\\supmult\":\"⫂\",\"\\\\subedot\":\"⫃\",\"\\\\supedot\":\"⫄\",\"\\\\subseteqq\":\"⫅\",\"\\\\nsubseteqq\":\"⫅̸\",\"\\\\supseteqq\":\"⫆\",\"\\\\nsupseteqq\":\"⫆̸\",\"\\\\subsim\":\"⫇\",\"\\\\supsim\":\"⫈\",\"\\\\subsetapprox\":\"⫉\",\"\\\\supsetapprox\":\"⫊\",\"\\\\subsetneqq\":\"⫋\",\"\\\\supsetneqq\":\"⫌\",\"\\\\lsqhook\":\"⫍\",\"\\\\rsqhook\":\"⫎\",\"\\\\csub\":\"⫏\",\"\\\\csup\":\"⫐\",\"\\\\csube\":\"⫑\",\"\\\\csupe\":\"⫒\",\"\\\\subsup\":\"⫓\",\"\\\\supsub\":\"⫔\",\"\\\\subsub\":\"⫕\",\"\\\\supsup\":\"⫖\",\"\\\\suphsub\":\"⫗\",\"\\\\supdsub\":\"⫘\",\"\\\\forkv\":\"⫙\",\"\\\\topfork\":\"⫚\",\"\\\\mlcp\":\"⫛\",\"\\\\forks\":\"⫝̸\",\"\\\\forksnot\":\"⫝\",\"\\\\shortlefttack\":\"⫞\",\"\\\\shortdowntack\":\"⫟\",\"\\\\shortuptack\":\"⫠\",\"\\\\perps\":\"⫡\",\"\\\\vDdash\":\"⫢\",\"\\\\dashV\":\"⫣\",\"\\\\Dashv\":\"⫤\",\"\\\\DashV\":\"⫥\",\"\\\\varVdash\":\"⫦\",\"\\\\Barv\":\"⫧\",\"\\\\vBar\":\"⫨\",\"\\\\vBarv\":\"⫩\",\"\\\\Top\":\"⫪\",\"\\\\Not\":\"⫬\",\"\\\\bNot\":\"⫭\",\"\\\\revnmid\":\"⫮\",\"\\\\cirmid\":\"⫯\",\"\\\\midcir\":\"⫰\",\"\\\\topcir\":\"⫱\",\"\\\\nhpar\":\"⫲\",\"\\\\parsim\":\"⫳\",\"\\\\interleave\":\"⫴\",\"\\\\nhVvert\":\"⫵\",\"\\\\Elztdcol\":\"⫶\",\"\\\\lllnest\":\"⫷\",\"\\\\gggnest\":\"⫸\",\"\\\\leqqslant\":\"⫹\",\"\\\\geqqslant\":\"⫺\",\"\\\\trslash\":\"⫻\",\"\\\\biginterleave\":\"⫼\",\"{{/}\\\\!\\\\!{/}}\":\"⫽\",\"{\\\\rlap{\\\\textbackslash}{{/}\\\\!\\\\!{/}}}\":\"⫽⃥\",\"\\\\talloblong\":\"⫾\",\"\\\\bigtalloblong\":\"⫿\",\"\\\\squaretopblack\":\"⬒\",\"\\\\squarebotblack\":\"⬓\",\"\\\\squareurblack\":\"⬔\",\"\\\\squarellblack\":\"⬕\",\"\\\\diamondleftblack\":\"⬖\",\"\\\\diamondrightblack\":\"⬗\",\"\\\\diamondtopblack\":\"⬘\",\"\\\\diamondbotblack\":\"⬙\",\"\\\\dottedsquare\":\"⬚\",\"\\\\blacksquare\":\"⬛\",\"\\\\vysmblksquare\":\"⬝\",\"\\\\vysmwhtsquare\":\"⬞\",\"\\\\pentagonblack\":\"⬟\",\"\\\\pentagon\":\"⬠\",\"\\\\varhexagon\":\"⬡\",\"\\\\varhexagonblack\":\"⬢\",\"\\\\hexagonblack\":\"⬣\",\"\\\\lgblkcircle\":\"⬤\",\"\\\\mdblkdiamond\":\"⬥\",\"\\\\mdwhtdiamond\":\"⬦\",\"\\\\mdblklozenge\":\"⬧\",\"\\\\mdwhtlozenge\":\"⬨\",\"\\\\smblkdiamond\":\"⬩\",\"\\\\smblklozenge\":\"⬪\",\"\\\\smwhtlozenge\":\"⬫\",\"\\\\blkhorzoval\":\"⬬\",\"\\\\whthorzoval\":\"⬭\",\"\\\\blkvertoval\":\"⬮\",\"\\\\whtvertoval\":\"⬯\",\"\\\\circleonleftarrow\":\"⬰\",\"\\\\leftthreearrows\":\"⬱\",\"\\\\leftarrowonoplus\":\"⬲\",\"\\\\longleftsquigarrow\":\"⬳\",\"\\\\nvtwoheadleftarrow\":\"⬴\",\"\\\\nVtwoheadleftarrow\":\"⬵\",\"\\\\twoheadmapsfrom\":\"⬶\",\"\\\\twoheadleftdbkarrow\":\"⬷\",\"\\\\leftdotarrow\":\"⬸\",\"\\\\nvleftarrowtail\":\"⬹\",\"\\\\nVleftarrowtail\":\"⬺\",\"\\\\twoheadleftarrowtail\":\"⬻\",\"\\\\nvtwoheadleftarrowtail\":\"⬼\",\"\\\\nVtwoheadleftarrowtail\":\"⬽\",\"\\\\leftarrowx\":\"⬾\",\"\\\\leftcurvedarrow\":\"⬿\",\"\\\\equalleftarrow\":\"⭀\",\"\\\\bsimilarleftarrow\":\"⭁\",\"\\\\leftarrowbackapprox\":\"⭂\",\"\\\\rightarrowgtr\":\"⭃\",\"\\\\rightarrowsupset\":\"⭄\",\"\\\\LLeftarrow\":\"⭅\",\"\\\\RRightarrow\":\"⭆\",\"\\\\bsimilarrightarrow\":\"⭇\",\"\\\\rightarrowbackapprox\":\"⭈\",\"\\\\similarleftarrow\":\"⭉\",\"\\\\leftarrowapprox\":\"⭊\",\"\\\\leftarrowbsimilar\":\"⭋\",\"\\\\rightarrowbsimilar\":\"⭌\",\"\\\\medwhitestar\":\"⭐\",\"\\\\medblackstar\":\"⭑\",\"\\\\smwhitestar\":\"⭒\",\"\\\\rightpentagonblack\":\"⭓\",\"\\\\rightpentagon\":\"⭔\",\"\\\\postalmark\":\"〒\",\"\\\\lbrbrak\":\"〔\",\"\\\\rbrbrak\":\"〕\",\"\\\\openbracketleft\":\"〚\",\"\\\\openbracketright\":\"〛\",\"\\\\hzigzag\":\"〰\",\"\\\\dbend\":\"�\",\"\\\\mathbf{A}\":\"𝐀\",\"\\\\mathbf{B}\":\"𝐁\",\"\\\\mathbf{C}\":\"𝐂\",\"\\\\mathbf{D}\":\"𝐃\",\"\\\\mathbf{E}\":\"𝐄\",\"\\\\mathbf{F}\":\"𝐅\",\"\\\\mathbf{G}\":\"𝐆\",\"\\\\mathbf{H}\":\"𝐇\",\"\\\\mathbf{I}\":\"𝐈\",\"\\\\mathbf{J}\":\"𝐉\",\"\\\\mathbf{K}\":\"𝐊\",\"\\\\mathbf{L}\":\"𝐋\",\"\\\\mathbf{M}\":\"𝐌\",\"\\\\mathbf{N}\":\"𝐍\",\"\\\\mathbf{O}\":\"𝐎\",\"\\\\mathbf{P}\":\"𝐏\",\"\\\\mathbf{Q}\":\"𝐐\",\"\\\\mathbf{R}\":\"𝐑\",\"\\\\mathbf{S}\":\"𝐒\",\"\\\\mathbf{T}\":\"𝐓\",\"\\\\mathbf{U}\":\"𝐔\",\"\\\\mathbf{V}\":\"𝐕\",\"\\\\mathbf{W}\":\"𝐖\",\"\\\\mathbf{X}\":\"𝐗\",\"\\\\mathbf{Y}\":\"𝐘\",\"\\\\mathbf{Z}\":\"𝐙\",\"\\\\mathbf{a}\":\"𝐚\",\"\\\\mathbf{b}\":\"𝐛\",\"\\\\mathbf{c}\":\"𝐜\",\"\\\\mathbf{d}\":\"𝐝\",\"\\\\mathbf{e}\":\"𝐞\",\"\\\\mathbf{f}\":\"𝐟\",\"\\\\mathbf{g}\":\"𝐠\",\"\\\\mathbf{h}\":\"𝐡\",\"\\\\mathbf{i}\":\"𝐢\",\"\\\\mathbf{j}\":\"𝐣\",\"\\\\mathbf{k}\":\"𝐤\",\"\\\\mathbf{l}\":\"𝐥\",\"\\\\mathbf{m}\":\"𝐦\",\"\\\\mathbf{n}\":\"𝐧\",\"\\\\mathbf{o}\":\"𝐨\",\"\\\\mathbf{p}\":\"𝐩\",\"\\\\mathbf{q}\":\"𝐪\",\"\\\\mathbf{r}\":\"𝐫\",\"\\\\mathbf{s}\":\"𝐬\",\"\\\\mathbf{t}\":\"𝐭\",\"\\\\mathbf{u}\":\"𝐮\",\"\\\\mathbf{v}\":\"𝐯\",\"\\\\mathbf{w}\":\"𝐰\",\"\\\\mathbf{x}\":\"𝐱\",\"\\\\mathbf{y}\":\"𝐲\",\"\\\\mathbf{z}\":\"𝐳\",\"\\\\mathsl{A}\":\"𝐴\",\"\\\\mathsl{B}\":\"𝐵\",\"\\\\mathsl{C}\":\"𝐶\",\"\\\\mathsl{D}\":\"𝐷\",\"\\\\mathsl{E}\":\"𝐸\",\"\\\\mathsl{F}\":\"𝐹\",\"\\\\mathsl{G}\":\"𝐺\",\"\\\\mathsl{H}\":\"𝐻\",\"\\\\mathsl{I}\":\"𝐼\",\"\\\\mathsl{J}\":\"𝐽\",\"\\\\mathsl{K}\":\"𝐾\",\"\\\\mathsl{L}\":\"𝐿\",\"\\\\mathsl{M}\":\"𝑀\",\"\\\\mathsl{N}\":\"𝑁\",\"\\\\mathsl{O}\":\"𝑂\",\"\\\\mathsl{P}\":\"𝑃\",\"\\\\mathsl{Q}\":\"𝑄\",\"\\\\mathsl{R}\":\"𝑅\",\"\\\\mathsl{S}\":\"𝑆\",\"\\\\mathsl{T}\":\"𝑇\",\"\\\\mathsl{U}\":\"𝑈\",\"\\\\mathsl{V}\":\"𝑉\",\"\\\\mathsl{W}\":\"𝑊\",\"\\\\mathsl{X}\":\"𝑋\",\"\\\\mathsl{Y}\":\"𝑌\",\"\\\\mathsl{Z}\":\"𝑍\",\"\\\\mathsl{a}\":\"𝑎\",\"\\\\mathsl{b}\":\"𝑏\",\"\\\\mathsl{c}\":\"𝑐\",\"\\\\mathsl{d}\":\"𝑑\",\"\\\\mathsl{e}\":\"𝑒\",\"\\\\mathsl{f}\":\"𝑓\",\"\\\\mathsl{g}\":\"𝑔\",\"\\\\mathsl{i}\":\"𝑖\",\"\\\\mathsl{j}\":\"𝑗\",\"\\\\mathsl{k}\":\"𝑘\",\"\\\\mathsl{l}\":\"𝑙\",\"\\\\mathsl{m}\":\"𝑚\",\"\\\\mathsl{n}\":\"𝑛\",\"\\\\mathsl{o}\":\"𝑜\",\"\\\\mathsl{p}\":\"𝑝\",\"\\\\mathsl{q}\":\"𝑞\",\"\\\\mathsl{r}\":\"𝑟\",\"\\\\mathsl{s}\":\"𝑠\",\"\\\\mathsl{t}\":\"𝑡\",\"\\\\mathsl{u}\":\"𝑢\",\"\\\\mathsl{v}\":\"𝑣\",\"\\\\mathsl{w}\":\"𝑤\",\"\\\\mathsl{x}\":\"𝑥\",\"\\\\mathsl{y}\":\"𝑦\",\"\\\\mathsl{z}\":\"𝑧\",\"\\\\mathbit{A}\":\"𝑨\",\"\\\\mathbit{B}\":\"𝑩\",\"\\\\mathbit{C}\":\"𝑪\",\"\\\\mathbit{D}\":\"𝑫\",\"\\\\mathbit{E}\":\"𝑬\",\"\\\\mathbit{F}\":\"𝑭\",\"\\\\mathbit{G}\":\"𝑮\",\"\\\\mathbit{H}\":\"𝑯\",\"\\\\mathbit{I}\":\"𝑰\",\"\\\\mathbit{J}\":\"𝑱\",\"\\\\mathbit{K}\":\"𝑲\",\"\\\\mathbit{L}\":\"𝑳\",\"\\\\mathbit{M}\":\"𝑴\",\"\\\\mathbit{N}\":\"𝑵\",\"\\\\mathbit{O}\":\"𝑶\",\"\\\\mathbit{P}\":\"𝑷\",\"\\\\mathbit{Q}\":\"𝑸\",\"\\\\mathbit{R}\":\"𝑹\",\"\\\\mathbit{S}\":\"𝑺\",\"\\\\mathbit{T}\":\"𝑻\",\"\\\\mathbit{U}\":\"𝑼\",\"\\\\mathbit{V}\":\"𝑽\",\"\\\\mathbit{W}\":\"𝑾\",\"\\\\mathbit{X}\":\"𝑿\",\"\\\\mathbit{Y}\":\"𝒀\",\"\\\\mathbit{Z}\":\"𝒁\",\"\\\\mathbit{a}\":\"𝒂\",\"\\\\mathbit{b}\":\"𝒃\",\"\\\\mathbit{c}\":\"𝒄\",\"\\\\mathbit{d}\":\"𝒅\",\"\\\\mathbit{e}\":\"𝒆\",\"\\\\mathbit{f}\":\"𝒇\",\"\\\\mathbit{g}\":\"𝒈\",\"\\\\mathbit{h}\":\"𝒉\",\"\\\\mathbit{i}\":\"𝒊\",\"\\\\mathbit{j}\":\"𝒋\",\"\\\\mathbit{k}\":\"𝒌\",\"\\\\mathbit{l}\":\"𝒍\",\"\\\\mathbit{m}\":\"𝒎\",\"\\\\mathbit{n}\":\"𝒏\",\"\\\\mathbit{o}\":\"𝒐\",\"\\\\mathbit{p}\":\"𝒑\",\"\\\\mathbit{q}\":\"𝒒\",\"\\\\mathbit{r}\":\"𝒓\",\"\\\\mathbit{s}\":\"𝒔\",\"\\\\mathbit{t}\":\"𝒕\",\"\\\\mathbit{u}\":\"𝒖\",\"\\\\mathbit{v}\":\"𝒗\",\"\\\\mathbit{w}\":\"𝒘\",\"\\\\mathbit{x}\":\"𝒙\",\"\\\\mathbit{y}\":\"𝒚\",\"\\\\mathbit{z}\":\"𝒛\",\"\\\\mathscr{A}\":\"𝒜\",\"\\\\mathscr{C}\":\"𝒞\",\"\\\\mathscr{D}\":\"𝒟\",\"\\\\mathscr{G}\":\"𝒢\",\"\\\\mathscr{J}\":\"𝒥\",\"\\\\mathscr{K}\":\"𝒦\",\"\\\\mathscr{N}\":\"𝒩\",\"\\\\mathscr{O}\":\"𝒪\",\"\\\\mathscr{P}\":\"𝒫\",\"\\\\mathscr{Q}\":\"𝒬\",\"\\\\mathscr{S}\":\"𝒮\",\"\\\\mathscr{T}\":\"𝒯\",\"\\\\mathscr{U}\":\"𝒰\",\"\\\\mathscr{V}\":\"𝒱\",\"\\\\mathscr{W}\":\"𝒲\",\"\\\\mathscr{X}\":\"𝒳\",\"\\\\mathscr{Y}\":\"𝒴\",\"\\\\mathscr{Z}\":\"𝒵\",\"\\\\mathscr{a}\":\"𝒶\",\"\\\\mathscr{b}\":\"𝒷\",\"\\\\mathscr{c}\":\"𝒸\",\"\\\\mathscr{d}\":\"𝒹\",\"\\\\mathscr{f}\":\"𝒻\",\"\\\\mathscr{h}\":\"𝒽\",\"\\\\mathscr{i}\":\"𝒾\",\"\\\\mathscr{j}\":\"𝒿\",\"\\\\mathscr{k}\":\"𝓀\",\"\\\\mathscr{m}\":\"𝓂\",\"\\\\mathscr{n}\":\"𝓃\",\"\\\\mathscr{p}\":\"𝓅\",\"\\\\mathscr{q}\":\"𝓆\",\"\\\\mathscr{r}\":\"𝓇\",\"\\\\mathscr{s}\":\"𝓈\",\"\\\\mathscr{t}\":\"𝓉\",\"\\\\mathscr{u}\":\"𝓊\",\"\\\\mathscr{v}\":\"𝓋\",\"\\\\mathscr{w}\":\"𝓌\",\"\\\\mathscr{x}\":\"𝓍\",\"\\\\mathscr{y}\":\"𝓎\",\"\\\\mathscr{z}\":\"𝓏\",\"\\\\mathmit{A}\":\"𝓐\",\"\\\\mathmit{B}\":\"𝓑\",\"\\\\mathmit{C}\":\"𝓒\",\"\\\\mathmit{D}\":\"𝓓\",\"\\\\mathmit{E}\":\"𝓔\",\"\\\\mathmit{F}\":\"𝓕\",\"\\\\mathmit{G}\":\"𝓖\",\"\\\\mathmit{H}\":\"𝓗\",\"\\\\mathmit{I}\":\"𝓘\",\"\\\\mathmit{J}\":\"𝓙\",\"\\\\mathmit{K}\":\"𝓚\",\"\\\\mathmit{L}\":\"𝓛\",\"\\\\mathmit{M}\":\"𝓜\",\"\\\\mathmit{N}\":\"𝓝\",\"\\\\mathmit{O}\":\"𝓞\",\"\\\\mathmit{P}\":\"𝓟\",\"\\\\mathmit{Q}\":\"𝓠\",\"\\\\mathmit{R}\":\"𝓡\",\"\\\\mathmit{S}\":\"𝓢\",\"\\\\mathmit{T}\":\"𝓣\",\"\\\\mathmit{U}\":\"𝓤\",\"\\\\mathmit{V}\":\"𝓥\",\"\\\\mathmit{W}\":\"𝓦\",\"\\\\mathmit{X}\":\"𝓧\",\"\\\\mathmit{Y}\":\"𝓨\",\"\\\\mathmit{Z}\":\"𝓩\",\"\\\\mathmit{a}\":\"𝓪\",\"\\\\mathmit{b}\":\"𝓫\",\"\\\\mathmit{c}\":\"𝓬\",\"\\\\mathmit{d}\":\"𝓭\",\"\\\\mathmit{e}\":\"𝓮\",\"\\\\mathmit{f}\":\"𝓯\",\"\\\\mathmit{g}\":\"𝓰\",\"\\\\mathmit{h}\":\"𝓱\",\"\\\\mathmit{i}\":\"𝓲\",\"\\\\mathmit{j}\":\"𝓳\",\"\\\\mathmit{k}\":\"𝓴\",\"\\\\mathmit{l}\":\"𝓵\",\"\\\\mathmit{m}\":\"𝓶\",\"\\\\mathmit{n}\":\"𝓷\",\"\\\\mathmit{o}\":\"𝓸\",\"\\\\mathmit{p}\":\"𝓹\",\"\\\\mathmit{q}\":\"𝓺\",\"\\\\mathmit{r}\":\"𝓻\",\"\\\\mathmit{s}\":\"𝓼\",\"\\\\mathmit{t}\":\"𝓽\",\"\\\\mathmit{u}\":\"𝓾\",\"\\\\mathmit{v}\":\"𝓿\",\"\\\\mathmit{w}\":\"𝔀\",\"\\\\mathmit{x}\":\"𝔁\",\"\\\\mathmit{y}\":\"𝔂\",\"\\\\mathmit{z}\":\"𝔃\",\"\\\\mathfrak{A}\":\"𝔄\",\"\\\\mathfrak{B}\":\"𝔅\",\"\\\\mathfrak{D}\":\"𝔇\",\"\\\\mathfrak{E}\":\"𝔈\",\"\\\\mathfrak{F}\":\"𝔉\",\"\\\\mathfrak{G}\":\"𝔊\",\"\\\\mathfrak{J}\":\"𝔍\",\"\\\\mathfrak{K}\":\"𝔎\",\"\\\\mathfrak{L}\":\"𝔏\",\"\\\\mathfrak{M}\":\"𝔐\",\"\\\\mathfrak{N}\":\"𝔑\",\"\\\\mathfrak{O}\":\"𝔒\",\"\\\\mathfrak{P}\":\"𝔓\",\"\\\\mathfrak{Q}\":\"𝔔\",\"\\\\mathfrak{S}\":\"𝔖\",\"\\\\mathfrak{T}\":\"𝔗\",\"\\\\mathfrak{U}\":\"𝔘\",\"\\\\mathfrak{V}\":\"𝔙\",\"\\\\mathfrak{W}\":\"𝔚\",\"\\\\mathfrak{X}\":\"𝔛\",\"\\\\mathfrak{Y}\":\"𝔜\",\"\\\\mathfrak{a}\":\"𝔞\",\"\\\\mathfrak{b}\":\"𝔟\",\"\\\\mathfrak{c}\":\"𝔠\",\"\\\\mathfrak{d}\":\"𝔡\",\"\\\\mathfrak{e}\":\"𝔢\",\"\\\\mathfrak{f}\":\"𝔣\",\"\\\\mathfrak{g}\":\"𝔤\",\"\\\\mathfrak{h}\":\"𝔥\",\"\\\\mathfrak{i}\":\"𝔦\",\"\\\\mathfrak{j}\":\"𝔧\",\"\\\\mathfrak{k}\":\"𝔨\",\"\\\\mathfrak{l}\":\"𝔩\",\"\\\\mathfrak{m}\":\"𝔪\",\"\\\\mathfrak{n}\":\"𝔫\",\"\\\\mathfrak{o}\":\"𝔬\",\"\\\\mathfrak{p}\":\"𝔭\",\"\\\\mathfrak{q}\":\"𝔮\",\"\\\\mathfrak{r}\":\"𝔯\",\"\\\\mathfrak{s}\":\"𝔰\",\"\\\\mathfrak{t}\":\"𝔱\",\"\\\\mathfrak{u}\":\"𝔲\",\"\\\\mathfrak{v}\":\"𝔳\",\"\\\\mathfrak{w}\":\"𝔴\",\"\\\\mathfrak{x}\":\"𝔵\",\"\\\\mathfrak{y}\":\"𝔶\",\"\\\\mathfrak{z}\":\"𝔷\",\"\\\\mathbb{A}\":\"𝔸\",\"\\\\mathbb{B}\":\"𝔹\",\"\\\\mathbb{D}\":\"𝔻\",\"\\\\mathbb{E}\":\"𝔼\",\"\\\\mathbb{F}\":\"𝔽\",\"\\\\mathbb{G}\":\"𝔾\",\"\\\\mathbb{I}\":\"𝕀\",\"\\\\mathbb{J}\":\"𝕁\",\"\\\\mathbb{K}\":\"𝕂\",\"\\\\mathbb{L}\":\"𝕃\",\"\\\\mathbb{M}\":\"𝕄\",\"\\\\mathbb{O}\":\"𝕆\",\"\\\\mathbb{S}\":\"𝕊\",\"\\\\mathbb{T}\":\"𝕋\",\"\\\\mathbb{U}\":\"𝕌\",\"\\\\mathbb{V}\":\"𝕍\",\"\\\\mathbb{W}\":\"𝕎\",\"\\\\mathbb{X}\":\"𝕏\",\"\\\\mathbb{Y}\":\"𝕐\",\"\\\\mathbb{a}\":\"𝕒\",\"\\\\mathbb{b}\":\"𝕓\",\"\\\\mathbb{c}\":\"𝕔\",\"\\\\mathbb{d}\":\"𝕕\",\"\\\\mathbb{e}\":\"𝕖\",\"\\\\mathbb{f}\":\"𝕗\",\"\\\\mathbb{g}\":\"𝕘\",\"\\\\mathbb{h}\":\"𝕙\",\"\\\\mathbb{i}\":\"𝕚\",\"\\\\mathbb{j}\":\"𝕛\",\"\\\\mathbb{k}\":\"𝕜\",\"\\\\mathbb{l}\":\"𝕝\",\"\\\\mathbb{m}\":\"𝕞\",\"\\\\mathbb{n}\":\"𝕟\",\"\\\\mathbb{o}\":\"𝕠\",\"\\\\mathbb{p}\":\"𝕡\",\"\\\\mathbb{q}\":\"𝕢\",\"\\\\mathbb{r}\":\"𝕣\",\"\\\\mathbb{s}\":\"𝕤\",\"\\\\mathbb{t}\":\"𝕥\",\"\\\\mathbb{u}\":\"𝕦\",\"\\\\mathbb{v}\":\"𝕧\",\"\\\\mathbb{w}\":\"𝕨\",\"\\\\mathbb{x}\":\"𝕩\",\"\\\\mathbb{y}\":\"𝕪\",\"\\\\mathbb{z}\":\"𝕫\",\"\\\\mathslbb{A}\":\"𝕬\",\"\\\\mathslbb{B}\":\"𝕭\",\"\\\\mathslbb{C}\":\"𝕮\",\"\\\\mathslbb{D}\":\"𝕯\",\"\\\\mathslbb{E}\":\"𝕰\",\"\\\\mathslbb{F}\":\"𝕱\",\"\\\\mathslbb{G}\":\"𝕲\",\"\\\\mathslbb{H}\":\"𝕳\",\"\\\\mathslbb{I}\":\"𝕴\",\"\\\\mathslbb{J}\":\"𝕵\",\"\\\\mathslbb{K}\":\"𝕶\",\"\\\\mathslbb{L}\":\"𝕷\",\"\\\\mathslbb{M}\":\"𝕸\",\"\\\\mathslbb{N}\":\"𝕹\",\"\\\\mathslbb{O}\":\"𝕺\",\"\\\\mathslbb{P}\":\"𝕻\",\"\\\\mathslbb{Q}\":\"𝕼\",\"\\\\mathslbb{R}\":\"𝕽\",\"\\\\mathslbb{S}\":\"𝕾\",\"\\\\mathslbb{T}\":\"𝕿\",\"\\\\mathslbb{U}\":\"𝖀\",\"\\\\mathslbb{V}\":\"𝖁\",\"\\\\mathslbb{W}\":\"𝖂\",\"\\\\mathslbb{X}\":\"𝖃\",\"\\\\mathslbb{Y}\":\"𝖄\",\"\\\\mathslbb{Z}\":\"𝖅\",\"\\\\mathslbb{a}\":\"𝖆\",\"\\\\mathslbb{b}\":\"𝖇\",\"\\\\mathslbb{c}\":\"𝖈\",\"\\\\mathslbb{d}\":\"𝖉\",\"\\\\mathslbb{e}\":\"𝖊\",\"\\\\mathslbb{f}\":\"𝖋\",\"\\\\mathslbb{g}\":\"𝖌\",\"\\\\mathslbb{h}\":\"𝖍\",\"\\\\mathslbb{i}\":\"𝖎\",\"\\\\mathslbb{j}\":\"𝖏\",\"\\\\mathslbb{k}\":\"𝖐\",\"\\\\mathslbb{l}\":\"𝖑\",\"\\\\mathslbb{m}\":\"𝖒\",\"\\\\mathslbb{n}\":\"𝖓\",\"\\\\mathslbb{o}\":\"𝖔\",\"\\\\mathslbb{p}\":\"𝖕\",\"\\\\mathslbb{q}\":\"𝖖\",\"\\\\mathslbb{r}\":\"𝖗\",\"\\\\mathslbb{s}\":\"𝖘\",\"\\\\mathslbb{t}\":\"𝖙\",\"\\\\mathslbb{u}\":\"𝖚\",\"\\\\mathslbb{v}\":\"𝖛\",\"\\\\mathslbb{w}\":\"𝖜\",\"\\\\mathslbb{x}\":\"𝖝\",\"\\\\mathslbb{y}\":\"𝖞\",\"\\\\mathslbb{z}\":\"𝖟\",\"\\\\mathsf{A}\":\"𝖠\",\"\\\\mathsf{B}\":\"𝖡\",\"\\\\mathsf{C}\":\"𝖢\",\"\\\\mathsf{D}\":\"𝖣\",\"\\\\mathsf{E}\":\"𝖤\",\"\\\\mathsf{F}\":\"𝖥\",\"\\\\mathsf{G}\":\"𝖦\",\"\\\\mathsf{H}\":\"𝖧\",\"\\\\mathsf{I}\":\"𝖨\",\"\\\\mathsf{J}\":\"𝖩\",\"\\\\mathsf{K}\":\"𝖪\",\"\\\\mathsf{L}\":\"𝖫\",\"\\\\mathsf{M}\":\"𝖬\",\"\\\\mathsf{N}\":\"𝖭\",\"\\\\mathsf{O}\":\"𝖮\",\"\\\\mathsf{P}\":\"𝖯\",\"\\\\mathsf{Q}\":\"𝖰\",\"\\\\mathsf{R}\":\"𝖱\",\"\\\\mathsf{S}\":\"𝖲\",\"\\\\mathsf{T}\":\"𝖳\",\"\\\\mathsf{U}\":\"𝖴\",\"\\\\mathsf{V}\":\"𝖵\",\"\\\\mathsf{W}\":\"𝖶\",\"\\\\mathsf{X}\":\"𝖷\",\"\\\\mathsf{Y}\":\"𝖸\",\"\\\\mathsf{Z}\":\"𝖹\",\"\\\\mathsf{a}\":\"𝖺\",\"\\\\mathsf{b}\":\"𝖻\",\"\\\\mathsf{c}\":\"𝖼\",\"\\\\mathsf{d}\":\"𝖽\",\"\\\\mathsf{e}\":\"𝖾\",\"\\\\mathsf{f}\":\"𝖿\",\"\\\\mathsf{g}\":\"𝗀\",\"\\\\mathsf{h}\":\"𝗁\",\"\\\\mathsf{i}\":\"𝗂\",\"\\\\mathsf{j}\":\"𝗃\",\"\\\\mathsf{k}\":\"𝗄\",\"\\\\mathsf{l}\":\"𝗅\",\"\\\\mathsf{m}\":\"𝗆\",\"\\\\mathsf{n}\":\"𝗇\",\"\\\\mathsf{o}\":\"𝗈\",\"\\\\mathsf{p}\":\"𝗉\",\"\\\\mathsf{q}\":\"𝗊\",\"\\\\mathsf{r}\":\"𝗋\",\"\\\\mathsf{s}\":\"𝗌\",\"\\\\mathsf{t}\":\"𝗍\",\"\\\\mathsf{u}\":\"𝗎\",\"\\\\mathsf{v}\":\"𝗏\",\"\\\\mathsf{w}\":\"𝗐\",\"\\\\mathsf{x}\":\"𝗑\",\"\\\\mathsf{y}\":\"𝗒\",\"\\\\mathsf{z}\":\"𝗓\",\"\\\\mathsfbf{A}\":\"𝗔\",\"\\\\mathsfbf{B}\":\"𝗕\",\"\\\\mathsfbf{C}\":\"𝗖\",\"\\\\mathsfbf{D}\":\"𝗗\",\"\\\\mathsfbf{E}\":\"𝗘\",\"\\\\mathsfbf{F}\":\"𝗙\",\"\\\\mathsfbf{G}\":\"𝗚\",\"\\\\mathsfbf{H}\":\"𝗛\",\"\\\\mathsfbf{I}\":\"𝗜\",\"\\\\mathsfbf{J}\":\"𝗝\",\"\\\\mathsfbf{K}\":\"𝗞\",\"\\\\mathsfbf{L}\":\"𝗟\",\"\\\\mathsfbf{M}\":\"𝗠\",\"\\\\mathsfbf{N}\":\"𝗡\",\"\\\\mathsfbf{O}\":\"𝗢\",\"\\\\mathsfbf{P}\":\"𝗣\",\"\\\\mathsfbf{Q}\":\"𝗤\",\"\\\\mathsfbf{R}\":\"𝗥\",\"\\\\mathsfbf{S}\":\"𝗦\",\"\\\\mathsfbf{T}\":\"𝗧\",\"\\\\mathsfbf{U}\":\"𝗨\",\"\\\\mathsfbf{V}\":\"𝗩\",\"\\\\mathsfbf{W}\":\"𝗪\",\"\\\\mathsfbf{X}\":\"𝗫\",\"\\\\mathsfbf{Y}\":\"𝗬\",\"\\\\mathsfbf{Z}\":\"𝗭\",\"\\\\mathsfbf{a}\":\"𝗮\",\"\\\\mathsfbf{b}\":\"𝗯\",\"\\\\mathsfbf{c}\":\"𝗰\",\"\\\\mathsfbf{d}\":\"𝗱\",\"\\\\mathsfbf{e}\":\"𝗲\",\"\\\\mathsfbf{f}\":\"𝗳\",\"\\\\mathsfbf{g}\":\"𝗴\",\"\\\\mathsfbf{h}\":\"𝗵\",\"\\\\mathsfbf{i}\":\"𝗶\",\"\\\\mathsfbf{j}\":\"𝗷\",\"\\\\mathsfbf{k}\":\"𝗸\",\"\\\\mathsfbf{l}\":\"𝗹\",\"\\\\mathsfbf{m}\":\"𝗺\",\"\\\\mathsfbf{n}\":\"𝗻\",\"\\\\mathsfbf{o}\":\"𝗼\",\"\\\\mathsfbf{p}\":\"𝗽\",\"\\\\mathsfbf{q}\":\"𝗾\",\"\\\\mathsfbf{r}\":\"𝗿\",\"\\\\mathsfbf{s}\":\"𝘀\",\"\\\\mathsfbf{t}\":\"𝘁\",\"\\\\mathsfbf{u}\":\"𝘂\",\"\\\\mathsfbf{v}\":\"𝘃\",\"\\\\mathsfbf{w}\":\"𝘄\",\"\\\\mathsfbf{x}\":\"𝘅\",\"\\\\mathsfbf{y}\":\"𝘆\",\"\\\\mathsfbf{z}\":\"𝘇\",\"\\\\mathsfsl{A}\":\"𝘈\",\"\\\\mathsfsl{B}\":\"𝘉\",\"\\\\mathsfsl{C}\":\"𝘊\",\"\\\\mathsfsl{D}\":\"𝘋\",\"\\\\mathsfsl{E}\":\"𝘌\",\"\\\\mathsfsl{F}\":\"𝘍\",\"\\\\mathsfsl{G}\":\"𝘎\",\"\\\\mathsfsl{H}\":\"𝘏\",\"\\\\mathsfsl{I}\":\"𝘐\",\"\\\\mathsfsl{J}\":\"𝘑\",\"\\\\mathsfsl{K}\":\"𝘒\",\"\\\\mathsfsl{L}\":\"𝘓\",\"\\\\mathsfsl{M}\":\"𝘔\",\"\\\\mathsfsl{N}\":\"𝘕\",\"\\\\mathsfsl{O}\":\"𝘖\",\"\\\\mathsfsl{P}\":\"𝘗\",\"\\\\mathsfsl{Q}\":\"𝘘\",\"\\\\mathsfsl{R}\":\"𝘙\",\"\\\\mathsfsl{S}\":\"𝘚\",\"\\\\mathsfsl{T}\":\"𝘛\",\"\\\\mathsfsl{U}\":\"𝘜\",\"\\\\mathsfsl{V}\":\"𝘝\",\"\\\\mathsfsl{W}\":\"𝘞\",\"\\\\mathsfsl{X}\":\"𝘟\",\"\\\\mathsfsl{Y}\":\"𝘠\",\"\\\\mathsfsl{Z}\":\"𝘡\",\"\\\\mathsfsl{a}\":\"𝘢\",\"\\\\mathsfsl{b}\":\"𝘣\",\"\\\\mathsfsl{c}\":\"𝘤\",\"\\\\mathsfsl{d}\":\"𝘥\",\"\\\\mathsfsl{e}\":\"𝘦\",\"\\\\mathsfsl{f}\":\"𝘧\",\"\\\\mathsfsl{g}\":\"𝘨\",\"\\\\mathsfsl{h}\":\"𝘩\",\"\\\\mathsfsl{i}\":\"𝘪\",\"\\\\mathsfsl{j}\":\"𝘫\",\"\\\\mathsfsl{k}\":\"𝘬\",\"\\\\mathsfsl{l}\":\"𝘭\",\"\\\\mathsfsl{m}\":\"𝘮\",\"\\\\mathsfsl{n}\":\"𝘯\",\"\\\\mathsfsl{o}\":\"𝘰\",\"\\\\mathsfsl{p}\":\"𝘱\",\"\\\\mathsfsl{q}\":\"𝘲\",\"\\\\mathsfsl{r}\":\"𝘳\",\"\\\\mathsfsl{s}\":\"𝘴\",\"\\\\mathsfsl{t}\":\"𝘵\",\"\\\\mathsfsl{u}\":\"𝘶\",\"\\\\mathsfsl{v}\":\"𝘷\",\"\\\\mathsfsl{w}\":\"𝘸\",\"\\\\mathsfsl{x}\":\"𝘹\",\"\\\\mathsfsl{y}\":\"𝘺\",\"\\\\mathsfsl{z}\":\"𝘻\",\"\\\\mathsfbfsl{A}\":\"𝘼\",\"\\\\mathsfbfsl{B}\":\"𝘽\",\"\\\\mathsfbfsl{C}\":\"𝘾\",\"\\\\mathsfbfsl{D}\":\"𝘿\",\"\\\\mathsfbfsl{E}\":\"𝙀\",\"\\\\mathsfbfsl{F}\":\"𝙁\",\"\\\\mathsfbfsl{G}\":\"𝙂\",\"\\\\mathsfbfsl{H}\":\"𝙃\",\"\\\\mathsfbfsl{I}\":\"𝙄\",\"\\\\mathsfbfsl{J}\":\"𝙅\",\"\\\\mathsfbfsl{K}\":\"𝙆\",\"\\\\mathsfbfsl{L}\":\"𝙇\",\"\\\\mathsfbfsl{M}\":\"𝙈\",\"\\\\mathsfbfsl{N}\":\"𝙉\",\"\\\\mathsfbfsl{O}\":\"𝙊\",\"\\\\mathsfbfsl{P}\":\"𝙋\",\"\\\\mathsfbfsl{Q}\":\"𝙌\",\"\\\\mathsfbfsl{R}\":\"𝙍\",\"\\\\mathsfbfsl{S}\":\"𝙎\",\"\\\\mathsfbfsl{T}\":\"𝙏\",\"\\\\mathsfbfsl{U}\":\"𝙐\",\"\\\\mathsfbfsl{V}\":\"𝙑\",\"\\\\mathsfbfsl{W}\":\"𝙒\",\"\\\\mathsfbfsl{X}\":\"𝙓\",\"\\\\mathsfbfsl{Y}\":\"𝙔\",\"\\\\mathsfbfsl{Z}\":\"𝙕\",\"\\\\mathsfbfsl{a}\":\"𝙖\",\"\\\\mathsfbfsl{b}\":\"𝙗\",\"\\\\mathsfbfsl{c}\":\"𝙘\",\"\\\\mathsfbfsl{d}\":\"𝙙\",\"\\\\mathsfbfsl{e}\":\"𝙚\",\"\\\\mathsfbfsl{f}\":\"𝙛\",\"\\\\mathsfbfsl{g}\":\"𝙜\",\"\\\\mathsfbfsl{h}\":\"𝙝\",\"\\\\mathsfbfsl{i}\":\"𝙞\",\"\\\\mathsfbfsl{j}\":\"𝙟\",\"\\\\mathsfbfsl{k}\":\"𝙠\",\"\\\\mathsfbfsl{l}\":\"𝙡\",\"\\\\mathsfbfsl{m}\":\"𝙢\",\"\\\\mathsfbfsl{n}\":\"𝙣\",\"\\\\mathsfbfsl{o}\":\"𝙤\",\"\\\\mathsfbfsl{p}\":\"𝙥\",\"\\\\mathsfbfsl{q}\":\"𝙦\",\"\\\\mathsfbfsl{r}\":\"𝙧\",\"\\\\mathsfbfsl{s}\":\"𝙨\",\"\\\\mathsfbfsl{t}\":\"𝙩\",\"\\\\mathsfbfsl{u}\":\"𝙪\",\"\\\\mathsfbfsl{v}\":\"𝙫\",\"\\\\mathsfbfsl{w}\":\"𝙬\",\"\\\\mathsfbfsl{x}\":\"𝙭\",\"\\\\mathsfbfsl{y}\":\"𝙮\",\"\\\\mathsfbfsl{z}\":\"𝙯\",\"\\\\mathtt{A}\":\"𝙰\",\"\\\\mathtt{B}\":\"𝙱\",\"\\\\mathtt{C}\":\"𝙲\",\"\\\\mathtt{D}\":\"𝙳\",\"\\\\mathtt{E}\":\"𝙴\",\"\\\\mathtt{F}\":\"𝙵\",\"\\\\mathtt{G}\":\"𝙶\",\"\\\\mathtt{H}\":\"𝙷\",\"\\\\mathtt{I}\":\"𝙸\",\"\\\\mathtt{J}\":\"𝙹\",\"\\\\mathtt{K}\":\"𝙺\",\"\\\\mathtt{L}\":\"𝙻\",\"\\\\mathtt{M}\":\"𝙼\",\"\\\\mathtt{N}\":\"𝙽\",\"\\\\mathtt{O}\":\"𝙾\",\"\\\\mathtt{P}\":\"𝙿\",\"\\\\mathtt{Q}\":\"𝚀\",\"\\\\mathtt{R}\":\"𝚁\",\"\\\\mathtt{S}\":\"𝚂\",\"\\\\mathtt{T}\":\"𝚃\",\"\\\\mathtt{U}\":\"𝚄\",\"\\\\mathtt{V}\":\"𝚅\",\"\\\\mathtt{W}\":\"𝚆\",\"\\\\mathtt{X}\":\"𝚇\",\"\\\\mathtt{Y}\":\"𝚈\",\"\\\\mathtt{Z}\":\"𝚉\",\"\\\\mathtt{a}\":\"𝚊\",\"\\\\mathtt{b}\":\"𝚋\",\"\\\\mathtt{c}\":\"𝚌\",\"\\\\mathtt{d}\":\"𝚍\",\"\\\\mathtt{e}\":\"𝚎\",\"\\\\mathtt{f}\":\"𝚏\",\"\\\\mathtt{g}\":\"𝚐\",\"\\\\mathtt{h}\":\"𝚑\",\"\\\\mathtt{i}\":\"𝚒\",\"\\\\mathtt{j}\":\"𝚓\",\"\\\\mathtt{k}\":\"𝚔\",\"\\\\mathtt{l}\":\"𝚕\",\"\\\\mathtt{m}\":\"𝚖\",\"\\\\mathtt{n}\":\"𝚗\",\"\\\\mathtt{o}\":\"𝚘\",\"\\\\mathtt{p}\":\"𝚙\",\"\\\\mathtt{q}\":\"𝚚\",\"\\\\mathtt{r}\":\"𝚛\",\"\\\\mathtt{s}\":\"𝚜\",\"\\\\mathtt{t}\":\"𝚝\",\"\\\\mathtt{u}\":\"𝚞\",\"\\\\mathtt{v}\":\"𝚟\",\"\\\\mathtt{w}\":\"𝚠\",\"\\\\mathtt{x}\":\"𝚡\",\"\\\\mathtt{y}\":\"𝚢\",\"\\\\mathtt{z}\":\"𝚣\",\"\\\\mathbf{\\\\Gamma}\":\"𝚪\",\"\\\\mathbf{\\\\Delta}\":\"𝚫\",\"\\\\mathbf{\\\\Theta}\":\"𝚯\",\"\\\\mathbf{\\\\Lambda}\":\"𝚲\",\"\\\\mathbf{\\\\Xi}\":\"𝚵\",\"\\\\mathbf{\\\\Pi}\":\"𝚷\",\"\\\\mathbf{\\\\vartheta}\":\"𝚹\",\"\\\\mathbf{\\\\Sigma}\":\"𝚺\",\"\\\\mathbf{\\\\Upsilon}\":\"𝚼\",\"\\\\mathbf{\\\\Phi}\":\"𝚽\",\"\\\\mathbf{\\\\Psi}\":\"𝚿\",\"\\\\mathbf{\\\\Omega}\":\"𝛀\",\"\\\\mathbf{\\\\nabla}\":\"𝛁\",\"\\\\mathbf{\\\\alpha}\":\"𝛂\",\"\\\\mathbf{\\\\beta}\":\"𝛃\",\"\\\\mathbf{\\\\gamma}\":\"𝛄\",\"\\\\mathbf{\\\\delta}\":\"𝛅\",\"\\\\mathbf{\\\\epsilon}\":\"𝛆\",\"\\\\mathbf{\\\\zeta}\":\"𝛇\",\"\\\\mathbf{\\\\eta}\":\"𝛈\",\"\\\\mathbf{\\\\theta}\":\"𝛉\",\"\\\\mathbf{\\\\lambda}\":\"𝛌\",\"\\\\mathbf{\\\\xi}\":\"𝛏\",\"\\\\mathbf{\\\\pi}\":\"𝛑\",\"\\\\mathbf{\\\\varsigma}\":\"𝛓\",\"\\\\mathbf{\\\\sigma}\":\"𝛔\",\"\\\\mathbf{\\\\upsilon}\":\"𝛖\",\"\\\\mathbf{\\\\phi}\":\"𝛗\",\"\\\\mathbf{\\\\psi}\":\"𝛙\",\"\\\\mathbf{\\\\omega}\":\"𝛚\",\"\\\\mathbf{\\\\varkappa}\":\"𝛞\",\"\\\\mathbf{\\\\varrho}\":\"𝛠\",\"\\\\mathbf{\\\\varpi}\":\"𝛡\",\"\\\\mathsl{\\\\Gamma}\":\"𝛤\",\"\\\\mathsl{\\\\Delta}\":\"𝛥\",\"\\\\mathsl{\\\\Lambda}\":\"𝛬\",\"\\\\mathsl{\\\\Xi}\":\"𝛯\",\"\\\\mathsl{\\\\Pi}\":\"𝛱\",\"\\\\mathsl{\\\\Theta}\":\"𝛳\",\"\\\\mathsl{\\\\Sigma}\":\"𝛴\",\"\\\\mathsl{\\\\Upsilon}\":\"𝛶\",\"\\\\mathsl{\\\\Phi}\":\"𝛷\",\"\\\\mathsl{\\\\Psi}\":\"𝛹\",\"\\\\mathsl{\\\\Omega}\":\"𝛺\",\"\\\\mathsl{\\\\nabla}\":\"𝛻\",\"\\\\mathsl{\\\\gamma}\":\"𝛾\",\"\\\\mathsl{\\\\delta}\":\"𝛿\",\"\\\\mathsl{\\\\theta}\":\"𝜃\",\"\\\\mathsl{\\\\lambda}\":\"𝜆\",\"\\\\mu\":\"𝜇\",\"\\\\mathsl{\\\\xi}\":\"𝜉\",\"\\\\mathsl{\\\\pi}\":\"𝜋\",\"\\\\mathsl{\\\\varsigma}\":\"𝜍\",\"\\\\mathsl{\\\\sigma}\":\"𝜎\",\"\\\\mathsl{\\\\upsilon}\":\"𝜐\",\"\\\\mathsl{\\\\varphi}\":\"𝜑\",\"\\\\mathsl{\\\\psi}\":\"𝜓\",\"\\\\mathsl{\\\\omega}\":\"𝜔\",\"\\\\mathsl{\\\\vartheta}\":\"𝜗\",\"\\\\mathsl{\\\\varkappa}\":\"𝜘\",\"\\\\mathsl{\\\\phi}\":\"𝜙\",\"\\\\mathsl{\\\\varrho}\":\"𝜚\",\"\\\\mathsl{\\\\varpi}\":\"𝜛\",\"\\\\mathbit{\\\\Gamma}\":\"𝜞\",\"\\\\mathbit{\\\\Delta}\":\"𝜟\",\"\\\\mathbit{\\\\Theta}\":\"𝜣\",\"\\\\mathbit{\\\\Lambda}\":\"𝜦\",\"\\\\mathbit{\\\\Xi}\":\"𝜩\",\"\\\\mathbit{\\\\Pi}\":\"𝜫\",\"\\\\mathbit{\\\\Sigma}\":\"𝜮\",\"\\\\mathbit{\\\\Upsilon}\":\"𝜰\",\"\\\\mathbit{\\\\Phi}\":\"𝜱\",\"\\\\mathbit{\\\\Psi}\":\"𝜳\",\"\\\\mathbit{\\\\Omega}\":\"𝜴\",\"\\\\mathbit{\\\\nabla}\":\"𝜵\",\"\\\\mathbit{\\\\alpha}\":\"𝜶\",\"\\\\mathbit{\\\\beta}\":\"𝜷\",\"\\\\mathbit{\\\\gamma}\":\"𝜸\",\"\\\\mathbit{\\\\delta}\":\"𝜹\",\"\\\\mathbit{\\\\epsilon}\":\"𝜺\",\"\\\\mathbit{\\\\zeta}\":\"𝜻\",\"\\\\mathbit{\\\\eta}\":\"𝜼\",\"\\\\mathbit{\\\\theta}\":\"𝜽\",\"\\\\mathbit{\\\\imath}\":\"𝜾\",\"\\\\mathbit{\\\\kappa}\":\"𝜿\",\"\\\\mathbit{\\\\lambda}\":\"𝝀\",\"\\\\mathbit{\\\\xi}\":\"𝝃\",\"\\\\mathbit{\\\\pi}\":\"𝝅\",\"\\\\mathbit{\\\\rho}\":\"𝝆\",\"\\\\mathbit{\\\\varsigma}\":\"𝝇\",\"\\\\mathbit{\\\\sigma}\":\"𝝈\",\"\\\\mathbit{\\\\tau}\":\"𝝉\",\"\\\\mathbit{\\\\upsilon}\":\"𝝊\",\"\\\\mathbit{\\\\varphi}\":\"𝝋\",\"\\\\mathbit{\\\\chi}\":\"𝝌\",\"\\\\mathbit{\\\\psi}\":\"𝝍\",\"\\\\mathbit{\\\\omega}\":\"𝝎\",\"\\\\mathbit{\\\\vartheta}\":\"𝝑\",\"\\\\mathbit{\\\\varkappa}\":\"𝝒\",\"\\\\mathbit{\\\\phi}\":\"𝝓\",\"\\\\mathbit{\\\\varrho}\":\"𝝔\",\"\\\\mathbit{\\\\varpi}\":\"𝝕\",\"\\\\mathsfbf{\\\\Gamma}\":\"𝝘\",\"\\\\mathsfbf{\\\\Delta}\":\"𝝙\",\"\\\\mathsfbf{\\\\Theta}\":\"𝝝\",\"\\\\mathsfbf{\\\\Lambda}\":\"𝝠\",\"\\\\mathsfbf{\\\\Xi}\":\"𝝣\",\"\\\\mathsfbf{\\\\Pi}\":\"𝝥\",\"\\\\mathsfbf{\\\\Sigma}\":\"𝝨\",\"\\\\mathsfbf{\\\\Upsilon}\":\"𝝪\",\"\\\\mathsfbf{\\\\Phi}\":\"𝝫\",\"\\\\mathsfbf{\\\\Psi}\":\"𝝭\",\"\\\\mathsfbf{\\\\Omega}\":\"𝝮\",\"\\\\mathsfbf{\\\\nabla}\":\"𝝯\",\"\\\\mathsfbf{\\\\alpha}\":\"𝝰\",\"\\\\mathsfbf{\\\\beta}\":\"𝝱\",\"\\\\mathsfbf{\\\\gamma}\":\"𝝲\",\"\\\\mathsfbf{\\\\delta}\":\"𝝳\",\"\\\\mathsfbf{\\\\varepsilon}\":\"𝝴\",\"\\\\mathsfbf{\\\\zeta}\":\"𝝵\",\"\\\\mathsfbf{\\\\eta}\":\"𝝶\",\"\\\\mathsfbf{\\\\theta}\":\"𝝷\",\"\\\\mathsfbf{\\\\imath}\":\"𝝸\",\"\\\\mathsfbf{\\\\kappa}\":\"𝝹\",\"\\\\mathsfbf{\\\\lambda}\":\"𝝺\",\"\\\\mathsfbf{\\\\xi}\":\"𝝽\",\"\\\\mathsfbf{\\\\pi}\":\"𝝿\",\"\\\\mathsfbf{\\\\rho}\":\"𝞀\",\"\\\\mathsfbf{\\\\varsigma}\":\"𝞁\",\"\\\\mathsfbf{\\\\sigma}\":\"𝞂\",\"\\\\mathsfbf{\\\\tau}\":\"𝞃\",\"\\\\mathsfbf{\\\\upsilon}\":\"𝞄\",\"\\\\mathsfbf{\\\\varphi}\":\"𝞅\",\"\\\\mathsfbf{\\\\chi}\":\"𝞆\",\"\\\\mathsfbf{\\\\psi}\":\"𝞇\",\"\\\\mathsfbf{\\\\omega}\":\"𝞈\",\"\\\\mathsfbf{\\\\vartheta}\":\"𝞋\",\"\\\\mathsfbf{\\\\varkappa}\":\"𝞌\",\"\\\\mathsfbf{\\\\phi}\":\"𝞍\",\"\\\\mathsfbf{\\\\varrho}\":\"𝞎\",\"\\\\mathsfbf{\\\\varpi}\":\"𝞏\",\"\\\\mathsfbfsl{\\\\Gamma}\":\"𝞒\",\"\\\\mathsfbfsl{\\\\Delta}\":\"𝞓\",\"\\\\mathsfbfsl{\\\\Theta}\":\"𝞗\",\"\\\\mathsfbfsl{\\\\Lambda}\":\"𝞚\",\"\\\\mathsfbfsl{\\\\Xi}\":\"𝞝\",\"\\\\mathsfbfsl{\\\\Pi}\":\"𝞟\",\"\\\\mathsfbfsl{\\\\Sigma}\":\"𝞢\",\"\\\\mathsfbfsl{\\\\Upsilon}\":\"𝞤\",\"\\\\mathsfbfsl{\\\\Phi}\":\"𝞥\",\"\\\\mathsfbfsl{\\\\Psi}\":\"𝞧\",\"\\\\mathsfbfsl{\\\\Omega}\":\"𝞨\",\"\\\\mathsfbfsl{\\\\nabla}\":\"𝞩\",\"\\\\mathsfbfsl{\\\\alpha}\":\"𝞪\",\"\\\\mathsfbfsl{\\\\beta}\":\"𝞫\",\"\\\\mathsfbfsl{\\\\gamma}\":\"𝞬\",\"\\\\mathsfbfsl{\\\\delta}\":\"𝞭\",\"\\\\mathsfbfsl{\\\\varepsilon}\":\"𝞮\",\"\\\\mathsfbfsl{\\\\zeta}\":\"𝞯\",\"\\\\mathsfbfsl{\\\\eta}\":\"𝞰\",\"\\\\mathsfbfsl{\\\\theta}\":\"𝞱\",\"\\\\mathsfbfsl{\\\\imath}\":\"𝞲\",\"\\\\mathsfbfsl{\\\\kappa}\":\"𝞳\",\"\\\\mathsfbfsl{\\\\lambda}\":\"𝞴\",\"\\\\mathsfbfsl{\\\\xi}\":\"𝞷\",\"\\\\mathsfbfsl{\\\\pi}\":\"𝞹\",\"\\\\mathsfbfsl{\\\\rho}\":\"𝞺\",\"\\\\mathsfbfsl{\\\\varsigma}\":\"𝞻\",\"\\\\mathsfbfsl{\\\\sigma}\":\"𝞼\",\"\\\\mathsfbfsl{\\\\tau}\":\"𝞽\",\"\\\\mathsfbfsl{\\\\upsilon}\":\"𝞾\",\"\\\\mathsfbfsl{\\\\varphi}\":\"𝞿\",\"\\\\mathsfbfsl{\\\\chi}\":\"𝟀\",\"\\\\mathsfbfsl{\\\\psi}\":\"𝟁\",\"\\\\mathsfbfsl{\\\\omega}\":\"𝟂\",\"\\\\mathsfbfsl{\\\\vartheta}\":\"𝟅\",\"\\\\mathsfbfsl{\\\\varkappa}\":\"𝟆\",\"\\\\mathsfbfsl{\\\\phi}\":\"𝟇\",\"\\\\mathsfbfsl{\\\\varrho}\":\"𝟈\",\"\\\\mathsfbfsl{\\\\varpi}\":\"𝟉\",\"\\\\mbfDigamma\":\"𝟊\",\"\\\\mbfdigamma\":\"𝟋\",\"\\\\mathbf{0}\":\"𝟎\",\"\\\\mathbf{1}\":\"𝟏\",\"\\\\mathbf{2}\":\"𝟐\",\"\\\\mathbf{3}\":\"𝟑\",\"\\\\mathbf{4}\":\"𝟒\",\"\\\\mathbf{5}\":\"𝟓\",\"\\\\mathbf{6}\":\"𝟔\",\"\\\\mathbf{7}\":\"𝟕\",\"\\\\mathbf{8}\":\"𝟖\",\"\\\\mathbf{9}\":\"𝟗\",\"\\\\mathbb{0}\":\"𝟘\",\"\\\\mathbb{1}\":\"𝟙\",\"\\\\mathbb{2}\":\"𝟚\",\"\\\\mathbb{3}\":\"𝟛\",\"\\\\mathbb{4}\":\"𝟜\",\"\\\\mathbb{5}\":\"𝟝\",\"\\\\mathbb{6}\":\"𝟞\",\"\\\\mathbb{7}\":\"𝟟\",\"\\\\mathbb{8}\":\"𝟠\",\"\\\\mathbb{9}\":\"𝟡\",\"\\\\mathsf{0}\":\"𝟢\",\"\\\\mathsf{1}\":\"𝟣\",\"\\\\mathsf{2}\":\"𝟤\",\"\\\\mathsf{3}\":\"𝟥\",\"\\\\mathsf{4}\":\"𝟦\",\"\\\\mathsf{5}\":\"𝟧\",\"\\\\mathsf{6}\":\"𝟨\",\"\\\\mathsf{7}\":\"𝟩\",\"\\\\mathsf{8}\":\"𝟪\",\"\\\\mathsf{9}\":\"𝟫\",\"\\\\mathsfbf{0}\":\"𝟬\",\"\\\\mathsfbf{1}\":\"𝟭\",\"\\\\mathsfbf{2}\":\"𝟮\",\"\\\\mathsfbf{3}\":\"𝟯\",\"\\\\mathsfbf{4}\":\"𝟰\",\"\\\\mathsfbf{5}\":\"𝟱\",\"\\\\mathsfbf{6}\":\"𝟲\",\"\\\\mathsfbf{7}\":\"𝟳\",\"\\\\mathsfbf{8}\":\"𝟴\",\"\\\\mathsfbf{9}\":\"𝟵\",\"\\\\mathtt{0}\":\"𝟶\",\"\\\\mathtt{1}\":\"𝟷\",\"\\\\mathtt{2}\":\"𝟸\",\"\\\\mathtt{3}\":\"𝟹\",\"\\\\mathtt{4}\":\"𝟺\",\"\\\\mathtt{5}\":\"𝟻\",\"\\\\mathtt{6}\":\"𝟼\",\"\\\\mathtt{7}\":\"𝟽\",\"\\\\mathtt{8}\":\"𝟾\",\"\\\\mathtt{9}\":\"𝟿\"}");

/***/ }),

/***/ "../node_modules/unicode2latex/tables/unicode.json":
/*!*********************************************************!*\
  !*** ../node_modules/unicode2latex/tables/unicode.json ***!
  \*********************************************************/
/*! exports provided: #, $, %, &, /​, <, >, \, ^, _, {, }, ~,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , ​,  ,  , default */
/*! all exports used */
/***/ (function(module) {

module.exports = JSON.parse("{\"#\":{\"math\":\"\\\\#\",\"text\":\"\\\\#\"},\"$\":{\"math\":\"\\\\$\",\"text\":\"\\\\$\"},\"%\":{\"math\":\"\\\\%\",\"text\":\"\\\\%\"},\"&\":{\"math\":\"\\\\&\",\"text\":\"\\\\&\"},\"/​\":{\"text\":\"\\\\slash\",\"commandspacer\":true},\"<\":{\"math\":\"<\"},\">\":{\"math\":\">\"},\"\\\\\":{\"math\":\"\\\\backslash\",\"text\":\"\\\\textbackslash\",\"commandspacer\":true},\"^\":{\"math\":\"\\\\sphat\",\"text\":\"\\\\^\"},\"_\":{\"math\":\"\\\\_\",\"text\":\"\\\\_\"},\"{\":{\"math\":\"\\\\lbrace\",\"text\":\"\\\\{\"},\"}\":{\"math\":\"\\\\rbrace\",\"text\":\"\\\\}\"},\"~\":{\"math\":\"\\\\sptilde\",\"text\":\"\\\\textasciitilde\",\"commandspacer\":true},\" \":{\"math\":\"~\",\"space\":true,\"text\":\"~\"},\" \":{\"text\":\" \",\"space\":true},\" \":{\"math\":\"\\\\quad\",\"space\":true},\" \":{\"text\":\"\\\\hspace{0.6em}\",\"space\":true},\" \":{\"math\":\"\\\\quad\",\"space\":true,\"text\":\"\\\\hspace{1em}\"},\" \":{\"text\":\"\\\\;\",\"space\":true},\" \":{\"text\":\"\\\\hspace{0.25em}\",\"space\":true},\" \":{\"text\":\"\\\\hspace{0.166em}\",\"space\":true},\" \":{\"text\":\"\\\\hphantom{0}\",\"space\":true},\" \":{\"text\":\"\\\\hphantom{,}\",\"space\":true},\" \":{\"text\":\"\\\\,\",\"space\":true},\" \":{\"math\":\"\\\\mkern1mu\",\"space\":true},\"​\":{\"text\":\"\\\\mbox\",\"commandspacer\":true,\"space\":true},\" \":{\"text\":\" \",\"space\":true},\" \":{\"math\":\"\\\\:\",\"space\":true,\"text\":\"\\\\:\"}}");

/***/ }),

/***/ "../node_modules/xregexp/tools/output/categories.js":
/*!**********************************************************!*\
  !*** ../node_modules/xregexp/tools/output/categories.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = [
    {
        'name': 'C',
        'alias': 'Other',
        'isBmpLast': true,
        'bmp': '\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u089F\u08B5\u08BE-\u08D2\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D04\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20C0-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E50-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u4DB6-\u4DBF\u9FF0-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7C0\uA7C1\uA7C7-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB68-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF',
        'astral': '\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F-\uDEFF\uDF28-\uDF2F\uDF5A-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD47-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC60-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD00-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD87B-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDE9-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD6D-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED6-\uDEDF\uDEED-\uDEEF\uDEFB-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C\uDD72\uDD77-\uDD79\uDDA3\uDDA4\uDDAB-\uDDAD\uDDCB\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE74-\uDE77\uDE7B-\uDE7F\uDE83-\uDE8F\uDE96-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]'
    },
    {
        'name': 'Cc',
        'alias': 'Control',
        'bmp': '\0-\x1F\x7F-\x9F'
    },
    {
        'name': 'Cf',
        'alias': 'Format',
        'bmp': '\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB',
        'astral': '\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]'
    },
    {
        'name': 'Cn',
        'alias': 'Unassigned',
        'bmp': '\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u05FF\u061D\u070E\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u089F\u08B5\u08BE-\u08D2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D04\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u2065\u2072\u2073\u208F\u209D-\u209F\u20C0-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E50-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u4DB6-\u4DBF\u9FF0-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7C0\uA7C1\uA7C7-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB68-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD\uFEFE\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFF8\uFFFE\uFFFF',
        'astral': '\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F-\uDEFF\uDF28-\uDF2F\uDF5A-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCC2-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD47-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC60-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD00-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD87B-\uD87D\uD87F-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDE9-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD6D-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED6-\uDEDF\uDEED-\uDEEF\uDEFB-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C\uDD72\uDD77-\uDD79\uDDA3\uDDA4\uDDAB-\uDDAD\uDDCB\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE74-\uDE77\uDE7B-\uDE7F\uDE83-\uDE8F\uDE96-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]'
    },
    {
        'name': 'Co',
        'alias': 'Private_Use',
        'bmp': '\uE000-\uF8FF',
        'astral': '[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]'
    },
    {
        'name': 'Cs',
        'alias': 'Surrogate',
        'bmp': '\uD800-\uDFFF'
    },
    {
        'name': 'L',
        'alias': 'Letter',
        'bmp': 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
        'astral': '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]'
    },
    {
        'name': 'LC',
        'alias': 'Cased_Letter',
        'bmp': 'A-Za-z\xB5\xC0-\xD6\xD8-\xF6\xF8-\u01BA\u01BC-\u01BF\u01C4-\u0293\u0295-\u02AF\u0370-\u0373\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0560-\u0588\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FD-\u10FF\u13A0-\u13F5\u13F8-\u13FD\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C7B\u2C7E-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA640-\uA66D\uA680-\uA69B\uA722-\uA76F\uA771-\uA787\uA78B-\uA78E\uA790-\uA7BF\uA7C2-\uA7C6\uA7FA\uAB30-\uAB5A\uAB60-\uAB67\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A',
        'astral': '\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDD00-\uDD43]'
    },
    {
        'name': 'Ll',
        'alias': 'Lowercase_Letter',
        'bmp': 'a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7FA\uAB30-\uAB5A\uAB60-\uAB67\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A',
        'astral': '\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]'
    },
    {
        'name': 'Lm',
        'alias': 'Modifier_Letter',
        'bmp': '\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E\uFF9F',
        'astral': '\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD838[\uDD37-\uDD3D]|\uD83A\uDD4B'
    },
    {
        'name': 'Lo',
        'alias': 'Other_Letter',
        'bmp': '\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05EF-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1100-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
        'astral': '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD838[\uDD00-\uDD2C\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]'
    },
    {
        'name': 'Lt',
        'alias': 'Titlecase_Letter',
        'bmp': '\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC'
    },
    {
        'name': 'Lu',
        'alias': 'Uppercase_Letter',
        'bmp': 'A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C2\uA7C4-\uA7C6\uFF21-\uFF3A',
        'astral': '\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]'
    },
    {
        'name': 'M',
        'alias': 'Mark',
        'bmp': '\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F',
        'astral': '\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDF46-\uDF50]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]'
    },
    {
        'name': 'Mc',
        'alias': 'Spacing_Mark',
        'bmp': '\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\u302E\u302F\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC',
        'astral': '\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]'
    },
    {
        'name': 'Me',
        'alias': 'Enclosing_Mark',
        'bmp': '\u0488\u0489\u1ABE\u20DD-\u20E0\u20E2-\u20E4\uA670-\uA672'
    },
    {
        'name': 'Mn',
        'alias': 'Nonspacing_Mark',
        'bmp': '\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F',
        'astral': '\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]'
    },
    {
        'name': 'N',
        'alias': 'Number',
        'bmp': '0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19',
        'astral': '\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]'
    },
    {
        'name': 'Nd',
        'alias': 'Decimal_Number',
        'bmp': '0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19',
        'astral': '\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]'
    },
    {
        'name': 'Nl',
        'alias': 'Letter_Number',
        'bmp': '\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF',
        'astral': '\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]'
    },
    {
        'name': 'No',
        'alias': 'Other_Number',
        'bmp': '\xB2\xB3\xB9\xBC-\xBE\u09F4-\u09F9\u0B72-\u0B77\u0BF0-\u0BF2\u0C78-\u0C7E\u0D58-\u0D5E\u0D70-\u0D78\u0F2A-\u0F33\u1369-\u137C\u17F0-\u17F9\u19DA\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215F\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA830-\uA835',
        'astral': '\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]'
    },
    {
        'name': 'P',
        'alias': 'Punctuation',
        'bmp': '!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65',
        'astral': '\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]'
    },
    {
        'name': 'Pc',
        'alias': 'Connector_Punctuation',
        'bmp': '_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F'
    },
    {
        'name': 'Pd',
        'alias': 'Dash_Punctuation',
        'bmp': '\\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D'
    },
    {
        'name': 'Pe',
        'alias': 'Close_Punctuation',
        'bmp': '\\)\\]\\}\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63'
    },
    {
        'name': 'Pf',
        'alias': 'Final_Punctuation',
        'bmp': '\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21'
    },
    {
        'name': 'Pi',
        'alias': 'Initial_Punctuation',
        'bmp': '\xAB\u2018\u201B\u201C\u201F\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20'
    },
    {
        'name': 'Po',
        'alias': 'Other_Punctuation',
        'bmp': '!-#%-\'\\*,\\.\\/:;\\?@\\\xA1\xA7\xB6\xB7\xBF\u037E\u0387\u055A-\u055F\u0589\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u166E\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u1805\u1807-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203B-\u203E\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E16\u2E18\u2E19\u2E1B\u2E1E\u2E1F\u2E2A-\u2E2E\u2E30-\u2E39\u2E3C-\u2E3F\u2E41\u2E43-\u2E4F\u3001-\u3003\u303D\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFE10-\uFE16\uFE19\uFE30\uFE45\uFE46\uFE49-\uFE4C\uFE50-\uFE52\uFE54-\uFE57\uFE5F-\uFE61\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C\uFF0E\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3C\uFF61\uFF64\uFF65',
        'astral': '\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]'
    },
    {
        'name': 'Ps',
        'alias': 'Open_Punctuation',
        'bmp': '\\(\\[\\{\u0F3A\u0F3C\u169B\u201A\u201E\u2045\u207D\u208D\u2308\u230A\u2329\u2768\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28\u2E42\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFD3F\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62'
    },
    {
        'name': 'S',
        'alias': 'Symbol',
        'bmp': '\\$\\+<->\\^`\\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B98-\u2BFF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD',
        'astral': '\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD6C\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED5\uDEE0-\uDEEC\uDEF0-\uDEFA\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD00-\uDD0B\uDD0D-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95]'
    },
    {
        'name': 'Sc',
        'alias': 'Currency_Symbol',
        'bmp': '\\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BF\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6',
        'astral': '\uD807[\uDFDD-\uDFE0]|\uD838\uDEFF|\uD83B\uDCB0'
    },
    {
        'name': 'Sk',
        'alias': 'Modifier_Symbol',
        'bmp': '\\^`\xA8\xAF\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u309B\u309C\uA700-\uA716\uA720\uA721\uA789\uA78A\uAB5B\uFBB2-\uFBC1\uFF3E\uFF40\uFFE3',
        'astral': '\uD83C[\uDFFB-\uDFFF]'
    },
    {
        'name': 'Sm',
        'alias': 'Math_Symbol',
        'bmp': '\\+<->\\|~\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC',
        'astral': '\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]'
    },
    {
        'name': 'So',
        'alias': 'Other_Symbol',
        'bmp': '\xA6\xA9\xAE\xB0\u0482\u058D\u058E\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09FA\u0B70\u0BF3-\u0BF8\u0BFA\u0C7F\u0D4F\u0D79\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A\u218B\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2B73\u2B76-\u2B95\u2B98-\u2BFF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA828-\uA82B\uA836\uA837\uA839\uAA77-\uAA79\uFDFD\uFFE4\uFFE8\uFFED\uFFEE\uFFFC\uFFFD',
        'astral': '\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838\uDD4F|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD6C\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED5\uDEE0-\uDEEC\uDEF0-\uDEFA\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD00-\uDD0B\uDD0D-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95]'
    },
    {
        'name': 'Z',
        'alias': 'Separator',
        'bmp': ' \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000'
    },
    {
        'name': 'Zl',
        'alias': 'Line_Separator',
        'bmp': '\u2028'
    },
    {
        'name': 'Zp',
        'alias': 'Paragraph_Separator',
        'bmp': '\u2029'
    },
    {
        'name': 'Zs',
        'alias': 'Space_Separator',
        'bmp': ' \xA0\u1680\u2000-\u200A\u202F\u205F\u3000'
    }
];


/***/ }),

/***/ "./Better BibTeX Citation Key Quick Copy.ts":
/*!**************************************************!*\
  !*** ./Better BibTeX Citation Key Quick Copy.ts ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.doExport = exports.Translator = void 0;
const format = __webpack_require__(/*! string-template */ "../node_modules/string-template/index.js");
const translator_1 = __webpack_require__(/*! ./lib/translator */ "./lib/translator.ts");
Object.defineProperty(exports, "Translator", { enumerable: true, get: function () { return translator_1.Translator; } });
const exporter_1 = __webpack_require__(/*! ./bibtex/exporter */ "./bibtex/exporter.ts");
function select_by_key(item) {
    const [, kind, lib, key] = item.uri.match(/^https?:\/\/zotero\.org\/(users|groups)\/((?:local\/)?[^\/]+)\/items\/(.+)/);
    return (kind === 'users') ? `zotero://select/library/items/${key}` : `zotero://select/groups/${lib}/items/${key}`;
}
function select_by_citekey(item) {
    return `zotero://select/items/@${encodeURIComponent(item.citationKey)}`;
}
const Mode = {
    gitbook(items) {
        const citations = items.map(item => `{{ \"${item.citationKey}\" | cite }}`);
        Zotero.write(citations.join(''));
    },
    atom(items) {
        const keys = items.map(item => item.citationKey);
        if (keys.length === 1) {
            Zotero.write(`[](#@${keys[0]})`);
        }
        else {
            Zotero.write(`[](?@${keys.join(',')})`);
        }
    },
    latex(items) {
        const keys = items.map(item => item.citationKey);
        const cmd = `${translator_1.Translator.preferences.citeCommand}`.trim();
        if (cmd === '') {
            Zotero.write(keys.join(','));
        }
        else {
            Zotero.write(`\\${cmd}{${keys.join(',')}}`);
        }
    },
    citekeys(items) {
        const keys = items.map(item => item.citationKey);
        Zotero.write(keys.join(','));
    },
    pandoc(items) {
        let keys = items.map(item => `@${item.citationKey}`);
        keys = keys.join('; ');
        if (translator_1.Translator.preferences.quickCopyPandocBrackets)
            keys = `[${keys}]`;
        Zotero.write(keys);
    },
    orgRef(items) {
        if (!items.length)
            return '';
        Zotero.write(`cite:${items.map(item => item.citationKey).join(',')}`);
    },
    orgmode(items) {
        for (const item of items) {
            Zotero.write(`[[${select_by_key(item)}][@${item.citationKey}]]`);
        }
    },
    orgmode_citekey(items) {
        for (const item of items) {
            Zotero.write(`[[${select_by_citekey(item)}][@${item.citationKey}]]`);
        }
    },
    selectLink(items) {
        Zotero.write(items.map(select_by_key).join('\n'));
    },
    selectLink_citekey(items) {
        Zotero.write(items.map(select_by_citekey).join('\n'));
    },
    rtfScan(items) {
        const reference = items.map(item => {
            const ref = [];
            // author
            const creators = item.creators || [];
            const creator = creators[0] || {};
            let name = creator.name || creator.lastName || 'no author';
            if (creators.length > 1)
                name += ' et al.';
            ref.push(name);
            // title
            if (item.title)
                ref.push(JSON.stringify(item.title));
            // year
            if (item.date) {
                let date = Zotero.BetterBibTeX.parseDate(item.date);
                if (date.type === 'interval')
                    date = date.from;
                if (date.type === 'verbatim' || !date.year) {
                    ref.push(item.date);
                }
                else {
                    ref.push(date.year);
                }
            }
            else {
                ref.push('no date');
            }
            return ref.join(', ');
        });
        Zotero.write(`{${reference.join('; ')}}`);
    },
    'string-template'(items) {
        try {
            const { citation, item, sep } = JSON.parse(translator_1.Translator.preferences.citeCommand);
            Zotero.write(format(citation || '{citation}', { citation: items.map(i => format(item || '{item}', { item: i })).join(sep || '') }));
        }
        catch (err) {
            Zotero.write(`${err}`);
        }
    },
};
function doExport() {
    translator_1.Translator.init('export');
    let item;
    const items = [];
    while ((item = exporter_1.Exporter.nextItem())) {
        if (item.citationKey)
            items.push(item);
    }
    const mode = Mode[`${translator_1.Translator.options.quickCopyMode}`] || Mode[`${translator_1.Translator.preferences.quickCopyMode}`];
    if (mode) {
        mode.call(null, items);
    }
    else {
        throw new Error(`Unsupported Quick Copy format '${translator_1.Translator.options.quickCopyMode || translator_1.Translator.preferences.quickCopyMode}', I only know about: ${Object.keys(Mode).join(', ')}`);
    }
}
exports.doExport = doExport;


/***/ }),

/***/ "./bibtex/exporter.ts":
/*!****************************!*\
  !*** ./bibtex/exporter.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Exporter = void 0;
const translator_1 = __webpack_require__(/*! ../lib/translator */ "./lib/translator.ts");
const jabref_1 = __webpack_require__(/*! ../bibtex/jabref */ "./bibtex/jabref.ts"); // not so nice... BibTeX-specific code
const itemfields = __webpack_require__(/*! ../../gen/items/items */ "../gen/items/items.ts");
const bibtexParser = __webpack_require__(/*! @retorquere/bibtex-parser */ "../node_modules/@retorquere/bibtex-parser/index.js");
const postfix_ts_1 = __webpack_require__(/*! ../bibtex/postfix.ts */ "./bibtex/postfix.ts");
const Extra = __webpack_require__(/*! ../../content/extra */ "../content/extra.ts");
// export singleton: https://k94n.com/es6-modules-single-instance-pattern
exports.Exporter = new class {
    constructor() {
        this.strings = {};
        this.strings_reverse = {};
        this.citekeys = {};
        this.jabref = new jabref_1.JabRef();
    }
    prepare_strings() {
        if (!translator_1.Translator.BetterTeX || !translator_1.Translator.preferences.strings)
            return;
        if (translator_1.Translator.preferences.exportBibTeXStrings.startsWith('match')) {
            this.strings = bibtexParser.parse(translator_1.Translator.preferences.strings, { markup: (translator_1.Translator.csquotes ? { enquote: translator_1.Translator.csquotes } : {}) }).strings;
            for (const [k, v] of Object.entries(this.strings)) {
                this.strings_reverse[v.toUpperCase()] = k.toUpperCase();
            }
        }
    }
    unique_chars(str) {
        let uniq = '';
        for (const c of str) {
            if (uniq.indexOf(c) < 0)
                uniq += c;
        }
        return uniq;
    }
    nextItem() {
        this.postfix = this.postfix || (new postfix_ts_1.Postfix(translator_1.Translator.preferences.qualityReport));
        let item;
        while (item = translator_1.Translator.nextItem()) {
            if (['note', 'attachment'].includes(item.itemType))
                continue;
            if (!item.citekey) {
                throw new Error(`No citation key in ${JSON.stringify(item)}`);
            }
            this.citekeys[item.citekey] = (this.citekeys[item.citekey] || 0) + 1;
            this.jabref.citekeys.set(item.itemID, item.citekey);
            // this is not automatically lazy-evaluated?!?!
            const cached = translator_1.Translator.caching ? Zotero.BetterBibTeX.cacheFetch(item.itemID, translator_1.Translator.options, translator_1.Translator.preferences) : null;
            translator_1.Translator.cache[cached ? 'hits' : 'misses'] += 1;
            if (cached) {
                Zotero.write(cached.reference);
                this.postfix.add(cached);
                continue;
            }
            itemfields.simplifyForExport(item);
            Object.assign(item, Extra.get(item.extra, 'zotero'));
            item.raw = translator_1.Translator.preferences.rawLaTag === '*';
            item.tags = item.tags.filter(tag => {
                if (tag.tag === translator_1.Translator.preferences.rawLaTag) {
                    item.raw = true;
                    return false;
                }
                return true;
            });
            return item;
        }
        return null;
    }
    complete() {
        this.jabref.exportGroups();
        Zotero.write(this.postfix.toString());
        if (translator_1.Translator.preferences.qualityReport) {
            let sep = '\n% == Citekey duplicates in this file:\n';
            for (const [citekey, n] of Object.entries(this.citekeys).sort((a, b) => a[0].localeCompare(b[0]))) {
                if (n > 1) {
                    Zotero.write(`${sep}% ${citekey} duplicates: ${n}\n`);
                    sep = '% ';
                }
            }
        }
    }
};


/***/ }),

/***/ "./bibtex/jabref.ts":
/*!**************************!*\
  !*** ./bibtex/jabref.ts ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JabRef = void 0;
const translator_1 = __webpack_require__(/*! ../lib/translator */ "./lib/translator.ts");
class JabRef {
    constructor() {
        this.citekeys = new Map;
    }
    exportGroups() {
        if ((Object.keys(translator_1.Translator.collections).length === 0) || !translator_1.Translator.preferences.jabrefFormat)
            return;
        let meta;
        if (translator_1.Translator.preferences.jabrefFormat === 3) { // tslint:disable-line:no-magic-numbers
            meta = 'groupsversion:3';
        }
        else if (translator_1.Translator.BetterBibLaTeX) {
            meta = 'databaseType:biblatex';
        }
        else {
            meta = 'databaseType:bibtex';
        }
        Zotero.write(`@comment{jabref-meta: ${meta};}\n`);
        Zotero.write('@comment{jabref-meta: groupstree:\n');
        this.groups = ['0 AllEntriesGroup:'];
        const collections = Object.values(translator_1.Translator.collections).filter(coll => !coll.parent);
        if (translator_1.Translator.preferences.testing)
            collections.sort((a, b) => translator_1.Translator.stringCompare(a.name, b.name));
        for (const collection of collections) {
            this.exportGroup(collection, 1);
        }
        Zotero.write(this.groups.map(group => this.quote(group, true)).concat('').join(';\n'));
        Zotero.write('}\n');
    }
    exportGroup(collection, level) {
        let group = [`${level} ExplicitGroup:${this.quote(collection.name)}`, '0'];
        if (translator_1.Translator.preferences.jabrefFormat === 3) { // tslint:disable-line:no-magic-numbers
            const references = ((collection.items || []).filter(id => this.citekeys.has(id)).map(id => this.quote(this.citekeys.get(id))));
            if (translator_1.Translator.preferences.testing)
                references.sort();
            group = group.concat(references);
        }
        // what is the meaning of the empty cell at the end, JabRef?
        group.push('');
        this.groups.push(group.join(';'));
        const children = (collection.collections || []).map(key => translator_1.Translator.collections[key]).filter(coll => coll);
        if (translator_1.Translator.preferences.testing)
            children.sort((a, b) => translator_1.Translator.stringCompare(a.name, b.name));
        for (const child of children) {
            this.exportGroup(child, level + 1);
        }
    }
    quote(s, wrap = false) {
        s = s.replace(/([\\;])/g, '\\$1');
        if (wrap)
            s = s.match(/.{1,70}/g).join('\n');
        return s;
    }
}
exports.JabRef = JabRef;


/***/ }),

/***/ "./bibtex/postfix.ts":
/*!***************************!*\
  !*** ./bibtex/postfix.ts ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Postfix = void 0;
class Postfix {
    constructor(qualityReport) {
        this.qr = qualityReport;
        this.packages = {};
        this.noopsort = false;
        this.declarePrefChars = '';
    }
    add(item) {
        if (!item.metadata)
            return;
        if (item.metadata.DeclarePrefChars)
            this.declarePrefChars += item.metadata.DeclarePrefChars;
        if (item.metadata.noopsort)
            this.noopsort = true;
        if (item.metadata.packages) {
            for (const pkg of item.metadata.packages) {
                this.packages[pkg] = true;
            }
        }
    }
    toString() {
        let postfix = '';
        let preamble = [];
        if (this.declarePrefChars)
            preamble.push("\\ifdefined\\DeclarePrefChars\\DeclarePrefChars{'’-}\\else\\fi");
        if (this.noopsort)
            preamble.push('\\newcommand{\\noopsort}[1]{}');
        if (preamble.length > 0) {
            preamble = preamble.map(cmd => `"${cmd} "`);
            postfix += `@preamble{ ${preamble.join(' \n # ')} }\n`;
        }
        if (this.qr) {
            const packages = Object.keys(this.packages).sort();
            if (packages.length) {
                postfix += '\n% Required packages:\n';
                for (const pkg of packages) {
                    postfix += `% * ${pkg}\n`;
                }
            }
        }
        return postfix;
    }
}
exports.Postfix = Postfix;


/***/ }),

/***/ "./lib/translator.ts":
/*!***************************!*\
  !*** ./lib/translator.ts ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Translator = void 0;
const preferences = __webpack_require__(/*! ../../gen/preferences/defaults.json */ "../gen/preferences/defaults.json");
const client_1 = __webpack_require__(/*! ../../content/client */ "../content/client.ts");
exports.Translator = new class {
    constructor() {
        this.initialized = false;
        this.header = {"browserSupport":"gcsv","creator":"Emiliano heyns","description":"exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents","displayOptions":{"quickCopyMode":""},"inRepository":false,"label":"Better BibTeX Citation Key Quick Copy","minVersion":"4.0.27","priority":100,"target":"txt","translatorID":"a515a220-6fef-45ea-9842-8025dfebcc8f","translatorType":2};
        this[this.header.label.replace(/[^a-z]/ig, '')] = true;
        this.BetterTeX = this.BetterBibTeX || this.BetterBibLaTeX;
        this.BetterCSL = this.BetterCSLJSON || this.BetterCSLYAML;
        this.preferences = preferences;
        this.options = this.header.displayOptions || {};
        this.stringCompare = (new Intl.Collator('en')).compare;
    }
    init(mode) {
        var _a;
        this.platform = Zotero.getHiddenPref('better-bibtex.platform');
        this.isJurisM = client_1.client === 'jurism';
        this.isZotero = !this.isJurisM;
        this.paths = {
            caseSensitive: this.platform !== 'mac' && this.platform !== 'win',
            sep: this.platform === 'win' ? '\\' : '/',
        };
        for (const key in this.options) {
            if (typeof this.options[key] === 'boolean') {
                this.options[key] = !!Zotero.getOption(key);
            }
            else {
                this.options[key] = Zotero.getOption(key);
            }
        }
        // special handling
        if (mode === 'export') {
            this.cache = {
                hits: 0,
                misses: 0,
            };
            this.exportDir = Zotero.getOption('exportDir');
            this.exportPath = Zotero.getOption('exportPath');
            if (this.exportDir && this.exportDir.endsWith(this.paths.sep))
                this.exportDir = this.exportDir.slice(0, -1);
        }
        for (const pref of Object.keys(this.preferences)) {
            let value;
            try {
                value = Zotero.getOption(`preference_${pref}`);
            }
            catch (err) {
                value = undefined;
            }
            if (typeof value === 'undefined')
                value = Zotero.getHiddenPref(`better-bibtex.${pref}`);
            this.preferences[pref] = value;
        }
        // special handling
        this.skipFields = this.preferences.skipFields.toLowerCase().trim().split(/\s*,\s*/).filter(s => s);
        this.skipField = this.skipFields.reduce((acc, field) => { acc[field] = true; return acc; }, {});
        this.verbatimFields = this.preferences.verbatimFields.toLowerCase().trim().split(/\s*,\s*/).filter(s => s);
        if (!this.verbatimFields.length)
            this.verbatimFields = null;
        this.csquotes = this.preferences.csquotes ? { open: this.preferences.csquotes[0], close: this.preferences.csquotes[1] } : null;
        this.preferences.testing = Zotero.getHiddenPref('better-bibtex.testing');
        if (mode === 'export') {
            this.unicode = (this.BetterBibTeX && !exports.Translator.preferences.asciiBibTeX) || (this.BetterBibLaTeX && !exports.Translator.preferences.asciiBibLaTeX);
            this.caching = !(
            // when exporting file data you get relative paths, when not, you get absolute paths, only one version can go into the cache
            this.options.exportFileData
                // jabref 4 stores collection info inside the reference, and collection info depends on which part of your library you're exporting
                || (this.BetterTeX && this.preferences.jabrefFormat === 4) // tslint:disable-line:no-magic-numbers
                // if you're looking at this.exportPath or this.exportDir in the postscript you're probably outputting something different based on it
                || ((this.preferences.postscript || '').indexOf('Translator.exportPath') >= 0)
                || ((this.preferences.postscript || '').indexOf('Translator.exportDir') >= 0)
                // relative file paths are going to be different based on the file being exported to
                || this.preferences.relativeFilePaths);
        }
        this.collections = {};
        if (mode === 'export' && ((_a = this.header.configOptions) === null || _a === void 0 ? void 0 : _a.getCollections) && Zotero.nextCollection) {
            let collection;
            while (collection = Zotero.nextCollection()) {
                const children = collection.children || collection.descendents || [];
                const key = (collection.primary ? collection.primary : collection).key;
                this.collections[key] = {
                    // id: collection.id,
                    key,
                    parent: collection.fields.parentKey,
                    name: collection.name,
                    items: collection.childItems,
                    collections: children.filter(coll => coll.type === 'collection').map(coll => coll.key),
                };
            }
            for (collection of Object.values(this.collections)) {
                if (collection.parent && !this.collections[collection.parent]) {
                    collection.parent = false;
                    Zotero.debug(`BBT translator: collection with key ${collection.key} has non-existent parent ${collection.parent}, assuming root collection`);
                }
            }
        }
        this.initialized = true;
    }
    items() {
        if (!this.sortedItems) {
            this.sortedItems = [];
            let item;
            while (item = Zotero.nextItem()) {
                item.journalAbbreviation = item.journalAbbreviation || item.autoJournalAbbreviation;
                this.sortedItems.push(item);
            }
            // fallback to itemType.itemID for notes and attachments. And some items may have duplicate keys
            this.sortedItems.sort((a, b) => {
                const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join('\t');
                const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join('\t');
                return ka.localeCompare(kb, undefined, { sensitivity: 'base' });
            });
        }
        return this.sortedItems;
    }
    nextItem() {
        return this.items().shift();
    }
};


/***/ })

/******/ });
