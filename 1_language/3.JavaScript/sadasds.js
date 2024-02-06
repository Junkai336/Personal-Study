console.log($("#name").val());

// 시큐리티 관련 csrf 공격 방지 토큰
var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");

// 결제 페이지로 input 값을 보내주기 위해 정의함 (객실 이름, 객실 가격 등)
// 검증단계에서 가격을 비교하기 위해 roomId를 보냄 (상품페이지의 가격을 조작할 수 있기 때문)
var room = [[${ reservDto.room.id }]];
var roomName = $('input[name="roomName"]').val();
var roomPrice = $('input[name="roomTotalPrice"]').val();
var memberName = $('input[name="memberName"]').val();
var memberEmail = $('input[name="memberEmail"]').val();
var memberPhoneNumber = $('input[name="memberPhoneNumber"]').val();
var formSubmit = document.querySelector('.displayNone');


// input 값 확인
console.log("room_id: " + room);
// console.log(roomName);
// console.log(roomPrice);
// console.log(memberName);
// console.log(memberEmail);
// console.log(memberPhoneNumber);

// 가맹점 식별 코드 초기화
var IMP = window.IMP;
IMP.init('imp20076276');

// http 응답을 받기 위해 선언 (솔직히 잘 모르겠음)
const requestHttp = new XMLHttpRequest();
var roomId = $("#room").val();
var checkIn = $("#checkIn").val();
var checkOut = $("#checkOut").val();
var url = `/reserv/reservationPay/${roomId}/${checkIn}/${checkOut}`;
requestHttp.open("POST", url);

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
    buyer_tel: memberPhoneNumber

  }, function (rsp) {
    console.log(rsp);

    if (rsp.success) {
      // 서버 결제정보 조회를 위해 jQuery ajax로 imp_uid 전달하기

      var data = {
        //        amount: roomPrice,
        room_id: room,
        checkIn: $("#checkIn").val(),
        checkOut: $("#checkOut").val(),
        // imp_uid : 포트원 결제 고유번호
        //  imp_uid : rsp.imp_uid
        //가맹점 주문번호
        //  merchant_uid: rsp.merchant_uid
        //기타 필요한 데이터가 있으면 추가 전달
      };

      var paramData = JSON.stringify(data);
      var roomId = $("#room").val();
      var checkIn = $("#checkIn").val();
      var checkOut = $("#checkOut").val();
      var url = `/reserv/reservationPay/${roomId}/${checkIn}/${checkOut}`;

      $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: paramData,
        contentType: "application/json",
        beforeSend: function (xhr) {

          /* 데이터를 전송하기 전에 헤더에 csrf값을 설정 */
          xhr.setRequestHeader(header, token);

          requestHttp.setRequestHeader(header, token);
          requestHttp.send(xhr);
        }
        , statusCode: {
          200: function () {
            var msg = '결제가 완료되었습니다.';
            alert(msg);
            F
            saveReserv();
          },
          400: function () {
            alert('400 status code! server error');
            var msg = '결제에 실패하였습니다.';
            msg += '\n결제 금액 : ' + rsp.paid_amount;
            msg += '\n결제 처리가 이미 완료된 경우 판매자와 문의하십시오.'
            // 예약이 이미 잡힌 경우

            alert(msg);
          },
          500: function () {
            alert('500 status code! server error');
            var msg = '결제에 실패하였습니다.';
            msg += '에러내용 : ' + rsp.error_msg;
            alert(msg);
          }

        }
      })
    })
});