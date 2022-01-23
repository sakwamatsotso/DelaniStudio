
$(document).ready(function() {
  $("#design").click(function(){
    $(".firstClick").toggle();
    $("#design-show").toggle();
    $("#design-show").css("textAlign","center");
    $("p,h2")
    .on("mouseenter",function() {
      $(this).css({
        "font-weight":"bolder"
      });
    })
    .on("mouseleave", function(){
      var styles={
        fontWeight:"normal"
      }
    })
  })
})


$(document).ready(function() {
  $("#dev").click(function(){
    $(".secondClick").toggle();
    $("#dev-show").toggle();
    $("#dev-show").css("textAlign","center");
    $("p,h2")
    .on("mouseenter",function() {
      $(this).css({
        "font-weight":"bolder"
      });
    })
    .on("mouseleave", function(){
      var styles={
        fontWeight:"normal"
      }
    })
  })
})


$(document).ready(function() {
  $("#prod").click(function(){
    $(".thirdClick").toggle();
    $("#prod-show").toggle();
    $("#prod-show").css("textAlign","center");
    $("p,h2")
    .on("mouseenter",function() {
      $(this).css({
        "font-weight":"bolder"
      });
    })
    .on("mouseleave", function(){
      var styles={
        fontWeight:"normal"
      }
    })
  })
})


$(document).ready(function() {
  $("#blanks").submit(function(event) {

      var nameInput = $("input#name").val();
      var emailInput = $("input#email").val();
      var messageInput = $("input#message").val();

      
      $(".name").text(nameInput);
      $(".email").text(emailInput);
      $(".message").text(messageInput);


      $("#onSubmit").show();

      event.preventDefault();
  });
});

$(document).ready(function(){
$("#image1").mouseover(function(){
  $(".overlay4").show({opacity: '1'});
  
}).mouseout(function(){
  $(".overlay4").hide({opacity: '0'});
});
});