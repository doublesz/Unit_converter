/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// todo -> think how to convert unit names to its singular form
// allow only number input
// parse input value before calculation
// remove arrows from input box

const inputEl = document.querySelector('.input-el');
const convertBtn = document.querySelector('.convert-btn');
const lenDiv = document.querySelector('.length');
const volDiv = document.querySelector('.vol');
const massDiv = document.querySelector('.mass');

let val = 0;

const lenObj = {
    unit1: 'meters',
    unit2: 'feet',
    rate: 3.281
}

const volObj = {
    unit1: 'liters',
    unit2: 'gallons',
    rate: 0.264
}

const massObj = {
    unit1: 'kilos',
    unit2: 'pounds',
    rate: 2.204
}

const genTxt = (obj) => {
    return `${val} ${obj.unit1} = ${(val * obj.rate).toFixed(3)} ${obj.unit2} | ${val} ${obj.unit2} = ${(val / obj.rate).toFixed(3)} ${obj.unit1}`
}


const appendTxt = (txt) => {
    const p = document.createElement('p');
    const txtNode = document.createTextNode(txt);
    p.appendChild(txtNode);
    return p;
}


lenDiv.appendChild(appendTxt(genTxt(lenObj)));
volDiv.appendChild(appendTxt(genTxt(volObj)));
massDiv.appendChild(appendTxt(genTxt(massObj)));

const lenP = document.querySelector('.length p');
const volP = document.querySelector('.vol p');
const massP = document.querySelector('.mass p');

const calculateUnits = () => {
    val = inputEl.value;
    
    lenP.innerText = genTxt(lenObj);
    volP.innerText = genTxt(volObj);
    massP.innerText = genTxt(massObj);
}

convertBtn.addEventListener('click', calculateUnits);