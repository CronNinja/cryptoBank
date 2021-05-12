import axios from 'axios'
import React, {Component} from 'react'

export default class USDValue extends Component {
  constructor(){
    super();
    this.state = { 
      data: []}
  }
  async componentDidMount() {
  // const response = await API(this.props.symbol);
  //  this.setState({ data: response.data });

    axios.get(`https://coincodex.com/api/coincodex/get_coin/${this.props.symbol}`)
      .then(response => {
        this.setState({ data: response.data });
      })
  }
  render() {
    return (
      <>
        { parseFloat(this.state.data.last_price_usd).toFixed(4) * this.props.total}
      </>
    )
  }
}