"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_1,
        c: common_assets._imports_2,
        d: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        e: common_vendor.f(4, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        f: common_vendor.p({
          type: "forward",
          size: "20",
          color: "#A7A7A7"
        }),
        g: common_vendor.p({
          type: "calendar",
          size: "30rpx"
        }),
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "dd日"
        }),
        i: common_vendor.f(6, (item, k0, i0) => {
          return {};
        }),
        j: common_assets._imports_3,
        k: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: "9fa7d43a-6-" + i0
          };
        }),
        l: common_vendor.p({
          isMore: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/fei/Desktop/my_wallpaper/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
