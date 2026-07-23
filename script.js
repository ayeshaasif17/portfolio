/* =========================================================
   PORTFOLIO JAVASCRIPT
   AYESHA ASIF — FULL-STACK / MERN STACK DEVELOPER
   ========================================================= */


/* =========================================================
   01. MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* =========================================================
   02. CLOSE MOBILE MENU WHEN LINK IS CLICKED
   ========================================================= */

const navLinks = document.querySelectorAll(
    ".nav-link"
);

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

});


/* =========================================================
   03. HEADER SCROLL EFFECT
   ========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

    if (!header) {
        return;
    }

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(9, 11, 16, 0.95)";

        header.style.boxShadow =
            "0 10px 30px rgba(0, 0, 0, 0.2)";

    } else {

        header.style.background =
            "rgba(9, 11, 16, 0.75)";

        header.style.boxShadow =
            "none";

    }

});


/* =========================================================
   04. ACTIVE NAVIGATION LINK
   ========================================================= */

const sections = document.querySelectorAll(
    "section[id]"
);

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");

        if (
            linkTarget ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   05. TYPING EFFECT
   ========================================================= */

const typingText =
    document.getElementById("typingText");

if (typingText) {

    const typingWords = [

        "Full-Stack Developer",

        "MERN Stack Developer",

        "Web Developer",

        "AI Enthusiast",

        "Creative Problem Solver"

    ];


    let wordIndex = 0;

    let characterIndex = 0;

    let isDeleting = false;


    function typeEffect() {

        const currentWord =
            typingWords[wordIndex];


        if (!isDeleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (
                characterIndex ===
                currentWord.length
            ) {

                isDeleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;

            }

        } else {

            typingText.textContent =
                currentWord.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                isDeleting = false;

                wordIndex++;

                if (
                    wordIndex >=
                    typingWords.length
                ) {

                    wordIndex = 0;

                }

            }

        }


        const typingSpeed =
            isDeleting
                ? 50
                : 100;


        setTimeout(
            typeEffect,
            typingSpeed
        );

    }


    typeEffect();

}


/* =========================================================
   06. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    function (element) {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   07. COUNTER ANIMATION
   ========================================================= */

const counters =
    document.querySelectorAll(
        "[data-counter]"
    );


const counterObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const counter =
                            entry.target;

                        const target =
                            Number(
                                counter.getAttribute(
                                    "data-counter"
                                )
                            );


                        let current =
                            0;


                        const increment =
                            Math.max(
                                1,
                                Math.ceil(
                                    target / 50
                                )
                            );


                        function updateCounter() {

                            current +=
                                increment;


                            if (
                                current >=
                                target
                            ) {

                                counter.textContent =
                                    target + "+";

                                return;

                            }


                            counter.textContent =
                                current;


                            setTimeout(
                                updateCounter,
                                30
                            );

                        }


                        updateCounter();


                        counterObserver.unobserve(
                            counter
                        );

                    }

                }
            );

        },

        {
            threshold: 0.7
        }

    );


counters.forEach(
    function (counter) {

        counterObserver.observe(
            counter
        );

    }
);


/* =========================================================
   08. PROJECT FILTER
   ========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {


                /* Remove active class */

                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                /* Add active class */

                button.classList.add(
                    "active"
                );


                const filter =
                    button.getAttribute(
                        "data-filter"
                    );


                projectCards.forEach(
                    function (card) {

                        const category =
                            card.getAttribute(
                                "data-category"
                            );


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            card.style.display =
                                "block";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   09. CONTACT FORM
   ========================================================= */

const contactForm =
    document.querySelector(
        ".contact-form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                contactForm.querySelector(
                    'input[name="name"]'
                );

            const email =
                contactForm.querySelector(
                    'input[name="email"]'
                );

            const message =
                contactForm.querySelector(
                    'textarea[name="message"]'
                );


            if (
                !name ||
                !email ||
                !message
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;

            }


            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                message.value.trim() === ""
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;

            }


            alert(
                "Thank you for your message! I will get back to you soon."
            );


            contactForm.reset();

        }
    );

}


/* =========================================================
   10. SMOOTH SCROLL
   ========================================================= */

const smoothLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


smoothLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#" ||
                    targetId === ""
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }

            }
        );

    }
);


/* =========================================================
   11. ESCAPE KEY — CLOSE MOBILE MENU
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            if (navMenu) {

                navMenu.classList.remove(
                    "active"
                );

            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* =========================================================
   12. CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            navMenu &&
            menuToggle &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   13. CONSOLE MESSAGE
   ========================================================= */

console.log(
    "%cHello, Developer! 👋",
    "font-size: 18px; font-weight: bold;"
);

console.log(
    "Welcome to Ayesha Asif's Portfolio."
);

console.log(
    "Built with HTML, CSS & JavaScript."
);