//@@viewOn:imports
import { createComponent, useDataList } from "uu5g05";
import Config from "./config/config.js";
import Calls from "calls";
//@@viewOff:imports

//@@viewOn:constants
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
