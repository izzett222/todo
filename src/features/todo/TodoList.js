import styled from "styled-components";
import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
    console.log(!!todos.length ? 'scroll' : 'none', !todos.length, todos.length)
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
    margin-left: 32px;
    margin-right: 32px;
    max-height: 190px;
    overflow-y: ${({shouldScroll}) => shouldScroll ? 'scroll' : 'none' };
`
const NotTodo = styled.div`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 282px;
    height: 96px;
    text-align: center;
    span {
        width: 200px
    }
    
    background-color: #D9EAE1;
`
export default TodoList;
