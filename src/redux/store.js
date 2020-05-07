import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", massage: "hi,how are  you", likesCount: 12 },
        { id: "2", massage: "it's my first post", likesCount: 11 },
      ],
      newPostText: "it-kamasutra",
    },
    massagesPage: {
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
      newMassageText: "",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.massagesPage = dialogsReducer(this._state.massagesPage, action);
    this._callSubscriber(this._state);
   
  },
};





window.store = store;
export default store;
