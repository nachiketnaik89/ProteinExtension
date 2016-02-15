$(function(){
  $("#save").click(function(){
    chrome.storage.sync.get('goal',function(items){
      var newTotal =0;

      var amount = $('#goal').val();
      if(amount){
        newTotal=parseInt(amount);
      }
    chrome.storage.sync.set({"goal":newTotal},function(){
      close();
    });

    });

  });

  chrome.storage.sync.get('goal',function(items){
    $('#goal').val(items.goal);
  });

$("#reset").click(function(){
  chrome.storage.sync.set({"goal":0});
  $('#goal').val(0);
});

});
