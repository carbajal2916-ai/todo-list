import { useState, useEffect } from 'react';
import type { Tarea } from './tarea-list';
import { listTarea } from './tarea-list';

export const useTareas = () => {
    const [tareas, setTareas] = useState<Tarea[]>(listTarea);

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    const agregarTarea = (texto: string) => {
        setTareas([...tareas, { id: Date.now(), tarea: texto, completada: false }]);
    };

    const eliminarTarea = (id: number) => {
        setTareas(tareas.filter((t) => t.id !== id));
    };

    const marcarCompletada = (id: number) => {
        setTareas(tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)));
    };

    return { tareas, agregarTarea, eliminarTarea, marcarCompletada };
};