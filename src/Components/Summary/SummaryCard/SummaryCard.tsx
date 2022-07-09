import { Container } from "./styles";


interface IsummaryCard {
  type:string,
  img:any,
  value:number
  isGreen?:boolean
}
export function SummaryCard({type, img, value, isGreen}:IsummaryCard){
  return(
    // <Container className={`bgColor ${isGreen? 'green': 'white'}`} >
    <Container bg={isGreen} >
      <header>
        <p>
          {type}
        </p>
        <img src={img}></img>
      </header>
    <strong>{type ==="Saida"? "-": ""}
    {new Intl.NumberFormat('pt-BR', {
              style:'currency',
              currency: 'BRL'
            }).format(value)}</strong>
    </Container>

  
  )
}