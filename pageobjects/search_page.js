import Helper from '../helper'

export default new class CategoryPage {
    constructor() {
        this.tooltipBtn = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/feature_button"]'
        this.category = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/bar_collection_title"]'
        this.categoryName = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/text_collection" and @text="categoryname"]'
        this.filter = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/bar_filter_title"]'
        this.sort = '//android.widget.RadioButton[@text="sort"]'
        this.sortRecent = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/text_sort_recent"]'
        this.applyBtn = '//android.widget.Button[@resource-id="com.thecarousell.Carousell:id/btn_filter"]'
        this.cardList = '//android.widget.FrameLayout[@resource-id="com.thecarousell.Carousell:id/card_product"]'
        this.itemName = '//android.widget.TextView[@resource-id="com.thecarousell.Carousell:id/text_attribute_1" and @text="item"]'
    }

    closeTooltip() {
        Helper.waitTap(this.tooltipBtn)
    }

    selectCategory(category) {
        Helper.waitTap(this.category)
        for (var i = 0; i < 200; i++) {
            if (browser.isVisible(this.categoryName.replace('categoryname', category)) == false) {
                Helper.scrollDown()
            } else {
                break
            }
        }
        Helper.waitTap(this.categoryName.replace('categoryname', category))
    }

    selectSorting(sort) {
        Helper.waitTap(this.filter)
        if (sort == 'Recent') {
            // Helper.waitTap(this.sortRecent)
            Helper.waitTap(this.sort.replace('sort', sort))
        }
    }

    applyFilter() {
        Helper.waitTap(this.applyBtn)
    }

    scrollToItem(item) {
        for (var i = 0; i < 200; i++) {
            if (browser.isVisible(this.itemName.replace('item', item)) == false) {
                Helper.scrollDown()
            } else {
                break
            }
        }
    }
}