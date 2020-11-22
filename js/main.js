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

function validateForm() {
    let name = document.orderForm.name.value;
    let address = document.orderForm.address.value;
    let city = document.orderForm.city.value;
    let state = document.orderForm.state.value;
    let phone = document.orderForm.phone.value;
  
    if (name == null || name == '') {
      alert("Name field can't be blank.");
      return false;
    } else if (address === null || address === '') {
      alert("Address field can't be blank.");
      return false;
    } else if (city === null || city === '') {
      alert("City field can't be blank.");
      return false;
    } else if (state === null || state === '') {
      alert("State field can't be blank.");
      return false;
    } else if (/^\d{10}$/.test(phone) === false) {
      alert('Please enter valid phone number.');
      return false;
    }
  }