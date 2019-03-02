const uzStorage = function () {
    let ls = window.localStorage;
    return ls;
};
//定义全局变量u
let U = {};
//设置缓存
U.setStorage = (key, value) => {
    let v = value;
    if (typeof value == 'object') {
        v = JSON.stringify(v);
    }
    let ls = uzStorage();
    if (ls) {
        ls.setItem(key, v);
    }
};
//获取缓存
U.getStorage = function (key) {
    let ls = uzStorage();
    if (ls) {
        let v = ls.getItem(key);
        if (!v) {
            return;
        }
        if (v == 'object') {
            return JSON.parse(v);
        } else if (typeof v == '') {
            return v;
        }
    }
};
let num = 0;
let lastNum;
let firstNum = window.location.search.substring(4, 5); // 首页
let childrenNum = window.location.search.substring(8, 9); // 子页

if (window.location.search.lastIndexOf("=")) {
    let lastIndex = window.location.search.lastIndexOf("=");
    lastNum = window.location.search.substring(lastIndex+1);
}
console.log(firstNum, childrenNum, lastNum);
if (U.getStorage('data')) {
    const data = U.getStorage('data');
    console.log(data);
    applypublic(data);
    // getpersonInfo(data, num);
} else {
    // worksShow部分获取数据
    ajax("/data/data.json", "GET").then(data => {
        applypublic(data);
        getpersonInfo(data, lastNum);
        U.setStorage('data', data);
    }).catch(err => {
        console.log('数据获取失败！');
    });
}
// 获取个人信息
const getpersonInfo = (data, lastNum) => {
    // debugger;
    let txt;
    let nav;
    let navData;
    let sum;
    let serveData = new Array();
    let nexts = 0;
    let prevs = 0;
    serveData = data.nav[firstNum].content.item[childrenNum].serviceItem[lastNum].personInfo;
    const linkUrls = data.nav[firstNum].content.item[childrenNum].serviceItem[lastNum];
    console.log(serveData);
    navData = data.nav[firstNum].content.item[childrenNum].txt;
    nav = `<a href="${data.nav[firstNum].linkUrl}" class="subMenu-title-link">${data.nav[firstNum].CTindex}</a>
            <span> >> </span>
            <a href="${data.nav[firstNum].content.item[childrenNum].imgUrl}?id=${firstNum}&p=${childrenNum}" class="subMenu-title-link">${navData}</a>
            <span> >> </span>
            <span href="javascript:;" class="subMenu-title-link">${serveData.caption}</span>`;

    txt = `<div class="personInfo-content-title">
               <h3 class="personInfo-content-caption">${serveData.caption}</h3>
               <p class="personInfo-content-time">发布时间：<span>${serveData.time}</span></p>
           </div>
           <p class="personInfo-content-paragraph">${serveData.paragraph}</p>
           <video class="personInfoVideo" width="800" height="600" controls preload="auto" poster="${serveData.posters}">
             <source src="${serveData.videoUrl}" type="${serveData.types}">
           </video>`;
    console.log(nexts, prevs);
    console.log(typeof prevs);
    $(nav).appendTo($('.subMenu-title'));
    // 显示页面
    try {
        nexts = parseInt(lastNum) + 1;
        if (lastNum != 0) {
            prevs = parseInt(lastNum) - 1;
            console.log(lastNum);
        }else {
            prevs = lastNum;
        }
        $('.personInfo-prev-link').html(data.nav[firstNum].content.item[childrenNum].serviceItem[prevs].personInfo.caption);
        $('.personInfo-next-link').html(data.nav[firstNum].content.item[childrenNum].serviceItem[nexts].personInfo.caption);
    }catch(err) {
        $('.personInfo-next-link').html('已经没有内容！');
        $('.personInfo-prev-link').html(data.nav[firstNum].content.item[childrenNum].serviceItem[lastNum].personInfo.caption);
    }
    $(txt).appendTo($('.personInfo-content-text'));
    console.log(lastNum, prevs, nexts);
};
