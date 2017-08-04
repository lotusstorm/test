$(document).scroll (function () {
	$(document).scrollTop () ? ($('.header').addClass('header_scroll') && $('.header__sub__menu__home',).addClass('menu_scroll') && $('.header__sub__menu__journal__a').addClass('menu_scroll')) : ($('.header').removeClass('header_scroll') && $('.header__sub__menu__home').removeClass('menu_scroll') && $('.header__sub__menu__journal__a').removeClass('menu_scroll'));
});