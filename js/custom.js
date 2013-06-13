jQuery(document).ready(function(){
	var hVelib;
	var wVelib;
	var VelibColor;

	var hTransport;
	var wTransport;
	var TransportColor;

	var hPied;
	var wPied;
	var PiedColor;

	var hAutolib;
	var wAutolib;
	var AutolibColor;

	var hDiesel;
	var wDiesel;
	var DieselColor;

	var hEssence;
	var wEssence;
	var EssenceColor;

	var baseW = 140;
	var baseH = 5;
	var hsl = "96,63%";



	$('#cercle').fadeOut(0);
	$('#information').fadeOut(0);

function rgb2hex(r,g,b) {
		var hexVal = function(n) {
			var data = "0123456789ABCDEF";
			if (n==null) return "00";
			n=parseInt(n); 
			if (n==0 || isNaN(n)) return "00";
			n=Math.round(Math.min(Math.max(0,n),255));
			return data.charAt((n-n%16)/16) + data.charAt(n%16);
		}
		return hexVal(r)+hexVal(g)+hexVal(b);
	}

function initLineHeight(){
	var hVelib = $('#velib').height();
	var hTransport = $('#transport').height();
	var hPied = $('#pied').height();
	var hAutolib = $('#autolib').height();
	var hDiesel = $('#diesel').height();
	var hEssence = $('#essence').height();
	//velib
	$('#velib').css({"margin-left": "-"+hVelib/3+"px","margin-top": hVelib/3+"px"});
	//transport	
	$('#transport').css( "margin-left", "-"+hTransport/2+"px" );
	//pied
	$('#pied').css({"margin-left": "-"+hVelib/3+"px","margin-top": "-"+hVelib/3+"px"});
	//autolib
	$('#autolib').css({"margin-left": hVelib/3+"px","margin-top": "-"+hVelib/3+"px"});
	//diesel	
	$('#diesel').css( "margin-left", hDiesel/2+"px" );
	//essence
	$('#essence').css({"margin-left": hVelib/3+"px","margin-top": hVelib/3+"px"});
}

function changeVal(id,w,h,c){
	$('#'+id).animate( {"height": h+"px" },{ queue: false, duration:250 });
	$('#'+id).animate( {"width": (50+w)+"px" },{ queue: false, duration:250 });
	$('#'+id).animate( {"color":  'rgb('+color+')'},{ queue: false, duration:250 });
}

function alignLineHeight(){
	hVelib = 20;
	wVelib = 35;
	VelibColor = "60%";

	hTransport = 20;
	wTransport = 25;
	TransportColor = "40%";

	hPied = 20;
	wPied = 60;
	PiedColor = "70%";

	hAutolib = 30;
	wAutolib = 20;
	AutolibColor = "45%";

	hDiesel = 20;
	wDiesel = 20;
	DieselColor = "30%";

	hEssence = 20;
	wEssence = 20;
	EssenceColor = "20%";




	if(!$('#animation').hasClass('enCour')){

		$('#animation').addClass('enCour');
		//velib

		$('#velib').animate({
			"height": baseH+hVelib+"px",
			"width": baseW+wVelib+"px",
			"background-color":  'hsl('+hsl+','+VelibColor+')',
			"margin-left": "-"+hVelib/3+"px",
			"margin-top": hVelib/3+"px"
	  	},500);
	  	$('#imgvelib').animate( {"height": "100px","width":'100px' },1000);
		

		//transport	
		setTimeout(function(){

			$('#transport').animate({
				"height": baseH+hTransport+"px",
				"width": baseW+wTransport+"px",
				"background-color":  'hsl('+hsl+','+TransportColor+')',
				"margin-left": "-"+hTransport/2+"px" ,
				
				},500);
			$('#imgtransport').animate( {"height": "100px","width":'100px' },1000);
		},750)


		//Pied
		setTimeout(function(){
			$('#pied').animate({
				"height": baseH+hPied+"px",
				"width":baseW+wPied+"px",
				"background-color":  'hsl('+hsl+','+PiedColor+')',
				"margin-left": "-"+hPied/3+"px" ,
				"margin-top": hPied/3+"px"
			},500);
			$('#imgpied').animate( {"height": "100px","width":'100px' },1000);
		},1500)


		//autolib
		setTimeout(function(){
			$('#autolib').animate({
				"height": baseH+hAutolib+"px",
				"width":baseW+wAutolib+"px",
				"background-color":  'hsl('+hsl+','+AutolibColor+')',
				"margin-left": hAutolib/2+"px",
			"margin-top": "-"+hAutolib/3+"px"
			},500);
			$('#imgautolib').animate( {"height": "100px","width":'100px' },1000);
		},2250)


		//diesel	
		setTimeout(function(){
			$('#diesel').animate({
				"height": baseH+hDiesel+"px",
				"width":baseW+wDiesel+"px",
				"background-color": 'hsl('+hsl+','+DieselColor+')',
				"margin-left": hDiesel/2+"px"
			},500);
			$('#imgdiesel').animate( {"height": "100px","width":'100px' },1000);
		},3000)

		//essence
		setTimeout(function(){
			$('#essence').animate({
				"height": baseH+hEssence+"px",
				"width":baseW+wEssence+"px",
				"background-color":  'hsl('+hsl+','+EssenceColor+')',
				"margin-left": hEssence/3+"px" ,
				"margin-top": hEssence/3+"px"
			},500);
			$('#imgessence').animate( {"height": "100px","width":'100px' },1000);
		},3750)

		setTimeout(function(){
			$('#animation').removeClass('enCour');
			$('#animation').removeClass('done');
		},7000)
	}


}


$('#form').submit(function() {
		calculate();

		if(!$('#animation').hasClass('done')){
		$('#formulaire').animate({
			"left": 180,
			"top": 50
	  	},500);
	}
setTimeout(function(){

	$('#cercle').fadeIn(1000);
	setTimeout(function(){

		alignLineHeight();
	},1500)
},500)


	return false;
});


$('.trait').click(function(){
	var id = $(this).attr('id');
	$('#information').stop().fadeOut(500);
	setTimeout(function(){

	$('#infoTitle').html();
	$('#tempsData').html();
	$('#distancesData').html();
	$('#coutData').html();
	$('#emissionData').html();

	$('#information').fadeIn(500);
		if(!$('#information').hasClass('activated')){
		$('#conteneur').animate( {"left": "+=220px"},500);
		$('#information').addClass('activated');
	}
	},500)
});





$('.trait>img').mouseenter(function(){
	$(this).stop().animate( {"height": "110px","width":'110px' },500);
});

$('.trait>img').mouseleave(function(){
	$(this).stop().animate( {"height": "100px","width":'100px' },500);
});


initLineHeight();

}); 