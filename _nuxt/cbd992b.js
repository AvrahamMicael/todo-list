(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{351:function(t,e,n){"use strict";n.r(e);var c=n(115),o={__name:"Task",props:{task:{type:Object,required:!0}},setup:function(t){var e=t,n=Object(c.e)().commit;return{__sfc:!0,props:e,commit:n,toggleTaskDone:function(){n("TOGGLE_TASK_DONE",e.task)},deleteTask:function(){n("DELETE_TASK",e.task)},useStore:c.e}}},l=n(84),component=Object(l.a)(o,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("section",{staticClass:"task d-flex justify-content-between",class:{done:t.task.done}},[e("span",{staticClass:"my-auto text-break"},[t._v(t._s(t.task.content))]),t._v(" "),e("span",{staticClass:"d-flex flex-column flex-sm-row align-items-sm-center justify-content-center justify-content-sm-between"},[e("button",{staticClass:"btn btn-success",on:{click:n.toggleTaskDone}},[t._v(t._s(t.task.done?"UNDO":"DONE"))]),t._v("\n         \n        "),e("button",{staticClass:"btn btn-danger",on:{click:n.deleteTask}},[t._v("DELETE")])])])}),[],!1,null,null,null);e.default=component.exports}}]);