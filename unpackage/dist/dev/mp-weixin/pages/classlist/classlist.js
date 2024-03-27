"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const utils_common = require("../../utils/common.js");
require("../../utils/request.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "classlist",
  setup(__props) {
    const classList = common_vendor.ref([]);
    const num = common_vendor.ref(1);
    const idRef = common_vendor.ref();
    const noData = common_vendor.ref(false);
    const nameRef = common_vendor.ref();
    const getClassList = async () => {
      const res = await api_api.apiWallList({
        classid: idRef.value,
        pageNum: num.value,
        pageSize: 12
      });
      num.value++;
      if (res.data.length === 0)
        noData.value = true;
      classList.value = [...classList.value, ...res.data];
      common_vendor.index.setStorageSync("storeClassList", classList.value);
    };
    common_vendor.onLoad(async (e) => {
      if (e) {
        const { id, name } = e;
        if (!id) {
          utils_common.gotoHome();
        }
        idRef.value = id;
        nameRef.value = name;
        common_vendor.index.setNavigationBarTitle({
          title: name
        });
        getClassList();
        console.log("获取数据", classList.value);
      }
    });
    common_vendor.onReachBottom(() => {
      if (!noData.value) {
        getClassList();
        console.log("触底", classList.value);
      } else {
        console.log("触底，但是没有了");
      }
    });
    common_vendor.onUnload(() => {
      common_vendor.index.removeStorageSync("storeClassList");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: "/pages/preview/preview?id=" + item._id + "&classify=" + nameRef.value
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"], ["__file", "C:/Users/fei/Desktop/my_wallpaper/pages/classlist/classlist.vue"]]);
wx.createPage(MiniProgramPage);
