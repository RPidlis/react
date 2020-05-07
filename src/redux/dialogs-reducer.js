
const UPDATE_MASSAGE_TEXT = "UPDATE-MASSAGE-TEXT";
const ADD_MASSAGE = "ADD-MASSAGE";

let initialState = {
    dialogs: [
        { id: "1", name: "Dimych" },
        { id: "2", name: "Andey" },
        { id: "3", name: "Sveta" },
        { id: "4", name: "Sasha" },
        { id: "5", name: "Viktor" },
        { id: "6", name: "Valera" },
    ],
    massages: [
        { id: "1", massage: "hi" },
        { id: "2", massage: "How is it-Kamasutra" },
        { id: "3", massage: "TOtoot" },
        { id: "4", massage: "Yoyooyoy" },
        { id: "5", massage: "YO" },
        { id: "6", massage: "ot" },
    ],
    newMassageText: ' ',
}

export const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type){
        case ADD_MASSAGE: {
            stateCopy = {
                ...state,
                massages: [...state.massages, {id: "6", massage: state.newMassageText}],
                newMassageText: ''
            }
            return stateCopy;
        }
        case UPDATE_MASSAGE_TEXT: {
             stateCopy = {
                 ...state,
                 newMassageText: action.newText
             };
            return stateCopy;
        }
        default:
            return state;

    }

};

export const addNewMassage = () => ({ type: ADD_MASSAGE });

export const updateMassageText = (text) => ({
  type: UPDATE_MASSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
