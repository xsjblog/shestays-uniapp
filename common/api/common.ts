import {
	get,
	post,
	deletes
} from '@/common/js/request.js';

import store from '../../store/index.js'
import config from "@/common/config";

/**
 * 获取用户信息
 * @returns {Promise}
 */
export function getUserInfo(params,type) {
  return get('user/get/info',params,options)
}

/**
 * 手机号登录
 * @param {string} code 验证码
 * @param {string} phone 手机号
 * @returns {Promise}
 */
export function phoneLogin(code, phone) {
	return post('mch/merchant/login/phone', {
		code,
		phone,
	})
}

/**
 * 微信授权手机号登录
 * @param {string} code 鉴权码
 * @returns {Promise}
 */
export function wxGetPhoneLogin(code) {
	return post('mch/merchant/login/wx/phone', {
		code,
	})
}


/**
 * 微信授权登录
 */
export function userAuthor(param) {
	return post('userAuthor', param)
}


//接口名称：探索页面接口(房源列表)接口
export function getHouseList(params: any) {
	return get('getHouseList', params)
}

//接口名称：搜索
export function getHouseByRegion(params: any) {
	return get('getHouseByRegion', params)
}

//接口名称：搜索推荐
export function getName() {
	return get('getRecommendCountryName')
}

//接口名称：国家查询接口
export function getNation() {
	return get('getNation')
}

//接口名称：省查询接口
export function getRegion(params) {
	return get('getRegion',params)
}

//接口名称：地区查询接口
export function getCity(params) {
	return get('getCity',params)
}

//接口名称：城市查询接口
export function getDistrict(params) {
	return get('getDistrict',params)
}

//接口名称：房源详情接口
export function getHouseDetail(params) {
	return get('getHouseById',params)
}

/**
 * 接口名称：编辑个人信息接口
 */
export function editUserData(param) {
	return post('editUserData', param)
}


//接口名称：根据id查询用户详情接口
export function getUserInfoByOpenId(params) {
	return get('getUserInfoByOpenId',params)
}

//接口名称：个人房源管理查询接口
export function getHouseByUserId(params) {
	return get('getHouseByUserId',params)
}

//接口名称：头像上传
export function uploadAvatar(params) {
	return post('uploadAvatar',params)
}

// 查看房源待审核
export function getUnderViewHouse() {
	return get('getUnderViewHouse')
}

// 提交房源信息
export function uploadHouse(params = {}) {
	return post('uploadHouse', params)
}

// 房源审核接口
export function review(params = {}) {
	return post('review', params)
}

//接口名称：删除房源
export function houseDel(params) {
	return deletes('houseDel',params)
}

// 房源审核接口
export function houseOffline(params = {}) {
	return post('houseOffline', params)
}

// 接口埋点
export function saveBuriedPoint(params = {}) {
	return post('saveBuriedPoint', params)
}

// 根据用户ID查询用户信息
export function getUserInfoByUserId(params = {}) {
	return get('getUserInfoByUserId', params)
}

// 根据用户ID，查询上线房源
export function getOnlineHouseInfoByUserId(params = {}) {
	return get('getOnlineHouseInfoByUserId', params)
}