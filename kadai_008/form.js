$(function(){
  // クラス属性がbtnがクリックされた処理を実行する
  $('.btn').on('click', function(){
    // クラス属性text-boxのvalueに「クリックされました！」を変更する。
    $('.text-box').val("クリックされました！");
  });
});