$.ajax({
    type: 'GET',
    url: "http://localhost:5555/product/toppricenow", 
    success: function(result){
}});


$("#create-account").click(function(){
    $("#div1").load("register.html");
   
});