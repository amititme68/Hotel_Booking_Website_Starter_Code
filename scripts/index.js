function shows(){
    let photos=  document.getElementById('city-cards2');
    photos.style.display = 'flex';
      document.getElementById('view-more').style.display = "none";
    document.getElementById('view-less').style.display = "flex";
  }
  
  function hide(){
    let photos=  document.getElementById('city-cards2');
    photos.style.display = 'none';
      document.getElementById('view-more').style.display = "flex";
    document.getElementById('view-less').style.display = "none";
  }
 
  