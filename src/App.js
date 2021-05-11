import { useState } from 'react';
import Currency from './js/Account'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import GetDate from './js/GetData';
import History from './js/History';

const initDate = GetDate();
const initialTotals = [
  { symbol: "USD", total: 0, timestamp: initDate, action: "Account Created" },
  { symbol: "BTC", total: 0, timestamp: initDate, action: "Account Created" },
  { symbol: "ETH", total: 0, timestamp: initDate, action: "Account Created" },
  { symbol: "XRP", total: 0, timestamp: initDate, action: "Account Created" },
  { symbol: "BNB", total: 0, timestamp: initDate, action: "Account Created" }
];

const App = () => {
  const [totals, setTotals] = useState(initialTotals);
  const getTotals = () => {
    totals.sort((a, b) => b.timestamp - a.timestamp);
    let x = totals.filter((v,i,a) => a.findIndex(t => (t.symbol === v.symbol && +t.timestamp >= +v.timestamp)) === i).sort((a, b) => a.symbol.localeCompare(b.symbol));

    return x.map(currency => {
      return (<Currency symbol={currency.symbol} totals={totals} setTotals={setTotals} id={"Currency-" + currency.symbol} key={"Currency-" + currency.symbol}/>);
    })
  }
  return (
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
          {
            getTotals()
          }
        </CardDeck>
      </Container>
      <hr />
      <History totals={totals}/>
    </div>
  )
};

export default App
