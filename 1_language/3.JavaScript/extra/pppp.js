function roomEdit() {
  var token = $("meta[name='_csrf']").attr("content");
  var header = $("meta[name='_csrf_header']").attr("content");
  
  var url = `/room/editRoom`;
  
  var paramData = {
  id: $(".id").val(),
  name: $(".name").val(),
  detail: $(".detail").val(),
  price: $(".price").val(),
  adult: $(".adult").val(),
  children: $(".children").val(),
  checkInTime: $(".checkInTime").val(),
  checkOutTime: $(".checkOutTime").val(),
  reservationStatus: $(".reservationStatus").val()
  };
  
  let formData = new FormData();
  
  var fileInput = $('.fileInputEditRoom');
  
  for (var i = 0; i < fileInput.length; i++) {
  if (fileInput[i].files.length > 0) {
  for (var j = 0; j < fileInput[i].files.length; j++) {
  console.log(" fileInput[i].files[j] :::"+ fileInput[i].files[j]);
  
  // formData에 'file'이라는 키값으로 fileInput 값을 append 시킨다.
  formData.append('img', $('.fileInputEditRoom')[i].files[j]);
  }
  }
  }
  // formData.append('img', $('.fileInputEditRoom')[0].files[0]);
  
  formData.append("paramData", new Blob([JSON.stringify(paramData)], { type: "application/json" }));
  
  $.ajax({
  url: url,
  type: "POST",
  enctype: 'multipart/form-data',
  data: formData,
  contentType: false,
  processData: false,
  cache: false,
  
  beforeSend: function (xhr) {
  /* 데이터를 전송하기 전에 헤더에 csrf값을 설정 */
  xhr.setRequestHeader(header, token);
  },
  
  success: function (result, status) {
  console.log(paramData);
  alert("객실 정보가 수정되었습니다.");
  window.location.reload();
  }
  });
  }