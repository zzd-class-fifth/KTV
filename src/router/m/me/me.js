import about from './about/about';
import contact from './contact/contact';
import recruit from './recruit/recruit';

export default {
    path: 'me',
    children: [
        about,
        contact,
        recruit,
    ]
}