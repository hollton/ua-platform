/**
 * @function 浏览器设备检测
 * @authors  hollton (holltonliu@163.com)
 * @date     2018-08-15 12:02:28
 * @version  v1.0
 */
(function () {
    'use strict';
    
    /**
     * [userAgentDetect 浏览器userAgent检测，识别ios、android]
     * @return {[Object]} uaInfo:{ios:bool, android: bool}
     */
    var userAgentDetect = function(){
        var ua = navigator.userAgent.toLowerCase();
        var uaInfo = {};
        uaInfo.ios = ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        uaInfo.android = ua.indexOf('android') > -1;
        return uaInfo;
    };

    /**
     * [getPrimaryKey 遍历map返回第一个值不为空的key]
     * @param  {[Object]} mapData
     * @return {[String]} primaryKey
     */
    var getPrimaryKey = function(mapData){
        for(var i in mapData) {
            if(mapData[i]){
                return i;
            }
        }
    };

    /**
     * [platformDetect 浏览器platform检测，返回当前平台系统值]
     * @return {[String]} platform
     */
    var platformDetect = function(){
        var pl = navigator.platform.toLowerCase();
        var uaInfo = userAgentDetect();
        var plInfo = {};
        plInfo.mac = pl.indexOf('mac') > -1;
        plInfo.win = pl.indexOf('win') > -1;
        plInfo.iphone = pl.indexOf('iphone') > -1;
        plInfo.ipod = pl.indexOf('ipod') > -1;
        plInfo.ipad = pl.indexOf('ipad') > -1;
        plInfo.android = uaInfo.android || pl.indexOf('linux') > -1;
        return getPrimaryKey(plInfo);
    };

    window.uaPlatform = platformDetect();
})();
