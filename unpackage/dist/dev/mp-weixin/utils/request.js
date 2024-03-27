"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "https://tea.qingnian8.com/api/bizhi";
const request = (config) => {
  const { url, data = {}, method, header = {} } = config;
  const ComUrl = BASE_URL + url;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: ComUrl,
      data,
      method,
      header,
      success: (res) => {
        if (res.data.errCode === 0)
          resolve(res.data);
        else if (res.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错 误",
            content: res.data.errMsg,
            showCancel: false
          });
          reject(res.data);
        } else {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
exports.request = request;
