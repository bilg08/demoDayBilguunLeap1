




import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

   import {
       getStorage,ref as sRef,
       uploadBytes ,
       uploadBytesResumable
    } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

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


let miniiModniiTorliinNer=[];
let miniiModniiTorliinToo=[];
let backgroundColor=[];
      const app = initializeApp(firebaseConfig);
      const auth=getAuth(app);
      const db=getFirestore(app);
      const realDb=getDatabase(app);
      const storage = getStorage(app);
      onAuthStateChanged(auth,async(user)=>{
             
        if(user)
        {
        console.log("hello1");
        document.getElementById("nevtreh").style.display='none';
        document.getElementById("garah").style.display="block"
        const userUid=user.uid;
        console.log(userUid,auth.currentUser.uid)
        if(auth.currentUser.uid===userUid);
        {
            console.log("adilhan baina");
            ///huvihunesehiig shalgana
            const  huviHunEseh=await getDocs(collection(db,"huviHun"));
            //baiguulaga esehiig shalgana
            const  baiguulagaEseh=await getDocs(collection(db,"baiguulaga"));

           
            huviHunEseh.forEach(async(huviHun)=>{
                console.log(huviHun.data(),userUid);
                
            if(huviHun.data().userUid===userUid){
                          await console.log("huviHun",huviHun.data());
                          document.getElementById("ner").innerText=huviHun.data().ner;
                          document.getElementById("email").innerText=huviHun.data().email;
                          document.getElementById("proNiitMod").innerText=huviHun.data().niitmod;
                          
                         const miniitarisanmodnuud=await getDocs(collection(db,"huviHun",userUid,"modniiTorloor"));
                         miniitarisanmodnuud.forEach(async(modTorol)=>{
                             await console.log(modTorol.id);
                             await miniiModniiTorliinNer.push(modTorol.id);
                             await miniiModniiTorliinToo.push(modTorol.data().niitmod);
                             await console.log(miniiModniiTorliinToo[0]);
                              for(let i=0;i<miniiModniiTorliinNer.length;i++)
                             {
                                const randomColor=Math.floor(Math.random()*16777215).toString(16);
                                const randomColorCode="#"+randomColor;
                                backgroundColor.push(randomColorCode)
                             }
                             const myChart = new Chart(ctx, {
                                type: 'doughnut',
                                data: {
                                    labels: miniiModniiTorliinNer,
                                    datasets: [{
                                        label: '# of Votes',
                                        data: miniiModniiTorliinToo,
                                        backgroundColor: backgroundColor,
                                        
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            
                                        ],
                                        borderWidth: 1
                                    }]
                                },
                                options: {
                                    scales: {
                                        y: {
                                            beginAtZero: true
                                        }
                                    }
                                }
                            });

                         })
                         

            }
            });


            baiguulagaEseh.forEach(async(baiguulaga)=>{
               
                if(baiguulaga.data().userUid===userUid){
                  console.log("baiguulaga",baiguulaga.data().userUid,userUid);
            }
            })
   
           
        }
        }
});



let TuruuAnimatiom=new TimelineLite();

     TuruuAnimatiom
     .fromTo(
          "#tomMod" ,  8 , {
               width: 0  + "%" , height:0  + "%" , bottom: 5 + "vh" 
          } , {
               width: 100 +"%", height: 90 + "%" ,bottom: 5 + "vh" 
          } , "-=1"
     )




const ctx = document.getElementById('myChart').getContext('2d');
document.getElementById("garah").addEventListener("click",()=>{
    const signout = async() =>{
        signOut(auth).then(async() => {
          await console.log("signed out")
         }).catch((error) => {
         });
 }
})