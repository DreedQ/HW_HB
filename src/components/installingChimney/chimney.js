document.querySelector('#id1').addEventListener('submit', (e) => {
  e.target[0].value && e.target[1].value
    ? alert(
        `Назначена консультация для пользовареля: ${e.target[0].value}  По телефону: ${e.target[1].value}`
      )
    : alert('Не заполнены поля в форме!');
});
