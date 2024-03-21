"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_search_bar = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_uv_empty = common_vendor.resolveComponent("uv-empty");
  const _component_uni_load_more = common_vendor.resolveComponent("uni-load-more");
  (_component_uni_search_bar + _easycom_uni_icons2 + _component_uv_empty + _component_uni_load_more)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const queryParams = common_vendor.ref({
      pageNum: 1,
      pageSize: 12,
      keyword: ""
    });
    const historySearch = common_vendor.ref(["搜索词1", "搜索词2", "搜索词3", "搜索词4"]);
    const recommendList = common_vendor.ref(["美女", "帅哥", "宠物", "卡通"]);
    const noData = common_vendor.ref(false);
    common_vendor.ref(false);
    const classList = common_vendor.ref([{
      _id: 123123,
      smallPicurl: "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/xxmBizhi/20231102/1698905562410_0_small.webp"
    }]);
    const onSearch = () => {
    };
    const onClear = () => {
    };
    const clickTab = (value) => {
    };
    const removeHistory = () => {
      common_vendor.index.showModal({
        title: "是否清空历史搜索？",
        success: (res) => {
          if (res.confirm) {
            console.log("确认删除");
          }
        }
      });
    };
    common_vendor.onReachBottom(() => {
    });
    common_vendor.onUnload(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(onSearch),
        b: common_vendor.o(onClear),
        c: common_vendor.o(onClear),
        d: common_vendor.o(($event) => queryParams.value.keyword = $event),
        e: common_vendor.p({
          focus: true,
          placeholder: "搜索",
          modelValue: queryParams.value.keyword
        }),
        f: common_vendor.p({
          type: "trash",
          size: "25"
        }),
        g: common_vendor.o(removeHistory),
        h: common_vendor.f(historySearch.value, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tab,
            c: common_vendor.o(($event) => clickTab(), tab)
          };
        }),
        i: common_vendor.f(recommendList.value, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tab,
            c: common_vendor.o(($event) => clickTab(), tab)
          };
        }),
        j: common_vendor.p({
          mode: "search",
          icon: "http://cdn.uviewui.com/uview/empty/search.png"
        }),
        k: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id
          };
        }),
        l: `/pages/preview/preview`,
        m: noData.value || classList.value.length
      }, noData.value || classList.value.length ? {
        n: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"], ["__file", "C:/Users/fei/Desktop/my_wallpaper/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
