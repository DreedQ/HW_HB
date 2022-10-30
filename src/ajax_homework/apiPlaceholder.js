import axios from 'axios';

const apiLoad = document.querySelector('.load');
const resultsContainer = document.querySelector('.results');

apiLoad.addEventListener('click', async (e) => {
  e.preventDefault();
  const out = [];
  const res = await axios.get('http://jsonplaceholder.typicode.com/posts');
  res.data.forEach((element) => {
    out.push(`<div class="response-container card">
              <p> title: <span>${element.title}</span><p>
              <p> body: <span>${element.body}</span><p>
              <p>id: <span>${element.id}</span> userId: <span>${element.userId}</span><p>
            </div>`);
  });
  resultsContainer.innerHTML = out.join('');
});
export default apiLoad;
