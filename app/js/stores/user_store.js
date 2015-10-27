import { EventEmitter } from "events";
import $ from "jquery";

class UserStore extends EventEmitter {

  constructor() {
    super();
    this.fetch(1);
  }

  fetch(userId) {
    $.get("http://private-a1f4c-djayapi.apiary-mock.com/users/" + userId, function(data) {
      this.emit("change", {user: data});
    }.bind(this));
  }

};

export default new UserStore();
