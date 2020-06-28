import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Massage";
import {Field, reduxForm} from 'redux-form';
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

// import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.massagesPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let massagesElements = props.massagesPage.massages.map((m) => (
    <Massage massage={m.massage} key={m.id} />
  ));

  let addNewMassage = (formData) => {
    props.addNewMassage(formData.newMassageText)
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.massages}>
        {massagesElements}
        <AddMassageFormRedux onSubmit={addNewMassage} />
      </div>
    </div>
  );
};
const maxLength30 = maxLengthCreator(30)
const AddMassageForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
          <Field
              component={TextArea}
              name={'newMassageText'}
              placeholder={"Enter new massage"}
              validate={[required, maxLength30]}
          />
        <button>Send</button>
      </form>
  )
}

const AddMassageFormRedux = reduxForm({form: 'dialogAddMassageForm'})(AddMassageForm)

export default Dialogs;
