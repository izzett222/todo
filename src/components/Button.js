import styled from "styled-components/marco"

 const Button = ({ children, ...props }) => {
    return <Wrapper {...props}>{children}</Wrapper>
}
const Wrapper = styled.button`
    border: 0;
    padding: 8px 18px;
    border-radius: 6px;
    color: #DFE8E3;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    display: block;
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
export default Button
