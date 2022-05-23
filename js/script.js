const searchWrapper = document.querySelector(".search-box");
const searchInput = searchWrapper.querySelector("input");
const searchIcon = searchWrapper.querySelector(".search-icon");
const tahminBox = searchWrapper.querySelector(".auto-search");

//olay dinleyicisi
searchInput.onkeyup = (e) => {
  let userEnteredText = e.target.value;
  let emptyArray = [];
  if (userEnteredText) {
    
    emptyArray = tahminler.filter((tahmin) => {
      return tahmin.text.toLowerCase().includes(userEnteredText.toLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return `<li onclick="javascript:location.href='${data.url + ".html"}'"> <i class="fas fa-location-pin"></i>
      ${data.text}</li>`;
    });
    searchWrapper.classList.add("active");
  } else {
    searchWrapper.classList.remove("active");
  }
  showTahminBox(emptyArray);
};

//tahminleri göster
function showTahminBox(list) {
  let listData;
  if (!list.length) {
    userValue = searchInput.value;
    if (userValue) {
      listData = `<li>Maalesef aradığınızı bulamadık</li>`;
    } else {
      listData = "";
    }
  } else {
    listData = list.join("");
  }

  tahminBox.innerHTML = listData;
}

const backButton = document.getElementById("back");

function scrollToCards() {
  document.querySelector(".card-list").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  //butonu göster
  backButton.style.display = "block";
}

//butona tıklandığında
function scrollFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  backButton.style.display = "none";
}


var modal = document.getElementById('id01');

var model2 = document.getElementById('id02');

document.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == model2) {
    model2.style.display = "none";
  }
}
