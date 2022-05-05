let number = 10
document.getElementById("calcnum").textContent = number

let resultone = number * 3.28034
let decimalone = resultone.toFixed(3)
let calcfoot = document.getElementById("mtof").textContent = `${number} Meter = ${decimalone} Foot`

let resultsec = number * 0.304
let decimalsec = resultsec.toFixed(3)
let calcmeter = document.getElementById("ftom").textContent = `${number} Foot = ${decimalsec} Meter`

let resultthr = number * 0.264
let decimalthr = resultsec.toFixed(3)
let calcgal = document.getElementById("vtog").textContent = `${number} Volume = ${decimalthr} Gallon`

let resultfour = number * 3.785
let decimalfour = resultsec.toFixed(3)
let calcvol = document.getElementById("gtov").textContent = `${number} Gallon = ${decimalfour} Volume`

let resultfive = number * 2.204
let decimalfive = resultsec.toFixed(3)
let calcpou = document.getElementById("ktop").textContent = `${number} Kilogram = ${decimalfive} Pound`

let resultsix = number * 0.453
let decimalsix = resultsec.toFixed(3)
let calckil = document.getElementById("ptok").textContent = `${number} Pound = ${decimalsix}Kilogram`


function convert(){
    let v = document.getElementById("numberValue").value
    number = v
    document.getElementById("calcnum").textContent = number
    let calcfoot = document.getElementById("mtof").textContent = `${number} Meter = ${decimalone} Foot `
    let calcmeter = document.getElementById("ftom").textContent = `${number} Foot = ${decimalsec} Meter `
    let calcgal = document.getElementById("vtog").textContent = `${number} Volume = ${decimalthr} Gallon `
    let calcvol = document.getElementById("gtov").textContent = `${number} Gallon = ${decimalfour} Volume `
    let calcpou = document.getElementById("ktop").textContent = `${number} Kilogram = ${decimalfive} Pound `
    let calckil = document.getElementById("ptok").textContent = `${number} Pound = ${decimalsix}Kilogram `

}