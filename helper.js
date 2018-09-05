var fs = require('fs')
var jsonfile = require('jsonfile')

import LogInPage from './pageobjects/login_page'
import MainPage from './pageobjects/main_page'
import SystemPage from './pageobjects/system_page'
import WelcomePage from './pageobjects/welcome_page'
import SignupEmailPage from './pageobjects/signup_email_page'
import FirstLogInPage from './pageobjects/first_login_page'

export default new class Helper {
    waitTap(element) {
        browser.waitForVisible(element)
        browser.touchAction(element, 'tap')
    }

    scrollDown() {
        browser.touchAction([{
                action: 'longPress',
                x: 500,
                y: 1300
            },
            {
                action: 'moveTo',
                x: 500,
                y: 100
            },
            'release'
        ])
    }

    scrollLeft() {
        browser.touchAction([{
                action: 'longPress',
                x: 1000,
                y: 1500
            },
            {
                action: 'moveTo',
                x: 100,
                y: 1300
            },
            'release'
        ])
    }

    pushFile(local_path, device_path) {
        var data = fs.readFileSync(local_path)
        data = new Buffer(data).toString('base64')
        return browser.pushFile(device_path, data)
    }

    storeUser(user, file='./testdata/user.json') {
        var newUser = {
            created: new Date().getTime(),
            data: user
        }

        jsonfile.writeFile(file, newUser, {
            spaces: 2
        }, function (err) {
            console.log(err);
        })
    }

    signUpEmail() {
        WelcomePage.tapEmail()
        SignupEmailPage.tapAvatar()
        SystemPage.addAvatar()
        SignupEmailPage.enterNewAcc()
        browser.waitForVisible(FirstLogInPage.header)
        this.storeUser(SignupEmailPage.user) // store to test file to testdata/user.json for login test
    }

    logInVerifiedAcc() {
        WelcomePage.tapLogIn()
        LogInPage.enterVerifiedAcc()
        browser.waitForVisible(MainPage.toolBar)
    }
}