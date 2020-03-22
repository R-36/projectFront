import SocketIO from "./SocketIO";
import cookies from "./Cookies";


class Trivia {

  join() {
    SocketIO.emit('trivia_join', {email: cookies.get('user_email')})
  }

  leave() {
    SocketIO.emit('trivia_leave', {email: cookies.get('user_email')})
  }

  answer(id) {
    SocketIO.emit('trivia_answer', {email: cookies.get('user_email'), id: id});
  }

}

export default new Trivia();