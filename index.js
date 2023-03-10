/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// todo -> think how to convert unit names to its singular form

const inputEl = document.querySelector('.input-el');
const convertBtn = document.querySelector('.convert-btn');
const lenDiv = document.querySelector('.length');
const volDiv = document.querySelector('.vol');
const massDiv = document.querySelector('.mass');

let val = 0;

const lenObj = {
    unit1: 'meters',
    unit1s: 'meter',
    unit2: 'feet',
    unit2s: 'foot',
    rate: 3.281
}

const volObj = {
    unit1: 'liters',
    unit1s: 'liter',
    unit2: 'gallons',
    unit2s: 'gallon',
    rate: 0.264
}

const massObj = {
    unit1: 'kilos',
    unit1s: 'kilo',
    unit2: 'pounds',
    unit2s: 'pound',
    rate: 2.204
}

const genTxt = (obj) => {
    let result1 = (val * obj.rate).toFixed(3);
    let result2 = (val / obj.rate).toFixed(3);
    let sentence = '';

    switch (1.0){
        case val:
            sentence = `${val} ${obj.unit1s} = ${result1} ${obj.unit2} | ${val} ${obj.unit2s} = ${result2} ${obj.unit1}`;
            break;
        case parseFloat(result1):
            sentence = `${val} ${obj.unit1} = ${result1} ${obj.unit2s} | ${val} ${obj.unit2} = ${result2} ${obj.unit1}`;
            break;
        case parseFloat(result2):
            sentence = `${val} ${obj.unit1} = ${result1} ${obj.unit2} | ${val} ${obj.unit2} = ${result2} ${obj.unit1s}`;
            break;
        default:
            sentence = `${val} ${obj.unit1} = ${result1} ${obj.unit2} | ${val} ${obj.unit2} = ${result2} ${obj.unit1}`
    }

    return sentence;
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
    val = parseFloat(inputEl.value);
    lenP.innerText = genTxt(lenObj);
    volP.innerText = genTxt(volObj);
    massP.innerText = genTxt(massObj);
    inputEl.value = "";
}

convertBtn.addEventListener('click', calculateUnits);