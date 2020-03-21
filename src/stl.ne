
@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace
@builtin "number.ne"     # `int`, `decimal`, and `percentage`
# basic helper functions
@{%
var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
%}
main -> "solid " name facet
name -> string newline
facet -> (_ "facet" facetType int _ int _ int)
facetType -> _ "normal" _

string   -> null      	{% emptyStr %}
| string [^\n*]      	{% appendItem(0, 1) %}
newline -> "\r" "\n"	{% empty %}
| "\r" | "\n"       	{% empty %}
