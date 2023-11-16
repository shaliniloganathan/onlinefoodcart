
// window.onload=function(){
//     const iconshopping = document.querySelector('.iconshopping');
// 	const cartbox = document.querySelector('.cartbox');
// 	iconshopping.addEventListener("click",function(){
// 		cartbox.classList.toggle('active');
// 	});
// }
// const menu =document.querySelector('.menu');
// const menulist=document.querySelector('nav ul');

// menu.addEventListener('click',()=>{
//     menulist.classList.toggle('showmenu');
// })



window.onload=function(){
    const iconshopping = document.querySelector('.iconshopping');
	const cartbox = document.querySelector('.cartbox');
	iconshopping.addEventListener("click",function(){
		cartbox.classList.toggle('active');
	});

const menu =document.querySelector('.menu');
const menulist=document.querySelector('nav ul');

menu.addEventListener('click',()=>{
    menulist.classList.toggle('showmenu');
})




const addtocart=document.getElementsByClassName('btn');



let items = [];

	for(let i=0; i<addtocart.length; i++){
		addtocart[i].addEventListener("click",function(e){
			if(typeof(Storage) !== 'undefined'){
				let item = {
						id:i+1,
						name:e.target.parentElement.children[0].textContent,
						price:e.target.parentElement.children[2].innerText,
						no:1,
                        total:i+1

					};
  
				if(JSON.parse(localStorage.getItem('items')) === null){
					items.push(item);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
				}else{
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}
                        else{
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
				}
			}else{
				alert('local storage is not working on your browser');
			}
		});
        const iconShoppingp=document.querySelector(".iconshopping p");
        let no=0;
        JSON.parse(localStorage.getItem('items')).map(data=>{
            no=no+data.no
        });
        iconShoppingp.innerHTML=no ;

        
	}
    let table=cartbox.querySelector('table');

    let  tabledata='';
    tabledata+='<tr><th>s.no</th><th>item name</th><th>item no</th><th>item price</th><th></th></tr>';
    if(JSON.parse(localStorage.getItem('items'))=== null){
        table +='<tr><td colspan="5">no items found</td></tr>'
    }else{
        JSON.parse(localStorage.getItem('items')).map(data=>{
            tabledata+='<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th class="total2">'+data.price*data.no+'</th><th><a href="#" class="btndelete" onclick=Delete(this);>Delete</a></th></tr><tr class="ctotal"></th></tr>'
            
        });
       

        
    }
    table.innerHTML=tabledata;
    
   
    const cTotal = cartbox.querySelector('.total');
 let cartTotal = 0;
 let price = cTotal.querySelector('.total');

  JSON.parse(localStorage.getItem("items")).forEach(data=>
  {   
      
      price += +data.price*data.no;
      for(var i = 0; i < price.length; i++)
      {
            cartTotal += parseFloat(price+[i]);
       }
   });
    cartTotal = '<p class="amount">Total Amount: '+price+'</p>'
    
           
    cTotal.innerHTML = cartTotal;
}



var firstindex=0;

function automatic(){
    setTimeout(automatic,2000);
    var pics;

    const img=document.querySelectorAll(".slide1");

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

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;

    const formData = {
        fullName: fullName,
        email: email,
        tel: tel
    };

    saveFormData(formData);
});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}