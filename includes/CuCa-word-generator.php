<?php
session_start();


	/* Settings */
$CuCa_word_width = get_option('CuCa_word_width');
$CuCa_word_height = get_option('CuCa_word_height');
$CuCa_word_strLength = get_option('CuCa_word_strLength');
$CuCa_word_strLength_rnd = get_option('CuCa_word_strLength_rnd');
$CuCa_word_fontFamily = get_option('CuCa_word_fontFamily');
$CuCa_word_stringRotation = get_option('Cuca_word_rotation');
$CuCa_word_fontSize = get_option('CuCa_word_fontSize');
$CuCa_word_fontColor = get_option('CuCa_word_fontColor');
$CuCa_word_key = 'REFRESH';


	/* Update the session variable */
$_SESSION['CuCa_word_settings'] = array();
$_SESSION['CuCa_word_settings'][] = $CuCa_word_width;
$_SESSION['CuCa_word_settings'][] = $CuCa_word_height;
$_SESSION['CuCa_word_settings'][] = $CuCa_word_strLength;
$_SESSION['CuCa_word_settings'][] = $CuCa_word_strLength_rnd;
$_SESSION['CuCa_word_settings'][] = $CuCa_word_fontFamily;
$_SESSION['CuCa_word_settings'][] = $CuCa_word_stringRotation;
$_SESSION['CuCa_word_settings'][] = $CuCa_word_fontSize;
$_SESSION['CuCa_word_settings'][] = $CuCa_word_fontColor;
$_SESSION['CuCa_word_settings'][] = $CuCa_word_key;


	/* Generazione captcha alfanumerico */
function CuCa_word_generator(){
	$outCuCa_word_generator .= "<div class='CuCa_Word ".get_option('CuCa_word_skin')."' align='left'>";
	$outCuCa_word_generator .= "<img src='".CUCA_PLUGIN_URL."includes/CuCa-word-generator-img.php' alt='CuCa word' id='CuCa_Word_img' width=".get_option('CuCa_word_width')." height=".get_option('CuCa_word_height')."/>";
	$outCuCa_word_generator .= "<input type='text' id='CuCa-word-answer' name='key' autocomplete='off'></input>";
	$outCuCa_word_generator .= "<a href='' id='CuCa_word_refresh'><img src='".CUCA_PLUGIN_URL."skins/".get_option('CuCa_word_skin')."_refresh.png' /></a>";
	$outCuCa_word_generator .= "</div>";
	return $outCuCa_word_generator."<div id='CuCa_WC'><div></div></div>";
}
 

	/* Shortcode Generator */
function CuCa_word_shortcode_generator($atts) {
	return CuCa_word_generator();
}
add_shortcode("CuCaW", "CuCa_word_shortcode_generator");	
?>