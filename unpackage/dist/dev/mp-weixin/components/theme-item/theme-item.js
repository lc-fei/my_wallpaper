"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "theme-item",
  props: {
    isMore: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object
    }
  },
  setup(__props) {
    const { isMore, data } = __props;
    let time = common_vendor.ref(0);
    common_vendor.onMounted(() => {
      if (data) {
        time.value = Math.floor((Date.now() * 1 - data.updateTime) / 1e3 / 3600 / 24);
      }
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? {
        b: __props.data.picurl,
        c: common_vendor.t(__props.data.name),
        d: common_vendor.t(common_vendor.unref(time)),
        e: "/pages/classlist/classlist?id=" + ((_a = __props.data) == null ? void 0 : _a._id) + "&name=" + ((_b = __props.data) == null ? void 0 : _b.name)
      } : {
        f: common_assets._imports_0,
        g: common_vendor.p({
          type: "more-filled",
          size: "34rpx",
          color: "#fff"
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4eafbca"], ["__file", "C:/Users/fei/Desktop/my_wallpaper/components/theme-item/theme-item.vue"]]);
wx.createComponent(Component);
