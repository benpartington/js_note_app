/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays text', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const buttonEl = document.querySelector('#show-message-button');
    
    const formEl = document.querySelector('#message-input');

    formEl.value = 'Sample text';

    buttonEl.click();

    const output = document.querySelector('#message').innerText;
    expect(output).toBe('Sample text');
  });

  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();


    const hidebuttonEl = document.querySelector('#hide-message-button');
    hidebuttonEl.click();


    expect(document.querySelector('#message')).toBeNull();
  });
});