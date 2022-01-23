
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
  $("#blanks").submit(function(run) {

      var nameInput = $("input#name").val();
      var emailInput = $("input#email").val();
      var messageInput = $("input#message").val();

      
      $(".name").text(nameInput);
      $(".email").text(emailInput);
      $(".message").text(messageInput);


      $("#onSubmit").show();

      run.preventDefault();
  });
});

$(document).ready(function(){
$("#image1").mouseover(function(){
  $(".overlay1").show({opacity: '1'});
  
}).mouseout(function(){
  $(".overlay1").hide({opacity: '0'});
});
});

$(document).ready(function(){
  $("#image2").mouseover(function(){
    $(".overlay2").show({opacity: '1'});
    
  }).mouseout(function(){
    $(".overlay2").hide({opacity: '0'});
  });
  });

$(document).ready(function(){
  $("#image3").mouseover(function(){
    $(".overlay3").show({opacity: '1'});
    
  }).mouseout(function(){
    $(".overlay3").hide({opacity: '0'});
  });
  });
  
  $(document).ready(function(){
    $("#image4").mouseover(function(){
      $(".overlay4").show({opacity: '1'});
      
    }).mouseout(function(){
      $(".overlay4").hide({opacity: '0'});
    });
    });

    
$(document).ready(function(){
  $("#image5").mouseover(function(){
    $(".overlay5").show({opacity: '1'});
    
  }).mouseout(function(){
    $(".overlay5").hide({opacity: '0'});
  });
  });
  
$(document).ready(function(){
  $("#image6").mouseover(function(){
    $(".overlay6").show({opacity: '1'});
    
  }).mouseout(function(){
    $(".overlay6").hide({opacity: '0'});
  });
  });
  
  $(document).ready(function(){
    $("#image7").mouseover(function(){
      $(".overlay7").show({opacity: '1'});
      
    }).mouseout(function(){
      $(".overlay7").hide({opacity: '0'});
    });
    });
  
  $(document).ready(function(){
    $("#image8").mouseover(function(){
      $(".overlay8").show({opacity: '1'});
      
    }).mouseout(function(){
      $(".overlay8").hide({opacity: '0'});
    });
    });