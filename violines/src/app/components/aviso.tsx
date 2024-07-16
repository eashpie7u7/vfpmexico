"use client";
import React from 'react';

interface SocialMediaLink {
  name: string;
  url: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Twitter', url: 'https://twitter.com' },
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
      <ul>
        {socialMediaLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu email" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Aviso;