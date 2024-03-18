"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_user_nav2 = common_vendor.resolveComponent("user-nav");
  _easycom_user_nav2();
}
const _easycom_user_nav = () => "../../components/user-nav/user-nav.js";
if (!Math) {
  _easycom_user_nav();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      url: "/pages/classlist/classlist",
      iconName: "download-filled",
      text: "我的下载",
      isNumber: "true",
      number: "1"
    }),
    b: common_vendor.p({
      url: "/pages/classlist/classlist",
      iconName: "star-filled",
      text: "我的评分",
      isNumber: "true",
      number: "1"
    }),
    c: common_vendor.p({
      url: "/pages/classlist/classlist",
      iconName: "chatboxes-filled",
      text: "联系客服"
    }),
    d: common_vendor.p({
      url: "/pages/classlist/classlist",
      iconName: "notification-filled",
      text: "订阅更新"
    }),
    e: common_vendor.p({
      url: "/pages/classlist/classlist",
      iconName: "flag-filled",
      text: "常见问题"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/fei/Desktop/my_wallpaper/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
