// Burger menu
const burger = document.querySelector(".menu-burger");
const lines = document.querySelector(".menu-burger__line");
const menu = document.querySelector(".header-top__menu");

burger.addEventListener("click", () => {
  lines.classList.toggle("menu-burger__line_active");
  menu.classList.toggle("menu_active");
});

// Scroll btn

const scrollBtn = document.querySelector(".scroll-btn");
const viewPort = window.innerHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > viewPort / 2) {
    scrollBtn.classList.add("scroll-btn_visible");
  } else scrollBtn.classList.remove("scroll-btn_visible");
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Filtering of travel program search queries

class PlaceVariant {
  constructor(name, people, img) {
    this.name = name;
    this.people = people;
    this.img = img;
  }
}

const placesArray = [
  new PlaceVariant("Тибет", "4-7", "img/tibet.jpeg"),
  new PlaceVariant("Франция", "4-7", "img/france.jpeg"),
  new PlaceVariant("Великобритания", "4-7", "img/england.jpeg"),
  new PlaceVariant("Тибет", "8-10", "img/tibet.jpeg"),
  new PlaceVariant("Франция", "8-10", "img/france.jpeg"),
  new PlaceVariant("Великобритания", "8-10", "img/england.jpeg"),
  new PlaceVariant("Тибет", "11-15", "img/tibet.jpeg"),
  new PlaceVariant("Франция", "11-15", "img/france.jpeg"),
  new PlaceVariant("Великобритания", "11-15", "img/england.jpeg"),
  new PlaceVariant("Тибет", "16-20", "img/tibet.jpeg"),
  new PlaceVariant("Франция", "16-20", "img/france.jpeg"),
  new PlaceVariant("Великобритания", "16-20", "img/england.jpeg"),
];

document.getElementById("date").valueAsDate = new Date();
const place = document.getElementById("location");
const people = document.getElementById("people");
const btn = document.getElementById("locations-btn");
const list = document.getElementById("places-list");

function render(places) {
  list.innerHTML = "";
  places.forEach((place) =>
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="places__item-wrapper">
  <div class="places__item">
    <div class="places__images">
      <img src=${place.img} alt="" class="places__img" />
    </div>
    <p class="places__title">${place.name}</p>
    <p class="places__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia
      molestiae voluptates est tenetur, veritatis officiis minus corporis
      quibusdam dicta!
    </p>
    <p class="places__people">${place.people} чел.</p>
</div>
</li>`
    )
  );
}

btn.addEventListener("click", () => {
  list.innerHTML = "";

  const searchItem = { name: place.value, people: people.value };

  const places = placesArray.filter(
    (p) => p.name === searchItem.name && p.people === searchItem.people
  );

  if (places.length === 0) {
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="places__item-wrap-notfounded">
      <p class="places__notfounded">Нет программ удовлетворяющих запросу</p>
      </li>`
    );
  } else {
    render(places);
  }
});
