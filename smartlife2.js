exports.init=()=>{

const fs = require('fs');const d = fs.readFileSync('C:\\JarvisIA\\NodeJS\\programming.json');
var objet = JSON.parse(d);var longueur = objet.length;var jsonStr = JSON.stringify(objet);console.log(JSON.parse(d))
  
let TuyAPI = require('./tuyapi');  

k = 'device';
var m='async function asyncCall'    
for(i = 0; i < longueur; i++) {
       eval( k + i + ' = '+ "new TuyAPI({id: objet["+i+"]['id'],key: objet["+i+"]['key']})");
      ff=objet[i]["name"]
      //eval ( m + i + '(){await device'+eval(i)+'.find(); await device'+eval(i)+'.connect();console.log("'+ff+'");let status = await device'+eval(i)+'.get(); console.log(`Current status: ${status}.`);} ')
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
    if(phrasedomo.search(new RegExp(t,"gi"))>-1){var result=i}
}


if(result ===undefined){console.log('rien'); return false}



if(data.verifdomo=="vérif"){
   
        //var m="device";
        eval(m+result+".get({schema: true}).then(dataa => {console.log(dataa.dps['1']) ;console.log(dataa.dps['20']); console.log(dataa);if(dataa.dps['1']==false){JarvisIASpeech('objet off')};if(dataa.dps['1']==true){JarvisIASpeech('objet on')};if(dataa.dps['20']==false){JarvisIASpeech('objet off')};if(dataa.dps['20']==true){JarvisIASpeech('objet on')};} )");
    
    return false
}

//JarvisIASpeech(${data.dps['1']})
         //device.on('data', data => {console.log('Data from device:', data);})

(async () => {
    var m="device"
eval(m+result+".get({schema: true}).then(datab => {console.log(datab)})");
  //; if(dataa.dps['1']==false){JarvisIASpeech('objet off')}; if(dataa.dps['1']==true){JarvisIASpeech('objet on')} })");
    //eval(m+result+".on('data', data => {console.log('Data from device:', data.dps);})")
    //eval(m+result+".on('dp-refresh', data => {console.log('DP_REFRESH data from device: ', data);})")

    if(phrasedomo.search(new RegExp("vert","gi"))>-1){eval( m+result+'.set({dps: 1, set: true})');eval(m+result+'.set({dps: 5, set: "23ff00006fffff"})');}
    if(phrasedomo.search(new RegExp("rouge","gi"))>-1){eval( m+result+'.set({dps: 1, set: true})');eval(m+result+'.set({dps: 5, set: "ff01000000ffff"})');}
    if(phrasedomo.search(new RegExp("bleu","gi"))>-1){eval( m+result+'.set({dps: 1, set: true})');eval(m+result+'.set({dps: 5, set: "01001c00f3fe19"})');}
    if(data.verifdomo=="on"){eval(m+result+'.set({dps: 1, set: true})');eval(m+result+'.set({dps: 20, set: true})')}
    if(data.verifdomo=="off"){eval(m+result+'.set({dps: 1, set: false})');eval(m+result+'.set({dps: 20, set: false})')}  
    if(data.verifdomo=="disconect"){ device.disconnect();}
    //eval(m+result+".get({schema: true}).then(dataa => console.log(dataa))")
    //device8.on('dp-refresh', data => {console.log('DP_REFRESH data from device: ', data);})  
   // device8.on('data', data => {console.log('Data from device:222', data);})
})();

}catch(err){console.log(err);return false}
}