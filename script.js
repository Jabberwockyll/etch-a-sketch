

$(document).ready(function(){
	buildGrid(32);
	$('#reset').click(reset);
	$(document).on('mouseenter', '.square', function(){
		$(this).css('background-color', '#FFFFFF');
	});
});

function buildGrid(size){
	$('#container').empty();

	for (var i = 0; i < (size*size); i++) {
		$('#container').append('<div class="square"></div>');
	};
	for (var i = 960; i >= 0; i--) {
		if (i % size == 0) {
			$('#container').css('height', i + 'px');
			$('#container').css('width', i + 'px');
			$('.square').css('height', (i/size) + 'px');
			$('.square').css('width', (i/size) + 'px');
			break;
		}
	};
}

//When button is pressed, crate promt to get size and then call buildGrid(size)
function reset(){
	var size = prompt("Enter grid size (default=32)");
	buildGrid(size);
}