const exercise2 = document.querySelector('.exercise2');
const modal = document.querySelector('.modal');
const sendBtn = document.querySelector('#send');
const closeBtn = document.querySelector('#close_ex2');
const answer = document.querySelector('#answer');
const input = document.querySelector('#input1');
exercise2.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  try {
    if (input.value === '') {
      throw new Error('Пустая значение. Введите значение');
    } else if (!Number.isInteger(+input.value)) {
      throw new Error('Это строка! Введите цифру.');
    } else if (input.value < 5) {
      throw new Error('Значение меньше 5');
    } else if (input.value > 10) {
      throw new Error('Значение больше 10');
    } else {
      answer.innerHTML = input.value;
    }
  } catch (err) {
    answer.innerHTML = `Ошибка! ${err}`;
  }
});

// ********************** Задание 2.2. ***********************

const lottery = async () => {
  console.log('Вы начали игру');
  const promise = new Promise((resolve, reject) =>
    setTimeout(() => {
      Math.random(0) > 0.5 ? resolve() : reject('Вы промахнулись');
    }, 1000)
  );
  try {
    const result = await promise;
    console.log('Вы выиграли');
    console.log('Вам заплатили');
    return result;
  } catch (e) {
    console.log('Вы проиграли');
  } finally {
    console.log('Игра закончена');
  }
};

lottery();
