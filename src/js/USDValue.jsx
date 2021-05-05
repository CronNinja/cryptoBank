import API from '../api/data'
import React, {Component} from 'react'

export default class USDValue extends Component {
  constructor(){
    super();
    this.state = { 
      data: []}
  }
  async componentDidMount() {
    const response = await API(this.props.crypto);
    this.setState({ data: response.data });
  }
  render() {
    return (
      <>
        { parseFloat(this.state.data.last_price_usd).toFixed(4) * this.props.total}
      </>
    )
  }
}