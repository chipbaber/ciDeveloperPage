//tealium universal tag - utag.sync ut4.0.202201280404, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try{try{if(typeof utag_data=="undefined"){var utag_data={};}
if(navigator.doNotTrack==1||window.doNotTrack==1||navigator.msDoNotTrack==1){utag_data.consent_do_not_track=true;}else{utag_data.consent_do_not_track=false;}
if(typeof oracle!=="undefined"&&typeof oracle.truste!=="undefined"&&oracle.truste.api!=="undefined"&&typeof oracle.truste.api.getGdprConsentDecision()!=="undefined"){utag_data.consent_decision=oracle.truste.api.getGdprConsentDecision().consentDecision;utag_data.consent_source=oracle.truste.api.getGdprConsentDecision().source;}else{var oracle=oracle||{};oracle.truste={},oracle.truste.api={},function(){this.getCookieName=function(){return"notice_preferences"},this.getStorageItemName=function(){return"truste.eu.cookie.notice_preferences"},this.getGdprCookieName=function(){return"notice_gdpr_prefs"},this.getGdprStorageItemName=function(){return"truste.eu.cookie.notice_gdpr_prefs"}}.apply(oracle.truste),function(){var e=oracle.truste;function t(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}
return null}
function r(e){var t,r=(t=e,"undefined"!=typeof Storage?localStorage.getItem(t):null);return null!=r?JSON.parse(r).value:null}
this.getConsentCode=function(){var n=r(e.getStorageItemName())||t(e.getCookieName());return null==n?-1:parseInt(n)+1},this.getGdprConsentCode=function(){var n=r(e.getGdprStorageItemName())||t(e.getGdprCookieName());if(null==n)return-1;var o=new Array;o=n.split(",");for(a in o)o[a]=parseInt(o[a],10)+1;return o.toString()},this.getConsentDecision=function(){var e=this.getConsentCode();if(-1==e){var t='{"consentDecision": 0, "source": "implied"}';return JSON.parse(t)}
t='{"consentDecision": '+parseInt(e)+', "source": "asserted"}';return JSON.parse(t)},this.getGdprConsentDecision=function(){var e=this.getGdprConsentCode();if(-1==e){var t='{"consentDecision": [0], "source": "implied"}';return JSON.parse(t)}
t='{"consentDecision": ['+e+'], "source": "asserted"}';return JSON.parse(t)}}.apply(oracle.truste.api);if(typeof oracle!=="undefined"&&typeof oracle.truste!=="undefined"&&oracle.truste.api!=="undefined"&&typeof oracle.truste.api.getGdprConsentDecision()!=="undefined"){utag_data.consent_decision=oracle.truste.api.getGdprConsentDecision().consentDecision;utag_data.consent_source=oracle.truste.api.getGdprConsentDecision().source;}else if(typeof truste!=="undefined"&&typeof truste.cma!=="undefined"&&typeof truste.cma.callApi()!=="undefined"){utag_data.consent_decision=truste.cma.callApi("getGDPRConsentDecision","oracle.com").consentDecision;utag_data.consent_source=truste.cma.callApi("getGDPRConsentDecision","oracle.com").source;}else{utag_data.consent_decision="-1";utag_data.consent_source="NoTRUSTe";}}
if(typeof utag_data['consent_decision']!='undefined'&&utag_data['consent_decision'].toString().toLowerCase().indexOf('3'.toLowerCase())>-1){utag_data['consent_advertising']=true;}else{utag_data['consent_advertising']=false;}
if(typeof utag_data['consent_decision']!='undefined'&&utag_data['consent_decision'].toString().toLowerCase().indexOf('2'.toLowerCase())>-1){utag_data['consent_functional']=true;}else{utag_data['consent_functional']=false;}
if(typeof utag_data['consent_decision']!='undefined'&&utag_data['consent_decision'].toString().toLowerCase().indexOf('0'.toLowerCase())>-1){if(typeof utag_data['consent_do_not_track']!='undefined'&&utag_data['consent_do_not_track'].toString().toLowerCase().indexOf('false'.toLowerCase())>-1){utag_data['consent_implied']=true;}else{utag_data['consent_implied']=false;}}else{utag_data['consent_implied']=false;}
(function setCountryExclusion(){function launchGetUrlVars(){var a=[],b,c=window.location.href;-
1!=c.indexOf("#")&&(c=c.split("#")[0]);for(var d=c.slice(window.location.href.indexOf("?")+1).split("&"),e=0;e<d.length;e++){b=d[e].split("=");a.push(b[0]);a[b[0]]=b[1]}
return a}
var countryFound=false;var countryList=['/ru/','/cn/'];var arrLen=countryList.length;for(var i=0;i<arrLen;i++){if(location.href.indexOf(countryList[i])!=-1){countryFound=true;break;}}
if(location.hostname==="go.oracle.com"){var langCode=(window.languageCode)?(window.languageCode):"en";var countryId=(window.countryCode)?(window.countryCode):"us";var srcParam=launchGetUrlVars()["src1"];if(srcParam!=undefined){if(srcParam.indexOf('a_')!=-1){console.log("in if lop");var countryValue=srcParam.split(':');for(var i=0;i<countryValue.length;i++){if(countryValue[i].indexOf('a_')!=-1){console.log("in countryid");countryId=countryValue[i].substring(2);console.log(countryId);break;}}}}
if(langCode=="ru-ru"||countryId=="ru"||langCode=="zh-cn"||countryId=="cn"){countryFound=true;}}
if(window.truste){if(window.truste.eu&&truste.eu.bindMap&&truste.eu.bindMap.country){if(window.truste.eu.bindMap.country=='ru'){countryFound=true;}}}
window.utag_data.country_exclusion=countryFound;})();window.utag_data.consent_code_has_run=true;}catch(e){console.log(e)}}catch(e){console.log(e);}
try{try{function load_maxymizer(){document.write('<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></scr'+'ipt>');utag_data['maxymiser_loaded']=true;}
if(typeof utag_data['consent_functional']!='undefined'&&utag_data['consent_functional'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1||typeof utag_data['consent_implied']!='undefined'&&utag_data['consent_implied'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1){if(typeof location.host!='undefined'&&location.host.toString().toLowerCase()=='www.oracle.com'.toLowerCase()||typeof location.host!='undefined'&&location.host.toString().toLowerCase()=='www-sites.oracle.com'.toLowerCase()||typeof location.host!='undefined'&&location.host.toString().toLowerCase()=='www-qa-dr.appoci.oracle.com'.toLowerCase()||typeof location.host!='undefined'&&location.host.toString().toLowerCase()=='www-stage.appoci.oracle.com'.toLowerCase()){if((typeof location.pathname!='undefined'&&/^(\/|\/au\/|\/uk\/)industries\/food-beverage\//.test(location.pathname)||typeof location.pathname!='undefined'&&/^(\/|\/au\/|\/uk\/)industries\/micros\//.test(location.pathname)||typeof location.pathname!='undefined'&&/^(\/|\/br\/|\/mx\/)industries\/retail\//.test(location.pathname)||typeof location.pathname!='undefined'&&/\/life-sciences\//.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/industries\/hospitality\//.test(location.pathname)||typeof location.pathname!='undefined'&&/\/uk\/erp\/financials-cloud\/finance-strategy\//.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/industries\/construction-engineering\/aconex-project-controls\/((\?|#).*)*$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/cx\/what-is-cx\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/cx\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/cx\/product-tours\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/database\/database-world\/((\?|#).*)*$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/database\/database-world\/event\/((\?|#).*)*$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/database\/database-world\/on-demand\/((\?|#).*)*$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/industries\/construction-engineering\/textura-construction-payment-management\/((\?|#).*)*$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/cloud\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/elq-demo-form.html/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/cloud\/cost-estimator.html/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/cloud\/costestimator.html/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/br\/think-oracle\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/uk\/erp\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/uk\/human-capital-management\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/uk\/cx\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/uk\/database\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/uk\/industries\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/uk\/servers\/eol.html$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/de\/erp\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/de\/human-capital-management\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/de\/cx\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/de\/database\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/de\/industries\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/de\/servers\/eol.html$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/uk\/corporate\/contact\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/de\/corporate\/contact\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/de\/erp\/financials-cloud\/finance-strategy\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/fr\/erp\/financials-cloud\/finance-strategy\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/fr\/database\/freedom-from\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/de\/database\/freedom-from\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/uk\/database\/freedom-from\/$/.test(location.pathname))&&window.location.search.toLowerCase().indexOf('combined-tag=true')===-1&&window.location.search.toLowerCase().indexOf('maxymiser=no')===-1){load_maxymizer();}}
if(typeof location.host!='undefined'&&location.host.toString().toLowerCase()=='developer.oracle.com'.toLowerCase()){if(typeof location.pathname!='undefined'&&location.pathname.toString().toLowerCase()=='/'){load_maxymizer();}}
if(typeof location.host!='undefined'&&location.host.toString().toLowerCase()=='blogs.oracle.com'.toLowerCase()){if(typeof location.pathname!='undefined'&&location.pathname.toString().toLowerCase()=='/sustainability/post/startups-step-up-with-free-resources-and-virtual-technology'){load_maxymizer();}}}}catch(e){console.log(e)}}catch(e){console.log(e);}
try{try{try{if(!window.dataLayerObject){window.dataLayerObject={};}
var _variation=false;window.dataLayerObject.page={variation:"default"};var keywords=document.getElementsByName('keywords')&&document.getElementsByName('keywords')[0]&&document.getElementsByName('keywords')[0].getAttribute('content')||'';if(keywords===''){keywords=document.getElementsByName('Keywords')&&document.getElementsByName('Keywords')[0]&&document.getElementsByName('Keywords')[0].getAttribute('content')||'';}
if(keywords!=''){var keywordsArr=keywords.split(',');keywordsArr.forEach(function(ele){if(ele.trim().indexOf('AA')!=-1){window.dataLayerObject.page.variation=ele.trim();}});}}catch(e){console.error('Tealium: utag.sync - Set Page Variation to DataLayer Object',e);}}catch(e){console.log(e)}}catch(e){console.log(e);}