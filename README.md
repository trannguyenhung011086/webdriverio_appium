
**Use wdio test runner**
- run all tests: "./node_modules/.bin/wdio wdio.conf.js"
- run suite: "./node_modules/.bin/wdio wdio.conf.js --suite login"

**Use npm script from package.json**
- run all tests: "npm test"
- run suite: "npm test -- --suite login"
- run all tests and export reports: "npm clean & npm test ; npm generateMochawesome ; npm serveAllure"

**Notes**
- install babel to use ES6 style
- use webdriverio test runner will use the same session shared between test cases in one file -> split to different files to use new session OR use browser.reload() to reload session right in the test
- set logLevel: 'verbose' for debugging
- use "npm config set unsafe-perm true" if cannot install npm due to permission