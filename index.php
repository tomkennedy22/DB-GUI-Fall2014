<?php

require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

error_reporting(E_ALL);
ini_set('display_errors', 1);

$app = new \Slim\Slim(); //using the slim API

$app->get('/getIngredient', 'getIngredient'); //B public 
$app->get('/dummyGetIngredient');
$app->get('/getResult', 'getResult'); //end session and log out user 

function dummyGetIngredient() {
	$ingredients = ["egg", "butter", "chive"];
	json_encode($ingredients);
	echo $ingredients;
}
?>