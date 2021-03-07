// 初期表示０
$(document).ready( function(){
document.querySelector( 'input' ).value = 0
});

// inputタグを更新する関数
//（）内はupdateの引数。　
//_vは実行する際に必要な変動する値。
 function update( _v ) 　　　　　　　　　　　　　　　　
    {
        document.querySelector( 'input' ).value = _v
    }

// 数字ボタン押下→数字を後ろに追加
//（）内はappendの引数
     function append( _v )　　　　　　　　　　　　　　　
    {
      if((document.querySelector( 'input' ).value == 0 )&&(_v!=".")) 
      {
        document.querySelector( 'input' ).value += _v
        const v = document.querySelector( 'input' ).value
        const f = new Function( 'return ' + v )
        update( f().toString() )
      }
      
      else if((document.querySelector( 'input' ).value .indexOf('.') !== -1)&&(v=="."))
      {}
      
      else{
        document.querySelector( 'input' ).value += _v
　　　　　}
    }
    
// イコール（＝）ボタンの計算
    function calc() 
    {
        const v = document.querySelector( 'input' ).value
        const f = new Function( 'return ' + v )
        update( f().toString() )
    }