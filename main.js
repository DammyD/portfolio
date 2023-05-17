
    //     var tablinks = document.getElementsByClassName("tab-links");
    //     var tabcontents = document.getElementsByClassName("tab-contents");

    //     function opentab(tabname) {
    //         for(tablink of tablinks){
    //             tablink.classList.remove("active-link");
    //         }
    //         for(tabcontent of tabcontents){
    //             tabcontent.classList.remove("active-tab");
    //     }
    //     event.currentTarget.classList.add("active-link");
    //     document.getElementById(tabname).classList.add("active-tab");
    // }

    
    // var sidemenu = document.getElementById("sidemenu");

    // function openmenu(){
    //     sidemenu.style.right = "0";
    // }
    // function closemenu(){
    //     sidemenu.style.right = "-200px";
    // }

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-x');
        navbar.classList.toggle('active');
    }
    // scroll sections

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                // active navbar links
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
        // sticky header
        let header = documemt.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // remove toggle icon and navbar when click navbar links (scroll)
        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');
    }
