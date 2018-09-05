import Helper from '../helper'
var faker = require('faker')

export default new class AddItemPage {
    constructor() {
        // 1st step: choose image
        this.header = '//android.widget.LinearLayout[@resource-id="com.thecarousell.Carousell:id/gallery_header"]/android.widget.TextView[2]'
        this.newPhoto = '//android.widget.FrameLayout[@content-desc="image_selection_page_camera_button"]'
        this.pic1 = '//android.widget.FrameLayout[@content-desc="image_selection_page_photo_1"]'
        this.nextBtn = '//android.widget.TextView[@content-desc="image_selection_page_next_button"]'

        // 2nd step: choose category
        this.category = '//android.widget.TextView[@text="category"]'
        this.searchCategoryBtn = '//android.widget.FrameLayout[@bounds="[0,701][1080,890]"]'
        this.searchCategoryField = '//android.widget.EditText[@content-desc="category_page_search_label"]'
        this.searchCategoryResult = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/tv_title"]'
        this.searchCategorySelect = '//android.support.v7.widget.RecyclerView/android.widget.FrameLayout[2]'

        // 3rd step: complete listing info
        this.itemName = `${faker.commerce.productName()} (test) (${Date.now()})`
        this.listingTitle = '//android.widget.EditText[@content-desc="title"]'
        this.listingPrice = '//android.widget.EditText[@content-desc="price"]'
        this.itemNew = '//android.widget.RadioButton[@content-desc="2"]'
        this.itemOld = '//android.widget.RadioButton[@content-desc="1"]'
        this.switchMeetUp = '//android.widget.Switch[@content-desc="meetup"]'
        this.switchMailing = '//android.widget.Switch[@content-desc="mailing"]'
        this.description = '//android.widget.EditText[@content-desc="description"]'
        this.listBtn = '//android.widget.FrameLayout[@content-desc="sell_form_page_list_it_button"]'

        // 4th step: listing successful
        this.seller = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/txt_seller_name"]'
        this.listingTime = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/txt_time_created"]'
        this.shareBtn = '//android.view.ViewGroup[@resource-id="com.thecarousell.Carousell:id/view_share_other"]'
        this.closePromoteBtn = '//android.widget.ImageView[@resource-id="com.thecarousell.Carousell:id/btn_close"]'
        this.alertMsg = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/alertTitle"]'
        this.okBtn = '//android.widget.Button[@resource-id="android:id/button1"]'
        this.closeSuccessBtn = '//android.widget.ImageView[@resource-id="com.thecarousell.Carousell:id/button_close"]'
    }

    selectPic() {
        expect(this.header).to.have.text('Choose up to 4 nice photos to represent your listing.')
        Helper.waitTap(this.pic1)
        Helper.waitTap(this.nextBtn)
    }

    selectCategoryBySearch(category_name) {
        Helper.waitTap(this.searchCategoryBtn)
        browser.setValue(this.searchCategoryField, category_name)
        expect(this.searchCategoryResult).to.have.text(category_name)
        Helper.waitTap(this.searchCategorySelect)
    }

    tapCategory(category) {
        Helper.waitTap(this.category.replace('category', category))
    }

    enterListingTitle() {
        Helper.waitTap(this.listingTitle)
        browser.setValue(this.listingTitle, this.itemName)
    }

    enterListingPrice() {
        Helper.waitTap(this.listingPrice)
        browser.setValue(this.listingPrice, 10)
        browser.hideDeviceKeyboard('tapOutside')
    }

    setItemCondition(condition) {
        if (condition == 'new') {
            Helper.waitTap(this.itemNew)
        } else {
            Helper.waitTap(this.itemOld)
        }
    }

    setDeliver(type) {
        if (type == 'meet') {
            Helper.waitTap(this.switchMeetUp)
        } else {
            Helper.waitTap(this.switchMailing)
        }
    }

    enterDescription() {
        browser.touchAction([{
                action: 'longPress',
                x: 530,
                y: 1500
            },
            {
                action: 'moveTo',
                x: 530,
                y: 300
            },
            'release'
        ])
        Helper.waitTap(this.description)
        browser.setValue(this.description, this.itemName)
        browser.hideDeviceKeyboard('tapOutside')
    }

    tapList() {
        Helper.waitTap(this.listBtn)
    }

    completeListing() {
        this.enterListingTitle()
        this.enterListingPrice()
        this.setItemCondition('old')
        this.enterDescription()
        this.tapList()
    }

    tapShare() {
        Helper.waitTap(this.shareBtn)
    }

    tapClosePromote() {
        if (browser.isVisible(this.closePromoteBtn) == true) {
            Helper.waitTap(this.closePromoteBtn)
        }
    }

    tapCloseSuccess() {
        if (browser.isVisible(this.closeSuccessBtn) == true) {
            Helper.waitTap(this.closeSuccessBtn)
        }
    }

    closeAlert() {
        Helper.waitTap(this.okBtn)
    }
}