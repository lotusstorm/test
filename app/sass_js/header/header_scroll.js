$(document).scroll (function () {
	$(document).scrollTop () ? ($('.header').css({'height': '50px', 'position': 'fixed'}) && $('.header__sub__menu__home',).css('top', '38px') && $('.header__sub__menu__journal__a').css('top', '38px')) : ($('.header').css({'height': '110px', 'position': 'static'}) && $('.header__sub__menu__home').css('top', '68px') && $('.header__sub__menu__journal__a').css('top', '68px'));
});
