exports.init=()=>{

const fs = require('fs');const d = fs.readFileSync('C:\\JarvisIA\\NodeJS\\programming.json');
var objet = JSON.parse(d);var longueur = objet.length;var jsonStr = JSON.stringify(objet);console.log(JSON.parse(d))
  
let TuyAPI = require('./tuyapi');  

k = 'device';
var m='async function asyncCall'    
for(i = 0; i < longueur; i++) {
       eval( k + i + ' = '+ "new TuyAPI({id: objet["+i+"]['id'],key: objet["+i+"]['key']})");
      ff=objet[i]["name"]
      eval ( m + i + '(){await device'+eval(i)+'.find(); await device'+eval(i)+'.connect()} ')

}

l = 'asyncCall'
for(j=0;j<longueur;j++){
    eval( l + j + '().catch(console.error).then(() => console.log(""));')}
}


exports.action = (data)=>{

try{

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



if(data.verifdomo=="vérif"){
    eval(m+result+".get({schema: true}).then(dataa => {console.log(dataa.dps['1']) ;console.log(dataa.dps['20']); console.log(dataa);if(dataa.dps['1']==false){JarvisIASpeech('objet off')};if(dataa.dps['1']==true){JarvisIASpeech('objet on')};if(dataa.dps['20']==false){JarvisIASpeech('objet off')};if(dataa.dps['20']==true){JarvisIASpeech('objet on')};} )");
    return false
}

(async () => {
    var dataDPSonoff="0"
    var m="device"
await eval(m+result+".get({schema: true}).then(datab => {datadomo=datab;console.log(datab)})");
if(datadomo.dps[1]!==undefined){dataDPSonoff="1"}else{dataDPSonoff="20"}

console.log("valeur on off : "+dataDPSonoff)

  
    if(phrasedomo.search(new RegExp("vert","gi"))>-1){eval( m+result+'.set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "23ff00006fffff"}}).then(() => console.log("device was changed"))');}
    if(phrasedomo.search(new RegExp("rouge","gi"))>-1){eval( m+result+'.set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "ff01000000ffff"}}).then(() => console.log("device was changed"))');}
    if(phrasedomo.search(new RegExp("bleu","gi"))>-1){eval( m+result+'.set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "01001c00f3fe19"}}).then(() => console.log("device was changed"))');}
    if(phrasedomo.search(new RegExp("blanc","gi"))>-1){eval( m+result+'.set({multiple: true,data: {dataDPSonoff: true,"2" : "white"}}).then(() => console.log("device was changed"))');}
    if(data.verifdomo=="on"){eval(m+result+'.set({dps: dataDPSonoff, set: true})')}
    if(data.verifdomo=="off"){eval(m+result+'.set({dps: dataDPSonoff, set: false})')}  
    //if(data.verifdomo=="disconect"){eval(m+result+'.device.disconnect()')}
   
})();

}catch(err){console.log(err);return false}
}
