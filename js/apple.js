// $(function(){
//     $(".dh a.list ").click(function(){
//         $(this).children().add("active");
//         // console.log($(".dh .dhCard"));
//     })
// });



window.onload=function(){
    // 要旋转的两条线
    let list1 = document.querySelector(".dh .list .topH");
    let list2 = document.querySelector(".dh .list .bottomH");
    console.log(list1, list2);

//    要下拉的列表
    let list=document.querySelector(".dh .dhCard");
//    旋转的事件源
    let button1 = document.querySelector(".dh .list");
    button1.onclick=function(){
        if(list.style.height!="800px"){
        list1.classList.add("active1");
        list2.classList.add("active2");
        animate(list,{height:800});
        }else {
            list1.classList.remove("active1");
            list2.classList.remove("active2");
            animate(list,{height:0});
        }
    };


    //    获取下面所有加号
    let jias=document.querySelectorAll(".bottom .text i");
    // 获取所有底部下拉
    let textCards=document.querySelectorAll(".bottom  .textCard");

    let uls=document.querySelectorAll(".bottom  .textCard ul");
    console.log(jias,textCards,uls);
    jias.forEach((value,index)=>{
        value.onclick=function () {
            if(textCards[index].style.height != "400px"){
                animate(textCards[index],{height:400});
                animate(uls[index],{display:"block"})
            }else{
                animate(textCards[index],{height:0});
            }
        }
    })


};