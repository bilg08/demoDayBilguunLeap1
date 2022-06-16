const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const advise = document.getElementById("advise");
const statistic = document.getElementById("statistic");
var close = document.getElementById("close-x");
const tt = document.getElementsByClassName("otherTree")[0];

let inputValue="";

    //  sing up garj ireh

function show1(){
    const modal = document.getElementsByClassName("signUp-modal")[0];
    console.log("j",modal);
    modal.style.display= 'block';
}

function toggle1(e){          
    console.log("toggle", e);
    e.parentElement.style.display = 'none'; 
}

    // sign in garj ireh


function show2(){
    const modal = document.getElementsByClassName("signIn-modal")[0];
    console.log("jj", modal);
    modal.style.display = 'block';
}
function toggle2(e){
    console.log("toggle2", e);
    e.parentElement.style.display = 'none'; 
}

    // advise garj ireh 

function show3(){
    const modal = document.getElementsByClassName("advise-modal")[0];
    console.log("jjj", modal);
    modal.style.display = 'block';
}
function toggle3(e){
    console.log("toggle3", e);
    e.parentElement.style.display = 'none'; 
}

    //statistic garj ireh

function show4(){
    const modal=document.getElementsByClassName("statistic-modal")[0];
    console.log("jjjj", modal);
    modal.style.display = 'block';
}
function toggle4(e){
    console.log("toggle3", e);
    e.parentElement.style.display = 'none'; 
}

// on car udur

const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element=document.querySelector('.date-picker .dates');
const mth_element=document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');
const months=['1 cap','2 cap','3 cap','4 cap','5 cap','6 cap','7 cap','8 cap','9 cap','10 cap','11 cap','12 cap',];

let date = new Date();
let day = date.getDate();
let month = date. getMonth();
let year = date. getFullYear();

let selectedDate = date;
let selectedDay =day;
let selectedMonth =month;
let selectedYear = year;

mth_element.textContent = months[month] + " " + year;
console.log(
    mth_element.textContent = months[month] + " " + year)

selected_date_element.textContent=formatDate(date);
selected_date_element.dataset.value=selectedDate;

populateDates();
date_picker_element.addEventListener('click',toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click',goToPrevMonth);
function toggleDatePicker (e){
    
    if(!checkEventPathForClass(e.path,'dates')){
        dates_element.classList.toggle('active');
    }
}
function goToNextMonth (e){
    console.log("ddddd")
    month++;
    if (month > 11){
        month = 0;
        year++;
    }
    mth_element.textContent = months[month] + " " + year;
    populateDates();
}
function goToPrevMonth (e){
    console.log(e)
    month--;
    if (month<0){
        month = 11;
        year--;
    }
    mth_element.textContent = months[month] + " "+ year;
    populateDates();
}
function populateDates (e){
    days_element.innerHTML = ' ';
    let amount_days=31;
    if (month == 1){
        amount_days =28;
    }
    if (month == 3 || month == 5 || month == 8 || month == 10 ){
        amount_days =30;
        console.log("sariin 30")
    }
    for (let i=0; i<amount_days; i++){
        const day_element = document.createElement('div');
        day_element.classList.add('day');
        day_element.textContent = i + 1;
        if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month){
            day_element.classList.add('selected');
        }
        day_element.addEventListener('click', function(){
            selectedDate = new Date (year + '-' + (month+1) + '-' + (i+1));
            selectedDay =i +1;
            selectedMonth =month;
            selectedYear =year;
            selected_date_element.textContent= formatDate(selectedDate);
            selected_date_element.dataset.value = selectedDate;
            populateDates();
        });
        days_element.appendChild(day_element);
    }
}

function checkEventPathForClass (path, selector){
    for(let i=0; i< path.length; i++){
        if (path[i].classList&& path[i].classList.contains(selector)){
            return true;
        }
    }
    return false;
}
function formatDate (d){
    let day = d.getDate();
    if (day < 10){
        day = '0' + day;
    }
    let month = d.getMonth()+1;
    if (month < 10){
        month = '0' + month;
    }
    let year = d.getFullYear();
    return year + " оны"+ " " +month+ " сарын" + " " + day;
}
// todo list xeseg
var close=document.getElementsByClassName("test");
   let w;
   var ch=document.getElementsByClassName("z")
   let r;
   let too=document.getElementById("countmod")
   
   document.getElementById("addBtn").addEventListener("click",function(){
       console.log("add button daragdlaa.")
       let li = document.createElement("li");
       if(document.getElementById("modniitorol").value === "бусад"){
        inputValue = document.getElementById("ooa").value;
       }else {
        inputValue = document.getElementById("modniitorol").value
       }
        console.log(inputValue);
       let inputCount=document.getElementById("counttree").value;
        let t = document.createTextNode(inputValue);
        let span = document.createElement("SPAN");
        let span1 = document.createElement("SPAN");
        let span2 = document.createElement("SPAN")
        let txt = document.createTextNode("\u00D7");
       
        let tiim =document.createTextNode("	\u221A")
        let dots=document.createTextNode(inputCount)
        console.log(inputCount)

        li.appendChild(t);
        if (inputCount == 0 || inputCount < 0) {
          alert("Тоогоо оруулна уу!");
        } else {
          document.getElementById("myUL").appendChild(li);
          li.appendChild(span);
          li.appendChild(span1)
          li.appendChild(span2)
          span.appendChild(txt)
          span1.appendChild(dots)
          span2.appendChild(t)

          span.className = "test";
          span1.className="tooShirheg"
          span2.className="modniiTorolNer"
         
          li.className="list";
          
        }
        let sum=0;
        for(let i of close){
            sum+=parseInt(i.parentElement.getElementsByClassName("tooShirheg")[0].innerText);
            i.addEventListener('click', ()=>{
            sum-= parseInt(i.parentElement.getElementsByClassName("tooShirheg")[0].innerText);
            i.parentElement.remove();
            updateSum(sum);
            });
         }
        updateSum(sum);
});
    function updateSum(sum){
        if(sum>0){
            document.getElementsByClassName("dropdownmod-tree")[0].style.display = "block";
        }else{
            document.getElementsByClassName("dropdownmod-tree")[0].style.display = "none";
        }
        too.innerText = sum;
    }
//    let close = document.querySelectorAll('.test');
//    console.log("x:", close);    

 
  function selectItem(el){
      if(el.value === "бусад"){
       tt.style.display = "block";
      }else {
        tt.style.display = "none";
      }
     
  }


  ///////firebase
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
  const auth=getAuth(app);
  const db=getFirestore(app);
  const realDb=getDatabase(app);

// ********************************************************************************************************** //
onAuthStateChanged(auth,async(user)=>{
                    
                        if(user)
                        {
                        console.log("hello1");
                        
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
                                console.log(huviHun.data().userUid,userUid)
                            if(huviHun.data().userUid===userUid){
                                    alert('huviHunbain');
                                    //  const bairshil=document.getElementById('bairshil').value;
                                    //  const tooShirheg=parseInt(document.getElementById('countmod').innerText);
                                    //  const HezeeTarisan=document.getElementsByClassName('selected-date')[0].innerText;
                                    //  const modniitorol=document.getElementById('modniitorol').value;
                                    //  const modniiiDelgerengui=document.getElementById("description").value;
                                    //  console.log(bairshil,tooShirheg,HezeeTarisan,modniitorol,modniiiDelgerengui)
                            }
                            });




                            baiguulagaEseh.forEach(async(baiguulaga)=>{
                                console.log("baiguulaga",baiguulaga.data().userUid,userUid);
                                if(baiguulaga.data().userUid===userUid){
                                    alert('baiguulagabain');

                                    
                                //  const bairshil=document.getElementById('bairshil').value;
                                //  const tooShirheg=parseInt(document.getElementById('countmod').innerText);
                                //  const HezeeTarisan=document.getElementsByClassName('selected-date')[0].innerText;
                                //  const modniitorol=document.getElementById('modniitorol').value;
                                //  const modniiiDelgerengui=document.getElementById("description").value;
                                //  console.log(bairshil,tooShirheg,HezeeTarisan,modniitorol,modniiiDelgerengui)
                            }
                            })
                    
                            
                        }
                        }
});
// ********************************************************************************************************** //
document.getElementById("registrationButton").addEventListener("click",async()=>{

            const listModHaruulah=document.getElementsByClassName("list");
            const listModniiNer=document.getElementsByClassName("modniiTorolNer");
            //Тухайн төрөл модны тоо ширхэг
            const torolModniiToo=document.getElementsByClassName("tooShirheg");
            // console.log(listModHaruulah,listModniiNer);
        let bairshil=document.getElementById('bairshil').value;
        // Бүх модны нийлбэр
        let tooShirheg=parseInt(document.getElementById('countmod').innerText);
        let HezeeTarisan=document.getElementsByClassName('selected-date')[0].innerText;
        let modniitorol=document.getElementById('modniitorol').value;
        let modniiiDelgerengui=document.getElementById("description").value;
            console.log(bairshil,tooShirheg,HezeeTarisan,modniitorol,modniiiDelgerengui);
            


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
                    //baiguulaga esehiig shalgana
                    const  baiguulagaEseh=await getDocs(collection(db,"baiguulaga"));

                    
                    huviHunEseh.forEach(async(huviHun)=>{
                        console.log(huviHun.data().userUid,userUid)
                    if(huviHun.data().userUid===userUid){
                            alert('huviHunbain');
                            //  const bairshil=document.getElementById('bairshil').value;
                            //  const tooShirheg=parseInt(document.getElementById('countmod').innerText);
                            //  const HezeeTarisan=document.getElementsByClassName('selected-date')[0].innerText;
                            //  const modniitorol=document.getElementById('modniitorol').value;
                            //  const modniiiDelgerengui=document.getElementById("description").value;
                            //  console.log(bairshil,tooShirheg,HezeeTarisan,modniitorol,modniiiDelgerengui)
                    }
                    });




                    baiguulagaEseh.forEach(async(baiguulaga)=>{
                        // console.log("baiguulaga",baiguulaga.data().userUid,userUid);
                        
                        if(baiguulaga.data().userUid===userUid){
                             const tarisanModTorloor=await collection(db,"users",baiguulaga.data().userUid,"tarisanModTorloor")
                            console.log(tarisanModTorloor)
                            alert('baiguulagabain');
                           //////Тухайн байгуулагын нийт мод нэмэгдэнэ/// UID гаар нэмэгдэнэ
                           await setDoc(doc(db,"baiguulaga",userUid),{
                                niitmod:increment(tooShirheg)
                            },{merge:true});
                            ///////Тухайн байгуулагын users collection  байгаа учраас users collection-nd uid гаар нь нэмэгдэнэ
                           await setDoc(doc(db,"users",userUid),{
                                niitmod:increment(tooShirheg)
                            },{merge:true});

                           await setDoc(doc(db,'aimagduurgeer',bairshil),{
                                    niitmod:increment(tooShirheg)
                                  },{merge:true});
                          await setDoc(doc(db,"aimagduurgeer","MongolNiitModTorloor"),{
                              niitmod:increment(tooShirheg)
                          },{merge:true});
                          await setDoc(doc(db,"jilOdroor","niitmod"),{
                              niitmod:increment(tooShirheg)
                          })

                                //////hereglegciin Modnuud Torlooroo MiniiTarisanModniiTorol gesen collectiond doc bolj orno Давталтаар авж байгаа модны төрлөөр doc үүсгэнэ
                                //////Бас Монгол болон аймгийн моднууд төрөл төрлөөрөө нэмэгдэнэ
                                for(let i=0;i<listModniiNer.length;i++)
                                {
                                  
                                    await setDoc(doc(db,"baiguulaga",baiguulaga.data().userUid,"modniiTorloor",listModniiNer[i].innerText,),{
                                    niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});
                                    
                                    await setDoc(doc(db,"aimagduurgeer","MongolNiitModTorloor","modniiTorloor",listModniiNer[i].innerText,),{
                                        niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                        },{merge:true});
                                        
                                    await setDoc(doc(db,"aimagduurgeer",bairshil,"modniiTorloor",listModniiNer[i].innerText,),{
                                    niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});
                                    
                                    await setDoc(doc(db,"users",baiguulaga.data().userUid,"modniiTorloor",listModniiNer[i].innerText,),{
                                    niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});  

                                    await setDoc(doc(db,"jilOdroor",HezeeTarisan,"modniiTorloor",listModniiNer[i].innerText,),{
                                        niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                        },{merge:true}); 
                                    await setDoc(doc(db,"modniiTorloor",listModniiNer[i].innerText),{
                                        niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});
                                    
                                  
                            }
                           
                            
                           
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



                            location.reload();
                                // setDoc(doc(db,"aimagDuurgeer",bairshil,"modniiToroloor",modniMedeelel),{
                                //     niitmod:increment(tooShirheg)
                                // },{merge:true});
                        //  const bairshil=document.getElementById('bairshil').value;
                        //  const tooShirheg=parseInt(document.getElementById('countmod').innerText);
                        //  const HezeeTarisan=document.getElementsByClassName('selected-date')[0].innerText;
                        //  const modniitorol=document.getElementById('modniitorol').value;
                        //  const modniiiDelgerengui=document.getElementById("description").value;
                        //  console.log(bairshil,tooShirheg,HezeeTarisan,modniitorol,modniiiDelgerengui)
                    }
                })
                
                
                    
                }
                }
});
            //  for(let i=0;i<listModHaruulah.length;i++)
            // {
            //     console.log(listModniiNer[i].innerText,torolModniiToo[i].innerText);
            //     tarisanModnuud.push()
            // }
            // location.reload();     
})

