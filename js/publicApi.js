// 公共部分获取数据
const applypublic = data => {
    let aboutContent = "";
    let bannerContent = "";
    let bannerTitle = "";
    let headContent = "";
    let headnavs = "";
    let logo = "";
    const indexAbout = data.about;
    // 创建导航项
    for (let j = 0; j < data.nav.length; j++) {
        headnavs += `<a href="${data.nav[j].linkUrl}?id=${j}"><li class="item-link">${data.nav[j].CTindex}</li></a>`;
        // logo 渲染
        logo = `<img src="${data.nav[j].logo}"/>`;
    }
    //  创建banner轮播
    for(let i = 0; i < data.banner.length; i++) {
        if (i == 0) {
            bannerTitle += `<div class="bannerText"><h3 class="animated bounceIn bannerText-title">${data.banner[i].text}</h3><p class="animated bounceInUp delay-1s bannerText-content">${data.banner[i].Itext}</p></div>`
        } else if(i == 1){
            for (let j = 0; j < data.banner[i].img.length; j++) {
                bannerContent += `<div class="item"><img src="${data.banner[i].img[j].imgUrl}" alt="banner"></div>`;
            }
        }
    }
    // 创建关于我们尾部内容
    aboutContent = `<h3 class="about-content-title">${indexAbout.title}</h3><p class="about-content-txt">${indexAbout.content}</p><div class="about-copyright">${indexAbout.copyright}</div>`;
    // animated fadeIn delay-3s
    // animated bounceInRight delay-3s
    // animated fadeInUp delay-4s
    $(logo).appendTo($('#logo-head'));
    $(aboutContent).appendTo($('.about-content'));
    $(bannerContent).appendTo($('.carousel-inner'));
    $(bannerTitle).appendTo($('.carousel-inner'));
    $(headnavs).appendTo($('#navs'));
    $('.carousel-inner').find('.item').eq(0).addClass('active');
    $('#navs a:first-child').find('.item-link').addClass('actives');
    $('#navs a:nth-child(2)').attr('href',`${data.nav[0].content.item[0].imgUrl}?id=0&p=${0}`);
    $("body").hovers();
};

