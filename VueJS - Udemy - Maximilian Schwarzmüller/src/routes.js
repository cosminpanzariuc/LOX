import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';


export const routes = [
    {path: '', component: Home},
    // {path: '/user/:id', component: User},
    {path: '/user', component: User, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail, beforeEnter: (to, from, next) =>{
            console.log('inside route setup');
            next();
        }},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]},
    {path: '/redirect-me', 'redirect': '/user'},
    {path: '*', 'redirect': '/user'}
];
