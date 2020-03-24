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
    {"name": "start_facet$subexpression$1", "symbols": ["_", "start_facet$subexpression$1$string$1", "facetType", "float", "_", "float", "_", "float", "newline"]},
    {"name": "start_facet", "symbols": ["start_facet$subexpression$1"]},
    {"name": "facetType$string$1", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "facetType", "symbols": ["_", "facetType$string$1", "_"]},
    {"name": "end_facet$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "end_facet", "symbols": ["_", "end_facet$string$1", "_", "newline"]},
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
    {"name": "vertex", "symbols": ["_", "vertex$string$1", "_", "float", "_", "float", "_", "float", "newline"]},
    {"name": "end_loop$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "end_loop", "symbols": ["_", "end_loop$string$1", "_", "newline"]},
    {"name": "string", "symbols": [], "postprocess": emptyStr},
    {"name": "string", "symbols": ["string", /[^\n*]/], "postprocess": appendItem(0, 1)},
    {"name": "newline", "symbols": [{"literal":"\r"}, {"literal":"\n"}], "postprocess": empty},
    {"name": "newline", "symbols": [{"literal":"\r"}]},
    {"name": "newline", "symbols": [{"literal":"\n"}], "postprocess": empty},
    {"name": "newline$string$1", "symbols": [{"literal":"\r"}, {"literal":"\n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "newline", "symbols": ["newline$string$1"], "postprocess": empty},
    {"name": "float", "symbols": ["int", {"literal":"."}, "int"], "postprocess": function(d) {return {v:parseFloat(d[0].v + d[1] + d[2].v)}}},
    {"name": "float", "symbols": ["int"], "postprocess": function(d) {return {v:parseInt(d[0].v)}}},
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
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null }}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
