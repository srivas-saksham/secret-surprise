
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
let enter = 'Enter'

var currDateN = new Date(2006,8,15) 
video1.pause()
video2.pause()
//Event Listeners
submit.addEventListener('click', () => {
    passCheck()
    if(passValid == true){
        passValidTrue()
        HBD()
        title.innerText = "Happiest Birthday Kajju!"
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
function passCheck(){
    let passCheck = password.value
    if(passCheck.toLowerCase().trim() == "kadhai paneer"){                                   //Authenticating User
        passValid = true
    }
    else{
        passValid = false
    }
}
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
            anchorBtn.click()
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