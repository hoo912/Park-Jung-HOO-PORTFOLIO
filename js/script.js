	// 유튜브영상
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	new YT.Player('player', {
		videoId: 'GQ5j2gOCyO8',
		playerVars:{
			autoplay:true, 
			loop: true, 
			playlist: 'GQ5j2gOCyO8', 
		},
		events: {
			onReady: function(event){
				event.target.mute()
			}
		}
	});
}
$(document).ready(function(){
	// 화면 사이즈 체크
	// $(window).resize(function(){
	// 	let tmp = $(window).width()
	// 	if
	// })

	// pc 메뉴 클릭 스크롤이동
	const $menu = $('header ul li'),
				$contents = $('section')
				console.log($contents)
	$menu.click(function(){
		$(this).addClass('on')
		let idx = $(this).index()
		console.log(idx)
		let $section = $contents.eq(idx)
		console.log($section)
		// 선택된 섹션의 위치정보
		let sectionDistance = $section.offset().top -110
		$('html,body').animate({
			scrollTop : sectionDistance
		})
	})




	
	// 모바일 메뉴 'on'
$(window).scroll(function(){
	$contents.each(function(){
		if($(this).offset().top <= $(window).scrollTop()+110){
			let idx = $(this).index();
			$menu.removeClass('on')
			$menu.eq(idx).addClass('on')
			$('.menu-mobile li').removeClass('active')
			$('.menu-mobile li').eq(idx).addClass('active')
		}
	})
})	










	// 모바일버튼
	let mobileBtn = $('.m-btn'),
			mobileMenu = $('.m-menu'),
			layerMask = $('.window-mask');
			console.log(mobileBtn)
	mobileBtn.click(function(e){
		e.preventDefault();
		let tmp = $(this).hasClass('on');
		if(tmp){
			$(this).removeClass('on')
			mobileMenu.removeClass('on')
			layerMask.removeClass('on')
		}else{
			$(this).addClass('on')
			mobileMenu.addClass('on')
			layerMask.addClass('on')
		}
		layerMask.click(function(){
			mobileBtn.removeClass('on')
			mobileMenu.removeClass('on')
			layerMask.removeClass('on')
		})
		$(window).resize(function(){
			let tmp = $(window).width()
			if(tmp > 850){
				mobileBtn.removeClass('on')
				mobileMenu.removeClass('on')
				layerMask.removeClass('on')
			}
		})

		
	})
	// 탭메뉴
	const tabMenu = $('.tab-menu li a'),
				tabContent = $('.tab-section')
	tabMenu.click(function(e){
		e.preventDefault();
		tabMenu.removeClass('active')
		$(this).addClass('active')
		tabContent.hide();
		let target = $(this).attr('href')
		console.log(target)
		$(target).show();
	})
	tabMenu.eq(0).trigger('click')


	// 포트폴리오 슬라이드
	new Swiper('.swiper', {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup : 3,
		loop: true,
		// autoplay: {
		//  delay:2000,
		//  disableOnInteraction:false,
		// },
		pagination: {
		el: ".sw-pagination",
		clickable:true,
		},
		navigation: {
		nextEl: ".next-btn",
		prevEl: ".prev-btn",
		},
		breakpoints:{
			0: {
				slidesPerView: 1,
				slidesPerGroup : 1,
			},
			740: {
				slidesPerView: 1,
				slidesPerGroup : 1,
			},
			850: {
				slidesPerView: 2,
				slidesPerGroup : 2,
			},
			1150: {
				slidesPerView: 3,
				slidesPerGroup : 3
			}
		}
		


	
	});

	// 모달창
	$('.video-thum').click(function(){
		$('.modal').addClass('show')
		$('.modal').append(`
		<div class="item_box">
		<iframe src="https://www.youtube.com/embed/${$(this).data("video")}?rel=0&playsinline=1&autoplay=1" frameborder="0" allowfullscreen></iframe>
		<div class="desc">
			<h3 class="video-type">${$(this).data('type')}</h3>
			<div class="modal-info">
				<p class="video-tilte"><span>제목 :</span> <span> ${$(this).data('title')}</span></p>
				<p class="video-program"><span>사용 프로그램 :</span><span><img src="images/${$(this).data('program')}.png" alt="${$(this).data('program')}">
				<img src="images/${$(this).data('program2')}.png" alt="${$(this).data('program2')}">
				</span></p>
				<p class="period"><span>제작기간 :</span><span>${$(this).data('day')}</span></p>
				<p class="period"><span>기여도 :</span><span>${$(this).data('cont')}</span></p>
			</div>
			<p class="explan">${$(this).data('explan')}</p>
		</div>
	</div>`)
	})
	$('.modal .dim').click(function(){
		$('.modal .item_box').remove()
		$('.modal').removeClass('show')
	})
	$('.video-thum img').mouseover(function(){
		$(this).attr('src',$(this).data('animated'))
	})
	$('.video-thum img').mouseout(function(){
		$(this).attr('src',$(this).data('static'))
	})








})