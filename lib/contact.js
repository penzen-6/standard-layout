function regist(){
    // 変数定義
    var apiurl = 'API Gatewayの呼び出しURLを記載する';
    // formタグの中身を取得
    var form = $('#myform');
    // formタグ内のvalue値を取得
    var formdata = form.serialize();

    // Ajax通信
    $.ajax({
        // Ajax定義
        type:'POST',
        url:apiurl,
        data:formdata,
        dataType:'json'
    }).done(function(data, textStatus, jqXHR){
         if(data.result == 1){
            // Lambdaからの返答が正常だった場合
            $('#msg').html('お問合せありがとうございました。');
        }else{
            // Lambdaからの返答がエラーだった場合
            console.log(data.result );
            $('#msg').html('エラーが発生しました。');
        }
    }).fail(function(jqXHR, textStatus, errorThrown){
        // Ajaxの通信に問題があった場合
        $('#msg').html('不明なエラーが発生しました。');
    })

}