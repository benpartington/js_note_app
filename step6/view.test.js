/**
 * @jest-environment jsdom
 */

// const fs = require('fs');
// const View = require('./view');

// describe('Page view', () => {
//   it('displays 2 paragraphs', () => {
//     document.body.innerHTML = fs.readFileSync('./index.html');

//     const view = new View();

//     expect(document.querySelectorAll('p').length).toBe(2);
//   });

//   it('adds a new paragraph', () => {
//     document.body.innerHTML = fs.readFileSync('./index.html');

//     const view = new View();
//     view.addParagraph();

//     expect(document.querySelectorAll('p').length).toBe(3);
//   });
  
// });