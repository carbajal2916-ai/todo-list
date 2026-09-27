import type { Tarea } from './tarea-list';

export type FiltroTipo = 'todas' | 'pendientes' | 'completadas';

export const filtrarTareas = (tareas: Tarea[], filtro: FiltroTipo): Tarea[] => {
    if (filtro === 'todas') return tareas;
    return tareas.filter((t) => (filtro === 'pendientes' ? !t.completada : t.completada));
};