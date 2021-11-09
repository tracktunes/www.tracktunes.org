"use strict";(self.webpackChunkwww_tracktunes_org=self.webpackChunkwww_tracktunes_org||[]).push([[592],{592:(Z,O,d)=>{d.r(O),d.d(O,{ion_select:()=>_,ion_select_option:()=>k,ion_select_popover:()=>A});var c=d(4553),s=d(3150),p=d(7585),b=d(2377),f=d(7053),C=d(1269);const P=(e,t)=>1!==e.nodeType?void 0:(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(i=>i.value===e.value),_=class{constructor(e){(0,s.r)(this,e),this.ionChange=(0,s.e)(this,"ionChange",7),this.ionCancel=(0,s.e)(this,"ionCancel",7),this.ionFocus=(0,s.e)(this,"ionFocus",7),this.ionBlur=(0,s.e)(this,"ionBlur",7),this.ionStyle=(0,s.e)(this,"ionStyle",7),this.inputId="ion-sel-"+M++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}connectedCallback(){var e=this;return(0,c.Z)(function*(){e.updateOverlayOptions(),e.emitStyle(),e.mutationO=((e,t,n)=>{if("undefined"==typeof MutationObserver)return;const i=new MutationObserver(o=>{n(((e,t)=>{let n;return e.forEach(i=>{for(let o=0;o<i.addedNodes.length;o++)n=P(i.addedNodes[o],t)||n}),n})(o,"ion-select-option"))});return i.observe(e,{childList:!0,subtree:!0}),i})(e.el,0,(0,c.Z)(function*(){e.updateOverlayOptions()}))})()}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}open(e){var t=this;return(0,c.Z)(function*(){if(t.disabled||t.isExpanded)return;const n=t.overlay=yield t.createOverlay(e);return t.isExpanded=!0,n.onDidDismiss().then(()=>{t.overlay=void 0,t.isExpanded=!1,t.setFocus()}),yield n.present(),n})()}createOverlay(e){let t=this.interface;return("action-sheet"===t||"popover"===t)&&this.multiple&&(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"===t&&!e&&(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()}updateOverlayOptions(){const e=this.overlay;if(!e)return;const t=this.childOpts,n=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,n);break;case"popover":const i=e.querySelector("ion-select-popover");i&&(i.options=this.createPopoverOptions(t,n));break;case"alert":e.inputs=this.createAlertInputs(t,this.multiple?"checkbox":"radio",n)}}createActionSheetButtons(e,t){const n=e.map(i=>{const o=g(i),r=Array.from(i.classList).filter(l=>"hydrated"!==l).join(" "),a=`${x} ${r}`;return{role:m(o,t,this.compareWith)?"selected":"",text:i.textContent,cssClass:a,handler:()=>{this.value=o}}});return n.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),n}createAlertInputs(e,t,n){return e.map(o=>{const r=g(o),a=Array.from(o.classList).filter(u=>"hydrated"!==u).join(" ");return{type:t,cssClass:`${x} ${a}`,label:o.textContent||"",value:r,checked:m(r,n,this.compareWith),disabled:o.disabled}})}createPopoverOptions(e,t){return e.map(i=>{const o=g(i),r=Array.from(i.classList).filter(l=>"hydrated"!==l).join(" ");return{text:i.textContent||"",cssClass:`${x} ${r}`,value:o,checked:m(o,t,this.compareWith),disabled:i.disabled,handler:()=>{this.value=o,this.close()}}})}openPopover(e){var t=this;return(0,c.Z)(function*(){const n=t.interfaceOptions,i=(0,p.b)(t),o=t.value,r=Object.assign(Object.assign({mode:i},n),{component:"ion-select-popover",cssClass:["select-popover",n.cssClass],event:e,componentProps:{header:n.header,subHeader:n.subHeader,message:n.message,value:o,options:t.createPopoverOptions(t.childOpts,o)}});return f.c.create(r)})()}openActionSheet(){var e=this;return(0,c.Z)(function*(){const t=(0,p.b)(e),n=e.interfaceOptions,i=Object.assign(Object.assign({mode:t},n),{buttons:e.createActionSheetButtons(e.childOpts,e.value),cssClass:["select-action-sheet",n.cssClass]});return f.b.create(i)})()}openAlert(){var e=this;return(0,c.Z)(function*(){const t=e.getLabel(),n=t?t.textContent:null,i=e.interfaceOptions,o=e.multiple?"checkbox":"radio",r=(0,p.b)(e),a=Object.assign(Object.assign({mode:r},i),{header:i.header?i.header:n,inputs:e.createAlertInputs(e.childOpts,o,e.value),buttons:[{text:e.cancelText,role:"cancel",handler:()=>{e.ionCancel.emit()}},{text:e.okText,handler:l=>{e.value=l}}],cssClass:["select-alert",i.cssClass,e.multiple?"multiple-select-alert":"single-select-alert"]});return f.a.create(a)})()}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return(0,b.h)(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const e=this.selectedText;return null!=e&&""!==e?e:L(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{disabled:e,el:t,inputId:n,isExpanded:i,name:o,placeholder:r,value:a}=this,l=(0,p.b)(this),{labelText:u,labelId:S}=(0,b.d)(t,n);(0,b.e)(!0,t,o,D(a),e);let y=!1,h=this.getText();""===h&&null!=r&&(h=r,y=!0);const H={"select-text":!0,"select-placeholder":y},K=y?"placeholder":"text",E=void 0!==u?""!==h?`${h}, ${u}`:u:h;return(0,s.h)(s.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":e?"true":null,"aria-label":E,class:{[l]:!0,"in-item":(0,C.h)("ion-item",t),"select-disabled":e,"select-expanded":i}},(0,s.h)("div",{"aria-hidden":"true",class:H,part:K},h),(0,s.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,s.h)("div",{class:"select-icon-inner"})),(0,s.h)("label",{id:S},E),(0,s.h)("button",{type:"button",disabled:e,id:n,"aria-labelledby":S,"aria-haspopup":"listbox","aria-expanded":`${i}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:R=>this.focusEl=R}))}get el(){return(0,s.i)(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}},m=(e,t,n)=>void 0!==e&&(Array.isArray(e)?e.some(i=>v(i,t,n)):v(e,t,n)),g=e=>{const t=e.value;return void 0===t?e.textContent||"":t},D=e=>{if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},v=(e,t,n)=>"function"==typeof n?n(e,t):"string"==typeof n?e[n]===t[n]:Array.isArray(t)?t.includes(e):e===t,L=(e,t,n)=>void 0===t?"":Array.isArray(t)?t.map(i=>w(e,i,n)).filter(i=>null!==i).join(", "):w(e,t,n)||"",w=(e,t,n)=>{const i=e.find(o=>v(g(o),t,n));return i?i.textContent:null};let M=0;const x="select-interface-option";_.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}"};const k=class{constructor(e){(0,s.r)(this,e),this.inputId="ion-selopt-"+F++,this.disabled=!1}render(){return(0,s.h)(s.H,{role:"option",id:this.inputId,class:(0,p.b)(this)})}get el(){return(0,s.i)(this)}};let F=0;k.style=":host{display:none}";const A=class{constructor(e){(0,s.r)(this,e),this.options=[]}onSelect(e){const t=this.options.find(n=>n.value===e.target.value);t&&(0,f.s)(t.handler)}render(){const e=this.options.find(n=>n.checked),t=e?e.value:void 0;return(0,s.h)(s.H,{class:(0,p.b)(this)},(0,s.h)("ion-list",null,void 0!==this.header&&(0,s.h)("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&(0,s.h)("ion-item",null,(0,s.h)("ion-label",{class:"ion-text-wrap"},void 0!==this.subHeader&&(0,s.h)("h3",null,this.subHeader),void 0!==this.message&&(0,s.h)("p",null,this.message))),(0,s.h)("ion-radio-group",{value:t},this.options.map(n=>(0,s.h)("ion-item",{class:(0,C.g)(n.cssClass)},(0,s.h)("ion-label",null,n.text),(0,s.h)("ion-radio",{value:n.value,disabled:n.disabled}))))))}};A.style=".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}]);