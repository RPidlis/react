import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addNewMassage, updateMassageText} from "../../redux/dialogs-reducer";
import { compose } from "redux";
import { WithAuthRedirect } from "../../HOC/withAuthRedirect";
import { withRouter } from "react-router-dom";


let mapStateToProps = (state) => {
    return {
        massagesPage: state.massagesPage,
    };
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateMassageText: (massage) => {
//             dispatch(updateMassageText(massage))
//         },
//         addNewMassage: () => {
//             dispatch(addNewMassage())
//         }
//     };
// }

// const DialogsContainer = (Dialogs);
//
// export default connect(mapStateToProps,{updateMassageText, addNewMassage}) (DialogsContainer);

export default compose (
    connect(mapStateToProps,{updateMassageText, addNewMassage}),
    withRouter,
    WithAuthRedirect
)
(Dialogs);