"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "user-nav",
  props: {
    url: {
      type: String
    },
    iconName: {
      type: String
    },
    text: {
      type: String
    },
    isNumber: {
      type: Boolean,
      default: false
    },
    number: {
      type: Number
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          type: __props.iconName,
          size: "25"
        }),
        b: common_vendor.t(__props.text),
        c: __props.isNumber
      }, __props.isNumber ? {
        d: common_vendor.t(__props.number)
      } : {}, {
        e: common_vendor.p({
          type: "right",
          size: "20",
          color: "#666"
        }),
        f: __props.url
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-df04dcc1"], ["__file", "C:/Users/fei/Desktop/my_wallpaper/components/user-nav/user-nav.vue"]]);
wx.createComponent(Component);
