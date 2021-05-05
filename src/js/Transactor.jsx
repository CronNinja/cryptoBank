const Transactor = ({ onChange, isDeposit, validTransaction, currency }) => {
  const choice = ['Deposit', 'Withdraw'];
  return (
    <>
    <label>
      {choice[Number(!isDeposit)]}:
      <input id="number-input" type="number" step="any" onChange={onChange} style={{ width: '5rem' }} min="0"></input>
    </label>
    <hr />
    <input type="submit" value="Submit" id="submit-input" disabled={!validTransaction}></input>
    </>
  );
};

export default Transactor