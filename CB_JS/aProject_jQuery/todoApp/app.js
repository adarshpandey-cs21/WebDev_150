$('#list').on('click','li',function () {
    $(this).toggleClass('completed');
})
$('#inp').keypress(function(e){
    if(e.which===13){
        let inpText=$('#inp').val();
        $('#list').append(`<li><span><i class="fa-solid fa-trash-can"></i></span> ${inpText} </li>`);
        $('#inp').val("");
    }
})

$('#list').on('click', 'span',function(e){
    $(this).parent().fadeOut(400,function(){
        $(this).remove();
    })
    e.stopPropagation()
})
$('#plus').click(function(){
    $('#inp').fadeToggle();
})