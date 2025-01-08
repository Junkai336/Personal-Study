document.addEventListener('DOMContentLoaded', function() {

    const btn = document.querySelectorAll('button');

    console.log(btn);

    btn[0].addEventListener('click', function() {
        $.ajax({
            url: '/createTable',
            method: 'GET'
        })
            .done(function() {
                alert("테이블 작성 완료 (HELLOMANN)")
            })
            .fail(function () {
                alert("테이블이 이미 존재합니다.")
            })
    })

    btn[1].addEventListener('click', function() {
        $.ajax({
            type: 'GET',
            url: '/insert'
        })
            .done(function() {
                alert("insert 완료 (HELLOMANN)")
            })
    })

    btn[2].addEventListener('click', function() {
        $.ajax({
            type: 'GET',
            url: '/update'
        })
            .done(function() {
                alert("update 완료 abc -> zxc (HELLOMANN)")
            })
    })

    btn[3].addEventListener('click', function() {
        $.ajax({
            type: 'GET',
            url: '/delete'
        })
            .done(function() {
                alert("delete 완료 (HELLOMANN)")
            })
    })

})