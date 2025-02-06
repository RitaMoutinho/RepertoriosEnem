const songs = [
    { 
        title: "O Que é, o Que é?", 
        src: "/DIREITOSHUMANOS/Musica-mp3/1.mpeg", 
        cover: "/DIREITOSHUMANOS/Capas-imgs/1.jpeg", 
        artist: "Gonzaguinha",
        quote: "Viver e não ter a vergonha de ser feliz, cantar, e cantar, e cantar a beleza de ser um eterno aprendiz" 
    },
    { 
        title: "Que País É Esse?", 
        src: "/DIREITOSHUMANOS/Musica-mp3/2.mpeg", 
        cover: "/DIREITOSHUMANOS/Capas-imgs/2.jpeg", 
        artist: "Legião Urbana",
        quote: "Nas favelas, no senado sujeira pra todo lado, ninguém respeita a constituição mas todos acreditam no futuro da nação" 
    },
    { 
        title: "Brasil", 
        src: "/DIREITOSHUMANOS/Musica-mp3/3.mpeg", 
        cover: "/DIREITOSHUMANOS/Capas-imgs/3.jpeg", 
        artist: "Cazuza",
        quote: "Brasil, mostra a tua cara, quero ver quem paga pra gente ficar assim." 
    },
    { 
        title: "Panis et Circenses", 
        src: "/DIREITOSHUMANOS/Musica-mp3/4.mpeg", 
        cover: "/DIREITOSHUMANOS/Capas-imgs/4.jpeg", 
        artist: "Os Mutantes",
        quote: "Eu quis cantar minha canção iluminada de sol, soltei os panos sobre os mastros no ar soltei os tigres e os leões nos quintais mas as pessoas na sala de jantar são ocupadas em nascer e morrer" 
    },
    { 
        title: "Brasil de Quem", 
        src: "/DIREITOSHUMANOS/Musica-mp3/5.mpeg", 
        cover: "/DIREITOSHUMANOS/Capas-imgs/5.jpeg", 
        artist: "MC Sid",
        quote: "O Brasil é o único país do mundo em que toda vez que tem greve o povo só põe a culpa no povo" 
    },
    { 
        title: "Pra Não Dizer Que Não Falei das Flores", 
        src: "/DIREITOSHUMANOS/Musica-mp3/6.mpeg", 
        cover: "/DIREITOSHUMANOS/Capas-imgs/6.jpeg", 
        artist: "Geraldo Vandré",
        quote: "Caminhando e cantando e seguindo a canção somos todos iguais, braços dados ou não, nas escolas, nas ruas, campos, construções, caminhando e cantando e seguindo a canção" 
    },
    { 
        title: "Cálice", 
        src: "/DIREITOSHUMANOS/Musica-mp3/7.mpeg", 
        cover: "/DIREITOSHUMANOS/Capas-imgs/7.jpeg", 
        artist: "Chico Buarque",
        quote: "Melhor seria ser filho da outra, outra realidade menos morta, tanta mentira, tanta força bruta" 
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