"use strict";
const common_vendor = require("../common/vendor.js");
const gotoHome = () => {
  common_vendor.index.showModal({
    title: "提示",
    content: "页面有误将返回首页",
    showCancel: false,
    success: (res) => {
      if (res.confirm) {
        common_vendor.index.reLaunch({
          url: "/pages/index/index"
        });
      }
    }
  });
};
exports.gotoHome = gotoHome;
