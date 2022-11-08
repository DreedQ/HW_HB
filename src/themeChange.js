// функция которая определяет состояние цветовой темы(её передаём в кнопку или чекбокс). Далее в определении темы, мы по условию присваиваем модель цветовой схемы в зависимости от  хначения "theme" в localStorage, которую получим getItem("theme")

const setTheme = (mode) => {
  localStorage.setItem("theme", mode);
};
export default setTheme;
