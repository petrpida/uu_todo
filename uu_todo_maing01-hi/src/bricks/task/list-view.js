//@@viewOn:imports
import { createVisualComponent, Utils, PropTypes, useState, useLsi } from "uu5g05";
import Config from "./config/config.js";
import Tile from "./tile";
import { useAlertBus, Button, Box } from "uu5g05-elements";
import importLsi from "../../lsi/import-lsi";
import FormTask from "./form-task";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  button: () => Config.Css.css({ display: "block", margin: "32px auto" }),
  title: () => Config.Css.css({ margin: "16px auto", textDecoration: "underline" }),
  box: () => Config.Css.css({
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "32px auto",
    background: "lightBlue"
  }),
  boxHidden: (hidden) => Config.Css.css({
    width: "90%",
    display: hidden ? "none" : "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "32px auto",
    background: "lightYellow"
  })

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
    const lsi = useLsi(importLsi, [ListView.uu5Tag])

    const initialTaskList = props.taskDataList.data
    const [taskList, setTaskList] = useState(initialTaskList)
    const [hidden, setHidden] = useState(false)

    const { addAlert } = useAlertBus();

    function showError(error, header = '') {
      addAlert({
        header,
        message: error.message,
        priority: error,
      })
    }

    function handleDelete(event) {
      const task = event.data;

      try {
        setTaskList((prevTaskList) => prevTaskList.filter((item) => item.data.id !== task.id))
        addAlert({
          header: lsi.deleteAlertHeader,
          message: `"${task.name}"`,
          priority: "error",
          durationMs: 2000,
        });
      } catch (error) {
        ListView.logger.error("Error deleting task", error);
        showError(error, lsi.errorAlertHeader);
      }
    }

    function handleUpdate(event) {
      const task = event.data;

      try {
        setTaskList((prevTaskList) => {
          let newArray = prevTaskList.map((item) => {
            if (item.data.id === task.id) {
              item.data.completed = !item.data.completed;
            }
            return item;
          });
          return newArray
        })
      } catch (error) {
        ListView.logger.error("Error updating task", error);
        showError(error, lsi.errorAlertHeader);
      }
    }

    function handleAddTask(event) {
      let task = event.data.value;

      try {
        setTaskList((prevTaskList) => {
          return [...prevTaskList, { data: { id: Utils.String.generateId(), name: task.name, completed: false, created: new Date().toISOString() } }];
        });
        addAlert({
          header: lsi.addTaskAlert,
          message: `"${task.name}"`,
          priority: "success",
          durationMs: 2000,
        });
        console.log(task.name)
        event.data.value.name = "nic";
        console.log(task.name)

      } catch (error) {
        ListView.logger.error("Error adding task", error);
        showError(error, lsi.errorAlertHeader);
      }
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    return (
      <div {...attrs}>
        <FormTask onSubmit={handleAddTask}/>
        {taskList.filter((task) => (!task.data.completed)).length > 0 &&
          <Box className={Css.box()}>
            <h2 className={Css.title()}>{lsi.taskList}</h2>
            {taskList
              .filter((task) => (!task.data.completed))
              .map((task) => (
                <Tile
                  key={task.data.id}
                  taskDataObject={task}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              ))
            }
          </Box>}
        {taskList.filter((task) => (task.data.completed)).length > 0 &&
          <>
            <Button
              className={Css.button()}
              colorScheme="primary"
              size="xl"
              onClick={() => setHidden((hidden) => !hidden)}>{hidden ? lsi.showList : lsi.hideList}
            </Button>
            <Box className={Css.boxHidden(hidden)}>
              <h2 className={Css.title()}>{lsi.completedTasks}</h2>
              {taskList
                .filter((task) => (task.data.completed))
                .map((task) => (
                  <Tile
                    key={task.data.id}
                    taskDataObject={task}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                  />
                ))
              }
            </Box>
          </>}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListView };
export default ListView;
//@@viewOff:exports
