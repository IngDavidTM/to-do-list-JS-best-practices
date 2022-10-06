import addObj from '../modules/addObj.js';
import mainArr from '../modules/const.js';

document.body.innerHTML = `<form><input type="text" id="add-input" placeholder="Add to your list...">
<button type="button" id="add-button"><i class="fa-solid fa-paper-plane"></i></button></form>
<div id="list" class="list"></div>`;

describe('edit method', () => {
  test('should update the List', () => {
    addObj('hello planet');
    const input = document.querySelector('.itemText');
    input.value = 'hello Benjamin';
    input.dispatchEvent(new Event('input'));
    expect(document.querySelector('.itemText').value).toBe('hello Benjamin');
  });
  test('should update the mainArr', () => {
    const input = document.querySelector('.itemText');
    input.value = 'hello David';
    input.dispatchEvent(new Event('input'));
    expect(mainArr).toEqual([{
      description: 'hello David',
      completed: false,
      index: 1,
    }]);
  });
});
describe('should update status', () => {
  test('should update the mainArr', () => {
  });
});