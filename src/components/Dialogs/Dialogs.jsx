import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Massage";

const Dialogs = (props) => {

  let newMassageText = props.massagesPage.newMassageText;

  let dialogsElements = props.massagesPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let massagesElements = props.massagesPage.massages.map((m) => (
    <Massage massage={m.massage} key={m.id} />
  ));
 let newMassageElement = React.createRef();
  let addMassage = () => props.addNewMassage();

  let onChangeMassageText = () => {
    let massage = newMassageElement.current.value;
    props.updateMassageText(massage);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.massages}>
        {massagesElements}
        <div>
          <textarea
                value={newMassageText}
                onChange={onChangeMassageText}
                ref={newMassageElement}
                placeholder='Enter new massage'

          />
          <button onClick={ addMassage }>Add Massage</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
