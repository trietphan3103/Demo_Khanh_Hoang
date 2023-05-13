async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
// function handleLogout() {
//   localStorage.removeItem("isLogin");
//   window.location.href = "login.html";
// }
function renderUi1(books) {
  const content = document.getElementById("Cate1");
  books.map(async (book) => {
    const item_div = document.createElement("div");
    item_div.setAttribute("class", "wrapper");
    item_div.innerHTML = `<div class="grid-x5">
    <div class="book-card">
      <div class="book-card__image">
        <img
          src="${book.book_image}"
          alt=""
        />
      </div>

      <h4 class="book-title">${book.title}</h4>

      <p class="book-copy">
       ${book.description}
      </p>
      <a href="detail.html?id=${book.book_id}" class="book-link">view</a>
      <a href="" class="book-price">${book.price}$</a>

    </div>
  </div>`;
    content.appendChild(item_div);
  });
}
function renderUi2(books) {
  const content = document.getElementById("Cate2");
  books.map(async (book) => {
    const item_div = document.createElement("div");
    item_div.setAttribute("class", "wrapper");
    item_div.innerHTML = `  <div class="grid-x5">
    <div class="book-card">
      <div class="book-card__image">
        <img
          src="${book.book_image}"
          alt=""
        />
      </div>

      <h4 class="book-title">${book.title}</h4>

      <p class="book-copy" >
       ${book.description}
      </p>
      <a href="detail.html?id=${book.book_id}" class="book-link">view</a>
      <a href="" class="book-price">${book.price}$</a>

    </div>
  </div>`;
    content.appendChild(item_div);
  });
}

function renderUi3(books) {
  const content = document.getElementById("Cate3");
  books.map(async (book) => {
    const item_div = document.createElement("div");
    item_div.setAttribute("class", "wrapper");
    item_div.innerHTML = `  <div class="grid-x5">
    <div class="book-card">
      <div class="book-card__image">
        <img
          src="${book.book_image}"
          alt=""
        />
      </div>

      <h4 class="book-title">${book.title}</h4>

      <p class="book-copy">
       ${book.description}
      </p>
      <a href="detail.html?id=${book.book_id}" class="book-link">view</a>
      <a href="" class="book-price">${book.price}$</a>
    </div>
  </div>`;
    content.appendChild(item_div);
  });
}

async function run() {
  // const datas1 = await getData(
  //   `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=7fUIbGH3DFlHpl6XEoQeSUVXGuJenvhX`
  // );

  const datas2 = await getData(
    `https://testapi.io/api/koozu0909/https://testapi.io/api/Kooz/books`
  );
  console.log(datas2);
  const bookdata = datas2;
  var top1 = bookdata
    .sort(function (a, b) {
      return a.Variable1 < b.Variable1 ? 1 : -1;
    })
    .slice(0, 8);

  console.log(top1);

  var top2 = bookdata
    .sort(function (a, b) {
      return a.Variable1 < b.Variable1 ? 1 : -1;
    })
    .slice(8, 16);
  console.log(top2);

  var top3 = bookdata
    .sort(function (a, b) {
      return a.Variable1 < b.Variable1 ? 1 : -1;
    })
    .slice(16, 24);
  console.log(top3);

  //   var top3 = foods2.meals
  //     .sort(function (a, b) {
  //       return a.Variable1 < b.Variable1 ? 1 : -1;
  //     })
  //     .slice(0, 12);

  renderUi1(top1);
  renderUi2(top2);
  renderUi3(top3);
}

run();
// // function parseQuery(queryString) {
// //     queryString =  queryString.substring(1)
// //     let  arr = queryString.split("&")

// //     const queries = {} ;
// //     arr.forEach((el) => {
// //         const temp = el.split("=");
// //             queries[temp[0]] = temp[1]
// //     })

// //     return queries;
// // }
