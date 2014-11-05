$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$( window ).load(function() {

	$(".color-selection li").each(function(index) {
		color = $(this).data("color")
		$(this).find("i").css( "color", color );
	});

	$(".color-selection li").hover(function () {
		color = $(this).data("color")

		wristband_id = $(this).parent().parent().parent().data("wristband");
	    overlay = $("#"+wristband_id+"> .overlay");
	    overlay.css('background-color', color);
	});

	$(".color-selection").each(function(index) {
		$("#"+$(this).data("wristband")+"> img").each(function(index) {
			wristband = $(this);
			frame = $(this).data("frame");
      default_color = $(this).data("default-color");
      if(!default_color) default_color = 'red'
			console.log(wristband);
			overlay = $(wristband).siblings(".overlay");
			wristband.parent().css({
				'position': 'relative',
				'padding-top': wristband.height()
			});
			wristband.css({
				'z-index': 2,
				'position': 'absolute',
				'top': 0,
				'left': '50%',
				'margin-left': -wristband.width()/2
			});
			overlay.css({
				'z-index': 1,
				'background-color': default_color,
				'position': 'absolute',
				'top': (frame == 'full')?0:(1*wristband.height()/69),
				'left': '50%',
				'margin-left': (frame == 'full')?(-wristband.width()/2):(-wristband.width()/2)+(74*wristband.width()/700),
				'height': (frame == 'full')?wristband.height():wristband.height()-(2*wristband.height()/69),
				'width': (frame == 'full')?wristband.width():wristband.width()-(84*wristband.width()/700)
			});
		});
	});


});
