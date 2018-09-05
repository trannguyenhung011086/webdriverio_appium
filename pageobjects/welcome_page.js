import Helper from '../helper'

export default new class WelcomePage {
    constructor() {
        this.emailBtn = '//android.widget.Button[@resource-id="com.thecarousell.Carousell:id/email_signup_button"]'
        this.facebookBtn = '//android.widget.Button[@resource-id="com.thecarousell.Carousell:id/fb_auth_button"]'
        this.googleBtn = '//android.widget.Button[@resource-id="com.thecarousell.Carousell:id/gplus_signin_button"]'
        this.logInBtn = '//android.widget.Button[@resource-id="com.thecarousell.Carousell:id/login_button"]'
    }

    tapEmail() {
        Helper.waitTap(this.emailBtn)
    }

    tapLogIn() {
        Helper.waitTap(this.logInBtn)
    }
}