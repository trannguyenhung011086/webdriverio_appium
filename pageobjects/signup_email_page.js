import Helper from '../helper'
import SystemPage from '../pageobjects/system_page'
var faker = require('faker')

export default new class SignupEmailPage {
    constructor() {
        this.avatarBtn = '//android.widget.ImageView[@resource-id="com.thecarousell.Carousell:id/iv_avatar"]'
        this.emailField = '//android.widget.EditText[@resource-id="com.thecarousell.Carousell:id/email_edit_text"]'
        this.usernameField = '//android.widget.EditText[@resource-id="com.thecarousell.Carousell:id/username_edit_text"]'
        this.passwordField = '//android.widget.EditText[@resource-id="com.thecarousell.Carousell:id/password_edit_text"]'
        this.cityField = '//android.widget.EditText[@resource-id="com.thecarousell.Carousell:id/city_edit_text"]'
        this.citySelect = '//android.widget.CheckedTextView[@text="Singapore"]'
        this.signUpBtn = '//android.widget.Button[@resource-id="com.thecarousell.Carousell:id/signup_button"]'
        this.user = {
            email: faker.internet.email(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        }
    }

    tapAvatar() {
        Helper.waitTap(this.avatarBtn)
    }

    enterEmail() {
        Helper.waitTap(this.emailField)
        browser.setValue(this.emailField, this.user.email)
    }

    enterUsername() {
        Helper.waitTap(this.usernameField)
        browser.setValue(this.usernameField, this.user.username)
    }

    enterPassword() {
        Helper.waitTap(this.passwordField)
        browser.setValue(this.passwordField, this.user.password)
    }

    tapCity() {
        Helper.waitTap(this.cityField)
    }

    selectCity() {
        Helper.waitTap(this.citySelect)
    }

    tapSignUp() {
        Helper.waitTap(this.signUpBtn)
    }

    enterNewAcc() {
        this.enterEmail()
        this.enterUsername()
        this.enterPassword()
        this.tapCity()
        SystemPage.tapAllow() // allow permission to access location
        this.tapCity()
        this.selectCity()
        this.tapSignUp()
    }
}