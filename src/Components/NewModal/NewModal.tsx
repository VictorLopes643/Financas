import Modal from 'react-modal'
import { FormEvent, useState, useContext } from 'react';
import { TransactionsContext } from '../../transactionsContext';
import { api } from '../../service/api';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Buttons, Container, RadioBox } from './styles';
import '../../global.ts'
interface InewModal {
  isOpen: boolean;
  isRequestClose: () => void;
}

export function NewModal({ isOpen, isRequestClose}:InewModal){
  const { createTransaction } = useContext(TransactionsContext)
  const [ type, setType ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState(0);
  const [ category, setCategory ] = useState('');
  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    await createTransaction({
      title,
      amount, 
      category,
      type,
      createAt: new Date()
    })
    isRequestClose()
    setTitle('')
    setType('deposit')
    setAmount(0)
    setCategory('')
  }
  return (

    <Modal 
      isOpen={isOpen}
      onRequestClose={isRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
    <button 
      type='submit'
      onClick={isRequestClose}
      className="modal-close"
    >
      <img src={closeImg} alt="Fechar" />
    </button>
        <Container onSubmit={handleSubmit}>
          <h1>Cadastrar Transação</h1>
          <input 
            placeholder='Titulo'
            value={title}
            onChange={event => setTitle(event.target.value) }
          />
          <input 
            placeholder='Valor'
            type="number"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />
          <Buttons>
            <RadioBox 
              type='button'
              onClick={() => {setType('deposit');}} 
              isActive={type === 'deposit'}
              activeColor='green'
              
              >
              <img src={incomeImg} />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox 
              activeColor='red'
              type='button'
              onClick={() => {setType('withdraw');}} 
              isActive={type === 'withdraw'}
              >
              <img src={outcomeImg}/>
              <span>Saida</span>
            </RadioBox>
          </Buttons>
          <input
            placeholder='Categoria'
            value={category}
            onChange={event => setCategory(event.target.value) }
          />
          <button type="submit">
            Cadastrar
          </button>

        </Container>

    </Modal> 
  )
}