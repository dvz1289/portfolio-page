$(function(){

	var $win = $(window),
			win_w = $win.width();

	var swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
			dynamicBullets: true,
    },
  });

	function pieChart(){
		var skill = document.querySelector('#skill');
		var skill_check = window.getComputedStyle(skill).display;

		function setPieChart(){
			$('.chart').easyPieChart({
				barColor: '#3f48be',
				trackColor: '#fff',
				scaleColor: '#444',
				lineCap: 'round',
				lineWidth: 12,
				size: 130,
				onStart: $.noop,
				onStop: $.noop,
				animate: 1000,
			});
		}
		
		$('#skill').each(function(){
			if(skill_check == 'block'){
				setPieChart();
				$('#skill .chart .percent').css({'opacity':'1'});
				$('#skill .txt').css({'opacity':'1'});
			}
		});
	}

  var i = 0;

  // 브라우저 시작시 color 강제실행
	$('#main_bg').addClass('color0');
	$('#gnb li').first().addClass('on');
	$('#nav li').first().addClass('on');

  function wheel(e, delta){
		$('html, body').off('mousewheel DOMMousescroll', wheel);
		
		if(delta<0){
			// 메인 이미지 변경
			if(i<4){
				i++;

				//main_img
				$('.main_img>ul>li').eq(i-1).stop().animate({
					'top':'-250%',
					'left':'-50%',
					'transform':'rotate(-150deg) scale(0.5)',
					'opacity':'0'
				},700, 'easeInCubic', function(){
					$('.main_img>ul>li').eq(i).css({'top':'120%','transform':'rotate(150deg) scale(0.5)','left':'50%'}).stop().animate({
						'top':'0',
						'left':'0',
						'transform':'rotate(0deg) scale(1)',
						'opacity':'1'
					},400,'easeOutCubic', function(){
						$('#gnb li').eq(i-1).removeClass('on');
						$('#gnb li').eq(i).addClass('on');
						$('#nav li').eq(i-1).removeClass('on');
						$('#nav li').eq(i).addClass('on');
						pieChart();
					});
					setTimeout(function(){
						$('html, body').on('mousewheel DOMMousescroll', wheel);
					},400);
				});
				
				//main_title
				$('.main_title>ul>li').eq(i-1).find('.wrap').css('transform-origin','bottom center').stop().animate({
					'transform':'scaleY(1.5)',
					'opacity':'0',
					'z-index':'995'
				},400, 'easeInCubic', function(){
					$('.main_title>ul>li').eq(i).find('.wrap').css({'opacity':'0', 'display':'block', 'transform-origin':'top center', 'transform':'scaleY(1.5)', 'z-index':'999'}).stop().animate({
							'transform':'scaleY(1)',
							'opacity':'1'
						},400, 'easeOutCubic');
				});
				
				//sub_title
				$('.sub_title>ul>li').eq(i-1).css({'transform-origin':'bottom center','display':'block'}).stop().animate({
					'transform':'scaleY(1.2)',
					'top':'-20px',
					'opacity':'0'
				},700, 'easeInCubic', function(){
					$('.sub_title>ul>li').eq(i-1).css('display','none');
					$('.sub_title>ul>li').eq(i).css({'display':'block', 'opacity':'0', 'top':'20px'}).stop().animate({
						'top':'0',
						'opacity':'1',
						'transform':'scaleY(1)'
					},400);
				});
				
				//sub_title_txt
				$('.sub_title_txt>ul>li').eq(i-1).stop().animate({
					'opacity':'0',
					'right':'-100%'
				}, 500, 'easeInCubic', function(){
					$('.sub_title_txt>ul>li').eq(i).css({'right':'-100%'}).stop().animate({
						'opacity':'1',
						'right':'0'
					}, 500, 'easeOutCubic');
				});
				
				//main_bg
				if(i==0){
					$('#main_bg').removeClass();
					$('#main_bg').addClass('color'+i);
				}else if(i==1){
					$('#main_bg').removeClass();
					$('#main_bg').addClass('color'+i);
				}else if(i==2){
					$('#main_bg').removeClass();
					$('#main_bg').addClass('color'+i);
				}else if(i==3){
					$('#main_bg').removeClass();
					$('#main_bg').addClass('color'+i);
				}else{
					$('#main_bg').removeClass();
					$('#main_bg').addClass('color'+i);
				}
			}else{
				$('html, body').on('mousewheel DOMMousescroll', wheel);
			}
		}else if(delta>0){
			// 메인 이미지 변경
			if(i>0){
				i--;
			
				//main_img
				$('.main_img>ul>li').eq(i+1).stop().animate({
					'top':'120%',
					'left':'50%',
					'transform':'rotate(150deg) scale(0.5)',
					'opacity':'0'
				},700, 'easeInCubic', function(){
					$('.main_img>ul>li').eq(i).css({'top':'-150%','transform':'rotate(-150deg) scale(0.5)','left':'-50%'}).stop().animate({
						'top':'0',
						'left':'0',
						'transform':'rotate(0deg) scale(1)',
						'opacity':'1'
					},400,'easeOutCubic', function(){
						$('#gnb li').eq(i+1).removeClass('on');
						$('#gnb li').eq(i).addClass('on');
						$('#nav li').eq(i+1).removeClass('on');
						$('#nav li').eq(i).addClass('on');
						pieChart();
					});
					setTimeout(function(){
						$('html, body').on('mousewheel DOMMousescroll', wheel);
					},400);
				});
				
				//main_title
				$('.main_title>ul>li').eq(i+1).find('.wrap').css('transform-origin','top center').stop().animate({
					'transform':'scaleY(1.5)',
					'opacity':'0',
					'z-index':'995'
				},400, 'easeInCubic', function(){
					$('.main_title>ul>li').eq(i).find('.wrap').css({'opacity':'0', 'display':'block', 'transform-origin':'bottom center', 'z-index':'999'}).stop().animate({
							'transform':'scaleY(1)',
							'opacity':'1'
						},400, 'easeOutCubic');
				});
				
				//sub_title

				$('.sub_title>ul>li').eq(i+1).css({'transform-origin':'top center','display':'block'}).stop().animate({
					'transform':'scaleY(1.2)',
					'top':'20px',
					'opacity':'0'
				},700, 'easeInCubic', function(){
					$('.sub_title>ul>li').eq(i+1).css('display','none');
					$('.sub_title>ul>li').eq(i).css({'display':'block', 'opacity':'0', 'top':'-20px'}).stop().animate({
						'top':'0',
						'opacity':'1',
						'transform':'scaleY(1)'
					},400);
				});
				
				//sub_title_txt
				$('.sub_title_txt>ul>li').eq(i+1).stop().animate({
					'opacity':'0',
					'right':'-100%'
				}, 500, 'easeInCubic', function(){
					$('.sub_title_txt>ul>li').eq(i).css({'right':'-100%'}).stop().animate({
						'opacity':'1',
						'right':'0'
					}, 500, 'easeOutCubic');
				});
				
				//main_bg
				if(i==-1){
					$('#main_bg').removeClass();
					$('#main_bg').addClass('color'+i);
				}else if(i==0){
					$('#main_bg').removeClass();
					$('#main_bg').addClass('color'+i);
				}else if(i==1){
					$('#main_bg').removeClass();
					$('#main_bg').addClass('color'+i);
				}else if(i==2){
					$('#main_bg').removeClass();
					$('#main_bg').addClass('color'+i);
				}else if(i==3){
					$('#main_bg').removeClass();
					$('#main_bg').addClass('color'+i);
				}
			}else{
				$('html, body').on('mousewheel DOMMousescroll', wheel);
			}
		}
	}

	$('html, body').on('mousewheel DOMMousescroll', wheel);
	$('.nav_wrap>ul>li').on('click', nav_click);
	$('#gnb li').on('click', nav_click);

	function nav_click(){
		var nav_index = $(this).index();
		
		if(i == nav_index) return;
		$('#nav .nav_wrap li').off('click', nav_click);
		$('#gnb li').off('click', nav_click);
		
		//main_bg
		if(i==0){
			$('#main_bg').removeClass();
			$('#main_bg').addClass('color'+nav_index);
		}else if(i==1){
			$('#main_bg').removeClass();
			$('#main_bg').addClass('color'+nav_index);
		}else if(i==2){
			$('#main_bg').removeClass();
			$('#main_bg').addClass('color'+nav_index);
		}else if(i==3){
			$('#main_bg').removeClass();
			$('#main_bg').addClass('color'+nav_index);
		}else{
			$('#main_bg').removeClass();
			$('#main_bg').addClass('color'+nav_index);
		}

		//sub_title_txt
		$('.sub_title_txt>ul>li').eq(i).stop().animate({
			'opacity':'0',
			'right':'-100%'
		}, 500, 'easeInCubic', function(){
			$('.sub_title_txt>ul>li').eq(nav_index).css({'right':'-100%'}).stop().animate({
				'opacity':'1',
				'right':'0'
			}, 500, 'easeOutCubic');
		});
		
		//main_img
		$('.main_img>ul>li').eq(i).stop().animate({
			'top':'-150%',
			'left':'-50%',
			'transform':'rotate(-150deg) scale(0.5)',
			'opacity':'0'
		},700, 'easeInCubic', function(){
			$('.main_img>ul>li').eq(nav_index).css({'top':'120%','transform':'rotate(150deg) scale(0.5)','left':'50%'}).stop().animate({
				'top':'0',
				'left':'0',
				'transform':'rotate(0deg) scale(1)',
				'opacity':'1'
			},400,'easeOutCubic', function(){
					$('#gnb li').not(nav_index).removeClass('on');
					$('#gnb li').eq(i).addClass('on');
					$('#nav li').not(i).removeClass('on');
					$('#nav li').eq(nav_index).addClass('on');
					pieChart();
				});
			$('.nav_wrap>ul>li').on('click', nav_click);
			$('#gnb li').on('click', nav_click);
		});
		
		//main_title
		$('.main_title>ul>li').eq(i).find('.wrap').css('transform-origin','bottom center').stop().animate({
			'transform':'scaleY(1.5)',
			'opacity':'0',
			'z-index':'995'
		},400, 'easeInCubic', function(){
			$('.main_title>ul>li').eq(nav_index).find('.wrap').css({'opacity':'0', 'display':'block', 'transform-origin':'top center', 'transform':'scaleY(1.5)', 'z-index':'999'}).stop().animate({
					'transform':'scaleY(1)',
					'opacity':'1'
				},400, 'easeOutCubic');
		});
		
		//sub_title
		$('.sub_title>ul>li').eq(i).css({'transform-origin':'bottom center','display':'block'}).stop().animate({
			'transform':'scaleY(1.2)',
			'top':'-20px',
			'opacity':'0'
		},700, 'easeInCubic', function(){
			$('.sub_title>ul>li').css('display','none');
			$('.sub_title>ul>li').eq(nav_index).css({'display':'block', 'opacity':'0', 'top':'20px'}).stop().animate({
				'top':'0',
				'opacity':'1',
				'transform':'scaleY(1)'
			},400);
		});
		i = nav_index;
	}

  // scroll 이벤트
  setInterval(function(){
		$('.scroll_txt').stop().animate({
			'bottom':'-15px'
		},600 ,function(){
			$('.scroll_txt').css('bottom','15px').stop().animate({
				'bottom':'0'
			},600);
		});
	},4000);

	$(window).ready(function(){
		var t = 3;
		
		$('#start_popup').addClass('on');
		$('.timer_seconds').text(t);
		
		if(win_w > 1400){
			setInterval(function(){
				t--;
				$('.timer_seconds').text(t);
				
				if(t<=0){
					t=0;
					$('#start_popup').stop().fadeOut();
				}
			},1000);
		} else{
			$('.start_timer').addClass('off');
			$('.start_error').addClass('on');
		}
	});

});