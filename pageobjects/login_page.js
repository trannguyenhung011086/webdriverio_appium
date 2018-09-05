import Helper from '../helper'

export default new class LogInPage {
    constructor() {
        this.userField = '//TextInputLayout[@resource-id="com.thecarousell.Carousell:id/layout_username"]/android.widget.FrameLayout/android.widget.EditText'
        this.userMsg = '//TextInputLayout[@resource-id="com.thecarousell.Carousell:id/layout_username"]/android.widget.LinearLayout/android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/textinput_error"]'
        this.passwordField = '//TextInputLayout[@resource-id="com.thecarousell.Carousell:id/layout_password"]/android.widget.FrameLayout/android.widget.EditText'
        this.passwordMsg = '//TextInputLayout[@resource-id="com.thecarousell.Carousell:id/layout_password"]/android.widget.LinearLayout/android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/textinput_error"]'
        this.logInBtn = '//android.widget.Button[@resource-id="com.thecarousell.Carousell:id/login_button"]'
        this.data = require('../testdata/user.json').data
        this.errorMsg = {
            require_username: 'Username is required',
            required_password: 'Password is required',
            invalid: 'Invalid username or password'
        }
    }

    enterValidEmail() {
        Helper.waitTap(this.userField)
        browser.setValue(this.userField, this.data.email)
    }

    enterValidUsername() {
        Helper.waitTap(this.userField)
        browser.setValue(this.userField, this.data.username)
    }

    enterValidPassword() {
        Helper.waitTap(this.passwordField)
        browser.setValue(this.passwordField, this.data.password)
    }

    enterInvalidEmail() {
        Helper.waitTap(this.userField)
        browser.setValue(this.userField, 'test_no_exist@test.com')
    }

    enterInvalidUsername() {
        Helper.waitTap(this.userField)
        browser.setValue(this.userField, 'test_no_exist')
    }

    enterInvalidPassword() {
        Helper.waitTap(this.passwordField)
        browser.setValue(this.passwordField, 'test_no_exist')
    }

    tapLogIn() {
        Helper.waitTap(this.logInBtn)
    }

    enterVerifiedAcc() {
        Helper.waitTap(this.userField)
        browser.setValue(this.userField, 'hungtranproton')
        Helper.waitTap(this.passwordField)
        browser.setValue(this.passwordField, '0944226282')
        this.tapLogIn()
    }
}