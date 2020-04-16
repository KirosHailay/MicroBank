
$(document).ready(function(){

    $.get("http://localhost:8080/EBanking/transaction/")
    .done(display)
    .fail(errorFunction)
    .always(function(){
    });
    $("#search").on("submit",searchFunction);

});

function display(data){
// console.log(JSON.stringify(myJson));
let transactionList="<tr>";
for(let temp of data){
   let date=+temp.date.year+"-"+temp.date.month+"-"+temp.date.day;
   
transactionList+="<td>" + temp.transactionId+ "</td>" + "<td>" + date + "</td>"+ "<td>" + temp.transactionAmount+ "</td>"+  "</tr>";
}
$("#tranasactionBody").html(transactionList);
}
function errorFunction(){
console.log("hi")
}

function searchFunction(){
    event.preventDefault();
    let searchDate= $("#searchInput").val();
    let dates=searchDate.split("-");
    let datePath="?year="+dates[0]+"month="+dates[1]+"day="+dates[2];
    //have to add the get acc number from session code
    $.get("http://localhost:8080/EBanking/transaction/"+"acc3"+"/" +datePath)
    .done(displaySearch)
    .fail(errorFunction)
    .always(function(){
        console.log("So, this happened.");
        console.log(dates[0]);
        console.log(dates[1]);
        console.log(dates[2]);
    });

}
function displaySearch(data){
    let transactionList="<tr>";
for(let temp of data){
   let date=+temp.date.year+"-"+temp.date.month+"-"+temp.date.day;
   
transactionList+="<td>" + temp.transactionId+ "</td>" + "<td>" + date + "</td>"+ "<td>" + temp.transactionAmount+ "</td>"+  "</tr>";
}
$("#tranasactionBody").html(transactionList);
}
function errorFunction(){
console.log("hi")
}