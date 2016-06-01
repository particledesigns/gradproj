if ($(window).width() > 1024) {
    alert('Your browser size is more than 1024px. This prototype is best viewed in LANDSCAPE MODE at the resolution of a typical iPad 2 - 1024px width. If you do not view it at this resolution, you are getting a sob-optimal experience.');
}
else if ($(window).width() < 980){
    alert('Your browser size is less than 960px. This prototype is best viewed in LANDSCAPE MODE at the resolution of a typical iPad 2 - 1024px width. If you do not view it at this resolution, you are getting a sob-optimal experience.');
}

function goBack() {
    window.history.back();
}

$(".help-link").click(function(){
    $(".help-pop").toggle("slow");
});

