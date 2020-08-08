import React, { Component } from 'react'
import cn from 'classname'
import qs from 'query-string'
import { notification, Button } from 'antd'
import Sider from './components/Sider'
import InputBox from './InputBox'
import FinalTopic from './FinalNode/Topic/Topic'
import FinalTrademark from './FinalNode/Topic/Trademark'
import FinalChoiceEntity from './FinalNode/Topic/ChoiceEntity'
import FinalForm from './FinalNode/Form'
import FinalCalculateTax from './FinalNode/Topic/CalculateTax'
import * as countyExemption from 'services/datasource/county_exemption'
import * as cityExemption from 'services/datasource/city_exemption'
import { Types } from 'redux/actions/program'

import { app } from 'configs'
const { prefix } = app

class Program extends Component {
  state = {
    siderVisible: localStorage.getItem(`${prefix}Sider`) === 'true',
    activityId: ''
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this.props.setCurrent(id)

    const { search } = this.props.location
    const query = qs.parse(search)
    if (query.activity) {
      // Load current activity and set it as current progress
      this.setState({ activityId: query.activity })
      this.props.loadActivity(query.activity)
    } else {
      this.props.setCurrentActivity(null)
    }
  }

  componentWillReceiveProps ({ match, location }) {
    const { id } = match.params
    if (id !== this.props.match.params.id) {
      this.props.setCurrent(id)
    }

    if (location !== this.props.location) {
      const { search } = location
      const query = qs.parse(search)
      if (query.activity) {
        if (query.activity !== this.state.activityId) {
          this.setState({ activityId: query.activity })
        }
      }
    }
  }

  toggleSider = () => {
    localStorage.setItem(`${prefix}Sider`, !this.state.siderVisible)
    this.setState({ siderVisible: !this.state.siderVisible })
  }

  toRegister = () => {
    const { changeRoute } = this.props
    notification.close('register_notification')
    changeRoute('/auth/signup')
  }

  onFinalEdit = () => {
    const { user } = this.props
    if (user.authenticated) {
      // if signed in
      const { search } = this.props.location
      const query = qs.parse(search)
      if (query.activity) {
        this.props.changeRoute(`/account/documents/${query.activity}`)
      }
    } else {
      const btnRegister = (
        <Button type='primary' size='small' onClick={this.toRegister}>
          Register
        </Button>
      )
      notification['error']({
        message: 'Need to Register',
        description:
          'This feature is available for only registered users. Would you like to register now?',
        btn: btnRegister,
        key: 'register_notification'
      })
    }
  }

  _replaceStoreValue = (str, store) => {
    if (typeof str !== 'string') {
      return str
    }

    const reg = /\${([^}]*)}/g
    const vName = reg.exec(str)
    let result = str
    if (vName) {
      result = result.replace(reg, store[vName[1]])
    }
    return result
  }

  _renderFinalNode = (final, script) => {
    const { node, store } = final
    const { activityId } = this.state
    const { stepBack, stepNext } = this.props

    if (node.content.kind === 'Form') {
      return (
        <FinalForm
          form={node.content.form}
          data={store}
          activityId={activityId}
          onEdit={this.onFinalEdit}
        />
      )
    } else if (node.content.kind === 'CalculateTax') {
      const county_exemption = countyExemption.exemption(store['county'])
      const countyTaxRate = parseFloat(county_exemption[0].split(';')[2])
      const city_exemption = cityExemption.exemption(
        store['county'],
        store['city']
      )
      const cityTaxRate = parseFloat(city_exemption[0].split(';')[3])

      const calcTaxInfo = {
        county: store['county'],
        city: store['city'],
        countyTaxRate,
        cityTaxRate,
        countyExemptions: store['county_exemption'],
        cityExemptions: store['city_exemption']
      }
      return (
        <FinalCalculateTax
          calcTaxInfo={calcTaxInfo}
          showFeedback={this.props.showFeedback}
        />
      )
    } else {
      // 'Topic' is default if kind is null

      let message = node.content.message || ''

      // Add attach to message
      if (node.content.attach && script.attach) {
        node.content.attach.forEach(e => (message += ' ' + script.attach[e]))
      }

      // linking links and replace store
      message = message.replace(
        /{{([^}]*)}}/g,
        (match, link) => script.attach[link]
      )
      message = this._replaceStoreValue(message, store)

      let next = null

      if (node.content.actions) {
        next = id => {
          stepNext(id, store)
        }
      }

      if (node.content.kind === 'Trademark') {
        return (
          <FinalTrademark
            registerable={node.content.registerable}
            message={message}
            prev={stepBack}
            showFeedback={() => this.props.showFeedback(true)}
          />
        )
      }
      if (node.content.kind === 'ChoiceEntity') {
        return (
          <FinalChoiceEntity
            title={node.content.title}
            message={message}
            actions={node.content.actions}
            prev={stepBack}
            next={next}
            changeRoute={this.props.changeRoute}
            showFeedback={() => this.props.showFeedback(true)}
          />
        )
      } else if (node.content.kind === 'Trademark') {
        return (
          <FinalTrademark
            registerable={node.content.registerable}
            message={message}
            prev={stepBack}
            showFeedback={() => this.props.showFeedback(true)}
          />
        )
      } else {
        return (
          <FinalTopic
            title={node.content.title}
            message={message}
            actions={node.content.actions}
            prev={stepBack}
            next={next}
            changeRoute={this.props.changeRoute}
            showFeedback={() => this.props.showFeedback(true)}
          />
        )
      }
    }
  }

  render () {
    const { siderVisible } = this.state
    const { program, global } = this.props
    const script = program.scripts[program.current]

    const { node, store } = program.progress

    if (global.status[Types.SET_CURRENT] === 'request') return null

    let finalNode = null
    if (node && node.kind === 'Final') {
      finalNode = this._renderFinalNode({ node, store }, script)
    }

    return (
      <section className={cn('program', { 'with-sider': siderVisible })}>
        <Sider visible={siderVisible} toggle={this.toggleSider} />
        <section className='content'>
          {finalNode}
          <InputBox key={this.props.match.params.id} script={script} />
        </section>
      </section>
    )
  }
}

export default Program
