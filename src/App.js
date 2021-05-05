import Currency from './js/Account'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';




const App = () => (
  
  <div>
  <Jumbotron fluid>
    <Container>
      <h1>Crypto Bank</h1>
      <p>
        Welcome back, please enjoy that the features we have to offer to managing your profolio!
      </p>
    </Container>
</Jumbotron>
<Container>
  <CardDeck>
    <Currency currencyType="USD" id="Currency-USD"/>
    <Currency currencyType="BTC" id="Currency-BTC"/>
    <Currency currencyType="ETH" id="Currency-ETH"/>
    <Currency currencyType="XRP" id="Currency-XRP"/>
  </CardDeck>
</Container>
    
  </div>
);

export default App
