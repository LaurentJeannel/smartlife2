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
}//init

///////////////

exports.action = (data)=>{

//console.log(JarvisIAPlugins)


var fs = require('fs');var d = fs.readFileSync('C:\\JarvisIA\\NodeJS\\programming.json', 'utf8');
var objet = JSON.parse(d);var longueur = objet.length;var jsonStr = JSON.stringify(objet)
var phrasedomo=JarvisIA.reco
var m="device";
phrasedomo=phrasedomo.replace(new RegExp("-","gi")," ");


console.log(phrasedomo,' reco ')
////
//counteursmart=0
//Mathilde allume la lumière de la salle de jeux et allume la lumière du billard et allume la LED Smart



var pharsesplit=phrasedomo.split(' et ')

console.log(pharsesplit,' splittttt',data.verifdomo);

//console.log(JarvisIAPlugins['smartlife2'][8],'ddd')


for (var a=0;a<JarvisIAPlugins['smartlife2'].length;a++){
    for(var v=0;v<JarvisIAPlugins['smartlife2'][a].length;v++){
        console.log(pharsesplit[0].indexOf(JarvisIAPlugins['smartlife2'][a][v]),JarvisIAPlugins['smartlife2'][a][v])
    

      if(pharsesplit[0].indexOf(JarvisIAPlugins['smartlife2'][a][v])>-1){
          console.log(a)
          console.log(JarvisIAPlugins['smartlife2'][a+1][0],'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
                       for (var x=0;x<JarvisIAPlugins['smartlife2'][a+1].length;x++){
                       eval(JarvisIAPlugins['smartlife2'][a+1][x])}
       console.log(data)
//for (var kk=0;kk<JarvisIAPlugins['smartlife2'][a].length;kk++){console.log('');console.log(temp[kk]," les datas");eval(temp[kk])}

     }}
  //eval(JarvisIAPlugins['smartlife2'][a][kk])}
}
//console.log(pharsesplit[0],'eeeeeeee')
//console.log(JarvisIAPlugins['smartlife2'].length)
//return

try{
  if(countsmart===undefined){var countsmart=0}
    else{countsmart=countsmart+1}
  console.log(countsmart,'rrrrrrrrrrrrrr')
//if(countsmart==pharsesplit.length-1){return}
  console.log('suiteeeeeeeeeeeee')
}catch(err){console.log(err,'sssssssss')}
//set_version(version)     #  3.1 [default], 3.2, 3.3 or 3.4
//JarvisIaCall(pharsesplit)
phrasedomo=pharsesplit[countsmart]




///
for(var i=0;i<objet.length;i++){
    var t=objet[i]['name']
    t=t.trim()
    if(phrasedomo.search(new RegExp(t,"gi"))>-1){var result=i;console.log("result = "+i)}
}

if(result ===undefined){console.log('rien'); return false}


//const TuyAPI = require('tuyapi');

//var device = new TuyAPI({
  //id: objet[result]['id'],
    //key: objet[result]['key']});


(async () => {

    var dataDPSonoff="0"
    var m="device"
await eval(m+result+".get({schema: true}).then(datab => {datadomo=datab;console.log(datab)})");
if(datadomo.dps[5]!==undefined){ red='ff01000000ffff'; green='23ff00006fffff'; blue='01001c00f3fe19'}else{ red='000003e803e8'; green='007803e803e8'; blue='00f003e803e8'}

if(datadomo.dps[1]!==undefined){dataDPSonoff="1"}else{dataDPSonoff="20"}

 //console.log(datadomo)
//console.log(datadomo.dps[1])
console.log("valeur on off : "+dataDPSonoff)

  //; if(dataa.dps['1']==false){JarvisIASpeech('objet off')}; if(dataa.dps['1']==true){JarvisIASpeech('objet on')} })");
    //eval(m+result+".on('data', data => {console.log('Data from device:', data.dps);})")
    //eval(m+result+".on('dp-refresh', data => {console.log('DP_REFRESH data from device: ', data);})")

console.log(m+result)

var scene=data.scene
var sceneval=data.sceneval
   
   //if(phrasedomo.search(new RegExp("vert","gi"))>-1){await eval(m+result).set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "23ff00006fffff"}}).then(() => console.log("device was changed"));device7.disconnect();return false}
   if (data.verifdomo=="vérif"){console.log(datadomo.dps[1],datadomo.dps[20])}
   if((data.verifdomo=="mode")&&(datadomo.dps['1']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'1': true,'2' : scene,'6':sceneval}}).then(() => console.log('device was flash mode')); await eval(m+result).disconnect();return false
  };
   if((data.verifdomo=="mode")&&(datadomo.dps['20']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'20': true,'21' : scene,'25':sceneval}}).then(() => console.log('device was flash mode')); await eval(m+result).disconnect();return false
  };
    
  if((phrasedomo.search(new RegExp("vert","gi"))>-1)&&(datadomo.dps['1']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'1': true,'2' : 'colour' , '5': green}}).then(() => console.log("device was green")); await eval(m+result).disconnect();return false
  };
  if((phrasedomo.search(new RegExp("vert","gi"))>-1)&&(datadomo.dps['1']==undefined)){
    await eval(m+result).set({multiple: true,data: {'20': true,'21' : 'colour' , '24': green}}).then(() => console.log("device was green")); await eval(m+result).disconnect();return false
  };
    
  if((phrasedomo.search(new RegExp("rouge","gi"))>-1)&&(datadomo.dps['1']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'1': true,'2' : 'colour' , '5': red}}).then(() => console.log("device was red")); await eval(m+result).disconnect();return false
  };
  if((phrasedomo.search(new RegExp("rouge","gi"))>-1)&&(datadomo.dps['1']==undefined)){
    await eval(m+result).set({multiple: true,data: {'20': true,'21' : 'colour' , '24': red}}).then(() => console.log("device was red")); await eval(m+result).disconnect();return false
  };
    
  if((phrasedomo.search(new RegExp("bleu","gi"))>-1)&&(datadomo.dps['1']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'1': true,'2' : 'colour' , '5': blue}}).then(() => console.log("device blue")); await eval(m+result).disconnect();return false};
  if((phrasedomo.search(new RegExp("bleu","gi"))>-1)&&(datadomo.dps['1']==undefined)){
    await eval(m+result).set({multiple: true,data: {'20': true,'21' : 'colour' , '24': blue}}).then(() => console.log("device blue")); await eval(m+result).disconnect();return false
  };
    
  if((phrasedomo.search(new RegExp("blanc","gi"))>-1)&&(datadomo.dps['1']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'1': true,'2' : 'white'}}).then(() => console.log("device was white")); await eval(m+result).disconnect();return false
  };
  if((phrasedomo.search(new RegExp("blanc","gi"))>-1)&&(datadomo.dps['1']==undefined)){
    await eval(m+result).set({multiple: true,data: {'20': true,'21' : 'white'}}).then(() => console.log("device was white")); await eval(m+result).disconnect();return false
  };
    
  //if((data.verifdomo=="on")&&(datadomo.dps['1']!==undefined)){console.log("onnnnnnnnn");await eval(m+result)+".set({dps: '1', set: true});"+eval(m+result)+".disconnect();return false"}
   // if((data.verifdomo=="on")&&(datadomo.dps['1']==undefined)){console.log("onnnnnnnnn");await device.set({dps: '20', set: true}); device.disconnect();return false}
    
    //if((data.verifdomo=="off")&&(datadomo.dps['1']!==undefined)){console.log("offffffffffffff");await device.set({dps: '1', set: false}); device.disconnect();return false} 
    //if((data.verifdomo=="off")&&(datadomo.dps['1']==undefined)){console.log("offffffffffffff");await device.set({dps: '20', set: false}); device.disconnect();return false} 
if((data.verifdomo=="off")&&(datadomo.dps['1']!==undefined)){console.log("device OFF");await eval(m+result).set({dps: '1', set: false});await eval(m+result).disconnect()}
if((data.verifdomo=="on")&&(datadomo.dps['1']!==undefined)){console.log("device ON");await eval(m+result).set({dps: '1', set: true});; await eval(m+result).disconnect()}

if(pharsesplit[countsmart+1]!==undefined){console.log('gooooooo')
    

eval(m+result)+".disconnect()"
console.log("disconnnect")
JarvisIaCall(JarvisIANom+" "+pharsesplit[countsmart+1])}
//if(phrasedomo.search(new RegExp("vert","gi"))>-1){eval( m+result+'.set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "23ff00006fffff"}}).then(() => console.log("device was changed"))');}
   









//    if(phrasedomo.search(new RegExp("vert","gi"))>-1){eval( m+result+'.set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "23ff00006fffff"}}).then(() => console.log("device was changed"))');}
 //   if(phrasedomo.search(new RegExp("rouge","gi"))>-1){eval( m+result+'.set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "ff01000000ffff"}}).then(() => console.log("device was changed"))');}
  //  if(phrasedomo.search(new RegExp("bleu","gi"))>-1){eval( m+result+'.set({multiple: true,data: {dataDPSonoff: true,"2" : "colour", "5": "01001c00f3fe19"}}).then(() => console.log("device was changed"))');}
    //if(phrasedomo.search(new RegExp("blanc","gi"))>-1){eval( m+result+'.set({multiple: true,data: {dataDPSonoff: true,"2" : "white"}}).then(() => console.log("device was changed"))');}
//    if(data.verifdomo=="on"){eval(m+result+'.set({dps: dataDPSonoff, set: true})')}
  //  if(data.verifdomo=="off"){eval(m+result+'.set({dps: dataDPSonoff, set: false})')}  
    //if(data.verifdomo=="disconect"){ device.disconnect();}
    


    //eval(m+result+".get({schema: true}).then(dataa => console.log(dataa))")
    //device8.on('dp-refresh', data => {console.log('DP_REFRESH data from device: ', data);})  
   // device8.on('data', data => {console.log('Data from device:222', data);})
})();

















return false

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

//if(dat.dps['1']!==undefined){ dataDPSonoff='1'}else{ dataDPSonoff='20'}
//if(dat.dps['2']!==undefined){ dataDPScolour='2'}else{ dataDPScolour='21'}
//if(dat.dps['5']!==undefined){ dataDPSrvb='5'}else{ dataDPSrvb='24'}

if(dat.dps['5']!==undefined){ red='ff01000000ffff'; green='23ff00006fffff'; blue='01001c00f3fe19'}else{ red='000003e803e8'; green='007803e803e8'; blue='00f003e803e8'}

//console.log(dataDPSonoff)
//console.log(dat.dps['1'],dat.dps[1])
//console.log(dataDPSrvb,'rrrrrrrrrrrrrr')
//dataDPSrvb='5'
  //'2': 'scene_3',  

var scene=data.scene
   
   if((data.verifdomo=="alerte")&&(dat.dps['1']!==undefined)){await device.set({multiple: true,data: {'1': true,'2' : scene}}).then(() => console.log("device was flash green")); device.disconnect();return false};
   if((data.verifdomo=="alerte")&&(dat.dps['20']!==undefined)){await device.set({multiple: true,data: {'20': true,'21' : scene}}).then(() => console.log("device was flash green")); device.disconnect();return false};
    

    if((phrasedomo.search(new RegExp("vert","gi"))>-1)&&(dat.dps['1']!==undefined)){await device.set({multiple: true,data: {'1': true,'2' : 'colour' , '5': green}}).then(() => console.log("device was green")); device.disconnect();return false};
    if((phrasedomo.search(new RegExp("vert","gi"))>-1)&&(dat.dps['1']==undefined)){await device.set({multiple: true,data: {'20': true,'21' : 'colour' , '24': green}}).then(() => console.log("device was green")); device.disconnect();return false};
    
    if((phrasedomo.search(new RegExp("rouge","gi"))>-1)&&(dat.dps['1']!==undefined)){await device.set({multiple: true,data: {'1': true,'2' : 'colour' , '5': red}}).then(() => console.log("device was red")); device.disconnect();return false};
    if((phrasedomo.search(new RegExp("rouge","gi"))>-1)&&(dat.dps['1']==undefined)){await device.set({multiple: true,data: {'20': true,'21' : 'colour' , '24': red}}).then(() => console.log("device was red")); device.disconnect();return false};
    
    if((phrasedomo.search(new RegExp("bleu","gi"))>-1)&&(dat.dps['1']!==undefined)){await device.set({multiple: true,data: {'1': true,'2' : 'colour' , '5': blue}}).then(() => console.log("device blue")); device.disconnect();return false};
    if((phrasedomo.search(new RegExp("bleu","gi"))>-1)&&(dat.dps['1']==undefined)){await device.set({multiple: true,data: {'20': true,'21' : 'colour' , '24': blue}}).then(() => console.log("device blue")); device.disconnect();return false};
    
    if((phrasedomo.search(new RegExp("blanc","gi"))>-1)&&(dat.dps['1']!==undefined)){await device.set({multiple: true,data: {'1': true,'2' : 'white'}}).then(() => console.log("device was white")); device.disconnect();return false};
    if((phrasedomo.search(new RegExp("blanc","gi"))>-1)&&(dat.dps['1']==undefined)){await device.set({multiple: true,data: {'20': true,'21' : 'white'}}).then(() => console.log("device was white")); device.disconnect();return false};
    
    if((data.verifdomo=="on")&&(dat.dps['1']!==undefined)){console.log("onnnnnnnnn");await device.set({dps: '1', set: true}); device.disconnect();return false}
    if((data.verifdomo=="on")&&(dat.dps['1']==undefined)){console.log("onnnnnnnnn");await device.set({dps: '20', set: true}); device.disconnect();return false}
    
    if((data.verifdomo=="off")&&(dat.dps['1']!==undefined)){console.log("offffffffffffff");await device.set({dps: '1', set: false}); device.disconnect();return false} 
    if((data.verifdomo=="off")&&(dat.dps['1']==undefined)){console.log("offffffffffffff");await device.set({dps: '20', set: false}); device.disconnect();return false} 

device.disconnect()

})();


  //console.log(`Boolean status of default property: ${data.dps['1']}.`);

  // Set default property to opposite
  
});
}