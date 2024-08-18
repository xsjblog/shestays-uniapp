"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api_common = require("../../common/api/common.js");
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  _easycom_uni_swiper_dot2();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  (_easycom_uni_swiper_dot + DetailPopup)();
}
const DetailPopup = () => "../../components/DetailPopup.js";
const _sfc_main = {
  __name: "houseDetail",
  setup(__props) {
    const current = common_vendor.ref(0);
    const popShow = common_vendor.ref(false);
    const contactHost = (item) => {
      popShow.value = true;
    };
    const dotsStyles = {
      backgroundColor: "#D9D9D9",
      border: "1px rgb(217, 217, 217) soild",
      selectedBackgroundColor: "#D8336D",
      selectedBorder: "1px rgba(256, 256, 256, 1) solid",
      bottom: 50,
      width: 7,
      height: 7
    };
    const state = common_vendor.reactive({
      houseAmount: 1,
      countryName: "-",
      cityName: "-",
      startTime: "2024-06-02 00:00:00",
      endTime: "2024-06-04 00:00:00",
      describle: "1.爱干净\n2.保持安静\n3.爱干净",
      hostImageSrc: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao_ext/static/image/avatar-transparent.ea272b11.png",
      houseImgs: [
        {
          imgUrl: "https://res.klook.com/image/upload/q_85/activities/ori7zgidaf70ildeaazw.jpg",
          houseImgId: 1
        },
        {
          imgUrl: "https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/mn4cemkgx5r6fy6rgie6.webp",
          houseImgId: 2
        },
        {
          imgUrl: "https://res.klook.com/image/upload/q_85/activities/ori7zgidaf70ildeaazw.jpg",
          houseImgId: 3
        }
      ]
    });
    const formatDate = (time) => {
      return time ? time.split(" ")[0] : "";
    };
    const houseInfo = [
      {
        label: "房源开放日期",
        value: `${formatDate(state.startTime)}~${formatDate(state.endTime)}`
      },
      {
        label: "对房客姐妹说的话",
        value: state.describle
      }
    ];
    const onSwiperChange = (e) => {
      current.value = e.detail.current;
    };
    common_vendor.onLoad((options) => {
      common_api_common.getHouseDetail({ houseId: options == null ? void 0 : options.id }).then((res) => {
        const { code, data = {} } = res || {};
        if (code === 200) {
          state = {
            ...state,
            ...data
          };
          console.log(state, "************");
        }
      }).catch((error) => {
        console.log(error, "rrrr");
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(state.houseImgs, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: item.houseImgId
          };
        }),
        b: current.value,
        c: common_vendor.o(onSwiperChange),
        d: common_vendor.p({
          current: current.value,
          total: state.houseImgs.length,
          ["dots-styles"]: dotsStyles,
          info: state.houseImgs,
          mode: "dot"
        }),
        e: common_vendor.t(state.countryName),
        f: common_vendor.t(state.cityName),
        g: common_vendor.t(state.houseAmount),
        h: common_vendor.f(houseInfo, (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: common_vendor.t(item.value),
            c: index
          };
        }),
        i: state.hostImageSrc,
        j: common_vendor.t(state.hostName),
        k: common_vendor.o(contactHost),
        l: common_vendor.o(($event) => popShow.value = false),
        m: common_vendor.p({
          show: popShow.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a8f5680b"]]);
wx.createPage(MiniProgramPage);
