import {Children, createContext, useEffect, useState, ReactNode} from 'react';
import { api } from './service/api';


interface ITransactions {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createAt: Date
}

interface ItransactionProvider {
  children:ReactNode
}
interface ItransactionsContext {
  transactions: ITransactions[];
  createTransaction: (transaction: TransactionIput) => Promise<void>;
}

type TransactionIput = Omit<ITransactions, 'id' >;

export const TransactionsContext = createContext<ItransactionsContext>(
  {} as ItransactionsContext
  );

export function TransactionsProvider({children} : ItransactionProvider){
  const [ transactions, setTransactions ]  =useState<ITransactions[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  })

   async function createTransaction(transactionInput: TransactionIput){
    const response =   await api.post('/transactions', transactionInput)
    const { transaction } = response.data;
    setTransactions([
      ...transaction, transactions
    ]);
    }
  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}