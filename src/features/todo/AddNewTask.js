import styled from "styled-components/macro"
import addButton from "../../resources/add.svg"
import { Loader } from "../../components/loader"

const AddNewTask = ({ add, isLoading }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            name: event.target[0].value,
            isDone: false
        }

        add(newTodo)
        event.target[0].value = ""
    }
    return (
        <Container onSubmit={handleSubmit}>
            <label>
                <Input name="todo" placeholder="what is the task name" required pattern="^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$" />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? <Loader className="loading" /> : <img src={addButton} alt="button" />}
                    <span>{isLoading ? 'creating' : 'create task'}</span>
                </Button>
            </label>

        </Container>
    )
}
const Input = styled.input`
    border: 0;
    background: transparent;
    font-size: 16px;
    margin-bottom: 8px;
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
    margin-bottom: 16px;
    font-size: 16px;
    background-color: #43AF75;
    transition: cubic-bezier();
    .loading {
        position: relative;
        top: 5px;
    }
    &:hover {
        background-color: #339E64;
  
    }
    &:disabled {
        background: #E8F2ED;
        span {
            color: #75827B;
            margin-left: 4px;
        } 
    }
    img {
        position: relative;
        top: 3px;
        display: inline-block;
        margin-right: 4px
    }
    
    
`

export default AddNewTask
