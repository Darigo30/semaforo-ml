
const network = new brain.NeuralNetwork();

// Datos de entrenamiento
const data = [
    { input: [0.25, 0.2], output: [0] },  // 6 AM, tráfico ligero, semáforo en verde
    { input: [0.3, 0.5], output: [1] },   // 8 AM, tráfico pesado, semáforo en rojo
    { input: [0.5, 0.8], output: [0] },   // 2 PM, tráfico moderado, semáforo en verde
    { input: [0.75, 0.6], output: [1] },   // 6 PM, tráfico pesado, semáforo en rojo
    { input: [0.9, 0.9], output: [0] }   // 10 PM, tráfico moderado, semáforo en verde
];

network.train(data);
console.log("Red entrenada", network.train(data));
function updateTrafficLight(output) {
    
    const redLight = document.getElementById('red');
    const greenLight = document.getElementById('green');

    // Resetear todos los semáforos a gris
    redLight.style.backgroundColor = 'grey';
    greenLight.style.backgroundColor = 'grey';

    // Lógica para cambiar colores basado en la salida
    red.style.backgroundColor = output[0] > 0.5 ? 'red' : 'grey';
    yellow.style.backgroundColor = output[0] > 0.5 && output[0] <= 0.75 ? 'yellow' : 'grey';
    green.style.backgroundColor = output[0] <= 0.5 ? 'green' : 'grey';
}

// Simular cambios en la densidad de tráfico y actualizar el semáforo cada 5 segundos
setInterval(() => {
    const currentHour = new Date().getHours();
    const normalizedHour = currentHour / 24;
    const randomDensity = Math.random(); // Generar una densidad de tráfico aleatoria
    const output = network.run([normalizedHour, randomDensity]);

    console.log(`Hora: ${currentHour}, Densidad: ${randomDensity}`);
    console.log("salida de la red", output);
    updateTrafficLight(output);
}, 5000);
