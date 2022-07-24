import styled from "styled-components";

const Title = ({handleTitle}) => {
    return (
        <Container placeholder="Title" onChange={handleTitle} />
    )

}

const Container = styled.input`
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
