exports.config = {
    reporters: ['spec', 'mochawesome', 'allure'],
    reporterOptions: {
        outputDir: './report',
        mochawesome: {
            mochawesome_filename: 'mochawesome_report.json' 
        },
        allure: {
            outputDir: './report/allure-results'
        }
    },
    services: ['appium'],
    appium: {
        args: {
            address: '127.0.0.1',
            port: '4723',
            newCommandTimeout: '5',
            sessionOverride: false,
            debugLogSpacing: true,
            app: './Carousell-Android-App.apk'
        }
    },
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        signup: ['./test/specs/signup_email.js'],
        login: ['./test/specs/login_email.js'],
        listitem: ['./test/specs/list_item.js']
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        // browserName: '',
        platformVersion: '8.0.0',
        platformName: 'Android',
        appPackage: 'com.thecarousell.Carousell',
        appActivity: 'com.thecarousell.Carousell.activities.EntryActivity',
        deviceName: 'emulator-5554',
        automationName: 'UiAutomator2'
    }],
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    // baseUrl: 'http://localhost',
    host: 'localhost',
    port: '4723',
    waitforTimeout: 9000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
        compilers: ['js:babel-register']
    },
    before: function() {
        var chai = require('chai');
        var chaiWebdriver = require('chai-webdriverio').default;
        chai.use(chaiWebdriver(browser, {defaultWait: 5000}));
        global.expect = chai.expect
    },
    beforeSuite: function (suite) {
        console.log('=====Running suite:', suite.title)
    },
    beforeTest: function (test) {
        console.log('=====Running test:', test.currentTest, '\n......')
    },
    afterTest: function (test) {
        console.log('Passed:', test.passed, '\n\n')
    }
}

require("babel-register")({
    presets: ['es2015']
})