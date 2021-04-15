// 电脑端起始路由文件

import info from './info/info';
import me from './me/me';

export default {
    path: 'p',
    component: () =>
        import ('@/views/p/p.vue'),
    children: [
        info,
        me,
    ],
    redirect: '/p/info/main',
}