import styled from "styled-components/macro";

const Input = () => {
    return <Wrapper placeholder="what is the task name" />
}
const Wrapper = styled.input`
    border: 0;
    background: transparent;
    font-size: 16px;
    &::placeholder {
        color: #515854
    }
`
export default Input
