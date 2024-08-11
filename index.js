

let meterFootRatio = 3.281
let literGallonRatio = 0.264
let kiloPoundRatio = 2.204

const inputField = document.getElementById("number-inp")
const convertButton = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-p")
const volumeResult = document.getElementById("volume-p")
const massResult = document.getElementById("mass-p")

convertButton.addEventListener("click",function (){

    let inputValue = Number(inputField.value)
    let feet = (inputValue * meterFootRatio).toFixed(3)
    let gallons = (inputValue * literGallonRatio).toFixed(3)
    let pounds = (inputValue * kiloPoundRatio).toFixed(3)
    let meters = (inputValue / meterFootRatio).toFixed(3)
    let liters = (inputValue / literGallonRatio).toFixed(3)
    let kilos = (inputValue / kiloPoundRatio).toFixed(3)

    lengthResult.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters `
    volumeResult.textContent = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters `
    massResult.textContent = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos `

})
let maxLen = 5


//make input font scale with length of input
inputField.addEventListener("input",function(){
        let fontSize = parseInt(window.getComputedStyle(inputField, null).getPropertyValue('font-size'))

        if(inputField.value.length > maxLen){
            maxLen = inputField.value.length
        }
        if(inputField.value.length > 5 && inputField.value.length>=maxLen){
            inputField.style.fontSize = fontSize - 5 + "px"
        }else if(inputField.value.length < maxLen && inputField.value.length >5){
            inputField.style.fontSize = fontSize + 5 + "px"
        }
        else{
            inputField.style.fontSize = 36 + "px"
            maxLen = 5
        }

})