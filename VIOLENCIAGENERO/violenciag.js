const songs = [
    { 
        title: "Pagu", 
        src: "/VIOLENCIAGENERO/Musica-mp3/1.mpeg", 
        cover: "/VIOLENCIAGENERO/Capas-imgs/1.jpeg", 
        artist: "Rita Lee",  
        quote: "Porque nem toda feiticeira é corcunda nem toda brasileira é bunda, meu peito não é de silicone, sou mais macho que muito homem" 
    },
    { 
        title: "Mulher do Fim do Mundo", 
        src: "/VIOLENCIAGENERO/Musica-mp3/2.mpeg", 
        cover: "/VIOLENCIAGENERO/Capas-imgs/2.jpeg", 
        artist: "Elza Soares",
        quote: "Na avenida, deixei lá a pele preta e a minha voz, na avenida, deixei lá a minha fala, minha opinião, a minha casa, minha solidão" 
    },
    { 
        title: "Jack", 
        src: "/VIOLENCIAGENERO/Musica-mp3/3.mpeg", 
        cover: "/VIOLENCIAGENERO/Capas-imgs/3.jpeg", 
        artist: "Nocivo Shomon",
        quote: "Eterno é o trauma na alma violentada" 
    },
    { 
        title: "Rosas", 
        src: "/VIOLENCIAGENERO/Musica-mp3/4.mpeg", 
        cover: "/VIOLENCIAGENERO/Capas-imgs/4.jpeg", 
        artist: "Atitude Feminina",
        quote: "Hoje meu amor veio me visitar e trouxe rosas para me alegrar e com lágrimas pede pra voltar. Hoje o perfume eu não sinto mais meu amor já não me bate mais, infelizmente eu descanso em paz" 
    },
    // Continue para outras músicas, se necessário
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