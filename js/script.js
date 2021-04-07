function init(){
  //add your javascrip between these two lines of code
  var entrybutton = document.getElementById('entrybutton');
  entrybutton.addEventListener('click', function(){
    var text = "Yongkang Hu: " + document.getElementById('entryinput').value;
    alert(text);
    document.getElementById('textoutput').innerHTML = document.getElementById('entryinput').value;   
  });    
}    
window.addEventListener('load', init);