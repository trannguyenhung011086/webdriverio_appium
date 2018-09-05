// Use case:
// Launch App > Login > Click on "+" button(Sell button) 
// > List an item under 'Everything Else > Others' category 
// > Go to respective category > verify listing appears with filter set to 'recent'.
import Helper from '../../helper'
import MainPage from '../../pageobjects/main_page'
import LoginPage from '../../pageobjects/login_page'
import FirstLogInPage from '../../pageobjects/first_login_page'
import AddItemPage from '../../pageobjects/add_item_page'
import SystemPage from '../../pageobjects/system_page'
import SignupEmailPage from '../../pageobjects/signup_email_page'
import SearchPage from '../../pageobjects/search_page'
import ProfilePage from '../../pageobjects/profile_page'

describe('List item', () => {

    before(() => {
        Helper.pushFile('./testdata/funny.jpg', '/sdcard/Download/test.jpg')
    })

    it('List item with non-verified account', () => {
        Helper.signUpEmail()
        FirstLogInPage.tapSellNow()

        AddItemPage.selectPic()
        AddItemPage.selectCategoryBySearch('Everything Else')
        AddItemPage.completeListing()
        AddItemPage.closeAlert()

        expect(AddItemPage.seller).to.have.text(SignupEmailPage.user.username.toLowerCase())
        expect(AddItemPage.listingTime).to.have.text('moments ago')
        expect(AddItemPage.shareBtn).to.be.visible()

        AddItemPage.tapClosePromote()
        expect(ProfilePage.verifyMsg).to.be.visible()
    })

    it('List item with verified account', () => {
        Helper.logInVerifiedAcc()
        MainPage.tapSell()
        SystemPage.tapAllow() // allow to access gallery

        AddItemPage.selectPic()
        AddItemPage.selectCategoryBySearch('Everything Else')
        AddItemPage.completeListing()

        expect(AddItemPage.seller).to.have.text('hungtranproton')
        expect(AddItemPage.listingTime).to.have.text('moments ago')
        expect(AddItemPage.shareBtn).to.be.visible()

        AddItemPage.tapClosePromote()
        AddItemPage.tapCloseSuccess()

        MainPage.tapBrowseTab()
        MainPage.scrollSelectCategory('Everything Else')
        SearchPage.closeTooltip()
        SearchPage.selectCategory('Everything Else')
        expect(SearchPage.category).to.have.text('Everything Else')

        SearchPage.selectSorting('Recent')
        SearchPage.applyFilter()
        expect(SearchPage.filter).to.have.text('Recent')

        SearchPage.scrollToItem(AddItemPage.itemName)
        expect(browser.isVisible(SearchPage.itemName.replace('item', AddItemPage.itemName))).to.be.true
    })
})