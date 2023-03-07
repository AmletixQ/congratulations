const wonderful_words = [
  "Любимая", "Целеустремленная", "Жизнелюбивая",
  "Прекрасная", "Отзывчивая", "Фантастическая",
  "Умелая", "Эффектная", "Восхитительная",
  "Превосходная", "Фееричная", "Лапочка",
  "Волнующая", "Благородная", "Самая лучшая",
  "Уважительная", "Упрямая", "Открытая",
  "Способная", "Самоотверженная", "Серьезная",
  "Феерическая", "Живописная", "Солнечная",
  "Прелестная", "Современная", "Умная", "Усердная",
  "Невообразимая", "Умопомрачительная", "Чудесная",
  "Смелая", "Незабываемая", "Покоряющая", "Дивная",
  "Зажигательная", "Самая-самая", "Потрясная",
  "Смышленная", "Радушная", "Настоящая", "Жизнерадостная",
  "Любопытная", "Идеальная", "Понимающая", "Драгоценная",
  "Шикарная", "Уникальная", "Блаженная", "Отважная",
  "Чистая", "Остроумная", "Трепетная", "Лучезарная",
  "Ритмичная", "Очаровашка", "Гармоначная",
  "Няшная", "Великодушная", "Сногшибательная",
  "Инициативная", "Тактичная", "Мелодичная", "Напористая",
  "Верная", "Амбициозная", "Блистательная", "Гениальная",
  "Удивительная", "Решительная", "Классная", "Пламенная",
  "Великая", "Лучшая", "Суперская", "Ошеломительная", "Пон?"
]

const popup = document.querySelector(".popup");
const h2 = document.getElementById("wonderful-word");

const open = document.getElementById("open-popup");
const close = document.getElementById("close-popup");
const continue_button = document.getElementById("continue-button");

open.addEventListener("click", () => {
  popup.style.cssText = "scale: 1; visibility: visible";

  h2.innerText = "-> " + wonderful_words[Math.floor(Math.random() * wonderful_words.length)] + " <-";
});

close.addEventListener("click", () => {
  popup.style.cssText = "scale: 0.1; visibility: hidden;";

  const notification = document.querySelector(".mini-popup-window");

  setTimeout(function() {
    notification.style.cssText = "scale: 0.1; visibility: hidden";
  }, 2000);

  notification.style.cssText = "scale: 1; visibility: visible;";
})

continue_button.addEventListener("click", () => {
  h2.innerText = "-> " + wonderful_words[Math.floor(Math.random() * wonderful_words.length)] + " <-";
});



