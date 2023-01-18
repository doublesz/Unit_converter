/* <p>20 meters = 65.616 feet | 20 feet = 6.096 meters</p> */
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

const calcObj = {

}

const appendTxt = (txt) => {
    const p = document.createElement('p');
    const txtNode = document.createTextNode(txt);
    p.appendChild(txtNode);
    return p;
}

lenDiv.appendChild(appendTxt());

const calculateUnits = () => {
    const inputVal = inputEl.value;
    let lenTxt = `${inputVal} meters = ${(inputVal * 3.281).toFixed(3)} feet | ${inputVal} feet = ${(inputVal / 3.281).toFixed(3)} meters`

    lenDiv.appendChild(appendTxt(lenTxt));
}

convertBtn.addEventListener('click', calculateUnits);