var check =false;
function changeval(el) {
    var qt =parseFloat(el.parent().children(".qt").html()
    );
    var price =parseFloat(el.parent().children(".price").html())
    var eq=math.round(price*qt*100)/100;
    el.parent().children(".full-price").html(eq+"");
    changeTotal();
}
function changeTotal(){
    var price =0;
    $(".fullprice").each(function(index){
        price += parseFloat($(".fullprice").eq(index).html(

        ));
    });
    price=Math.round(price*100)/100;
    var tax =Math.round(price*0.05*100)/100
    var shipping =parseFloat($(".shipping span").html());
    var fullprice=Math.round((price+tax+shipping)*
    100)/100;
    if(price == 0){
        fullprice = 0;
    }
    $(".subtotal span").html(price);
    $(".tax span").html(tax);
    $(".total span").html(fullprice);

}
$(document).ready(function()
{
    $(".remove").click(function(){
        var el = $(this);
        el.parent().parent().addClass("removed");
        window.setTimeout(
            function(){
                el.parent().parent().slideUp('fast',function()
                {
                    el.parent().parent().remove();
                    if($(".product").length==0){
                        if(check){
                            console.clear()
                        }else{
                            $("#cart").html("<h1> no product</h1>");
                        }
                    }
                    changeTotal();
                })
            }
        )
})

