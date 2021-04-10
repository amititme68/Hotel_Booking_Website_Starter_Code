function bookingSuccessful(){
    alert('Hi your booking is successfull !!');
}

const params = new URLSearchParams(window.location.search)
let adult = params.get('adult');
let fullName = params.get('name');
let fromDate = new Date(params.get('fromDate'));
let toDate = new Date(params.get('toDate'));
let price = params.get('price');
let days = parseInt((toDate-fromDate)/(24*3600*1000));


document.getElementsByClassName('heading1')[0].innerHTML += `${fullName}`;
document.getElementsByClassName('heading1')[1].innerHTML += `${adult}`;
document.getElementsByClassName('heading1')[2].innerHTML += `${params.get('fromDate')}`;
document.getElementsByClassName('heading1')[3].innerHTML += `${params.get('toDate')}`;
document.getElementsByClassName('heading1')[4].innerHTML += `${price} x ${adult} Adults x ${days} Nights`;
document.getElementsByClassName('heading1')[5].innerHTML += `${price}`;

