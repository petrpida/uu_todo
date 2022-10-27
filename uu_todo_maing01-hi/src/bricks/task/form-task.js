//@@viewOn:imports
import { createVisualComponent, Utils, useLsi, ContentSizeProvider, PropTypes } from "uu5g05";
import { Form, FormText, SubmitButton } from "uu5g05-forms";
import Config from "./config/config.js";
import importLsi from "../../lsi/import-lsi";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({ margin: "24px auto" }),
  button: () => Config.Css.css({ display: "flex", margin: "16px auto" }),

};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const FormTask = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "FormTask",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const lsi = useLsi(importLsi, [FormTask.uu5Tag]);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const [elementProps] = Utils.VisualComponent.splitProps(props);

    return (
      <ContentSizeProvider>
        <Form {...elementProps} onSubmit={props.onSubmit} className={Css.main()}>
          <FormText name="name" label={lsi.label} size="xl" initialValue="" required/>
          <SubmitButton size="xl" className={Css.button()}>{lsi.addButton}</SubmitButton>
        </Form>
      </ContentSizeProvider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { FormTask };
export default FormTask;
//@@viewOff:exports
