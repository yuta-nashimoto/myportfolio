
/***************************************************
 * グローバル変数
****************************************************/
var $window = $(window); //ウィンドウのDOMを取得
var windowHeight = $window.height(); //画面の高さを取得



$(function() {
	/***************************************************
	 * ナビ表示の切り替え
	****************************************************/
	var $nav = $('.gnav_wrap');
	var $humMenu = $('.menu-trigger');
	var $navAnchor = $('.gnav_list a');
	if (window.matchMedia('(min-width:768px)').matches) {
		$humMenu.addClass('is_none');
	} else {
		$humMenu.removeClass('is_none');
		$navAnchor.click(function(){
			navToggle();
		});
		$humMenu.click(function(){
			navToggle();
		});
	}
	/**********************************
	 * ハンバーガーメニュー
	***********************************/
	// SP版ナビ トグル関数
	function navToggle() {
		if($humMenu.hasClass('active')){
			$humMenu.removeClass('active');
			$nav.stop().animate({
				'top': -100 + "%"
			},250)
		} else {
			$humMenu.addClass('active');
			$nav.stop().animate({
				'top':0
			},250)
		}
	}



	/***************************************************
	 * MVとメインタイトルのパララックスエフェクト
	****************************************************/
	var targetBg = $('.parallax'); //背景のDOMを取得
	var targetBgPos = targetBg.offset().top; //背景の位置を取得
	var targetTxt = $('.parallax_txt'); //テキストのDOMを取得
	var targetTxtPos = targetTxt.offset().top; //テキストの位置を取得
	var targetFactor01 = 0.2;
	var targetFactor02 = 1.6;
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


		/*******************************************
		 * スキルバー実装
		********************************************/
		var skillOffset = $('#skill').offset().top;
		var $skillBar = $(".skillbar");
		if(scrollY > skillOffset - 500){
			$skillBar.skillBars({
				from: 0, // バーの動くスタート位置
				speed: 1500, // 動くスピード
				interval: 100 // 動き始めるまでの時間
			});
		}
	});

	/***************************************************
	 * MV背景画像　iPhone対策
	****************************************************/
	var device = navigator.userAgent;
	if (device.indexOf('iPhone') !== -1 || device.indexOf('iPad') !== -1) {
		//iPhoneかiPadならば
		$(".main_visual").css({ 
			"background-position": "top right",
			"background-size": "auto " + 120 + "vh" 
		});
		$('#submit_btn').click(function(e) {
			return e.preventDefault();
		});
	}


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

	$('#submit_btn').click(function(e) {
		return e.preventDefault();
	});                                 
});
