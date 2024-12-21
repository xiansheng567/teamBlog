const images = [
    '../src/avatar/1.png',
    '../src/avatar/2.png',
    '../src/avatar/3.png',
    '../src/avatar/4.png',
    '../src/avatar/5.png',
    '../src/avatar/6.jpg'
];

let currentIndex = 0;

const avatarContainer = document.getElementById('avatarContainer');
const avatarImg = document.getElementById('avatar');
const backImage = document.createElement('img');

backImage.className = 'avatar-img back'; 
avatarContainer.appendChild(backImage);

function updateImages() {
    avatarImg.src = images[currentIndex];
    backImage.src = images[(currentIndex + 1) % images.length];
}

updateImages(); 

avatarContainer.addEventListener('click', function() {
    avatarContainer.classList.add('flipped'); 
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; 
        updateImages(); 
        avatarContainer.classList.remove('flipped'); 
    }, 600); 
});
