// Form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    console.log(`[Form Submission] Name: ${name}, Email: ${email}`);
});

// iFrame load event
document.getElementById("demoFrame").addEventListener("load", () => {
    console.log("[i-frame Loaded] https://www.example.com");
});

// Audio play event
const audio = document.getElementById("audioPlayer");
audio.addEventListener("play", () => {
    console.log("[Audio] Played: song.mp3 | Duration: " + audio.duration + "s");
});

// Video play event
const video = document.getElementById("videoPlayer");
video.addEventListener("play", () => {
    console.log("[Video] Played: video.mp4 | Resolution: 720p");
});

// Layout collapse (simulation)
if (window.innerWidth < 768) {
    console.log("[Layout] Columns collapsed on mobile breakpoint");
}
