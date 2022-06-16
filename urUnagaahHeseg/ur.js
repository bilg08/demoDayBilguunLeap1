let tween=new TimelineLite();
let tween1=new TimelineLite();
let tween2=new TimelineLite();
let controller=new ScrollMagic.Controller();

function myFunction(x,y){
     if(x.matches){
          console.log("a")
          tween1.fromTo(".ur1",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:44+"%",left:7+"%"})
          .fromTo(".ur2",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:42+"%",left:16+"%"})
          .fromTo(".ur3",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:47+"%",left:16+"%"})
          .fromTo(".ur4",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:48+"%",left:25+"%"})
          .fromTo(".ur5",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:40+"%",left:27+"%"})
          .fromTo(".ur6",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:45+"%",left:36+"%"})
          .fromTo(".ur7",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:49+"%",left:50+"%"})
          .fromTo(".ur8",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:42+"%",left:45+"%"})
          .fromTo(".ur9",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:36.5+"%",left:40+"%"})
          .fromTo(".ur10",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:28+"%",left:37+"%"})
          .fromTo(".ur11",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:40+"%",left:67+"%"})
          .fromTo(".ur12",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:30+"%",left:45+"%"})
          .fromTo(".ur13",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:36.5+"%",left:53+"%"})
          .fromTo(".ur14",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:24+"%",left:53+"%"})
          .fromTo(".ur15",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:24.8+"%",left:56+"%"})
          .fromTo(".ur16",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:26+"%",left:55.5+"%"})
          .fromTo(".ur17",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:24+"%",left:68+"%"})
          .fromTo(".ur18",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:26+"%",left:75+"%"})
          .fromTo(".ur19",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:19+"%",left:78+"%"})
          .fromTo(".ur20",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:5+"px",height:5+"px",top:18+"%",left:49.5+"%"})
          .fromTo(".ur21",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:8+"px",height:8+"px",top:22+"%",left:62+"%"})
     }
      if(y.matches)
     {
                    console.log("hello")
          //           document.getElementsByClassName('urSmallcontainer')[0].style.width=400+"px";
          // document.getElementsByClassName('urSmallcontainer')[0].style.height=400+"px";
          tween1.fromTo(".ur1",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:44+"%",left:7+"%"})
          .fromTo(".ur2",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:42+"%",left:16+"%"})
          .fromTo(".ur3",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:47+"%",left:16+"%"})
          .fromTo(".ur4",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:50+"%",left:25+"%"})
          .fromTo(".ur5",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:42+"%",left:27+"%"})
          .fromTo(".ur6",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:45+"%",left:36+"%"})
          .fromTo(".ur7",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:52+"%",left:50+"%"})
          .fromTo(".ur8",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:43+"%",left:45+"%"})
          .fromTo(".ur9",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:36+"%",left:40+"%"})
          .fromTo(".ur10",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:25+"%",left:37+"%"})
          .fromTo(".ur11",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:42+"%",left:67+"%"})
          .fromTo(".ur12",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:28+"%",left:47+"%"})
          .fromTo(".ur13",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:30+"%",left:54+"%"})
          .fromTo(".ur14",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:22.5+"%",left:59+"%"})
          .fromTo(".ur15",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:12+"px",height:12+"px",top:21.5+"%",left:55.5+"%"})
          .fromTo(".ur16",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:32+"%",left:55+"%"})
          .fromTo(".ur17",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:23+"%",left:68+"%"})
          .fromTo(".ur18",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:25+"%",left:75+"%"})
          .fromTo(".ur19",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:15+"px",height:15+"px",top:18+"%",left:78+"%"})
          .fromTo(".ur20",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:12+"px",height:12+"px",top:15+"%",left:49.5+"%"})
          .fromTo(".ur21",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:12+"px",height:12+"px",top:22+"%",left:62.5+"%"})
     }

}
let x=window.matchMedia("only screen and (max-width:600px)");
let y=window.matchMedia("(min-width:820px)");

myFunction(x,y);
x.addListener(myFunction);
y.addListener(myFunction);
let scene=new ScrollMagic.Scene({
    triggerElement:".urBigContainer",
    duration:1000,
    triggerHook:0
    })
.setTween(tween1)
.addIndicators()
.setPin(".urBigContainer")
.addTo(controller);
///jijig modnuud urgadag HEseg


function myFunction1(x1,y1){
     if(x1.matches){
          console.log("a")
tween2.fromTo(".mod1",1,{width:0+"px",height:0+"px",top:44+"%",left:7+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:40+"px",height:40+"px",top:42+"%",left:5+"%"})
     .fromTo(".mod2",1,{width:0+"px",height:0+"px",top:42+"%",left:16+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:40+"px",height:40+"px",top:39+"%",left:14+"%"})
     .fromTo(".mod3",1,{width:0+"px",height:0+"px",top:47+"%",left:16+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:40+"px",height:40+"px",top:47+"%",left:13+"%"})
     .fromTo(".mod4",1,{width:0+"px",height:0+"px",top:50+"%",left:25+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:40+"px",height:40+"px",top:48+"%",left:22+"%"})
     .fromTo(".mod5",1,{width:0+"px",height:0+"px",top:46+"%",left:27+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:40+"px",height:40+"px",top:42+"%",left:23+"%"})
     .fromTo(".mod6",1,{width:0+"px",height:0+"px",top:50+"%",left:36+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:40+"px",height:40+"px",top:49+"%",left:32+"%"})
     .fromTo(".mod7",1,{width:0+"px",height:0+"px",top:49+"%",left:50+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:40+"px",height:40+"px",top:54+"%",left:45+"%"})
     .fromTo(".mod8",1,{width:0+"px",height:0+"px",top:42+"%",left:45+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:40+"px",height:40+"px",top:47+"%",left:42+"%"})
     .fromTo(".mod9",1,{width:0+"px",height:0+"px",top:36.5+"%",left:40+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:40.5+"%",left:35+"%"})
     .fromTo(".mod10",1,{width:0+"px",height:0+"px",top:28+"%",left:37+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:33+"%",left:32+"%"})
     .fromTo(".mod11",1,{width:0+"px",height:0+"px",top:40+"%",left:67+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:50+"%",left:64+"%"})
     .fromTo(".mod12",1,{width:0+"px",height:0+"px",top:30+"%",left:45+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:36+"%",left:41+"%"})
     .fromTo(".mod13",1,{width:0+"px",height:0+"px",top:36.5+"%",left:53+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:40+"%",left:46+"%"})
     .fromTo(".mod14",1,{width:0+"px",height:0+"px",top:24+"%",left:53+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:36.5+"%",left:53+"%"})
     .fromTo(".mod15",1,{width:0+"px",height:0+"px",top:24.8+"%",left:56+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:36.5+"%",left:53+"%"})
     .fromTo(".mod16",1,{width:0+"px",height:0+"px",top:26+"%",left:55.5+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:45+"%",left:49+"%"})
     .fromTo(".mod17",1,{width:0+"px",height:0+"px",top:24+"%",left:68+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:43+"%",left:58+"%"})
     .fromTo(".mod18",1,{width:0+"px",height:0+"px",top:26+"%",left:75+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:46+"%",left:73+"%"})
     .fromTo(".mod19",1,{width:0+"px",height:0+"px",top:19+"%",left:78+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:45+"%",left:78+"%"})
     .fromTo(".mod20",1,{width:0+"px",height:0+"px",top:18+"%",left:49.5+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:42+"%",left:49.5+"%"})
     .fromTo(".mod21",1,{width:0+"px",height:0+"px",top:22+"%",left:62+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:50+"px",height:50+"px",top:45+"%",left:56+"%"})
     }
      if(y1.matches)
     {
          console.log("hello");

          tween2.fromTo(".mod1",1,{width:0+"px",height:0+"px",top:40+"%",left:4+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:40+"%",left:4+"%"})
          .fromTo(".mod2",1,{width:0+"px",height:0+"px",top:42+"%",left:16+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:39+"%",left:16+"%"})
          .fromTo(".mod3",1,{width:0+"px",height:0+"px",top:47+"%",left:16+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:47+"%",left:14+"%"})
          .fromTo(".mod4",1,{width:0+"px",height:0+"px",top:50+"%",left:25+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:52+"%",left:25+"%"})
          .fromTo(".mod5",1,{width:0+"px",height:0+"px",top:42+"%",left:27+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:42+"%",left:25+"%"})
          .fromTo(".mod6",1,{width:0+"px",height:0+"px",top:45+"%",left:36+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:50+"%",left:33+"%"})
          .fromTo(".mod7",1,{width:0+"px",height:0+"px",top:52+"%",left:50+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:56+"%",left:48+"%"})
          .fromTo(".mod8",1,{width:0+"px",height:0+"px",top:43+"%",left:34+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:50+"%",left:42+"%"})
          .fromTo(".mod9",1,{width:0+"px",height:0+"px",top:36+"%",left:40+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:43+"%",left:36+"%"})
          .fromTo(".mod10",1,{width:0+"px",height:0+"px",top:25+"%",left:37+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:35+"%",left:37+"%"})
          .fromTo(".mod11",1,{width:0+"px",height:0+"px",top:42+"%",left:67+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:55+"%",left:63+"%"})
          .fromTo(".mod12",1,{width:0+"px",height:0+"px",top:28+"%",left:47+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:40+"%",left:44+"%"})
          .fromTo(".mod13",1,{width:0+"px",height:0+"px",top:30+"%",left:54+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:45+"%",left:54+"%"})
          .fromTo(".mod14",1,{width:0+"px",height:0+"px",top:22.5+"%",left:59+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:40+"%",left:52+"%"})
          .fromTo(".mod15",1,{width:0+"px",height:0+"px",top:21.5+"%",left:55.5+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:40+"%",left:54.5+"%"})
          .fromTo(".mod16",1,{width:0+"px",height:0+"px",top:32+"%",left:55+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:49.5+"%",left:55+"%"})
          .fromTo(".mod17",1,{width:0+"px",height:0+"px",top:23+"%",left:68+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:44+"%",left:65+"%"})
          .fromTo(".mod18",1,{width:0+"px",height:0+"px",top:25+"%",left:75+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:50+"%",left:75+"%"})
          .fromTo(".mod19",1,{width:0+"px",height:0+"px",top:18+"%",left:78+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:44+"%",left:78+"%"})
          .fromTo(".mod20",1,{width:0+"px",height:0+"px",top:15+"%",left:49.5+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:40+"%",left:49+"%"})
          .fromTo(".mod21",1,{width:0+"px",height:0+"px",top:2+"%",left:62.5+"%"},{borderTopRightRadius:100+"%",borderBottomLeftRadius:100+"%",width:56+"px",height:56+"px",top:47+"%",left:59.5+"%"})
     }
}
let x1=window.matchMedia("only screen and (max-width:600px)");
let y1=window.matchMedia("(min-width:820px)");
myFunction1(x1,y1);
x.addListener(myFunction);
y.addListener(myFunction);
let scene3=new ScrollMagic.Scene({
    triggerElement:".modUrgahContainer",
    duration:1000,
    triggerHook:0
    })
.setTween(tween2)
.addIndicators()
.setPin(".modUrgahContainer")
.addTo(controller);
//////// Tom Mod Urgadag HEseg
const tree=document.getElementsByClassName('tree')[0];
const clouds=document.getElementById("clouds")
const gazar = document.getElementsByClassName('gazar')[0];
const line  = document.querySelectorAll(".line");
const grass = document.getElementsByClassName("grass")[0];
const seed =document.getElementsByClassName("seed")[0]
const root =document.getElementsByClassName("root")[0]
for(let i = 0 ; i<line.length; i++){
     line[i].style.opacity = "0"
}
// const modanim2 = TweenMax.fromTo(".ur1" , 7 ,{left:5,top:5,width:10+"px",height:10+"px",borderRadius:10+"px"},{top:48 + "%",width:30+"px",height:30+"px",borderRadius:100+"px"})

const Turuu = tween
.fromTo(seed ,5 ,{bottom: 25+ "vh" , rotation:-180 , opacity:1},
               {bottom: 2 + "vh" ,   rotation:260,opacity:0})
.fromTo(root ,1 ,{opacity:0,bottom: 5+ "vh" , width: 2+ "%", height: 13+ "%"},
                 {opacity:1,bottom: 6+ "vh" , width: 15+ "%", height: 30+ "%"}, "-=3")


.fromTo(tree ,3,{opacity:0,} , {opacity:1,})
.fromTo(tree ,7,{width: 7+"%" ,height: 30+"%"},{width:30+"%",height:70+"%"} , "-=3")
.fromTo(root ,2 ,{opacity:1},
     {opacity:0} , "-=7")
.fromTo(".mainRoot" ,1 ,{opacity:0,} , {opacity:1,})
.from(line , 7 ,{opacity:1,} , {opacity:0,})


.from(grass , 10 ,{bottom: 0 + "vh"} , {bottom: 14 + "vh"} )

.fromTo(gazar , 7 ,
     { backgroundImage: 'linear-gradient(transparent 0%, rgb(217, 188, 152) 3.5%, rgb(107, 78, 50) 100%)' },
     {backgroundImage: 'linear-gradient(transparent 0%, rgb(107, 78, 50) 5%, rgb(107, 78, 50) 5%)'} , "-=7"
)
.fromTo(".grassfirst" ,  7   , {opacity: 0} , {opacity: 1}, "-=7")
.fromTo(".grass1one" ,7, {opacity: 0} , {opacity: 1})
.fromTo(".grass1" ,7, {opacity: 0} , {opacity: 1}, "-=6.5")

.fromTo(".grass2two" ,7, {opacity: 0} , {opacity: 1})
.fromTo(".grass2" ,7, {opacity: 0} , {opacity: 1}, "-=6.5")
.fromTo("#flower , #flower1 , #flower2 , #flower3" ,7   ,{width:0,height:0,},{width:3+"%",height:6+"%"} , "-=5")
.fromTo("#smalltree , #grassbig , #grassbig2" , 7 , {width:0,height:0,},{width:10+"%",height:20+"%"},"-=2")

let scene2=new ScrollMagic.Scene({
     triggerElement:".urgahheseg",
     duration:3000,
     triggerHook:0,
})
.setTween(Turuu)
.setPin('.urgahheseg')
.addIndicators()
.addTo(controller)
