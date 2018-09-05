import Helper from '../helper'

export default new class SystemPage {
    constructor() {
        this.galleryBtn = '//android.widget.TextView[@text="Choose From Gallery"]'
        this.allowBtn = '//android.widget.Button[@resource-id="com.android.packageinstaller:id/permission_allow_button"]'
        this.nextBtn = '//android.widget.TextView[@content-desc="image_selection_page_next_button"]'
        this.pic1 = '//android.support.v7.widget.RecyclerView/android.widget.FrameLayout[@content-desc="image_selection_page_photo_1"]'
    }

    tapGallery() {
        Helper.waitTap(this.galleryBtn)
    }

    tapAllow() {
        Helper.waitTap(this.allowBtn)
    }

    tapNext() {
        Helper.waitTap(this.nextBtn)
    }

    tapPic1() {
        Helper.waitTap(this.pic1)
    }

    addAvatar() {
        this.tapGallery()
        this.tapAllow() // alllow permission to access photo
        this.tapPic1()
        this.tapNext()
    }
}