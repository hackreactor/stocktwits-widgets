(function(e,n,t,o,r,a){function i(e,n){var t=typeof e[n];return"function"==t||!("object"!=t||!e[n])||"unknown"==t}function c(e,n){return!("object"!=typeof e[n]||!e[n])}function s(e){return"[object Array]"===Object.prototype.toString.call(e)}function l(){var e="Shockwave Flash",n="application/x-shockwave-flash";if(!w(navigator.plugins)&&"object"==typeof navigator.plugins[e]){var t=navigator.plugins[e].description;t&&!w(navigator.mimeTypes)&&navigator.mimeTypes[n]&&navigator.mimeTypes[n].enabledPlugin&&(N=t.match(/\d+/g))}if(!N){var o;try{o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),N=Array.prototype.slice.call(o.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1),o=null}catch(r){}}if(!N)return!1;var a=parseInt(N[0],10),i=parseInt(N[1],10);return R=a>9&&i>0,!0}function u(){if(!z){z=!0;for(var e=0;U.length>e;e++)U[e]();U.length=0}}function p(e,n){return z?(e.call(n),void 0):(U.push(function(){e.call(n)}),void 0)}function f(){var e=parent;if(""!==A)for(var n=0,t=A.split(".");t.length>n;n++)e=e[t[n]];return e.easyXDM}function d(n){return e.easyXDM=I,A=n,A&&(J="easyXDM_"+A.replace(".","_")+"_"),L}function m(e){return e.match(D)[3]}function h(e){return e.match(D)[4]||""}function g(e){var n=e.toLowerCase().match(D),t=n[2],o=n[3],r=n[4]||"";return("http:"==t&&":80"==r||"https:"==t&&":443"==r)&&(r=""),t+"//"+o+r}function v(e){if(e=e.replace(j,"$1/"),!e.match(/^(http||https):\/\//)){var n="/"===e.substring(0,1)?"":t.pathname;"/"!==n.substring(n.length-1)&&(n=n.substring(0,n.lastIndexOf("/")+1)),e=t.protocol+"//"+t.host+n+e}for(;B.test(e);)e=e.replace(B,"");return e}function y(e,n){var t="",o=e.indexOf("#");-1!==o&&(t=e.substring(o),e=e.substring(0,o));var r=[];for(var i in n)n.hasOwnProperty(i)&&r.push(i+"="+a(n[i]));return e+(W?"#":-1==e.indexOf("?")?"?":"&")+r.join("&")+t}function w(e){return e===void 0}function b(e,n,t){var o;for(var r in n)n.hasOwnProperty(r)&&(r in e?(o=n[r],"object"==typeof o?b(e[r],o,t):t||(e[r]=n[r])):e[r]=n[r]);return e}function k(){var e=n.body.appendChild(n.createElement("form")),t=e.appendChild(n.createElement("input"));t.name=J+"TEST"+P,E=t!==e.elements[t.name],n.body.removeChild(e)}function x(e){w(E)&&k();var t;E?t=n.createElement('<iframe name="'+e.props.name+'"/>'):(t=n.createElement("IFRAME"),t.name=e.props.name),t.id=t.name=e.props.name,delete e.props.name,"string"==typeof e.container&&(e.container=n.getElementById(e.container)),e.container||(b(t.style,{position:"absolute",top:"-2000px",left:"0px"}),e.container=n.body);var o=e.props.src;if(e.props.src="javascript:false",b(t,e.props),t.border=t.frameBorder=0,t.allowTransparency=!0,e.container.appendChild(t),e.onLoad&&S(t,"load",e.onLoad),e.usePost){var r,a=e.container.appendChild(n.createElement("form"));if(a.target=t.name,a.action=o,a.method="POST","object"==typeof e.usePost)for(var i in e.usePost)e.usePost.hasOwnProperty(i)&&(E?r=n.createElement('<input name="'+i+'"/>'):(r=n.createElement("INPUT"),r.name=i),r.value=e.usePost[i],a.appendChild(r));a.submit(),a.parentNode.removeChild(a)}else t.src=o;return e.props.src=o,t}function _(e,n){"string"==typeof e&&(e=[e]);for(var t,o=e.length;o--;)if(t=e[o],t=RegExp("^"==t.substr(0,1)?t:"^"+t.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"),t.test(n))return!0;return!1}function O(o){var r,a=o.protocol;if(o.isHost=o.isHost||w(q.xdm_p),W=o.hash||!1,o.props||(o.props={}),o.isHost)o.remote=v(o.remote),o.channel=o.channel||"default"+P++,o.secret=Math.random().toString(16).substring(2),w(a)&&(a=g(t.href)==g(o.remote)?"4":i(e,"postMessage")||i(n,"postMessage")?"1":o.swf&&i(e,"ActiveXObject")&&l()?"6":"Gecko"===navigator.product&&"frameElement"in e&&-1==navigator.userAgent.indexOf("WebKit")?"5":o.remoteHelper?"2":"0");else if(o.channel=q.xdm_c.replace(/["'<>\\]/g,""),o.secret=q.xdm_s,o.remote=q.xdm_e.replace(/["'<>\\]/g,""),a=q.xdm_p,o.acl&&!_(o.acl,o.remote))throw Error("Access denied for "+o.remote);switch(o.protocol=a,a){case"0":if(b(o,{interval:100,delay:2e3,useResize:!0,useParent:!1,usePolling:!1},!0),o.isHost){if(!o.local){for(var c,s=t.protocol+"//"+t.host,u=n.body.getElementsByTagName("img"),p=u.length;p--;)if(c=u[p],c.src.substring(0,s.length)===s){o.local=c.src;break}o.local||(o.local=e)}var f={xdm_c:o.channel,xdm_p:0};o.local===e?(o.usePolling=!0,o.useParent=!0,o.local=t.protocol+"//"+t.host+t.pathname+t.search,f.xdm_e=o.local,f.xdm_pa=1):f.xdm_e=v(o.local),o.container&&(o.useResize=!1,f.xdm_po=1),o.remote=y(o.remote,f)}else b(o,{channel:q.xdm_c,remote:q.xdm_e,useParent:!w(q.xdm_pa),usePolling:!w(q.xdm_po),useResize:o.useParent?!1:o.useResize});r=[new L.stack.HashTransport(o),new L.stack.ReliableBehavior({}),new L.stack.QueueBehavior({encode:!0,maxLength:4e3-o.remote.length}),new L.stack.VerifyBehavior({initiate:o.isHost})];break;case"1":r=[new L.stack.PostMessageTransport(o)];break;case"2":o.remoteHelper=v(o.remoteHelper),r=[new L.stack.NameTransport(o),new L.stack.QueueBehavior,new L.stack.VerifyBehavior({initiate:o.isHost})];break;case"3":r=[new L.stack.NixTransport(o)];break;case"4":r=[new L.stack.SameOriginTransport(o)];break;case"5":r=[new L.stack.FrameElementTransport(o)];break;case"6":N||l(),r=[new L.stack.FlashTransport(o)]}return r.push(new L.stack.QueueBehavior({lazy:o.lazy,remove:!0})),r}function M(e){for(var n,t={incoming:function(e,n){this.up.incoming(e,n)},outgoing:function(e,n){this.down.outgoing(e,n)},callback:function(e){this.up.callback(e)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}},o=0,r=e.length;r>o;o++)n=e[o],b(n,t,!0),0!==o&&(n.down=e[o-1]),o!==r-1&&(n.up=e[o+1]);return n}function T(e){e.up.down=e.down,e.down.up=e.up,e.up=e.down=null}var E,N,R,S,C,F=this,P=Math.floor(1e4*Math.random()),H=Function.prototype,D=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,B=/[\-\w]+\/\.\.\//,j=/([^:])\/\//g,A="",L={},I=e.easyXDM,J="easyXDM_",W=!1;if(i(e,"addEventListener"))S=function(e,n,t){e.addEventListener(n,t,!1)},C=function(e,n,t){e.removeEventListener(n,t,!1)};else{if(!i(e,"attachEvent"))throw Error("Browser not supported");S=function(e,n,t){e.attachEvent("on"+n,t)},C=function(e,n,t){e.detachEvent("on"+n,t)}}var X,z=!1,U=[];if("readyState"in n?(X=n.readyState,z="complete"==X||~navigator.userAgent.indexOf("AppleWebKit/")&&("loaded"==X||"interactive"==X)):z=!!n.body,!z){if(i(e,"addEventListener"))S(n,"DOMContentLoaded",u);else if(S(n,"readystatechange",function(){"complete"==n.readyState&&u()}),n.documentElement.doScroll&&e===top){var $=function(){if(!z){try{n.documentElement.doScroll("left")}catch(e){return o($,1),void 0}u()}};$()}S(e,"load",u)}var q=function(e){e=e.substring(1).split("&");for(var n,t={},o=e.length;o--;)n=e[o].split("="),t[n[0]]=r(n[1]);return t}(/xdm_e=/.test(t.search)?t.search:t.hash),V=function(){var e={},n={a:[1,2,3]},t='{"a":[1,2,3]}';return"undefined"!=typeof JSON&&"function"==typeof JSON.stringify&&JSON.stringify(n).replace(/\s/g,"")===t?JSON:(Object.toJSON&&Object.toJSON(n).replace(/\s/g,"")===t&&(e.stringify=Object.toJSON),"function"==typeof String.prototype.evalJSON&&(n=t.evalJSON(),n.a&&3===n.a.length&&3===n.a[2]&&(e.parse=function(e){return e.evalJSON()})),e.stringify&&e.parse?(V=function(){return e},e):null)};b(L,{version:"2.4.17.1",query:q,stack:{},apply:b,getJSONObject:V,whenReady:p,noConflict:d}),L.DomHelper={on:S,un:C,requiresJSON:function(t){c(e,"JSON")||n.write('<script type="text/javascript" src="'+t+'"><'+"/script>")}},function(){var e={};L.Fn={set:function(n,t){e[n]=t},get:function(n,t){var o=e[n];return t&&delete e[n],o}}}(),L.Socket=function(e){var n=M(O(e).concat([{incoming:function(n,t){e.onMessage(n,t)},callback:function(n){e.onReady&&e.onReady(n)}}])),t=g(e.remote);this.origin=g(e.remote),this.destroy=function(){n.destroy()},this.postMessage=function(e){n.outgoing(e,t)},n.init()},L.Rpc=function(e,n){if(n.local)for(var t in n.local)if(n.local.hasOwnProperty(t)){var o=n.local[t];"function"==typeof o&&(n.local[t]={method:o})}var r=M(O(e).concat([new L.stack.RpcBehavior(this,n),{callback:function(n){e.onReady&&e.onReady(n)}}]));this.origin=g(e.remote),this.destroy=function(){r.destroy()},r.init()},L.stack.SameOriginTransport=function(e){var n,r,a,i;return n={outgoing:function(e,n,t){a(e),t&&t()},destroy:function(){r&&(r.parentNode.removeChild(r),r=null)},onDOMReady:function(){i=g(e.remote),e.isHost?(b(e.props,{src:y(e.remote,{xdm_e:t.protocol+"//"+t.host+t.pathname,xdm_c:e.channel,xdm_p:4}),name:J+e.channel+"_provider"}),r=x(e),L.Fn.set(e.channel,function(e){return a=e,o(function(){n.up.callback(!0)},0),function(e){n.up.incoming(e,i)}})):(a=f().Fn.get(e.channel,!0)(function(e){n.up.incoming(e,i)}),o(function(){n.up.callback(!0)},0))},init:function(){p(n.onDOMReady,n)}}},L.stack.FlashTransport=function(e){function r(e){o(function(){i.up.incoming(e,s)},0)}function a(t){var o=e.swf+"?host="+e.isHost,r="easyXDM_swf_"+Math.floor(1e4*Math.random());L.Fn.set("flash_loaded"+t.replace(/[\-.]/g,"_"),function(){L.stack.FlashTransport[t].swf=l=u.firstChild;for(var e=L.stack.FlashTransport[t].queue,n=0;e.length>n;n++)e[n]();e.length=0}),e.swfContainer?u="string"==typeof e.swfContainer?n.getElementById(e.swfContainer):e.swfContainer:(u=n.createElement("div"),b(u.style,R&&e.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0}),n.body.appendChild(u));var a="callback=flash_loaded"+t.replace(/[\-.]/g,"_")+"&proto="+F.location.protocol+"&domain="+m(F.location.href)+"&port="+h(F.location.href)+"&ns="+A;u.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+r+"' data='"+o+"'>"+"<param name='allowScriptAccess' value='always'></param>"+"<param name='wmode' value='transparent'>"+"<param name='movie' value='"+o+"'></param>"+"<param name='flashvars' value='"+a+"'></param>"+"<embed type='application/x-shockwave-flash' FlashVars='"+a+"' allowScriptAccess='always' wmode='transparent' src='"+o+"' height='1' width='1'></embed>"+"</object>"}var i,c,s,l,u;return i={outgoing:function(n,t,o){l.postMessage(e.channel,""+n),o&&o()},destroy:function(){try{l.destroyChannel(e.channel)}catch(n){}l=null,c&&(c.parentNode.removeChild(c),c=null)},onDOMReady:function(){s=e.remote,L.Fn.set("flash_"+e.channel+"_init",function(){o(function(){i.up.callback(!0)})}),L.Fn.set("flash_"+e.channel+"_onMessage",r),e.swf=v(e.swf);var n=m(e.swf),u=function(){L.stack.FlashTransport[n].init=!0,l=L.stack.FlashTransport[n].swf,l.createChannel(e.channel,e.secret,g(e.remote),e.isHost),e.isHost&&(R&&e.swfNoThrottle&&b(e.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"}),b(e.props,{src:y(e.remote,{xdm_e:g(t.href),xdm_c:e.channel,xdm_p:6,xdm_s:e.secret}),name:J+e.channel+"_provider"}),c=x(e))};L.stack.FlashTransport[n]&&L.stack.FlashTransport[n].init?u():L.stack.FlashTransport[n]?L.stack.FlashTransport[n].queue.push(u):(L.stack.FlashTransport[n]={queue:[u]},a(n))},init:function(){p(i.onDOMReady,i)}}},L.stack.PostMessageTransport=function(n){function r(e){if(e.origin)return g(e.origin);if(e.uri)return g(e.uri);if(e.domain)return t.protocol+"//"+e.domain;throw"Unable to retrieve the origin of the event"}function a(e){var t=r(e);t==l&&e.data.substring(0,n.channel.length+1)==n.channel+" "&&i.up.incoming(e.data.substring(n.channel.length+1),t)}var i,c,s,l;return i={outgoing:function(e,t,o){s.postMessage(n.channel+" "+e,t||l),o&&o()},destroy:function(){C(e,"message",a),c&&(s=null,c.parentNode.removeChild(c),c=null)},onDOMReady:function(){if(l=g(n.remote),n.isHost){var r=function(t){t.data==n.channel+"-ready"&&(s="postMessage"in c.contentWindow?c.contentWindow:c.contentWindow.document,C(e,"message",r),S(e,"message",a),o(function(){i.up.callback(!0)},0))};S(e,"message",r),b(n.props,{src:y(n.remote,{xdm_e:g(t.href),xdm_c:n.channel,xdm_p:1}),name:J+n.channel+"_provider"}),c=x(n)}else S(e,"message",a),s="postMessage"in e.parent?e.parent:e.parent.document,s.postMessage(n.channel+"-ready",l),o(function(){i.up.callback(!0)},0)},init:function(){p(i.onDOMReady,i)}}},L.stack.FrameElementTransport=function(r){var a,i,c,s;return a={outgoing:function(e,n,t){c.call(this,e),t&&t()},destroy:function(){i&&(i.parentNode.removeChild(i),i=null)},onDOMReady:function(){s=g(r.remote),r.isHost?(b(r.props,{src:y(r.remote,{xdm_e:g(t.href),xdm_c:r.channel,xdm_p:5}),name:J+r.channel+"_provider"}),i=x(r),i.fn=function(e){return delete i.fn,c=e,o(function(){a.up.callback(!0)},0),function(e){a.up.incoming(e,s)}}):(n.referrer&&g(n.referrer)!=q.xdm_e&&(e.top.location=q.xdm_e),c=e.frameElement.fn(function(e){a.up.incoming(e,s)}),a.up.callback(!0))},init:function(){p(a.onDOMReady,a)}}},L.stack.NameTransport=function(e){function n(n){var t=e.remoteHelper+(c?"#_3":"#_2")+e.channel;s.contentWindow.sendMessage(n,t)}function t(){c?2!==++u&&c||i.up.callback(!0):(n("ready"),i.up.callback(!0))}function r(e){i.up.incoming(e,d)}function a(){f&&o(function(){f(!0)},0)}var i,c,s,l,u,f,d,m;return i={outgoing:function(e,t,o){f=o,n(e)},destroy:function(){s.parentNode.removeChild(s),s=null,c&&(l.parentNode.removeChild(l),l=null)},onDOMReady:function(){c=e.isHost,u=0,d=g(e.remote),e.local=v(e.local),c?(L.Fn.set(e.channel,function(n){c&&"ready"===n&&(L.Fn.set(e.channel,r),t())}),m=y(e.remote,{xdm_e:e.local,xdm_c:e.channel,xdm_p:2}),b(e.props,{src:m+"#"+e.channel,name:J+e.channel+"_provider"}),l=x(e)):(e.remoteHelper=e.remote,L.Fn.set(e.channel,r));var n=function(){var r=s||this;C(r,"load",n),L.Fn.set(e.channel+"_load",a),function i(){"function"==typeof r.contentWindow.sendMessage?t():o(i,50)}()};s=x({props:{src:e.local+"#_4"+e.channel},onLoad:n})},init:function(){p(i.onDOMReady,i)}}},L.stack.HashTransport=function(n){function t(e){if(h){var t=n.remote+"#"+d++ +"_"+e;(s||!v?h.contentWindow:h).location=t}}function r(e){f=e,c.up.incoming(f.substring(f.indexOf("_")+1),y)}function a(){if(m){var e=m.location.href,n="",t=e.indexOf("#");-1!=t&&(n=e.substring(t)),n&&n!=f&&r(n)}}function i(){l=setInterval(a,u)}var c,s,l,u,f,d,m,h,v,y;return c={outgoing:function(e){t(e)},destroy:function(){e.clearInterval(l),(s||!v)&&h.parentNode.removeChild(h),h=null},onDOMReady:function(){if(s=n.isHost,u=n.interval,f="#"+n.channel,d=0,v=n.useParent,y=g(n.remote),s){if(b(n.props,{src:n.remote,name:J+n.channel+"_provider"}),v)n.onLoad=function(){m=e,i(),c.up.callback(!0)};else{var t=0,r=n.delay/50;(function a(){if(++t>r)throw Error("Unable to reference listenerwindow");try{m=h.contentWindow.frames[J+n.channel+"_consumer"]}catch(e){}m?(i(),c.up.callback(!0)):o(a,50)})()}h=x(n)}else m=e,i(),v?(h=parent,c.up.callback(!0)):(b(n,{props:{src:n.remote+"#"+n.channel+new Date,name:J+n.channel+"_consumer"},onLoad:function(){c.up.callback(!0)}}),h=x(n))},init:function(){p(c.onDOMReady,c)}}},L.stack.ReliableBehavior=function(){var e,n,t=0,o=0,r="";return e={incoming:function(a,i){var c=a.indexOf("_"),s=a.substring(0,c).split(",");a=a.substring(c+1),s[0]==t&&(r="",n&&(n(!0),n=null)),a.length>0&&(e.down.outgoing(s[1]+","+t+"_"+r,i),o!=s[1]&&(o=s[1],e.up.incoming(a,i)))},outgoing:function(a,i,c){r=a,n=c,e.down.outgoing(o+","+ ++t+"_"+a,i)}}},L.stack.QueueBehavior=function(e){function n(){if(e.remove&&0===c.length)return T(t),void 0;if(!s&&0!==c.length&&!i){s=!0;var r=c.shift();t.down.outgoing(r.data,r.origin,function(e){s=!1,r.callback&&o(function(){r.callback(e)},0),n()})}}var t,i,c=[],s=!0,l="",u=0,p=!1,f=!1;return t={init:function(){w(e)&&(e={}),e.maxLength&&(u=e.maxLength,f=!0),e.lazy?p=!0:t.down.init()},callback:function(e){s=!1;var o=t.up;n(),o.callback(e)},incoming:function(n,o){if(f){var a=n.indexOf("_"),i=parseInt(n.substring(0,a),10);l+=n.substring(a+1),0===i&&(e.encode&&(l=r(l)),t.up.incoming(l,o),l="")}else t.up.incoming(n,o)},outgoing:function(o,r,i){e.encode&&(o=a(o));var s,l=[];if(f){for(;0!==o.length;)s=o.substring(0,u),o=o.substring(s.length),l.push(s);for(;s=l.shift();)c.push({data:l.length+"_"+s,origin:r,callback:0===l.length?i:null})}else c.push({data:o,origin:r,callback:i});p?t.down.init():n()},destroy:function(){i=!0,t.down.destroy()}}},L.stack.VerifyBehavior=function(e){function n(){o=Math.random().toString(16).substring(2),t.down.outgoing(o)}var t,o,r;return t={incoming:function(a,i){var c=a.indexOf("_");-1===c?a===o?t.up.callback(!0):r||(r=a,e.initiate||n(),t.down.outgoing(a)):a.substring(0,c)===r&&t.up.incoming(a.substring(c+1),i)},outgoing:function(e,n,r){t.down.outgoing(o+"_"+e,n,r)},callback:function(){e.initiate&&n()}}},L.stack.RpcBehavior=function(e,n){function t(e){e.jsonrpc="2.0",a.down.outgoing(i.stringify(e))}function o(e,n){var o=Array.prototype.slice;return function(){var r,a=arguments.length,i={method:n};a>0&&"function"==typeof arguments[a-1]?(a>1&&"function"==typeof arguments[a-2]?(r={success:arguments[a-2],error:arguments[a-1]},i.params=o.call(arguments,0,a-2)):(r={success:arguments[a-1]},i.params=o.call(arguments,0,a-1)),l[""+ ++c]=r,i.id=c):i.params=o.call(arguments,0),e.namedParams&&1===i.params.length&&(i.params=i.params[0]),t(i)}}function r(e,n,o,r){if(!o)return n&&t({id:n,error:{code:-32601,message:"Procedure not found."}}),void 0;var a,i;n?(a=function(e){a=H,t({id:n,result:e})},i=function(e,o){i=H;var r={id:n,error:{code:-32099,message:e}};o&&(r.error.data=o),t(r)}):a=i=H,s(r)||(r=[r]);try{var c=o.method.apply(o.scope,r.concat([a,i]));w(c)||a(c)}catch(l){i(l.message)}}var a,i=n.serializer||V(),c=0,l={};return a={incoming:function(e){var o=i.parse(e);if(o.method)n.handle?n.handle(o,t):r(o.method,o.id,n.local[o.method],o.params);else{var a=l[o.id];o.error?a.error&&a.error(o.error):a.success&&a.success(o.result),delete l[o.id]}},init:function(){if(n.remote)for(var t in n.remote)n.remote.hasOwnProperty(t)&&(e[t]=o(n.remote[t],t));a.down.init()},destroy:function(){for(var t in n.remote)n.remote.hasOwnProperty(t)&&e.hasOwnProperty(t)&&delete e[t];a.down.destroy()}}},F.easyXDM=L})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent),function(){var e,n=function(e,n){return Array.prototype.slice.call(e,n||0)};e=document.getElementsByClassName?function(e){return n(document.getElementsByClassName(e))}:function(e){for(var n=[],t=RegExp("(^| )"+e+"($| )"),o=document.getElementsByTagName("*"),r=0;o.length>r;r++)t.test(o[r].className)&&n.push(o[r]);return n};for(var t=function(e){var n=parseInt(e.getAttribute("data-id"),10);new easyXDM.Socket({remote:"embeddable-messages/index.html?messageID="+n,container:e,onMessage:function(e){t.height=e},onReady:function(){this.container=t}});var t=e.getElementsByTagName("iframe")[0];t.scrolling="no",t.style.display="block",t.style.border="1px solid",t.style.borderColor="#eee #ddd #bbb",t.style.maxWidth="99%",t.style.minWidth="220px",t.style.borderRadius="5px",t.style.margin="10px",t.style.boxShadow="rgba(0, 0, 0, 0.15) 0px 1px 3px",t.width="500",t.height="140",t.setAttribute("frameborder",0),t.setAttribute("allowtransparency","true"),e.parentNode.replaceChild(t,e)},o=e("stocktwit-twit"),r=0;o.length>r;r++)t(o[r])}();