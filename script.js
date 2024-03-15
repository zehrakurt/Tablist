document.getElementById("tab1-button").addEventListener("click", function() {
    
    let tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
  
    document.getElementById("tab1-content").style.display = "block";
});

document.getElementById("tab2-button").addEventListener("click", function() {
    
    let tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    
    document.getElementById("tab2-content").style.display = "block";
});

document.getElementById("tab3-button").addEventListener("click", function() {
   
    let tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
   
    document.getElementById("tab3-content").style.display = "block";
});

  
