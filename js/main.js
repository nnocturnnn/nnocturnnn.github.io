document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav,{edge:'left',draggable:true});
    
    var slider = document.querySelectorAll('.slider');
    var init_slider = M.Slider.init(slider,{
        height:400,
        indicators:false,
        interval:4000
    });

    var MBox = document.querySelectorAll('.materialboxed');
    var init_mbox = M.Materialbox.init(MBox);

    var parallax = document.querySelectorAll('.parallax');
    var init_parallax = M.Parallax.init(parallax);
});