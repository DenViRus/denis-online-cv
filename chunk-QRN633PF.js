import{Ab as B,Db as j,Ea as S,Eb as O,Fa as P,Fb as $,Ga as u,Ha as g,Ia as v,Ja as D,Ka as r,La as s,Ma as d,Oa as w,Pa as x,Qa as E,Ra as l,Sa as p,Ta as F,V as h,Wa as m,ea as c,ib as L,va as I,ya as o,yb as y,za as b,zb as k}from"./chunk-IJKGPYMI.js";var M=B($),z=k(M,t=>t.langTogglerData),U=k(M,t=>t.onlineCvData.profileData),W=k(M,t=>t.onlineCvData.contactsData),V=k(M,t=>t.onlineCvData.educationData),_=k(M,t=>t.onlineCvData.coursesData),H=k(M,t=>t.onlineCvData.languagesData),N=k(M,t=>t.onlineCvData.interestsData),X=k(M,t=>t.onlineCvData.summaryData),A=k(M,t=>t.onlineCvData.experienceData),K=k(M,t=>t.onlineCvData.projectsData),R=k(M,t=>t.onlineCvData.skillsData);var q=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.langTogglerDataSubscription=this.store.select(z).pipe(h(a=>this.langTogglerData=a)).subscribe(),this.store.dispatch(j.loadLangTogglerData({langTogglerData:this.langTogglerData}))}onToggleLang(){this.langTogglerData=this.langTogglerData===O.EN?O.RU:O.EN,this.store.dispatch(j.loadLangTogglerData({langTogglerData:this.langTogglerData}))}ngOnDestroy(){this.langTogglerDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-lang-toggler"]],standalone:!0,features:[m],decls:4,vars:7,consts:[[1,"lang-toggler"],["tabindex","0",3,"click","keyup"]],template:function(i,n){i&1&&(r(0,"div",0)(1,"div",1),w("click",function(){return n.onToggleLang()})("keyup",function(){return n.onToggleLang()}),s(),r(2,"div"),l(3),s()()),i&2&&(o(),u("toggler-inner toggler-inner--",n.langTogglerData,""),o(),u("toggler-text toggler-text--",n.langTogglerData,""),o(),p(n.langTogglerData))},styles:["[_nghost-%COMP%]{position:absolute;top:.5rem;right:.5rem}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;width:7.5rem;height:2.5rem;background-color:var(--theme-color);border-radius:2.5rem}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-inner[_ngcontent-%COMP%]{position:absolute;width:2.5rem;height:2.5rem;border-radius:50%;background-color:var(--white-color);cursor:pointer;z-index:1;transition:left .3s ease-in-out}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-inner--en[_ngcontent-%COMP%]{left:calc(100% - 2.5rem)}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-inner--ru[_ngcontent-%COMP%]{left:0}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-text[_ngcontent-%COMP%]{position:absolute;left:.5rem;text-transform:uppercase;font-weight:700;color:var(--text-color);transition:left .3s ease-in-out}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-text--en[_ngcontent-%COMP%]{left:.5rem;animation:_ngcontent-%COMP%_fadeIn .3s ease-in-out}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-text--ru[_ngcontent-%COMP%]{left:calc(100% - 3rem);animation:_ngcontent-%COMP%_fadeOut .3s ease-in-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:1}10%{opacity:0}to{opacity:0}}@keyframes _ngcontent-%COMP%_fadeOut{0%{opacity:1}10%{opacity:0}to{opacity:0}}"]});let t=e;return t})();function he(t,e){if(t&1&&(r(0,"li",9),l(1),s()),t&2){let f=e.$implicit;o(),p(f)}}function be(t,e){if(t&1&&(r(0,"li",9),l(1),s()),t&2){let f=e.$implicit;o(),p(f)}}var G=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-experience-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[m],decls:22,vars:11,consts:[[1,"section-block-item"],[1,"section-item-meta"],[1,"meta-box"],[1,"meta-title"],[1,"meta-time"],[1,"meta-company"],[1,"section-item-details"],[1,"detail-title"],[1,"detail-list"],[1,"detail-item"],["class","detail-item"]],template:function(i,n){i&1&&(r(0,"li",0)(1,"div",1)(2,"div",2)(3,"h3",3),l(4),s(),r(5,"div",4),l(6),s()(),r(7,"div",5),l(8),s()(),r(9,"div",6)(10,"div")(11,"h5",7),l(12),s(),r(13,"ul",8),v(14,he,2,1,"li",10,g),s()(),r(16,"div")(17,"h5",7),l(18),s(),r(19,"ul",8),v(20,be,2,1,"li",10,g),s()()()()),i&2&&(o(4),p(n.itemData.title),o(2),p(n.itemData.time),o(2),p(n.itemData.company),o(2),u("detail-box detail-box--",n.itemData.responsibilities.title,""),o(2),p(n.itemData.responsibilities.title),o(2),D(n.itemData.responsibilities.items),o(2),u("detail-box detail-box--",n.itemData.achievements.title,""),o(2),p(n.itemData.achievements.title),o(2),D(n.itemData.achievements.items))}});let t=e;return t})();function ye(t,e){if(t&1&&d(0,"app-experience-item",3),t&2){let f=e.$implicit;S("itemData",f)}}var J=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.experienceDataSubscription=this.store.select(A).pipe(h(a=>this.experienceData=a)).subscribe()}ngOnDestroy(){this.experienceDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-experience"]],standalone:!0,features:[m],decls:8,vars:7,consts:[[1,"section-title-box"],[1,"section-block-title"],[1,"section-block-list"],[3,"itemData"]],template:function(i,n){i&1&&(r(0,"section")(1,"div",0),d(2,"div"),r(3,"h2",1),l(4),s()(),r(5,"ul",2),v(6,ye,1,1,"app-experience-item",3,g),s()()),i&2&&(u("section-block section-block--",n.experienceData.type,""),o(2),u("section-block-icon section-block-icon--",n.experienceData.type,""),o(2),p(n.experienceData.title),o(2),D(n.experienceData.items))},dependencies:[G]});let t=e;return t})();var Q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-learning-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[m],decls:13,vars:5,consts:[[1,"section-block-item"],[1,"section-item-meta"],[1,"meta-box","meta-box--title"],[1,"meta-title"],[1,"meta-time"],[1,"meta-box","meta-box--link"],[1,"meta-org"],[1,"meta-url"],["target","_blank","rel","noreferrer nofollow noopener",1,"meta-link",3,"href"]],template:function(i,n){i&1&&(r(0,"li",0)(1,"div",1)(2,"div",2)(3,"h3",3),l(4),s(),r(5,"div",4),l(6),s()(),r(7,"div",5)(8,"div",6),l(9),s(),r(10,"div",7)(11,"a",8),l(12),s()()()()()),i&2&&(o(4),p(n.itemData.degree),o(2),p(n.itemData.time),o(3),p(n.itemData.meta),o(2),x("href",n.itemData.link,I),o(),p(n.itemData.meta))}});let t=e;return t})();function Ce(t,e){if(t&1&&d(0,"app-learning-item",3),t&2){let f=e.$implicit;S("itemData",f)}}var Y=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.learningDataSubscription=this.store.select(_).pipe(h(a=>this.learningData=a)).subscribe()}ngOnDestroy(){this.learningDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-learning"]],standalone:!0,features:[m],decls:8,vars:7,consts:[[1,"section-title-box"],[1,"section-block-title"],[1,"section-block-list"],[3,"itemData"]],template:function(i,n){i&1&&(r(0,"section")(1,"div",0),d(2,"div"),r(3,"h2",1),l(4),s()(),r(5,"ul",2),v(6,Ce,1,1,"app-learning-item",3,g),s()()),i&2&&(u("section-block section-block--",n.learningData.type,""),o(2),u("section-block-icon section-block-icon--",n.learningData.type,""),o(2),p(n.learningData.title),o(2),D(n.learningData.items))},dependencies:[Q]});let t=e;return t})();function Se(t,e){if(t&1&&(r(0,"li",7)(1,"div",8)(2,"div",9)(3,"h5",10),l(4),s(),r(5,"div",11),l(6),s()(),r(7,"div",12)(8,"a",13),l(9,"demo"),s()()()()),t&2){let f=e.$implicit;o(4),p(f.title),o(2),p(f.desc),o(2),x("href",f.link,I)}}var Z=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-projects-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[m],decls:11,vars:6,consts:[[1,"section-item-meta"],[1,"meta-box"],[1,"meta-image",3,"src","alt"],[1,"meta-title"],[1,"section-item-details"],[1,"detail-box"],[1,"detail-list"],[1,"detail-item"],[1,"detail-item-box"],[1,"detail-item-heading-box"],[1,"detail-item-heading"],[1,"detail-item-desc"],[1,"detail-item-link-box"],["target","_blank",1,"detail-item-link",3,"href"],["class","detail-item"]],template:function(i,n){i&1&&(r(0,"li")(1,"div",0)(2,"div",1),d(3,"img",2),r(4,"h3",3),l(5),s()(),r(6,"div",4)(7,"div",5)(8,"ul",6),v(9,Se,10,3,"li",14,g),s()()()()()),i&2&&(u("section-block-item section-block-item--",n.itemData.type,""),o(3),x("src",n.itemData.icon,I),E("alt","icon ",n.itemData.type,""),o(2),p(n.itemData.title),o(4),D(n.itemData.items))}});let t=e;return t})();function Ie(t,e){if(t&1&&d(0,"app-projects-item",3),t&2){let f=e.$implicit;S("itemData",f)}}var ee=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.projectsDataSubscription=this.store.select(K).pipe(h(a=>this.projectsData=a)).subscribe()}ngOnDestroy(){this.projectsDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-projects"]],standalone:!0,features:[m],decls:8,vars:7,consts:[[1,"section-title-box"],[1,"section-block-title"],[1,"section-block-list"],[3,"itemData"]],template:function(i,n){i&1&&(r(0,"section")(1,"div",0),d(2,"div"),r(3,"h2",1),l(4),s()(),r(5,"ul",2),v(6,Ie,1,1,"app-projects-item",3,g),s()()),i&2&&(u("section-block section-block--",n.projectsData.type,""),o(2),u("section-block-icon section-block-icon--",n.projectsData.type,""),o(2),p(n.projectsData.title),o(2),D(n.projectsData.items))},dependencies:[Z]});let t=e;return t})();var te=(()=>{let e=class e{get levelWidth(){return`${this.itemData.level}%`}get levelWidth5(){return`${this.itemData.level+5}%`}get levelWidth10(){return`${this.itemData.level+10}%`}get levelWidth15(){return`${this.itemData.level+15}%`}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-skills-item"]],hostVars:8,hostBindings:function(i,n){i&2&&P("--level-width",n.levelWidth)("--level-width-5",n.levelWidth5)("--level-width-10",n.levelWidth10)("--level-width-15",n.levelWidth15)},inputs:{itemData:"itemData"},standalone:!0,features:[m],decls:7,vars:6,consts:[[1,"section-item-meta"],[1,"meta-box"],[1,"level-title"],[1,"level-bar"],[1,"level-bar-inner"]],template:function(i,n){i&1&&(r(0,"li")(1,"div",0)(2,"div",1)(3,"h3",2),l(4),s(),r(5,"div",3),d(6,"div",4),s()()()()),i&2&&(u("section-block-item section-block-item--",n.itemData.type,""),o(4),p(n.itemData.title),o(2),P("width",n.itemData.level,"%"))},dependencies:[L]});let t=e;return t})();function xe(t,e){if(t&1&&d(0,"app-skills-item",3),t&2){let f=e.$implicit;S("itemData",f)}}var ie=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.skillsDataSubscription=this.store.select(R).pipe(h(a=>this.skillsData=a)).subscribe()}ngOnDestroy(){this.skillsDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-skills"]],standalone:!0,features:[m],decls:8,vars:7,consts:[[1,"section-title-box"],[1,"section-block-title"],[1,"section-block-list"],[3,"itemData"]],template:function(i,n){i&1&&(r(0,"section")(1,"div",0),d(2,"div"),r(3,"h2",1),l(4),s()(),r(5,"ul",2),v(6,xe,1,1,"app-skills-item",3,g),s()()),i&2&&(u("section-block section-block--",n.skillsData.type,""),o(2),u("section-block-icon section-block-icon--",n.skillsData.type,""),o(2),p(n.skillsData.title),o(2),D(n.skillsData.items))},dependencies:[te]});let t=e;return t})();function ke(t,e){if(t&1&&(r(0,"p",2),l(1),s()),t&2){let f=e.$implicit;o(),p(f)}}var ne=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.summaryDataSubscription=this.store.select(X).pipe(h(a=>this.summaryData=a)).subscribe()}ngOnDestroy(){this.summaryDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-summary"]],standalone:!0,features:[m],decls:7,vars:7,consts:[[1,"section-title-box"],[1,"section-block-title"],[1,"section-block-paragraph"],["class","section-block-paragraph"]],template:function(i,n){i&1&&(r(0,"section")(1,"div",0),d(2,"div"),r(3,"h2",1),l(4),s()(),v(5,ke,2,1,"p",3,g),s()),i&2&&(u("section-block section-block--",n.summaryData.type,""),o(2),u("section-block-icon section-block-icon--",n.summaryData.type,""),o(2),p(n.summaryData.title),o(),D(n.summaryData.items))}});let t=e;return t})();var ae=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-main"]],standalone:!0,features:[m],decls:6,vars:0,consts:[["id","onlineCVmainBX",1,"project-box","project-box--main"]],template:function(i,n){i&1&&(r(0,"div",0),d(1,"app-summary")(2,"app-experience")(3,"app-learning")(4,"app-projects")(5,"app-skills"),s())},dependencies:[ne,J,Y,ee,ie],styles:["[_nghost-%COMP%]{grid-column:span 7;order:1}"]});let t=e;return t})();var oe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-contacts-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[m],decls:4,vars:4,consts:[[1,"container-block-item"],[1,"item-icon",3,"src","alt"],["target","_blank",1,"item-link",3,"href"]],template:function(i,n){i&1&&(r(0,"li",0),d(1,"img",1),r(2,"a",2),l(3),s()()),i&2&&(o(),x("src",n.itemData.icon,I),E("alt","icon ",n.itemData.type,""),o(),x("href",n.itemData.link,I),o(),p(n.itemData.text))}});let t=e;return t})();function Me(t,e){if(t&1&&d(0,"app-contacts-item",2),t&2){let f=e.$implicit;S("itemData",f)}}var re=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.contactsDataSubscription=this.store.select(W).pipe(h(a=>this.contactsData=a)).subscribe()}ngOnDestroy(){this.contactsDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-contacts"]],standalone:!0,features:[m],decls:6,vars:4,consts:[[1,"container-block-title"],[1,"container-block-list"],[3,"itemData"]],template:function(i,n){i&1&&(r(0,"div")(1,"h2",0),l(2),s(),r(3,"ul",1),v(4,Me,1,1,"app-contacts-item",2,g),s()()),i&2&&(u("container-block container-block--",n.contactsData.type," block-divider"),o(2),p(n.contactsData.title),o(2),D(n.contactsData.items))},dependencies:[oe]});let t=e;return t})();var se=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-courses-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[m],decls:7,vars:3,consts:[[1,"container-block-item"],[1,"item-degree"],[1,"item-meta"],[1,"item-time"]],template:function(i,n){i&1&&(r(0,"li",0)(1,"h4",1),l(2),s(),r(3,"h5",2),l(4),s(),r(5,"h6",3),l(6),s()()),i&2&&(o(2),p(n.itemData.degree),o(2),p(n.itemData.meta),o(2),p(n.itemData.time))}});let t=e;return t})();function Te(t,e){if(t&1&&d(0,"app-courses-item",2),t&2){let f=e.$implicit;S("itemData",f)}}var le=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.coursesDataSubscription=this.store.select(_).pipe(h(a=>this.coursesData=a)).subscribe()}ngOnDestroy(){this.coursesDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-courses"]],standalone:!0,features:[m],decls:6,vars:4,consts:[[1,"container-block-title"],[1,"container-block-list"],[3,"itemData"]],template:function(i,n){i&1&&(r(0,"div")(1,"h2",0),l(2),s(),r(3,"ul",1),v(4,Te,1,1,"app-courses-item",2,g),s()()),i&2&&(u("container-block container-block--",n.coursesData.type," block-divider"),o(2),p(n.coursesData.title),o(2),D(n.coursesData.items))},dependencies:[se]});let t=e;return t})();var pe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-education-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[m],decls:7,vars:3,consts:[[1,"container-block-item"],[1,"item-degree"],[1,"item-meta"],[1,"item-time"]],template:function(i,n){i&1&&(r(0,"li",0)(1,"h4",1),l(2),s(),r(3,"h5",2),l(4),s(),r(5,"h6",3),l(6),s()()),i&2&&(o(2),p(n.itemData.degree),o(2),p(n.itemData.meta),o(2),p(n.itemData.time))}});let t=e;return t})();function Ee(t,e){if(t&1&&d(0,"app-education-item",2),t&2){let f=e.$implicit;S("itemData",f)}}var ce=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.educationDataSubscription=this.store.select(V).pipe(h(a=>this.educationData=a)).subscribe()}ngOnDestroy(){this.educationDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-education"]],standalone:!0,features:[m],decls:6,vars:4,consts:[[1,"container-block-title"],[1,"container-block-list"],[3,"itemData"]],template:function(i,n){i&1&&(r(0,"div")(1,"h2",0),l(2),s(),r(3,"ul",1),v(4,Ee,1,1,"app-education-item",2,g),s()()),i&2&&(u("container-block container-block--",n.educationData.type," block-divider"),o(2),p(n.educationData.title),o(2),D(n.educationData.items))},dependencies:[pe]});let t=e;return t})();var me=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-interests-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[m],decls:3,vars:3,consts:[[1,"container-block-item"],[1,"item-icon",3,"src","alt"]],template:function(i,n){i&1&&(r(0,"li",0),l(1),d(2,"img",1),s()),i&2&&(o(),F(" ",n.itemData.name," "),o(),x("src",n.itemData.icon,I),E("alt","icon ",n.itemData.name,""))}});let t=e;return t})();function Fe(t,e){if(t&1&&d(0,"app-interests-item",2),t&2){let f=e.$implicit;S("itemData",f)}}var de=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.interestsDataSubscription=this.store.select(N).pipe(h(a=>this.interestsData=a)).subscribe()}ngOnDestroy(){this.interestsDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-interests"]],standalone:!0,features:[m],decls:6,vars:4,consts:[[1,"container-block-title"],[1,"container-block-list"],[3,"itemData"]],template:function(i,n){i&1&&(r(0,"div")(1,"h2",0),l(2),s(),r(3,"ul",1),v(4,Fe,1,1,"app-interests-item",2,g),s()()),i&2&&(u("container-block container-block--",n.interestsData.type," block-divider"),o(2),p(n.interestsData.title),o(2),D(n.interestsData.items))},dependencies:[me]});let t=e;return t})();var ue=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-languages-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[m],decls:4,vars:2,consts:[[1,"container-block-item"],[1,"item-desc"]],template:function(i,n){i&1&&(r(0,"li",0),l(1),r(2,"span",1),l(3),s()()),i&2&&(o(),F(" ",n.itemData.name," "),o(2),p(n.itemData.desc))}});let t=e;return t})();function Oe(t,e){if(t&1&&d(0,"app-languages-item",2),t&2){let f=e.$implicit;S("itemData",f)}}var fe=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.languagesDataSubscription=this.store.select(H).pipe(h(a=>this.languagesData=a)).subscribe()}ngOnDestroy(){this.languagesDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-languages"]],standalone:!0,features:[m],decls:6,vars:4,consts:[[1,"container-block-title"],[1,"container-block-list"],[3,"itemData"]],template:function(i,n){i&1&&(r(0,"div")(1,"h2",0),l(2),s(),r(3,"ul",1),v(4,Oe,1,1,"app-languages-item",2,g),s()()),i&2&&(u("container-block container-block--",n.languagesData.type," block-divider"),o(2),p(n.languagesData.title),o(2),D(n.languagesData.items))},dependencies:[ue]});let t=e;return t})();var ge=(()=>{let e=class e{constructor(a){this.store=a}ngOnInit(){this.profileDataSubscription=this.store.select(U).pipe(h(a=>this.profileData=a)).subscribe()}ngOnDestroy(){this.profileDataSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(b(y))},e.\u0275cmp=c({type:e,selectors:[["app-profile"]],standalone:!0,features:[m],decls:6,vars:7,consts:[[1,"avatar",3,"src","alt"],[1,"name"],[1,"tagline"]],template:function(i,n){i&1&&(r(0,"div"),d(1,"img",0),r(2,"h1",1),l(3),s(),r(4,"h3",2),l(5),s()()),i&2&&(u(`container-block
container-block--`,n.profileData.type,""),o(),x("src",n.profileData.avatar,I),E("alt","",n.profileData.type," picture"),o(2),p(n.profileData.name),o(2),p(n.profileData.tagline))}});let t=e;return t})();var ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-sidebar"]],standalone:!0,features:[m],decls:7,vars:0,consts:[["id","onlineCVsidebarBX",1,"project-box","project-box--sidebar"]],template:function(i,n){i&1&&(r(0,"div",0),d(1,"app-profile")(2,"app-contacts")(3,"app-education")(4,"app-courses")(5,"app-languages")(6,"app-interests"),s())},dependencies:[ge,re,ce,le,fe,de],styles:["[_nghost-%COMP%]{grid-column:span 3;order:2}"]});let t=e;return t})();var Zt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-online-cv"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"online-cv-box"]],template:function(i,n){i&1&&(r(0,"div",0),d(1,"app-main")(2,"app-sidebar")(3,"app-lang-toggler"),s())},dependencies:[ae,ve,q]});let t=e;return t})();export{Zt as OnlineCvComponent};