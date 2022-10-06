import addObj from '../modules/addObj.js';
import mainArr from '../modules/const.js';
import addHtml from '../modules/addHtml.js';

document.body.innerHTML = `<form><input type="text" id="add-input" placeholder="Add to your list...">
<button type="button" id="add-button"><i class="fa-solid fa-paper-plane"></i></button></form>
<div id="list" class="list"></div>`;

describe('edit method', () => {
  addObj('hello planet');
  const input = document.querySelector('.itemText');
  input.value = 'hello pt';
  const form = document.querySelector('.formList');
  form.submit();
  expect(mainArr).toEqual([{
    description: 'hello pt',
    completed: false,
    index: 1,
  }]);
});