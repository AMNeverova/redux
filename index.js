import './src/style/style.scss';
import store from './src/redux/store';

class UsersApp {
    constructor(store) {
        this.dispatch = store.dispatch;
        this.firstLoadRender();
        this.refreshButton = document.querySelector('.refresh-button');
        this.refreshButton.addEventListener('click', () => this.dispatch({type: 'REFRESH_USERS'}))
        this.usersArea = document.querySelector('.users');
    }

    firstLoadRender() {
        this.dispatch({ type: 'USERS_REQUESTED' })
    }

    refresh() {
        this.dispatch({ type: 'REFRESH_USERS' })
    }

    render() {
        this.usersRendered = store.getState().users.usersRendered;
        this.usersArea.innerHTML = null;
        this.usersRendered.forEach(user => {
            let userNode = this.createUserNode(user);
            this.usersArea.appendChild(userNode);
        })
    }

    createUserNode(user) {
        let userNode = document.createElement('div');
        userNode.classList.add('user');
        let photoNode = this.createPhotoNode(user.avatar_url);
        let userInfoNode = this.createUserInfoNode(user);
        let arrowNode = this.createArrowNode();
        let trashbinNode = this.createTrashbinNode(user.id, user.trashbinIsShown);
        userNode.appendChild(photoNode);
        userNode.appendChild(userInfoNode);
        userNode.appendChild(arrowNode);
        userNode.appendChild(trashbinNode);
        arrowNode.addEventListener('mouseenter', () => this.dispatch({type: 'TOGGLE_TRASHBIN', id: user.id}))
        trashbinNode.addEventListener('mouseleave', () => this.dispatch({type: 'TOGGLE_TRASHBIN', id: user.id}));
        trashbinNode.addEventListener('click', () => this.dispatch({type: 'DELETE_USER', id: user.id}));

        return userNode;
    }

    createPhotoNode(url) {
        let photoNode = document.createElement('div');
        photoNode.classList.add('photo');
        let photoFrame = document.createElement('div');
        photoFrame.classList.add('photo__frame');
        photoFrame.style.backgroundImage = `url('${url}')`;
        photoNode.append(photoFrame);
        return photoNode;
    }

    createUserInfoNode(user) {
        let userInfoNode = document.createElement('div');
        userInfoNode.classList.add('user-info');
        let userNameNode = document.createElement('div');
        userNameNode.classList.add('username');
        userNameNode.innerHTML = user.name;
        let userLocationNode = document.createElement('div');
        userLocationNode.classList.add('user-location');
        userLocationNode.innerHTML = user.location;
        let userLoginNode = document.createElement('div');
        userLoginNode.classList.add('user-login');
        userLoginNode.innerHTML = `@${user.login}`;
        userInfoNode.appendChild(userNameNode);
        userInfoNode.appendChild(userLocationNode);
        userInfoNode.appendChild(userLoginNode);
        return userInfoNode;
    }

    createArrowNode() {
        let arrowNode = document.createElement('div');
        arrowNode.classList.add('arrow-block');
        let arrowSignNode = document.createElement('p');
        arrowSignNode.classList.add('arrow-sign');
        arrowNode.appendChild(arrowSignNode);
        return arrowNode;
    }

    createTrashbinNode(id, state) {
        let trashbinNode = document.createElement('div');
        state? trashbinNode.classList.add('trashbin', 'show') :
        trashbinNode.classList.add('trashbin');
        trashbinNode.setAttribute('data-id', id)
        return trashbinNode;
    }
}

let app = new usersApp(store);
store.subscribe(app.render.bind(app));
