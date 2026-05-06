
function chonTour(name) {
    document.getElementById("thongbao").innerText =
        "Bạn đã chọn tour " + name;
}


function validateForm() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let des = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let people = document.getElementById("people").value;

    if (name == "") return alert("Nhập tên");
    if (phone == "") return alert("Nhập SĐT");
    if (email == "") return alert("Nhập email");
    if (des == "") return alert("Chọn điểm đến");
    if (date == "") return alert("Chọn ngày");
    if (people <= 0) return alert("Số người phải > 0");

    document.getElementById("message").innerText =
        "Đặt tour thành công";

    return false;
}