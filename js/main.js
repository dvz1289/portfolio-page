$(function(){

  var i = 0;

  // 브라우저 시작시 color 강제실행
	$('#main_bg').addClass('color0');

  function wheel(e, delta){
		$('html, body').off('mousewheel DOMMousescroll', wheel);
		if(delta<0){
			// 메인 이미지 변경
			if(i<3){i++;}

			//main_img
			$('.main_img>ul>li').eq(i-1).stop().animate({
				'top':'-150%',
				'left':'-50%',
				'transform':'rotate(-90deg) scale(0.5)'
			},700, 'easeInCubic', function(){
				$('.main_img>ul>li').eq(i).css({'top':'120%','transform':'rotate(120deg) scale(0.5)','left':'50%'}).stop().animate({
					'top':'0',
					'left':'0',
					'transform':'rotate(0deg) scale(1)'
				},400,'easeOutCubic');
				setTimeout(function(){
					$('html, body').on('mousewheel DOMMousescroll', wheel);
				},400);
			});
			
			//main_title
			$('.main_title>ul>li').eq(i-1).find('.txt_wrap').css('transform-origin','bottom center').stop().animate({
				'transform':'scaleY(1.5)',
				'opacity':'0'
			},400, 'easeInCubic', function(){
				$('.main_title>ul>li').eq(i).find('.txt_wrap').css({
					'opacity':'0',
					'display':'block',
					'transform-origin':'top center',
					'transform':'scaleY(1.5)'
					}).stop().animate({
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
				$('.sub_title>ul>li').eq(i).css({
					'display':'block',
					'opacity':'0',
					'top':'20px'
				}).stop().animate({
					'top':'0',
					'opacity':'1',
					'transform':'scaleY(1)'
				},400);
			});
			
			//sub_title_text , hide_line
			$('.sub_title_text').css({
				'width':'0','right':'0'}).stop().animate({
				'width':'50%'
			},550, 'easeInCubic', function(){
				$('.sub_title_text>ul>li').eq(i-1).stop().hide();
				$('.sub_title_text>ul>li').eq(i).stop().show();
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
			}else{
				$('#main_bg').removeClass();
				$('#main_bg').addClass('color'+i);
			}
			
		}else if(delta>0){
			// 메인 이미지 변경
			if(i>0){i--;}
			
			//main_img
			$('.main_img>ul>li').eq(i+1).stop().animate({
				'top':'120%',
				'left':'50%',
				'transform':'rotate(120deg) scale(0.5)'
			},700, 'easeInCubic', function(){
				$('.main_img>ul>li').eq(i).css({'top':'-150%','transform':'rotate(-90deg) scale(0.5)','left':'-50%'}).stop().animate({
					'top':'0',
					'left':'0',
					'transform':'rotate(0deg) scale(1)'
				},400,'easeOutCubic');
				setTimeout(function(){
					$('html, body').on('mousewheel DOMMousescroll', wheel);
				},400);
			});
			
			//main_title
			$('.main_title>ul>li').eq(i+1).find('.txt_wrap').css('transform-origin','top center').stop().animate({
				'transform':'scaleY(1.5)',
				'opacity':'0'
			},400, 'easeInCubic', function(){
				$('.main_title>ul>li').eq(i).find('.txt_wrap').css({
					'opacity':'0',
					'display':'block',
					'transform-origin':'bottom center'
					}).stop().animate({
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
				$('.sub_title>ul>li').eq(i).css({
					'display':'block',
					'opacity':'0',
					'top':'-20px'
				}).stop().animate({
					'top':'0',
					'opacity':'1',
					'transform':'scaleY(1)'
				},400);
			});
			
			//sub_title_text , hide_line
			$('.sub_title_text').css({
				'width':'0','right':'0',}).stop().animate({
				'width':'50%'
			},550, 'easeInCubic', function(){
				$('.sub_title_text>ul>li').eq(i+1).hide();
				$('.sub_title_text>ul>li').eq(i).show();
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
			}
		}
	}// wheel
	$('html, body').on('mousewheel DOMMousescroll', wheel);

  // scroll 이벤트
  setInterval(function(){
		$('.scroll_text').stop().animate({
			'bottom':'-15px'
		},600 ,function(){
			$('.scroll_text').css('bottom','15px').stop().animate({
				'bottom':'0'
			},600);
		});
	},4000);

})