const songs = [
    { 
        title: "Haiti", 
        src: "/RACISMO/Musica-mp3/1.mpeg", 
        cover: "/RACISMO/Capas-imgs/1.jpeg", 
        artist: "Caetano Veloso",
        quote: "111 presos indefesos mas presos são quase todos pretos, ou quase pretos, ou quase brancos quase pretos de tão pobres, e pobres são como podres, e todos sabem como se tratam os pretos" 
    },
    { 
        title: "Negro Drama", 
        src: "/RACISMO/Musica-mp3/2.mpeg", 
        cover: "/RACISMO/Capas-imgs/2.jpeg", 
        artist: "Racionais MC's",
        quote: "Negro drama, cabelo crespo e a pele escura a ferida, a chaga, à procura da cura" 
    },
    { 
        title: "A Carne", 
        src: "/RACISMO/Musica-mp3/3.mpeg", 
        cover: "/RACISMO/Capas-imgs/3.jpeg", 
        artist: "Elza Soares",
        quote: "A carne mais barata do mercado é a carne negra." 
    },
    { 
        title: "Zumbi", 
        src: "/RACISMO/Musica-mp3/4.mpeg", 
        cover: "/RACISMO/Capas-imgs/4.jpeg", 
        artist: "Jorge Ben Jorge",
        quote: "Dum lado cana de açúcar do outro lado o cafezal, ao centro senhores sentados vendo a colheita do algodão brancoSendo colhidos por mãos negras" 
    },
    { 
        title: "Senzala e Favela", 
        src: "/RACISMO/Musica-mp3/5.mpeg", 
        cover: "/RACISMO/Capas-imgs/5.jpeg", 
        artist: "Wilson das Neves",
        quote: "Desde a vergonha da escravidão na aflição da senzala se vê separação de cor" 
    },

    { 
        title: "Panis et Circenses", 
        src: "/RACISMO/Musica-mp3/7.mpeg", 
        cover: "/RACISMO/Capas-imgs/7.jpeg", 
        artist: "Os Mutantes",
        quote: "Eu quis cantar minha canção iluminada de sol, soltei os panos sobre os mastros no ar soltei os tigres e os leões nos quintais mas as pessoas na sala de jantar são ocupadas em nascer e morrer" 
    },
    { 
        title: "Preto Demais", 
        src: "/RACISMO/Musica-mp3/8.mpeg", 
        cover: "/RACISMO/Capas-imgs/8.jpeg", 
        artist: "Hugo Ojuara",
        quote: "É que ele é preto demais corre demais, fala demais, sorri demais tá estudando demais, comprando demais viajando demais e assim não dá mais" 
    },
    { 
        title: "Cota não é esmola", 
        src: "/RACISMO/Musica-mp3/10.mpeg", 
        cover: "/RACISMO/Capas-imgs/10.jpeg", 
        artist: "Bia Ferreira",
        quote: "Cota não é esmola, experimenta nascer preto na favela pra você ver, o que rola com preto e pobre não aparece na TV" 
    },
    { 
        title: "O Mundo é um Moinho", 
        src: "/RACISMO/Musica-mp3/11.mpeg", 
        cover: "/RACISMO/Capas-imgs/11.jpeg", 
        artist: "Cartola",
        quote: "o mundo é um moinho, vai triturar teus sonhos, tão mesquinho, vai reduzir as ilusões a pó" 
    },
    { 
        title: "Racistas Otários", 
        src: "/RACISMO/Musica-mp3/12.mpeg", 
        cover: "/RACISMO/Capas-imgs/12.jpeg", 
        artist: "Racionais MC's",
        quote: "O abuso é demais, pra eles tanto faz, não passará de simples fotos nos jornais pois gente negra e carente não muito influente e pouco frequente nas colunas sociais" 
    },
    { 
        title: "Não Deixe o Samba Morrer", 
        src: "/RACISMO/Musica-mp3/13.mpeg", 
        cover: "/RACISMO/Capas-imgs/13.jpeg", 
        artist: "Alcione",
        quote: "Não deixe o samba morrer, não deixe o samba acabar, o morro foi feito de samba de samba para gente sambar" 
    },
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const cover = document.getElementById("cover");
const playPauseBtn = document.getElementById("playPause");
const quote = document.getElementById("quote"); // Novo elemento para o trecho

function loadSong(index) {
    audio.src = songs[index].src;
    title.textContent = songs[index].title;
    subtitle.textContent = songs[index].artist; // Atualiza o nome do cantor
    cover.src = songs[index].cover;
    quote.textContent = songs[index].quote; // Atualiza o trecho
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    }
}

document.getElementById("prev").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = "⏸️";
});

document.getElementById("next").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = "⏸️";
});

playPauseBtn.addEventListener("click", togglePlayPause);

audio.addEventListener("ended", () => {
    document.getElementById("next").click();
});

loadSong(currentSongIndex);

     // Create floating particles
     function createParticles() {
        const container = document.getElementById('particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            
            container.appendChild(particle);
        }
    }

    // Handle form submission
    function handleLogin(event) {
        event.preventDefault();
        
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        let isValid = true;

        // Reset error messages
        document.querySelectorAll('.error-message').forEach(elem => {
            elem.style.display = 'none';
        });

        // Validate email
        if (!isValidEmail(email.value)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        if (password.value.length < 6) {
            showError('passwordError', 'Password must be at least 6 characters');
            isValid = false;
        }

        if (isValid) {
            // Simulated login success
            alert('Login successful! (Demo only)');
            document.getElementById('loginForm').reset();
        }

        return false;
    }

    // Email validation
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Show error message
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Handle social login buttons
    function handleSocialLogin(provider) {
        alert(`${provider} login would be implemented here`);
    }

    // Handle forgot password
    function handleForgotPassword() {
        alert('Password reset would be implemented here');
    }

    // Handle sign up
    function handleSignUp() {
        alert('Sign up would be implemented here');
    }

    // Add mouse move effect for gradient spheres
    document.addEventListener('mousemove', (e) => {
        const spheres = document.querySelectorAll('.gradient-sphere');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        spheres.forEach((sphere, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (0.5 - x) * speed;
            const yOffset = (0.5 - y) * speed;
            
            sphere.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(${1 + (index * 0.1)})`;
        });
    });

    // Add smooth reveal animation for form elements
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize particles
        createParticles();

        // Animate form elements
        const elements = document.querySelectorAll('.form-group, .submit-button, .divider, .social-login, .additional-options');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 * index);
        });

        // Add input focus effects
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.submit-button, .social-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.background = 'rgba(255, 255, 255, 0.4)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.animation = 'ripple 0.6s ease-out';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });