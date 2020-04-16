
$(document).ready(function(){
    $('#logout').click(function(){
  fetch("http://localhost:8080/EBanking/user/logout/",{
    method: "POST",
        headers: {
    "Content-Type": "application/json"
}
    });  
});
});