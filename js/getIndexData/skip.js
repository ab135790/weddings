// 跳转下一步传参
$('.personInfo-next-link').click(function() {
    // debugger;
    let data = "";
    data = JSON.parse(localStorage.getItem('data'));
    let len = data.nav[num].content.item[num].serviceItem.length;
    if (lastNum < len-1) {
        $('.personInfo-content-text').html("");
        $('.subMenu-title').html("");
        getpersonInfo(data, ++lastNum);
        let destiny = location.href;
        window.location.href = changeURLPar(destiny, lastNum);
    } else if (lastNum >= len) {
        return;
    }
});
// 跳转上一步传参
$('.personInfo-prev-link').click(function() {
    if (lastNum > 0) {
        // debugger;
        let data = "";
        data = JSON.parse(localStorage.getItem('data'));
        console.log(lastNum);
        $('.personInfo-content-text').html("");
        $('.subMenu-title').html("");
        getpersonInfo(data, --lastNum);
        let destiny = location.href;
        console.log(destiny);
        window.location.href = changeURLPar(destiny, lastNum);
    } else if (lastNum <= 0){
        return;
    }
});
// 更新url地址
function changeURLPar(destiny, par_value) {
    // debugger;
    let a = destiny.substring(destiny.lastIndexOf('=')+1, 0) + par_value;
    return a;
}
