import styled from "styled-components"


export const HFundo = styled.header`
    background-color: #373B53;
    height: 100vh;
    width: 10%;
    border-radius: 0px 20px 20px 0px;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
`
export const Logo = styled.div` 
    background-color: rgb(125,93,251);
    width: 100%;
    height: 7rem;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius: 0px 20px 20px 0px;
    img{
        width:40% ;
        height: 40%;
    }
` 
export const ProfileInformation = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    button{
        border: none;
        background: transparent;
        cursor: pointer;
        text-align:center;
        width:100%;
        height: 5rem;
        &:nth-child(2){
            border-top: 1px solid rgb(73, 78, 110);
        }
        img{
            max-width:40px;
            max-height:40px;
            border-radius: 50%;
        }
    }
` 