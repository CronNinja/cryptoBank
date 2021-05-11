import React, { useState} from 'react';
import Transactor from './Transactor';
import Card from 'react-bootstrap/Card';
import USDValue from './USDValue';
import Exchange from './Exchange';
import GetDate from './GetData';

const Currency = ({symbol, totals, setTotals}) => {
  const [deposit, setDeposit] = useState(0);
  const [totalState, setTotalState] = useState(0);

  const [isDeposit, setIsDeposit] = useState(true);
  const [atmMode, setAtmMode] = useState("");
  const [validTransaction, setValidTransaction] = useState(false);

  let status = `${symbol} Balance: ${totalState} `;
  const handleChange = (event) => {
    const returnValue = event.target.value;
    setDeposit(Number(returnValue));
    if(returnValue <= 0){
      setValidTransaction(false);
      return;
    }
    else if(atmMode === "Withdraw" && returnValue > totalState) {
      setValidTransaction(false);
      return;
    }
    else {
      setValidTransaction(true);
      return;
    }
  };

  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setTotals([...totals, {symbol: symbol, total: newTotal, timestamp: GetDate(), action: atmMode + " " + symbol + ": " + deposit}])
    setValidTransaction(false);
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    const selectedValue = event.target.value;
    setAtmMode(selectedValue);
    if(selectedValue === "Deposit"){
      setIsDeposit(true);
    } else if (selectedValue === "Withdraw"){
      setIsDeposit(false);
    }
  }

  return (
    <>
    <Card>
      <Card.Body>
        <form onSubmit={handleSubmit}>
        <Card.Title id="total">{status}</Card.Title>
        <Card.Subtitle>
          <label>USD Value: $<USDValue symbol={symbol} total={totalState}/></label>
        </Card.Subtitle>
        <Card.Text>
          <label>Action:</label>
          <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">Deposit</option>
            <option id="withdraw-selection" value="Withdraw">Withdraw</option>
            <option id="exchange-selection" value="Exchange">Exchange</option>
          </select>
          { (atmMode === "Deposit" || atmMode === "Withdraw") &&
            <Transactor onChange={handleChange} isDeposit={isDeposit} validTransaction={validTransaction} currency={symbol} />
          }
        </Card.Text>
      </form>
      {
      atmMode === "Exchange" &&
        <Exchange symbol={symbol} total={totalState} />
      }
      </Card.Body>
    </Card>
    </>
  );
};

export default Currency