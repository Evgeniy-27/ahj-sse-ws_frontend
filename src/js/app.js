/* eslint-disable import/extensions */
import Widget from './Widget';

// const widget = new Widget('wss://chat-ws-heroku.herokuapp.com/ws');

const widget = new Widget('ws://localhost:8080/ws');

widget.createForm();
