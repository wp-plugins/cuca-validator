<?php
	/* Inizializzatore Plug-In*/

	
function CuCa_default(){
	/* Inizializzazione captcha matematico */
	add_option('CuCa_math_first_number', '10');
    add_option('CuCa_math_second_number', '4');
    add_option('CuCa_math_sign_add', '+');
    add_option('CuCa_math_sign_min', '0');
    add_option('CuCa_math_sign_mul', '0');
    add_option('CuCa_math_sign_div', '0');
	add_option('CuCa_math_skin_enable', '0');
    add_option('CuCa_math_skin', 'CuCa_math_custom');
	/* Inizializzazione captcha alfanumerico */
	add_option('CuCa_word_width', '200');
	add_option('CuCa_word_height', '50');
	add_option('CuCa_word_strLength', '4');
	add_option('CuCa_word_strLength_rnd', '0');	
	add_option('CuCa_word_fontFamily', 'Calibri');
	add_option('CuCa_word_rotation', '0');
	add_option('CuCa_word_fontSize', '18');
	add_option('CuCa_word_fontColor', '0');
	add_option('CuCa_word_skin_enable', '0');
	add_option('CuCa_word_skin', 'CuCa_word_custom');
	/* Inizializzazione captcha paramentri generali */
	add_option('CuCa_welcome', '0');
}
function CuCa_deactivation(){
	/* Rimozione impostazioni captcha matematico */
	delete_option('CuCa_math_first_number');
    delete_option('CuCa_math_second_number');
    delete_option('CuCa_math_sign_add');
    delete_option('CuCa_math_sign_min');
    delete_option('CuCa_math_sign_mul');
    delete_option('CuCa_math_sign_div');
	delete_option('CuCa_math_skin_enable');
    delete_option('CuCa_math_skin');
	/* Rimozione impostazioni captcha alfanumerico */
	delete_option('CuCa_word_width');
	delete_option('CuCa_word_height');	
	delete_option('CuCa_word_strLength');
	delete_option('CuCa_word_strLength_rnd');
	delete_option('CuCa_word_fontFamily');
	delete_option('CuCa_word_rotation');
	delete_option('CuCa_word_fontSize');
	delete_option('CuCa_word_fontColor');
	delete_option('CuCa_word_skin_enable');	
	delete_option('CuCa_word_skin');
	/* Rimozione captcha paramentri generali */
	delete_option('CuCa_welcome');
}
function CuCa_init(){
	/* Registrazione opzioni per captcha matematico */
	register_setting('CuCa_math_options_group', 'CuCa_math_first_number');
    register_setting('CuCa_math_options_group', 'CuCa_math_second_number');
    register_setting('CuCa_math_options_group', 'CuCa_math_sign_add');
    register_setting('CuCa_math_options_group', 'CuCa_math_sign_min');
    register_setting('CuCa_math_options_group', 'CuCa_math_sign_mul');
    register_setting('CuCa_math_options_group', 'CuCa_math_sign_div');
    register_setting('CuCa_math_options_group', 'CuCa_math_skin_enable');	
    register_setting('CuCa_math_options_group', 'CuCa_math_skin');
	/* Registrazione opzioni per captcha alfanumerico */
	register_setting('CuCa_word_options_group', 'CuCa_word_width');
    register_setting('CuCa_word_options_group', 'CuCa_word_height');
	register_setting('CuCa_word_options_group', 'CuCa_word_strLength');
	register_setting('CuCa_word_options_group', 'CuCa_word_strLength_rnd');
    register_setting('CuCa_word_options_group', 'CuCa_word_fontFamily');
    register_setting('CuCa_word_options_group', 'CuCa_word_rotation');
    register_setting('CuCa_word_options_group', 'CuCa_word_fontSize');
    register_setting('CuCa_word_options_group', 'CuCa_word_fontColor');
	register_setting('CuCa_word_options_group', 'CuCa_word_skin_enable');
	register_setting('CuCa_word_options_group', 'CuCa_word_skin');
}
add_action('admin_init', 'CuCa_init');
?>