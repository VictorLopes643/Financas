import { Container } from "./styles";
import { SummaryCard } from "./SummaryCard/SummaryCard";
import incomeImg from "../../assets/income.svg"
import outimg from "../../assets/outcome.svg"
import totalimg from "../../assets/total.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../transactionsContext";

export function Summary() {

  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else{
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  },
  {
    deposits: 0,
    total: 0,
    withdraw:0,
  })
  
  return(
    <Container>
      <SummaryCard  type="Entrada" img={incomeImg} value={summary.deposits} />
      <SummaryCard   type="Saida" img={outimg} value={summary.withdraw}/>
      <SummaryCard isGreen type="Total" img={totalimg} value={summary.total}/>
    </Container>
  )
}