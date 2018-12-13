<?php
mb_language("Japanese");		//言語を日本語に
mb_internal_encoding("UTF-8");	//エンコードをUTF-8に

$name = $_POST['name'];
$mail = $_POST['mail'];
$msg  = $_POST['msg'];
$pfrom = "-f $mail";

$to 		= "yuta-abc.0720@ezweb.ne.jp";
$subject 	= 'テストメール';
$headers 	= 'From: $mail';

mb_send_mail($to, $subject, $msg, $headers, $pfrom);
?>