import { useState } from 'react';
import { filtrarTareas, type FiltroTipo } from '../TS/tareas-utils';
import { useTareas } from '../TS/useTareas';
import { FormularioTarea } from './FormularioTarea';
import { FiltroTareas } from './FiltroTareas';
import { ListaTareas } from './ListaTareas';
import '../CSS/todo.css';

export const TodoApp = () => {
    const { tareas, agregarTarea, eliminarTarea, marcarCompletada } = useTareas();
    const [filtro, setFiltro] = useState<FiltroTipo>('todas');

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