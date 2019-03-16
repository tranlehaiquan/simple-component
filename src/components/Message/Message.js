import React from 'react';
import ReactDOM from 'react-dom';

function Message() {
  let rootMessage = document.getElementById('sp-message-root');
  if(!rootMessage) {
    rootMessage = generateRootMessage();
  }

  return ReactDOM.createPortal(1, rootMessage);
}

function generateRootMessage() {
  const div = document.createElement('div');
  div.id = 'sp-message-root';
  document.body.appendChild(div);

  return div;
}

export default Message;
