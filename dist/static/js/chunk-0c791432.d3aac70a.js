(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c791432"],{38466:function(e,t,n){"use strict";(function(e){var a=n("5f87"),r=n("3fa5"),i=n("4328"),s=n.n(i);t["a"]={data:function(){return{form:{username:"",head_image:"",nickname:"",description:""},userRules:{nickname:[{required:!0,message:"请输入昵称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],description:[{required:!0,message:"请输入个人简介",trigger:"blur"}]}}},created:function(){this.getUserInfo()},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var n={username:t.form.username,info:{username:t.form.username,nickname:t.form.nickname,description:t.form.description}};n=s.a.stringify(n),t.Axios.patch("/auth/userinfo/update",n).then((function(e){Object(r["e"])("修改成功"),t.getUserInfo()})).catch((function(e){Object(r["c"])(e.message)}))}))},getUserInfo:function(){var t=this;this.Axios.get("/auth/userinfo?username=".concat(Object(a["a"])("username")),null).then((function(n){t.form=n.data,e.head_image=n.data.head_image})).catch((function(e){Object(r["c"])(e.message)}))},handleRequest:function(t){var n=this,i=t.file,s=new FormData;s.append("file",i),s.append("username",Object(a["a"])("username")),this.Axios.post("/auth/userinfo/headimage/update",s).then((function(t){n.form.head_image=t.data.head_image,e.avater=t.data.head_image})).catch((function(e){Object(r["c"])(e.message)}))},random:function(){var e=this;this.Axios.get("/funny/soup/random",null).then((function(t){Object(r["e"])("随机成功"),e.form.description=t.data[0].title})).catch((function(e){Object(r["c"])(e.message)}))}}}}).call(this,n("c8ba"))},"3fa5":function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n("5c96");function r(e){Object(a["Message"])({type:"success",duration:3e3,message:e})}function i(e){Object(a["Message"])({type:"info",duration:3e3,message:e})}function s(e){Object(a["Message"])({type:"error",duration:3e3,message:e})}function o(e){return Object(a["MessageBox"])({title:"提示",message:e})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"确定执行此操作吗？",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";return a["MessageBox"].confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:t,center:!0})}},"6dae":function(e,t,n){"use strict";var a=n("dc3f"),r=n.n(a);r.a},dc3f:function(e,t,n){},e382:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.userRules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{disabled:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"头像"}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/uploadImage",name:"wxQrcodeUrl","http-request":e.handleRequest,"show-file-list":!1}},[e.form.head_image?n("img",{staticClass:"avatar",attrs:{src:e.form.head_image}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),n("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[n("el-input",{model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"简介",prop:"description"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),n("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:e.random}},[e._v("随机生成一条")])],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("修改")])],1)],1)],1)},r=[],i=n("38466"),s=i["a"],o=(n("6dae"),n("2877")),c=Object(o["a"])(s,a,r,!1,null,"505fe013",null);t["default"]=c.exports}}]);