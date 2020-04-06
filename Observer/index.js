import users from './initState/users.js';
import State from './lib/State.js';
import List from './components/List.js';
import Form from './components/Form.js';
import Count from './components/Count.js';

const appState = new State();
const nameList = new List();
const userForm = new Form(appState);
const userCount = new Count();

appState.update({ users });

appState.addObserver(nameList);
appState.addObserver(userCount);

nameList.render(appState.get(), 'user-list-container');
userForm.render('add-user-container');
userCount.render(appState.get(), 'user-count-container');