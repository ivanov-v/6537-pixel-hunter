export default (template) => {
  let elem = document.createElement('div');
  elem.innerHTML = template;

  return elem.children[0];
};
