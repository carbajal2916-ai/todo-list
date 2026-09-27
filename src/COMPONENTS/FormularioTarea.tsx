import { useState } from 'react';

interface Props {
    onAgregar: (texto: string) => void;
}

export const FormularioTarea = ({ onAgregar }: Props) => {
    const [texto, setTexto] = useState('');

    const handleAgregar = () => {
        if (texto.trim().length === 0) return;
        onAgregar(texto);
        setTexto('');
    };

    return (
        <div className="formulario-tarea">
            <input
                type="text"
                placeholder="Nueva tarea..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAgregar()}
            />
            <button onClick={handleAgregar}>Agregar</button>
        </div>
    );
};