var $buyBtn = $(".buy_btn");
var $modalWindow = $(".modal_window");
var $product = $(".content_area_product");
var $form = $(".form");
/* var $closeBtn = $(".close_modal_window"); */

/* $buyBtn.click(function (event) {
    var cloneContent = $(this).siblings().clone();
    $modalWindow.addClass("modal_active animated fadeIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass("animated fadeIn");
    });
    $product.html(cloneContent);
    event.preventDefault();
}); */

/* $closeBtn.click(function (event) {
    $modalWindow.addClass("animated fadeOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass("animated fadeOut modal_active");
    });
    event.preventDefault();
    $("input").val('');
    $("input").removeClass('error');
}); */

/* $modalWindow.click(function (event) {
    if($(event.target).closest(".modal_content_area").length) return;
    $modalWindow.addClass("animated fadeOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass("animated fadeOut modal_active");
    });
    $("input").val('');
    $("input").removeClass('error');
    event.stopPropagation();
}); */

/* $form.submit(function () {
    var regexes = {
        name: /[a-zа-я]{3,15}/,
		email: 	/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
		tel: /[0-9]{10,15}/,
    };
    if(!regexes[$(this).find('input').attr('name')].test($(this).find('input').val())) { 
        $(this).find('input').addClass('error');
        return false;
    };
}); */

/* $modalWindow.click(function(e){
    if($(e.target).removeClass('modal_active'));
}); */


/* $(function(){
	
	var regexes = {
		email: 	/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
		name: /^([a-zA-Z0-9@#$%^&+=*.\-_ ]){6,}$/,
		tel: /^[0-9]{5,20}$/,
	};
	
	$.each($('.form input'), function() {
		$(this).on('focusout', function(){
			if(!regexes[$(this).attr('name')].test($(this).val())){
                $(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});
	});
}); */

/* $(function(){
    $(document).mousemove(function(event){
        var advertising = $(".advertising");
        advertising.offset({top:event.pageY-75, left:event.pageX-150});
        setTimeout(function(){
            advertising.addClass("advertising_active");
        }, 3000);
    });
}) */

$(function () {
    var $addCartBtn = $(".add_card_btn");
    var $productWrap = $(".product_wrap");
    var productRow = '<div class="product_row">    <div class="miniature">            </div>    <div class="description">        <p class="description_name"></p>        <p class="description_code">product code:</p>    </div>    <div class="quantity">        <input type="number" min="1" max="10" step="1" placeholder="1" value="1" onkeypress="return false">    </div>    <div class="price">        <p></p>    </div>    <div class="total">        <p></p>    </div></div>';
    var $totalPrice = $(".total_price>span");
    var $shoppingCart = $(".shopping_cart_modal");
    var $closeBtn = $(".back_btn");

    $addCartBtn.click(function (event) {
        $shoppingCart.addClass("modal_active animated fadeIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated fadeIn");
        });
        event.preventDefault();
    });

    $shoppingCart.click(function (event) {
        if ($(event.target).closest(".shopping_cart").length) return;
        $shoppingCart.addClass("animated fadeOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated fadeOut modal_active");
        });
        event.stopPropagation();
    });

    $closeBtn.click(function (event) {
        $shoppingCart.addClass("animated fadeOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated fadeOut modal_active");
        });
        event.preventDefault();
    });

    $addCartBtn.click(function () {
        $productWrap.append(productRow);
        var image = $(this).siblings("img").clone();
        var descriptionName = $(this).siblings("h4").text();
        var descriptionCode = $(this).siblings("h4").data("code");
        var price = $(this).siblings(".price_quality").children(".price").text();
        $productWrap.children().last().children(".miniature").append(image);
        $productWrap.children().last().children(".description").children(".description_name").append(descriptionName);
        $productWrap.children().last().children(".description").children(".description_code").append(descriptionCode);
        $productWrap.children().last().children(".price").children("p").append(price);
        $productWrap.children().last().children(".total").children("p").append(price);
        $("input").click("mouseup mousedown", function () {
            var perem1 = $(this).val();
            var perem2 = $(this).parent().siblings('.price').children().text();
            var perem3 = $(this).parent().siblings('.total').children();
            var res = perem1 * perem2;
            $(this).parent().siblings('.total').children("p").text(res);
            /* var summArray = [];
            $(".total>p").each(function(indx, element){
                summArray.push($(element).text());
            }); */
            var total = 0;
            $(".total>p").each(function () {
                var price = $(this).text();
                total += +price;
            });
            $($totalPrice).text(total);
            /* console.log(parseInt(summArray)); */
        });
    });
})

