/**
 * vkBeautify - javascript plugin to pretty-print or minify text in XML, JSON, CSS and SQL formats.
 *
 * Version - 0.99.00.2
 * Copyright (c) 2012 Vadim Kiryukhin
 * vkiryukhin @ gmail.com
 * http://www.eslinstructor.net/vkbeautify/
 *
 * http://www.opensource.org/licenses/mit-license.php
 *
 *  Adapted for Boop from https://github.com/kayhadrin/vkBeautify/ and the source repo
 *   - Removed JSON functions
 *   - Fixed missing variables
 *   -
 *
 */

(function () {
  const standardStep = "    ";
  const standardShift = createShiftArr(standardStep);

  function createShiftArr(step) {
    var space = "    ";

    if (isNaN(parseInt(step))) {
      // argument is string
      space = step;
    } else {
      // argument is integer
      switch (step) {
        case 1:
          space = " ";
          break;
        case 2:
          space = "  ";
          break;
        case 3:
          space = "   ";
          break;
        case 4:
          space = "    ";
          break;
        case 5:
          space = "     ";
          break;
        case 6:
          space = "      ";
          break;
        case 7:
          space = "       ";
          break;
        case 8:
          space = "        ";
          break;
        case 9:
          space = "         ";
          break;
        case 10:
          space = "          ";
          break;
        case 11:
          space = "           ";
          break;
        case 12:
          space = "            ";
          break;
      }
    }

    var shift = ["\n"]; // array of shifts
    for (var ix = 0; ix < 100; ix++) {
      shift.push(shift[ix] + space);
    }
    return shift;
  }

  function vkbeautify() {}

  vkbeautify.prototype.xml = function (text) {
    var ar = text
        .replace(/>\s*</g, "><")
        .replace(/</g, "~::~<")
        .replace(/\s*xmlns:/g, "~::~xmlns:")
        .replace(/\s*xmlns=/g, "~::~xmlns=")
        .split("~::~"),
      len = ar.length,
      inComment = false,
      deep = 0,
      str = "",
      ix,
      shift = standardShift;

    for (ix = 0; ix < len; ix++) {
      // start comment or <![CDATA[...]]> or <!DOCTYPE //
      if (ar[ix].search(/<!/) > -1) {
        str += shift[deep] + ar[ix];
        inComment = true;
        // end comment  or <![CDATA[...]]> //
        if (
          ar[ix].search(/-->/) > -1 ||
          ar[ix].search(/]>/) > -1 ||
          ar[ix].search(/!DOCTYPE/) > -1
        ) {
          inComment = false;
        }
      }
      // end comment  or <![CDATA[...]]> //
      else if (
        ar[ix].search(/-->/) > -1 ||
        ar[ix].search(/]>/) > -1
      ) {
        str += ar[ix];
        inComment = false;
      }
      // <elm></elm> //
      else if (
        /^<\w/.exec(ar[ix - 1]) &&
        /^<\/\w/.exec(ar[ix]) &&
        // This comparison will eventually compare an array with a single string item to another string
        // so we voluntarily use '=='
        /^<[\w:\-\.,]+/.exec(ar[ix - 1]) ==
          /^<\/[\w:\-\.,]+/.exec(ar[ix])[0].replace("/", "")
      ) {
        // jshint ignore:line
        str += ar[ix];
        if (!inComment) {
          deep--;
        }
      }
      // <elm> //
      else if (
        ar[ix].search(/<\w/) > -1 &&
        ar[ix].search(/<\//) === -1 &&
        ar[ix].search(/\/>/) === -1
      ) {
        str = !inComment
          ? (str += shift[deep++] + ar[ix])
          : (str += ar[ix]);
      }
      // <elm>...</elm> //
      else if (
        ar[ix].search(/<\w/) > -1 &&
        ar[ix].search(/<\//) > -1
      ) {
        str = !inComment
          ? (str += shift[deep] + ar[ix])
          : (str += ar[ix]);
      }
      // </elm> //
      else if (ar[ix].search(/<\//) > -1) {
        str = !inComment
          ? (str += shift[--deep] + ar[ix])
          : (str += ar[ix]);
      }
      // <elm/> //
      else if (ar[ix].search(/\/>/) > -1) {
        str = !inComment
          ? (str += shift[deep] + ar[ix])
          : (str += ar[ix]);
      }
      // <? xml ... ?> //
      else if (ar[ix].search(/<\?/) > -1) {
        str += shift[deep] + ar[ix];
      }
      // xmlns //
      else if (
        ar[ix].search(/xmlns:/) > -1 ||
        ar[ix].search(/xmlns=/) > -1
      ) {
        str += shift[deep] + ar[ix];
      } else {
        str += ar[ix];
      }
    }

    return str.charAt(0) === "\n" ? str.slice(1) : str;
  };

  vkbeautify.prototype.css = function (text, step) {
    var ar = text
        .replace(/\s+/g, " ")
        .replace(/{/g, "{~::~")
        .replace(/}/g, "~::~}~::~")
        .replace(/;/g, ";~::~")
        .replace(/\/\*/g, "~::~/*")
        .replace(/\*\//g, "*/~::~")
        .replace(/~::~\s*~::~/g, "~::~")
        .split("~::~"),
      len = ar.length,
      deep = 0,
      str = "",
      ix,
      shift = standardShift;

    for (ix = 0; ix < len; ix++) {
      if (/{/.exec(ar[ix])) {
        str += shift[deep++] + ar[ix];
      } else if (/}/.exec(ar[ix])) {
        str += shift[--deep] + ar[ix];
      } else if (/\*\\/.exec(ar[ix])) {
        str += shift[deep] + ar[ix];
      } else {
        str += shift[deep] + ar[ix];
      }
    }
    return str.replace(/^\n+/, "");
  };

  //----------------------------------------------------------------------------

  function isSubquery(str, parenthesisLevel) {
    return (
      parenthesisLevel -
      (str.replace(/\(/g, "").length -
        str.replace(/\)/g, "").length)
    );
  }

  function split_sql(str, tab) {
    return (
      str
        .replace(/\s+/g, " ")

        .replace(/ AND /gi, "~::~" + tab + tab + "AND ")
        .replace(/ BETWEEN /gi, "~::~" + tab + "BETWEEN ")
        .replace(/ CASE /gi, "~::~" + tab + "CASE ")
        .replace(/ ELSE /gi, "~::~" + tab + "ELSE ")
        .replace(/ END /gi, "~::~" + tab + "END ")
        .replace(/ FROM /gi, "~::~FROM ")
        .replace(/ GROUP\s+BY/gi, "~::~GROUP BY ")
        .replace(/ HAVING /gi, "~::~HAVING ")
        //.replace(/ SET /ig," SET~::~")
        .replace(/ IN /gi, " IN ")

        .replace(/ JOIN /gi, "~::~JOIN ")
        .replace(/ CROSS~::~+JOIN /gi, "~::~CROSS JOIN ")
        .replace(/ INNER~::~+JOIN /gi, "~::~INNER JOIN ")
        .replace(/ LEFT~::~+JOIN /gi, "~::~LEFT JOIN ")
        .replace(/ RIGHT~::~+JOIN /gi, "~::~RIGHT JOIN ")

        .replace(/ ON /gi, "~::~" + tab + "ON ")
        .replace(/ OR /gi, "~::~" + tab + tab + "OR ")
        .replace(/ ORDER\s+BY/gi, "~::~ORDER BY ")
        .replace(/ OVER /gi, "~::~" + tab + "OVER ")

        .replace(/\(\s*SELECT /gi, "~::~(SELECT ")
        .replace(/\)\s*SELECT /gi, ")~::~SELECT ")

        .replace(/ THEN /gi, " THEN~::~" + tab + "")
        .replace(/ UNION /gi, "~::~UNION~::~")
        .replace(/ USING /gi, "~::~USING ")
        .replace(/ WHEN /gi, "~::~" + tab + "WHEN ")
        .replace(/ WHERE /gi, "~::~WHERE ")
        .replace(/ WITH /gi, "~::~WITH ")

        //.replace(/,\s*\(/ig,",~::~( ")
        //.replace(/,/ig,",~::~"+tab+tab+"")

        .replace(/ ALL /gi, " ALL ")
        .replace(/ AS /gi, " AS ")
        .replace(/ ASC /gi, " ASC ")
        .replace(/ DESC /gi, " DESC ")
        .replace(/ DISTINCT /gi, " DISTINCT ")
        .replace(/ EXISTS /gi, " EXISTS ")
        .replace(/ NOT /gi, " NOT ")
        .replace(/ NULL /gi, " NULL ")
        .replace(/ LIKE /gi, " LIKE ")
        .replace(/\s*SELECT /gi, "SELECT ")
        .replace(/\s*UPDATE /gi, "UPDATE ")
        .replace(/ SET /gi, " SET ")

        .replace(/~::~+/g, "~::~")
        .split("~::~")
    );
  }

  vkbeautify.prototype.sql = function (text, step) {
    var ar_by_quote = text
        .replace(/\s+/g, " ")
        .replace(/'/gi, "~::~'")
        .split("~::~"),
      len = ar_by_quote.length,
      ar = [],
      deep = 0,
      tab = standardStep,
      parenthesisLevel = 0,
      str = "",
      ix,
      shift = standardShift;
    for (ix = 0; ix < len; ix++) {
      if (ix % 2) {
        ar = ar.concat(ar_by_quote[ix]);
      } else {
        ar = ar.concat(split_sql(ar_by_quote[ix], tab));
      }
    }

    len = ar.length;
    for (ix = 0; ix < len; ix++) {
      parenthesisLevel = isSubquery(ar[ix], parenthesisLevel);

      if (/\s*\s*SELECT\s*/.exec(ar[ix])) {
        ar[ix] = ar[ix].replace(/,/g, ",\n" + tab + tab + "");
      }

      if (/\s*\s*SET\s*/.exec(ar[ix])) {
        ar[ix] = ar[ix].replace(/,/g, ",\n" + tab + tab + "");
      }

      if (/\s*\(\s*SELECT\s*/.exec(ar[ix])) {
        deep++;
        str += shift[deep] + ar[ix];
      } else if (/'/.exec(ar[ix])) {
        if (parenthesisLevel < 1 && deep) {
          deep--;
        }
        str += ar[ix];
      } else {
        str += shift[deep] + ar[ix];
        if (parenthesisLevel < 1 && deep) {
          deep--;
        }
      }
      // var junk = 0;
    }

    str = str.replace(/^\n+/, "").replace(/\n+/g, "\n");
    return str;
  };

  vkbeautify.prototype.xmlmin = function (
    text,
    preserveComments
  ) {
    var str = preserveComments
      ? text
      : text
          .replace(
            /<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)>/g,
            ""
          )
          .replace(/[ \r\n\t]+xmlns/g, " xmlns");
    return str.replace(/>\s*</g, "><");
  };

  vkbeautify.prototype.cssmin = function (
    text,
    preserveComments
  ) {
    var str = preserveComments
      ? text
      : text.replace(
          /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g,
          ""
        );

    return str
      .replace(/\s+/g, " ")
      .replace(/{\s+/g, "{")
      .replace(/}\s+/g, "}")
      .replace(/;\s+/g, ";")
      .replace(/\/\*\s+/g, "/*")
      .replace(/\*\/\s+/g, "*/");
  };

  vkbeautify.prototype.sqlmin = function (text) {
    return text
      .replace(/\s+/g, " ")
      .replace(/\s+\(/, "(")
      .replace(/\s+\)/, ")");
  };

  module.exports = new vkbeautify();
})();
