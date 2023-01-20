/* <p>20 meters = 65.616 feet | 20 feet = 6.096 meters</p> */
//20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector('.input-el');
const convertBtn = document.querySelector('.convert-btn');
const lenDiv = document.querySelector('.length');
const volDiv = document.querySelector('.vol');
const massDiv = document.querySelector('.mass');

const lenObj = {
    unit: 'meter(s)',
    unit2: 'feet',
    rate: 3.281,
    genTxt () { return`0 ${this.unit} = ${(0 * this.rate).toFixed(3)} ${this.unit2} | 0 ${this.unit2} = ${(0 / this.rate).toFixed(3)} ${this.unit}`}
}

const volObj = {
    unit: 'liter(s)',
    unit2: 'gallon(s)',
    rate: 0.264,
    txt: `0 ${volObj.unit} = ${(0 * volObj.rate).toFixed(3)} ${volObj.unit2} | 0 ${volObj.unit2} = ${(0 / volObj.rate).toFixed(3)} ${volObj.unit}`
}

const massObj = {
    unit: 'kilo(s)',
    unit2: 'pound(s)',
    rate: 2.204,
    txt: `0 ${massObj.unit} = ${(0 * massObj.rate).toFixed(3)} ${massObj.unit2} | 0 ${massObj.unit2} = ${(0 / massObj.rate).toFixed(3)} ${massObj.unit}`
}

const appendTxt = (txt) => {
    const p = document.createElement('p');
    const txtNode = document.createTextNode(txt);
    p.appendChild(txtNode);
    return p;
}


lenDiv.appendChild(appendTxt(lenObj.genTxt()));
// volDiv.appendChild(appendTxt(volObj.txt));
// massDiv.appendChild(appendTxt(massObj.txt));


const calculateUnits = () => {
    const inputVal = inputEl.value;
    let lenTxt = `${inputVal} ${lenObj.unit} = ${(inputVal * lenObj.rate).toFixed(3)} ${lenObj.unit2} | ${inputVal} ${lenObj.unit2} = ${(inputVal / lenObj.rate).toFixed(3)} ${lenObj.unit}`;
    let volTxt = `${inputVal} liters = ${(inputVal * 0.264).toFixed(3)} gallons | ${inputVal} gallons = ${(inputVal / 0.264).toFixed(3)} liters`;
    let massTxt = `${inputVal} kilos = ${(inputVal * 2.204).toFixed(3)} pounds | ${inputVal} pounds = ${(inputVal / 2.204).toFixed(3)} kilos`;
    
    lenDiv.appendChild(appendTxt(lenTxt));
    volDiv.appendChild(appendTxt(volTxt));
    massDiv.appendChild(appendTxt(massTxt));
}

convertBtn.addEventListener('click', calculateUnits);