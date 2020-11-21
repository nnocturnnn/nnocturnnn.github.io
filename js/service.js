document.querySelectorAll('.service').forEach(function(elm){
    elm.addEventListener('click',function(){
        console.log(elm);
        var service_content = document.querySelector('#service_content');
        service_content.innerHTML = "<p>Test</p>";  
    })
});