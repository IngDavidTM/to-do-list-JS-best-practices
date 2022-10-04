import './index.css';
import * as mod from './modules/module.js';

const buttonAdd = document.getElementById('add-button');
buttonAdd.addEventListener('click', mod.btnAdd);
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', mod.refreshBtn);
const clear = document.getElementById('clear');
clear.addEventListener('click', mod.clearFunction);
mod.addHtml();