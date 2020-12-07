
function getOffsetTop(el){
    //console.log('test');
    let top = 0;
    //console.log(el);
    //console.log(el.offsetParent);
    //console.log(el.offsetTop);

    do{
        top += el.offsetTop;
        //console.log("top2",top);
    }
    while(el == el.offsetParent);
    //console.log("top3",top);
    return top;
}

function page(id){
    //console.log(id);
    window.scroll(0, getOffsetTop(document.getElementById(id)));
}

