
const {mongoose}= require('mongoose');
const { RobotModel } = require('./DL/models/robots.model');



// import mongoose from 'mongoose';
// import { RobotModel } from './DL/models/robots.model'; 


  export  const robotsJson = [
        {
            image: "https://example.com/images/robot-basic-model-1.jpg",
            slug: "basic-model-1",
            title: "Starter Bot",
            instructions: "No special setup required. Ready to use out of the box.",
            price: 99.99,
            links: ["https://example.com/manuals/basic-model-1", "https://example.com/specs/basic-model-1"]
        },
        {
            image: "https://example.com/images/robot-cleaning-model-2.jpg",
            slug: "cleaning-model-2",
            title: "AutoCleaner 2024",
            instructions: "Charge for 4 hours. Remote control via mobile app included.",
            price: 299.99,
            links: ["https://example.com/manuals/cleaning-model-2", "https://example.com/specs/cleaning-model-2"]
        },
        {
            image: "https://example.com/images/robot-pet-model-3.jpg",
            slug: "pet-model-3",
            title: "Pet Companion Bot",
            instructions: "Regular updates via Wi-Fi. Interactive features available.",
            price: 199.99,
            links: ["https://example.com/manuals/pet-model-3", "https://example.com/specs/pet-model-3"]
        },
        {
            image: "https://example.com/images/robot-assistant-model-4.jpg",
            slug: "assistant-model-4",
            title: "Home Assistant 3000",
            instructions: "Setup through proprietary software. Voice recognition features.",
            price: 499.99,
            links: ["https://example.com/manuals/assistant-model-4", "https://example.com/specs/assistant-model-4"]
        },
        {
            image: "https://example.com/images/robot-gardening-model-5.jpg",
            slug: "gardening-model-5",
            title: "Garden Helper Bot",
            instructions: "Solar powered. Automated watering schedules.",
            price: 259.99,
            links: ["https://example.com/manuals/gardening-model-5", "https://example.com/specs/gardening-model-5"]
        },
        {
            image: "https://example.com/images/robot-cook-model-6.jpg",
            slug: "cook-model-6",
            title: "Kitchen Cook 500",
            instructions: "Initial setup by certified technicians. Multiple cuisine settings.",
            price: 849.99,
            links: ["https://example.com/manuals/cook-model-6", "https://example.com/specs/cook-model-6"]
        },
        {
            image: "https://example.com/images/robot-security-model-7.jpg",
            slug: "security-model-7",
            title: "SecureBot 2024",
            instructions: "Comprehensive setup required. 24/7 monitoring capabilities.",
            price: 399.99,
            links: ["https://example.com/manuals/security-model-7", "https://example.com/specs/security-model-7"]
        },
        {
            image: "https://example.com/images/robot-entertainment-model-8.jpg",
            slug: "entertainment-model-8",
            title: "Entertain-o-Bot",
            instructions: "Plug and play. Supports multiple entertainment modules.",
            price: 279.99,
            links: ["https://example.com/manuals/entertainment-model-8", "https://example.com/specs/entertainment-model-8"]
        },
        {
            image: "https://example.com/images/robot-education-model-9.jpg",
            slug: "education-model-9",
            title: "EduBot",
            instructions: "Designed for educational purposes. Interactive learning sessions.",
            price: 319.99,
            links: ["https://example.com/manuals/education-model-9", "https://example.com/specs/education-model-9"]
        },
        {
            image: "https://example.com/images/robot-industrial-model-10.jpg",
            slug: "industrial-model-10",
            title: "Industry Pro 4000",
            instructions: "Industrial setup required. High efficiency and durability.",
            price: 1029.99,
            links: ["https://example.com/manuals/industrial-model-10", "https://example.com/specs/industrial-model-10"]
        }
    ];








export const addRobotsToDB = async () => {
    try {
        console.log('Conectando a la base de datos MongoDB...');
        await mongoose.connect('mongodb://localhost:27017/robot-store', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a la base de datos MongoDB.');

        // Insertar múltiples registros en la colección
        const result = await RobotModel.insertMany(robots);
        console.log(`${result.length} robots agregados exitosamente.`);
    } catch (error) {
        console.error('Error al agregar datos a la base de datos:', error);
    } finally {
        // Cerrar la conexión a la base de datos
        await mongoose.disconnect();
        console.log('Desconectado de la base de datos.');
    }
};

// Ejecutar la función
// addRobotsToDB();
