"use strict";
const TodoMainAbl = require("../../abl/todo-main-abl.js");

class TodoMainController {
  init(ucEnv) {
    return TodoMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return TodoMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return TodoMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new TodoMainController();
