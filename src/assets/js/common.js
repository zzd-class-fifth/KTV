import Vue from "vue"

export default {
    install(vue, options) {
        Vue.prototype.addScroll = function (options) {
            let eventTarget;//监听滑动的对象
            let currentTarget;//需要操作的目标对象
            let offsetHeight;//触发条件的误差值
            let succeed;//成功回调

            eventTarget = options.eventTarget || window;
            currentTarget = options.currentTarget || console.error('currentTarget is must');
            offsetHeight = options.offsetHeight || 30;
            succeed = options.succeed;

            function onScroll() {
                // 获取滚动距离
                let sT = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // 获取视口的高度
                let sH = document.documentElement.clientHeight || document.body.clientHeight;
                // 获取目标对象距离浏览器顶部的距离
                let oT = currentTarget.offsetTop;
                if (sT + sH - offsetHeight > oT) {
                    succeed && succeed.call();
                    eventTarget.removeEventListener('scroll', onScroll);
                }
            }
            eventTarget.addEventListener('scroll', onScroll);
        }
        Vue.prototype.removeScroll = function (options) {
            let eventTarget;//监听滑动的对象
            let succeed;//成功回调
            eventTarget = options.eventTarget || window;
            succeed = options.succeed;
            if (succeed && eventTarget) {
                eventTarget.removeEventListener('scroll', onScroll);
            }
        }
    }
}
