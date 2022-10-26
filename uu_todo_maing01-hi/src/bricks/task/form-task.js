//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import { Form, FormText, SubmitButton, CancelButton } from "uu5g05-forms";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({width: "90%", margin: "24px auto"}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const FormTask = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "FormTask",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    return (
      <div {...attrs}>
        <Form onSubmit={props.onSubmit}>
          <FormText name="name" label="New task" required />
          <div style={{ display: "flex", gap: 8, justifyContent: "center", paddingTop: 8 }}>
            <SubmitButton>Add task</SubmitButton>
          </div>
        </Form>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { FormTask };
export default FormTask;
//@@viewOff:exports
