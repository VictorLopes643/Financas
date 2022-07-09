import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './global.ts'
import { createServer, Model } from 'miragejs';
import { GlobalStyle } from './global';

createServer({

  models:{
    transaction:Model,

  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title: 'Coca Cola',
          amount: 3.5,
          type: 'withdraw',
          category: 'Comida',
          createAt: new Date('2022-07-09 14:21:00' )
        },
        {
          id:2,
          title: 'Aluguel',
          amount: 550,
          type: 'withdraw',
          category: 'Aluguel',
          createAt: new Date('2022-07-05 09:10:00' )
        },
      ],
    })
  },

  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />

  </React.StrictMode>
)
