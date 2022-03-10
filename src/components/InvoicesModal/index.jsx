import React from "react"
import * as S from "./style"

const InvoicesModal = () => {

    

  return (
    <S.Modal>
      <div className="container">
        <form>
            <label>Street Address</label>
            <input type="text" placeholder="Exemplo"
/>        </form>
      </div>
    </S.Modal>
  )
}
export default InvoicesModal
