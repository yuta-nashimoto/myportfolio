$(function() {
	var $skillBar = $(".skillbar");
	$skillBar.skillBars({
		from: 0, // バーの動くスタート位置
		speed: 1500, // 動くスピード
		interval: 100 // 動き始めるまでの時間
	});

	//画面幅でナビゲーションの表示切り替え
	var nav = $('.gnav_wrap');
	if (window.matchMedia('(min-width:768px)').matches) {
		nav.removeClass('is_none');
	} else {
		nav.addClass('is_none');
	}

	var $window = $(window); //ウィンドウのDOMを取得
	var targetBg = $('.parallax'); //背景のDOMを取得
	var targetBgPos = targetBg.offset().top; //背景の位置を取得
	var targetTxt = $('.parallax_txt'); //テキストのDOMを取得
	var targetTxtPos = targetTxt.offset().top; //テキストの位置を取得
	var targetFactor01 = 0.2;
	var targetFactor02 = 1.3;
	var windowHeight = $window.height(); //画面の高さを取得
	var scrollYStart01 = targetBgPos - windowHeight;
	var scrollYStart02 = targetTxtPos - windowHeight;
	$window.scroll(function () { //ウィンドウがスクロールされたときの処理
		var scrollY = $(this).scrollTop(); //ウィンドウのスクロールを取得
		if (scrollY > scrollYStart01) {
			targetBg.css('background-position-y', - (scrollY - targetBgPos) * targetFactor01 + 'px');
		} else {
			targetBg.css('background-position', 'center top');
		}
		if (scrollY > scrollYStart02) {
			targetTxt.css('top', targetTxtPos - scrollY / targetFactor02);
		} else {
			targetTxt.css('top', '50%');
		}
	});
});
