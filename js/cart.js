function showDiv() {
    // Chọn thẻ div bằng phương thức getElementById
    var div = document.getElementById("cart");
    var p = document.getElementById('p-cart ');
    let value = parseInt(p.textContent);
    value++;
    p.textContent = value;
    // Đặt giá trị hiển thị của thẻ div là "block" để hiển thị nó
    div.style.display = "flex";
  }