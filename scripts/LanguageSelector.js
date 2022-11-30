/**
 * Jquery language selector plugin.
 *
 * @author   Muhammad Umer Farooq <lablnet01@gmail.com>
 * @author-profile https://www.facebook.com/Muhammadumerfarooq01/
 *
 * For the full copyright and license information, please view the LICENSE
 *  file that was distributed with this source code.
 *
 * @license MIT
 */

class LanguageSelector {
	setLang(lang)
	{
		l = lang.toLowerCase();
		localStorage.setItem('lang', l);

		return true;
	}
	getLang()
	{
		var lang = localStorage.getItem('lang');
		if (lang != null) {
			return lang;
		} else {
			return 'fa';
		}
	}
	removeLang()
	{
		localStorage.removeItem('lang');

		return true;
	}
	loadLang()
	{	
		var l = this.getLang();
		var strs = lang[l];

		return strs;
	}
	parse()
	{
		var rtl = ['ar', 'ur', 'fa', 'he', 'arc', 'az', 'dv', 'arabic', 'aramaic', 'azeri', 'maldivian', 'dhivehi', 'hebrew', 'kurdish', 'persian', 'urdu'
		];
		var lang = this.loadLang();
		var len = lang.length - 1;
		var keys = Object.keys(lang);
		var values = Object.values(lang);
		// console.log($(".showcase").children());
		for (var i = 0; i <= keys.length - 1; i++) {
			$(".navbar").children().each(function () {
		    	$(this).html($(this).html().replace(keys[i],values[i]));
			});
			$(".showcase-text").children().each(function () {
				// console.log((".showcase-text").children());
		    	$(this).html($(this).html().replace(keys[i],values[i]));
			});
			$(".showcase-form").children().each(function () {
				// console.log((".showcase-text").children());
				// console.log($(this).html);
		    	$(this).html($(this).html().replace(keys[i],values[i]));
				// console.log($(this).html);
			});
			$(".links__list").children().each(function () {
				// console.log((".showcase-text").children());
		    	$(this).html($(this).html().replace(keys[i],values[i]));
			});
			$(".blog").children().each(function () {
				// console.log((".showcase-text").children());
		    	$(this).html($(this).html().replace(keys[i],values[i]));
			});
			$(".stats").children().each(function () {
				// console.log((".showcase-text").children());
		    	$(this).html($(this).html().replace(keys[i],values[i]));
			});

			$(".about").children().each(function () {
				// console.log((".showcase-text").children());
		    	$(this).html($(this).html().replace(keys[i],values[i]));
			});
			$(".contact").children().each(function () {
				// console.log((".showcase-text").children());
		    	$(this).html($(this).html().replace(keys[i],values[i]));
			});
			$(".courses").children().each(function () {
				// console.log((".showcase-text").children());
		    	$(this).html($(this).html().replace(eval('/'+keys[i]+'/gi'),values[i]));
				// $(this).html($(this).html().replace(/:keys[i]/gi,values[i]));
			});
			$(".docs-head").children().each(function () {
				// console.log((".showcase-text").children());
		    	$(this).html($(this).html().replace(keys[i],values[i]));
			});
		}
		if (rtl.includes(this.getLang())) {
			document.body.style.direction = 'rtl';

			// document.getElementsByClassName('courses')[0].style.fontFamily = 'BYekan';
			// $('body').attr('style', 'font-family: BYekan !important');
			$('div').addClass('text-persian');
			$('.slideshow-container .next').addClass('fa-next');
			// $('.slideshow-container .prev').addClass('fa-prev');
			// document.body.style.fontFamily = 'BYekan';
			// document.body.style.color = "red";
			// document.body.style.fontSize = 'x-large';
		}
		    // loading
			var loadScreen=document.querySelector(".preloader-container");
			var loadScreenIndex=document.querySelector(".preloader-container-index");
			if (loadScreen) {
				document.body.removeChild(loadScreen);
				$(".intro-hide").show();
				console.log('other pages');
			};
			if (loadScreenIndex) {
				
				// document.getElementsByClassName("atoz-larg")[0].style.addEventListener("change", function() {
				// 	$(".intro-hide").show();
				// 	console.log('GIGI');
				// })
				setTimeout(function(){
					document.body.removeChild(loadScreenIndex);
					$(".intro-hide").show();   
					console.log('doneand done');
				}, intro);	
				
				console.log('intro pages');
			};

	}
}