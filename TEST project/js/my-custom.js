"use strict";

$(document).ready(function() {
    class View {
        constructor () {
            this.menu = $(".menu");
            this.menuBtns = $(".menu a");
            this.deviceMenuBtn = $("#device-menu-btn");
            this.moreLinkBtn = $(".more-link-button");
            this.seoText = $(".content");
            this.hiddenText = $("#more-text");
            this.seoTextLink = $(".more-info-button");
        }
    };

    class Model {
        constructor () {
            this.moreBtnText = ["More", "Less"];
        }
    };

    class Controller {
        constructor (view, model) {
            this.view = view;
            this.model = model;
            this.slideIndex = 0;
        }

        bindEvents() {
            this.view.moreLinkBtn.click(() => {
                event.preventDefault();
                if (this.view.moreLinkBtn.html() === this.model.moreBtnText[0]) {
                    this.view.seoText.stop();
                    this.view.moreLinkBtn.html(this.model.moreBtnText[1]);
                    this.view.hiddenText.slideDown();
                } else {
                    this.view.seoText.stop();
                    this.view.moreLinkBtn.html(this.model.moreBtnText[0]);
                    this.view.hiddenText.slideUp();
                }
            });

            this.view.menuBtns.each((index, element) => {
                $(element).click(() => {
                    this.removeActive();
                    $(element).addClass('active');
                })
            });

            this.view.deviceMenuBtn.click(() => {
                this.view.menu.stop();
                this.view.menu.slideToggle(2000);
            });
        }

        removeActive() {
            this.view.menuBtns.each((index, element) => {
                $(element).removeClass('active');
            });
        }

        init() {
            this.bindEvents();
        }

    };

    var appView = new View();
    var appModel = new Model();
    var appController = new Controller(appView, appModel);
    appController.init();
});