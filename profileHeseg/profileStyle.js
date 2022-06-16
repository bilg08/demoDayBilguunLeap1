const modNemeh=document.getElementById("modnemeh");
console.log(modNemeh);
modNemeh.addEventListener('click',()=>{
    
     if(document.getElementById('modniiBurtgel').style.display='none'){
        document.getElementById('modniiBurtgel').style.display='flex';
    }
   
});

document.getElementById('burtgeleesGarah').addEventListener('click',()=>{
    document.getElementById('modniiBurtgel').style.display='none'
});
// document.getElementById('huvihun').addEventListener('click',()=>{
//     if(document.getElementById('ovogniiHeseg').style.display="none"){
//     document.getElementById('ovogniiHeseg').style.display="flex";
//      document.getElementById('nerniiHeseg').style.display="flex";

//     }
//     document.getElementById('baiguulagiinNerHeseg').style.display="none"
// })
// document.getElementById('baiguulaga').addEventListener('click',()=>{
//     if(document.getElementById('baiguulagiinNerHeseg').style.display="none"){
//         document.getElementById('baiguulagiinNerHeseg').style.display="flex"
//     }
//     document.getElementById('ovogniiHeseg').style.display="none";
//      document.getElementById('nerniiHeseg').style.display="none";                              
// })


