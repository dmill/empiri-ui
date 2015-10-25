import { EventEmitter } from "events";
import $ from "jquery";

class UserStore extends EventEmitter {

  constructor() {
    super();
    this.user = {
      name: "",
      avatar: "http://www.riverstagetheatre.org/wp-content/uploads/2012/06/missing.png",
      affiliation: ""
    };
    this.fetch();
  }

  fetch() {
    $.get("http://private-a1f4c-djayapi.apiary-mock.com/users/1", function(data) {
      this.set("user", data);
    }.bind(this));
  }

  get(attr) {
    try {
      return this[attr];
    } catch(err) {
      console.error("UserStore: Can't find the attribute: " + attr);
    }
  }

  set(attr, value) {
    this[attr] = value;
    this.emit("change");
  }

};

export default new UserStore();
