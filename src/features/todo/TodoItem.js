import styled from "styled-components";

const TodoItem = ({ todo }) => {
    return (
        <Container>
            <Checkbox type="checkbox"/><Todo>{todo}</Todo>
        </Container>
    ) 
}
const Checkbox = styled.input`
    position: relative;
    top: 4px;
    height: 20px;
    width: 20px;
    border-radius: 6px;
    background-color: #DFE8E3;
    border: 1px solid #A7B2AC
`
const Container = styled.label`
    display: flex;
    margin-bottom: 7px;
`
const Todo = styled.span`
    margin-left: 8px;
    flex: 1;
    font-size: 16px;
    color: #47514C;
    font-weight: 400;
    display: inline-block;
`
export default TodoItem;
