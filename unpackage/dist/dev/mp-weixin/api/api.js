"use strict";
const utils_request = require("../utils/request.js");
const getHomeBanner = () => {
  return utils_request.request({
    url: "/homeBanner"
  });
};
const getClassify = (data) => {
  return utils_request.request({
    url: "/classify",
    data
  });
};
const apiGetDayRandom = () => {
  return utils_request.request({ url: "/randomWall" });
};
const apiGetNotice = (data = {}) => {
  return utils_request.request({
    url: "/wallNewsList",
    data
  });
};
const apiWallList = (data = {}) => {
  return utils_request.request({
    url: "/wallList",
    data
  });
};
const apiSetupScore = (data = {}) => {
  return utils_request.request({
    url: "/setupScore",
    data
  });
};
const apiWriteDownload = (data = {}) => {
  return utils_request.request({
    url: "/downloadWall",
    data
  });
};
const apiSearchData = (data = {}) => {
  return utils_request.request({
    url: "/searchWall",
    data
  });
};
exports.apiGetDayRandom = apiGetDayRandom;
exports.apiGetNotice = apiGetNotice;
exports.apiSearchData = apiSearchData;
exports.apiSetupScore = apiSetupScore;
exports.apiWallList = apiWallList;
exports.apiWriteDownload = apiWriteDownload;
exports.getClassify = getClassify;
exports.getHomeBanner = getHomeBanner;
