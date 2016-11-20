export default (page) => {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  main.appendChild(page);
};
