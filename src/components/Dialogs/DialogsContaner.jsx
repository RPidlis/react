import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addNewMassage, updateMassageText} from "../../redux/dialogs-reducer";


let mapStateToProps = (state) => {
    return {
        massagesPage: state.massagesPage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMassageText: (massage) => {
            dispatch(updateMassageText(massage))
        },
        addNewMassage: () => {
            dispatch(addNewMassage())
        }
    };
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
