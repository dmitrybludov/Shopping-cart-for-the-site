<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'business4life2@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новый заказ'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p style="color: red;">Имя: '.$_POST['name'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>
                        <p>Отзыв: '.$_POST['comment'].'</p>
                        <p>Товары: '.$_POST['text'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <business4life2@gmail.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
} else{
    echo 'false';
}
?>