import { useContext } from "react";

import { TransactionsContext } from "../../transactionsContext";
import { Container } from "./styles";



export function TransactionsTable(){
  const { transactions } = useContext(TransactionsContext)
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
       {transactions.map(transaction => 
        (
          <tr>
          <td>{transaction.title}</td>
          <td className={transaction.type}>
            {new Intl.NumberFormat('pt-BR', {
              style:'currency',
              currency: 'BRL'
            }).format(transaction.amount)}
            </td>
          <td>{transaction.category}</td>
          <td>
          {new Intl.DateTimeFormat('pt-BR').format(
            new Date(transaction.createAt)
          )}
          </td>
        </tr>
        )
       )}
         
        </tbody>
      </table>
    </Container>
  )
}