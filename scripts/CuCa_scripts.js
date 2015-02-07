/* Variabili iniettate da php
	MATHEMATCICAL CAPTCHA 	=>		pluginpath	|	primoNum	|	secondoNum	|	plus	|	minus	|	mul		|	div		|	skin
	WORD CAPTCHA			=>		pluginpath	|
*/


	/* Blocchiamo il form o il campo di testo all'esecuzione dello script */
jQuery('.CuCaM, .CuCaW').attr('disabled',true);


	/* Esito captcha try - Form */
jQuery('.CuCaM, .CuCaW').submit(function(){
	switch (jQuery(this).attr('class')){
		case 'CuCaM':
			if(CuCaMathValidated != true){
				jQuery('#CuCa-math-answer').focus();
				return false;
			}else{
				return true;
			}
			break;
		case 'CuCaW':
			if(CuCaWordValidated != true){
				jQuery('.CuCa_Word').addClass('CuCa_denied');
				jQuery('#CuCa-word-answer').focus();
				return false;
			}else{
				return true;
			}
			break;
	}
});
	/* Esito captcha try - Field */
function CuCaFieldLock(elem,lock){
	elem.attr('disabled',lock);
	if(lock==false) elem.focus();
}

	

//----------- MATHEMATICAL CAPTCHA (class="CuCa-mUnlock")---------------//
//----------------------------------------------------------------------//
var segni = [],
Risultato = '',
CuCaMathValidated = false;


if(scriptParams.plus != 0){ segni.push(scriptParams.plus); }
if(scriptParams.minus != 0){ segni.push(scriptParams.minus); }
if(scriptParams.mul != 0){ segni.push(scriptParams.mul); }
if(scriptParams.div != 0){ segni.push(scriptParams.div); }
	
	
function renderMathCuCa(){
	scriptParams.primoNum = Math.floor(Math.random()*scriptParams.primoNum);
	scriptParams.secondoNum = Math.floor(Math.random()*scriptParams.secondoNum);
	segni = segni[Math.floor(Math.random()*segni.length)]
	switch (segni){
		case '+':
			Risultato = scriptParams.primoNum+scriptParams.secondoNum;
			break;
		case '-':
			Risultato = scriptParams.primoNum-scriptParams.secondoNum;
			break;		
		case 'x':
			Risultato = scriptParams.primoNum*scriptParams.secondoNum;
			break;		
		case '/':
			Risultato = scriptParams.primoNum/scriptParams.secondoNum;
			break;
	}
	jQuery('#CuCa-math-question').html(scriptParams.primoNum+' '+segni+' '+scriptParams.secondoNum);
}
function ValidateCuCaMath(){
	if( jQuery('#CuCa-math-answer').val() != Risultato || jQuery('#CuCa-math-answer').val() == '' ){
		jQuery('#CuCa-math-invalid').attr('src',scriptParams.pluginpath+'skins/'+scriptParams.skin+'_cross.png');
		CuCaMathValidated = false;
		CuCaFieldLock(jQuery('.CuCaM'),true);
	}else{
		jQuery('#CuCa-math-invalid').attr('src',scriptParams.pluginpath+'skins/'+scriptParams.skin+'_tick.png');		
		CuCaMathValidated = true;
		CuCaFieldLock(jQuery('.CuCaM'),false);
	}
}
renderMathCuCa();
jQuery('#CuCa-math-answer').bind('keyup',ValidateCuCaMath);



//----------- ALPHANUMERIC CAPTCHA (class="CuCa-wUnlock")---------------//
//----------------------------------------------------------------------//
var CuCaWordValidated = false;


	/* Captcha refresh button */
function ValidateCuCaWord(){
	value = jQuery('#CuCa-word-answer').val().toUpperCase();
	if(value !== jQuery('#CuCa_WC div').html() || value == ''){
		CuCaWordValidated = false;
		CuCaFieldLock(jQuery('.CuCaW'),true);
	}else{
		CuCaWordValidated = true;
		CuCaFieldLock(jQuery('.CuCaW'),false);
	}
}
jQuery('#CuCa_word_refresh').click(function(e){
	e.preventDefault();
	CuCaFieldLock(jQuery('.CuCaW'),true);
	jQuery('#CuCa_WC div').remove();
	jQuery('#CuCa_WC').load(scriptParams.pluginpath+'includes/CuCa-word-generator-code.php div', function(){
		jQuery('#CuCa_Word_img').attr('src', scriptParams.pluginpath+'includes/CuCa-word-generator-img.php?'+Math.random());
		jQuery('#CuCa-word-answer').val('').focus();
	});
});
jQuery('#CuCa-word-answer').bind('keyup',ValidateCuCaWord);