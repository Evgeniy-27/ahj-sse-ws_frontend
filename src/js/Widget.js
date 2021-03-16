/* eslint-disable linebreak-style */
export default class Widget {
  constructor(url) {
    this.url = url;
    this.container = document.querySelector('body');
    this.usersOnline = [];
    this.currentUser = null;
  }

  // создаем форму входа в чат (выбираем ник)
  createForm() {
    const form = document.createElement('form');
    form.classList.add('widget');
    form.innerHTML = ` <h2>Выберите псевдоним</h2>
        <input class="input widget-input" type="text" name="nick" placeholder="Например, Evgeniy" required>
        <button type="submit" class="btn">Продолжить</button>`;

    this.container.insertAdjacentElement('afterbegin', form);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nickName = form.nick.value;
      const response = { type: 'addUser', user: nickName };
      this.currentUser = nickName;
      this.ws.send(JSON.stringify(response));
    });

    form.querySelector('.widget-input').addEventListener('input', () => {
      Widget.deleteError();
    });
  }
}
