import VueRouter from 'vue-router'
import InfoAPI from '../components/Informer/InfoAPI/InfoAPI'
import InfoAPP from '../components/Informer/InfoAPP/InfoAPP'
import Title from '../components/Informer/Title/Title'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/api',
            name: 'api-description',
            component: InfoAPI
        },
        {
            path: '/app',
            name: 'app-description',
            component: InfoAPP
        },
        {
            path: '*',
            component: Title
        }
    ]
})
