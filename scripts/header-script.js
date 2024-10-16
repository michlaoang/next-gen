window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'o-21MNYV-na1';
window['_fs_namespace'] = 'FS';
!function(m,n,e,t,l,o,g,y){var s,f,a=function(h){
return!(h in m)||(m.console&&m.console.log&&m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'),!1)}(e)
;function p(b){var h,d=[];function j(){h&&(d.forEach((function(b){var d;try{d=b[h[0]]&&b[h[0]](h[1])}catch(h){return void(b[3]&&b[3](h))}
d&&d.then?d.then(b[2],b[3]):b[2]&&b[2](d)})),d.length=0)}function r(b){return function(d){h||(h=[b,d],j())}}return b(r(0),r(1)),{
then:function(b,h){return p((function(r,i){d.push([b,h,r,i]),j()}))}}}a&&(g=m[e]=function(){var b=function(b,d,j,r){function i(i,c){
h(b,d,j,i,c,r)}r=r||2;var c,u=/Async$/;return u.test(b)?(b=b.replace(u,""),"function"==typeof Promise?new Promise(i):p(i)):h(b,d,j,c,c,r)}
;function h(h,d,j,r,i,c){return b._api?b._api(h,d,j,r,i,c):(b.q&&b.q.push([h,d,j,r,i,c]),null)}return b.q=[],b}(),y=function(b){function h(h){
"function"==typeof h[4]&&h[4](new Error(b))}var d=g.q;if(d){for(var j=0;j<d.length;j++)h(d[j]);d.length=0,d.push=h}},function(){
(o=n.createElement(t)).async=!0,o.crossOrigin="anonymous",o.src="https://"+l,o.onerror=function(){y("Error loading "+l)}
;var b=n.getElementsByTagName(t)[0];b&&b.parentNode?b.parentNode.insertBefore(o,b):n.head.appendChild(o)}(),function(){function b(){}
function h(b,h,d){g(b,h,d,1)}function d(b,d,j){h("setProperties",{type:b,properties:d},j)}function j(b,h){d("user",b,h)}function r(b,h,d){j({
uid:b},d),h&&j(h,d)}g.identify=r,g.setUserVars=j,g.identifyAccount=b,g.clearUserCookie=b,g.setVars=d,g.event=function(b,d,j){h("trackEvent",{
name:b,properties:d},j)},g.anonymize=function(){r(!1)},g.shutdown=function(){h("shutdown")},g.restart=function(){h("restart")},
g.log=function(b,d){h("log",{level:b,msg:d})},g.consent=function(b){h("setIdentity",{consent:!arguments.length||b})}}(),s="fetch",
f="XMLHttpRequest",g._w={},g._w[f]=m[f],g._w[s]=m[s],m[s]&&(m[s]=function(){return g._w[s].apply(this,arguments)}),g._v="2.0.0")
}(window,document,window._fs_namespace,"script",window._fs_script);




//RANDOM USERS
var user1 = {
    'Player Name': 'MJ',
    'Account Status': 'standard',
    'Verification Status': 'verified',
    'Player Number': '1234',
    'Player Tier': 'VIP',
    'Balance': '10.23',
    'Logged In': 'yes',
};

var user2 = {
    'Player Name': 'ML',
    'Account Status': 'suspended',
    'Verification Status': 'unverified',
    'Player Number': '4321',
    'Player Tier': 'NON VIP',
    'Balance': '102.23',
    'Logged In': 'yes',
};

var user3 = {
    'Player Name': 'PG',
    'Account Status': 'closed',
    'Verification Status': 'unverified',
    'Player Number': '2222',
    'Player Tier': 'GOLD',
    'Balance': '0.22',
    'Logged In': 'yes',
};

var user4 = {
    'Player Name': 'JF',
    'Account Status': 'self excluded',
    'Verification Status': 'pending',
    'Player Number': '18882',
    'Player Tier': 'PLATINUM',
    'Balance': '9.11',
    'Logged In': 'yes',
};

// Function to select a random payload
function getRandomPlayer() {
    const payloads = [user1, user2, user3, user4];
    const randomIndex = Math.floor(Math.random() * payloads.length);
    return payloads[randomIndex];
}


 function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

       

        function globalProperties(ua) {
            const pathname = window.location.pathname;
            const pathParts = pathname.split('/');
            const pageName = pathParts.pop() || 'index.html'; // Default to 'index.html' if no page name
            const path = pathParts.join('/');

            let payload = {
                "Device Type": "Unknown",
                "Operating System": "Unknown",
                "Operating System Version": "Unknown",
                "Browser": "Unknown",
                "Browser Version": "Unknown",
                "Screen Resolution": `${screen.width}x${screen.height}`,
                "Referrer": document.referrer,
                "User Agent": ua,
                "Language": navigator.language,
                "Platform": navigator.platform,
                "Cookies Enabled": navigator.cookieEnabled.toString(),
                "Viewport Size": `${window.innerWidth}x${window.innerHeight}`,
                "Time Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
                "Online Status": navigator.onLine.toString(),
                "Touch Support": ('ontouchstart' in window || navigator.maxTouchPoints > 0).toString(),
                "Hardware Concurrency": navigator.hardwareConcurrency ? navigator.hardwareConcurrency.toString() : 'Unknown',
                "Device Memory": navigator.deviceMemory ? navigator.deviceMemory.toString() : 'Unknown',
                "Connection Type": (navigator.connection && navigator.connection.effectiveType) ? navigator.connection.effectiveType.toString() : 'Unknown',
                "Battery Status": "Unknown",
                "Browser Time": new Date().toLocaleString(),
                "Browser Window Dimensions": `${window.outerWidth}x${window.outerHeight}`,
                "Color Depth": screen.colorDepth.toString(),
                "Available Screen Size": `${screen.availWidth}x${screen.availHeight}`,
                "Device Pixel Ratio": window.devicePixelRatio.toString(),
                "Media Device Support": (!!(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)).toString(),
                "History Length": history.length.toString(),
                "Clipboard Access": (!!navigator.clipboard).toString(),
                "Fullscreen Support": (!!document.fullscreenEnabled).toString(),
                "Notification Support": ('Notification' in window).toString(),
                "Network Type": (navigator.connection && navigator.connection.type) ? navigator.connection.type.toString() : 'Unknown',
                "Network Download Speed": (navigator.connection && navigator.connection.downlink) ? navigator.connection.downlink + ' Mbps' : 'Unknown',
                
                
                
                //MOVE TO EVENT
                "Title": document.title,
                "Path": path,
                "Page Name": pageName,
                "Query String": window.location.search,
                "Actual Domain": window.location.hostname,


                
            };

            if (navigator.getBattery) {
                navigator.getBattery().then(battery => {
                    payload["Battery Status"] = `${Math.round(battery.level * 100)}% ${battery.charging ? '(Charging)' : '(Not Charging)'}`;
                    console.log(payload);
                });
            } else {
                console.log(payload);
            }

            let deviceTypePatterns = {
                "Mobile": /Mobi/i,
                "Tablet": /Tablet|iPad/i,
                "Desktop": /Windows|Macintosh|Linux/i
            };

            let osPatterns = {
                "Windows": /Windows NT (\d+\.\d+)/i,
                "MacOS": /Mac OS X (\d+[\._]\d+)/i,
                "iOS": /iPhone OS (\d+[\._]\d+)/i,
                "Android": /Android (\d+\.\d+)/i,
                "Linux": /Linux/i
            };

            let browserPatterns = {
                "Chrome": /Chrome\/(\d+\.\d+)/i,
                "Firefox": /Firefox\/(\d+\.\d+)/i,
                "Safari": /Version\/(\d+\.\d+).*Safari/i,
                "Edge": /Edg\/(\d+\.\d+)/i,
                "Internet Explorer": /MSIE (\d+\.\d+);/i
            };

            for (let [device, pattern] of Object.entries(deviceTypePatterns)) {
                if (pattern.test(ua)) {
                    payload["Device Type"] = device;
                    break;
                }
            }

            for (let [os, pattern] of Object.entries(osPatterns)) {
                let match = ua.match(pattern);
                if (match) {
                    payload["Operating System"] = os;
                    payload["Operating System Version"] = match[1].replace(/_/g, '.');
                    break;
                }
            }

            for (let [browser, pattern] of Object.entries(browserPatterns)) {
                let match = ua.match(pattern);
                if (match) {
                    payload["Browser"] = browser;
                    payload["Browser Version"] = match[1];
                    break;
                }
            }

            if (!navigator.getBattery) {
                console.log(payload);
            }

            return payload;
        }
