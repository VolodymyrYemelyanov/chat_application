import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

class Chat extends Component {
  state = {
    name: 'Vlad',
    message: []
  };

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }));

  SubmitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString };
    this.addMessage(message);
  };

  render() {
    return (
      <div>
        <label htmlFor='name'>
          Name:&nbsp;
          <input
            type='text'
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <ChatInput
          onSubmitMessage={messageString => this.SubmitMessage(messageString)}
        />

        <ChatMessage />
      </div>
    );
  }
}

export default Chat;
