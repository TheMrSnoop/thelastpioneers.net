const noticeText = document.getElementById("NoticeText");

let x = 0;
let y = 0;

document.addEventListener("mousemove", function(event)
{
    x = event.clientX;
    y = event.clientY;
})


document.querySelectorAll('.ImageContainer img').forEach(img => {
    img.addEventListener('mouseover', () => {
        noticeText.textContent = (img.alt || '');
    });
});


function TrackMouse()
{
    noticeText.style.transform = `translate(${x}px, ${y}px)`;
    noticeText.style.left = y;
     
    requestAnimationFrame(TrackMouse);
}

TrackMouse();


