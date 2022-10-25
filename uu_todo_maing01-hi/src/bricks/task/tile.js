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
  main: () => Config.Css.css({ width: "60vw", margin: "48px auto"}),
  box: () => Config.Css.css({ padding: "24px" }),
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
          <Button
            icon="mdi-delete"
            onClick={handleDelete}
            significance="subdued"
            tooltip={lsi.deleteTip}
          />
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
