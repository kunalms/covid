(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{NOKz:function(l,a,e){"use strict";e.r(a);var n=e("8Y7J");class t{}var i=e("pMnS"),u=e("OvOj"),b=e("MlvX"),r=e("Xd0L"),o=e("IopL"),d=e("0jqt"),c=e("VDRc"),s=e("/q54"),f=e("IP0z"),D=e("dJrM"),m=e("HsOI"),p=e("/HVE"),h=e("omvX"),g=e("Azqq"),_=e("JjoW"),v=e("hOhj"),y=e("s7LF"),x=e("5GAg"),w=e("SVse");class F{constructor(l,a){this.stateService=l,this.patientService=a,this.states=[],this.dayFilterOption=[{value:5,label:"Last 5 days"},{value:10,label:"Last 10 days"},{value:15,label:"Last 15 days"},{value:20,label:"Last 20 days"},{value:25,label:"Last 25 days"},{value:30,label:"Last 30 days"},{value:40,label:"Last 40 days"},{value:50,label:"Last 50 days"},{value:60,label:"Last 60 days"},{value:-1,label:"From Beginning"}],this.selected="",this.selectedDays=15}ngOnInit(){this.stateService.getAll().subscribe(l=>{this.states=l}),this.generateData()}generateData(){this.patientService.getTotal(this.selected).subscribe(l=>{this.originalChartData=JSON.parse(JSON.stringify(l)),this.filterResults()})}filterResults(){this.chartData=-1===this.selectedDays?JSON.parse(JSON.stringify(this.originalChartData)):this.originalChartData.slice(this.originalChartData.length-this.selectedDays,this.originalChartData.length)}}var q=e("ndxW"),B=e("7wfR"),L=n.pb({encapsulation:0,styles:[[""],u.a],data:{}});function S(l){return n.Jb(0,[(l()(),n.rb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,a,e){var t=!0;return"click"===a&&(t=!1!==n.Db(l,1)._selectViaInteraction()&&t),"keydown"===a&&(t=!1!==n.Db(l,1)._handleKeydown(e)&&t),t}),b.b,b.a)),n.qb(1,8568832,[[10,4]],0,r.p,[n.k,n.h,[2,r.j],[2,r.o]],{value:[0,"value"]},null),(l()(),n.Ib(2,0,[" "," "]))],(function(l,a){l(a,1,0,a.context.$implicit.code)}),(function(l,a){l(a,0,0,n.Db(a,1)._getTabIndex(),n.Db(a,1).selected,n.Db(a,1).multiple,n.Db(a,1).active,n.Db(a,1).id,n.Db(a,1)._getAriaSelected(),n.Db(a,1).disabled.toString(),n.Db(a,1).disabled),l(a,2,0,a.context.$implicit.name)}))}function C(l){return n.Jb(0,[(l()(),n.rb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,a,e){var t=!0;return"click"===a&&(t=!1!==n.Db(l,1)._selectViaInteraction()&&t),"keydown"===a&&(t=!1!==n.Db(l,1)._handleKeydown(e)&&t),t}),b.b,b.a)),n.qb(1,8568832,[[22,4]],0,r.p,[n.k,n.h,[2,r.j],[2,r.o]],{value:[0,"value"]},null),(l()(),n.Ib(2,0,[" "," "]))],(function(l,a){l(a,1,0,a.context.$implicit.value)}),(function(l,a){l(a,0,0,n.Db(a,1)._getTabIndex(),n.Db(a,1).selected,n.Db(a,1).multiple,n.Db(a,1).active,n.Db(a,1).id,n.Db(a,1)._getAriaSelected(),n.Db(a,1).disabled.toString(),n.Db(a,1).disabled),l(a,2,0,a.context.$implicit.label)}))}function G(l){return n.Jb(0,[(l()(),n.rb(0,0,null,null,1,"app-bar-chart",[["class","content-container"]],null,null,null,o.b,o.a)),n.qb(1,638976,null,0,d.a,[],{data:[0,"data"]},null)],(function(l,a){l(a,1,0,a.component.chartData)}),null)}function k(l){return n.Jb(0,[(l()(),n.rb(0,0,null,null,53,"div",[["class","content-container"],["fxLayout","column"]],null,null,null,null,null)),n.qb(1,671744,null,0,c.c,[n.k,s.i,[2,c.k],s.f],{fxLayout:[0,"fxLayout"]},null),(l()(),n.rb(2,0,null,null,51,"div",[["fxLayout","row"],["fxLayoutAlign","center center"],["fxLayoutGap","20px"]],null,null,null,null,null)),n.qb(3,671744,null,0,c.c,[n.k,s.i,[2,c.k],s.f],{fxLayout:[0,"fxLayout"]},null),n.qb(4,1720320,null,0,c.d,[n.k,n.x,f.b,s.i,[2,c.j],s.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),n.qb(5,671744,null,0,c.b,[n.k,s.i,[2,c.i],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),n.rb(6,0,null,null,23,"mat-form-field",[["class","mat-form-field"],["fxFlex","20%"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,D.b,D.a)),n.qb(7,7520256,null,9,m.b,[n.k,n.h,[2,r.h],[2,f.b],[2,m.a],p.a,n.x,[2,h.a]],null,null),n.Gb(603979776,1,{_controlNonStatic:0}),n.Gb(335544320,2,{_controlStatic:0}),n.Gb(603979776,3,{_labelChildNonStatic:0}),n.Gb(335544320,4,{_labelChildStatic:0}),n.Gb(603979776,5,{_placeholderChild:0}),n.Gb(603979776,6,{_errorChildren:1}),n.Gb(603979776,7,{_hintChildren:1}),n.Gb(603979776,8,{_prefixChildren:1}),n.Gb(603979776,9,{_suffixChildren:1}),n.qb(17,671744,null,0,c.a,[n.k,s.i,s.e,c.h,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),n.rb(18,0,null,3,2,"mat-label",[],null,null,null,null,null)),n.qb(19,16384,[[3,4],[4,4]],0,m.e,[],null,null),(l()(),n.Ib(-1,null,["State"])),(l()(),n.rb(21,0,null,1,8,"mat-select",[["class","mat-select"],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"valueChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,a,e){var t=!0,i=l.component;return"keydown"===a&&(t=!1!==n.Db(l,23)._handleKeydown(e)&&t),"focus"===a&&(t=!1!==n.Db(l,23)._onFocus()&&t),"blur"===a&&(t=!1!==n.Db(l,23)._onBlur()&&t),"valueChange"===a&&(t=!1!==(i.selected=e)&&t),"valueChange"===a&&(t=!1!==i.generateData()&&t),t}),g.b,g.a)),n.Fb(6144,null,r.j,null,[_.c]),n.qb(23,2080768,null,3,_.c,[v.d,n.h,n.x,r.b,n.k,[2,f.b],[2,y.e],[2,y.b],[2,m.b],[8,null],[8,null],_.a,x.f],{value:[0,"value"]},{valueChange:"valueChange"}),n.Gb(603979776,10,{options:1}),n.Gb(603979776,11,{optionGroups:1}),n.Gb(603979776,12,{customTrigger:0}),n.Fb(2048,[[1,4],[2,4]],m.c,null,[_.c]),(l()(),n.gb(16777216,null,1,1,null,S)),n.qb(29,278528,null,0,w.i,[n.N,n.K,n.q],{ngForOf:[0,"ngForOf"]},null),(l()(),n.rb(30,0,null,null,23,"mat-form-field",[["class","mat-form-field"],["fxFlex","20%"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,D.b,D.a)),n.qb(31,7520256,null,9,m.b,[n.k,n.h,[2,r.h],[2,f.b],[2,m.a],p.a,n.x,[2,h.a]],null,null),n.Gb(603979776,13,{_controlNonStatic:0}),n.Gb(335544320,14,{_controlStatic:0}),n.Gb(603979776,15,{_labelChildNonStatic:0}),n.Gb(335544320,16,{_labelChildStatic:0}),n.Gb(603979776,17,{_placeholderChild:0}),n.Gb(603979776,18,{_errorChildren:1}),n.Gb(603979776,19,{_hintChildren:1}),n.Gb(603979776,20,{_prefixChildren:1}),n.Gb(603979776,21,{_suffixChildren:1}),n.qb(41,671744,null,0,c.a,[n.k,s.i,s.e,c.h,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),n.rb(42,0,null,3,2,"mat-label",[],null,null,null,null,null)),n.qb(43,16384,[[15,4],[16,4]],0,m.e,[],null,null),(l()(),n.Ib(-1,null,["No of Days"])),(l()(),n.rb(45,0,null,1,8,"mat-select",[["class","mat-select"],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"valueChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,a,e){var t=!0,i=l.component;return"keydown"===a&&(t=!1!==n.Db(l,47)._handleKeydown(e)&&t),"focus"===a&&(t=!1!==n.Db(l,47)._onFocus()&&t),"blur"===a&&(t=!1!==n.Db(l,47)._onBlur()&&t),"valueChange"===a&&(t=!1!==(i.selectedDays=e)&&t),"valueChange"===a&&(t=!1!==i.filterResults()&&t),t}),g.b,g.a)),n.Fb(6144,null,r.j,null,[_.c]),n.qb(47,2080768,null,3,_.c,[v.d,n.h,n.x,r.b,n.k,[2,f.b],[2,y.e],[2,y.b],[2,m.b],[8,null],[8,null],_.a,x.f],{value:[0,"value"]},{valueChange:"valueChange"}),n.Gb(603979776,22,{options:1}),n.Gb(603979776,23,{optionGroups:1}),n.Gb(603979776,24,{customTrigger:0}),n.Fb(2048,[[13,4],[14,4]],m.c,null,[_.c]),(l()(),n.gb(16777216,null,1,1,null,C)),n.qb(53,278528,null,0,w.i,[n.N,n.K,n.q],{ngForOf:[0,"ngForOf"]},null),(l()(),n.gb(16777216,null,null,1,null,G)),n.qb(55,16384,null,0,w.j,[n.N,n.K],{ngIf:[0,"ngIf"]},null)],(function(l,a){var e=a.component;l(a,1,0,"column"),l(a,3,0,"row"),l(a,4,0,"20px"),l(a,5,0,"center center"),l(a,17,0,"20%"),l(a,23,0,e.selected),l(a,29,0,e.states),l(a,41,0,"20%"),l(a,47,0,e.selectedDays),l(a,53,0,e.dayFilterOption),l(a,55,0,e.chartData)}),(function(l,a){l(a,6,1,["standard"==n.Db(a,7).appearance,"fill"==n.Db(a,7).appearance,"outline"==n.Db(a,7).appearance,"legacy"==n.Db(a,7).appearance,n.Db(a,7)._control.errorState,n.Db(a,7)._canLabelFloat,n.Db(a,7)._shouldLabelFloat(),n.Db(a,7)._hasFloatingLabel(),n.Db(a,7)._hideControlPlaceholder(),n.Db(a,7)._control.disabled,n.Db(a,7)._control.autofilled,n.Db(a,7)._control.focused,"accent"==n.Db(a,7).color,"warn"==n.Db(a,7).color,n.Db(a,7)._shouldForward("untouched"),n.Db(a,7)._shouldForward("touched"),n.Db(a,7)._shouldForward("pristine"),n.Db(a,7)._shouldForward("dirty"),n.Db(a,7)._shouldForward("valid"),n.Db(a,7)._shouldForward("invalid"),n.Db(a,7)._shouldForward("pending"),!n.Db(a,7)._animationsEnabled]),l(a,21,1,[n.Db(a,23).id,n.Db(a,23).tabIndex,n.Db(a,23)._getAriaLabel(),n.Db(a,23)._getAriaLabelledby(),n.Db(a,23).required.toString(),n.Db(a,23).disabled.toString(),n.Db(a,23).errorState,n.Db(a,23).panelOpen?n.Db(a,23)._optionIds:null,n.Db(a,23).multiple,n.Db(a,23)._ariaDescribedby||null,n.Db(a,23)._getAriaActiveDescendant(),n.Db(a,23).disabled,n.Db(a,23).errorState,n.Db(a,23).required,n.Db(a,23).empty]),l(a,30,1,["standard"==n.Db(a,31).appearance,"fill"==n.Db(a,31).appearance,"outline"==n.Db(a,31).appearance,"legacy"==n.Db(a,31).appearance,n.Db(a,31)._control.errorState,n.Db(a,31)._canLabelFloat,n.Db(a,31)._shouldLabelFloat(),n.Db(a,31)._hasFloatingLabel(),n.Db(a,31)._hideControlPlaceholder(),n.Db(a,31)._control.disabled,n.Db(a,31)._control.autofilled,n.Db(a,31)._control.focused,"accent"==n.Db(a,31).color,"warn"==n.Db(a,31).color,n.Db(a,31)._shouldForward("untouched"),n.Db(a,31)._shouldForward("touched"),n.Db(a,31)._shouldForward("pristine"),n.Db(a,31)._shouldForward("dirty"),n.Db(a,31)._shouldForward("valid"),n.Db(a,31)._shouldForward("invalid"),n.Db(a,31)._shouldForward("pending"),!n.Db(a,31)._animationsEnabled]),l(a,45,1,[n.Db(a,47).id,n.Db(a,47).tabIndex,n.Db(a,47)._getAriaLabel(),n.Db(a,47)._getAriaLabelledby(),n.Db(a,47).required.toString(),n.Db(a,47).disabled.toString(),n.Db(a,47).errorState,n.Db(a,47).panelOpen?n.Db(a,47)._optionIds:null,n.Db(a,47).multiple,n.Db(a,47)._ariaDescribedby||null,n.Db(a,47)._getAriaActiveDescendant(),n.Db(a,47).disabled,n.Db(a,47).errorState,n.Db(a,47).required,n.Db(a,47).empty])}))}function A(l){return n.Jb(0,[(l()(),n.rb(0,0,null,null,1,"app-total",[],null,null,null,k,L)),n.qb(1,114688,null,0,F,[q.a,B.a],null,null)],(function(l,a){l(a,1,0)}),null)}var I=n.nb("app-total",F,A,{},{},[]),O=e("QQfA"),N=e("POq0"),j=e("iInd");class J{}var K=e("cUpR"),z=e("Fwaw"),T=e("Gi4r"),R=e("zMNK"),M=e("ura0"),P=e("Nhcz"),V=e("u9T3"),$=e("PCNd");e.d(a,"TotalModuleNgFactory",(function(){return E}));var E=n.ob(t,[],(function(l){return n.Ab([n.Bb(512,n.j,n.Z,[[8,[i.a,I]],[3,n.j],n.v]),n.Bb(4608,w.l,w.k,[n.s,[2,w.A]]),n.Bb(4608,O.c,O.c,[O.h,O.d,n.j,O.g,O.e,n.p,n.x,w.c,f.b,[2,w.f]]),n.Bb(5120,O.i,O.j,[O.c]),n.Bb(4608,N.c,N.c,[]),n.Bb(5120,_.a,_.b,[O.c]),n.Bb(5120,n.b,(function(l,a){return[s.j(l,a)]}),[w.c,n.z]),n.Bb(1073742336,w.b,w.b,[]),n.Bb(1073742336,j.m,j.m,[[2,j.r],[2,j.k]]),n.Bb(1073742336,J,J,[]),n.Bb(1073742336,f.a,f.a,[]),n.Bb(1073742336,r.l,r.l,[[2,r.d],[2,K.f]]),n.Bb(1073742336,p.b,p.b,[]),n.Bb(1073742336,r.u,r.u,[]),n.Bb(1073742336,z.c,z.c,[]),n.Bb(1073742336,T.c,T.c,[]),n.Bb(1073742336,R.d,R.d,[]),n.Bb(1073742336,v.b,v.b,[]),n.Bb(1073742336,O.f,O.f,[]),n.Bb(1073742336,r.s,r.s,[]),n.Bb(1073742336,r.q,r.q,[]),n.Bb(1073742336,N.d,N.d,[]),n.Bb(1073742336,m.d,m.d,[]),n.Bb(1073742336,_.d,_.d,[]),n.Bb(1073742336,s.c,s.c,[]),n.Bb(1073742336,c.g,c.g,[]),n.Bb(1073742336,M.a,M.a,[]),n.Bb(1073742336,P.a,P.a,[]),n.Bb(1073742336,V.a,V.a,[[2,s.g],n.z]),n.Bb(1073742336,$.a,$.a,[]),n.Bb(1073742336,t,t,[]),n.Bb(1024,j.i,(function(){return[[{path:"",component:F}]]}),[])])}))}}]);
//# sourceMappingURL=8-es2015.js.map