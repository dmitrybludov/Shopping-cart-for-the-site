$(function(){
    var $addToBasket = $(".add_card_btn");
    var $basketIcon = $(".basket_icon");
    $basketIcon.click(function (event) {
        $(".shopping_cart_modal").addClass("modal_active animated fadeIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated fadeIn");
        });
        event.preventDefault();
    });

    $(".back_btn").click(function (event) {
        $(".shopping_cart_modal").addClass("animated fadeOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated fadeOut modal_active");
        });
        event.preventDefault();
    });

    $addToBasket.click(function () {
        var image = $(this).siblings("img").attr('src');
        var imageAlt = $(this).siblings("img").attr('alt');
        var descriptionName = $(this).siblings("h4").text();
        var descriptionCode = $(this).siblings("h4").data("code");
        var priceProduct = $(this).siblings(".price_quality").children(".price").text();

        var productRow = '<div class="product_row"><div class="miniature"><img src="' + image + '" alt="' + imageAlt + '"></div><div class="description"><h4 class="description_name">' + descriptionName + '</h4><p class="description_code">product code:<span>' + descriptionCode + '</span></p></div><div class="quantity"><input type="number" min="1" max="10" step="1" placeholder="1" value="1" autofocus></div><div class="price"><p>' + priceProduct + '</p></div><div class="total"><p>' + priceProduct + '</p></div><a href="#" class="delete_item fa fa-times"></a></div>';

        function addRow() {
            $(".product_wrap").append(productRow);
        };
        // search vars data
        var rows = $('.product_row');
        var flag = true;
        rows.each(function () {
            var productCode = $(this).find('.description_code>span').text();
            if (descriptionCode === productCode) {
                var input = $(this).find('input');
                var inputVal = input.val();
                inputVal++;
                input.val(inputVal);
                counter();
                countingOfResults(input);
                flag = false; return false;

            }
        });
        // add row into cart
        if (flag) {
            addRow();
            countingOfResults();
            counter();
        }
        $('input').on('change click keydown keypress keyup', function () {
            countingOfResults($(this));
            counter();
        });
    
        $(".delete_item").click(function(){
            animate($(this));
        });

        $(".continue_btn").click(function () {
            $(".forma_zakaza").addClass("visible");
            $(".shopping_cart").addClass("blur");
            var hiddenInput = $(".hiddenInput");
            var list = "";
            var rows = $('.product_row');
            rows.each(function () {
                var kodProducta = $(this).find(".description_code>span").text();
                var kolichestvoEdenic = $(this).find(".quantity>input").val();
                var summaPoPozicii = $(this).find(".total>p").text();
                var zagotovka = kodProducta + " - " + kolichestvoEdenic + " шт./" + summaPoPozicii + "$" + ";";
                list += zagotovka;
            });
            hiddenInput.val(list);
        });
    });

    function countingOfResults(param){
        var inputValue = $(param).val();
        var priceItem = $(param).parent().siblings('.price').text();
        var totalItem = $(param).parent().siblings('.total').children();
        var result = inputValue * priceItem;
        $(param).parent().siblings('.total').children("p").text(result);
        var total = 0;
        $(".total>p").each(function () {
            var price = $(this).text();
            total += +price;
        });
        $(".total_price>span").text(total);
    };

    function animate(elem){
        var parent = $(elem).parent();
        parent.hide(500);
        setTimeout(function(){
            parent.remove();
            countingOfResults();
            counter();
        }, 500);
    };

    function counter(){
        var rows = $('.product_row');
        var summ = 0;
        rows.each(function(){
            var inputValue = $(this).find(".quantity>input").val();
            summ += +inputValue;
            $(".basket_icon").text(summ);
        });
        console.log(summ);
    }

    $(".close_forma_zakaza").click(function(){
        $('.forma_zakaza').removeClass("visible");
        $('.shopping_cart').removeClass("blur");
    });

})


/* ajax */

// Отправка отзыва Ajax
$(document).ready(function () {
    $("#forma_zakaza").submit(function () { /* ищем форму и следим за событием отправки*/
        var $form = $(this);
        var formdata = $form.serialize(); /* сериализовали введенные данные(привели в строку)*/
        $.ajax({
            type: 'POST',
            url: 'send.php',
            data: formdata,
            beforeSend: function () {
                $form.find('input[type="submit"]').prop('disabled', true);
            },
            success: function (data) {
                console.log(data);
                if (data !== 'false') {
                    $form.find('input,textarea').not('input[type="submit"]').val('');
                    $(".zakaz_ok").addClass("down");
                    setTimeout(function(){
                        $('.close_forma_zakaza').trigger('click');
                    }, 2000);
                } else{
                    alert('sorry(');
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
                console.log(thrownError);
            },
            complete: function () {
                $form.find('input[type="submit"]').prop('disabled', false);
            }
        });
        return false; // вырубaeм стaндaртную oтпрaвку фoрмы!!!!!!!!!!!!!!!!!!!!
    });
});