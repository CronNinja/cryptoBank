import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Exchange = ({symbol, letExchange, total}) => {
  const [show, setShow] = useState((total > 0));
  const [selectedExchange, setSelectedExchage] = useState("");
  const [canExchange, setCanExchange] = useState(letExchange);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currencies = ['USD', 'BTC', 'ETH', 'XRP'];
  const handleSubmit = (event) => {
    event.preventDefault();
  }  
  const handleModeSelect = (event) => {
    const selectedValue = event.target.value;
    if(selectedValue){
      setSelectedExchage(selectedValue);
    }
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow} disabled={total <= 0}>
        { total > 0 ? "Exchange" : "Fund Account" }
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Exchange: { symbol }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit} form={"form.exchange." + symbol}>
        <label>Action:</label>
          <select onChange={(e) => handleModeSelect(e)} name="exchangeWith" id="exchange-select">
            <option id="no-selection" value=""></option>
            {
              currencies.map(currency => {
                if(currency !== symbol){
                  return (<option id={"exchange-option-" + currency} value={currency} key={"exchange-option-" + currency}>{currency.toUpperCase()}</option>)
                }
                return null;
              })
            }
          </select>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Exchange