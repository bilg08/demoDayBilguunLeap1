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
// var close=document.getElementsByClassName("test");
//    let w;
//    var ch=document.getElementsByClassName("z")
//    let r;
//    let too=document.getElementById("countmod")
   
//    document.getElementById("addBtn").addEventListener("click",function(){
//        console.log("add button daragdlaa.")
//        let li = document.createElement("li");
//        if(document.getElementById("tree").value === "бусад"){
//         inputValue = document.getElementById("oo").value
//        }else {
//         inputValue = document.getElementById("tree").value
//        }
//         console.log(inputValue);
//        let inputCount=document.getElementById("counttree").value;
//         let t = document.createTextNode(inputValue);
//         let span = document.createElement("SPAN");
//         let span1 = document.createElement("SPAN");
//         let span2 = document.createElement("SPAN")
//         let txt = document.createTextNode("\u00D7");
       
//         // let tiim =document.createTextNode("	\u221A")
//         let dots=document.createTextNode(inputCount)
//         console.log(inputCount)

//         li.appendChild(t);
//         if (inputCount == 0 || inputCount < 0) {
//           alert("Тоогоо оруулна уу!");
//         } else {
//           document.getElementById("myUL").appendChild(li);
//           li.appendChild(span);
//           li.appendChild(span1)
//           li.appendChild(span2)
//           span.appendChild(txt)
//           span1.appendChild(dots)
//           span2.appendChild(t)

//           span.className = "test";
//           span1.className="z"
//           span2.className="ner"
         
//           li.className="list"
       
//           console.log(inputValue);
//         }
//         let sum=0;
//         for(let i of close){
//             sum+=parseInt(i.parentElement.getElementsByClassName("z")[0].innerText);
//             i.addEventListener('click', ()=>{
//             sum-= parseInt(i.parentElement.getElementsByClassName("z")[0].innerText);
//             i.parentElement.remove();
//             updateSum(sum);
//             });
//          }
//         updateSum(sum);
// });
    function updateSum(sum){
        if(sum>0){
            document.getElementsByClassName("dropdownmod-tree")[0].style.display = "block";
        }else{
            document.getElementsByClassName("dropdownmod-tree")[0].style.display = "none";
        }
        too.innerText = sum;
    }
  //  let close = document.querySelectorAll('.test');
  //  console.log("x:", close);    

 
  function selectItem(el){
      if(el.value === "бусад"){
       tt.style.display = "block";
      }else {
        tt.style.display = "none";
      }
     
  }