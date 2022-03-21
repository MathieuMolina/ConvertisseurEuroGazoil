window.addEventListener("DOMContentLoaded", (event) => {
    const change = 1.94;
    const Euros = document.getElementById('Euros');
    const gazoil = document.getElementById('gazoil');
   
    Euros.addEventListener('keyup', function(){
      let gaz = parseFloat(this.value.trim());
      let euro = parseFloat(gaz/change);
      gazoil.value = euro.toFixed(2);
    });
   
    gazoil.addEventListener('keyup', function(){
      let euro = parseFloat(this.value.trim());
      let gaz = parseFloat(euro*change);
      Euros.value = gaz.toFixed(2);
    });
});

