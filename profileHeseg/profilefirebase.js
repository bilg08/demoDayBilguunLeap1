import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  increment,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import {
  getDatabase,
  onValue,
  ref,
  push,
  query,
  orderByChild,
  orderByKey,
  child,
  set,
  get,
  onChildChanged,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgYAy6FkKAJ2_0e07Xh8LhzYOpP1ra9Q8",
  authDomain: "demo1-1ee9d.firebaseapp.com",
  databaseURL: "https://demo1-1ee9d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demo1-1ee9d",
  storageBucket: "demo1-1ee9d.appspot.com",
  messagingSenderId: "247353066341",
  appId: "1:247353066341:web:4b8f133a68a3d85679578c",
  measurementId: "G-5N6BTMR62T"
};

const app = initializeApp(firebaseConfig);
const auth = await getAuth(app);
const db=getFirestore(app);
const realDb=getDatabase(app);



onAuthStateChanged(auth,(user)=>{
  if(user)
  {
    console.log(user.uid);
    const userUid=user.uid;  
   console.log(auth.currentUser.uid)
   if(auth.currentUser.uid===userUid)
   {
     console.log('true');
     getDoc(doc(db,"users",userUid)).then((res)=>{
            console.log(res.data())
       //hereglegciin ner medeelel soligdono
      //  const ner=document.getElementById("hereglegcNer").innerText=res.data().ner;
      //  const proOvog=document.getElementById("proOvog").innerText=res.data().ovog;
      //  const proNer=document.getElementById("proNer").innerText=res.data().ner;
      //  const proEmail=document.getElementById("proEmail").innerText=res.data().email;
      //  const proNiitMod=document.getElementById("proNiitMod").innerText=res.data().niitmod;
      //  const proniiNiitMod=document.getElementById("niitModPro").innerText=res.data().niitmod;
     
     }).catch((err)=>{
       console.log('err',err)
     })
   }
  }else{
    console.log('hallo')
  }
})

// onAuthStateChanged(auth,async(user)=>{
 
  if(user)
  {
    console.log("hello1");
    const userUid=user.uid; 
    if(auth.currentUser.uid===userUid)
    {
      console.log(true);
      const getCollectionDoc= await getDocs(collection(db,"users",userUid,"miniitarisanmodnuud"));
      getCollectionDoc.forEach(async(doc)=>{
        
        const modContainer=document.getElementsByClassName('suuliinUyiinMedeelel')[0];
        let modniiList='';
         modniiList=`
        <div class="modnuud">
              <div class="modniiZurag"></div>
              <div class="modniiTuhai">
                    <p class="HaanaTariv">${doc.data().bairshil}</p>
                    <p class="HedenShirheg">${doc.data().tooShirheg} ширхэг</p>
                    <p class="hezee">${doc.data().HezeeTarisan} </p>
                    <p class="YmarMod">${doc.data().modniitorol }</p>
              </div>
        </div>
        `;
        modContainer.innerHTML+=modniiList;
      })
    }
  }


//medeelel avah
let id=0;

const medeelelDamjuulah=async()=>{
  id++;
  console.log(id)
  const user = auth.currentUser;
  const currentUserUid=user.uid;
  console.log(user.email,currentUserUid,user)
  const huviHunOrBaiguulaga=document.getElementById('huviHunOrBaiguulaga').value;
  const albanBaiguulagiinNer=document.getElementById('baiguulagaNer').value;
  const bairshil=document.getElementById('aimagDuureg').value;
  const tooShirheg=parseInt(document.getElementById('counttree').value);
  const HezeeTarisan=document.getElementsByClassName('selected-date')[0].innerText;
  const modniitorol=document.getElementById('tree').value;
  const modniiiDelgerengui=document.getElementById("description").value;
  const modniiZurag="https://president.mn/wp-content/uploads/2022/05/Darkhan.jpg";
  let modniMedeelel=modniitorol;
  const miniitarisanmodnuudCollection=collection(db,"users",currentUserUid,"miniitarisanmodnuud");
  console.log(huviHunOrBaiguulaga,albanBaiguulagiinNer,bairshil,tooShirheg,HezeeTarisan,'modniiTorol',modniitorol)
  //hereglegciin tarisan modnuud minii tarisan modnuud collectiond documenteer orno
  const tarisanModniiMedeelel={bairshil:bairshil,HezeeTarisan:HezeeTarisan,tooShirheg:parseInt(tooShirheg),modniitorol:modniMedeelel}
  await addDoc(miniitarisanmodnuudCollection,tarisanModniiMedeelel);
  // MongolNiitModniiToo=MongolNiitModniiToo+parseFloat(tooShirheg);
  // console.log(MongolNiitModniiToo)
  //////////////////////////////////////////////////////////////////////////////////

  ////hereglegciin Niitmod Nemegdene
  await setDoc(doc(db,"users",currentUserUid,),{
    niitmod:increment(tooShirheg)
  },{merge:true});
  await setDoc(doc(db,'aimagDuurgeer',bairshil),{
    niitmod:increment(tooShirheg)
  },{merge:true});
  //////hereglegciin Modnuud Torlooroo MiniiTarisanModniiTorol gesen collectiond doc bolj orno
  await setDoc(doc(db,"aimagDuurgeer",bairshil,"modniiToroloor",modniMedeelel),{
    niitmod:increment(tooShirheg)
  },{merge:true});
// modiiTorloor too nemegden
await setDoc(doc(db,"modniiTorloor",modniitorol),{
  niitmod:increment(tooShirheg)
},{merge:true});
  ///////////////////////////////////////////////////////////////////////////////////////
//jileer hadgalah
await setDoc(doc(db,"jilodroor",HezeeTarisan),{
  niitmod:increment(tooShirheg)
},{merge:true});
//tuhain odor ymar torliin modnuud tarigdsan hadgalna
await setDoc(doc(db,"jilodroor",HezeeTarisan,"modniiToroloor",modniMedeelel),{
  niitmod:increment(tooShirheg)
},{merge:true});
await addDoc(collection(db,"medee"),{
  HezeeTarisan:HezeeTarisan,
  Tarisanhayg:bairshil,
  tooShirheg:tooShirheg,
  modniitorol:modniitorol,
  modniiZurag:modniiZurag,
  modniiiDelgerengui:modniiiDelgerengui
  // medeelel:modniiiDelgerengui,
});
//modniitoo bugd nemegdene
await setDoc(doc(db,"niitmod","niitModToo"),{
  niitmod:increment(tooShirheg)
},{merge:true})
await push(ref(realDb,"medee",),{
  HezeeTarisan:HezeeTarisan,
  Tarisanhayg:bairshil,
  tooShirheg:tooShirheg,
  modniitorol:modniitorol,
  modniiZurag:modniiZurag,
  modniiiDelgerengui:modniiiDelgerengui
});

}




// garah
const signout=async()=>{
await signOut(auth)
.then((user)=>{
  console.log("garlaa");
  alert('garlaa')
  console.log(auth,user);
  window.location.href = "login.html";
})
.catch((err)=>{
  console.log(err.message);
})
}
// document.getElementById("garahProfile").addEventListener("click",signout)
document.getElementById("burtguuleh").addEventListener("click",medeelelDamjuulah)
// // document.getElementById('burtguuleh').addEventListener('click',createUser);
// // document.getElementById("nevtreh").addEventListener("click",login);


// // const burtguulehButton=document.querySelector(".burtguulehUg");
// // burtguulehButton.addEventListener("click",()=>{
// // document.querySelector(".nevtrehHeseg").style.display="none";
// // document.querySelector(".burtguulehHeseg").style.display="block";
// // });
// // const nevtrehruuButsah=document.querySelector("#nevtrehButsah");
// // nevtrehruuButsah.addEventListener("click",()=>{
// // document.querySelector(".burtguulehHeseg").style.display="none";
// // document.querySelector(".nevtrehHeseg").style.display="block";
// // })

