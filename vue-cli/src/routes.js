import Home from './components/Home'
import Header from './components/Header'

const User = resolve => {
    require.ensure(['./components/user/User'], () => {
        resolve(require('./components/user/User'));
    }, 'user')
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart'], () => {
        resolve(require('./components/user/UserStart'));
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit'], () => {
        resolve(require('./components/user/UserEdit'));
    })
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail'], () => {
        resolve(require('./components/user/UserDetail'));
    })
}


export const routes = [
    {
        path: '', name: 'home', components: {
            default: Home,
            'header-top': Header,
        }
    },
    {
        path: '/user', components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            {path: '', component: UserStart},
            {
                path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    console.log('inside');
                    next();
                }
            },
            {path: ':id/edit', component: UserEdit, name: 'userEdit'}
        ]
    },
    {path: '*', redirect: '/user'}

]

