import about from './about/about';
import contact from './contact/contact';
import recruit from './recruit/recruit';

export default {
    path: 'me',
    component: () => import('@/views/p/me/me.vue'),
    children: [
        about,
        contact,
        recruit,
    ],
}