import{Bb as y,Cb as T,Db as G,Ea as C,Fa as L,Ga as O,Gb as J,Ha as m,Hb as $,Ia as v,Ib as Q,Ja as b,Ka as g,La as n,Ma as r,Na as d,Pa as w,Qa as Y,Ra as I,Sa as E,Ta as s,Ua as c,V as D,Va as _,Ya as f,Za as H,c as V,ea as u,lb as q,va as S,ya as a,za as h}from"./chunk-CXMTJZG7.js";var P=G(Q),Z=T(P,t=>t.langTogglerData),A=T(P,t=>t.onlineCvData.profileData),U=T(P,t=>t.onlineCvData.contactsData),ee=T(P,t=>t.onlineCvData.educationData),B=T(P,t=>t.onlineCvData.coursesData),R=T(P,t=>t.onlineCvData.languagesData),z=T(P,t=>t.onlineCvData.interestsData),K=T(P,t=>t.onlineCvData.summaryData),W=T(P,t=>t.onlineCvData.experienceData),X=T(P,t=>t.onlineCvData.projectsData),N=T(P,t=>t.onlineCvData.skillsData);var te=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.langTogglerDataSubscription=this.store.select(Z).pipe(D(l=>this.langTogglerData=l)).subscribe(),this.store.dispatch(J.loadLangTogglerData({langTogglerData:this.langTogglerData}))}onToggleLang(){this.langTogglerData=this.langTogglerData===$.EN?$.RU:$.EN,this.store.dispatch(J.loadLangTogglerData({langTogglerData:this.langTogglerData}))}ngOnDestroy(){this.langTogglerDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-lang-toggler"]],standalone:!0,features:[f],decls:4,vars:7,consts:[[1,"lang-toggler"],["tabindex","0",3,"click","keyup"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"div",1),w("click",function(){return i.onToggleLang()})("keyup",function(){return i.onToggleLang()}),r(),n(2,"div"),s(3),r()()),o&2&&(a(),m("toggler-inner toggler-inner--",i.langTogglerData,""),a(),m("toggler-text toggler-text--",i.langTogglerData,""),a(),c(i.langTogglerData))},styles:["[_nghost-%COMP%]{position:absolute;top:.5rem;right:.5rem}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;width:7.5rem;height:2.5rem;background-color:var(--theme-color);border-radius:2.5rem}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-inner[_ngcontent-%COMP%]{position:absolute;width:2.5rem;height:2.5rem;border-radius:50%;background-color:var(--white-color);cursor:pointer;z-index:1;transition:left .3s ease-in-out}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-inner--en[_ngcontent-%COMP%]{left:calc(100% - 2.5rem)}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-inner--ru[_ngcontent-%COMP%]{left:0}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-text[_ngcontent-%COMP%]{position:absolute;left:.5rem;text-transform:uppercase;font-weight:700;color:var(--text-color);transition:left .3s ease-in-out}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-text--en[_ngcontent-%COMP%]{left:.5rem;animation:_ngcontent-%COMP%_fadeIn .3s ease-in-out}[_nghost-%COMP%]   .lang-toggler[_ngcontent-%COMP%]   .toggler-text--ru[_ngcontent-%COMP%]{left:calc(100% - 3rem);animation:_ngcontent-%COMP%_fadeOut .3s ease-in-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:1}10%{opacity:0}to{opacity:0}}@keyframes _ngcontent-%COMP%_fadeOut{0%{opacity:1}10%{opacity:0}to{opacity:0}}"]});let t=e;return t})();function Fe(t,e){if(t&1&&(n(0,"li",9),s(1),r()),t&2){let p=e.$implicit;a(),c(p)}}function Oe(t,e){if(t&1&&(n(0,"li",9),s(1),r()),t&2){let p=e.$implicit;a(),c(p)}}var ie=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-experience-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[f],decls:22,vars:11,consts:[[1,"section-block-item"],[1,"section-item-meta"],[1,"meta-box"],[1,"meta-title"],[1,"meta-time"],[1,"meta-company"],[1,"section-item-details"],[1,"detail-title"],[1,"detail-list"],[1,"detail-item"],["class","detail-item"]],template:function(o,i){o&1&&(n(0,"li",0)(1,"div",1)(2,"div",2)(3,"h3",3),s(4),r(),n(5,"div",4),s(6),r()(),n(7,"div",5),s(8),r()(),n(9,"div",6)(10,"div")(11,"h5",7),s(12),r(),n(13,"ul",8),b(14,Fe,2,1,"li",10,v),r()(),n(16,"div")(17,"h5",7),s(18),r(),n(19,"ul",8),b(20,Oe,2,1,"li",10,v),r()()()()),o&2&&(a(4),c(i.itemData.title),a(2),c(i.itemData.time),a(2),c(i.itemData.company),a(2),m("detail-box detail-box--",i.itemData.responsibilities.title,""),a(2),c(i.itemData.responsibilities.title),a(2),g(i.itemData.responsibilities.items),a(2),m("detail-box detail-box--",i.itemData.achievements.title,""),a(2),c(i.itemData.achievements.title),a(2),g(i.itemData.achievements.items))}});let t=e;return t})();function Pe(t,e){if(t&1&&d(0,"app-experience-item",3),t&2){let p=e.$implicit;C("itemData",p)}}var ae=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.experienceDataSubscription=this.store.select(W).pipe(D(l=>this.experienceData=l)).subscribe()}ngOnDestroy(){this.experienceDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-experience"]],standalone:!0,features:[f],decls:8,vars:7,consts:[[1,"section-title-box"],[1,"section-block-title"],[1,"section-block-list"],[3,"itemData"]],template:function(o,i){o&1&&(n(0,"section")(1,"div",0),d(2,"div"),n(3,"h2",1),s(4),r()(),n(5,"ul",2),b(6,Pe,1,1,"app-experience-item",3,v),r()()),o&2&&(m("section-block section-block--",i.experienceData.type,""),a(2),m("section-block-icon section-block-icon--",i.experienceData.type,""),a(2),c(i.experienceData.title),a(2),g(i.experienceData.items))},dependencies:[ie]});let t=e;return t})();var ne=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-learning-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[f],decls:13,vars:5,consts:[[1,"section-block-item"],[1,"section-item-meta"],[1,"meta-box","meta-box--title"],[1,"meta-title"],[1,"meta-time"],[1,"meta-box","meta-box--link"],[1,"meta-org"],[1,"meta-url"],["target","_blank","rel","noreferrer nofollow noopener",1,"meta-link",3,"href"]],template:function(o,i){o&1&&(n(0,"li",0)(1,"div",1)(2,"div",2)(3,"h3",3),s(4),r(),n(5,"div",4),s(6),r()(),n(7,"div",5)(8,"div",6),s(9),r(),n(10,"div",7)(11,"a",8),s(12),r()()()()()),o&2&&(a(4),c(i.itemData.degree),a(2),c(i.itemData.time),a(3),c(i.itemData.meta),a(2),I("href",i.itemData.link,S),a(),c(i.itemData.meta))}});let t=e;return t})();function we(t,e){if(t&1&&d(0,"app-learning-item",3),t&2){let p=e.$implicit;C("itemData",p)}}var oe=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.learningDataSubscription=this.store.select(B).pipe(D(l=>this.learningData=l)).subscribe()}ngOnDestroy(){this.learningDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-learning"]],standalone:!0,features:[f],decls:8,vars:7,consts:[[1,"section-title-box"],[1,"section-block-title"],[1,"section-block-list"],[3,"itemData"]],template:function(o,i){o&1&&(n(0,"section")(1,"div",0),d(2,"div"),n(3,"h2",1),s(4),r()(),n(5,"ul",2),b(6,we,1,1,"app-learning-item",3,v),r()()),o&2&&(m("section-block section-block--",i.learningData.type,""),a(2),m("section-block-icon section-block-icon--",i.learningData.type,""),a(2),c(i.learningData.title),a(2),g(i.learningData.items))},dependencies:[ne]});let t=e;return t})();function je(t,e){if(t&1&&(n(0,"li",7)(1,"div",8)(2,"div",9)(3,"h5",10),s(4),r(),n(5,"div",11),s(6),r()(),n(7,"div",12)(8,"a",13),s(9,"demo"),r()()()()),t&2){let p=e.$implicit;a(4),c(p.title),a(2),c(p.desc),a(2),I("href",p.link,S)}}var re=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-projects-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[f],decls:11,vars:6,consts:[[1,"section-item-meta"],[1,"meta-box"],[1,"meta-image",3,"src","alt"],[1,"meta-title"],[1,"section-item-details"],[1,"detail-box"],[1,"detail-list"],[1,"detail-item"],[1,"detail-item-box"],[1,"detail-item-heading-box"],[1,"detail-item-heading"],[1,"detail-item-desc"],[1,"detail-item-link-box"],["target","_blank",1,"detail-item-link",3,"href"],["class","detail-item"]],template:function(o,i){o&1&&(n(0,"li")(1,"div",0)(2,"div",1),d(3,"img",2),n(4,"h3",3),s(5),r()(),n(6,"div",4)(7,"div",5)(8,"ul",6),b(9,je,10,3,"li",14,v),r()()()()()),o&2&&(m("section-block-item section-block-item--",i.itemData.type,""),a(3),I("src",i.itemData.icon,S),E("alt","icon ",i.itemData.type,""),a(2),c(i.itemData.title),a(4),g(i.itemData.items))}});let t=e;return t})();function Be(t,e){if(t&1&&d(0,"app-projects-item",3),t&2){let p=e.$implicit;C("itemData",p)}}var le=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.projectsDataSubscription=this.store.select(X).pipe(D(l=>this.projectsData=l)).subscribe()}ngOnDestroy(){this.projectsDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-projects"]],standalone:!0,features:[f],decls:8,vars:7,consts:[[1,"section-title-box"],[1,"section-block-title"],[1,"section-block-list"],[3,"itemData"]],template:function(o,i){o&1&&(n(0,"section")(1,"div",0),d(2,"div"),n(3,"h2",1),s(4),r()(),n(5,"ul",2),b(6,Be,1,1,"app-projects-item",3,v),r()()),o&2&&(m("section-block section-block--",i.projectsData.type,""),a(2),m("section-block-icon section-block-icon--",i.projectsData.type,""),a(2),c(i.projectsData.title),a(2),g(i.projectsData.items))},dependencies:[re]});let t=e;return t})();var se=(()=>{let e=class e{get levelWidth(){return`${this.itemData.level}%`}get levelWidth5(){return`${this.itemData.level+5}%`}get levelWidth10(){return`${this.itemData.level+10}%`}get levelWidth15(){return`${this.itemData.level+15}%`}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-skills-item"]],hostVars:8,hostBindings:function(o,i){o&2&&L("--level-width",i.levelWidth)("--level-width-5",i.levelWidth5)("--level-width-10",i.levelWidth10)("--level-width-15",i.levelWidth15)},inputs:{itemData:"itemData"},standalone:!0,features:[f],decls:7,vars:6,consts:[[1,"section-item-meta"],[1,"meta-box"],[1,"level-title"],[1,"level-bar"],[1,"level-bar-inner"]],template:function(o,i){o&1&&(n(0,"li")(1,"div",0)(2,"div",1)(3,"h3",2),s(4),r(),n(5,"div",3),d(6,"div",4),r()()()()),o&2&&(m("section-block-item section-block-item--",i.itemData.type,""),a(4),c(i.itemData.title),a(2),L("width",i.itemData.level,"%"))},dependencies:[q]});let t=e;return t})();function Le(t,e){if(t&1&&d(0,"app-skills-item",3),t&2){let p=e.$implicit;C("itemData",p)}}var ce=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.skillsDataSubscription=this.store.select(N).pipe(D(l=>this.skillsData=l)).subscribe()}ngOnDestroy(){this.skillsDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-skills"]],standalone:!0,features:[f],decls:8,vars:7,consts:[[1,"section-title-box"],[1,"section-block-title"],[1,"section-block-list"],[3,"itemData"]],template:function(o,i){o&1&&(n(0,"section")(1,"div",0),d(2,"div"),n(3,"h2",1),s(4),r()(),n(5,"ul",2),b(6,Le,1,1,"app-skills-item",3,v),r()()),o&2&&(m("section-block section-block--",i.skillsData.type,""),a(2),m("section-block-icon section-block-icon--",i.skillsData.type,""),a(2),c(i.skillsData.title),a(2),g(i.skillsData.items))},dependencies:[se]});let t=e;return t})();function $e(t,e){if(t&1&&(n(0,"p",2),s(1),r()),t&2){let p=e.$implicit;a(),c(p)}}var pe=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.summaryDataSubscription=this.store.select(K).pipe(D(l=>this.summaryData=l)).subscribe()}ngOnDestroy(){this.summaryDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-summary"]],standalone:!0,features:[f],decls:7,vars:7,consts:[[1,"section-title-box"],[1,"section-block-title"],[1,"section-block-paragraph"],["class","section-block-paragraph"]],template:function(o,i){o&1&&(n(0,"section")(1,"div",0),d(2,"div"),n(3,"h2",1),s(4),r()(),b(5,$e,2,1,"p",3,v),r()),o&2&&(m("section-block section-block--",i.summaryData.type,""),a(2),m("section-block-icon section-block-icon--",i.summaryData.type,""),a(2),c(i.summaryData.title),a(),g(i.summaryData.items))}});let t=e;return t})();var me=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-main"]],standalone:!0,features:[f],decls:6,vars:0,consts:[["id","onlineCVmainBX",1,"project-box","project-box--main"]],template:function(o,i){o&1&&(n(0,"div",0),d(1,"app-summary")(2,"app-projects")(3,"app-learning")(4,"app-skills")(5,"app-experience"),r())},dependencies:[pe,ae,oe,le,ce],styles:["[_nghost-%COMP%]{grid-column:span 7;order:1}@media (max-width: 1100px){[_nghost-%COMP%]{grid-column:span 6;order:1}}@media (max-width: 760px){[_nghost-%COMP%]{display:none}}"]});let t=e;return t})();var j=function(t){return t.SUMMARY="summary",t.PROJECTS="projects",t.COURSES="courses",t.SKILLS="skills",t.EXPERIENCE="experience",t}(j||{});function Ae(t,e){if(t&1&&(n(0,"li",9)(1,"a",10),d(2,"img",11),r()()),t&2){let p=e.$implicit;a(),I("href",p.link,S),a(),I("src",p.icon,S),E("alt","icon ",p.type,"")}}function Ue(t,e){if(t&1&&(n(0,"p",12),s(1),r()),t&2){let p=e.$implicit;a(),c(p)}}function Re(t,e){if(t&1&&(n(0,"li",17)(1,"h5",18),s(2),n(3,"a",19),s(4,"demo"),r()(),n(5,"div",20),s(6),r()()),t&2){let p=e.$implicit;a(2),_(" ",p.title," "),a(),I("href",p.link,S),a(3),c(p.desc)}}function ze(t,e){if(t&1&&(n(0,"li")(1,"h3",13),d(2,"img",14),s(3),r(),n(4,"div",15)(5,"ul",16),b(6,Re,7,3,"li",21,v),r()()()),t&2){let p=e.$implicit;m("mob-block-item mob-block-item--",p.type,""),a(2),I("src",p.icon,S),E("alt","icon ",p.type,""),a(),_(" ",p.title," "),a(3),g(p.items)}}function Ke(t,e){if(t&1&&(n(0,"li",9)(1,"h3",13),s(2),r(),n(3,"div",22)(4,"div",23),s(5),r(),n(6,"h5",24),s(7),n(8,"a",25),s(9," >>> "),r()()()()),t&2){let p=e.$implicit;a(2),c(p.degree),a(3),c(p.time),a(2),_(" ",p.meta," "),a(),I("href",p.link,S)}}var We=t=>[t];function Xe(t,e){if(t&1&&(n(0,"li",9)(1,"div",26)(2,"h3",27),s(3),r(),n(4,"div",28),d(5,"div",29),r()()()),t&2){let p=e.$implicit,l=Y();a(3),c(p.title),a(2),L("width",H(3,We,l.showSkills?p.level:0),"%")}}function Ne(t,e){if(t&1&&(n(0,"li",17),s(1),r()),t&2){let p=e.$implicit;a(),c(p)}}function Je(t,e){if(t&1&&(n(0,"li",17),s(1),r()),t&2){let p=e.$implicit;a(),c(p)}}function Ve(t,e){if(t&1&&(n(0,"li",9)(1,"h3",13),s(2),r(),n(3,"div",22)(4,"div",23),s(5),r(),n(6,"div",30),s(7),r()(),n(8,"div",15)(9,"div",31)(10,"h5",32),s(11),r(),n(12,"ul",16),b(13,Ne,2,1,"li",21,v),r()(),n(15,"div",31)(16,"h5",32),s(17),r(),n(18,"ul",16),b(19,Je,2,1,"li",21,v),r()()()()),t&2){let p=e.$implicit;a(2),c(p.title),a(3),c(p.time),a(2),c(p.company),a(4),c(p.responsibilities.title),a(2),g(p.responsibilities.items),a(4),c(p.achievements.title),a(2),g(p.achievements.items)}}function Ye(t,e){if(t&1&&(n(0,"li",9),s(1),n(2,"span",33),s(3),r()()),t&2){let p=e.$implicit;a(),_(" ",p.name," "),a(2),c(p.desc)}}function He(t,e){if(t&1&&(n(0,"li",9),s(1),d(2,"img",34),r()),t&2){let p=e.$implicit;a(),_(" ",p.name," "),a(),I("src",p.icon,S),E("alt","icon ",p.name,"")}}var de=(()=>{let e=class e{constructor(l){this.store=l,this.ActivationKeys=j,this.activationBlock={[j.SUMMARY]:!1,[j.PROJECTS]:!1,[j.COURSES]:!1,[j.SKILLS]:!1,[j.EXPERIENCE]:!1},this.showSkills=!1}ngOnInit(){this.subscription=new V;let l=this.store.select(A).pipe(D(x=>this.profileData=x)).subscribe();this.subscription.add(l);let o=this.store.select(U).pipe(D(x=>this.contactsData=x)).subscribe();this.subscription.add(o);let i=this.store.select(K).pipe(D(x=>this.summaryData=x)).subscribe();this.subscription.add(i);let M=this.store.select(X).pipe(D(x=>this.projectsData=x)).subscribe();this.subscription.add(M);let xe=this.store.select(B).pipe(D(x=>this.coursesData=x)).subscribe();this.subscription.add(xe);let _e=this.store.select(N).pipe(D(x=>this.skillsData=x)).subscribe();this.subscription.add(_e);let Me=this.store.select(W).pipe(D(x=>this.experienceData=x)).subscribe();this.subscription.add(Me);let Ee=this.store.select(R).pipe(D(x=>this.languagesData=x)).subscribe();this.subscription.add(Ee);let Te=this.store.select(z).pipe(D(x=>this.interestsData=x)).subscribe();this.subscription.add(Te)}onActivate(l){Object.keys(this.activationBlock).forEach(o=>{o!==l&&(this.activationBlock[o]=!1)}),this.activationBlock[l]=!this.activationBlock[l],this.showSkills=this.activationBlock.skills}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-mobile"]],standalone:!0,features:[f],decls:62,vars:83,consts:[["id","onlineCVmobileBX",1,"mobile-box"],[1,"mob-block-img-box"],[1,"mob-block-img",3,"src","alt"],[1,"mob-block-desc-box"],[1,"mob-block-name"],[1,"mob-block-tagline"],[1,"mob-block-title"],["tabindex","0",1,"mob-block-title",3,"click","keydown"],["src","assets/icon/activate.svg","alt","activate icon",1,"mob-block-activate"],[1,"mob-block-item"],["target","_blank",1,"mob-item-link",3,"href"],[1,"mob-item-icon",3,"src","alt"],[1,"mob-block-paragraph"],[1,"mob-block-item-title"],[1,"mob-block-item-icon",3,"src","alt"],[1,"mob-block-item-details"],[1,"mob-detail-list"],[1,"mob-details-item"],[1,"mob-details-item-title"],["target","_blank",1,"mob-details-item-link",3,"href"],[1,"mob-details-item-desc"],["class","mob-details-item"],[1,"mob-block-item-meta"],[1,"mob-meta-time"],[1,"mob-meta-title"],["target","_blank",1,"mob-meta-link",3,"href"],[1,"mob-block-item-flex"],[1,"mob-flex-title"],[1,"mob-flex-level"],[1,"mob-flex-level-inner"],[1,"mob-meta-company"],[1,"mob-detail-box"],[1,"mob-detail-title"],[1,"item-desc"],[1,"item-icon",3,"src","alt"],["class","mob-block-item"],["class","mob-block-paragraph"],[3,"class"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"div")(2,"div",1),d(3,"img",2),r(),n(4,"div",3)(5,"h1",4),s(6),r(),n(7,"h3",5),s(8),r()()(),n(9,"div")(10,"h2",6),s(11),r(),n(12,"ul"),b(13,Ae,3,3,"li",35,v),r()(),n(15,"div")(16,"h2",7),w("click",function(){return i.onActivate(i.ActivationKeys.SUMMARY)})("keydown",function(){return i.onActivate(i.ActivationKeys.SUMMARY)}),s(17),d(18,"img",8),r(),n(19,"div"),b(20,Ue,2,1,"p",36,v),r()(),n(22,"div")(23,"h2",7),w("click",function(){return i.onActivate(i.ActivationKeys.PROJECTS)})("keydown",function(){return i.onActivate(i.ActivationKeys.PROJECTS)}),s(24),d(25,"img",8),r(),n(26,"ul"),b(27,ze,8,6,"li",37,v),r()(),n(29,"div")(30,"h2",7),w("click",function(){return i.onActivate(i.ActivationKeys.COURSES)})("keydown",function(){return i.onActivate(i.ActivationKeys.COURSES)}),s(31),d(32,"img",8),r(),n(33,"ul"),b(34,Ke,10,4,"li",35,v),r()(),n(36,"div")(37,"h2",7),w("click",function(){return i.onActivate(i.ActivationKeys.SKILLS)})("keydown",function(){return i.onActivate(i.ActivationKeys.SKILLS)}),s(38),d(39,"img",8),r(),n(40,"ul"),b(41,Xe,6,5,"li",35,v),r()(),n(43,"div")(44,"h2",7),w("click",function(){return i.onActivate(i.ActivationKeys.EXPERIENCE)})("keydown",function(){return i.onActivate(i.ActivationKeys.EXPERIENCE)}),s(45),d(46,"img",8),r(),n(47,"ul"),b(48,Ve,21,5,"li",35,v),r()(),n(50,"div")(51,"h2",6),s(52),r(),n(53,"ul"),b(54,Ye,4,2,"li",35,v),r()(),n(56,"div")(57,"h2",6),s(58),r(),n(59,"ul"),b(60,He,3,3,"li",35,v),r()()()),o&2&&(a(),m("mob-block mob-block--",i.profileData.type,""),a(2),I("src",i.profileData.avatar,S),E("alt","",i.profileData.type," icon"),a(3),c(i.profileData.name),a(2),c(i.profileData.tagline),a(),m("mob-block mob-block--",i.contactsData.type,""),a(2),c(i.contactsData.type),a(),m("mob-block-list mob-block-list--",i.contactsData.type,""),a(),g(i.contactsData.items),a(2),m("mob-block mob-block--",i.summaryData.type,""),a(2),_(" ",i.summaryData.title," "),a(),O("mob-block-activate--active",i.activationBlock.summary),a(),m("mob-block-list mob-block-list--",i.summaryData.type,""),O("mob-block-list--active",i.activationBlock.summary),a(),g(i.summaryData.items),a(2),m("mob-block mob-block--",i.projectsData.type,""),a(2),_(" ",i.projectsData.title," "),a(),O("mob-block-activate--active",i.activationBlock.projects),a(),m("mob-block-list mob-block-list--",i.projectsData.type,""),O("mob-block-list--active",i.activationBlock.projects),a(),g(i.projectsData.items),a(2),m("mob-block mob-block--",i.coursesData.type,""),a(2),_(" ",i.coursesData.title," "),a(),O("mob-block-activate--active",i.activationBlock.courses),a(),m("mob-block-list mob-block-list--",i.coursesData.type,""),O("mob-block-list--active",i.activationBlock.courses),a(),g(i.coursesData.items),a(2),m("mob-block mob-block--",i.skillsData.type,""),a(2),_(" ",i.skillsData.title," "),a(),O("mob-block-activate--active",i.activationBlock.skills),a(),m("mob-block-list mob-block-list--",i.skillsData.type,""),O("mob-block-list--active",i.activationBlock.skills),a(),g(i.skillsData.items),a(2),m("mob-block mob-block--",i.experienceData.type,""),a(2),_(" ",i.experienceData.title," "),a(),O("mob-block-activate--active",i.activationBlock.experience),a(),m("mob-block-list mob-block-list--",i.experienceData.type,""),O("mob-block-list--active",i.activationBlock.experience),a(),g(i.experienceData.items),a(2),m("mob-block mob-block--",i.languagesData.type,""),a(2),c(i.languagesData.type),a(),m("mob-block-list mob-block-list--",i.languagesData.type,""),a(),g(i.languagesData.items),a(2),m("mob-block mob-block--",i.interestsData.type,""),a(2),c(i.interestsData.type),a(),m("mob-block-list mob-block-list--",i.interestsData.type,""),a(),g(i.interestsData.items))},styles:["[_nghost-%COMP%]{width:100%;display:none}@media (max-width: 760px){[_nghost-%COMP%]{display:block}}"]});let t=e;return t})();var ue=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-contacts-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[f],decls:4,vars:4,consts:[[1,"container-block-item"],[1,"item-icon",3,"src","alt"],["target","_blank",1,"item-link",3,"href"]],template:function(o,i){o&1&&(n(0,"li",0),d(1,"img",1),n(2,"a",2),s(3),r()()),o&2&&(a(),I("src",i.itemData.icon,S),E("alt","icon ",i.itemData.type,""),a(),I("href",i.itemData.link,S),a(),c(i.itemData.text))}});let t=e;return t})();function qe(t,e){if(t&1&&d(0,"app-contacts-item",2),t&2){let p=e.$implicit;C("itemData",p)}}var fe=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.contactsDataSubscription=this.store.select(U).pipe(D(l=>this.contactsData=l)).subscribe()}ngOnDestroy(){this.contactsDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-contacts"]],standalone:!0,features:[f],decls:6,vars:4,consts:[[1,"container-block-title"],[1,"container-block-list"],[3,"itemData"]],template:function(o,i){o&1&&(n(0,"div")(1,"h2",0),s(2),r(),n(3,"ul",1),b(4,qe,1,1,"app-contacts-item",2,v),r()()),o&2&&(m("container-block container-block--",i.contactsData.type," block-divider"),a(2),c(i.contactsData.title),a(2),g(i.contactsData.items))},dependencies:[ue]});let t=e;return t})();var ve=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-courses-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[f],decls:7,vars:3,consts:[[1,"container-block-item"],[1,"item-degree"],[1,"item-meta"],[1,"item-time"]],template:function(o,i){o&1&&(n(0,"li",0)(1,"h4",1),s(2),r(),n(3,"h5",2),s(4),r(),n(5,"h6",3),s(6),r()()),o&2&&(a(2),c(i.itemData.degree),a(2),c(i.itemData.meta),a(2),c(i.itemData.time))}});let t=e;return t})();function Ge(t,e){if(t&1&&d(0,"app-courses-item",2),t&2){let p=e.$implicit;C("itemData",p)}}var be=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.coursesDataSubscription=this.store.select(B).pipe(D(l=>this.coursesData=l)).subscribe()}ngOnDestroy(){this.coursesDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-courses"]],standalone:!0,features:[f],decls:6,vars:4,consts:[[1,"container-block-title"],[1,"container-block-list"],[3,"itemData"]],template:function(o,i){o&1&&(n(0,"div")(1,"h2",0),s(2),r(),n(3,"ul",1),b(4,Ge,1,1,"app-courses-item",2,v),r()()),o&2&&(m("container-block container-block--",i.coursesData.type," block-divider"),a(2),c(i.coursesData.title),a(2),g(i.coursesData.items))},dependencies:[ve]});let t=e;return t})();var ge=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-education-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[f],decls:7,vars:3,consts:[[1,"container-block-item"],[1,"item-degree"],[1,"item-meta"],[1,"item-time"]],template:function(o,i){o&1&&(n(0,"li",0)(1,"h4",1),s(2),r(),n(3,"h5",2),s(4),r(),n(5,"h6",3),s(6),r()()),o&2&&(a(2),c(i.itemData.degree),a(2),c(i.itemData.meta),a(2),c(i.itemData.time))}});let t=e;return t})();function Qe(t,e){if(t&1&&d(0,"app-education-item",2),t&2){let p=e.$implicit;C("itemData",p)}}var De=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.educationDataSubscription=this.store.select(ee).pipe(D(l=>this.educationData=l)).subscribe()}ngOnDestroy(){this.educationDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-education"]],standalone:!0,features:[f],decls:6,vars:4,consts:[[1,"container-block-title"],[1,"container-block-list"],[3,"itemData"]],template:function(o,i){o&1&&(n(0,"div")(1,"h2",0),s(2),r(),n(3,"ul",1),b(4,Qe,1,1,"app-education-item",2,v),r()()),o&2&&(m("container-block container-block--",i.educationData.type," block-divider"),a(2),c(i.educationData.title),a(2),g(i.educationData.items))},dependencies:[ge]});let t=e;return t})();var he=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-interests-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[f],decls:3,vars:3,consts:[[1,"container-block-item"],[1,"item-icon",3,"src","alt"]],template:function(o,i){o&1&&(n(0,"li",0),s(1),d(2,"img",1),r()),o&2&&(a(),_(" ",i.itemData.name," "),a(),I("src",i.itemData.icon,S),E("alt","icon ",i.itemData.name,""))}});let t=e;return t})();function Ze(t,e){if(t&1&&d(0,"app-interests-item",2),t&2){let p=e.$implicit;C("itemData",p)}}var ye=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.interestsDataSubscription=this.store.select(z).pipe(D(l=>this.interestsData=l)).subscribe()}ngOnDestroy(){this.interestsDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-interests"]],standalone:!0,features:[f],decls:6,vars:4,consts:[[1,"container-block-title"],[1,"container-block-list"],[3,"itemData"]],template:function(o,i){o&1&&(n(0,"div")(1,"h2",0),s(2),r(),n(3,"ul",1),b(4,Ze,1,1,"app-interests-item",2,v),r()()),o&2&&(m("container-block container-block--",i.interestsData.type," block-divider"),a(2),c(i.interestsData.title),a(2),g(i.interestsData.items))},dependencies:[he]});let t=e;return t})();var ke=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-languages-item"]],inputs:{itemData:"itemData"},standalone:!0,features:[f],decls:4,vars:2,consts:[[1,"container-block-item"],[1,"item-desc"]],template:function(o,i){o&1&&(n(0,"li",0),s(1),n(2,"span",1),s(3),r()()),o&2&&(a(),_(" ",i.itemData.name," "),a(2),c(i.itemData.desc))}});let t=e;return t})();function et(t,e){if(t&1&&d(0,"app-languages-item",2),t&2){let p=e.$implicit;C("itemData",p)}}var Se=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.languagesDataSubscription=this.store.select(R).pipe(D(l=>this.languagesData=l)).subscribe()}ngOnDestroy(){this.languagesDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-languages"]],standalone:!0,features:[f],decls:6,vars:4,consts:[[1,"container-block-title"],[1,"container-block-list"],[3,"itemData"]],template:function(o,i){o&1&&(n(0,"div")(1,"h2",0),s(2),r(),n(3,"ul",1),b(4,et,1,1,"app-languages-item",2,v),r()()),o&2&&(m("container-block container-block--",i.languagesData.type," block-divider"),a(2),c(i.languagesData.title),a(2),g(i.languagesData.items))},dependencies:[ke]});let t=e;return t})();var Ie=(()=>{let e=class e{constructor(l){this.store=l}ngOnInit(){this.profileDataSubscription=this.store.select(A).pipe(D(l=>this.profileData=l)).subscribe()}ngOnDestroy(){this.profileDataSubscription.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(h(y))},e.\u0275cmp=u({type:e,selectors:[["app-profile"]],standalone:!0,features:[f],decls:6,vars:7,consts:[[1,"avatar",3,"src","alt"],[1,"name"],[1,"tagline"]],template:function(o,i){o&1&&(n(0,"div"),d(1,"img",0),n(2,"h1",1),s(3),r(),n(4,"h3",2),s(5),r()()),o&2&&(m(`container-block
container-block--`,i.profileData.type,""),a(),I("src",i.profileData.avatar,S),E("alt","",i.profileData.type," picture"),a(2),c(i.profileData.name),a(2),c(i.profileData.tagline))}});let t=e;return t})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-sidebar"]],standalone:!0,features:[f],decls:7,vars:0,consts:[["id","onlineCVsidebarBX",1,"project-box","project-box--sidebar"]],template:function(o,i){o&1&&(n(0,"div",0),d(1,"app-profile")(2,"app-contacts")(3,"app-education")(4,"app-courses")(5,"app-languages")(6,"app-interests"),r())},dependencies:[Ie,fe,De,be,Se,ye],styles:["[_nghost-%COMP%]{grid-column:span 3;order:2}@media (max-width: 1100px){[_nghost-%COMP%]{grid-column:span 4;order:2}}@media (max-width: 760px){[_nghost-%COMP%]{display:none}}"]});let t=e;return t})();var Ti=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-online-cv"]],standalone:!0,features:[f],decls:5,vars:0,consts:[[1,"online-cv-box"]],template:function(o,i){o&1&&(n(0,"div",0),d(1,"app-main")(2,"app-sidebar")(3,"app-mobile")(4,"app-lang-toggler"),r())},dependencies:[me,Ce,de,te]});let t=e;return t})();export{Ti as OnlineCvComponent};
