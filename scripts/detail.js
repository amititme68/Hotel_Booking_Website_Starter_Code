function calculatePrice(){
    var numberOfAdults = document.getElementById('adult').value;
    var fromDate = new Date(document.getElementById('fromDate').value);
    var toDate = new Date(document.getElementById('toDate').value);

    var milliseconds = toDate-fromDate;
    var seconds = milliseconds/1000;
    var minutes = seconds/60;
    var hour = minutes/60;
    var days = hour/24;
    var price = (numberOfAdults*days)*1000;
    document.getElementById('price').value =`Rs. ${price}`;
} 

document.getElementById('adult').addEventListener('input', calender);
document.getElementById('fromDate').addEventListener('input', calender);
document.getElementById('toDate').addEventListener('input', calender);

function total() {
    var adult = document.getElementById("adult").value;
    var toDate = new Date(document.getElementById("toDate").value);
    var fromDate = new Date(document.getElementById("fromDate").value);
    var price = parseInt((toDate - fromDate) / (24 * 3600 * 1000)) * adult * 1000;
    return "Rs. " + price;
}

function calender() {
    var dtToday = new Date($("#fromDate")[0].value);
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate() + 1;
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var minDate = year + '-' + month + '-' + day;


    $('#toDate').attr('min', minDate);
    if (document.getElementById("toDate")||document.getElementById("adult")) {
        document.getElementById("price").value = total();
    }
}

$(function () {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var minDate = year + '-' + month + '-' + day;

    $('#fromDate').attr('min', minDate);

});

$(function () {
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate() + 1;
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var minDate = year + '-' + month + '-' + day;


    $('#toDate').attr('min', minDate);
});