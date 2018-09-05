import Helper from '../../helper'
import SystemPage from '../../pageobjects/system_page'
import WelcomePage from '../../pageobjects/welcome_page'
import SignupEmailPage from '../../pageobjects/signup_email_page'
import FirstLogInPage from '../../pageobjects/first_login_page'

describe('Sign up with email', () => {

    beforeEach(() => {
        Helper.pushFile('./testdata/funny.jpg', '/sdcard/Download/test.jpg')
        WelcomePage.tapEmail()
    })

    it('Use valid credentials', () => {
        SignupEmailPage.tapAvatar()
        SystemPage.tapGallery()
        SystemPage.tapAllow() // alllow permission to access photo
        SystemPage.tapPic1()
        SystemPage.tapNext()
        SignupEmailPage.enterEmail()
        SignupEmailPage.enterUsername()
        SignupEmailPage.enterPassword()
        SignupEmailPage.tapCity()
        SystemPage.tapAllow() // allow permission to access location
        SignupEmailPage.tapCity()
        SignupEmailPage.selectCity()
        SignupEmailPage.tapSignUp()

        var username = SignupEmailPage.user.username
        expect(FirstLogInPage.header).to.have.text(`Hey ${username.toLowerCase()}!`) // test will fail here because result is returning username in lowercase only

        Helper.storeUser(SignupEmailPage.user) // store to test file to testdata/user.json for login test
    })
})