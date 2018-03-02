<?php

include_once('conexao.php');

//email
$email = $_POST['email'];

$sql = "INSERT INTO subscribe (email) VALUES ('$email')"; 

$resultado_sql = mysqli_query($conn, $sql);
echo('Email cadastrado com sucesso!');

?>