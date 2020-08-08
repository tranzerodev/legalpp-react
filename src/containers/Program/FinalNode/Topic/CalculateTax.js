import React, { Component } from 'react'
import Button from 'components/Button'
// import TopicDialog from './TopicDialog'

class CalculateTax extends Component {
  state = {
    modalVisible: false,
    price: 0,
    countyTax: 0,
    cityTax: 0
  }

  calcCountyTax = price => {
    var taxRate = 0.0
    const { county, countyTaxRate, countyExemptions } = this.props.calcTaxInfo

    if (countyExemptions && countyExemptions[0] === false) {
      return 0.0
    }

    if (county === 'San Francisco') {
      if (price > 100 && price <= 250000) {
        taxRate = 2.5
      } else if (price > 250000 && price <= 1000000) {
        taxRate = 3.4
      } else if (price > 1000000 && price <= 5000000) {
        taxRate = 3.75
      } else if (price > 5000000 && price <= 10000000) {
        taxRate = 11.25
      } else if (price > 10000000 && price <= 25000000) {
        taxRate = 13.75
      } else if (price > 25000000) {
        taxRate = 15.0
      }
    } else {
      taxRate = countyTaxRate || 0
    }
    return (Math.ceil(price / 500) * taxRate).toFixed(2)
  }

  calcCityTax = price => {
    if (
      this.props.calcTaxInfo.cityExemptions &&
      this.props.calcTaxInfo.cityExemptions[0] === false
    ) {
      return 0.0
    }

    var taxRate = this.props.calcTaxInfo.cityTaxRate
      ? this.props.calcTaxInfo.cityTaxRate
      : 0
    return (Math.ceil(price / 500) * taxRate).toFixed(2)
  }

  onPrice = e => {
    const price = e.target.value

    this.setState({
      price,
      countyTax: this.calcCountyTax(price),
      cityTax: this.calcCityTax(price)
    })
  }

  // toggleDialog = () => {
  //   this.setState({ modalVisible: !this.state.modalVisible })
  // }

  render () {
    const { price, countyTax, cityTax } = this.state
    const { showFeedback } = this.props
    return (
      <div className='inputbox final-topic wow fadeIn'>
        <h1 className='inputbox__title mt-2'>Tax Calculation</h1>

        <div className='final-body'>
          Purchase Price :
          <input
            type='number'
            className='input'
            name='price'
            min='0.00'
            value={price}
            placeholder='Enter Purchase Price'
            onChange={this.onPrice}
          />
          <br />
          County Tax :
          <input
            type='number'
            className='input'
            placeholder=''
            value={countyTax}
            readOnly
          />
          City Tax :
          <input
            type='number'
            className='input'
            placeholder=''
            value={cityTax}
            readOnly
          />
          Total Tax :
          <input
            type='number'
            className='input'
            placeholder=''
            value={(parseFloat(countyTax) + parseFloat(cityTax)).toFixed(2)}
            readOnly
          />
          <br />
        </div>

        <div className='buttons mt-2 pt-4'>
          <Button className='mr-1' fullWidth>
            Back
          </Button>
          <Button className='ml-1' fullWidth onClick={showFeedback}>
            Finish
          </Button>
        </div>

        {/* <TopicDialog isOpen={this.state.modalVisible} toggle={this.toggleDialog} /> */}
      </div>
    )
  }
}

export default CalculateTax
