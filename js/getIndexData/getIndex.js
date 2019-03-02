// 首页部分获取数据
ajax("/data/data.json", "GET").then(data => {
    // header、banner、footer 内容渲染
    applypublic(data);
    // 首页渲染
    let serveData = new Array();
    let serveItem = '';
    serveData = data.nav[0].content;
    // var logo = `<img src="${data.head.nav[0].logo}"/>`;
    // $(logo).appendTo($('#logo-head'));
    $('.subMenu-title').html(serveData.title);
    for(let i = 0; i < serveData.item.length; i++) {
        serveItem += `<li class="subMenu-content-nav"><a href="${serveData.item[i].imgUrl}?id=0&p=${i}" data-num="${i}" class="subMenu-content-nav-link"><span class="animated zoomInDown delay-2s iconfont ${serveData.item[i].icon} icon"></span><span class="subMenu-nav-txt">${serveData.item[i].txt}</span></a></li>`
    }
    $(serveItem).appendTo($('.subMenu-content'));
}).catch(err => {
    console.log('数据获取失败！');
});

