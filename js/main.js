$(function() {
	/***************************************************
	 * スキルバー実装
	****************************************************/




	/***************************************************
	 * ナビ表示の切り替え
	****************************************************/
	var nav = $('.gnav_wrap');
	if (window.matchMedia('(min-width:768px)').matches) {
		nav.removeClass('is_none');
	} else {
		nav.addClass('is_none');
	}



	/***************************************************
	 * MVとメインタイトルのパララックスエフェクト
	****************************************************/
	var $window = $(window); //ウィンドウのDOMを取得
	var targetBg = $('.parallax'); //背景のDOMを取得
	var targetBgPos = targetBg.offset().top; //背景の位置を取得
	var targetTxt = $('.parallax_txt'); //テキストのDOMを取得
	var targetTxtPos = targetTxt.offset().top; //テキストの位置を取得
	var targetFactor01 = 0.2;
	var targetFactor02 = 1.6;
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


		var skillOffset = $('#skill').offset().top;
		var $skillBar = $(".skillbar");
		if(scrollY > skillOffset - 400){
			$skillBar.skillBars({
				from: 0, // バーの動くスタート位置
				speed: 1500, // 動くスピード
				interval: 100 // 動き始めるまでの時間
			});
		}
	});


	/***************************************************
	 * スムーススクロール
	****************************************************/
	var $anchor = $('a[href^="#"]');
	$anchor.click(function(){
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({ scrollTop: position - 40}, speed, 'swing');
		return false;
	});

	/***************************************************
	 * portfolioエリア　オーバーレイ
	****************************************************/
	var $siteItem = $('.portfolio_item');
	var $overRayItem = $('.portfolio_detail_box');
	$siteItem.hover(function(){
		$(this).find($overRayItem).stop().animate({'top': 0},200);
	},function(){
		$(this).find($overRayItem).stop().animate({'top': 100 + '%'},200);
	});

});
