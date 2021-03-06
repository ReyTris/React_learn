import {rerenderEntireTree} from '../render'

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: "It's my first message", likesCount: 17},
            {id: 3, message: "adsf", likesCount: 17},
            {id: 4, message: "It's mbsdfb", likesCount: 17},
        ],
        newPostText: 'it-kamasutra.com'
    },

    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Fuck'},
            {id: 4, message: 'Fuck'},
            {id: 5, message: 'Fuck'},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Viktor'},
            {id: 5, name: 'Sasha'},
            {id: 6, name: 'Valera'},
        ],
    },
}

export let addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state