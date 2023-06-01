const windowFeatures = "left=100,top=100,width=320,height=520";
const background = document.getElementById("background");

var images = ["inspo.jpg", "CAPTAINE_MATTHEW.jpg", "faculty2088_small_2.jfif"]

background.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;

for (var i = 0; i < 2; i++) {
    downloadImage("inspo.jpg");
        async function downloadImage(imageSrc) {
            const image = await fetch(imageSrc);
            const imageBlog = await image.blob();
            const imageURL = URL.createObjectURL(imageBlog);

            const link = document.createElement('a')
            link.href = imageURL;
            link.download = 'inspiration.jpg'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    window.open(document.URL, '_blank', `location=yes,left=${Math.random() * 500},top=${Math.random() * 500},height=570,width=520,scrollbars=yes,status=yes`);
}
