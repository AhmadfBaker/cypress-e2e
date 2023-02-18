// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import addContext from 'mochawesome/addContext';

// const titleToFileName = (title) => title.replace(/[:\/]/g, '');

// Cypress.on('test:after:run', (test, runnable) => {
//     if (test.state === 'failed') {
//         const filename = `${titleToFileName(runnable.parent.title)} -- ${titleToFileName(test.title)} (failed).png`;
//         addContext({ test }, `../screenshots/${Cypress.spec.name}/${filename}`);
//         addContext({ test }, `../videos/${Cypress.spec.name}.mp4`);
//     }
// });
