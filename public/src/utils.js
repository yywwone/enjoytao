
define(['jquery'], function ($) {

    // 检测登录
    $.ajax({
        // /api http://localhost:3000
        url: '/api/employee/checkRootLogin',
        type: 'get',
        success: function (info) {
            if(info.error) {
                location.href = '/login.html';
            }
        }
    })

    // 退出登录
    $('.logout').on('click', function () {
        $.ajax({
            url: '/api/employee/employeeLogout',
            type: 'get',
            success: function (info) {
                if(info.success) {
                    location.href = '/login.html';
                }
            }
        })
    })

    // 
    $('.navs a + ul').prev().on('click', function () {
        $(this).next().slideToggle();
    })

})