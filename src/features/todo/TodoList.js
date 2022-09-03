import styled from "styled-components";
import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
    return (
        <Container shouldScroll = {!!todos.length}>
            {!todos.length ? (<NotTodo><span>You don’t have any task to complete</span></NotTodo>) :
            (<>
                {todos.map((task, id) => <TodoItem key={id} todo={task.name} />)}
            </>)}

        </Container>
    )

}
const Container = styled.div`
    width: auto;
    margin-left: 16px;
    margin-right: 16px;
    flex: 1;
    height: 190px;
    overflow: auto;
`
const NotTodo = styled.div`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 96px;
    text-align: center;
    span {
        width: 200px
    }
    
    background-color: #D9EAE1;
`
export default TodoList;
