// worksShow部分获取数据
ajax("/data/data.json", "GET").then(data => {
    applypublic(data);
    let serveData = new Array();
    let serveItem = '';
    let nav;
    let navText = "";
    let firstNum = window.location.search.substring(4, 5); // 婚纱摄影
    let num = window.location.search.substring(8, 9); // 婚纱摄影
    console.log(firstNum, num);
    // const logo = `<img src="/${data.nav[firstNum].logo}"/>`;
    // $(logo).appendTo($('#logo'));
    serveData = data.nav[firstNum].content.item[num];
    // 内容导航项
    nav = `<a href="${data.nav[firstNum].linkUrl}?id=${firstNum}" class="hidden-xs subMenu-title-link">${data.nav[firstNum].CTindex}</a>
            <span class="hidden-xs"> >> </span>
            <a href="${serveData.imgUrl}?id=${firstNum}&p=${num}" class="subMenu-title-link">${serveData.txt}<span class="visible-xs pull-right"> >> </span></a>`;
    // 内容导航分类；
    for (let i = 0; i < data.nav[firstNum].content.item.length;i++) {
        navText += `<li class="subMenu-content-worksShow-nav">
                <a href="${data.nav[1].linkUrl}?id=${firstNum}&p=${i}" class="subMenu-content-worksShow-nav-link">
                    <span class="subMenu-nav-txt">${data.nav[firstNum].content.item[i].txt}</span>
                </a>
            </li>`;
    }
    for(let i = 0; i < serveData.serviceItem.length; i++) {
        serveItem += `<li class="production-content-item">
            <div class="production-content-img">
                <a href="${serveData.serviceItem[i].linkUrl}?id=${firstNum}&p=${num}&c=${i}" class="production-content-link">
                    <img src="${serveData.serviceItem[i].imgUrl}" alt="">
                </a>
            </div>
            <div class="production-content-txt">
                <a href="${serveData.serviceItem[i].linkUrl}?id=${firstNum}&p=${num}&c=${i}" class="production-content-txt-title">${serveData.serviceItem[i].txt}</a>
                <span class="production-content-txt-describe">描述信息 <span>${serveData.serviceItem[i].simpleness}</span></span>
            </div>
        </li>`
    };
    $(serveItem).appendTo($('.production-content'));
    $(nav).appendTo($('.subMenu-title'));
    $(navText).appendTo($('.subMenu-content-worksShow'));
    var subMenuNavTxt = $('.subMenu-nav-txt');
    subMenuNavTxt.eq(num).css({"border":"2px solid #DC0411", "box-sizing":"border-box"}).siblings().css({"border":"none", "box-sizing":"border-box"});
}).catch(err => {
    console.log('数据获取失败！');
});
