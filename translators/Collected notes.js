{
	"translatorID": "e7859c61-54d4-466a-b236-aadcf1f7e83b",
	"label": "Collected notes",
	"description": "exports your notes",
	"creator": "Emiliano heyns",
	"target": "html",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"translatorType": 2,
	"browserSupport": "gcsv",
	"inRepository": false,
	"configOptions": {
		"getCollections": true,
		"hash": "2c4f633e07e34b2e6eb9201eb4f048e3462e327c1977a082764839be6cf032a0"
	},
	"priority": 100,
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Collected notes.ts");
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

/***/ "../content/escape.ts":
/*!****************************!*\
  !*** ../content/escape.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rtf = exports.html = void 0;
function html(str) {
    const entity = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
    };
    // return str.replace(/[\u00A0-\u9999<>\&]/gim, c => entity[c] || `&#${c.charCodeAt(0)};`)
    return str.replace(/[<>\&"']/g, c => entity[c] || `&#${c.charCodeAt(0)};`);
}
exports.html = html;
function rtf(str) {
    return str
        .replace(/([{}\\])/g, '\\$1')
        .replace(/\n/g, '\\par ');
}
exports.rtf = rtf;


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

/***/ "../gen/preferences/defaults.json":
/*!****************************************!*\
  !*** ../gen/preferences/defaults.json ***!
  \****************************************/
/*! exports provided: DOIandURL, automaticTags, asciiBibLaTeX, ascii, asciiBibTeX, autoExport, quickCopyMode, citeCommand, quickCopyPandocBrackets, citekeyFormat, citekeyFold, keyConflictPolicy, auxImport, keyScope, exportBibTeXStrings, importBibTeXStrings, bibtexParticleNoOp, skipFields, bibtexURL, warnBulkModify, postscript, strings, autoAbbrev, autoAbbrevStyle, autoExportIdleWait, cacheFlushInterval, csquotes, rawLaTag, rawImports, skipWords, verbatimFields, jabrefFormat, qualityReport, biblatexExtendedDateFormat, biblatexExtendedNameFormat, exportTitleCase, exportBraceProtection, retainCache, importSentenceCase, importCaseProtection, autoExportDelay, correctTitleCase, tagCorrectedTitleCase, itemObserverDelay, autoPinDelay, parseParticles, citeprocNoteCitekey, import, importExtra, importCitationKey, extraMergeTeX, extraMergeCSL, extraMergeCitekeys, importJabRefStrings, importJabRefAbbreviations, autoExportPathReplaceDirSep, autoExportPathReplaceSpace, autoExportPathReplaceDiacritics, postscriptOverride, scrubDatabase, ignorePostscriptErrors, debugLogDir, testing, kuroshiro, relativeFilePaths, git, mapUnicode, mapText, mapMath, newTranslatorsAskRestart, workers, platform, default */
/*! all exports used */
/***/ (function(module) {

module.exports = JSON.parse("{\"DOIandURL\":\"both\",\"automaticTags\":true,\"asciiBibLaTeX\":false,\"ascii\":\"\",\"asciiBibTeX\":true,\"autoExport\":\"immediate\",\"quickCopyMode\":\"latex\",\"citeCommand\":\"cite\",\"quickCopyPandocBrackets\":false,\"citekeyFormat\":\"​[auth:lower][shorttitle3_3][year]\",\"citekeyFold\":true,\"keyConflictPolicy\":\"keep\",\"auxImport\":false,\"keyScope\":\"library\",\"exportBibTeXStrings\":\"off\",\"importBibTeXStrings\":true,\"bibtexParticleNoOp\":false,\"skipFields\":\"\",\"bibtexURL\":\"off\",\"warnBulkModify\":10,\"postscript\":\"\",\"strings\":\"\",\"autoAbbrev\":false,\"autoAbbrevStyle\":\"\",\"autoExportIdleWait\":10,\"cacheFlushInterval\":5,\"csquotes\":\"\",\"rawLaTag\":\"#LaTeX\",\"rawImports\":false,\"skipWords\":\"a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum\",\"verbatimFields\":\"url,doi,file,eprint,verba,verbb,verbc\",\"jabrefFormat\":0,\"qualityReport\":false,\"biblatexExtendedDateFormat\":true,\"biblatexExtendedNameFormat\":false,\"exportTitleCase\":true,\"exportBraceProtection\":true,\"retainCache\":false,\"importSentenceCase\":\"on+guess\",\"importCaseProtection\":\"as-needed\",\"autoExportDelay\":1,\"correctTitleCase\":\"off\",\"tagCorrectedTitleCase\":\"#sentence-cased\",\"itemObserverDelay\":5,\"autoPinDelay\":0,\"parseParticles\":true,\"citeprocNoteCitekey\":false,\"import\":true,\"importExtra\":true,\"importCitationKey\":true,\"extraMergeTeX\":true,\"extraMergeCSL\":true,\"extraMergeCitekeys\":true,\"importJabRefStrings\":true,\"importJabRefAbbreviations\":true,\"autoExportPathReplaceDirSep\":\"-\",\"autoExportPathReplaceSpace\":\" \",\"autoExportPathReplaceDiacritics\":false,\"postscriptOverride\":\"\",\"scrubDatabase\":false,\"ignorePostscriptErrors\":true,\"debugLogDir\":\"\",\"testing\":false,\"kuroshiro\":false,\"relativeFilePaths\":false,\"git\":\"config\",\"mapUnicode\":\"conservative\",\"mapText\":\"\",\"mapMath\":\"\",\"newTranslatorsAskRestart\":true,\"workers\":1,\"platform\":\"\"}");

/***/ }),

/***/ "./Collected notes.ts":
/*!****************************!*\
  !*** ./Collected notes.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.doExport = exports.Translator = void 0;
const translator_1 = __webpack_require__(/*! ./lib/translator */ "./lib/translator.ts");
Object.defineProperty(exports, "Translator", { enumerable: true, get: function () { return translator_1.Translator; } });
const escape = __webpack_require__(/*! ../content/escape */ "../content/escape.ts");
const Extra = __webpack_require__(/*! ../content/extra */ "../content/extra.ts");
function cleanExtra(extra) {
    const cleaned = Extra.get(extra, 'zotero');
    cleaned.extra = cleaned.extra.split('\n').filter(line => !line.match(/^OCLC:/i)).join('\n');
    return cleaned;
}
class Exporter {
    constructor() {
        this.levels = 0;
        this.body = '';
        this.items = {};
        this.html = '';
        for (const item of translator_1.Translator.items()) {
            if (!this.keep(item))
                continue;
            this.items[item.itemID] = Object.assign(item, cleanExtra(item.extra)); // tslint:disable-line:prefer-object-spread
        }
        const filed = {};
        const root = [];
        for (const collection of Object.values(translator_1.Translator.collections)) {
            for (const itemID of collection.items)
                filed[itemID] = this.items[itemID];
            if (!translator_1.Translator.collections[collection.parent])
                delete collection.parent;
            if (!collection.parent && !this.prune(collection))
                root.push(collection); // prune empty roots
        }
        Zotero.debug('root collections: ' + JSON.stringify(root));
        Zotero.debug('items: ' + JSON.stringify(Object.keys(this.items)));
        for (const item of Object.values(this.items)) {
            if (!filed[item.itemID] && this.keep(item))
                this.item(item);
        }
        for (const collection of root) {
            this.collection(collection);
        }
        let style = `  body { ${this.reset(1)} }\n`;
        for (let level = 1; level <= this.levels; level++) {
            style += `  h${level} { ${this.reset(level + 1)} }\n`;
            const label = Array.from({ length: level }, (x, i) => `counter(h${i + 1}counter)`).join(' "." ');
            style += `  h${level}:before { counter-increment: h${level}counter; content: ${label} ".\\0000a0\\0000a0"; }\n`;
        }
        style += '  blockquote { border-left: 1px solid gray; }\n';
        this.html = `<html><head><style>${style}</style></head><body>${this.body}</body></html>`;
    }
    show(context, args) {
        Zotero.debug(`collectednotes.${context}: ${JSON.stringify(Array.from(args))}`);
    }
    collection(collection, level = 1) {
        this.show('collection', arguments);
        if (level > this.levels)
            this.levels = level;
        this.body += `<h${level}>${escape.html(collection.name)}</h${level}>\n`;
        for (const itemID of collection.items) {
            this.item(this.items[itemID]);
        }
        for (const subcoll of collection.collections) {
            this.collection(translator_1.Translator.collections[subcoll], level + 1);
        }
    }
    item(item) {
        this.show('item', arguments);
        switch (item.itemType) {
            case 'note':
                this.note(item.note, 'note');
                break;
            case 'attachment':
                this.reference(item);
                break;
            default:
                this.reference(item);
                break;
        }
    }
    prune(collection) {
        this.show('prune', arguments);
        if (!collection)
            return true;
        collection.items = collection.items.filter(itemID => this.keep(this.items[itemID]));
        collection.collections = collection.collections.filter(subcoll => !this.prune(translator_1.Translator.collections[subcoll]));
        return !collection.items.length && !collection.collections.length;
    }
    note(note, type) {
        this.show('note', arguments);
        switch (type) {
            case 'extra':
                if (!note)
                    return;
                this.body += `<blockquote><pre>${escape.html(note)}</pre></blockquote>\n`;
                break;
            case 'attachment':
                if (!note.note)
                    return;
                this.body += `<blockquote><div><samp>${note.title}</samp></div>${note.note}</blockquote>\n`;
                break;
            default:
                if (!note.note)
                    return;
                this.body += `<blockquote>${note.note}</blockquote>\n`;
                break;
        }
    }
    creator(cr) {
        this.show('creator', arguments);
        return [cr.lastName, cr.firstName, cr.name].filter(v => v).join(', ');
    }
    reference(item) {
        this.show('reference', arguments);
        let notes = [];
        let title = '';
        if (item.itemType === 'attachment') {
            if (item.note)
                notes = [{ note: item.note }];
            if (item.title)
                title = `<samp>${escape.html(item.title)}</samp>`;
        }
        else {
            notes = (item.notes || []).filter(note => note.note);
            Zotero.debug('this.reference: ' + JSON.stringify(item));
            const creators = item.creators.map(creator => this.creator(creator)).filter(v => v).join(' and ');
            let date = null;
            if (item.date) {
                date = Zotero.BetterBibTeX.parseDate(item.date);
                if (date.from)
                    date = date.from;
                date = typeof date.year === 'number' ? date.year : item.date;
            }
            const author = [creators, date].filter(v => v).join(', ');
            if (item.title)
                title += `<i>${escape.html(item.title)}</i>`;
            if (author)
                title += ` (${escape.html(author)})`;
            title = title.trim();
        }
        this.body += `<div>${title}</div>\n`;
        this.note(item.extra, 'extra');
        for (const note of notes) {
            this.note(note, 'note');
        }
        for (const att of item.attachments || []) {
            this.note(att, 'attachment');
        }
    }
    reset(starting) {
        this.show('reset', arguments);
        if (starting > this.levels)
            return '';
        let reset = 'counter-reset:';
        for (let level = starting; level <= this.levels; level++) {
            reset += ` h${level}counter 0`;
        }
        return reset + ';';
        // return `counter-reset: h${ starting }counter;`
    }
    keep(item) {
        this.show('keep', arguments);
        if (!item)
            return false;
        if (item.extra)
            return true;
        if (item.note)
            return true;
        if (item.notes && item.notes.find(note => note.note))
            return true;
        if (item.attachments && item.attachments.find(att => att.note))
            return true;
        return false;
    }
}
function doExport() {
    translator_1.Translator.init('export');
    Zotero.write((new Exporter).html);
}
exports.doExport = doExport;


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
        this.header = {"browserSupport":"gcsv","configOptions":{"getCollections":true},"creator":"Emiliano heyns","description":"exports your notes","inRepository":false,"label":"Collected notes","maxVersion":"","minVersion":"4.0.27","priority":100,"target":"html","translatorID":"e7859c61-54d4-466a-b236-aadcf1f7e83b","translatorType":2};
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
