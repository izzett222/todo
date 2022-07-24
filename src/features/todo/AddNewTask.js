import styled from "styled-components/macro"
import addButton from "../../resources/add.svg"

const AddNewTask = ({ add }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            name: event.target[0].value,
            isDone: false
        }
        return add(newTodo)
    }
    return (
        <Container onSubmit={handleSubmit}>
            <label>
                <Input name="todo" placeholder="what is the task name" />
                <Button type="submit"><img src={addButton} alt="button" /><span>create task</span></Button>
            </label>

        </Container>
    )
}
const Input = styled.input`
    border: 0;
    background: transparent;
    font-size: 16px;
    margin-bottom: 12px;
    outline: transparent;
    &::placeholder {
        padding-left: 12px;
        color: #515854;
        font-size: 16px;
    }`
const Container = styled.form`
    label {
        display: flex;
        margin-left: 16px;
        flex-direction: column;
        align-items: center;
    }
`
const Button = styled.button`
    border: 0;
    padding: 8px 18px;
    border-radius: 6px;
    color: #DFE8E3;
    margin-bottom: 32px;
    font-size: 16px;
    background-color: #43AF75;
    transition: cubic-bezier();
    &:hover {
        background-color: #339E64;
    }
    img {
        position: relative;
        top: 3px;
        display: inline-block;
        margin-right: 4px
    }
    
    
`

export default AddNewTask
