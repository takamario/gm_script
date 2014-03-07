// ==UserScript==
// @name           Rakuten Mail Magazine Unchecker
// @namespace      https://github.com/takamario/gm_script
// @description    Rakuten Mail Magazine Unchecker
// @include        https://order.step.rakuten.co.jp/rms/mall/basket/vc*
// @include        https://basket.step.rakuten.co.jp/rms/mall/bs/confirmorder/*
// @include        https://basket.step.rakuten.co.jp/rms/mall/bs/confirmorderquicknormalize/*
// @include        https://books.step.rakuten.co.jp/rms/mall/book/bs*
// ==/UserScript==

(function() {
  var i, ipt = document.getElementsByTagName('input');
  for (i in ipt) {
    if (ipt[i].type === 'checkbox') {
      ipt[i].checked = '';
    }
  }
})();
