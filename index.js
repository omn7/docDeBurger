
$(".previous").on("click",function(){
    if( $(".debug_img").attr("src")=="./public/de5.png"){
     $(".debug_img").attr("src","./public/de 4.png");
}
    else if( $(".debug_img").attr("src")=="./public/de 4.png"){
         $(".debug_img").attr("src","./public/de3.png");
}
    else if($(".debug_img").attr("src")=="./public/de3.png"){
         $(".debug_img").attr("src","./public/de2.png");
 }

   else if($(".debug_img").attr("src")=="./public/de2.png"){
    $(".debug_img").attr("src","./public/debugger.png");
}
    
    
    
});


$(".next").on("click",function(){
    if( $(".debug_img").attr("src")=="./public/debugger.png"){
     $(".debug_img").attr("src","./public/de2.png");
}
    else if( $(".debug_img").attr("src")=="./public/de2.png"){
         $(".debug_img").attr("src","./public/de3.png");
}
    else if($(".debug_img").attr("src")=="./public/de3.png"){
         $(".debug_img").attr("src","./public/de 4.png");
 }

   else if($(".debug_img").attr("src")=="./public/de 4.png"){
    $(".debug_img").attr("src","./public/de5.png");
}
    
    
    
});

$(".heading").on("click",function(){
    window.open('https://deburger.omnarkhede.tech/','_blank');
})







