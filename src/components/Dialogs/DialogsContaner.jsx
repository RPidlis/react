import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addNewMassage} from "../../redux/dialogs-reducer";
import { compose } from "redux";
import { WithAuthRedirect } from "../../HOC/withAuthRedirect";
import { withRouter } from "react-router-dom";


let mapStateToProps = (state) => {
    return {
        massagesPage: state.massagesPage,
    };
}

export default compose (
    connect(mapStateToProps,{addNewMassage}),
    withRouter,
    WithAuthRedirect
)
(Dialogs);