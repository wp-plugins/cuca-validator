<?php
session_start();

$strLength = ($_SESSION['CuCa_word_settings'][3] == 1) ? rand(1,$_SESSION['CuCa_word_settings'][2]) : $_SESSION['CuCa_word_settings'][2];
$font = '../fonts/'.$_SESSION['CuCa_word_settings'][4].'.ttf';
$rotation = ($_SESSION['CuCa_word_settings'][5] == 1) ? rand(-10,10) : 0;
$fontSize = $_SESSION['CuCa_word_settings'][6];
$fontColor = $_SESSION['CuCa_word_settings'][7];
$code = $_SESSION['CuCa_word_settings'][8];

class CaptchaSecurityImages{ 

	function CaptchaSecurityImages($width = 200, $height = 50, $strLength = 6, $font, $rotation, $fontSize, $fontColor, $code) { 
		//$code = $this->generateCode($strLength);
		$font_size = ($fontSize == 1) ? $height * rand(2,8) / 10 : $height * 0.60;
		$image = imagecreatefrompng($path);
		$image = @imagecreate($width, $height) or die('Cannot initialize new GD image stream'); 

		/* set the colours */
		if($fontColor==1){
			$bgR = mt_rand(0, 255); $bgG = mt_rand(0, 255); $bgB = mt_rand(0, 255);
		}else{
			$bgR = 255; $bgG = 255; $bgB = 255;
		}
		$background_color = imagecolorallocate($image, $bgR, $bgG, $bgB); 
		$noise_color = imagecolorallocate($image, abs(100 - $bgR), abs(100 - $bgG), abs(100 - $bgB)); 
		$text_color = imagecolorallocate($image, abs(255 - $bgR), abs(255 - $bgG), abs(255 - $bgB)); 

		/* generate random dots in background */
		for($i = 0; $i < ($width*$height) / 3; $i++) { 
			imagefilledellipse($image, mt_rand(0,$width), mt_rand(0,$height), 1, 1, $noise_color); 
		} 

		/* generate random lines in background */
		for($i = 0; $i < ($width*$height) / 150; $i++) { 
			imageline($image, mt_rand(0,$width), mt_rand(0,$height), mt_rand(0,$width), mt_rand(0,$height), $noise_color); 
		} 

		/* set random colors */ 
		$w = imagecolorallocate($image, abs(100 - $bgR), abs(100 - $bgG), abs(100 - $bgB)); 
		$r = imagecolorallocate($image, abs(100 - $bgR), abs(100 - $bgG), abs(100 - $bgB)); 

		/* Draw a dashed line, 5 red pixels, 5 white pixels */ 
		$style = array($r, $r, $r, $r, $r, $w, $w, $w, $w, $w); 
		imagesetstyle($image, $style); 
		imageline($image, 0, 0, $width, $height, IMG_COLOR_STYLED); 
		imageline($image, $width, 0, 0, $height, IMG_COLOR_STYLED); 

		/* create random polygon points */ 
		$values = array( 
			mt_rand(0, $width), mt_rand(0, $height), 
			mt_rand(0, $height), mt_rand(0, $width), 
			mt_rand(0, $width), mt_rand(0, $height), 
			mt_rand(0, $height), mt_rand(0, $width), 
			mt_rand(0, $width), mt_rand(0, $height), 
			mt_rand(0, $height), mt_rand(0, $width), 
			mt_rand(0, $width), mt_rand(0, $height), 
			mt_rand(0, $height), mt_rand(0, $width), 
			mt_rand(0, $width), mt_rand(0, $height), 
			mt_rand(0, $height), mt_rand(0, $width), 
			mt_rand(0, $width), mt_rand(0, $height), 
			mt_rand(0, $height), mt_rand(0, $width),
		); 

		/* create Random Colors then set it to $clr */ 
		$r = abs(100 - mt_rand(0, 255)); 
		$g = abs(100 - mt_rand(0, 255)); 
		$b = abs(100 - mt_rand(0, 255)); 
		$clr = imagecolorallocate($image, $r, $g, $b); 

		/* create filled polygon with random points */ 
		imagefilledpolygon($image, $values, 6, $clr); 

		$textbox = imagettfbbox($font_size, 0, $font, $code) or die('Error in imagettfbbox function'); 
		$x = ($width - $textbox[4])/2; 
		$y = ($height - $textbox[5])/2; 
		imagettftext($image, $font_size, $rotation, $x, $y, $text_color, $font , $code) or die('Error in imagettftext function'); 

		/* pretty it */ 
		/*imageantialias($image, 100);
		imagealphablending($image, 1);
		imagelayereffect($image, IMG_EFFECT_OVERLAY);*/

		/* output captcha image to browser */ 
		header('Content-Type: image/png');
		imagepng($image); 
		//imagedestroy($image);
		//$_SESSION['key'] = $code;

	} 
}
$captcha = new CaptchaSecurityImages($_SESSION['CuCa_word_settings'][0], $_SESSION['CuCa_word_settings'][1], $strLength, $font, $rotation, $fontSize, $fontColor, $code);
?>