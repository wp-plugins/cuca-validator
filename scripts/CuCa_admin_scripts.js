/* Variabili iniettate da php
	GENERALI				=>		pluginpath	|	welcomeMsg
*/

//----------------------- WORD CAPTCHA -------------------------//
//					Settings menu scripts						//
//--------------------------------------------------------------//
	/* Blocchiamo il form o il campo di testo all'esecuzione dello script */
jQuery('.CuCaM, .CuCaW').attr('disabled',true);



	/* Welcome message */
function showWelcome(){
	jQuery('#CuCa_admWelcomeAd').fadeIn('slow');
	jQuery('.CuCa_admWelcome').animate({'left':'50%'},1000,'swing');
}
function hideWelcome(){
	jQuery('.CuCa_admWelcome').animate({'left':'250%'},700,'swing');		
	jQuery('#CuCa_admWelcomeAd').fadeOut('fast');
}
jQuery('.CuCa_admWelcome div').click(hideWelcome);
jQuery(document).keyup(function(e){	if (e.keyCode == 27 || e.which == 27){ hideWelcome(); } });
if(scriptAdminParams.welcomeMsg==0){
	showWelcome(); 
}



	/* Preview show hide */
jQuery('.CuCa_admPrevTrigger').click(function(e){
	e = jQuery(this);
	elem = jQuery(this).parent().next('.CuCa_admPrev');
	if(elem.hasClass('CuCa_admPrev|shown')){
		elem.animate({'marginTop':'-374px'},function(){
			elem.removeClass('CuCa_admPrev|shown');
			e.css('background','url('+scriptAdminParams.pluginpath+'imgs/CuCa_ptD.png)');
		})	
	}else{
		elem.animate({'marginTop':'-10px'},function(){
			elem.addClass('CuCa_admPrev|shown');
			e.css('background','url('+scriptAdminParams.pluginpath+'imgs/CuCa_ptU.png)');
		})
	}
});



	/* CuCa math setting scripts */
var Melem = jQuery('[name=CuCa_math_settings_module_form]');
if(jQuery('[name=CuCa_math_skin_enable]').prop('checked')==true){
	jQuery('[name=CuCa_math_skin]').prop('disabled', false);
	jQuery('[name=CuCa_math_skin] option:first').attr('disabled', true);
}else{
	jQuery('[name=CuCa_math_skin] option:first').attr('disabled', false);
	jQuery('[name=CuCa_math_skin]').val('CuCa_math_custom').prop('disabled', true);
}
jQuery('[name=CuCa_math_skin_enable]').click(function(){
	if(jQuery(this).prop('checked')==true){
		jQuery('[name=CuCa_math_skin]').prop('disabled', false);
		jQuery('[name=CuCa_math_skin] option:first').attr('disabled', true);
	}else{
		jQuery('[name=CuCa_math_skin] option:first').attr('disabled', false);
		jQuery('[name=CuCa_math_skin]').val('CuCa_math_custom').prop('disabled', true);
	}
});
Melem.submit(function(){ 
	jQuery('[name=CuCa_math_skin]').prop('disabled', false);	
	return true;
});



	/* CuCa word setting scripts*/
var Welem = jQuery('[name=CuCa_word_settings_module_form]');
function CuCa_word_Skin(){
	Welem.find('input').not('[name=CuCa_word_skin_enable], input[type=submit]').prop('disabled', true);
	jQuery('[name=CuCa_word_fontFamily]').prop('disabled', true);
	jQuery('[name=CuCa_word_skin]').prop('disabled', false);
	jQuery('[name=CuCa_word_skin] option:first').attr('disabled', true);
}
function CuCa_word_noSkin(){
	Welem.find('input').prop('disabled', false);
	jQuery('[name=CuCa_word_fontFamily]').prop('disabled', false);
	jQuery('[name=CuCa_word_skin]').val('CuCa_word_custom').prop('disabled', true);
	jQuery('[name=CuCa_word_skin] option:first').attr('disabled', false);

	jQuery('[name=CuCa_word_width]').val('180');
	jQuery('[name=CuCa_word_height]').val('50');
	jQuery('[name=CuCa_word_strLength]').val('6');
	jQuery('[name=CuCa_word_fontColor]').prop('checked',true);
}
if(jQuery('[name=CuCa_word_skin_enable]').prop('checked')==true) CuCa_word_Skin(); else	CuCa_word_noSkin();
jQuery('[name=CuCa_word_skin_enable]').click(function(){ if(jQuery(this).prop('checked')==true)	CuCa_word_Skin(); else CuCa_word_noSkin(); });
Welem.submit(function(){
	Welem.find('input').prop('disabled', false);
	jQuery('[name=CuCa_word_fontFamily]').prop('disabled', false);
	jQuery('[name=CuCa_word_skin]').prop('disabled', false);	
	return true;
});
jQuery('[name=CuCa_word_skin]').change(function(){
	switch (jQuery(this).val()){
		case 'CuCa_word_classic':
			jQuery('[name=CuCa_word_width]').val('176');
			jQuery('[name=CuCa_word_height]').val('50');
			jQuery('[name=CuCa_word_strLength]').val('5');
			jQuery('[name=CuCa_word_strLength_rnd]').prop('checked',false);
			jQuery('[name=CuCa_word_fontFamily]').val('SansBlack');
			jQuery('[name=CuCa_word_rotation]').prop('checked',false);
			jQuery('[name=CuCa_word_fontSize]').prop('checked',false);
			jQuery('[name=CuCa_word_fontColor]').prop('checked',true);		
			break;
		case 'CuCa_word_modern':
			jQuery('[name=CuCa_word_width]').val('180');
			jQuery('[name=CuCa_word_height]').val('40');
			jQuery('[name=CuCa_word_strLength]').val('8');
			jQuery('[name=CuCa_word_strLength_rnd]').prop('checked',false);
			jQuery('[name=CuCa_word_fontFamily]').val('Anorexia');
			jQuery('[name=CuCa_word_rotation]').prop('checked',false);
			jQuery('[name=CuCa_word_fontSize]').prop('checked',false);
			jQuery('[name=CuCa_word_fontColor]').prop('checked',false);
			break;
		case 'CuCa_word_orange':
			jQuery('[name=CuCa_word_width]').val('190');
			jQuery('[name=CuCa_word_height]').val('40');
			jQuery('[name=CuCa_word_strLength]').val('8');
			jQuery('[name=CuCa_word_strLength_rnd]').prop('checked',false);
			jQuery('[name=CuCa_word_fontFamily]').val('TankLite');
			jQuery('[name=CuCa_word_rotation]').prop('checked',true);
			jQuery('[name=CuCa_word_fontSize]').prop('checked',true);
			jQuery('[name=CuCa_word_fontColor]').prop('checked',true);
			break;
		case 'CuCa_word_minimal':
			jQuery('[name=CuCa_word_width]').val('70');
			jQuery('[name=CuCa_word_height]').val('30');
			jQuery('[name=CuCa_word_strLength]').val('3');
			jQuery('[name=CuCa_word_strLength_rnd]').prop('checked',true);
			jQuery('[name=CuCa_word_fontFamily]').val('Decker');
			jQuery('[name=CuCa_word_rotation]').prop('checked',false);
			jQuery('[name=CuCa_word_fontSize]').prop('checked',false);
			jQuery('[name=CuCa_word_fontColor]').prop('checked',true);
			break;
		case 'CuCa_word_elegant':
			jQuery('[name=CuCa_word_width]').val('179');
			jQuery('[name=CuCa_word_height]').val('49');
			jQuery('[name=CuCa_word_strLength]').val('6');
			jQuery('[name=CuCa_word_strLength_rnd]').prop('checked',false);
			jQuery('[name=CuCa_word_fontFamily]').val('Calibri');
			jQuery('[name=CuCa_word_rotation]').prop('checked',true);
			jQuery('[name=CuCa_word_fontSize]').prop('checked',true);
			jQuery('[name=CuCa_word_fontColor]').prop('checked',true);		
			break;
	}
});



	/* Donazioni */
jQuery('.CuCa_donTrigger').click(function(){
	elem = jQuery(this).closest('.CuCa_don1lvl');
	if(elem.hasClass('CuCa_don|shown')){
		jQuery(this).css('background-position','0 0');
		elem.animate({'height':'26px'}, 400);
		elem.removeClass('CuCa_don|shown');
	}else{
		bH = jQuery('.CuCa_don1lvl table').height();
		jQuery(this).css('background-position','0 -21px');
		elem.animate({'height':bH+70}, 400);
		elem.addClass('CuCa_don|shown');
	}	
});