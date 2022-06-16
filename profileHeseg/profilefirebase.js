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



onAuthStateChanged(auth,async(user)=>{
  if(user)
  {
    console.log(user.uid);
    const userUid=user.uid;  
    console.log(auth.currentUser.uid)
         if(auth.currentUser.uid===userUid)
            {
              console.log('true');

                ///huvihunesehiig shalgana
              const  huviHunEseh=await getDocs(collection(db,"huviHun"));
              
              /////baiguulaga esehiig shalgana
              const baiguulagaEseh=await getDocs(collection(db,"baiguulaga"));
            


              ///baiguulaga bol baiguulaga collection ruu oroj datagaa avna
              baiguulagaEseh.forEach(async(baiguulaga)=>{
              console.log(baiguulaga.data(),"hellobaiguulaga")
                    if(baiguulaga.data().userUid===userUid){
                      ///huvihunii ovog ner alga bolno
                      document.get
                      alert("baiguulaga");
                          //    //hereglegciin ner medeelel soligdono
                          const ner=document.getElementById("hereglegcNer").innerText=baiguulaga.data().baiguulaganer;
                          const proEmail=document.getElementById("proEmail").innerText=baiguulaga.data().email;
                          const proNiitMod=document.getElementById("proNiitMod").innerText=baiguulaga.data().niitmod;


                          ///albanBaiguulaga modnii medeelelee profilaar avah
                          const baiguulagagetMiniiTarisanModooAvah= await getDocs(collection(db,"huviHun",userUid,"miniitarisanmodnuud"));
                          baiguulagagetMiniiTarisanModooAvah.forEach(async(modniiMedeelel)=>{
                          let modniiList='';
                          modniiList=`
                        <div class="modnuud">
                              <div class="modniiZurag"></div>
                              <div class="modniiTuhai">
                                    <p class="HaanaTariv">${modniiMedeelel.data().bairshil}</p>
                                    <p class="HedenShirheg">${modniiMedeelel.data().tooShirheg} ширхэг</p>
                                    <p class="hezee">${modniiMedeelel.data().HezeeTarisan} </p>
                                    <p class="YmarMod">${modniiMedeelel.data().modniitorol }</p>
                              </div>
                        </div>
                        `;
                        modContainer.innerHTML+=modniiList;
                        })
                    }
     })
     ///huvihun bol huvi collection ruu oroj datagaa avna
     huviHunEseh.forEach(async(huviHun)=>{
       console.log(huviHun.data().userUid);
                if(huviHun.data().userUid===userUid)
                {
                alert("huviHun");
                  //hereglegciin ner medeelel soligdono
                  const ner=document.getElementById("hereglegcNer").innerText=huviHun.data().ner;
                  const proOvog=document.getElementById("proOvog").innerText=huviHun.data().ovog;
                  const proNer=document.getElementById("proNer").innerText=huviHun.data().ner;
                  const proEmail=document.getElementById("proEmail").innerText=huviHun.data().email;
                  const proNiitMod=document.getElementById("proNiitMod").innerText=huviHun.data().niitmod;
                  const modContainer=document.getElementsByClassName('suuliinUyiinMedeelel')[0];
                  const huvihungetMiniiTarisanModooAvah= await getDocs(collection(db,"huviHun",userUid,"miniitarisanmodnuud"));

                  //huviHun modnii medeelelee profilaar avah
                  huvihungetMiniiTarisanModooAvah.forEach(async(modniiMedeelel)=>{
                  let modniiList='';
                  modniiList=`
                  <div class="modnuud">
                        <div class="modniiZurag"></div>
                        <div class="modniiTuhai">
                              <p class="HaanaTariv">${modniiMedeelel.data().bairshil}</p>
                              <p class="HedenShirheg">${modniiMedeelel.data().tooShirheg} ширхэг</p>
                              <p class="hezee">${modniiMedeelel.data().HezeeTarisan} </p>
                              <p class="YmarMod">${modniiMedeelel.data().modniitorol }</p>
                        </div>
                  </div>
                  `;
                  modContainer.innerHTML+=modniiList;
                  })
                  
              }
     })
   }
  }
})




onAuthStateChanged(auth,async(user)=>{
 
  if(user)
  {
    console.log("hello1");
    const userUid=user.uid; 
    if(auth.currentUser.uid===userUid);
    {
        console.log("adilhan baina");
        ///huvihunesehiig shalgana
        const  huviHunEseh=await getDocs(collection(db,"huviHun"));
        huviHunEseh.forEach(async(huviHun)=>{
         if(huviHun.data().Uid===userUid){
              console.log('huviHunbain')
         }
        })
            
        /////baiguulaga esehiig shalgana
        const baiguulagaEseh=await getDocs(collection(db,"baiguulaga"));
      
    }
  }
})

 //medeelel avah mod Nemeh


const medeelelDamjuulah=async()=>{

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
    const miniitarisanmodnuudCollectionHuviHun=collection(db,"huviHun",currentUserUid,"miniitarisanmodnuud");
    console.log(huviHunOrBaiguulaga,albanBaiguulagiinNer,bairshil,tooShirheg,HezeeTarisan,'modniiTorol',modniitorol)
    //hereglegciin tarisan modnuud minii tarisan modnuud collectiond documenteer orno
    const tarisanModniiMedeelel={bairshil:bairshil,HezeeTarisan:HezeeTarisan,tooShirheg:parseInt(tooShirheg),modniitorol:modniMedeelel}
    addDoc(miniitarisanmodnuudCollection,tarisanModniiMedeelel);
    const medeelelhesegtUIDTulgah= await getDocs(collection(db,"huviHun"));



  medeelelhesegtUIDTulgah.forEach(async(doc)=>{
    console.log(doc.data().userUid);
    if(doc.data().userUid===currentUserUid)  {
      console.log("heelo")
      addDoc(miniitarisanmodnuudCollection,tarisanModniiMedeelel);
      addDoc(miniitarisanmodnuudCollectionHuviHun,tarisanModniiMedeelel);
        ////hereglegciin Niitmod Nemegdenece\
        await setDoc(doc(db, "users", currentUserUid),{niitmod:increment(tooShirheg)},{merge:true})
      //    setDoc(doc(db,"users",'ssss'),{
      //   niitmod:increment(tooShirheg)
      // },{merge:true});
            //    setDoc(doc(db,"huviHun",currentUserUid),{
            //     niitmod:increment(tooShirheg)
            //   },{merge:true});
            //    setDoc(doc(db,'aimagDuurgeer',bairshil),{
            //     niitmod:increment(tooShirheg)
            //   },{merge:true});
            //   //////hereglegciin Modnuud Torlooroo MiniiTarisanModniiTorol gesen collectiond doc bolj orno
            //    setDoc(doc(db,"aimagDuurgeer",bairshil,"modniiToroloor",modniMedeelel),{
            //     niitmod:increment(tooShirheg)
            //   },{merge:true});
            // // modiiTorloor too nemegden
            //  setDoc(doc(db,"modniiTorloor",modniitorol),{
            //   niitmod:increment(tooShirheg)
            // },{merge:true});
            //   ///////////////////////////////////////////////////////////////////////////////////////
            // //jileer hadgalah
            //  setDoc(doc(db,"jilodroor",HezeeTarisan),{
            //   niitmod:increment(tooShirheg)
            // },{merge:true});
            // //tuhain odor ymar torliin modnuud tarigdsan hadgalna
            //  setDoc(doc(db,"jilodroor",HezeeTarisan,"modniiToroloor",modniMedeelel),{
            //   niitmod:increment(tooShirheg)
            // },{merge:true});
          //    addDoc(collection(db,"medee"),{
          //     HezeeTarisan:HezeeTarisan,
          //     Tarisanhayg:bairshil,
          //     tooShirheg:tooShirheg,
          //     modniitorol:modniitorol,
          //     modniiZurag:modniiZurag,
          //     modniiiDelgerengui:modniiiDelgerengui
          //     // medeelel:modniiiDelgerengui,
          //   });
          //   //modniitoo bugd nemegdene
          //    setDoc(doc(db,"niitmod","niitModToo"),{
          //     niitmod:increment(tooShirheg)
          //   },{merge:true})
          //    push(ref(realDb,"medee",),{
          //     HezeeTarisan:HezeeTarisan,
          //     Tarisanhayg:bairshil,
          //     tooShirheg:tooShirheg,
          //     modniitorol:modniitorol,
          //     modniiZurag:modniiZurag,
          //     modniiiDelgerengui:modniiiDelgerengui
          //   });
          }
  })


}





// // document.getElementById("garahProfile").addEventListener("click",signout)
// document.getElementById("burtguuleh").addEventListener("click",medeelelDamjuulah)
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

