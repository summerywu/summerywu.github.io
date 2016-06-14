/**
 * Created by Jacksun on 16/3/5.
 */
myApp.controller('indexCtrl', ["$scope", function ($scope) {
    $scope.banners = [
        './images/banner1.jpg',
        './images/banner2.jpg',
        './images/banner3.jpg'
    ];

    $scope.$watch('$viewContentLoaded', function () {

        //这里设置加载动画
        var SMCtrl = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: "onLeave"
            }
        });

        new ScrollMagic.Scene({
            triggerElement: ".welcome-name",
            offset: 50
        }).addTo(SMCtrl)
            .triggerHook("onEnter")
            .setTween(TweenMax.from(".welcome-name", 1, {scale: 1.1, opacity: 0, ease: Elastic.easeInOut, delay: 0.8}));

        new ScrollMagic.Scene({
            triggerElement: ".sm-headimg",
            offset: 50
        }).addTo(SMCtrl)
            .triggerHook("onEnter")
            .setTween(TweenMax.from(".sm-headimg", 1, {scale: 1.1, opacity: 0, ease: Elastic.easeInOut, delay: 0.8}));

        new ScrollMagic.Scene({
            triggerElement: ".welcome-title",
            offset: 50
        }).addTo(SMCtrl)
            .triggerHook("onEnter")
            .setTween(TweenMax.from(".welcome-title", 1, {scale: 1.1, opacity: 0, ease: Elastic.easeInOut, delay: 0.8}));

        new ScrollMagic.Scene({
            triggerElement: ".welcome-brief",
            offset: 50
        }).addTo(SMCtrl)
            .triggerHook("onEnter")
            .setTween(TweenMax.from(".welcome-brief", 1, {scale: 1.1, opacity: 0, ease: Elastic.easeInOut, delay: 0.8}));

        new ScrollMagic.Scene({
            triggerElement: ".sm-index-case",
            offset: 50
        }).addTo(SMCtrl)
            .triggerHook("onEnter")
            .setTween(TweenMax.from(".sm-index-case", 1, {opacity: 0, ease: Elastic.easeInOut, delay: 0.8}));

        new ScrollMagic.Scene({
            triggerElement: ".sm-index-case-more-btn",
            offset: 50
        }).addTo(SMCtrl)
            .triggerHook("onEnter")
            .setTween(TweenMax.from(".sm-index-case-more-btn", 1, {scale: 1.1, opacity: 0, ease: Elastic.easeInOut, delay: 0.8}));

        new ScrollMagic.Scene({
            triggerElement: ".customer-title",
            offset: 50
        }).addTo(SMCtrl)
            .triggerHook("onEnter")
            .setTween(TweenMax.from(".customer-title", 1, {scale: 1.1, opacity: 0, ease: Elastic.easeInOut, delay: 0.8}));

        /*
         customer-sub-title
         customer-list
         */
        new ScrollMagic.Scene({
            triggerElement: ".customer-sub-title",
            offset: 50
        }).addTo(SMCtrl)
            .triggerHook("onEnter")
            .setTween(TweenMax.from(".customer-sub-title", 1, {scale: 1.1, opacity: 0, ease: Elastic.easeInOut, delay: 0.8}));

        new ScrollMagic.Scene({
            triggerElement: ".customer-item",
            offset: 50
        }).addTo(SMCtrl)
            .triggerHook("onEnter")
            .setTween(TweenMax.from(".customer-item", 1, {"margin-left": "100px", opacity: 0, ease: Elastic.easeInOut, delay: 0.8}));
    });
}]);

myApp.controller('caseCtrl', ["$scope", function ($scope) {

}]);