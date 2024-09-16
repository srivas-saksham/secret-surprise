
// Fetching HTML Elements
let title = document.querySelector('title')
let password = document.querySelector('.password')
let submit = document.querySelector('.submit')
let video1 = document.querySelector('#bgVideo')
let video2 = document.querySelector('#bgVideo2')
let passContainer = document.querySelector('.passContainer')
let confettiL = document.querySelector('.confettiLottie')
let cakeL = document.querySelector('.cakeLottie')
let HBDL = document.querySelector('.HBDLottie')
let KajjuL = document.querySelector('.kajjuLottie')
let confettiEqualL = document.querySelector('.confettiEqualLottie')
let confetti3 = document.querySelector('.confetti3')
let HBDContainer = document.querySelector(".HBDContainer")
let HBDborder = document.querySelector('.HBDBorder')
let blowButton = document.querySelector('.blowButton')
let candleBg = document.querySelector('.candleBlow')
let anchorBtn = document.querySelector('.anchorBtn')
let credit = document.querySelector('.credit')
let enter = 'Enter'

var currDateN = new Date()
credit.style.visibility = 'hidden'
video1.pause()
video2.pause()
//Event Listeners
submit.addEventListener('click', () => {
    passCheck()
    if(passValid == true){
        sessionStorage.setItem('authenticated','true')
        console.log(sessionStorage.getItem('authenticated'))
        passValidTrue()
        HBD()
    }
    else{
        passValidFalse()
    }
})
password.addEventListener('keydown', (e) => {
    passCheck()
    if(e.key == enter){
        submit.animate(enterSubmit, enterSubmitTiming)
        if(passValid == true){
            sessionStorage.setItem('authenticated','true')
            console.log(sessionStorage.getItem('authenticated'))
            enter = 'nothing'
            passValidTrue()
            HBD()
            title.innerText = "Happiest Birthday Kajju!"
        }
        else{
            passValidFalse()
        }
    }
})
blowButton.addEventListener('click', () => {
    candleBg.classList.remove('hide')
    cakeL.play()
    setTimeout(() => {
        cakeL.pause()
    }, 4600)
    confettiL.classList.remove('hide')
    confettiL.play()
    confetti3.classList.remove('hide')
    confetti3.play()
    setTimeout(() => {
        anchorBtn.click()
    },5500)
})
//Defining Functions
var passValid
// function _0x4886(){const _0x41602b=['2611ndwzUo','456gfFkvO','210144EaucQQ','16552opJyIv','8353FxIDQu','toLowerCase','76LuQiwm','4774500xRalQd','4176227FBrOGs','visible','trim','kadhai\x20paneer','46630WqmQIp','8HDcVgN','value','296163TOOoBQ'];_0x4886=function(){return _0x41602b;};return _0x4886();}(function(_0x5bae94,_0x46e421){const _0x400877=_0x5b07,_0x23bb70=_0x5bae94();while(!![]){try{const _0x1147a9=-parseInt(_0x400877(0x1a0))/0x1*(-parseInt(_0x400877(0x1a2))/0x2)+-parseInt(_0x400877(0x1ae))/0x3*(-parseInt(_0x400877(0x1a9))/0x4)+parseInt(_0x400877(0x1a8))/0x5*(-parseInt(_0x400877(0x1ad))/0x6)+parseInt(_0x400877(0x1ac))/0x7*(parseInt(_0x400877(0x1af))/0x8)+parseInt(_0x400877(0x1ab))/0x9+-parseInt(_0x400877(0x1a3))/0xa+parseInt(_0x400877(0x1a4))/0xb;if(_0x1147a9===_0x46e421)break;else _0x23bb70['push'](_0x23bb70['shift']());}catch(_0x7d4cc4){_0x23bb70['push'](_0x23bb70['shift']());}}}(_0x4886,0x6f3a1));function _0x5b07(_0x5404b9,_0x36a7ca){const _0x4886fa=_0x4886();return _0x5b07=function(_0x5b07cd,_0x4e050d){_0x5b07cd=_0x5b07cd-0x1a0;let _0x15f2fa=_0x4886fa[_0x5b07cd];return _0x15f2fa;},_0x5b07(_0x5404b9,_0x36a7ca);}function passCheck(){const _0x1e89c4=_0x5b07;let _0x5b8d87=password[_0x1e89c4(0x1aa)];_0x5b8d87[_0x1e89c4(0x1a1)]()[_0x1e89c4(0x1a6)]()==_0x1e89c4(0x1a7)?(passValid=!![],credit['style']['visibility']=_0x1e89c4(0x1a5)):passValid=![];}
// password in words above ^^
(function(_0x5a4593,_0x3c9af5){const _0x3680c5=_0x4e41,_0x15cba6=_0x5a4593();while(!![]){try{const _0x29c295=parseInt(_0x3680c5(0x1a6))/0x1+parseInt(_0x3680c5(0x1ab))/0x2*(parseInt(_0x3680c5(0x1a5))/0x3)+-parseInt(_0x3680c5(0x1ac))/0x4+parseInt(_0x3680c5(0x1af))/0x5*(parseInt(_0x3680c5(0x1b1))/0x6)+-parseInt(_0x3680c5(0x1b0))/0x7+parseInt(_0x3680c5(0x1a4))/0x8*(-parseInt(_0x3680c5(0x1a9))/0x9)+parseInt(_0x3680c5(0x1a8))/0xa;if(_0x29c295===_0x3c9af5)break;else _0x15cba6['push'](_0x15cba6['shift']());}catch(_0x2c83e3){_0x15cba6['push'](_0x15cba6['shift']());}}}(_0x2ffd,0x8d85d));function _0x4e41(_0x52751f,_0x55f5dc){const _0x2ffdfd=_0x2ffd();return _0x4e41=function(_0x4e4161,_0x521ac6){_0x4e4161=_0x4e4161-0x1a4;let _0x293b36=_0x2ffdfd[_0x4e4161];return _0x293b36;},_0x4e41(_0x52751f,_0x55f5dc);}function passCheck(){const _0x2058cb=_0x4e41;let _0x26393d=password[_0x2058cb(0x1aa)];_0x26393d['toLowerCase']()[_0x2058cb(0x1ae)]()=='1596346'?(passValid=!![],credit[_0x2058cb(0x1a7)][_0x2058cb(0x1ad)]='visible'):passValid=![];}function _0x2ffd(){const _0x334fed=['6433966cmzQrD','53652WmVPvi','15640TzMnlj','2001fPjwxL','166915fkaVfD','style','12699870BIUbgU','2466YoKfbw','value','142ENfHqL','1769344KzvEyD','visibility','trim','555TBbIzG'];_0x2ffd=function(){return _0x334fed;};return _0x2ffd();}
// password in numbers above ^^
function passValidTrue(){
    video1.play()
    video2.play()
    passContainer.classList.replace('passContainer', 'passContainerShift')
    setTimeout(() => {
        video1.style.visibility = 'hidden'
        console.log(`Video Changed`)
    }, 24357);
}
function passValidFalse(){
    password.value = null
    password.placeholder = 'Incorrect Guess! Try Again...'
    password.animate(errorShake, errorShakeTiming)
    password.classList.replace('password','passwordError')
    submit.disable = true
}
function HBD(){
    if (currDateN.getDate() == 15 && currDateN.getMonth() == 8){
        title.innerText = "Happiest Birthday Kajju!"
        HBDL.classList.remove("hide")
        HBDL.play()
        setTimeout(() => {
            KajjuL.classList.remove("hide")
            confettiEqualL.classList.remove("hide")
            KajjuL.animate(kajjuBounce, kajjuBounceTiming)
            confettiEqualL.play()
        }, 5000);
        setTimeout(() => {
            HBDL.animate(HDBShift, HDBShiftTiming)
            KajjuL.animate(kajjuShift, kajjuShiftTiming)
        }, 7500);
        setTimeout(() => {
            cakeL.classList.remove('hide')
            cakeL.play()
            HBDborder.classList.remove('hide')
            HBDborder.animate(HBDbg, HBDbgTiming)
            blowButton.classList.remove('hide')
            blowButton.animate(HBDbg, HBDbgTiming)
            setTimeout(() => {
                cakeL.pause()
            }, 1000);
        }, 7500);
    }
    else{
        setTimeout(() => {
            window.location.href = 'index2.html'
            // anchorBtn.click()
        },3000)
    }
}
//Defining Keyframs in JS
const errorShake = [
    { transform: "translateX(-5px)" },
    { transform: "translateX(5px)" },
];
const errorShakeTiming = {
    duration: 70,
    iterations: 2,
};

const enterSubmit = [
    { transform: " translateY(20px) scale(100%)"},
    {border:  "2px solid var(--default-blue)"},
    {color:  "var(--default-blue)"},
    { transform: " translateY(20px) scale(85%)" },                              //Keyboard Enter Submit Transition
    {border:  "2px solid var(--rose-pompadour)"},
    {color:  "var(--rose-pompadour)"},
    { transform: "translateY(20px) scale(100%)" },
    {border:  "2px solid var(--default-blue)"},
    {color:  "var(--default-blue)"}
];
const enterSubmitTiming = {
    duration: 250,
    iterations: 1,
};

const kajjuBounce = [
    {scale: "0%"},
    {scale: "140%"}
]
const kajjuBounceTiming = {
    duration: 300,
    iterations: 1
}

const HDBShift = [
    {transform: "translateY(0px) scale(100%)"},
    {transform: "translateY(-230px) scale(50%)"}
]
const HDBShiftTiming = {
    duration: 1000,
    iterations: 1,
    fill: "both",
    easing: "ease-in-out"
}

const kajjuShift = [
    {transform: "translateY(0px) scale(100%)",
        opacity: "1"
    },
    {transform: " translate(30px, -230px) scale(40%)",
        opacity: "0"
    }
]
const kajjuShiftTiming = {
    duration: 1000,
    iterations: 1,
    fill: "both",
    easing: "ease-in-out"
}

const HBDbg = [
    {opacity: "0"},
    {opacaity: '1'}
]
const HBDbgTiming = {
    duration: 1000,
    iterations: 1
}
