import type { FiltroTipo } from '../TS/tareas-utils';

interface Props {
    filtro: FiltroTipo;
    onCambiarFiltro: (filtro: FiltroTipo) => void;
}

export const FiltroTareas = ({ filtro, onCambiarFiltro }: Props) => {
    const opciones: FiltroTipo[] = ['todas', 'pendientes', 'completadas'];

    return (
        <div className="filtro-tareas">
            {opciones.map((op) => (
                <button
                    key={op}
                    className={filtro === op ? 'activo' : ''}
                    onClick={() => onCambiarFiltro(op)}
                >
                    {op.charAt(0).toUpperCase() + op.slice(1)}
                </button>
            ))}
        </div>
    );
};