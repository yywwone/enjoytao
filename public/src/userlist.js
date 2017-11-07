define(['jquery','template'], function ($,template) {

    // 获取用户列表 
    $.ajax({
        url: '/api/user/queryUser',
        type: 'get',
        data: {page: 1,pageSize: 10},
        success: function (info) {
            console.log(info);

            var html = template('list', info);
            $('tbody').html(html);

        }
    });

})


