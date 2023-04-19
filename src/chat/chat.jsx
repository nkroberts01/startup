import React from 'react';

export function Chat() {
    return (
        <main class="container-fluid text-center">
        <div class="name">
          <fieldset id="name-controls">
            <legend>My Name</legend>
            <input id="my-name" type="text" />
          </fieldset>
        </div>
  
        <fieldset id="chat-controls" disabled>
          <legend>Chat</legend>
          <input id="new-msg" type="text" />
          <button onclick="sendMessage()">Send</button>
        </fieldset>
        <div id="chat-text"></div>
     </main>
    );
}