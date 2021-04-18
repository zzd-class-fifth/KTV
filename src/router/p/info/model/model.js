import modelShow from './modelShow/modelShow.js';
export default {
    path: 'model',
    redirect: '/p/info/model/modelShow',
    component: () =>
        import('@/views/p/info/model/model.vue'),
    children: [
        modelShow,
    ],
}