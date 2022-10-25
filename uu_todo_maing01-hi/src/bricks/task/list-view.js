//@@viewOn:imports
import { createVisualComponent, Utils, PropTypes, useState, useEffect } from "uu5g05";
import Config from "./config/config.js";
import Tile from "./tile";
import { useAlertBus } from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ListView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    taskDataList: PropTypes.object.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const initialJokeList = props.taskDataList.data
    const [taskList, setTaskList] = useState(initialJokeList)

    const { addAlert } = useAlertBus();

    function showError (error, header = "") {
      addAlert ({
        header,
        message: error.message,
        priority: error,
      })
    }

    function handleDelete(event) {
      const task = event.data;
      setTaskList ((prevTaskList) => prevTaskList.filter((item) => item.id !== task.id))

      try {
        addAlert({
          message: `task id:${task.id} has been deleted.`,
          priority: "success",
          durationMs: 3000,
        });
      } catch (error) {
        ListView.logger.error("Error deleting task", error);
        showError(error, "Joke delete failed!");
      }
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    //const taskListShow = taskList.filter((item) => item !== undefined);
    //console.log(taskListShow)

    return (
      <div {...attrs}>
        {taskList.map((task) => (
          <Tile
            key={task.data.id}
            taskDataObject={task}
            onDelete={handleDelete}
          />
        ))}

      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListView };
export default ListView;
//@@viewOff:exports
