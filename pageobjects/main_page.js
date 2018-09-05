import Helper from '../helper'

export default new class MainPage {
    constructor() {
        this.toolBar = '//android.widget.LinearLayout[@resource-id="com.thecarousell.Carousell:id/view_toolbar_global"]'
        this.sellBtn = '//android.widget.Button[@resource-id="com.thecarousell.Carousell:id/button_sell"]'
        this.browseBtn = '//android.widget.TextView[@text="BROWSE COLLECTION"]'
        this.browserTab = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/text_tab" and @text="BROWSE"]'
        this.exploreHeader = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/home_page_category_title_label"]'
        this.category = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/name" and @text="category"]'
        this.categoryPic = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/text_collection" and @text="category"]'
        this.meTab = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/text_tab" and @text="ME"]'
    }

    tapSell() {
        Helper.waitTap(this.sellBtn)
    }

    tapBrowseTab() {
        Helper.waitTap(this.browserTab)
    }

    tapBrowseBtn() {
        Helper.waitTap(this.browseBtn)
    }

    tapMe() {
        Helper.waitTap(this.meTab)
    }

    scrollSelectCategory(category) {
        if (browser.isVisible(this.exploreHeader) == true) {
            for (var i = 0; i < 100; i++) {
                if (browser.isVisible(this.category.replace('category', category)) == false) {
                    Helper.scrollLeft()
                }
                else {
                    break
                }
            }
            Helper.waitTap(this.category.replace('category', category))
        } else {
            for (var i = 0; i < 100; i++) {
                if (browser.isVisible(this.categoryPic.replace('category', category.toUpperCase())) == false) {
                    Helper.scrollDown()
                }
                else {
                    break
                }
            }
            Helper.waitTap(this.categoryPic.replace('category', category.toUpperCase()))
        }        
    }
}