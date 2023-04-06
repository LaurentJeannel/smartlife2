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

var fs = require('fs');var d = fs.readFileSync('C:\\JarvisIA\\NodeJS\\programming.json', 'utf8');
var objet = JSON.parse(d);var longueur = objet.length;var jsonStr = JSON.stringify(objet)
var phrasedomo=JarvisIA.reco
var m="device";
phrasedomo=phrasedomo.replace(new RegExp("-","gi")," ");
console.log(phrasedomo,' reco ')
var pharsesplit=phrasedomo.split(' et ')
console.log(pharsesplit,' splittttt',data.verifdomo);

for (var a=0;a<JarvisIAPlugins['smartlife2'].length;a++){
    for(var v=0;v<JarvisIAPlugins['smartlife2'][a].length;v++){
      if(pharsesplit[0].indexOf(JarvisIAPlugins['smartlife2'][a][v])>-1){
           for (var x=0;x<JarvisIAPlugins['smartlife2'][a+1].length;x++){
               eval(JarvisIAPlugins['smartlife2'][a+1][x])
           }
           console.log(data)
      }
    }
}


try{
  if(countsmart===undefined){var countsmart=0}
  else{countsmart=countsmart+1}
  console.log(countsmart,' countsmart')
}catch(err){console.log(err,'sssssssss')}
//set_version(version)     #  3.1 [default], 3.2, 3.3 or 3.4
phrasedomo=pharsesplit[countsmart]

///
for(var i=0;i<objet.length;i++){
    var t=objet[i]['name']
    t=t.trim()
    if(phrasedomo.search(new RegExp(t,"gi"))>-1){var result=i;console.log("result = "+i)}
}
console.log(pharsesplit.length,'rrrrrrrrrrrrrrrr')

if((result ===undefined)&&(pharsesplit.length<2)){console.log('rien'); return false}
if((result ===undefined)&&(pharsesplit.length>1)){
  console.log('rien mais on continue')
  pharsesplit.splice(0,1)
    var t=""
      for (var x=0;x<pharsesplit.length;x++){
        t=t+pharsesplit[x]
        if(x<pharsesplit.length-1){t=t+" et "}
      }
    //setTimeout(function () {JarvisIaCall(JarvisIANom+" "+t);console.log('go go go')}, 500)
    JarvisIaCall(JarvisIANom+" "+t)
    console.log('go go go')
  return false
}
/////////////////////////////////////////

(async () => {

  var dataDPSonoff="0"
  var m="device"
  await eval(m+result+".get({schema: true}).then(datab => {datadomo=datab;console.log(datab)})");
  if(datadomo.dps[5]!==undefined){ red='ff01000000ffff'; green='23ff00006fffff'; blue='01001c00f3fe19'}else{ red='000003e803e8'; green='007803e803e8'; blue='00f003e803e8'}
  if(datadomo.dps[1]!==undefined){dataDPSonoff="1"}else{dataDPSonoff="20"}

  console.log("valeur on off : "+dataDPSonoff)
  console.log(m+result)

  var scene=data.scene
  var sceneval=data.sceneval
   
  if (data.verifdomo=="vérif"){console.log(datadomo.dps[1],datadomo.dps[20])}

  if((data.verifdomo=="mode")&&(datadomo.dps['1']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'1': true,'2' : scene,'6':sceneval}}).then(() => console.log('device was flash mode'))  };
  if((data.verifdomo=="mode")&&(datadomo.dps['20']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'20': true,'21' : scene,'25':sceneval}}).then(() => console.log('device was flash mode'))  };
    
  if((phrasedomo.search(new RegExp("vert","gi"))>-1)&&(datadomo.dps['1']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'1': true,'2' : 'colour' , '5': green}}).then(() => console.log("device was green"))  };
  if((phrasedomo.search(new RegExp("vert","gi"))>-1)&&(datadomo.dps['1']==undefined)){
    await eval(m+result).set({multiple: true,data: {'20': true,'21' : 'colour' , '24': green}}).then(() => console.log("device was green"))  };
    
  if((phrasedomo.search(new RegExp("rouge","gi"))>-1)&&(datadomo.dps['1']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'1': true,'2' : 'colour' , '5': red}}).then(() => console.log("device was red"))  };
  if((phrasedomo.search(new RegExp("rouge","gi"))>-1)&&(datadomo.dps['1']==undefined)){
    await eval(m+result).set({multiple: true,data: {'20': true,'21' : 'colour' , '24': red}}).then(() => console.log("device was red"))  };
    
  if((phrasedomo.search(new RegExp("bleu","gi"))>-1)&&(datadomo.dps['1']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'1': true,'2' : 'colour' , '5': blue}}).then(() => console.log("device blue"))  };
  if((phrasedomo.search(new RegExp("bleu","gi"))>-1)&&(datadomo.dps['1']==undefined)){
    await eval(m+result).set({multiple: true,data: {'20': true,'21' : 'colour' , '24': blue}}).then(() => console.log("device blue"))  };
    
  if((phrasedomo.search(new RegExp("blanc","gi"))>-1)&&(datadomo.dps['1']!==undefined)){
    await eval(m+result).set({multiple: true,data: {'1': true,'2' : 'white'}}).then(() => console.log("device was white"))  };
  if((phrasedomo.search(new RegExp("blanc","gi"))>-1)&&(datadomo.dps['1']==undefined)){
    await eval(m+result).set({multiple: true,data: {'20': true,'21' : 'white'}}).then(() => console.log("device was white"))  };
    
 
  if((data.verifdomo=="off")&&(datadomo.dps['20']!==undefined)){console.log("offffffffffffff");await eval(m+result).set({dps: '20', set: false})} 
  if((data.verifdomo=="off")&&(datadomo.dps['1']!==undefined)){console.log("device OFF");await eval(m+result).set({dps: '1', set: false})}

  if((data.verifdomo=="on")&&(datadomo.dps['1']!==undefined)){console.log("device ON");await eval(m+result).set({dps: '1', set: true})}
  if((data.verifdomo=="on")&&(datadomo.dps['20']!==undefined)){console.log("onnnnnnnnn");await eval(m+result).set({dps: '20', set: true})}
//await eval(m+result).disconnect()
eval(m+result).disconnect()
setTimeout(() => {  

  if(pharsesplit[countsmart+1]!==undefined){
    //await eval(m+result)+".disconnect()"
    console.log("                          disconnnect")
    pharsesplit.splice(0,1)
    var t=""
      for (var x=0;x<pharsesplit.length;x++){
        t=t+pharsesplit[x]
        if(x<pharsesplit.length-1){t=t+" et "}
      }
    //setTimeout(function () {JarvisIaCall(JarvisIANom+" "+t);console.log('go go go')}, 500)
    JarvisIaCall(JarvisIANom+" "+t)
    console.log('go go go')
  }

}, 500);


})();

}