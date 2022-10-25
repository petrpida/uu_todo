//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import ListProvider from "../bricks/task/list-provider";
import { RouteController } from "uu_plus4u5g02-app";
import ListView from "../bricks/task/list-view";
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

let Tasks = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Tasks",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    return (
      <div {...attrs}>
        <RouteBar />
        <ListProvider>
          {(taskDataList) => (
            <RouteController routeDataObject={taskDataList}>
            <ListView taskDataList={taskDataList}/>
            </RouteController>
          )}
        </ListProvider>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Tasks };
export default Tasks;
//@@viewOff:exports
