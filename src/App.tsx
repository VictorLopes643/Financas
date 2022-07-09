import { useState } from "react";
import Modal from 'react-modal'
import { DashBoard } from "./Components/DashBoard/DashBoar";
import { Header } from "./Components/Header/Header";
import { NewModal } from "./Components/NewModal/NewModal";
import { TransactionsContext, TransactionsProvider } from "./transactionsContext";


Modal.setAppElement('#root')

export function App() {
  
  const [ openModal, setOpenModal] = useState(false);

  function handleOpenModal(){
    setOpenModal(true);
  }
  
  function handleCloseModal(){
    setOpenModal(false);

  }

    return (
      <TransactionsProvider>
 
        <Header onOpenNewModal={handleOpenModal}/>
        <DashBoard />
        <NewModal isOpen={openModal} isRequestClose={handleCloseModal} /> 
      </TransactionsProvider>
  )
}
