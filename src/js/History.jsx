import Table from 'react-bootstrap/Table';
const History = ({ totals }) => {
const createRow = (t) => {
  return (
    <tr key={'row-' + t.symbol + "-" + t.timestamp.getTime()}>
      <td>{ t.symbol }</td>
      <td>{ t.action }</td>
      <td>{ t.timestamp.toString() }</td>
    </tr>
  )
}
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Currency</th>
          <th>Action</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
          { totals.map(t => createRow(t)) }
      </tbody>
  </Table>
  )
}

export default History