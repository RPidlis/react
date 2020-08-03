import profileReducer, { addPost, deletePost } from './profile-reducer'

let state = {
    posts: [
        {id: "1", massage: "hi,how are  you", likesCount: 12},
        {id: "2", massage: "it's my first post", likesCount: 11},
    ]
};

it('length of post shold be increment', () => {
    // 1. test data
    let action = addPost('hiiiiiii');

    // 2. action
    let newState = profileReducer(state,action);

    // 3.expectation
    expect(newState.posts.length).toBe(3)
});

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state,action);

//    3.expectation
    expect(newState.posts.length).toBe(1);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
    //1. test data
    let action = deletePost(20);

    //2. action
    let newState = profileReducer(state,action);

//    3.expectation
    expect(newState.posts.length).toBe(2);
});
