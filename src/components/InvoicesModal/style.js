import styled from "styled-components"

export const Modal = styled.div`
    position: absolute;
    background: red;
    left: 0px;
    min-height:100vh;
    z-index: 100;
    &::before{
        content: "";
        height:100vh;
        width:100vw;
        position: absolute;
        background: rgba(0,0,0,0.2);
        z-index: -1;
    }   
`
export const Container = styled.div`

    
`