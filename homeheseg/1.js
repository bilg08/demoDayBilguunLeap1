let tween=new TimelineLite();
let controller=new ScrollMagic.Controller();

tween.from(".mod1", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod2", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod3", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod4", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod5", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod6", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod7", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod8", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod9", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod10", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod11", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod12", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod13", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod14", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod15", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod16", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod17", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod18", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod19", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod20", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod21", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})
tween.from(".mod22", 7 , {width: 0, height: 0,},{width: 100 + "%", height: 100 + "%",})


let Turuu=new ScrollMagic.Scene({
     triggerElement:".urSmallcontainer",
     duration:3000,
     triggerHook:0,
})
.setTween(tween)
.setPin('.urSmallcontainer')
.addIndicators()
.addTo(controller)