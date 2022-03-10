import styled from "styled-components"

export const Load = styled.div`
    display:flex;
`

export const MainBg = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content:center ;
    align-items: center;
    position: relative;
`
export const Container = styled.div`
    width: 60%;
    height: 85vh;
`
export const InformationCreate = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center ;
    flex-wrap: wrap;    .title-invoices{
        h1{
            letter-spacing:1px;
        }
        p{
            color: rgb(167,171,192);
            font-size: 12px;
            opacity:0.6 ;
        }
    }
    .buttonsNew{
        display: flex;
        width: 40%;
        select{
            border: none;
            margin-right: 2rem;
            color: #0D0F16;
            font-weight: 600;
        }
        button{
            display: flex;
            align-items:center;
            justify-content: space-around;
            background: #7D5DFB;
            color: #F2FFFF;
            width: 55%;
            height: 3rem;
            font-weight:600;
            font-size: 14px;
            border-radius: 3rem;
            cursor: pointer;
            &:hover{
                transition: all 0.05s ease; 
                opacity: 0.8;
            }
            div{
                display: flex;
                align-items:center ;
                justify-content:center ;
                width: 30px;
                height: 30px;
                background: white;
                color: #7D5DFB;
                border-radius:50% ;
                font-size: 18px;
            }
            border: none;
        }
    }
`

export const ResultCard = styled.section`
    background: red;
    width: 100%;
    .card{
        width: 100%;
        height: 5rem;
        background: rgb(255, 255, 255);
        display:flex ;
        justify-content:center;
        align-items:center ;
    }
`
export const ContainerCard = styled.div`
    //background-color: red;
    width: 90%;
    height: 100%;
    display: flex;
    align-items:center ;
    justify-content: space-between;
    .informationCard{
        display: flex;
        justify-content:space-between ;
        width: 40%;
        #code{
            color: rgb(12, 14, 22);
            font-weight:bold;
            font-size:14px ;
            &::first-letter{
                color: rgb(126, 136, 195);
                font-size: 15px;
            }
        }
        p{
            color: rgb(136, 142, 176);
            font-size: 0.75rem;
            letter-spacing: -0.25px;
            transition:color 0.3s ease 0s;
        }
    }
    .Preview{
        display: flex;
        justify-content:space-between ;
        //ackground: blue ;
        width:25% ;
        p{
            font-size: 16px;
            font-weight: bold;
        }
        button{
            display: flex;
            align-items:center ;
            justify-content:space-evenly ;
            div{
                width: 10px;
                height: 10px;
                background:rgb(255,143,0);
                border-radius: 50%;
            }
            border: none;
            border-radius: 0.3rem;
            width: 60%;
            height: 2.5rem;
            color: rgb(255,143,0);
            font-weight:bold;
            line-height: 1.12px;
            text-transform:capitalize ;
            font-size: 0.75rem;
            background: #FEF9F0;
        }
    }
`