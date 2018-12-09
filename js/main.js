$(function() {
	var $skillBar = $(".skillbar");
	$skillBar.skillBars({
		from: 0, // バーの動くスタート位置
		speed: 1500, // 動くスピード
		interval: 100 // 動き始めるまでの時間
	});
});
