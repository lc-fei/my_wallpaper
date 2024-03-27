"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const utils_system = require("../../utils/system.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const currentInfo = common_vendor.ref();
    let userScore = common_vendor.ref("5");
    const clickInfo = () => {
      if (infoPopup.value) {
        infoPopup.value.open();
      }
    };
    const clickInfoClose = () => {
      if (infoPopup.value) {
        infoPopup.value.close();
      }
    };
    const clickScore = () => {
      if (scorePopup.value) {
        scorePopup.value.open();
      }
    };
    const clickScoreClose = () => {
      if (scorePopup.value) {
        scorePopup.value.close();
      }
    };
    const submitScore = async () => {
      var _a;
      try {
        common_vendor.index.showLoading({
          title: "加载中..."
        });
        clickScoreClose();
        const res = await api_api.apiSetupScore({
          classid: classifyRef.value,
          wallId: (_a = currentInfo.value) == null ? void 0 : _a._id,
          userScore: userScore.value
        });
        console.log(res, "ressss");
        if (res.errCode === 0) {
          common_vendor.index.showToast({
            title: "评分成功",
            icon: "none"
          });
          console.log("评分了");
          storeClassList.value[index.value].userScore = userScore.value;
          storeClassList.value[index.value].isScore = true;
          common_vendor.index.setStorageSync("storeClassList", storeClassList);
        } else {
          common_vendor.index.showToast({
            title: res.errMsg,
            icon: "none"
          });
        }
      } catch (e) {
        console.log(e.message);
        common_vendor.index.hideLoading();
      }
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const BtDownload = async () => {
      var _a;
      try {
        common_vendor.index.showLoading({
          title: "加载中...",
          mask: true
        });
        let {
          classid,
          _id: wallId
        } = currentInfo.value;
        let res = await api_api.apiWriteDownload({
          classid,
          wallId
        });
        common_vendor.index.getImageInfo({
          src: (_a = currentInfo.value) == null ? void 0 : _a.picurl,
          success: (res2) => {
            const { path } = res2;
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: path,
              success: (res3) => {
                console.log("chenggl");
              },
              fail: (err) => {
                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  common_vendor.index.showToast({
                    title: "保存失败，请重新点击下载",
                    icon: "none"
                  });
                  return;
                }
                common_vendor.index.showModal({
                  title: "授权提示",
                  content: "需要授权保存相册",
                  success: (res3) => {
                    if (res3.confirm) {
                      common_vendor.index.openSetting({
                        success: (setting) => {
                          console.log(
                            setting
                          );
                          if (setting.authSetting["scope.writePhotosAlbum"]) {
                            common_vendor.index.showToast({
                              title: "获取授权成功",
                              icon: "none"
                            });
                          } else {
                            common_vendor.index.showToast({
                              title: "获取权限失败",
                              icon: "none"
                            });
                          }
                        }
                      });
                    }
                  }
                });
              },
              complete: () => {
                common_vendor.index.hideLoading();
              }
            });
          },
          fail: (e) => {
            console.log("获取临时地址失败", e);
            throw new Error(e);
          }
        });
      } catch (e) {
        common_vendor.index.showModal({
          content: e.message
        });
      }
    };
    let storeClassList = common_vendor.ref(common_vendor.index.getStorageSync("storeClassList") || null);
    let index = common_vendor.ref(0);
    const classifyRef = common_vendor.ref();
    let currentList = common_vendor.ref([]);
    const addList = (index2) => {
      var _a;
      (_a = currentList.value) == null ? void 0 : _a.push(
        index2,
        index2 === 0 ? storeClassList.value.length - 1 : index2 - 1,
        index2 === storeClassList.value.length ? 0 : index2 + 1
      );
      currentList.value = [...new Set(currentList.value)];
    };
    storeClassList.value = storeClassList.value.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    common_vendor.onLoad((e) => {
      if (e) {
        const { id, classify } = e;
        classifyRef.value = classify;
        index.value = storeClassList.value.findIndex((item) => item._id === id);
        currentInfo.value = storeClassList.value[index.value];
        addList(index.value);
      }
    });
    const indexChange = (e) => {
      index.value = e.detail.current;
      currentInfo.value = storeClassList.value[index.value];
      addList(index.value);
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(storeClassList), (item, index2, i0) => {
          var _a2, _b2;
          return common_vendor.e({
            a: (_a2 = common_vendor.unref(currentList)) == null ? void 0 : _a2.includes(index2)
          }, ((_b2 = common_vendor.unref(currentList)) == null ? void 0 : _b2.includes(index2)) ? {
            b: common_vendor.o(maskChange),
            c: item.picurl
          } : {});
        }),
        b: common_vendor.unref(index),
        c: common_vendor.o(indexChange),
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.o(goBack),
        g: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        h: common_vendor.t(common_vendor.unref(index) + 1),
        i: common_vendor.t(common_vendor.unref(storeClassList).length),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        l: common_vendor.p({
          type: "info",
          size: "28"
        }),
        m: common_vendor.o(clickInfo),
        n: common_vendor.p({
          type: "star",
          size: "28"
        }),
        o: common_vendor.t((_a = currentInfo.value) == null ? void 0 : _a.score),
        p: common_vendor.o(clickScore),
        q: common_vendor.p({
          type: "download",
          size: "23"
        }),
        r: common_vendor.o(BtDownload)
      } : {}, {
        s: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        t: common_vendor.o(clickInfoClose),
        v: common_vendor.t((_b = currentInfo.value) == null ? void 0 : _b._id),
        w: common_vendor.t(classifyRef.value),
        x: common_vendor.t((_c = currentInfo.value) == null ? void 0 : _c.nickname),
        y: common_vendor.p({
          readonly: true,
          touchable: true,
          value: "3.5",
          size: "16"
        }),
        z: common_vendor.t((_d = currentInfo.value) == null ? void 0 : _d.score),
        A: common_vendor.t((_e = currentInfo.value) == null ? void 0 : _e.description),
        B: common_vendor.f((_f = currentInfo.value) == null ? void 0 : _f.tabs, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        C: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        D: common_vendor.p({
          type: "bottom"
        }),
        E: (_g = currentInfo.value) == null ? void 0 : _g.isScore
      }, ((_h = currentInfo.value) == null ? void 0 : _h.isScore) ? {} : {}, {
        F: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        G: common_vendor.o(clickScoreClose),
        H: (_i = currentInfo.value) == null ? void 0 : _i.isScore
      }, ((_j = currentInfo.value) == null ? void 0 : _j.isScore) ? {
        I: common_vendor.p({
          value: currentInfo.value.userScore,
          allowHalf: true,
          disabled: true,
          color: "#FFCA3E"
        }),
        J: common_vendor.t(currentInfo.value.userScore)
      } : {
        K: common_vendor.o(($event) => common_vendor.isRef(userScore) ? userScore.value = $event : userScore = $event),
        L: common_vendor.p({
          allowHalf: true,
          modelValue: common_vendor.unref(userScore)
        }),
        M: common_vendor.t(common_vendor.unref(userScore))
      }, {
        N: common_vendor.o(submitScore),
        O: (_k = currentInfo.value) == null ? void 0 : _k.isScore,
        P: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        Q: common_vendor.p({
          ["is-mask-click"]: false
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"], ["__file", "C:/Users/fei/Desktop/my_wallpaper/pages/preview/preview.vue"]]);
wx.createPage(MiniProgramPage);
