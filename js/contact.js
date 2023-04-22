var hoTen = document.getElementById('hoTen');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var diaChi = document.getElementById('diaChi');
var noiDung = document.getElementById('noiDung');
var btnSend = document.getElementById('btnSend');

btnSend.addEventListener("click", function(){
    var check = true;
    if(hoTen.value.length == 0){
        hoTen.style.border = "1px solid red";
        check = false;
    }else{
        hoTen.style.border = "1px solid #a9a9a9";
    }
    if(email.value.length == 0){
        email.style.border = "1px solid red";
        check = false;
    }else{
        email.style.border = "1px solid #a9a9a9";
    }
    if(phone.value.length == 0){
        phone.style.border = "1px solid red";
        check = false;
    }else{
        phone.style.border = "1px solid #a9a9a9";
    }
    if(diaChi.value.length == 0){
        diaChi.style.border = "1px solid red";
        check = false;
    }else{
        diaChi.style.border = "1px solid #a9a9a9";
    }
    if (noiDung.value.length == 0) {
        noiDung.style.border = "1px solid red";
        check = false;
    }else{
        noiDung.style.border = "1px solid #a9a9a9";
    }
    if(check == true){
        alert("Bạn Đã Gửi Thành Công");
    }
});
