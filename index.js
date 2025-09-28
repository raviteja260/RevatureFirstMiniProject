import {getCurrentDate} from './dateModule.js';

document.querySelector('button').addEventListener('click', () => {
    console.log(getCurrentDate());
});