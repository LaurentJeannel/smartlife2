exports.action = (data)=>{

var fs = require('fs');var d = fs.readFileSync('C:\\JarvisIA\\NodeJS\\programming.json', 'utf8');
var objet = JSON.parse(d);var longueur = objet.length;var jsonStr = JSON.stringify(objet)
var phrasedomo=JarvisIA.reco
var m="device";

console.log(phrasedomo,' reco ')
for(var i=0;i<objet.length;i++){
    var t=objet[i]['name']
    t=t.trim()
    if(phrasedomo.search(new RegExp(t,"gi"))>-1){var result=i;console.log("result = "+i)}
}

if(result ===undefined){console.log('rien'); return false}

const TuyAPI = require('tuyapi');

var device = new TuyAPI({
  id: objet[result]['id'],
    key: objet[result]['key']});

device.find().then(() => {console.log('find device!');
  // Connect to device
  device.connect();
});

// Add event listeners
device.on('connected', () => {
  console.log('Connected to device!');
});

device.on('disconnected', () => {
  console.log('Disconnected from device.');
});

device.on('error', error => {
  console.log('Error!', error);device.disconnect();
});

//setTimeout(() => { device.disconnect(); }, 10000);
device.on('data', dat => {
 (async () => { console.log('Data from device:', dat);
if(dat.dps['1']!==undefined){dataDPSonoff="1"}else{dataDPSonoff="20"}
console.log(dataDPSonoff)
console.log(dat.dps['1'],dat.dps[1])
 if(phrasedomo.search(new RegExp("vert","gi"))>-1){await device.set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "23ff00006fffff"}}).then(() => console.log("device was green")); device.disconnect()};
    if(phrasedomo.search(new RegExp("rouge","gi"))>-1){await device.set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "ff01000000ffff"}}).then(() => console.log("device was red")); device.disconnect()};
    if(phrasedomo.search(new RegExp("bleu","gi"))>-1){await device.set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "01001c00f3fe19"}}).then(() => console.log("device was blue")); device.disconnect()};
    if(phrasedomo.search(new RegExp("blanc","gi"))>-1){await device.set({multiple: true,data: {dataDPSonoff: true,"2" : "white"}}).then(() => console.log("device was white")); device.disconnect()};
    if(data.verifdomo=="on"){console.log("onnnnnnnnn");await device.set({dps: dataDPSonoff, set: true}); device.disconnect();}
    if(data.verifdomo=="off"){console.log("offffffffffffff");await device.set({dps: dataDPSonoff, set: false}); device.disconnect();} 

})();


  //console.log(`Boolean status of default property: ${data.dps['1']}.`);

  // Set default property to opposite
  
});
}