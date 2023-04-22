var SlideKhachHang;
var slidesKH = document.getElementsByClassName("SlideKhachHang");
var dots = document.getElementsByClassName("dot");
var Img = document.getElementById("bannerImg");
var noiDungBinhLuan = document.getElementById("noiDungBinhLuan");
var showNoiDungBinhLuan = document.getElementById("showNoiDung");
var i = 0;
var t;

$("a[href*='#']:not([href='#])").click(function() {
  let target = $(this).attr("href");
  $("html,body")
    .stop()
    .animate(
      {
        scrollTop: $(target).offset().top
      },
      1500
    );
  event.preventDefault();
});
document.addEventListener("DOMContentLoaded", function() {
  var nut = document.querySelector("div.icon i");
  var mobile = document.querySelector("ul");
  nut.addEventListener("click", function() {
    mobile.classList.toggle("active");
  });
});
function HienThiSlides() {
  for (i = 0; i < slidesKH.length; i++) {
    slidesKH[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slidesKH[SlideKhachHang].style.display = "block";
  dots[SlideKhachHang].className += " active";
  SlideKhachHang++;
  if (SlideKhachHang > slidesKH.length - 1) {
    SlideKhachHang = 0;
  }
  setTimeout(HienThiSlides, 5000);
}
HienThiSlides((SlideKhachHang = 0));
function bamChuyen(n) {
  HienThiSlides((SlideKhachHang = n));
}
t = setInterval(function Next() {
  i++;
  if (i > 3) {
    i = 1;
  }
  Img.src = "./img/banner/banner" + i + ".jpg";
}, 2000);
var item;
function sendBinhLuan() {
  var noidung = noiDungBinhLuan.value;
  if (noidung.length != 0) {
    if (!localStorage.getItem("binhluan")) {
      if (item == undefined) {
        item = "<p>User: " + noidung + "</p>";
      } else {
        item += "<p>User: " + noidung + "</p>";
      }
      localStorage.setItem("binhluan", item);
      showNoiDungBinhLuan.innerHTML = localStorage.getItem("binhluan");
    } else {
      if (localStorage.getItem("binhluan").length != 0) {
        item = localStorage.getItem("binhluan");
        if (item == undefined) {
          item = "<p>User: " + noidung + "</p>";
        } else {
          item += "<p>User: " + noidung + "</p>";
        }
        localStorage.setItem("binhluan", item);
        showNoiDungBinhLuan.innerHTML = localStorage.getItem("binhluan");
      }
    }
  }else{
    console.log('Không được bỏ trống');
  }
}
function load() {
  var ckbDark = document.getElementById("ckbDark");
  if (localStorage.getItem("darkreader") == "enabled") {
    document.getElementById("dark-reader").disabled = false;
    ckbDark.checked = true;
  } else {
    document.getElementById("dark-reader").disabled = true;
    ckbDark.checked = false;
  }
  showNoiDungBinhLuan.innerHTML = localStorage.getItem("binhluan");
}
function dark_toggle() {
  var ckbDark = document.getElementById("ckbDark");
  var el1 = document.getElementById("dark-reader");
  if (ckbDark.checked == true) {
    if (el1.disabled) {
      el1.disabled = false;
      localStorage.setItem("darkreader", "enabled");
    }
  } else {
    el1.disabled = true;
    localStorage.setItem("darkreader", "disabled");
  }
}
