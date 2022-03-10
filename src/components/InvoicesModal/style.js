import styled from "styled-components"

export const Modal = styled.div`
    position: absolute;
    background: #FEFEFF;
    left: 0px;
    min-width: 20%;
    min-height:100vh;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    //z-index: 2;
    display: flex; 
    justify-content: center;
    align-items: center;
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
    max-width: 90%;
    //min-height: 90vh;
`
export const Formulario = styled.form`
    max-width: 90%;
    max-height: 50%;
    .roxo{
        color: #896CFB;
        font-size: 12px;
        font-weight: 700;
    }
    label{
        font-weight: 500;
        opacity: 0.7;
        font-size: 12px;
    }
    .containerFormCity{
    }
    .inputsRegion{
        max-width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }
    .inputsP{
        display: flex;
        flex-direction: column;
    }
    .flex-column{
        display: flex;
    }
    .send{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    input{
        min-height: 50%;
        min-height: 35px;
        margin-bottom: 0.5rem;
        &:focus{
            outline: none;
            border: 1px solid #B06DC5;
        }
    }
`