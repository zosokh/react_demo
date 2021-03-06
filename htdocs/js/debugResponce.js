$(function(){
	$("div#menuToggle a").click(function(){
		$("body").addClass("modalBg");
	});
	$(".ComBtn .BtnNum a").click(function(){
		$("body").removeClass("modalBg");
	});

});

	// [Navigation Timing]
	// 詳細
	// https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/Overview.html
	// 上記の日本語訳
	// http://www.hcn.zaq.ne.jp/___/WEB/navigation-timing2-ja.html
	// 紹介記事
	// http://ascii.jp/elem/000/000/675/675568/
	// ios は 8 からサポート
	// http://caniuse.com/#feat=nav-timing

window.addEventListener("load", function() {
		// [setTimeout()]
		// イベントハンドラの実行やドキュメントの構築を待って実行する。
		// イベントハンドラの実行が完了し、ドキュメントの状態更新が終了した時点で、指定した関数が呼び出される。
		// ドキュメントコンテンツを取得したり変更したりするイベントハンドラは、このテクニックを使って、
		// ドキュメントが安定した状態になるまでコードの実行を遅らせる必要がある。
	setTimeout(function() { /* 遅延実行で window.performance.timing の値を取得する */
		var performance = window.performance;
		var timing = performance.timing;

		/* Navigation Timing API 処理モデル */
		/* ======================================= */
		/* ========== Prompt for unload ========== */
		/* ======================================= */
		var navigationStart = timing.navigationStart;

		var redirectStart = timing.redirectStart;
		/* ======================================= */
		/* =============== redirect ============== */
		/* ======================================= */
		var redirectEnd = timing.redirectEnd;

		var fetchStart = timing.fetchStart;
		/* ======================================= */
		/* ============== App cache ============== */
		/* ======================================= */

		var domainLookupStart = timing.domainLookupStart;
		/* ======================================= */
		/* ================= DNS ================= */
		/* ======================================= */
		var domainLookupEnd = timing.domainLookupEnd;

		var connectStart = timing.connectStart;
		/* ======================================= */
		/* ================= TCP ================= */
		var secureConnectionStart = timing.secureConnectionStart;
		/* ======================================= */
		var connectEnd = timing.connectEnd;

		var requestStart = timing.requestStart;
		/* ======================================= */
		/* =============== Request =============== */
		/* ======================================= */

		var responseStart = timing.responseStart;
		/* ======================================= */
			var unloadEventStart = timing.unloadEventStart;
			/* ======================================= */
			/* ================ unload =============== */
			/* ======================================= */
			var unloadEventEnd = timing.unloadEventEnd;
		/* ========== Response ========== */
		/* ======================================= */
		var responseEnd = timing.responseEnd;

		var domLoading = timing.domLoading;
		/* ======================================= */
		var domInteractive = timing.domInteractive;
			var domContentLoadedEventStart = timing.domContentLoadedEventStart;
			/* ======================================= */
			/* ======== domContentLoadedEvent ======== */
			/* ======================================= */
			var domContentLoadedEventEnd = timing.domContentLoadedEventEnd;
		/* ========== Processing ========== */
		/* ======================================= */
		var domComplete = timing.domComplete;

		var loadEventStart = timing.loadEventStart;
		/* ======================================= */
		/* ================= load ================ */
		/* ======================================= */
		var loadEventEnd = timing.loadEventEnd;

		var _start = new Date(navigationStart);
		var start = _start.toLocaleString();
		document.getElementById("start").innerHTML = start;

		var _redirect = redirectEnd - redirectStart;
		var _appCache = domainLookupStart - fetchStart;
		var _dns = domainLookupEnd - domainLookupStart;
		var _tcp = connectEnd - connectStart;
		var _request = responseStart - requestStart;
		var _response = responseEnd - responseStart;
		var _processing = domComplete - domLoading;
		var _domContentLoaded = domContentLoadedEventEnd - domContentLoadedEventStart;
		var _load = loadEventEnd - loadEventStart;

		document.getElementById("redirect").innerHTML = _redirect;
		document.getElementById("appCache").innerHTML = _appCache;
		document.getElementById("dns").innerHTML = _dns;
		document.getElementById("tcp").innerHTML = _tcp;
		document.getElementById("request").innerHTML = _request;
		document.getElementById("response").innerHTML = _response;
		document.getElementById("_processing").innerHTML = _processing;
		document.getElementById("domContentLoaded").innerHTML = _domContentLoaded;
		document.getElementById("load").innerHTML = _load;
		document.getElementById("total").innerHTML =  _redirect + _appCache + _dns + _tcp + _request + _response + _processing + _domContentLoaded + _load;
	}, 0);
}, false);
