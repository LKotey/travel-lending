const burger = document.querySelector(".menu-burger");
const lines = document.querySelector(".menu-burger__line");
const menu = document.querySelector(".header-top__menu");

function toggleBurger() {
  lines.classList.toggle("menu-burger__line_active");
  menu.classList.toggle("header-top__menu_active");
}

burger.addEventListener("click", toggleBurger);

const placesArray = [
  { name: "Тибет", people: "4-7", img: "img/tibet.jpeg" },
  { name: "Франция", people: "4-7", img: "img/france.jpeg" },
  { name: "Великобритания", people: "4-7", img: "img/england.jpeg" },
  { name: "Тибет", people: "8-10", img: "img/tibet.jpeg" },
  { name: "Франция", people: "8-10", img: "img/france.jpeg" },
  { name: "Великобритания", people: "8-10", img: "img/england.jpeg" },
  { name: "Тибет", people: "11-15", img: "img/tibet.jpeg" },
  { name: "Франция", people: "11-15", img: "img/france.jpeg" },
  { name: "Великобритания", people: "11-15", img: "img/england.jpeg" },
  { name: "Тибет", people: "16-20", img: "img/tibet.jpeg" },
  { name: "Франция", people: "16-20", img: "img/france.jpeg" },
  { name: "Великобритания", people: "16-20", img: "img/england.jpeg" },
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
