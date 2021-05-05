import React from 'react';
import Transactor from './Transactor';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


const Currency = ({currencyType}) => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [usdValue, setUsdValue] = React.useState(0);

  const [data, setData] = React.useState({ results: [] });
	const [isError, setIsError] = React.useState(false);
	const [url, setUrl] = React.useState(
		`https://coincodex.com/api/coincodex/get_coin/${currencyType}`
	);
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const result = await axios(url);
				setData(result.data);
        console.log(result.data);
			} catch (error) {
				setIsError(true);
			}
			setIsLoading(false);
		};

		fetchData();
	}, [url]);


  let status = `${currencyType} Balance: ${totalState} `;
  const handleChange = (event) => {
    const returnValue = event.target.value;
    console.log(`handleChange ${returnValue}`);
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
    <Card>
      <Card.Body>
        <form onSubmit={handleSubmit}>
        <Card.Title id="total">{status}</Card.Title>
        <Card.Subtitle>
          <label>USD Value: ${usdValue}</label>
        </Card.Subtitle>
        <Card.Text>
          <label>Action:</label>
          <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">Deposit</option>
            <option id="withdraw-selection" value="Withdraw">Withdraw</option>
          </select>
          { atmMode &&
          <>
            <Transactor onChange={handleChange} isDeposit={isDeposit} validTransaction={validTransaction}></Transactor>
            </>
          }
        </Card.Text>
      </form>
      </Card.Body>
    </Card>
    
  );
};

export default Currency