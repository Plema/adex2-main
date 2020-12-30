$(document).ready(function () {

    //$('.responsiveTabsDemo').responsiveTabs({
    //    startCollapsed: 'accordion'
    //});



    var tabNavs = document.querySelectorAll(".nav-tab");
    var tabPanes = document.querySelectorAll(".tab-pane");
    var tabTable = document.querySelectorAll(".table");
    var tabTitle = document.querySelectorAll(".col_title");

    for (var i = 0; i < tabNavs.length; i++) {

        tabNavs[i].addEventListener('mouseover', function(e){
            e.preventDefault();
            var activeTabAttr = e.target.getAttribute("data-tab");

            for (var j = 0; j < tabNavs.length; j++) {
                var contentAttr = tabPanes[j].getAttribute("data-tab-content");

                if (activeTabAttr === contentAttr) {
                    tabNavs[j].classList.add("active");
                    tabPanes[j].classList.add("active");
                    tabTable[j].classList.add("active");
                    tabTable[j].classList.add("fadeInRight");
                    tabTitle[j].classList.add("active");

                } else {
                    tabNavs[j].classList.remove("active");
                    tabPanes[j].classList.remove("active");
                    tabTable[j].classList.remove("active");
                    tabTable[j].classList.remove("fadeInRight");
                    tabTitle[j].classList.remove("active");

                }
            };
        });
    }
    for (var i = 0; i < tabNavs.length; i++) {

        tabNavs[i].addEventListener('click', function(e){
            e.preventDefault();
            var activeTabAttr = e.target.getAttribute("data-tab");

            for (var j = 0; j < tabNavs.length; j++) {
                var contentAttr = tabPanes[j].getAttribute("data-tab-content");

                if (activeTabAttr === contentAttr) {
                    tabNavs[j].classList.add("active");
                    tabPanes[j].classList.add("active");
                    tabTable[j].classList.add("active");
                    tabTitle[j].classList.add("active");

                } else {
                    tabNavs[j].classList.remove("active");
                    tabPanes[j].classList.remove("active");
                    tabTable[j].classList.remove("active");
                    tabTitle[j].classList.remove("active");

                }
            };
        });
    }

});/**
 * Created by Nafta on 23.11.2020.
 */
