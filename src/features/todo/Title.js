import { useState } from "react";
import styled from "styled-components";
import newTitle from '../../resources/newtitle.svg'
import { Loader } from "../../components/loader";
import { useAuth } from "../../auth";

const Title = ({ handleTitle, title, isLoading }) => {
    const [updateTitle, setUpdateTime] = useState(false)
    const [value, setValue] = useState(title)
    const handleUpdateTitle = () => setUpdateTime(true)
    const handleInput = (e) => setValue(e.target.value)
    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        const data = { title: e.target[0].value }
        handleTitle(data)
    }
    return (
        <Container onSubmit={handleSubmit} >
            <Input placeholder="Title" value={value} onChange={handleInput} required maxLength={20} onFocus={handleUpdateTitle} />
            {updateTitle && <button type="submit">{isLoading ? <Loader /> : <img src={newTitle} alt="add new title" />}</button>}
        </Container>
    )

}
const Container = styled.form`
display: flex;
button {
    padding: 0;
    border: 0;
    height: fit-content;
    position: relative;
    display: block;
    right: 32px;
    top: 28px;
    &:hover {
        box-shadow: 3px 4px 12px rgba(217, 236, 226, 0.66);
        cursor: pointer;
    }
}
`
const Input = styled.input`
    border: 0;
    background: transparent;
    display: block;
    font-size: 24px;
    font-weight: 400;
    color: #515854;
    margin-top: 24px;
    margin-left: 32px;
    margin-bottom: 16px;
    outline: transparent;
    &::placeholder {
        color: #515854;
        opacity: 0.70
    }
`
export default Title;
