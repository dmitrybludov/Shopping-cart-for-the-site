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
    var $productWrap = $(".product_wrap");
    var $addCartBtn = $(".add_card_btn");
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
        var image = $(this).siblings("img").attr('src');
        var imageAlt = $(this).siblings("img").attr('alt');
        var descriptionName = $(this).siblings("h4").text();
        var descriptionCode = $(this).siblings("h4").data("code");
        var priceProduct = $(this).siblings(".price_quality").children(".price").text();
        var productRow = '<div class="product_row"><div class="miniature"><img src="' + image + '" alt="' + imageAlt + '"></div><div class="description"><h4 class="description_name">' + descriptionName + '</h4><p class="description_code">product code:' + descriptionCode + '</p></div><div class="quantity"><input type="number" min="1" max="10" step="1" placeholder="1" value="1" autofocus></div><div class="price">' + priceProduct + '<p></p></div><div class="total"><p>' + priceProduct + '</p></div></div>';
        
        $productWrap.append(productRow);
        /* var productSearchInRow = $(".product_row").find(".description_code").text();
        console.log(productSearchInRow); */
        var total = 0;
        $(".total>p").each(function () {
            var price = $(this).text();
            total += +price;
        });
        $("input").on("change focusout keydown keypress keyup click", function () {
            var inputValue = $(this).val();
            var priceItem = $(this).parent().siblings('.price').text();
            var totalItem = $(this).parent().siblings('.total').children();
            var result = inputValue * priceItem;
            $(this).parent().siblings('.total').children("p").text(result);
            var total = 0;
            $(".total>p").each(function () {
                var price = $(this).text();
                total += +price;
            });
            $(".total_price>span").text(total);
        });
        $(".total_price>span").text(total);
        $(".continue_btn").click(function () {
            var hiddenInput = "";
            $(".product_row").each(function () {
                var kodProducta = $(".description>p").text();
                var kolichestvoEdenic = $(".quantity>input").val();
                var summaPoPozicii = $(".total>p").text();
                var zagotovka = kodProducta + " - " + kolichestvoEdenic + " шт./" + summaPoPozicii + ";";
                hiddenInput += zagotovka;
                console.log(hiddenInput);
            });
        });
    });
})

