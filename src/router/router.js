import m from './m/m';
import p from './p/p';

export default [{
    path: '/',
    component: () =>
        import ('@/views/views'),
    children: [
        m,
        p,
    ],
    redirect: () => {
        // 获取当前屏幕的视口宽度
        let cW = document.documentElement.clientWidth;
        if (cW < 950) {
            return '/m';
        }
        return '/p';
    },
}];