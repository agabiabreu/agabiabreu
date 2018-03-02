<?php

// Coloque a mensagem que irá ser enviada para seu e-mail abaixo:
$msg = "Mensagem enviada em ".date("d/m/Y").",
os dados seguem abaixo:
";
while(list($campo, $valor) = each($HTTP_POST_VARS))
{
  $msg .= ucwords($campo).": ".$valor."
";
}

// Agora iremos fazer com que o PHP envie os dados do
Formulário para seu e-mail: 
mail("gabi@agabiabreu.com", "Assunto do
E-mail",$msg,"From: $REMOTE_ADDR");
echo "Seu e-mail foi enviado com sucesso. Obrigado";
?>