// ajax 封装请求本地数据
function ajax(htp, type) {
    const promise = new Promise((resolve, reject) => {
        $.ajax({
            url: htp, // 请求地址
            type: type, // 请求方式
            async: true, // 是否异步
            dataType: 'json', // 数据格式
            success: function(res) { // 成功回调
                if (res.code === "0") {
                    resolve(res);
                }
            },
            error: function(err) { // 失败回调
                reject(err);
            }
        });
    });
    return promise;
}
