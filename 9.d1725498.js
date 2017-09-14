webpackJsonp([9],{GLMH:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("Polygon Overlay")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Examples")]),t._v(" "),a("h3",[t._v("Add an editable polygon on the map")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-polygon",{attrs:{path:t.polygonPath,"stroke-color":"blue","stroke-opacity":.5,"fill-opacity":.5,editing:!0},on:{lineupdate:t.updatePolygonPath}})],1),t._v(" "),a("md-table",[a("md-table-header",[a("md-table-head",[t._v("Points")]),t._v(" "),a("md-table-head",[t._v("Longitude")]),t._v(" "),a("md-table-head",[t._v("Latitude")])],1),t._v(" "),a("md-table-body",t._l(t.polygonPath,function(s,e){return a("md-table-row",{key:e},[a("md-table-cell",[t._v(t._s("Point-"+(e+1)))]),t._v(" "),a("md-table-cell",[a("md-input-container",[a("md-input",{attrs:{"md-inline":""},model:{value:s.lng,callback:function(a){s.lng=t._n(a)},expression:"point.lng"}})],1)],1),t._v(" "),a("md-table-cell",[a("md-input-container",[a("md-input",{attrs:{"md-inline":""},model:{value:s.lat,callback:function(a){s.lat=t._n(a)},expression:"point.lat"}})],1)],1)],1)}))],1),t._v(" "),a("md-button",{staticClass:"md-raised md-primary",on:{click:t.addPolygonPoint}},[t._v("\n    Add Point\n  ")])],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmPolygon")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("path")]),t._v(" "),a("td",[t._v("Array[Point]")]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("The points that makes the polygon.")])]),t._v(" "),a("tr",[a("td",[t._v("strokeColor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Polygon stroke color.")])]),t._v(" "),a("tr",[a("td",[t._v("strokeWeight")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Polygon stroke width.")])]),t._v(" "),a("tr",[a("td",[t._v("strokeOpacity")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Polygon stroke opacity.")])]),t._v(" "),a("tr",[a("td",[t._v("strokeStyle")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("'solid'")]),t._v(" "),a("td",[t._v("Polygon stroke style. "),a("code",[t._v("'solid'")]),t._v(" or "),a("code",[t._v("'dashed'")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("fillColor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Polygon fill color.")])]),t._v(" "),a("tr",[a("td",[t._v("fillOpacity")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Polygon fill opacity.")])]),t._v(" "),a("tr",[a("td",[t._v("enableMassClear")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Whether remove this overlay or not when "),a("code",[t._v("map.clearOverlays")]),t._v(" is called.")])]),t._v(" "),a("tr",[a("td",[t._v("enableEditing")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Enable editing the polygon.")])]),t._v(" "),a("tr",[a("td",[t._v("enableClicking")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Whether to respond to a click event.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when click on the polygon.")])]),t._v(" "),a("tr",[a("td",[t._v("dblclick")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when double click on the polygon.")])]),t._v(" "),a("tr",[a("td",[t._v("mousedown")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when the mouse is pressed down on the polygon.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseup")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when the mouse is released on the polygon.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseout")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when the mouse leaves the polygon.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseover")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when the mouse enters the polygon.")])]),t._v(" "),a("tr",[a("td",[t._v("remove")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the polygon is removed.")])]),t._v(" "),a("tr",[a("td",[t._v("lineupdate")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the polygon is updated.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-polygon")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":path")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"polygonPath"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("stroke-color")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"blue"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":stroke-opacity")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"0.5"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":stroke-weight")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":editing")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@lineupdate")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"updatePolygonPath"')]),t._v("/>")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("polygonPath")]),t._v(": [\n        {"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.412732")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.911707")]),t._v("},\n        {"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.39455")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.910932")]),t._v("},\n        {"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.403461")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.921336")]),t._v("}\n      ]\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    updatePolygonPath (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".polygonPath = e.target.getPath()\n    },\n    addPolygonPoint () {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".polygonPath.push({"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("})\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},NTiW:function(t,s,a){var e=a("VU/8")(a("od4M"),a("GLMH"),null,null);t.exports=e.exports},TQsU:function(t,s,a){t.exports=a("NTiW")},od4M:function(t,s,a){(function(a){var e,n,v;!function(a,_){n=[t,s],e=_,void 0!==(v="function"==typeof e?e.apply(s,n):e)&&(t.exports=v)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{polygonPath:[{lng:116.412732,lat:39.911707},{lng:116.39455,lat:39.910932},{lng:116.403461,lat:39.921336}]}},methods:{updatePolygonPath:function(t){this.polygonPath=t.target.getPath()},addPolygonPoint:function(){this.polygonPath.push({lng:116.404,lat:39.915}),this.$nextTick(a.componentHandler.upgradeDom)}}},t.exports=s.default})}).call(s,a("DuR2"))}});