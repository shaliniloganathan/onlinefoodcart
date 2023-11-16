// var i=0;
// var images=[];
// var time=3000;
// //image listassets/images/cup 4.jpg

// images[0]="cup 4.jpg"
// images[1]="cup 4.jpg"
// images[2]="cup 3.png"


// function changeimg(){
//     document.slide.src=images[i];
//     if(i<images.length -1){
//      i++
//     }else{
//         i=0;
//     }

//     setTimeout("changeimg()",time)
// }
// window.onload=changeimg;

var firstindex=0;

function automatic(){
    setTimeout(automatic,2000);
    var pics;

    const img=document.querySelectorAll(".slide");

    for(pics=0;pics<img.length;pics++){
        img[pics].style.display="none"
    }
    firstindex++;
    if(firstindex > img.length){
        firstindex=1;
    }
    img[firstindex -1].style.display="block";

}
automatic();


// var i=0;
// function header(){
//     setTimeout(header,2000);
//     var header1;
//     const h3=document.querySelectorAll("h3");
//     for(header1=0;header<h3.length;header1++){;
//     h3[header1].style.display="none";
// }

// i++;
// if(i>h3.length){
//     i=1
// }
//     h3[i-1].style.display="block";
// }
// header()
let list=document.querySelectorAll(".list2 .item");
let array=[];
list.forEach(item=>{
    item.addEventListener("click",function(event){
        localStorage.setItem('array',JSON.stringify(array))
        if(event.target.classList.contains('add')){
            var itemnew=item.cloneNode(true);
            let checkisset=false;
            let listcart=document.querySelectorAll('.cart .item');
            listcart.forEach(cart=>{
                if(cart.getAttribute('data-key')==itemnew.getAttribute('data-key')){
                checkisset=true;
                cart.classList.add('danger');
                setTimeout(function(){
                    cart.classList.remove('danger');
                },1000)
                }
               

            })
            if(checkisset == false){
                document.querySelector('.listcart').appendChild(itemnew);
            }
          

        }
    })
})
function remove($key){
let listcart = document.querySelectorAll('.cart .item');
listcart.forEach(item => {
    if(item.getAttribute('data-key') == $key){
        item.remove();
        return;
    }
})
}


