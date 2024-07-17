"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface SocialMediaLink {
    name: string;
    url: string;
}

const socialMediaLinks: SocialMediaLink[] = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
];

const Aviso: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí manejarías el envío del formulario
        alert('Formulario enviado');
    };

    return (
        <div className="bg-azulclaro w-full h-96 flex flex-row">
            <div className="flex flex-col px-20 mt-8 space-y-4 w-1/2">
                <p className="text-white font-bold text-2xl">Quiénes somos</p>
                <p className="text-white font-bold text-2xl">Modelos de aprendizaje</p>
                <p className="text-white font-bold text-2xl">Comunidad</p>
                <p className="text-white font-bold text-2xl">Campañas</p>
                <p className="text-white font-bold text-2xl">Participa</p>
                <div className="flex space-x-4 mt-8">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2">
                        <FontAwesomeIcon icon={faFacebook} className="text-azulclaro text-6xl" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2">
                        <FontAwesomeIcon icon={faInstagram} className="text-azulclaro text-6xl" />
                    </a>
                </div>
            </div>
            <div className="flex flex-col justify-center px-20 w-1/2">
                <div className="bg-gray-200 p-4 rounded-lg w-3/4 h-80">
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                        <input className="p-2 rounded-lg" type="text" placeholder="Tu nombre" required />
                        <input className="p-2 rounded-lg" type="email" placeholder="Tu email" required />
                        <input className="p-2 rounded-lg" type="text" placeholder="Tu teléfono" required />
                        <input className="p-2 rounded-lg" type="text" placeholder="¿En qué te podemos ayudar?" required />
                        <button className="p-2 bg-azulfuerte text-white rounded" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Aviso;
