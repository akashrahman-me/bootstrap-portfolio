$(document).ready(function(){
	//
	

	// Skill Design
	$('div.progress-bar-custom').filter(function(){
		
		data = $(this).next().html()
		data--
		data--
		data--
		$(this).css('background-image', 'linear-gradient(to right, #c49bff ' + data + '%, white 0)')
		$(this).children().css('left', data + '%')
	})

	//Navbar Execute
	$('button.navbar-close').click(function(){
		$('nav').slideToggle()
		
	})
	var doncumentWidth = $('body').width()
	if (doncumentWidth <= 769) {
		$('nav').click(function(){
			$(this).slideToggle()
		})
	}

	// Portfolio Button Desgin
	$('#portfolioButton').find('a').click(function(){
		$(this).siblings().removeClass('active')
		$(this).addClass('active')

		return false;
	})

	// Spinner Design
	$('div#mainSpinner').css('display', 'none')
	$('nav').css({visibility: 'visible'})
	$('section').css({visibility: 'visible'})
	$('aside').css({visibility: 'visible'})

	// About Section Desgin
	$('input#aboutPhoto').change(function(){
		$(this).siblings().text($(this).val().split('\\').pop())
	})

	// Skill Parcsent Develop
	$('select#skillParsent').filter(function(){
		var parsentNumber = 0
		while (parsentNumber <= 100) {
			if (parsentNumber < 10) {
				var skillParsentValu = '<option value="">0' +  parsentNumber + '%</option>'
			}else{
				var skillParsentValu = '<option value="">' + parsentNumber + '%</option>'
			}
			var skillAlreadyOptioned = $(this).html()
			$(this).html(skillAlreadyOptioned + skillParsentValu)
			parsentNumber++
		}

	})

	// Post Delete
	$('#postDeleteButton').click(function(){
		if (confirm("Are you sure to delete this post?")) {

			// Post Delete code guse hare..
		}
	})
	

})


// Int aos
AOS.init();

// Portfolio Mixitup
var mixer = mixitup('.portfolio-container');

