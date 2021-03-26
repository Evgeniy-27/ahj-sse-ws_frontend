/* eslint-disable import/extensions */
import Widget from './Widget';

const widget = new Widget('wss://evgeniy-27-ahj-sse-ws.herokuapp.com/ws');

// const widget = new Widget('ws://localhost:8080/ws');

widget.createForm();
