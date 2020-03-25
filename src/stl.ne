
# solid simple
#   facet normal 0 0 0
#       outer loop
#           vertex 0 0 0
#           vertex 1 0 0
#           vertex 1 1 1
#       endloop
#   endfacet
#   facet normal 0 0 0
#       outer loop
#           vertex 0 0 0
#           vertex 0 1 1
#           vertex 1 1 1
#       endloop
#   endfacet
# endsolid simple
@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace
@builtin "number.ne"     # `int`, `decimal`, and `percentage`
# basic helper functions
@{%
var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };
%}
main -> "solid " name facet:+
end_solid -> "endsolid" _ name newline:+
name -> string  newline:?
facet -> start_facet loop end_facet | end_solid
start_facet -> (_ "facet " facetType decimal _ decimal _ decimal newline)
facetType -> _ "normal" _
end_facet -> _ "endfacet" newline
loop -> (_ "outer loop" _ newline vertex:+ end_loop):+
vertex -> _ "vertex " _ decimal _ decimal _ decimal newline
end_loop -> _ "endloop" newline


# decimals
float ->
      int "." int   {% function(d) {return {v:parseFloat(d[0].v + d[1] + d[2].v)}} %}
    | int           {% function(d) {return {v:parseInt(d[0].v)}} %}
# string helpers
string   -> null      	{% emptyStr %}
| string [^\n*]      	{% appendItem(0, 1) %}
newline -> "\r\n"	{% empty %}
| "\r" | "\n"       	{% empty %}
