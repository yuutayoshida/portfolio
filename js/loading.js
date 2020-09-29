// 自分のサイトからのアクセスなら「www.example.com」
const host = window.location.hostname;

// 自分のサイトからのアクセスでなければ...
if (host !== "https://yuutayoshida.github.io/portfolio/top.html") {
  // 続く処理
  var bg = document.getElementById('loader-bg'),
    loader = document.getElementById('loading');
  /* ロード画面の非表示を解除 */
  bg.classList.remove('is-hide');
  loader.classList.remove('is-hide');

  /* 読み込み完了 */
  window.addEventListener('load', stopload);

  /* 10秒経ったら強制的にロード画面を非表示にする */
  setTimeout('stopload()',10000);

  /* ロード画面を非表示にする処理 */
  function stopload(){
      bg.classList.add('fadeout-bg');
      loader.classList.add('fadeout-loader');
  }
}