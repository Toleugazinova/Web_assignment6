$(document).ready(function() {
  console.log("jQuery is ready!");
 
  $("#light").click(function() {
    $("body").css({"background-color": "#ffffff", "color": "#000000"});
    $("section, header").css("border-color", "#cccccc");
    $(".heading").css({"background-color": "#eeeeee", "color": "#000000"});
  });
 
  $("#dark").click(function() {
    $("body").css({"background-color": "#222222", "color": "#ffffff"});
    $("section, header").css("border-color", "#888888");
    $(".heading").css({"background-color": "#444444", "color": "#ffffff"});
  });
 
  $("#changeHeadline").click(function() {
    $("#headline").text("Frontend Developer");
    $("#title").html("<i>Welcome to My Portfolio</i>");
    $(".intro").css("color", "blue");
  });
 
  $("#hide").click(function() {
    $("#status").hide();
    $("#facts").hide();
  });
 
  $("#show").click(function() {
    $("#status").show();
    $("#facts").show();
  });
 
  $("#toggle").click(function() {
    $("#status").toggle();
    $("#facts").toggle();
  });
 
  $("#fadeIn").click(function() {
    $(".pic").fadeIn();
  });
 
  $("#fadeOut").click(function() {
    $(".pic").fadeOut();
  });
 
  $("#fadeToggle").click(function() {
    $(".pic").fadeToggle();
  });
 
  $(".heading").click(function() {
    $(this).next(".panel").slideToggle();
  });
 
  $("#openAll").click(function() {
    $(".panel").slideDown();
  });
 
  $("#closeAll").click(function() {
    $(".panel").slideUp();
  });
 
  $("#addSkill").click(function() {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#error").text("Please enter a skill!");
    } else {
      $("#error").text("");
      $("#skills").append("<li>" + skill + "</li>");
      $("#skillInput").val("");
    }
  });
 
  $("#prependSkill").click(function() {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#error").text("Please enter a skill!");
    } else {
      $("#error").text("");
      $("#skills").prepend("<li>" + skill + "</li>");
      $("#skillInput").val("");
    }
  });
 
  $("#removeSkill").click(function() {
    $("#skills li:last").remove();
  });
 
  $("#changeLink").click(function() {
    $("#social").attr("href", "https://github.com/Toleugazinova");
    $("#social").text("GitHub");
  });
 
  $("#nameInput").keyup(function() {
    $("#outName").text($(this).val());
  });
 
  $("#emailInput").keyup(function() {
    $("#outEmail").text($(this).val());
  });
 
  var animated = false;
 
  $("#animateSkills").click(function() {
    if (!animated) {
      $(".bar").each(function() {
        $(this).animate({width: $(this).data("level") + "%"}, 1500);
      });
      animated = true;
    } else {
      $(".bar").animate({width: "0"}, 1500);
      animated = false;
    }
  });
});
 