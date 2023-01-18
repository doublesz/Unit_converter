/* <p>20 meters = 65.616 feet | 20 feet = 6.096 meters</p> */

const lenDiv = document.querySelector('.length');
const p = document.createElement('p');
const lenTxt = document.createTextNode('20 meters = 65.616 feet | 20 feet = 6.096 meters');
p.appendChild(lenTxt);
lenDiv.appendChild(p);
