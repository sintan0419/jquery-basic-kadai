$(function(){
  // HTMLのid要素#change-colorがクリックされた時の処理
  $('#change-color').on('click', function(){
    $('#target').css('color', 'red');
  });
  // HTMLのid要素#change-textがクリックされた時の処理
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });
  // HTMLのid要素#fade-Outがクリックされた時の処理
  $('#fade-out').on('click', function(){
    $('#target').fadeOut(1000);
  });
  // HTMLのid要素#fade-Inがクリックされた時の処理
  $('#fade-in').on('click', function(){
    $('#target').fadeIn(1000);
  });
});