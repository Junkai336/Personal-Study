// 시큐리티 관련 csrf 공격 방지 토큰
var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");

// 결제 페이지로 input 값을 보내주기 위해 정의함 (객실 이름, 객실 가격 등)
// 검증단계에서 가격을 비교하기 위해 roomId를 보냄 (상품페이지의 가격을 조작할 수 있기 때문)
var roomName = $('input[name="roomName"]').val();
var roomPrice = $('input[name="roomPrice"]').val();
var memberName = $('input[name="memberName"]').val();
var memberEmail = $('input[name="memberEmail"]').val();
var memberPhoneNumber = $('input[name="memberPhoneNumber"]').val();


// input 값 확인
// console.log(roomName);
// console.log(roomPrice);
// console.log(memberName);
// console.log(memberEmail);
// console.log(memberPhoneNumber);

// 가맹점 식별 코드 초기화
var IMP = window.IMP;
IMP.init('imp20076276');

// 결제하기 버튼을 누를 시 작동하는 함수
$('#cash').click(function () {

    // 가맹점 식별 코드 (포트원 결제연동 -> 내 식별 코드)

    IMP.request_pay({
        // 등록된 PG사가 여러개인 경우 inicis로 지정
        // PG사: 온라인 쇼핑몰 - 신용카드사 와의 결제를 대행해주는 업체
        pg: 'html5_inicis',
        // card(신용카드), trans(실시간계좌이체), phone(휴대폰소액결제) 등등
        pay_method: 'card',
        // 상점에서 관리하는 주문 번호
        merchant_uid: memberName + '_' + roomName + '_' + new Date().getTime(),

        // 이니시스 결제창에서 등장하는 상품명
        name: roomName,
        // 실제 금액
        amount: roomPrice,

        // 구매자 항목
        // 구매자 이메일 (필수입력)
        buyer_email: memberEmail,
        // 구매자 이름
        buyer_name: memberName,
        // 구매자 핸드폰 번호 (필수입력) <미설정시 이니시스 결제창에서 오류 발생>
        // {마지막에 파라미터 값을 받는 부분이 있기 때문으로 추정}
        buyer_tel: memberPhoneNumber

    }, function (rsp) {
        console.log(rsp);

        if (rsp.success) {
            // 서버 결제정보 조회를 위해 jQuery ajax로 imp_uid 전달하기
            jQuery.ajax({
                url: "/reserv/reservationPay",
                type: 'POST',
                dataType: 'json',
                data: {
                    amount: roomPrice,
                    roomId: $("#room").val(),
                    // imp_uid : 포트원 결제 고유번호
                    // imp_uid : rsp.imp_uid
                    // merchant_uid: rsp.merchant_uid
                    //기타 필요한 데이터가 있으면 추가 전달
                },
                beforeSend: function (xhr) {
                    /* 데이터를 전송하기 전에 헤더에 csrf값을 설정 */
                    xhr.setRequestHeader(header, token);
                },

                success: function (result, status) {
                    // 서버에서 REST API로 결제정보확인 및 서비스루틴이 정상적인 경우
                    if (response.status == 200) {
                        // location.href = "결제 완료 후 이동할 페이지 url"
                        var msg = '결제가 완료되었습니다.';
    
                        //            msg += '\n고유ID : ' + rsp.imp_uid;
                        //            msg += '\n상점 거래ID : ' + rsp.merchant_uid;
                        msg += '\결제 금액 : ' + rsp.paid_amount;
                        msg += '카드 승인번호 : ' + rsp.apply_num;
    
                        alert(msg);
    
                    } else {
                        // 결제가 성공했으나 다른 에러가 떠서 오는 경우
                        // ?? : 결제취소처리 로직을 짜야할 것 같음.
                        var msg = '결제에 실패하였습니다.'
                        alert(msg);
                    }
                }
            })

        } else {
            // 결제창에서 결제가 실패하는 경우 (iamport 내에서 정해진 로직이 있어서 따로 로직을 짤 필요는 없는 것 같다.)
            var msg = '결제에 실패하였습니다.';
            msg += '에러내용 : ' + rsp.error_msg;

        }

        // alert("결과가 어떻든 나오는 msg: " + msg);
    });
});