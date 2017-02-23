$(document).ready(function() {

	var caratula='1';
	elegido(caratula);
	
	
	var cantidades = new Array(0,0,0);
	total();
	$('.caratulas').on('click', '.cal', function(){
		
		caratula = $(this).data('caratula');
		elegido(caratula);

		
	});
		
	$('.imgp').on('click', '.imp', function(){
		$("#dimg").attr("style","opacity:0;");
		$("#dimg").fadeTo(700,1);
		$("#imagengrande").attr("src", $(this).attr('src'));

		
	});
	$('#metercarrito').on('click', function(){
		
		if(caratula=='1'){
		

			cantidades[0] = +$('.cantidad').val();
			if(cantidades[0]>0){
				var clase='j1';
				$('.j1').remove();
				var precio_total= cantidades[0]*(+$('#producto_1').data('precio'));
				$('#tabla').append('<tr class='+clase+'><td>Resident Evil VII</td><td>'+cantidades[0]+'</td><td>'+$('#producto_2').data('precio')+'$</td><td>'+precio_total+'$</td></tr>');
				
			}else{
				
				$('.j1').remove();
				
			}
			
		}
		else if(caratula=='2'){
		
			cantidades[1] = +$('.cantidad').val();
			if(cantidades[1]>0){
				var clase='j2';
				var precio_total= cantidades[1]*(+$('#producto_2').data('precio'));
				$('.j2').remove();
				$('#tabla').append('<tr class='+clase+'><td>Dark Souls 3</td><td>'+cantidades[1]+'</td><td>'+$('#producto_2').data('precio')+'$</td><td>'+precio_total+'$</td></tr>');
				
			}else{
				
				$('.j2').remove();
				
			}
			
		}
		else if(caratula=='3'){
		
			cantidades[2] = +$('.cantidad').val();
			if(cantidades[2]>0){
				var clase='j3';
				var precio_total= cantidades[2]*(+$('#producto_3').data('precio'));
				$('.j3').remove();
				$('#tabla').append('<tr class='+clase+'><td>Fallout 4</td><td>'+cantidades[2]+'</td><td>'+$('#producto_3').data('precio')+'$</td><td>'+precio_total+'$</td></tr>');
				
			}else{
				
				$('.j3').remove();
				
			}
			
		}
		total();
		
		
	});

	function total(){
		
		var total;
		total = cantidades[0]*(+$('#producto_1').data('precio')) + cantidades[1]*(+$('#producto_2').data('precio')) + cantidades[2]*(+$('#producto_3').data('precio'));
		
		$('.total').text('Total: '+total+'$');
		
	}
	function elegido(caral){
		
		if(caral=='1'){
			
			$("#imagengrande").attr("src", 'img/rs1.jpg');
			$("#i1").attr("src", 'img/rs1.jpg');
			$("#i2").attr("src", 'img/rs2.jpg');
			$("#i3").attr("src", 'img/rs3.jpg');
			$('#descripcion').text('resident evil VII');
			$('.precio').text($('#producto_1').data('precio')+'$');
			
		}else if(caral=='2'){
			
			$("#imagengrande").attr("src", 'img/ds1.jpg');
			$("#i1").attr("src", 'img/ds1.jpg');
			$("#i2").attr("src", 'img/ds2.jpg');
			$("#i3").attr("src", 'img/ds3.jpg');
			$('#descripcion').text('dark souls 3');
			$('.precio').text($('#producto_2').data('precio')+'$');
			
		}else if(caral=='3'){
			
			$("#imagengrande").attr("src", 'img/f1.jpg');
			$("#i1").attr("src", 'img/f1.jpg');
			$("#i2").attr("src", 'img/f2.jpg');
			$("#i3").attr("src", 'img/f3.jpg');
			$('#descripcion').text('fallout 4');
			$('.precio').text($('#producto_3').data('precio')+'$');
			
		}
		
		
	}

});