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
