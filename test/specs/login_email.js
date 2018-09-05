import WelcomePage from '../../pageobjects/welcome_page'
import LogInPage from '../../pageobjects/login_page'
import MainPage from '../../pageobjects/main_page'

describe('Log in with email', () => {

    before(() => {
        WelcomePage.tapLogIn()
    })

    it('Log in with empty email and password', () => {
        LogInPage.tapLogIn()
        expect(LogInPage.userMsg).to.have.text(LogInPage.errorMsg.require_username)
        expect(LogInPage.passwordMsg).to.have.text(LogInPage.errorMsg.required_password)
    })

    it('Log in with empty email', () => {
        LogInPage.enterValidPassword()
        LogInPage.tapLogIn()
        expect(LogInPage.userMsg).to.have.text(LogInPage.errorMsg.require_username)
    })

    it('Log in with empty password', () => {
        browser.clearElement(LogInPage.passwordField)
        LogInPage.enterValidEmail()
        LogInPage.tapLogIn()
        expect(LogInPage.passwordMsg).to.have.text(LogInPage.errorMsg.required_password)
    })

    it('Log in with invalid email', () => {
        LogInPage.enterInvalidEmail()
        LogInPage.enterValidPassword()
        LogInPage.tapLogIn()
        expect(LogInPage.userMsg).to.have.text(LogInPage.errorMsg.invalid)
        expect(LogInPage.passwordMsg).to.have.text(LogInPage.errorMsg.invalid)
    })

    it('Log in with invalid username', () => {
        LogInPage.enterInvalidUsername()
        LogInPage.enterValidPassword()
        LogInPage.tapLogIn()
        expect(LogInPage.userMsg).to.have.text(LogInPage.errorMsg.invalid)
        expect(LogInPage.passwordMsg).to.have.text(LogInPage.errorMsg.invalid)
    })

    it('Log in with valid email and invalid password', () => {
        LogInPage.enterValidEmail()
        LogInPage.enterInvalidPassword()
        LogInPage.tapLogIn()
        expect(LogInPage.userMsg).to.have.text(LogInPage.errorMsg.invalid)
        expect(LogInPage.passwordMsg).to.have.text(LogInPage.errorMsg.invalid)
    })

    it('Log in with valid username and invalid password', () => {
        LogInPage.enterValidUsername()
        LogInPage.enterInvalidPassword()
        LogInPage.tapLogIn()
        expect(LogInPage.userMsg).to.have.text(LogInPage.errorMsg.invalid)
        expect(LogInPage.passwordMsg).to.have.text(LogInPage.errorMsg.invalid)
    })

    it('Log in with valid email and valid password', () => {
        browser.reload()
        WelcomePage.tapLogIn()
        LogInPage.enterValidEmail()
        LogInPage.enterValidPassword()
        LogInPage.tapLogIn()
        browser.waitForVisible(MainPage.toolBar)
    })

    it('Log in with valid username and valid password', () => {
        browser.reload()
        WelcomePage.tapLogIn()
        LogInPage.enterValidUsername()
        LogInPage.enterValidPassword()
        LogInPage.tapLogIn()
        browser.waitForVisible(MainPage.toolBar)
    })
})