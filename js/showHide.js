$.fn.hovers = function(){
    // 兼容ie8以下获取className
    var forms = {
        getElementsByClassName: function(str){
            var searchClass = str.searchClass;//存储要查找的类名
            var node = str.node|| document;//存储要查找的范围
            var tag = str.tag||'*';//存储一定范围内要查找的标签
            var result = [];
            // 判断浏览器不支持getElementsByClassName方法
            if(document.getElementsByClassName){ //如果浏览器支持
                var nodes = node.getElementsByClassName(searchClass);
                if(tag !=='*'){
                    for(var i=0;node=nodes[i++];){
                        if(node.tagName === tag.toUpperCase()){
                            result.push(node);
                        }
                    }
                }else{
                    result = nodes;
                }
                return result;
            }else{ //使IE8以下的浏览器能够支持该属性
                var els = node.getElementsByTagName(tag);
                var elsLen = els.length;
                var i,j;
                var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
                for(i = 0,j=0;i<elsLen;i++){
                    if(pattern.test(els[i].className)){  //检测正则表达式
                        result[j] = els[i];
                        j++;
                    }
                }
                return result;
            }
        }
    };
// 兼容ie8以下事件
    var EventUtil = {
        addEvent:function(ele,type,handler){
            if(ele.addEventListener){
                ele.addEventListener(type,handler,false);
            }else if(ele.attachEvent){
                ele.attachEvent('on' + type,handler);
            }
        }
    };
    // 循环数组；
    function each(array,fn){
        for(let i = 0; i < array.length;i++){
            fn(i,array[i]);
        }
    }
    let itemlinks = $('.item-link');
    // 遍历事件
    each(itemlinks, function(index, ele){
        $(ele).hover(function(){
            // console.log('111');
            $(ele).addClass('actives').siblings().removeClass('actives');
        },function(){
            $(ele).removeClass('actives');
        })
    });
    let icons = $('.subMenu-content-nav-link');
    each(icons, function(index, ele){
        $(ele).hover(function(){
            console.log('111');
           $(ele).css('color','red');
        },function(){
            $(ele).css('color','white');
        })
    });
    // var pageHead = $('#page-head');
    // var clientHeight = document.documentElement.clientHeight;
    // // var pageTop = pageHead.position().top;
    // $(window).scroll(function(){
    //     var HscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //     if ( HscrollTop >= 380) {
    //         // console.log(pageTop + HscrollTop);
    //         pageHead.css('background-color','rgba(47, 47, 52, 1)');
    //     } else if(HscrollTop < 380) {
    //         // console.log(pageTop + HscrollTop);
    //         pageHead.css('background-color','rgba(47, 47, 52, 0)');
    //     }
    // });
};
