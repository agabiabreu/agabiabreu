<?php

$error = "";

$nome = $_POST["ed-contato-nome"];

//email
if (empty($_POST["ed-contato-email"])) {
    $error .= "Email is required ";
} else {
    $email = $_POST["ed-contato-email"];
}

$assunto = $_POST["ed-contato-assunto"];
$mensagem = $POST["ed-contato-mensagem"];
 
$To = "embarque@estacaodigitalrio.com.br";
$uglySubject = "[Site | Contato] $assunto";
$Subject='=?UTF-8?B?'.base64_encode($uglySubject).'?=';

$Body .= "$nome entrou em contato através do e-mail '$email' com a seguinte mensagem: '$mensagem'";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Transfer-Encoding: 8bit" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: $email" . "\r\n";
 
// send email
$success = mail($To, $Subject, $Body, $headers);
 
// redirect to success page
if ($success && $error == ""){
   echo "success";
}else{
    if($error == ""){
        echo "Algo deu errado... Nos chame no WhatsApp: 21984016556";
    } else {
        echo $error;
    }
}
 
?>