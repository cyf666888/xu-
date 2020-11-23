import http from './axios'


// 获取首页轮播图
export function getBannerList(){
    return http.get('/getbanner')
}

// 获取商品信息(首页)
export function getIndexGoods(){
    return http.get('/getindexgoods')
}