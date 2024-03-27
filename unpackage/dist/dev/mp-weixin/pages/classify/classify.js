"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_theme_item)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "classify",
  setup(__props) {
    let classifyData = common_vendor.ref(void 0);
    const myGetClassify = async () => {
      classifyData.value = (await api_api.getClassify({
        pageSize: 20
      })).data;
      console.log("专题精选", classifyData.value);
    };
    myGetClassify();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.f(common_vendor.unref(classifyData), (item, k0, i0) => {
          return {
            a: item._id,
            b: "503decbd-1-" + i0,
            c: common_vendor.p({
              data: item,
              id: item._id
            })
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/fei/Desktop/my_wallpaper/pages/classify/classify.vue"]]);
wx.createPage(MiniProgramPage);
