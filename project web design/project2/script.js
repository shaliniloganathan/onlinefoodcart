let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto//slide 
var count=0;
var button=document.querySelector(".featurewishlist");
var countdisplay=document.getElementById("wishlist");
button.addEventListener("click",function(){
  count++;
 
  countdisplay.innerHTML=count;
})

var counter1 =0 ;
var button =document.querySelector(".featureadd1");
var counter1display=document.querySelector(".cart1");
button.addEventListener("click",function(){
  counter1++;
  
  counter1display.innerHTML=counter1;
})

var counter2 =0 ;
var button =document.querySelector(".featureadd2");
var button2=document.querySelector(".featureminus")
var counter2display=document.querySelector(".cart2");
button.addEventListener("click",function(){
  counter2++;
  
  counter2display.innerHTML=counter2;
})


var counter3 =0 ;
var button =document.querySelector(".featureadd3");
var counter3display=document.querySelector(".cart3");
button.addEventListener("click",function(){
  counter3++;
  counter3display.innerHTML=counter3;
})

var counter4 =0 ;
var button =document.querySelector(".featureadd4");
var counter4display=document.querySelector(".cart4");
button.addEventListener("click",function(){
  counter4++;
  counter4display.innerHTML=counter4;
})

 
// function handleclick(){
//   let get = document.getElementById("featureimg img");
//   let price=document.querySelector(".price");
// let val=get+price;
//   let shoppingcart =document.getElementById("rel").innerHTML=val;
//   // content.innerHTML+=item.innerHTML + content++
// }

// function increment() {
//   document.getElementById('demoInput').stepUp();
// }
// function decrement() {
//   document.getElementById('demoInput').stepDown();
// }



// const btnCart=document.querySelector('#cart-icon');
// const cart=document.querySelector('.cart');
// const btnClose=document.querySelector('#cart-close');

// btnCart.addEventListener('click',()=>{
//   cart.classList.add('cart-active');
// });

// btnClose.addEventListener('click',()=>{
//   cart.classList.remove('cart-active');
// });

// document.addEventListener('DOMContentLoaded',loadFood);

// function loadFood(){
//   loadContent();

// }

// function loadContent(){
//   //Remove Food Items  From Cart
//   let btnRemove=document.querySelectorAll('.cart-remove');
//   btnRemove.forEach((btn)=>{
//     btn.addEventListener('click',removeItem);
//   });

//   //Product Item Change Event
//   let qtyElements=document.querySelectorAll('.cart-quantity');
//   qtyElements.forEach((input)=>{
//     input.addEventListener('change',changeQty);
//   });

//   //Product Cart
  
//   let cartBtns=document.querySelectorAll('.add-cart');
//   cartBtns.forEach((btn)=>{
//     btn.addEventListener('click',addCart);
//   });

//   updateTotal();
// }


// //Remove Item
// function removeItem(){
//   if(confirm('Are Your Sure to Remove')){
//     let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
//     itemList=itemList.filter(el=>el.title!=title);
//     this.parentElement.remove();
//     loadContent();
//   }
// }

// //Change Quantity
// function changeQty(){
//   if(isNaN(this.value) || this.value<1){
//     this.value=1;
//   }
//   loadContent();
// }

// let itemList=[];

// //Add Cart
// function addCart(){
//  let food=this.parentElement;
//  let title=food.querySelector('.food-title').innerHTML;
//  let price=food.querySelector('.food-price').innerHTML;
//  let imgSrc=food.querySelector('.food-img').src;
//  //console.log(title,price,imgSrc);
 
//  let newProduct={title,price,imgSrc}

//  //Check Product already Exist in Cart
//  if(itemList.find((el)=>el.title==newProduct.title)){
//   alert("Product Already added in Cart");
//   return;
//  }else{
//   itemList.push(newProduct);
//  }


// let newProductElement= createCartProduct(title,price,imgSrc);
// let element=document.createElement('div');
// element.innerHTML=newProductElement;
// let cartBasket=document.querySelector('.cart-content');
// cartBasket.append(element);
// loadContent();
// }


// function createCartProduct(title,price,imgSrc){

//   return `
//   <div class="cart-box">
//   <img src="${imgSrc}" class="cart-img">
//   <div class="detail-box">
//     <div class="cart-food-title">${title}</div>
//     <div class="price-box">
//       <div class="cart-price">${price}</div>
//        <div class="cart-amt">${price}</div>
//    </div>
//     <input type="number" value="1" class="cart-quantity">
//   </div>
//   <ion-icon name="trash" class="cart-remove"></ion-icon>
// </div>
//   `;
// }

// function updateTotal()
// {
//   const cartItems=document.querySelectorAll('.cart-box');
//   const totalValue=document.querySelector('.total-price');

//   let total=0;

//   cartItems.forEach(product=>{
//     let priceElement=product.querySelector('.cart-price');
//     let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
//     let qty=product.querySelector('.cart-quantity').value;
//     total+=(price*qty);
//     product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

//   });

//   totalValue.innerHTML='Rs.'+total;


//   // Add Product Count in Cart Icon

//   const cartCount=document.querySelector('.cart-count');
//   let count=itemList.length;
//   cartCount.innerHTML=count;

//   if(count==0){
//     cartCount.style.display='none';
//   }else{
//     cartCount.style.display='block';
//   }


// }
let cart = {};
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

let tbody = document.getElementById("tbody");

for (let id in cart) {
    let item = cart[id];

    let tr = document.createElement('tr')

    let title_td = document.createElement('td')
    title_td.textContent = item.title
    tr.appendChild(title_td)
    document.getElementById("product1").appendChild(title_td)


    let price_td = document.createElement("td");
    price_td.textContent = item.price;
    tr.appendChild(price_td);

    let qty_td = document.createElement("td");
    qty_td.textContent = item.qty;
    tr.appendChild(qty_td);

    tbody.appendChild(tr)

    var img =document.createElement("img");
img.src="../../assets/images/img1.jpg";
var src=document.getElementById("product1");
src.appendChild(img);

}





