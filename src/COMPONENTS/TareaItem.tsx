import type { Tarea } from '../TS/tarea-list';

interface Props {
    tarea: Tarea;
    onEliminar: (id: number) => void;
    onCompletar: (id: number) => void;
}

export const TareaItem = ({ tarea, onEliminar, onCompletar }: Props) => {
    let clase = 'tarea-item';
    let textoEstado = 'Pendiente';
    let textoBoton = 'Completar';

    if (tarea.completada) {
        clase = 'tarea-item completada';
        textoEstado = 'Completada';
        textoBoton = 'Deshacer';
    }

    return (
        <li className={clase}>
            <span className="tarea-texto">{tarea.tarea}</span>
            <span className="tarea-estado">{textoEstado}</span>
            <button className="btn-completar" onClick={() => onCompletar(tarea.id)}>
                {textoBoton}
            </button>
            <button className="btn-eliminar" onClick={() => onEliminar(tarea.id)}>🗑</button>
        </li>
    );
};