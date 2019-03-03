$(function(){



    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getindexmenu',
        dataType:'json',
        success:function ( info ) {
            // console.log( info );
            var htmlStr =  template('navTpl',info);
            $('.main .nav ul').html(htmlStr);
            var $ul = $('.container .main .nav ul ');
            // console.log($ul[0]);
            var $more = $('.container .main .nav ul .more ');
            // console.log($more[0]);
            var $lis = $('.container .main .nav ul .current');
            // console.log($as[0])
            $ul.on('click',$more,function(){
                $lis.slideToggle();
            })
        }
    });
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        success:function ( info ){
            console.log(info);
            var htmlStr = template('dis_listTpl',info);
            $('.main .discount .dis_list').html(htmlStr);
        }
    })
})