// ---------------------------------Sticky Navbar with Proress Bar------------------------------------------------------------------------------


let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {myFunction()};

function myFunction() {

    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";

    var x = document.getElementById("sticky_navbar");

    if (document.body.scrollTop > 54 || document.documentElement.scrollTop > 54) {
        // document.getElementById("sticky_navbar").className = "sticky-navbar-properties";

            x.style.display = "flex";
            x.style.position = "fixed";
            x.style.background = "linear-gradient(to right,rgb(235,236,238),rgb(239,241,240),rgb(231,235,234),rgb(230,224,225))";
            x.style.alignContent = "center";
            x.style.justifyContent = "space-around";
            x.style.width = "100%";
            x.style.minHeight = "8vh";
            x.style.top = "0";
            x.style.left = "-80";
        
    } else {
        // document.getElementById("sticky_navbar").className = "";
        x.style.display = "none";
    }
}
// ----------------------------------------------------------------------------------------------------------------------------


