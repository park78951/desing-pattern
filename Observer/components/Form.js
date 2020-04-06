export default class Form {
  constructor(state = {}) {
    this.appState = state;
  }

  createMarkup() {
    return `
      <div>
        <form id='add-user'>
          <label for='username'>Add a User</label>
          <input id='username' type='text' name='name'>
          <button type='submit'>Add</button>
        </form>
      </div>
    `;
  }

  render(selector = 'app') {
    const markup = this.createMarkup();
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;

    this.bindEvents();
  }

  bindEvents() {
    const form = document.getElementById('add-user');
    form.addEventListener('submit', e => {
      e.preventDefault();

      const el = e.target;
      const { value: name } = el.name;

      if(!name) {
        return;
      }

      const state = this.appState.get();
      const users = [...state.users, { id: state.users.length++, name }];
      
      el.name.value = '';
      
      this.appState.update({
        ...state,
        users,
      })
    });
  }
}