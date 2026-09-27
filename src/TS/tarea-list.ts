export interface Tarea{
    id: number,
    tarea: string,
    completada: boolean
}

export const listTarea:Tarea[] = [
    {id: 1, tarea: 'lavar mi ropa', completada: false},
    {id: 2, tarea: 'Lavar los trastes', completada: false},
    {id: 3, tarea: 'Estudiar TS', completada: false},
    {id: 4, tarea: 'Hacer mi tarea', completada: false}
]