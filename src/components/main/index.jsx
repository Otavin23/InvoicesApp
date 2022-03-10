import React, {useState} from "react"
import Header from "../header"
import * as S from "./style"
import Modal from "../InvoicesModal/index"



const Main = ()=>{

    const [modal, setModal] = useState(false)

    function LoadModal(){
        setModal(!modal)  
    }
    return (
        <S.Load>
            <Header/>
            <S.MainBg>
                {modal && <Modal />}
                <S.Container>
                    <S.InformationCreate>
                        <div className="title-invoices">
                            <h1>Invoices</h1>
                            <p>There are 7 total invaices</p>
                        </div>
                        <div className="buttonsNew">
                            <select>
                                <option>Filter by status</option>
                                <option>Paid</option>
                                <option>Pending</option>
                                <option>Draft</option>
                            </select>
                            <button 
                                onClick={LoadModal}
                            >
                            <div>+</div>
                            New Invaice</button>
                        </div>
                    </S.InformationCreate>
                    <S.ResultCard>
                        <div className="card">
                            <S.ContainerCard>
                                <div className="informationCard">
        
                                    <p id="code"><strong>#</strong>xm9141</p>
                                    <p>Due 20 Sep 2021</p>
                                    <p>Alex Grim</p>
                                </div>
                                <div className="Preview">
                                    <p>£556</p>
                                    <button>
                                        <div></div>
                                        Pending
                                    </button>
                                </div>
                            </S.ContainerCard>
                        </div>
                    </S.ResultCard>
                </S.Container>
            </S.MainBg>
        </S.Load>
    )
}
export default Main 