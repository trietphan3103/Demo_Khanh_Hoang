const search = window.location.search;
console.log(search);
const params = new URLSearchParams(search);
console.log(params);
let id = params.get("id");
console.log(id);


async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  function renderUi(book) {
    const content = document.getElementById("item-detail-content");
    const item_div = document.createElement("div");
    item_div.setAttribute("class", "item-detail-content");
    item_div.innerHTML = `
    <div class="content-left">
    <div style="text-align: center; height: 100%">
      <img class="book-img" src="${book.book_image}" alt="" />
    </div>
  </div>
  <div class="content-right">
    <h2> ${book.title}</h2>
    <p>Auhtor:${book.author}</p>
    <div>Description: 
    ${book.description}
    </div>
    <p></p>
    <p></p>
    <p></p>         
    <p>Price: ${book.price}$</p>
    <button class="AddToCart" onclick="AddBook(${book.book_id})">Add</button>
  </div>`;
    content.appendChild(item_div);
  }
  async function AddBook(key) {
    const datas2 = await getData(
      `https://testapi.io/api/koozu0909/https://testapi.io/api/Kooz/books`
    );
    var item;
    datas2.map(async (data) => {
      if (data.book_id == key) {
        item = data;
      }
    });
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    if (cart == null) {
      cart = [
        {
          book: item,
          quantity: 1,
        },
      ];
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      for (book_item of cart) {
        console.log(book_item);
        if (book_item.book.book_id == item.book_id) {
          // Xử lý trùng item đã thêm vào giỏ hàng
          book_item.quantity += 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          return;
        }
      }
      cart.push({
        book: item,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  const addToCart = (key) => {
    // get item has key param
    let item = products.data[key];
  
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    if (cart == null) {
      cart = [
        {
          product: item,
          quantity: 1,
        },
      ];
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      for (product_item of cart) {
        if (product_item.product.name == item.name) {
          // Xử lý trùng item đã thêm vào giỏ hàng
          product_item.quantity += 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          return;
        }
      }
      cart.push({
        product: item,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  async function run() {
    const datas2 = await getData(
      `https://testapi.io/api/koozu0909/https://testapi.io/api/Kooz/books`
    );
    var book;
    console.log(datas2);
    datas2.map(async (data) => {
      if (data.book_id == id) {
        book = data;
      }
    });
    console.log(book);
    renderUi(book);
  }
  
  run();
  