//@@viewOn:imports
import { createVisualComponent, Utils, PropTypes, useLsi, ContentSizeProvider, useContentSize } from "uu5g05";
import { Box, Button } from "uu5g05-elements";
import Config from "./config/config.js";
import importLsi from "../../lsi/import-lsi";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({ width: "95%", margin: "16px auto"}),
  box: (contentSize) => Config.Css.css({
    padding: "16px",
    display: "flex",
    flexDirection: contentSize === "s" || contentSize === "xs" ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8
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
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onDelete: () => {},
    onUpdate: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const lsi = useLsi(importLsi, [Tile.uu5Tag])
    const contentSize = useContentSize()

    function handleDelete(event) {
      const task = props.data;
      props.onDelete(new Utils.Event(task, event));
    }

    function handleUpdate (event) {
      const task = props.data;
      props.onUpdate(new Utils.Event(task, event));
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const [elementProps] = Utils.VisualComponent.splitProps(props);
    const task = props.data.data

    return (
      <ContentSizeProvider>
        <div className={Css.main()}>
        <Box {...elementProps} className={Css.box(contentSize)}>
          {task.name}
          <div>
          <Button
            icon={task.completed ? "mdi-undo" : "mdi-check"}
            size="xl"
            onClick={handleUpdate}
            significance="subdued"
            tooltip={task.completed ? lsi.completedTask : lsi.taskToComplete}
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
      </ContentSizeProvider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Tile };
export default Tile;
//@@viewOff:exports
