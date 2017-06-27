$(document).scroll (function () {
	$(document).scrollTop () ? ($('.header').css({'height': '50px', 'position': 'fixed'}) && $('.header__sub__menu__home',).css('top', '38px') && $('.header__sub__menu__journal__a').css('top', '38px')) : ($('.header').css({'height': '110px', 'position': 'static'}) && $('.header__sub__menu__home').css('top', '68px') && $('.header__sub__menu__journal__a').css('top', '68px'));
});

var slideNow = 1;
var slideCount = $('#block__for__slider__wrapper').children().length;
var slideInterval = 6000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
	var switchInterval = setInterval(nextSlide, slideInterval);
	$('#block__for__slider__viewport').hover(function() {
			clearInterval(switchInterval);
	}, function() {
			switchInterval = setInterval(nextSlide, slideInterval);
	});

	$('#next-btn').click(function() {
			nextSlide();
	});

	$('#prev-btn').click(function() {
			prevSlide();
	});
});


function nextSlide() {
	if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
		$('#block__for__slider__wrapper').css('transform', 'translate(0, 0)');
		slideNow = 1;
	} else {
		translateWidth = -$('#block__for__slider__viewport').width() * (slideNow);
		$('#block__for__slider__wrapper').css({
			'transform': 'translate(' + translateWidth + 'px, 0)',
		});
		slideNow++;
	}
}

function prevSlide() {
	if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
		translateWidth = -$('#block__for__slider__viewport').width() * (slideCount - 1);
		$('#block__for__slider__wrapper').css({
			'transform': 'translate(' + translateWidth + 'px, 0)',
		});
		slideNow = slideCount;
	} else {
		translateWidth = -$('#block__for__slider__viewport').width() * (slideNow - 2);
		$('#block__for__slider__wrapper').css({
			'transform': 'translate(' + translateWidth + 'px, 0)',
		});
		slideNow--;
	}
}