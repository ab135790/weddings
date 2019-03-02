// 首页部分获取数据
ajax("/data/data.json", "GET").then(data => {
    // header、banner、footer 内容渲染
    applypublic(data);
    // 联系我们页面渲染
    const firstNum = window.location.search.substring(4, 5);
    const contentData = data.nav[firstNum].content;
    let contentMap = ""; // 地图的内容
    let addressInfo = ""; // ul.address-detail 的内容
    let addressInfoItem = ""; // 联系信息内容
    let addressHeaderInfo = ""; // 定义标题和宣言内容
    // 遍历json数据 并渲染右边联系详情信息；
    Object.keys(contentData).forEach(value => {
            console.log(contentData[value] instanceof Array);
            if (contentData[value] instanceof Array) {
                for(let i = 0; i < contentData[value].length; i++) {
                    console.log(contentData[value][i]);
                    addressInfoItem +=`<li class="animated fadeInRight delay-2s address-detail-info"><span class="iconfont ${contentData[value][i].icon}"></span>${contentData[value][i].info}</li>`;
                }
                addressInfo = `<ul class="address-detail">${addressInfoItem}</ul>`;
            }
        });
    // 渲染百度地图数据;
    contentMap = `<script type="text/javascript" src="${contentData.scriptSrc}"></script><iframe class="address-box-map" width="504" height="365" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${contentData.iframeSrc}"></iframe>`;
    console.log(contentMap);
    // 渲染标题和宣言内容
    addressHeaderInfo = `<div class="animated fadeInRight delay-1s address-title">${contentData.title}</div><p class="animated fadeInRight delay-2s address-manifesto">${contentData.manifesto}</p>`;
    $(contentMap).appendTo($('#addressLeft'));
    $(addressHeaderInfo).appendTo($('.address-right'));
    $(addressInfo).appendTo($('.address-right'));
}).catch(err => {
    console.log('数据获取失败！');
});
