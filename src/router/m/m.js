// 手机端起始路由文件

import info from './info/info';
import me from './me/me';

export default {
    path: 'm',
    component: () =>
        import ('@/views/m/m'),
    children: [
        info,
        me,
    ]
}