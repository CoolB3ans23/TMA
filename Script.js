// ======================================
// LIVE CLOCK
// ======================================

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    clock.textContent = `${day}-${month}-${year} ${hours}:${minutes}`;

}

updateClock();
setInterval(updateClock, 1000);


// ======================================
// BLINKING STATUS CURSOR
// ======================================

const statusText = document.querySelector(".statusbar span:last-child");

if (statusText) {

    const original = statusText.textContent;

    setInterval(() => {

        if (statusText.textContent.endsWith("█")) {
            statusText.textContent = original;
        } else {
            statusText.textContent = original + " █";
        }

    }, 500);

}


// ======================================
// HOVER SOUND PREPARATION
// (We'll add sounds later if you want.)
// ======================================

const menuLinks = document.querySelectorAll(".sidebar a");

menuLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.letterSpacing = "1px";

    });

    link.addEventListener("mouseleave", () => {

        link.style.letterSpacing = "0px";

    });

});


// ======================================
// RANDOM TERMINAL ID
// ======================================

const ids = [
    "LON-01",
    "LON-02",
    "LON-03",
    "ARCH-14",
    "ARCH-22",
    "STORAGE-7"
];

const randomID = ids[Math.floor(Math.random() * ids.length)];

const title = document.querySelector(".system-version");

if (title) {
    title.textContent = "Terminal " + randomID;
}
