import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionTable";
import { Container } from "./styles";

export function DashBoard(){
  return (
    <Container>
      <Summary />
    <TransactionsTable />
    </Container>
  )
}