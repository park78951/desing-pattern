import Object from '../lib/Observer.js';

export default class Count extends Object {
  createMarkup(state) {
    return `
      <span>
        userCount: ${state.users.length}
      </span>
    `;
  }

  render(state, selector = 'app') {
    const markup = this.createMarkup(state);
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;
  }

  update(state) {
    this.render(state, 'user-count-container');
  }
}