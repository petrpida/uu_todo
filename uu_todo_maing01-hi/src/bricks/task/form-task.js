//@@viewOn:imports
import { createVisualComponent, Utils, useLsi } from "uu5g05";
import { Form, FormText, SubmitButton } from "uu5g05-forms";
import Config from "./config/config.js";
import importLsi from "../../lsi/import-lsi";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({width: "45%", margin: "24px auto"}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const FormTask = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "FormTask",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const lsi = useLsi(importLsi, [FormTask.uu5Tag]);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    return (
      <div {...attrs}>
        <Form onSubmit={props.onSubmit}>
          <FormText name="name" label={lsi.label} size="xl" initialValue="" required />
          <div style={{ display: "flex", gap: 8, justifyContent: "center", paddingTop: 8 }}>
            <SubmitButton size="xl">{lsi.addButton}</SubmitButton>
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
