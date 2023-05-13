function renderUi(book_list) {
    const content = document.getElementById("render-cart-book");
    book_list.map(async (item) => {
      console.log(item);
      const item_tr = document.createElement("tr");
      item_tr.innerHTML = `  <td class="table-product-cart__product-column">
      <div class="product">
        <div class="product__image">
          <img class="img-fluid" src="${item.book.book_image}" alt="">
        </div>
        <div class="product__content">
          <p>
            <strong class="h3">${item.book.title}t</strong><br>
          </p>
        </div>
      </div>
    </td>
    <td class="table-product-cart__price-column" style="font-size: 22px">
      <span class="table-product-cart__thead-sm" >Price</span>
      ${item.book.price}$
    </td>
    <td class="table-product-cart__quantity-column" style="font-size: 22px">
      <label for="product-quantity-22513575" class="table-product-cart__thead-sm">Quantity</label>
      ${item.quantity}
    </td>
    <td class="table-product-cart__total-column" style="font-size: 22px">
      <span class="table-product-cart__thead-sm" style="font-size: 22 px">Total</span>
      ${Math.round(item.book.price * item.quantity * 100) / 100}$
    </td>
    <td class="table-product-cart__addition-column">
      <span class="sr-only">The product isn't available.</span>
    </td>`;
      content.appendChild(item_tr);
    });
  }
  function Delete() {
    let cart = localStorage.getItem("cart");

      if (cart !== null) {
          notice();
        // let notiColor = document.getElementById("noti-mess").style.color;
        
        // console.log(notiColor);
        // if (notiColor == '') {
          localStorage.removeItem("cart");
          location.reload();
      } else {
        location.reload();
      }
  }
  function CountTotal(books) {
    const subtotal = document.getElementById("subtotal");
    const total = document.getElementById("total");
    let totals = 0;
    books.map(async (item) => {
      totals += item.quantity * item.book.price;
    });
    totals = Math.round(totals * 100) / 100;
    console.log(totals);
  
    subtotal.innerHTML = totals + " $";
    total.innerHTML = totals + " $";
  }
  async function run() {
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    console.log(cart);
    renderUi(cart);
    CountTotal(cart);
  }
  function notice() {
    console.log("hello")
    const noti = document.createElement("p");
    noti.innerText = "*Thanh toán thành công";
    document.getElementById("noti-mess").appendChild(noti);
    noti.style.color = 'green';
    noti.style.fontSize = '20px';
  }
  
  run();
  