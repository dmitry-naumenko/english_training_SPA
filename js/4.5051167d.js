(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"75cc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex flex-center"},[s("div",{staticClass:"window-height window-width"},[s("div",{staticClass:"row q-mt-lg"},[s("div",{staticClass:"col-xs-1 col-sm-2 col-md-3"}),s("div",{staticClass:"col-xs-10 col-sm-8 col-md-6"},[s("div",{staticClass:"q-pt-xl"},[s("div",{staticClass:"q-gutter-sm"},[s("q-checkbox",{staticClass:"text-h4 text-weight-bold text-primary",attrs:{val:"present-simple",label:"PRESENT SIMPLE",size:"100px"},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}}),s("br"),s("q-checkbox",{staticClass:"text-h4 text-weight-bold text-primary",attrs:{val:"past-simple",label:"PAST SIMPLE",size:"100px"},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}}),s("br"),s("q-checkbox",{staticClass:"text-h4 text-weight-bold text-primary",attrs:{val:"future-simple",label:"FUTURE SIMPLE",size:"100px"},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}}),s("br"),s("q-checkbox",{staticClass:"text-h4 text-weight-bold text-primary",attrs:{val:"present-continuous",label:"PRESENT CONTINUOUS",size:"100px"},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}}),s("br")],1)])]),s("div",{staticClass:"col-xs-1 col-sm-2 col-md-3"})]),s("q-footer",{staticClass:"bg-grey-1",attrs:{bordered:""}},[s("q-tabs",{staticClass:"text-teal",attrs:{"indicator-color":"transparent"}},[s("q-tab",{staticClass:"text-primary",attrs:{icon:"send",label:"Начать тренировку",size:"xl"},on:{click:function(e){return t.start_own_training()}}})],1)],1)],1)])},l=[],i={name:"PageIndex",data(){return{selection:[]}},methods:{start_own_training(){this.$router.push(this.selection.join(","))}}},c=i,o=s("2877"),n=s("9989"),r=s("8f8e"),x=s("7ff0"),b=s("429b"),d=s("7460"),p=s("eebe"),u=s.n(p),m=Object(o["a"])(c,a,l,!1,null,null,null);e["default"]=m.exports;u()(m,"components",{QPage:n["a"],QCheckbox:r["a"],QFooter:x["a"],QTabs:b["a"],QTab:d["a"]})}}]);