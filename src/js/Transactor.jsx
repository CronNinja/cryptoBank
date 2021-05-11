const Transactor = ({ onChange, isDeposit, validTransaction, currency }) => {
  const choice = ['Deposit', 'Withdraw'];

  return (
    <span id={"transactions." + currency} key={"transactions." + currency}>
    <label>
      {choice[Number(!isDeposit)]}:
      <input id="number-input" type="number" step="any" onChange={onChange} style={{ width: '5rem' }} min="0"></input>
    </label>
    <input type="submit" value="Submit" id="submit-input" disabled={!validTransaction}></input>
    </span>
  );
};

export default Transactor