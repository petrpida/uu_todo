//@@viewOn:imports
import { createVisualComponent, Utils, PropTypes, useLsi } from "uu5g05";
import { Box, Button } from "uu5g05-elements";
import Config from "./config/config.js";
import importLsi from "../../lsi/import-lsi";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({ width: "90%", margin: "24px auto"}),
  box: () => Config.Css.css({
    padding: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Tile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Tile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    taskDataObject: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    taskDataObject: {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const lsi = useLsi(importLsi, [Tile.uu5Tag])

    function handleDelete(event) {
      const task = props.taskDataObject;
      props.onDelete(new Utils.Event(task.data, event));
    }

    function handleUpdate (event) {
      const task = props.taskDataObject;
      props.onUpdate(new Utils.Event(task.data, event));
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const task = props.taskDataObject

    return (
      <div {...attrs}>
        <Box className={Css.box()}>
          {task.data.name}
          <div>
          <Button
            icon={task.data.completed ? "mdi-undo" : "mdi-check"}
            size="xl"
            onClick={handleUpdate}
            significance="subdued"
            tooltip={task.data.completed ? lsi.completedTask : lsi.taskToComplete}
          />
          <Button
            icon="mdi-delete"
            size="xl"
            onClick={handleDelete}
            significance="subdued"
            tooltip={lsi.deleteTip}
          />
          </div>
        </Box>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Tile };
export default Tile;
//@@viewOff:exports
