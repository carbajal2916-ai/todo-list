import type { Tarea } from '../TS/tarea-list';
import { TareaItem } from './TareaItem.tsx';

interface Props {
    tareas: Tarea[];
    onEliminar: (id: number) => void;
    onCompletar: (id: number) => void;
}

export const ListaTareas = ({ tareas, onEliminar, onCompletar }: Props) => (
    <ul className="lista-tareas">
        {tareas.map((t) => (
            <TareaItem key={t.id} tarea={t} onEliminar={onEliminar} onCompletar={onCompletar} />
        ))}
    </ul>
);