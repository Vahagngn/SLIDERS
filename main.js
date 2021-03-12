$(document).ready(function() {
    $('#were').click(function() {

        var name = $('.name').val();
        var phone = $('.phone').val();
        var email = $('.email').val();



        $.ajax({
            type: "POST",
            url: "/function.php",
            data: {
                phone: phone,
                email: email,
                name: name
            },
            success: function(msg) {

                alert("Ваша заявка отправлена");
            }
        });


    });

    $('.go_to').click(function() { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

    $(".file-upload input[type=file]").change(function() {
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename").val(filename);
    });




});