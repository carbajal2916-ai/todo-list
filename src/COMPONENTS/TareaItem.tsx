import type { Tarea } from '../TS/tarea-list';

interface Props {
    tarea: Tarea;
    onEliminar: (id: number) => void;
    onCompletar: (id: number) => void;
}

export const TareaItem = ({ tarea, onEliminar, onCompletar }: Props) => (
    <li className={`tarea-item ${tarea.completada ? 'completada' : ''}`}>
        <span className="tarea-texto">{tarea.tarea}</span>
        <span className="tarea-estado">{tarea.completada ? 'Completada' : 'Pendiente'}</span>
        <button className="btn-completar" onClick={() => onCompletar(tarea.id)}>
            {tarea.completada ? 'Deshacer' : 'Completar'}
        </button>
        <button className="btn-eliminar" onClick={() => onEliminar(tarea.id)}>🗑</button>
    </li>
);