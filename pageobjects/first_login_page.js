import Helper from '../helper'

export default new class FirstLogInPage {
    constructor() {
        this.header = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/dialog_prompt_header"]'
        this.sellNowBtn = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/dialog_prompt_button_sell_now"]'
        this.laterBtn = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/dialog_prompt_button_later"]'
        this.shopBtn = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/dialog_prompt_button_shop"]'
    }

    tapSellNow() {
        Helper.waitTap(this.sellNowBtn)
    }

    tapLater() {
        Helper.waitTap(this.laterBtn)
    }

    tapShop() {
        Helper.waitTap(this.shopBtn)
    }
}