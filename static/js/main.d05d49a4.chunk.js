(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{116:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Field is required"},a=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},122:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",profileData:"ProfileInfo_profileData__18agI",socialNetContact:"ProfileInfo_socialNetContact__2DGo7"}},203:function(e,t,n){e.exports={content:"app_content__ckDFI",footer:"app_footer__3qb7a"}},204:function(e,t,n){e.exports={pagination:"Paginator_pagination__1asUZ",active:"Paginator_active__3mj3D"}},212:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},214:function(e,t,n){e.exports={captcha:"Login_captcha__30gIQ",loginBlock:"Login_loginBlock__F6WMc"}},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(1),a=n(12),c=(n(0),n(38)),s=n(24),i=n(2),o=["isAuth"],u=function(e){return{isAuth:e.auth.isAuth}};function l(e){return Object(s.b)(u,{})((function(t){t.isAuth;var n=Object(a.a)(t,o);return t.isAuth?Object(i.jsx)(e,Object(r.a)({},n)):Object(i.jsx)(c.a,{to:"/login"})}))}},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),a=n(1),c={dialogs:[{id:1,name:"Nikita",img:"https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"},{id:2,name:"Chibis",img:"https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png"},{id:3,name:"Solonin",img:"https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png"},{id:4,name:"Chipinkos",img:"https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png"},{id:5,name:"Zelemhan",img:"https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png"}],messages:[{id:1,message:"Hello World!"},{id:2,message:"Gm Sir!"},{id:1,message:"How are you??!!"},{id:2,message:"Awesome!"},{id:2,message:"And You??!"}],newMessageText:""},s={sendMessage:function(e){return{type:"dialogs/SEND-MESSAGE",text:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND-MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:2,message:t.text}]),newMessageText:""});default:return e}}},269:function(e,t,n){e.exports={preloader:"Preloader_preloader__2dvkO"}},273:function(e,t,n){e.exports={profile:"Profile_profile__3dzvr"}},312:function(e,t,n){},442:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),s=n.n(c),i=n(39),o=n.n(i),u=(n(312),function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,475)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),l=n(28),j=n(32),d=n(35),b=n(34),f=n(203),p=n.n(f),h=(n(313),n(45)),O=n(38),m=n(2),g=function(e){return Object(m.jsx)("div",{children:"Settings"})},A=function(e){return Object(m.jsx)("div",{children:"Music"})},x=function(e){var t=[2,3,4,5],n=function(e){return e.map((function(e){return 3*e}))},r=function(e){return e.map((function(e){return e+" "}))};return n(t),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"News"}),"Old array: ",r(t),Object(m.jsx)("br",{}),"New array *3: ",r(n(t))]})},E=n(1),v=n(6),S=n(204),C=n.n(S),P=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=void 0===r?1:r,s=e.changePage,i=void 0===s?function(e){return e}:s,o=e.portionSize,u=void 0===o?10:o,l=Math.ceil(t/n),j=[],d=1;d<=l;d++)j.push(d);var b=Math.ceil(l/u),f=Object(c.useState)(1),p=Object(v.a)(f,2),h=p[0],O=p[1],g=(h-1)*u+1,A=h*u;return Object(m.jsxs)("div",{className:C.a.pagination,children:[h>1&&Object(m.jsx)("button",{onClick:function(){O(h-1)},children:"left"}),j.filter((function(e){return e>=g&&e<=A})).map((function(e){return Object(m.jsx)("span",{className:a===e?C.a.active:void 0,onClick:function(){return i(e)},children:e},e)})),b>h&&Object(m.jsx)("button",{onClick:function(){O(h+1)},children:"right"})]})},k=n(81),Q=n.n(k),y=n(24),I=n(257),N=Object(I.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),w=function(e){return e.usersPage.pageSize},_=function(e){return e.usersPage.filter},B=function(e){return e.usersPage.totalCount},T=function(e){return e.usersPage.currentPage},L=function(e){return e.usersPage.isFetching},D=function(e){return e.usersPage.followingInProgress},F=n(18),R=n.n(F),U=n(37),J=n(11),M=n(258),K=n.n(M).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4e136dca-4dec-4506-a5ef-61efe2ea4b48"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}));var z={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return K.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend="+r)).then((function(e){return e.data}))},follow:function(e){return K.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return K.delete("follow/".concat(e)).then((function(e){return e.data}))}},H={users:[],currentPage:1,pageSize:16,totalCount:0,isFetching:!1,followingInProgress:[],filter:{term:"",friend:null}},Y=function(e){return{type:"users/FOLLOW",userId:e}},G=function(e){return{type:"users/UNFOLLOW",userId:e}},Z=function(e){return{type:"users/SET_USERS",users:e}},W=function(e){return{type:"users/SET_TOTAL",totalCount:e}},q=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},X=function(e){return{type:"users/SET_FILTER",payload:Object(E.a)({},e)}},V=function(e){return{type:"users/SHOW_PRELOADER",preloaderToggle:e}},$=function(e,t){return{type:"users/TOGGLE_FOLLOWING_IN_PROGRESS",isFetching:e,userId:t}},ee=function(e,t,n){return function(){var r=Object(U.a)(R.a.mark((function r(a){var c;return R.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(V(!0)),a(q(e)),a(X(n)),r.next=5,z.getUsers(e,t,n.term,n.friend);case 5:c=r.sent,a(V(!1)),a(Z(c.items)),a(W(c.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},te=function(){var e=Object(U.a)(R.a.mark((function e(t,n,r,a){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t($(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(a(n)),t($(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW":return Object(E.a)(Object(E.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(E.a)(Object(E.a)({},e),{},{followed:!0}):e}))});case"users/UNFOLLOW":return Object(E.a)(Object(E.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(E.a)(Object(E.a)({},e),{},{followed:!1}):e}))});case"users/SET_USERS":return Object(E.a)(Object(E.a)({},e),{},{users:t.users});case"users/SET_TOTAL":return Object(E.a)(Object(E.a)({},e),{},{totalCount:t.totalCount});case"users/SET_CURRENT_PAGE":return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.currentPage});case"users/SET_FILTER":return Object(E.a)(Object(E.a)({},e),{},{filter:t.payload});case"users/SHOW_PRELOADER":return Object(E.a)(Object(E.a)({},e),{},{isFetching:t.preloaderToggle});case"users/TOGGLE_FOLLOWING_IN_PROGRESS":return Object(E.a)(Object(E.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(J.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},re=n(453),ae=n(455),ce=n(215),se=n(456),ie=n(457),oe=n(458),ue=re.a.Text,le={marginTop:"5px"},je=function(e){var t=e.user,n=Object(y.c)(),r=Object(y.d)(D);return Object(m.jsxs)("div",{className:Q.a.user,children:[Object(m.jsxs)("span",{children:[Object(m.jsx)(h.c,{to:"./profile/"+t.id,children:Object(m.jsx)("div",{children:Object(m.jsx)(ae.a,{shape:"square",size:150,src:t.photos.small,icon:Object(m.jsx)(se.a,{})})})}),Object(m.jsx)("div",{className:Q.a.bntPos,children:t.followed?Object(m.jsx)(ce.a,{type:"primary",danger:!0,shape:"circle",icon:Object(m.jsx)(ie.a,{}),size:"large",title:"unfollow",disabled:r.some((function(e){return e===t.id})),onClick:function(){var e;n((e=t.id,function(){var t=Object(U.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(n,e,z.unfollow.bind(z),G);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}):Object(m.jsx)(ce.a,{type:"primary",shape:"circle",icon:Object(m.jsx)(oe.a,{}),size:"large",title:"follow",disabled:r.some((function(e){return e===t.id})),onClick:function(){var e;n((e=t.id,function(){var t=Object(U.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(n,e,z.follow.bind(z),Y);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}})}),Object(m.jsx)(h.c,{to:"./profile/"+t.id,children:Object(m.jsx)("div",{style:le,children:Object(m.jsx)(ue,{strong:!0,children:t.name})})})]}),Object(m.jsx)("span",{})]})},de=n(51),be=n(443),fe=n(444),pe=n(445),he=s.a.memo((function(e){var t=Object(y.d)(_);return Object(m.jsx)(de.d,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:function(){},onSubmit:function(t,n){var r=n.setSubmitting,a={term:t.term,friend:"true"===t.friend||"false"!==t.friend&&null};e.onFilterChanged(a),r(!1)},children:function(e){var t=e.isSubmitting;return Object(m.jsxs)(de.c,{className:Q.a.searchForm,children:[Object(m.jsx)(be.a,{className:Q.a.searchFormInput,name:"term",type:"text",placeholder:"user-name"}),Object(m.jsxs)(fe.a,{name:"friend",className:Q.a.searchFormSelect,children:[Object(m.jsx)("option",{value:"null",children:"All"}),Object(m.jsx)("option",{value:"true",children:"Only followed"}),Object(m.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(m.jsx)(pe.a,{disabled:t,children:"Filter"})]})}})})),Oe=n(208),me=function(e){var t=Object(y.c)(),n=Object(O.g)(),r=Object(y.d)(T),a=Object(y.d)(w),s=Object(y.d)(_),i=Object(y.d)(B),o=Object(y.d)(N);Object(c.useEffect)((function(){var e=Oe.parse(n.location.search.substring(1)),c=r,i=s;switch(e.page&&(c=Number(e.page)),e.term&&(i=Object(E.a)(Object(E.a)({},s),{},{term:e.term})),e.friend){case"null":i=Object(E.a)(Object(E.a)({},i),{},{friend:null});break;case"true":i=Object(E.a)(Object(E.a)({},i),{},{friend:!0});break;case"false":i=Object(E.a)(Object(E.a)({},i),{},{friend:!1})}t(ee(c,a,i))}),[]),Object(c.useEffect)((function(){var e={page:"1"};e.page=String(r),s.term&&(e.term=s.term),null!==s.friend&&(e.friend=String(s.friend)),n.push({pathname:"/users",search:Oe.stringify(e)})}),[s,r]);return Object(m.jsxs)("div",{className:Q.a.usersContainer,children:[Object(m.jsx)(he,{onFilterChanged:function(e){t(ee(1,a,e))}}),Object(m.jsx)("div",{className:Q.a.usersList,children:o.map((function(e){return Object(m.jsx)(je,{user:e})}))}),Object(m.jsx)(P,{currentPage:r,changePage:function(e){t(ee(e,a,s))},pageSize:a,totalItemsCount:i})]})},ge=n.p+"static/media/preloader.f5748b97.gif",Ae=n(269),xe=n.n(Ae),Ee=function(){return Object(m.jsx)("div",{className:xe.a.preloader,children:Object(m.jsx)("img",{src:ge,alt:"preloader"})})},ve=n(218),Se=n(36),Ce=Object(Se.d)(ve.a)((function(e){var t=Object(y.d)(L);return Object(m.jsxs)(m.Fragment,{children:[t?Object(m.jsx)(Ee,{}):null,Object(m.jsx)(me,{})]})})),Pe=n(122),ke=n.n(Pe),Qe=function(e){var t=Object(c.useState)(!1),n=Object(v.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(e.status),i=Object(v.a)(s,2),o=i[0],u=i[1];Object(c.useEffect)((function(){u(e.status)}),[e.status]);return Object(m.jsxs)("div",{children:[!r&&Object(m.jsx)("div",{children:Object(m.jsx)("p",{onClick:function(){a(!0)},children:e.status||"-----"})}),r&&Object(m.jsx)("div",{children:Object(m.jsx)("input",{autoFocus:!0,onChange:function(e){u(e.currentTarget.value)},onBlur:function(){a(!1),e.updateProfileStatus(o)},value:o})})]})},ye=n(253),Ie=n(254),Ne=n(85),we=n(86),_e=n.n(we),Be=Object(Ie.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profileData,r=e.error;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Save Changes"})}),r&&Object(m.jsxs)("div",{className:_e.a.formSummaryError,children:[" ",r]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Full name:"}),"  ",Object(m.jsx)(ye.a,{placeholder:"Name Surname",name:"fullName",component:Ne.a})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"About me:"}),Object(m.jsx)(ye.a,{placeholder:"About Me...",name:"aboutMe",component:Ne.a})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Looking for a job:"})," ",Object(m.jsx)(ye.a,{name:"lookingForAJob",component:"input",type:"checkbox"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Professional skills:"}),"  ",Object(m.jsx)(ye.a,{placeholder:"Professional skills",name:"lookingForAJobDescription",component:Ne.b})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Contacts:"})," ",Object.keys(n.contacts).map((function(e){return Object(m.jsxs)("div",{className:ke.a.socialNetContact,children:[Object(m.jsxs)("b",{children:[e," :"]})," ",Object(m.jsx)(ye.a,{placeholder:e+" link",name:"contacts."+e,component:Ne.a})]},e)}))]})]})})),Te=n(446),Le=n(447),De=n(451),Fe=function(e){var t=e.profileData,n=e.isOwner,r=e.setEditMode;return Object(m.jsxs)("div",{children:[n&&Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:r,children:"Edit Mode"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"About Me:"})," ",t.aboutMe]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Looking for a job:"})," ",t.lookingForAJob?"yes":"no"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Professional skills:"})," ",t.lookingForAJobDescription]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Contacts:"})," ",Object.keys(t.contacts).map((function(e){return Object(m.jsx)(Re,{socialNetName:e,socialNetValue:t.contacts[e]},e)}))]})]})},Re=function(e){var t=e.socialNetName,n=e.socialNetValue;return Object(m.jsxs)("div",{className:ke.a.socialNetContact,children:[Object(m.jsxs)("b",{children:[t,": "]})," ",n]})},Ue=function(e){var t=e.profileData,n=e.status,r=e.updateProfileStatus,a=e.isOwner,s=e.uploadPhoto,i=e.saveProfile,o=Object(c.useState)(!1),u=Object(v.a)(o,2),l=u[0],j=u[1];if(!t)return Object(m.jsx)(Ee,{});return Object(m.jsxs)(Te.a,{children:[Object(m.jsxs)(Le.a,{xs:24,sm:16,md:10,className:ke.a.profileData,children:[Object(m.jsx)("div",{children:Object(m.jsx)(De.a,{src:t.photos.large||"data:image/png;base64,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",alt:"user avatar"})}),a&&Object(m.jsx)("input",{type:"file",onChange:function(e){var t;(null===(t=e.target.files)||void 0===t?void 0:t.length)&&s(e.target.files[0])}}),Object(m.jsx)("h3",{children:t.fullName}),Object(m.jsx)(Qe,{status:n,updateProfileStatus:r})]}),Object(m.jsx)(Le.a,{xs:24,sm:16,md:10,className:ke.a.descriptionBlock,children:l?Object(m.jsx)(Be,{onSubmit:function(e){i(e).then((function(){j(!1)}))},initialValues:t,profileData:t}):Object(m.jsx)(Fe,{profileData:t,isOwner:a,setEditMode:function(){j(!0)}})})]})},Je=n(98),Me=function(e){return K.get("profile/".concat(e)).then((function(e){return e.data}))},Ke=function(e){return K.get("profile/status/".concat(e)).then((function(e){return e.data}))},ze=function(e){return K.put("profile/status ",{status:e}).then((function(e){return e.data}))},He=function(e){var t=new FormData;return t.append("photo",e),K.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},Ye=function(e){return K.put("profile",e).then((function(e){return e.data}))},Ge={posts:[{id:0,message:"Hello World!",likesCounter:321},{id:1,message:"0101101110",likesCounter:18}],profileData:null,profileStatus:""},Ze={addPost:function(e){return{type:"profile/ADD-POST",text:e}},setProfileData:function(e){return{type:"profile/SET_PROFILE_DATA",profileData:e}},setProfileStatus:function(e){return{type:"profile/SET_PROFILE_STATUS",status:e}},savePhotoSuccess:function(e){return{type:"profile/SAVE_PHOTO_SUCCESS",photos:e}},updateLikesCounter:function(e,t){return{type:"profile/UPDATE_LIKES_COUNTER",id:e,operator:t}}},We=function(e){return function(){var t=Object(U.a)(R.a.mark((function t(n){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Me(e);case 2:r=t.sent,n(Ze.setProfileData(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD-POST":var n={id:e.posts.length,message:t.text,likesCounter:0};return Object(E.a)(Object(E.a)({},e),{},{posts:[].concat(Object(J.a)(e.posts),[n])});case"profile/UPDATE_LIKES_COUNTER":return Object(E.a)(Object(E.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(E.a)(Object(E.a)({},e),{},{likesCounter:e.likesCounter+t.operator}):e}))});case"profile/SET_PROFILE_DATA":return Object(E.a)(Object(E.a)({},e),{},{profileData:t.profileData});case"profile/SET_PROFILE_STATUS":return Object(E.a)(Object(E.a)({},e),{},{profileStatus:t.status});case"profile/SAVE_PHOTO_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{profileData:Object(E.a)(Object(E.a)({},e.profileData),{},{photos:t.photos})});default:return e}},Xe=n(212),Ve=n.n(Xe),$e=n(80),et=n(448),tt=n(459),nt=n(460),rt=n(213),at=n.n(rt),ct=function(e){var t=Object(c.useState)(e.likesCounter),n=Object(v.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)("null"),i=Object(v.a)(s,2),o=i[0],u=i[1];Object(c.useEffect)((function(){a(e.likesCounter)}),[e.likesCounter]);var l=[Object(m.jsx)($e.a,{title:"Like",children:Object(m.jsxs)("span",{onClick:function(){"liked"===o?(e.updateLikesCounter(e.id,-1),u("null")):(e.updateLikesCounter(e.id,1),u("liked"))},children:[Object(c.createElement)("liked"===o?tt.a:nt.a),Object(m.jsx)("span",{className:"comment-action",children:r})]})},"comment-basic-like"),Object(m.jsx)("span",{children:"Reply to"},"comment-basic-reply-to")];return Object(m.jsx)(et.a,{actions:l,author:Object(m.jsx)("a",{children:"Han Solo"}),avatar:Object(m.jsx)(ae.a,{src:"https://joeschmoe.io/api/v1/".concat(e.id),alt:"Han Solo"}),content:Object(m.jsx)("p",{children:e.message}),datetime:Object(m.jsx)($e.a,{title:at()().format("YYYY-MM-DD HH:mm:ss"),children:Object(m.jsx)("span",{children:at()().fromNow()})})})},st=n(116),it=n(452),ot=(Object(st.a)(10),function(e){return Object(m.jsx)("div",{className:"addPostContainer",children:Object(m.jsx)(Te.a,{children:Object(m.jsx)(Le.a,{xs:24,sm:20,md:16,lg:10,xl:10,children:Object(m.jsx)(de.d,{initialValues:{newPostText:""},onSubmit:function(t,n){var r=n.resetForm;e.addPost(t.newPostText),r()},render:function(){return Object(m.jsxs)(it.a,{children:[Object(m.jsx)(it.a.Item,{name:"newPostText",children:Object(m.jsx)(be.a.TextArea,{name:"newPostText",placeholder:"What's new?",showCount:!0,required:!0,maxLength:100})}),Object(m.jsx)(it.a.Item,{name:"button",children:Object(m.jsx)(ce.a,{htmlType:"submit",children:"Add Post"})})]})}})})})})}),ut=function(e){var t=e.posts.map((function(t){return Object(m.jsx)(ct,{id:t.id,message:t.message,likesCounter:t.likesCounter,updateLikesCounter:e.updateLikesCounter},t.id)}));return Object(m.jsxs)("div",{className:Ve.a.postsBlock,children:[Object(m.jsx)(ot,{addPost:e.addPost}),Object(m.jsx)("div",{className:Ve.a.posts,children:t})]})},lt=s.a.memo(ut),jt=Object(y.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:Ze.addPost,updateLikesCounter:Ze.updateLikesCounter})(lt),dt=n(449),bt=n(273),ft=n.n(bt),pt=function(e){return Object(m.jsxs)("div",{className:ft.a.profile,children:[Object(m.jsx)(Ue,{isOwner:e.isOwner,profileData:e.profileData,status:e.status,uploadPhoto:e.uploadPhoto,updateProfileStatus:e.updateProfileStatus,saveProfile:e.saveProfile}),Object(m.jsx)(dt.a,{orientation:"left",children:"My Posts"}),Object(m.jsx)(jt,{})]})},ht=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.getProfileData(e),this.props.getProfileStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(m.jsx)(pt,Object(E.a)(Object(E.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profileData:this.props.profileData,updateProfileStatus:this.props.updateProfileStatus,uploadPhoto:this.props.uploadPhoto,saveProfile:this.props.saveProfile}))}}]),n}(s.a.Component),Ot=Object(Se.d)(Object(y.b)((function(e){return{profileData:e.profilePage.profileData,status:e.profilePage.profileStatus,userId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfileData:We,getProfileStatus:function(e){return function(){var t=Object(U.a)(R.a.mark((function t(n){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ke(e);case 2:r=t.sent,n(Ze.setProfileStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfileStatus:function(e){return function(){var t=Object(U.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ze(e);case 3:0===t.sent.resultCode&&n(Ze.setProfileStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},uploadPhoto:function(e){return function(){var t=Object(U.a)(R.a.mark((function t(n){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,He(e);case 2:0===(r=t.sent).resultCode&&n(Ze.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(U.a)(R.a.mark((function t(n,r){var a,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,Ye(e);case 3:if(0!==(c=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(We(a)),t.next=10;break;case 9:throw new Error("userId can not be null");case 10:t.next=14;break;case 12:return n(Object(Je.a)("edit-profile",{_error:c.messages[0]})),t.abrupt("return",Promise.reject(c.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),O.h)(ht),mt=function(){return K.get("auth/me").then((function(e){return e.data}))},gt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return K.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},At=function(){return K.delete("auth/login")},xt=function(){return K.get("security/get-captcha-url").then((function(e){return e.data}))},Et={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},vt=function(e,t,n,r){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},St=function(e){return{type:"auth/SET_NEW_CAPTCHA_URL",payload:{captchaUrl:e}}},Ct=function(){return function(){var e=Object(U.a)(R.a.mark((function e(t){var n,a,c,s,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,mt();case 2:(n=e.sent).resultCode===r.Success&&(a=n.data,c=a.id,s=a.login,i=a.email,t(vt(c,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Pt=function(){return function(){var e=Object(U.a)(R.a.mark((function e(t){var n,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xt();case 2:n=e.sent,r=n.url,t(St(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/SET_NEW_CAPTCHA_URL":return Object(E.a)(Object(E.a)({},e),t.payload);default:return e}},Qt=n(214),yt=n.n(Qt),It=Object(Ie.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(m.jsx)("div",{children:Object(m.jsx)(ye.a,{placeholder:"E-mail",name:"email",component:Ne.a,validate:[st.b]})}),Object(m.jsx)("div",{children:Object(m.jsx)(ye.a,{type:"password",placeholder:"Password",name:"password",component:Ne.a,validate:[st.b]})}),Object(m.jsxs)("div",{children:[Object(m.jsx)(ye.a,{type:"checkbox",name:"rememberMe",component:"input",style:{width:"30px"}})," remember me"]}),r&&Object(m.jsxs)("div",{className:yt.a.captcha,children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:r})}),Object(m.jsx)("div",{children:Object(m.jsx)(ye.a,{name:"captcha",component:Ne.a,validate:[st.b]})})]}),n&&Object(m.jsxs)("div",{className:_e.a.formSummaryError,children:[" ",n]}),Object(m.jsx)("div",{children:Object(m.jsx)(ce.a,{type:"primary",htmlType:"submit",children:"Login"})})]})})),Nt=function(e){var t=Object(y.c)(),n=Object(y.d)((function(e){return e.auth.captchaUrl}));return Object(y.d)((function(e){return e.auth.isAuth}))?Object(m.jsx)(O.a,{to:"/profile"}):Object(m.jsx)(Te.a,{justify:"center",children:Object(m.jsx)(Le.a,{lg:6,md:9,sm:12,children:Object(m.jsxs)("div",{className:yt.a.loginBlock,children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)(It,{captchaUrl:n,onSubmit:function(e){var n,c,s,i;t((n=e.email,c=e.password,s=e.rememberMe,i=e.captcha,function(){var e=Object(U.a)(R.a.mark((function e(t){var o,u;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gt(n,c,s,i);case 2:(o=e.sent).resultCode===r.Success?t(Ct()):(o.resultCode===a.CaptchaIsRequired&&t(Pt()),u=o.messages.length>0?o.messages[0]:"Some error appeared",t(Object(Je.a)("login",{_error:u})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}})]})})})},wt={initialized:!1},_t=function(){return{type:"app/INITIALIZED_SUCCESS"}},Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{initialized:!0});default:return e}},Tt=n(252),Lt={},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt;return e},Ft=n(274),Rt=n(255),Ut=Object(Se.c)({profilePage:qe,dialogsPage:Tt.b,sidebar:Dt,usersPage:ne,auth:kt,form:Rt.a,app:Bt}),Jt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Se.d,Mt=Object(Se.e)(Ut,Jt(Object(Se.a)(Ft.a))),Kt=n(450),zt=n(454),Ht=n(463),Yt=n(464),Gt=n(465),Zt=n(466),Wt=n(467),qt=n(468),Xt=function(e){return e.auth.isAuth},Vt=function(e){return e.auth.login},$t=n(461),en=n(462),tn=function(e){var t=Kt.a.Header,n=Object(y.c)(),r=Object(y.d)(Xt);Object(y.d)(Vt);return Object(m.jsx)(t,{className:"site-layout-background",style:{padding:"0 15% 0 0",display:"flex",justifyContent:"flex-end"},children:Object(m.jsx)("header",{style:{display:"inline-block"},children:r?Object(m.jsxs)(ce.a,{type:"primary",onClick:function(){n(function(){var e=Object(U.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,At();case 2:0===e.sent.data.resultCode&&t(vt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:["Log out ",Object(m.jsx)($t.a,{})]}):Object(m.jsxs)(ce.a,{children:[" ",Object(m.jsxs)(h.b,{to:"/login",children:["Login ",Object(m.jsx)(en.a,{})]})," "]})})})},nn=Kt.a.Content,rn=Kt.a.Footer,an=Kt.a.Sider,cn=s.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,478))})),sn=s.a.lazy((function(){return n.e(5).then(n.bind(null,477))})),on=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){console.error("Some error occured! (Check console for more details)")},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(m.jsx)(Kt.a,{children:Object(m.jsxs)(Kt.a,{className:"site-layout",children:[Object(m.jsxs)(an,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)},children:[Object(m.jsx)("div",{style:{marginLeft:20,marginTop:7,marginBottom:0},children:Object(m.jsx)(Te.a,{justify:"start",children:Object(m.jsx)(Le.a,{children:Object(m.jsx)(De.a,{preview:!1,height:50,src:"https://miro.medium.com/max/800/1*VeM-5lsAtrrJ4jXH96h5kg.png"})})})}),Object(m.jsxs)(zt.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(m.jsx)(zt.a.Item,{icon:Object(m.jsx)(se.a,{}),children:Object(m.jsx)(h.b,{to:"/profile",children:"My Profile"})},"1"),Object(m.jsx)(zt.a.Item,{icon:Object(m.jsx)(Ht.a,{}),children:Object(m.jsx)(h.b,{to:"/dialogs",children:"Messages"})},"2"),Object(m.jsx)(zt.a.Item,{icon:Object(m.jsx)(Yt.a,{}),children:Object(m.jsx)(h.b,{to:"/users",children:"Users"})},"3"),Object(m.jsx)(zt.a.Item,{icon:Object(m.jsx)(Gt.a,{}),children:Object(m.jsx)(h.b,{to:"/generalChatPage",children:"General Chat"})},"4"),Object(m.jsx)(zt.a.Item,{icon:Object(m.jsx)(Zt.a,{}),children:Object(m.jsx)(h.b,{to:"/news",children:"News"})},"5"),Object(m.jsx)(zt.a.Item,{icon:Object(m.jsx)(Wt.a,{}),children:Object(m.jsx)(h.b,{to:"/music",children:"Music"})},"6"),Object(m.jsx)(zt.a.Item,{icon:Object(m.jsx)(qt.a,{}),children:Object(m.jsx)(h.b,{to:"/settings",children:"Settings"})},"7")]})]}),Object(m.jsxs)(Kt.a,{children:[Object(m.jsx)(tn,{}),Object(m.jsx)(nn,{className:p.a.content,children:Object(m.jsxs)(O.d,{children:[Object(m.jsx)(O.a,{exact:!0,from:"/",to:"/profile"}),Object(m.jsx)(O.b,{path:"/profile/:userId?",render:function(){return Object(m.jsx)(Ot,{})}}),Object(m.jsx)(O.b,{path:"/dialogs",render:function(){return Object(m.jsx)(c.Suspense,{fallback:Object(m.jsx)(Ee,{}),children:Object(m.jsx)(cn,{})})}}),Object(m.jsx)(O.b,{path:"/users",render:function(){return Object(m.jsx)(Ce,{})}}),Object(m.jsx)(O.b,{path:"/generalChatPage",render:function(){return Object(m.jsx)(c.Suspense,{fallback:Object(m.jsx)(Ee,{}),children:Object(m.jsx)(sn,{})})}}),Object(m.jsx)(O.b,{path:"/news",component:x}),Object(m.jsx)(O.b,{path:"/music",component:A}),Object(m.jsx)(O.b,{path:"/settings",component:g}),Object(m.jsx)(O.b,{path:"/login",component:Nt}),Object(m.jsx)(O.b,{path:"*",render:function(){return Object(m.jsx)("div",{children:"404 Page Not Found"})}})]})}),Object(m.jsx)(rn,{className:p.a.footer,children:"SN \xa92021 Created by Nikita Maliarchuk"})]})]})}):Object(m.jsx)(Ee,{})}}]),n}(c.Component),un=Object(y.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Ct());Promise.all([t]).then((function(){e(_t())}))}}})(on),ln=function(){return Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(h.a,{children:Object(m.jsx)(y.a,{store:Mt,children:Object(m.jsx)(un,{})})})})};o.a.render(Object(m.jsx)(ln,{}),document.getElementById("root")),u()},81:function(e,t,n){e.exports={usersContainer:"users_usersContainer__13urB",usersList:"users_usersList__1Gf7O",user:"users_user__1fmHm",bntPos:"users_bntPos__36l32",searchForm:"users_searchForm__2IaFB",searchFormInput:"users_searchFormInput__olUKg",searchFormSelect:"users_searchFormSelect__3QV-R"}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j}));var r=n(1),a=n(12),c=n(86),s=n.n(c),i=n(2),o=["input","meta"],u=["input","meta"],l=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,o),u=n.touched&&n.error;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(u?s.a.error:" "),children:[Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),c)),u&&Object(i.jsx)("span",{children:n.error})]})},j=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,u),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(o?s.a.error:" "),children:[Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),c)),o&&Object(i.jsx)("span",{children:n.error})]})}},86:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}}},[[442,1,2]]]);
//# sourceMappingURL=main.d05d49a4.chunk.js.map