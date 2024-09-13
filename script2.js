
const bgVideo = document.querySelector('#bgVideo3')
const showImgBtn = document.querySelector('.sliderShow')
const sliderCtrl = document.querySelector('main')
const slider = document.querySelector('.slider')
const envelope = document.querySelector('.envelope-wrapper')
const envelopeCont = document.querySelector('.container')
const eButton = document.querySelector('.eButton')
const timeYear = document.querySelector('.timeY')
const timeMonth = document.querySelector('.timeM')
const timeDay = document.querySelector('.timeD')
const timeHour = document.querySelector('.timeH')
const timeMin = document.querySelector('.timeN')
const timeSec = document.querySelector('.timeS')
const galleryCont = document.querySelector('.galleryCont')
const galleryBtn = document.querySelector('.galleryShow')

//Executing Program---------------------
bgVideo.play()
showImgBtn.style.opacity = 0
galleryBtn.style.visibility = 'hidden'
setTimeout(() => {
    galleryBtn.style.visibility = 'visible'
    showImgBtn.animate(btnSlide, btnSlideTime)
    galleryBtn.animate(btnSlide, galBtnSlideTime)
}, 6000);
let sliderUp = false
let letterCheck = false
let letterStatus = false
let eBtn = false
let galBtnCheck = false
let dobDate = new Date(2006,8,15,8,15)
let currDate
setInterval(() => {
    currDate = new Date()
}, 1000);
var monthDiff
var dateDiff
var secs, mins, hrs, days, months, yearDiff

const letterInterval = setInterval(() => {
    if (letterCheck == true) {
        clearInterval(letterInterval)
        setTimeout(() => {
            envelopeCont.animate(letterSlide, letterSlideTime)
            eButton.style.visibility = 'visible'
            letterStatus = true
        }, 7000);
    }
}, 1000);

setInterval(() => {
    dobTime()
    timeYear.innerText = yearDiff + ' Years'
    timeMonth.innerText = months + ' Months'
    timeDay.innerText = days + ' Days'
    timeHour.innerText = hrs + ' Hours'
    timeMin.innerText = mins + ' Minutes'
    timeSec.innerText = secs + ' Seconds'
}, 1000);
//Event Listeners--------------------------
showImgBtn.addEventListener('click', () => {
    if(sliderUp == true){
        sliderUp = false
        sliderCtrl.animate(imgSlideUp,imgSlideUpTimeR)
        envelopeCont.animate(letterSlideDown, letterSlideTime)
        showImgBtn.classList.replace('sliderShowArrow','sliderShow')
        showImgBtn.innerText = 'Show'
        showImgBtn.style.width = '100px'
    }
    else if(sliderUp == false){
        if(galBtnCheck == true){
            galleryBtn.click()
        }
        sliderUp = true
        letterCheck = true
        sliderCtrl.animate(imgSlideUp,imgSlideUpTime)
        if(letterStatus == true){
            envelopeCont.animate(letterSlideDown, letterSlideTimeR)
        }
        showImgBtn.classList.replace('sliderShow','sliderShowArrow')
        showImgBtn.innerText = '▼'
        showImgBtn.style.width = '41px'
    }
})
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
})
eButton.addEventListener('click', () =>{
    if(eBtn == false){
        eBtn = true
        eButton.innerHTML = '<pre> > </pre>'
        eButton.animate(eButtonSlide, eButtonSlideTimeR)
        envelope.animate(letterSlide, letterSlideTimeR)
    }
    else if(eBtn == true){
        eBtn = false
        eButton.innerHTML = '<pre> < </pre>'
        eButton.animate(eButtonSlide, eButtonSlideTime)
        envelope.animate(letterInSlide, letterSlideTime)
    }
})
galleryBtn.addEventListener('click', () => {
    if(galBtnCheck == false){
        if(sliderUp == true){
            showImgBtn.click()
        }
        galBtnCheck = true
        galleryBtn.innerText = 'Hide Gallery'
        galleryCont.animate(galleryShift, galleryShiftTime)
    }
    else if(galBtnCheck == true){
        galBtnCheck = false
        galleryBtn.innerText = 'Show Gallery'
        galleryCont.animate(galleryShift, galleryShiftTimeR)
    }
})

//Keyframes Defining-----------------------
const imgSlideUp = [
    {transform: "translateY(525px)"},
    {transform: "translateY(240px)"}
]
const imgSlideUpTime = {
    duration: 1000,
    iteration: 1,
    fill: "both",
    easing: "ease"
}
const imgSlideUpTimeR = {
    duration: 1000,
    iteration: 1,
    fill: "both",
    easing: "ease",
    direction: "reverse"
}

const btnSlide = [
    {opacity: 0,
     transform: "translate(-100px,-700px)"},
    {opacity: 1}
]
const btnSlideTime = {
    duration: 1000,
    iteration: 1,
    fill: "both",
    easing: "ease"
}
const galBtnSlideTime = {
    duration: 2000,
    delay: 500,
    iteration: 1,
    fill: "backwards",
    easing: "ease"
}

const letterSlide = [
    {transform: "translateX(-400px)"},
    {transform: "translateX(-50px)"}
]
const letterSlideDown = [
    {transform: "translate(-50px, 0px)"},
    {transform: "translate(-50px, 400px)"}
]
const letterSlideTime = {
    duration: 2000,
    iteration: 1,
    fill: "forwards",
    easing: "ease"
}
const letterSlideTimeR = {
    duration: 1000,
    iteration: 1,
    direction: 'reverse',
    fill: "both",
    easing: "ease-in-out"
}

const letterInSlide = [
    {transform: "translateX(-400px)"},
    {transform: "translateX(0px)"}
]
const eButtonSlide = [
    {transform: "translateX(-125px)"},
    {transform: "translateX(0px)"}
]
const eButtonSlideTime = {
    duration: 1100,
    iteration: 1,
    fill: "both",
    easing: "ease"
}
const eButtonSlideTimeR = {
    duration: 700,
    iteration: 1,
    direction: 'reverse',
    fill: "both",
    easing: "ease"
}

const galleryShift = [
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-1600px)'}
]
const galleryShiftTime = {
    duration: 2000,
    iteration: 1,
    fill: 'both',
    easing: 'ease'
}
const galleryShiftTimeR = {
    duration: 2000,
    iteration: 1,
    direction: 'reverse',
    fill: 'both',
    easing: 'ease'
}

//Defining Fuctions---------------------
function dobTime(){
    let tillTime
    let yearDiff24
    yearDiff24 = currDate.getFullYear() - 2024
    tillTime = (currDate-dobDate)
    secs = Math.floor(tillTime/1000)
    mins = Math.floor(secs/60)
    hrs = Math.floor(mins/60)                                                          //Calculating Elasped Time Here 
    days = Math.floor(hrs/24)
    months = (getYear()*12)
    
    if(currDate.getMonth() == 8 && currDate.getDate() >= 15){
        months = (getYear()*12)
    }
    else if(currDate.getMonth() == 8 && currDate.getDate() < 15){
        months = (getYear()*12 + 12) -1 
    }
    else if(currDate.getMonth() > 8 && currDate.getDate() < 15){
        months = (getYear()*12) + monthDiff -1
    }
    else if(currDate.getMonth() > 8 && currDate.getDate() >= 15){
        months = (getYear()*12) + monthDiff
    }
    else if(currDate.getMonth() < 8 && currDate.getDate() < 15){
        months = (getYear()*12 + 12) + monthDiff -1
    }
    else if(currDate.getMonth() < 8 && currDate.getDate() >= 15){
        months = (getYear()*12 + 12) + monthDiff
    }
}
function getYear(){
    let getYear1, getYear2
    let getMonth1, getMonth2
    let getDate1, getDate2
    getMonth1 = dobDate.getMonth()
    getMonth2 = currDate.getMonth()
    monthDiff = getMonth2 - getMonth1

    getDate1 = dobDate.getDate()
    getDate2 = currDate.getDate()
    dateDiff = getDate2 - getDate1                                                 //Calculating Elaped Years Here

    getYear1 = dobDate.getFullYear()
    getYear2 = currDate.getFullYear()
    yearDiff = getYear2-getYear1
    if(monthDiff < 0 && dateDiff > 0){
        yearDiff -= 1
    }
    if(monthDiff < 0 && dateDiff < 0){
        yearDiff -= 1
    }
    if(monthDiff < 0 && dateDiff == 0){
        yearDiff -= 1
    }
    if(monthDiff == 0 && dateDiff < 0){
        yearDiff -= 1
    }
    if(monthDiff == 0 && currDate.getMonth() == 8){
        yearDiff += 0
    }
    
    return yearDiff
}