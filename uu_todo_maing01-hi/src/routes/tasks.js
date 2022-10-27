//@@viewOn:imports
import { createVisualComponent, Utils, useScreenSize } from "uu5g05";
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
  container: (screenSize) => {
    let maxWidth;

    switch (screenSize) {
      case "xs":
      case "s":
        maxWidth = "100%";
        break;
      case "m":
      case "l":
        maxWidth = 640;
        break;
      case "xl":
      default:
        maxWidth = 1280;
    }
    return Config.Css.css({ maxWidth: maxWidth, margin: "0px auto", paddingLeft: 8, paddingRight: 8 });
  }
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
    const [screenSize] = useScreenSize();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);

    return (
      <div {...attrs}>
        <RouteBar/>
        <ListProvider>
          {(taskDataList) => (
            <RouteController routeDataObject={taskDataList}>
              <div className={Css.container(screenSize)}>
              <ListView taskDataList={taskDataList}/>
              </div>
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
