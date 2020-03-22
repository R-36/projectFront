import React, {Component} from "react";
import SocketIO from "../../Controllers/SocketIO";
import Button from "../Common/Button";
import './chat.css';
import Cookies from "universal-cookie";
import arrowDown from "../../images/arrow_down.svg";

class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            focused: true,
            minimized: true,
            unreads: false,
        };

        this.onMessage = this.onMessage.bind(this);
    }

    componentDidMount() {
        SocketIO.subscribe('chat_message', this.onMessage );
    }

    onMessage(msg) {
        const {minimized} = this.state;
        let newState = {
            messages: [
                ...this.state.messages,
                msg
            ],
        };

        if( minimized ) {
            newState.unreads = true;
        } else {
            let chat = document.getElementById("js-chat-messages");
            chat.scrollTop = chat.scrollHeight;
        }

        this.setState(newState);
    }
    send() {
        const cookies = new Cookies();
        SocketIO.sendChatMessage({
            msg: this.enteredMessage,
            sender: cookies.get('nickname'),
        });
        document.getElementById('js-chat-input').value = '';
    }


    render() {
        const {messages, minimized, unreads} = this.state;
        if( minimized ) {
            return (
                <div className={'chat chat--minimized'}
                >
                  <div className={'chat__rooms'}>
                    <div className={'chat__room'}>Общий чат</div>
                  </div>
                  <img className={'chat-minimize reversed'}
                       src={arrowDown}
                       alt={'shevron'}
                       onClick={() => this.setState({minimized: false})}
                  />
                </div>
            );
        }
        return(
          <div className={'chat'}>
            <div className={'chat__rooms'}>
                <div className={'chat__room'}>Общий чат</div>
              <img className={'chat-minimize'}
                   src={arrowDown}
                   alt={'shevron'}
                   onClick={() => this.setState({minimized: true})}
              />
            </div>
            <div id={'js-chat-messages'}
                 className={'chat__messages'}
                 onClick={() => {
                     document.getElementById('js-chat-input').focus();
                 }}
            >
                { messages.map( (msg, key) =>
                  <div key={key} className={'chat__row'}>
                      <span className={'chat__message-sender'}>{msg.sender}: </span>
                      <span className={'chat__message'}>{msg.msg}</span>
                  </div>
                ) }
            </div>
                <div className={'chat__input'}>
                    <input
                        id={'js-chat-input'}
                        type={'text'}
                        onChange={ (e) => this.enteredMessage = e.target.value }
                        onKeyPress={(e)=> {
                           if( e.which === 13) {
                               this.send();
                               e.target.value = '';
                           }
                        } }
                        autoComplete={'off'}
                    />
                    <Button className={'chat__btn'} onClick={()=> this.send()}>Отправить</Button>
                </div>
          </div>
        );
    }
}

export default Chat;