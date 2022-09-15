import { useTodos } from "../hooks/useTodos"


export const Title = () => {

    const {pendingTodos} = useTodos();
    return (
        
        <h1>Todos pendientes: {pendingTodos} </h1>
   
    )
}
