# cypress-broken-cookies

This is a minimal reproduction sample for an issue with how cookies are handled when set from `cy.request()` responses.
If we navigate using `cy.visit()`, the cookies are set and sent correctly. 
However, if we use `cy.request()` to make a request that sets a cookie for the parent domain of the page we want to visit, the cookie is not sent.
The real use case for this is to initialize user session programatically, without having to navigate through the UI, and then execute the test by visiting the target page.

To reproduce:
1. run `$ node index.js` in a terminal window
2. run `$ yarn cypress open` in another terminal window
3. run `request.test.js` test file

All the tests are passing if we use Cypress 3.4.1, but the last one - `using request cookies with parent domain doesn't work` - is failing from versions 3.5.0 onwards. (I've tried a few of them, including the latest 4.0.0, 4.0.1 and 4.1.0)
