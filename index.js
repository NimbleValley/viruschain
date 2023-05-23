const windowFeatures = "left=100,top=100,width=320,height=520";
const background = document.getElementById("background");

var images = ["inspo.jpg", "CAPTAINE_MATTHEW.jpg", "faculty2088_small_2.jfif"]

background.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;

for (var i = 0; i < 2; i++) {
    window.open(document.URL, '_blank', `location=yes,left=${Math.random() * 500},top=${Math.random() * 500},height=570,width=520,scrollbars=yes,status=yes`);
}