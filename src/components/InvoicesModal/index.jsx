import React from "react"
import * as S from "./style"

const InvoicesModal = () => {
  const location = ["City", "Post Code", "Country"]

  return (
    <S.Modal>
      <S.Container>
        <S.Formulario>
        <h2>Create Invoice</h2>
          <div className="containerFormCity">
            <div className="inputsP">
              <p className="roxo">Bill From</p>
              <label>Street Address</label>
              <input type="text" />
            </div>
            <div className="inputsRegion">
              <div>
                <label>City</label>
                <input type="text" />
              </div>
              <div>
                <label>Post Code</label>
                <input type="text" />
              </div>
              <div>
                <label>Country</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="billTo inputsP">
            <p className='roxo'>Bill To</p>
            <label>Client's sName</label>
            <input type="text" />
            <label>Client's Email</label>
            <input type="email" placeholder="e.g.email@example.com" />
            <label>Street Address</label>
            <input type="text" />
            <div className="flex-column">
              {location.map((el,index)=> (
                <>
                <div key={index}>
                  <label>{el}</label>
                  <input type="text" />
                </div>
                </>
              ))}
            </div>
            <label>Description</label>
            <input type="text" />
          </div>
          <div className='send'>
            <p>Discord</p>
            <div>
              <button className="save as Draft">
                Save as Draft 
              </button>
              <button>
                Save & Send
              </button>
            </div>
          </div>
        </S.Formulario>
      </S.Container>
    </S.Modal>
  )
}
export default InvoicesModal
