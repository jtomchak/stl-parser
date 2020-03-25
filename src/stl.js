// Generated automatically by nearley, version 2.19.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "main$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "main$ebnf$1", "symbols": ["facet"]},
    {"name": "main$ebnf$1", "symbols": ["main$ebnf$1", "facet"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "main", "symbols": ["main$string$1", "name", "main$ebnf$1"]},
    {"name": "end_solid$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "end_solid$ebnf$1", "symbols": ["newline"]},
    {"name": "end_solid$ebnf$1", "symbols": ["end_solid$ebnf$1", "newline"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "end_solid", "symbols": ["end_solid$string$1", "_", "name", "end_solid$ebnf$1"]},
    {"name": "name$ebnf$1", "symbols": ["newline"], "postprocess": id},
    {"name": "name$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "name", "symbols": ["string", "name$ebnf$1"]},
    {"name": "facet", "symbols": ["start_facet", "loop", "end_facet"]},
    {"name": "facet", "symbols": ["end_solid"]},
    {"name": "start_facet$subexpression$1$string$1", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "start_facet$subexpression$1", "symbols": ["_", "start_facet$subexpression$1$string$1", "facetType", "decimal", "_", "decimal", "_", "decimal", "newline"]},
    {"name": "start_facet", "symbols": ["start_facet$subexpression$1"]},
    {"name": "facetType$string$1", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "facetType", "symbols": ["_", "facetType$string$1", "_"]},
    {"name": "end_facet$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "end_facet", "symbols": ["_", "end_facet$string$1", "newline"]},
    {"name": "loop$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "loop$ebnf$1$subexpression$1$ebnf$1", "symbols": ["vertex"]},
    {"name": "loop$ebnf$1$subexpression$1$ebnf$1", "symbols": ["loop$ebnf$1$subexpression$1$ebnf$1", "vertex"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "loop$ebnf$1$subexpression$1", "symbols": ["_", "loop$ebnf$1$subexpression$1$string$1", "_", "newline", "loop$ebnf$1$subexpression$1$ebnf$1", "end_loop"]},
    {"name": "loop$ebnf$1", "symbols": ["loop$ebnf$1$subexpression$1"]},
    {"name": "loop$ebnf$1$subexpression$2$string$1", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "loop$ebnf$1$subexpression$2$ebnf$1", "symbols": ["vertex"]},
    {"name": "loop$ebnf$1$subexpression$2$ebnf$1", "symbols": ["loop$ebnf$1$subexpression$2$ebnf$1", "vertex"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "loop$ebnf$1$subexpression$2", "symbols": ["_", "loop$ebnf$1$subexpression$2$string$1", "_", "newline", "loop$ebnf$1$subexpression$2$ebnf$1", "end_loop"]},
    {"name": "loop$ebnf$1", "symbols": ["loop$ebnf$1", "loop$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "loop", "symbols": ["loop$ebnf$1"]},
    {"name": "vertex$string$1", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"t"}, {"literal":"e"}, {"literal":"x"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "vertex", "symbols": ["_", "vertex$string$1", "_", "decimal", "_", "decimal", "_", "decimal", "newline"]},
    {"name": "end_loop$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "end_loop", "symbols": ["_", "end_loop$string$1", "newline"]},
    {"name": "float", "symbols": ["int", {"literal":"."}, "int"], "postprocess": function(d) {return {v:parseFloat(d[0].v + d[1] + d[2].v)}}},
    {"name": "float", "symbols": ["int"], "postprocess": function(d) {return {v:parseInt(d[0].v)}}},
    {"name": "string", "symbols": [], "postprocess": emptyStr},
    {"name": "string", "symbols": ["string", /[^\n*]/], "postprocess": appendItem(0, 1)},
    {"name": "newline$string$1", "symbols": [{"literal":"\r"}, {"literal":"\n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "newline", "symbols": ["newline$string$1"], "postprocess": empty},
    {"name": "newline", "symbols": [{"literal":"\r"}]},
    {"name": "newline", "symbols": [{"literal":"\n"}], "postprocess": empty}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
