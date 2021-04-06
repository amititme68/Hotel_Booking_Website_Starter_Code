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