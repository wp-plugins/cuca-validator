<?php
session_start();

$strLength = ($_SESSION['CuCa_word_settings'][3] == 1) ? rand(1,$_SESSION['CuCa_word_settings'][2]) : $_SESSION['CuCa_word_settings'][2];

function generateCode($strLength) { 
	$possible = strtoupper(substr(str_shuffle('23456789abcdefghjkmnpqrstuvwxyz'), 0, $strLength));	
	return $possible;
}

$key = generateCode($strLength);
$_SESSION['CuCa_word_settings'][8] = $key;
echo "<div>".$key."</div>";
?>
