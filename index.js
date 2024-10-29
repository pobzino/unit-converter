/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputElement = document.getElementById("input-el")
let convertButton = document.getElementById("convert-btn")
let meterDisplay = document.getElementById("meter-conversion")
let volumeDisplay = document.getElementById("litre-conversion")
let massDisplay = document.getElementById("kilo-conversion")


convertButton.addEventListener("click", function convert() {
    convertLength()
    convertVolume()
    convertMass()

})

function convertLength() {
    let number = inputElement.value
    let meter = number
    let feet = number
    meter *= 3.281
    meter = meter.toFixed(2)
    feet *= (1 / 3.291)
    feet = feet.toFixed(2)
    meterDisplay.textContent = `${number} meter(s) = ${meter} feet | ${number} feet = ${feet} metre(s)`
}


function convertVolume() {
    let number = inputElement.value
    let liter = number
    let gallon = number
    liter *= 0.264
    liter = liter.toFixed(2)
    gallon *= (1 / 0.264)
    gallon = gallon.toFixed(2)
    volumeDisplay.textContent = `${number} liter(s) = ${liter} gallon(s) | ${number} gallon(s) = ${gallon} liter(s)`
}
4
function convertMass() {

    let number = inputElement.value
    let kilogram = number
    let pound = number
    kilogram *= 2.204
    kilogram = kilogram.toFixed(2)
    pound *= (1 / 2.204)
    pound = pound.toFixed(2)
    massDisplay.textContent = `${number} kilogram(s) = ${kilogram} pounds(s) | ${number} pounds(s) = ${pound} kilogram(s)`

}