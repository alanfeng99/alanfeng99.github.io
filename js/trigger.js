$(function() {
Cufon.replace('.newsBlock h2,.block2 h2,.call strong,.block3 h2 em,#content h2 em,#content h3 em,.scoreDetail em,.scoreDetail span,#tabs_faqs li a em,#teacher_list h4 a,.teacher_detail h4 em,#testimonials h3,.book_detail .info h2');

$('input[title!=""]').hint('hint');
$('#btnTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

$('#nav ul li:nth-child(1),#subnav li:nth-child(1)').addClass('first');
$('#footer .bottom li').last().addClass('end');
$('.course td:nth-child(2n),.report_table td:nth-child(2n)').addClass('gray');
$('#bread a').first().addClass('first');



ddsmoothmenu.init({
	mainmenuid: "nav", //Menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'ddsmoothmenu-v', //class added to menu's outer DIV
	//customtheme: ["#804000", "#482400"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})

 

});

