<?php
mb_language("Japanese");		//言語を日本語に
mb_internal_encoding("UTF-8");	//エンコードをUTF-8に

$name = $_POST['name'];
$mail = $_POST['mail'];
$msg  = $_POST['msg'];

$to 		= "yuta.business01@gmail.com";
$subject 	= 'テストメール';
$headers 	= 'From: $mail';

if(!mb_send_mail($to, $subject, $msg, $headers)){
	exit("遅れ中田よ");
}
?>