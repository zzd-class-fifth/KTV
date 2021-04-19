import modelShow from './modelShow/modelShow.js';
import modelAdvanced from './modelAdvanced/modelAdvanced.js';
import modelDetail from './modelDetail/modelDetail.js';
export default {
    path: 'model',
    redirect: '/p/info/model/modelShow',
    name: 'model',
    component: () =>
        import('@/views/p/info/model/model.vue'),
    children: [
        modelShow,
        modelAdvanced,
        modelDetail,
    ],
}