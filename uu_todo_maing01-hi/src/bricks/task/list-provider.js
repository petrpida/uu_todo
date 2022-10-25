//@@viewOn:imports
import { createComponent, useDataList, useEffect, useState } from "uu5g05";
import Config from "./config/config.js";
import Calls from "calls";
//@@viewOff:imports

//@@viewOn:constants
let initialTaskList = [
  {
    "id": "1",
    "name": "Create new TODO list",
    "completed": false,
    "created": "2022-10-25T07:00:00Z"
  },
  {
    "id": "2",
    "name": "Implement all needed components",
    "completed": false,
    "created": "2022-10-25T07:12:00Z"
  },
  {
    "id": "3",
    "name": "Copy command results into some in-memory storage",
    "completed": false,
    "created": "2022-10-25T08:32:00Z"
  },
  {
    "id": "4",
    "name": "Do a nice layout of the application",
    "completed": false,
    "created": "2022-10-25T10:45:00Z"
  },
  {
    "id": "5",
    "name": "Use uu5 components that will do the job",
    "completed": true,
    "created": "2022-10-25T12:58:00Z"
  }
]
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const taskDataList = useDataList({
      handlerMap: {
        load: handleLoad,
        loadNext: handleLoadNext,
      },
      pageSize: 3,
    })

    function handleLoad(dtoIn) {
      return Calls.Task.list(dtoIn);
    }

    function handleLoadNext(dtoIn) {
      return Calls.Task.list(dtoIn);
    }
    // function remove(task) {
    //   setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== task.id));
    // }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    //const value = { taskList, remove }
      return typeof props.children === "function" ? props.children(taskDataList) : props.children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
