// Generador de sonido elegante y deslizante para el modal
// Este archivo genera un sonido profesional usando Web Audio API

// Contexto de audio global para mejor rendimiento
let globalAudioContext = null;

// Inicializar contexto de audio
function initAudioContext() {
    if (!globalAudioContext) {
        globalAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return globalAudioContext;
}

function createElegantSound() {
    const audioContext = initAudioContext();
    
    // Configuración del sonido elegante y profesional
    const duration = 0.8; // Duración perfecta para elegancia
    const sampleRate = audioContext.sampleRate;
    const length = sampleRate * duration;
    
    // Crear buffer de audio
    const buffer = audioContext.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    // Generar sonido elegante con toque tecnológico sutil
    for (let i = 0; i < length; i++) {
        const t = i / sampleRate;
        
        // Frecuencias elegantes y profesionales
        const frequency1 = 523.25; // C5 - elegante y clara
        const frequency2 = 659.25; // E5 - armónico perfecto
        const frequency3 = 783.99; // G5 - acorde mayor completo
        
        // Envolvente elegante y suave
        const envelope = Math.exp(-t * 2.5) * (1 - Math.exp(-t * 6)) * (0.7 + 0.3 * Math.sin(t * 8));
        
        // Generar ondas elegantes
        const wave1 = Math.sin(2 * Math.PI * frequency1 * t) * 0.4; // Onda principal elegante
        const wave2 = Math.sin(2 * Math.PI * frequency2 * t) * 0.3; // Armónico perfecto
        const wave3 = Math.sin(2 * Math.PI * frequency3 * t) * 0.2; // Acorde completo
        
        // Toque tecnológico sutil
        const techTouch = 1 + 0.05 * Math.sin(2 * Math.PI * 12 * t); // Modulación muy sutil
        
        // Aplicar envolvente elegante y combinar ondas
        data[i] = (wave1 + wave2 + wave3) * envelope * techTouch * 0.3;
    }
    
    return buffer;
}

// Función para reproducir el sonido de apertura optimizada
function playElegantSound() {
    try {
        const audioContext = initAudioContext();
        
        // Reanudar contexto si está suspendido (requerido por algunos navegadores)
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        
        const buffer = createElegantSound();
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        
        // Reproducir inmediatamente
        source.start(0);
    } catch (error) {
        console.log('Audio no disponible:', error);
    }
}

// Función para crear sonido de cierre elegante y profesional
function createCloseSound() {
    const audioContext = initAudioContext();
    const duration = 0.6; // Duración perfecta para elegancia
    const sampleRate = audioContext.sampleRate;
    const length = sampleRate * duration;
    
    const buffer = audioContext.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < length; i++) {
        const t = i / sampleRate;
        
        // Frecuencias elegantes y profesionales para cierre
        const frequency1 = 392.00; // G4 - elegante y grave
        const frequency2 = 466.16; // A#4 - armónico perfecto
        const frequency3 = 523.25; // C5 - acorde menor elegante
        
        // Envolvente elegante con desvanecimiento suave
        const envelope = Math.exp(-t * 3) * (1 - Math.exp(-t * 8)) * (0.6 + 0.4 * Math.cos(t * 6));
        
        // Generar ondas elegantes
        const wave1 = Math.sin(2 * Math.PI * frequency1 * t) * 0.35; // Onda principal elegante
        const wave2 = Math.sin(2 * Math.PI * frequency2 * t) * 0.25; // Armónico perfecto
        const wave3 = Math.sin(2 * Math.PI * frequency3 * t) * 0.15; // Acorde completo
        
        // Toque tecnológico sutil
        const techTouch = 1 + 0.03 * Math.sin(2 * Math.PI * 10 * t); // Modulación muy sutil
        
        // Aplicar envolvente elegante y combinar ondas
        data[i] = (wave1 + wave2 + wave3) * envelope * techTouch * 0.25;
    }
    
    return buffer;
}

// Función para reproducir el sonido de cierre optimizada
function playCloseSound() {
    try {
        const audioContext = initAudioContext();
        
        // Reanudar contexto si está suspendido
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        
        const buffer = createCloseSound();
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        
        // Reproducir inmediatamente
        source.start(0);
    } catch (error) {
        console.log('Audio no disponible:', error);
    }
}

// Función para inicializar el audio (llamar al cargar la página)
function initAudio() {
    try {
        const audioContext = initAudioContext();
        // Crear un buffer pequeño para "despertar" el contexto de audio
        const buffer = audioContext.createBuffer(1, 1, audioContext.sampleRate);
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start(0);
    } catch (error) {
        console.log('Audio no disponible:', error);
    }
}

// Exportar funciones para uso global
window.playElegantSound = playElegantSound;
window.playCloseSound = playCloseSound;
window.initAudio = initAudio;

// Inicializar audio automáticamente
if (typeof window !== 'undefined') {
    window.addEventListener('load', initAudio);
    // También inicializar en el primer clic del usuario
    document.addEventListener('click', initAudio, { once: true });
}
