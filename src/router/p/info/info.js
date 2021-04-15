import environment from './environment/environment';
import main from './main/main';
import model from './model/model';
import news from './news/news';


export default {
    path: 'info',
    component: () =>
        import ('@/views/p/info/info'),
    children: [
        environment,
        main,
        model,
        news,
    ]
}