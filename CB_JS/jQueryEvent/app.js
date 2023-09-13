$('#btn').click(()=>{
    console.log("button clicked");
})

$('div').on('click',function(){
    $(this).hide();
})

$('#inp').keypress(function(e){
    if(e.which===13){
        console.log("you hit the enter");
    }
})