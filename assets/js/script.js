window.onload = function() {
    //Copy to Clipboard icons
    new ClipboardJS('.icon-name');

    // Initalise Gumshoe Plugin
    var spy = new Gumshoe('#TableOfContents ul li a', {
        nested: true,
	    nestedClass: 'active-parent'
    });

    // TOC has clidren check 
    const liElem = document.querySelectorAll("#TableOfContents ul li")
    
    liElem.forEach(elem => {
    if(elem.querySelector("ul")) {
        elem.classList.add("has-children");
    }
    })

    // Initalise Dark mode local storage
    const btn = document.querySelector(".dark-mode-toggle");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    }

    btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
    });

    // Scroll to top      
    document.getElementById('scroll-to-top').addEventListener('click', function () {
        //console.log("You finally clicked without jQuery");
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth' // Safari doesn't support Smooth Scrolling.
         });
      });

}

function showToast() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }