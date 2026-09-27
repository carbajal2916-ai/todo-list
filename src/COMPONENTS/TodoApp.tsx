import { useState, useEffect } from 'react';
import type { Tarea } from '../TS/tarea-list';
import { listTarea } from '../TS/tarea-list';
import { filtrarTareas, type FiltroTipo } from '../TS/tareas-utils';
import { FormularioTarea } from './FormularioTarea';
import { FiltroTareas } from './FiltroTareas';
import { ListaTareas } from './ListaTareas.tsx';
import '../CSS/todo.css';

export const TodoApp = () => {
    const [tareas, setTareas] = useState<Tarea[]>(listTarea);
    const [filtro, setFiltro] = useState<FiltroTipo>('todas');

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

    return (
        <div className="todo-container">
            <h1 className="todo-title">Mi Lista de Tareas</h1>
            <FormularioTarea onAgregar={agregarTarea} />
            <FiltroTareas filtro={filtro} onCambiarFiltro={setFiltro} />
            <ListaTareas
                tareas={filtrarTareas(tareas, filtro)}
                onEliminar={eliminarTarea}
                onCompletar={marcarCompletada}
            />
        </div>
    );
};