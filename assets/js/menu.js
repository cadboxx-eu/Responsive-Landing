
  imgTracker = "open";
function changeMenu() {
    var imgBars = document.getElementById("imgBars");
  

    if (imgTracker == "open"){

       imgBars.src = "assets/img/MenuClose.svg";
       imgTracker = "close";
        
    }

    else {

        imgBars.src = "assets/img/Menu.svg";
        
        imgTracker = "open";
    }
};