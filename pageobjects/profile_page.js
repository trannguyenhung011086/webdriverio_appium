import Helper from '../helper'

export default new class ProfilePage {
    constructor() {
        this.profileUrl = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/text_website"]'
        this.verifyMsg = '//android.widget.TextView[@text="Users cannot browse your listings unless you verify your email"]'
        this.verifyEmail = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/overlay_text_verification_action"]'
        this.resendBtn = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/overlay_button_verification"]'
    }
}