console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("input.add").change(function handleChange(event) {
    var first = $("input#left").val();
    var second = $("input#right").val();
    var firstVal = parseInt(first) || 0;
    var secondVal = parseInt(second) || 0;
    var total = firstVal + secondVal;
    $("#total").val(total);
  });

  $("#time").text( Date.now() );

})
