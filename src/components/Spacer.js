import styled from "styled-components/macro";

const Spacer = ({size=1}) => {
    return <Container size={size}/>
} 
const Container = styled.div`
    width: 0px;
    height: ${p => 16 * p.size + "px"};
`
export default Spacer;