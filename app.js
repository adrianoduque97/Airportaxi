const mobileUL = "https://api.whatsapp.com/send?phone=593983073778"

const imageChange = document.getElementById('api-whatsapp')

if( detectMob() || window.screen.width < 600){
    imageChange.href = mobileUL
}




// Detect mobilde device
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}