const songs = [
    { 
        title: "Construção", 
        src: "/DESIGUALDADE/Musica-mp3/1.mpeg", 
        cover: "/DESIGUALDADE/Capas-imgs/1.jpeg", 
        artist: "Chico Buarque",  // Adicione a vírgula aqui
        quote: "Morreu na contramão atrapalhando o tráfego" // Exemplo de trecho
    },
    { 
        title: "Cálice", 
        src: "/DESIGUALDADE/Musica-mp3/2.mpeg", 
        cover: "/DESIGUALDADE/Capas-imgs/2.jpeg", 
        artist: "Chico Buarque",
        quote: "Melhor seria ser filho da outra, outra realidade menos morta, tanta mentira, tanta força bruta" // Exemplo de trecho
    },
    { 
        title: "Que País É Esse?", 
        src: "/DESIGUALDADE/Musica-mp3/3.mpeg", 
        cover: "/DESIGUALDADE/Capas-imgs/3.jpeg", 
        artist: "Legião Urbana",
        quote: "Nas favelas, no Senado, sujeira pra todo lado ninguém respeita a Constituição mas todos acreditam no futuro da nação" // Exemplo de trecho
    },
    { 
        title: "Brasil", 
        src: "/DESIGUALDADE/Musica-mp3/4.mpeg", 
        cover: "/DESIGUALDADE/Capas-imgs/4.jpeg", 
        artist: "Cazuza",
        quote: "Brasil mostra a tua cara, quero ver quem paga pra gente ficar assim" // Exemplo de trecho
    },
    { 
        title: "Admirável Gado Novo", 
        src: "/DESIGUALDADE/Musica-mp3/5.mpeg", 
        cover: "/DESIGUALDADE/Capas-imgs/5.jpeg", 
        artist: "Zé Ramalho",
        quote: "É duro tanto ter que caminhar e dar muito mais do que receber" // Exemplo de trecho
    },
    { 
        title: "Homem na Estrada", 
        src: "/DESIGUALDADE/Musica-mp3/6.mpeg", 
        cover: "/DESIGUALDADE/Capas-imgs/6.jpeg", 
        artist: "Racionais MC’s",
        quote: "Desempregado então com má reputação, viveu na detenção, ninguém confia não, e a vida desse homem para sempre foi danificada, um homem na estrada" // Exemplo de trecho
    },
    { 
        title: "Diário de um Detento", 
        src: "/DESIGUALDADE/Musica-mp3/7.mpeg", 
        cover: "/DESIGUALDADE/Capas-imgs/7.jpeg", 
        artist: "Racionais MC’s",
        quote: "Cada detento uma mãe, uma crença, cada crime uma sentença, cada sentença um motivo" // Exemplo de trecho
    },
    { 
        title: "O Mundo é um Moinho", 
        src: "/DESIGUALDADE/Musica-mp3/8.mpeg", 
        cover: "/DESIGUALDADE/Capas-imgs/8.jpeg", 
        artist: "Cartola",
        quote: "o mundo é um moinho, vai triturar teus sonhos, tão mesquinho, vai reduzir as ilusões a pó" // Exemplo de trecho
    },
    { 
        title: "Favela Vive 5", 
        src: "/DESIGUALDADE/Musica-mp3/9.mpeg", 
        cover: "/DESIGUALDADE/Capas-imgs/9.jpeg",
        artist: "Major RD, MC Hariel, MC Marechal e Leci Brandão",
        quote: "Tu vê o professor humilhado dentro da sala de aula por um salário de esmola enquanto o mundo enriquece e idolatra influencer que faz vídeo pro Instagram pra ficar te indicando loja" // Exemplo de trecho
    },
    { 
        title: "Meu Guri", 
        src: "/DESIGUALDADE/Musica-mp3/10.mpeg", 
        cover: "/DESIGUALDADE/Capas-imgs/10.jpeg", 
        artist: "Chico Buarque",
        quote: "Já foi nascendo com cara de fome e eu não tinha nem nome pra lhe dar" // Exemplo de trecho
    },
    // Continue para as outras músicas, adicionando vírgulas e trechos
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