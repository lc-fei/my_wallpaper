"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const bannerData = common_vendor.ref(void 0);
    const classifyData = common_vendor.ref(void 0);
    const randomList = common_vendor.ref([]);
    const noticeList = common_vendor.ref([]);
    const myGetHomeBanner = async () => {
      bannerData.value = (await api_api.getHomeBanner()).data;
      console.log("获取首页轮播图", bannerData.value);
    };
    const myGetClassify = async () => {
      classifyData.value = (await api_api.getClassify({
        select: true
      })).data;
      console.log("获取专题精选", classifyData.value);
    };
    const getDayRandom = async () => {
      let res = await api_api.apiGetDayRandom();
      randomList.value = res.data;
      console.log("获取随机推荐", randomList.value);
    };
    const getNotice = async () => {
      let res = await api_api.apiGetNotice({ select: true });
      noticeList.value = res.data;
      console.log("获取公告", noticeList.value);
    };
    const goPreview = (id) => {
      common_vendor.index.setStorageSync("storeClassList", randomList.value);
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview?id=" + id
      });
    };
    getDayRandom();
    getNotice();
    myGetHomeBanner();
    myGetClassify();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "首页"
        }),
        b: common_vendor.f(bannerData.value, (item, k0, i0) => {
          return {
            a: item.picurl,
            b: item.sort
          };
        }),
        c: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        d: common_vendor.f(noticeList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item._id
          };
        }),
        e: common_vendor.p({
          type: "forward",
          size: "20",
          color: "#A7A7A7"
        }),
        f: common_vendor.p({
          type: "calendar",
          size: "30rpx"
        }),
        g: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "dd日"
        }),
        h: common_vendor.f(randomList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id,
            c: common_vendor.o(($event) => goPreview(item._id), item._id)
          };
        }),
        i: common_vendor.f(classifyData.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "9fa7d43a-7-" + i0,
            c: common_vendor.p({
              data: item,
              isMore: false
            })
          };
        }),
        j: common_vendor.p({
          isMore: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/fei/Desktop/my_wallpaper/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
