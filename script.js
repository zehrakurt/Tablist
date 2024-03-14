document.getElementById("tab1-button").addEventListener("click", function() {
    // Tüm tab-content'leri gizle
    let tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    // Sadece tıklanan tab-content'i göster
    document.getElementById("tab1-content").style.display = "block";
});

document.getElementById("tab2-button").addEventListener("click", function() {
    // Tüm tab-content'leri gizle
    let tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    // Sadece tıklanan tab-content'i göster
    document.getElementById("tab2-content").style.display = "block";
});

document.getElementById("tab3-button").addEventListener("click", function() {
    // Tüm tab-content'leri gizle
    let tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    // Sadece tıklanan tab-content'i göster
    document.getElementById("tab3-content").style.display = "block";
});

  