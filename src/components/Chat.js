import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

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
    const styles = {
      mainStyle: {
        height: '100%',
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        paddingTop: 65
      },
      messagesContainer: {
        width: '100%',
        height: '100%',
        overflowX: 'scroll',
        paddingTop: 25,
        paddingBottom: 360,
        display: 'flex',
        flexDirection: 'column-reverse'
      }
    };

    return (
      <main style={styles.mainStyle}>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.SubmitMessage(messageString)}
        />
        <div style={styles.messagesContainer}>
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
      </main>
    );
  }
}

export default Chat;
