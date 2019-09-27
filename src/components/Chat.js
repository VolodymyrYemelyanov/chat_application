import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import './Chat.css';

const URL = 'ws://localhost:3030';

class Chat extends Component {
  state = {
    name: 'Vlad',
    messages: []
  };

  ws = new WebSocket(URL);

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };

    this.ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL)
      });
    };
  }

  addMessage = message => {
    console.log(this.setState());
    this.setState(state => ({ messages: [message, ...state.messages] }));
  };

  SubmitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString };
    console.log(message);
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };

  render() {
    return (
      <main className='mainStyle'>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.SubmitMessage(messageString)}
        />
        <div className='messagesContainer'>
          {this.state.messages.map((message, index) => {
            return (
              <ChatMessage
                key={index}
                message={message.message}
                name={message.name}
              />
            );
          })}
        </div>

        <label className='nameLabel' htmlFor='name'>
          Name:&nbsp;
          <input
            className='nameInput'
            type='text'
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
      </main>
    );
  }
}

export default Chat;
