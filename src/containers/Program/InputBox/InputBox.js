import React, { Component } from 'react'
import PropTypes from 'prop-types'
import reactHtmlParser from 'react-html-parser'
import cn from 'classname'
import AOS from 'aos'
import NoteDialog from '../components/NoteDialog'
import Button from 'components/Button'

import County from 'services/datasource/county'
import City from 'services/datasource/city'
import State from 'services/datasource/state'
import * as countyExemption from 'services/datasource/county_exemption'
import * as cityExemption from 'services/datasource/city_exemption'

class InputBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      noteVisible: false,
      note: null,
      singleChoice: -1,
      multiChoice: [],
      store: {
        ...props.progress.store
      }
    }
  }

  componentDidMount () {
    AOS.init()
  }

  componentWillReceiveProps ({ progress }) {
    if (progress !== this.props.progress) {
      this.setState({
        singleChoice: -1,
        multiChoice: [],
        store: {
          ...progress.store
        }
      })
    }
  }

  _getInstruction = kind => {
    switch (kind) {
      case 'Multi':
        return 'Please check any that apply.'
      default:
        return ''
    }
  }

  onSingleSelect = (node, field, index) => {
    let value = field.value
    if (field.kind === 'choice' || field.kind === undefined) {
      value = value || field.label
    }
    if (node.content.store && value) {
      const newStore = {
        ...this.state.store,
        [node.content.store]: this._replaceStoreValue(value)
      }
      this.setState({ store: newStore })
    }

    this.setState({ singleChoice: index })
  }

  onMultiSelect = (node, index, noneApplyIndex) => {
    // CONSIDER_ME: is it necessary to create new array ?
    const { multiChoice, store } = this.state
    let newMultiChoice = [...multiChoice]
    if (index === noneApplyIndex) {
      newMultiChoice = []
    } else {
      newMultiChoice[noneApplyIndex] = false
    }

    newMultiChoice[index] = !newMultiChoice[index]
    this.setState({ multiChoice: newMultiChoice })

    if (node.content.store) {
      this.setState({
        store: { ...store, [node.content.store]: newMultiChoice }
      })
    }
  }

  onSelectChange = (event, node, field) => {
    let storeName = field.store
    if (!storeName) storeName = node.content.store

    const { store } = this.state
    const newStore = {
      ...store
    }
    if (field.store === 'county') {
      if (store['city']) newStore['city'] = undefined
    }

    newStore[storeName] = event.target.value
    this.setState({ store: newStore })
  }

  onInput = (event, node, field) => {
    let storeName = field.store
    if (!storeName) storeName = node.content.store
    if (storeName) {
      const store = {
        ...this.state.store,
        [storeName]: event.target.value
      }
      this.setState({ store })
    }
  }

  _replaceStoreValue = str => {
    if (typeof str !== 'string') {
      return str
    }

    const reg = /\${([^}]*)}/g
    const vName = reg.exec(str)
    let result = str
    if (vName) {
      result = result.replace(reg, this.state.store[vName[1]])
    }
    return result
  }

  // Render Single or YesNo field
  _renderSingle = (node, field, index) => {
    let storeName = field.store
    if (!storeName) storeName = node.content.store
    // CONSIDER_ME: This snippet is for initalizing store variable. I think I can move up to _renderFields.
    const { store, singleChoice } = this.state
    if (field.kind === 'number' || field.kind === 'text') {
      store[storeName] = store[storeName] || ''
    }

    return (
      <div
        key={index}
        className={cn('answer option', { selected: singleChoice === index })}
        onClick={() => this.onSingleSelect(node, field, index)}
      >
        {this._replaceStoreValue(field.label)}
        {(field.kind === 'number' || field.kind === 'text') && (
          <input
            type={field.kind}
            className='input'
            onChange={e => {
              this.onInput(e, node, field)
            }}
          />
        )}
        {field.note && <i className='fa fa-info-circle' />}
      </div>
    )
  }

  // render Input field
  _renderInput = (node, field, index) => {
    // CONSIDER_ME: Now I am setting store without setState.
    // This function returns component with the store value after setting store so I think it is better. //
    const { store } = this.state
    if (field.kind === 'select') {
      let dataSource = null
      if (field.datasource === 'county') {
        if (!store['county']) store['county'] = County[0].name
        dataSource = County.map((e, i) => (
          <option key={i} value={e.name}>
            {e.name}
          </option>
        ))
      } else if (field.datasource === 'city') {
        const city = City.filter(e => e.county === store['county'])

        if (!store['city']) store['city'] = city.length ? city[0].city : ''
        dataSource = city.map((e, i) => (
          <option key={i} value={e.city}>
            {e.city}
          </option>
        ))
      } else if (field.datasource === 'state') {
        let storeName = field.store
        if (!storeName) storeName = node.content.store

        if (!store[storeName]) store[storeName] = field.store_value === 'name' ? State[0].name : State[0].abbreviation

        if (field.store_value === 'name') {
          dataSource = State.map((state, i) => (
            <option key={i} value={state.name}>
              {state.name}
            </option>
          ))
        } else {
          dataSource = State.map((state, i) => (
            <option key={i} value={state.abbreviation}>
              {state.name}
            </option>
          ))
        }
      }

      return (
        <select
          key={index}
          className='answer input'
          value={store[field.store]}
          onChange={event => this.onSelectChange(event, node, field)}
        >
          {dataSource}
        </select>
      )
    } else if (field.kind === 'textarea') {
      if (store[field.store] === undefined) {
        store[field.store] = ''
      }
      return (
        <textarea
          key={index}
          className='answer input'
          placeholder={field.placeholder}
          rows={field.rows}
          value={store[field.store]}
          onChange={e => this.onInput(e, node, field)}
        />
      )
    } else {
      if (store[field.store] === undefined) {
        store[field.store] = ''
      }
      return (
        <input
          type={field.kind}
          key={index}
          className='answer input'
          placeholder={field.placeholder}
          value={store[field.store]}
          onChange={e => this.onInput(e, node, field)}
        />
      )
    }
  }

  // render Multi field
  _renderMulti = (node, field, index) => {
    // use index 0 as None Apply
    const { store, multiChoice } = this.state
    let exemption, sourceExemption
    if (field.datasource === 'county_exemption_list') {
      exemption = countyExemption.exemption(store['county'])
      sourceExemption = countyExemption
    } else {
      exemption = cityExemption.exemption(store['county'], store['city'])
      sourceExemption = cityExemption
    }
    const { indexArray, label, note } = sourceExemption

    const eleExemptions = indexArray.map((elt, i) => {
      if (exemption[indexArray[i]] !== 'x') return null
      return (
        <div
          key={i}
          className={cn('answer', 'option', { selected: multiChoice[i] })}
          onClick={event => this.onMultiSelect(node, i, 0)}
        >
          {label[indexArray[i]]}
          <i
            className='fas fa-info-circle note-icon'
            onClick={event =>
              this.showNote(event, {
                title: 'Note',
                content: note[indexArray[i]]
              })
            }
          />
        </div>
      )
    })

    return (
      <div key={index}>
        {eleExemptions}
        <div
          className={cn('answer', 'option', { selected: multiChoice[0] })}
          onClick={() => this.onMultiSelect(node, 0, 0)}
        >
          None Apply
        </div>
      </div>
    )
  }

  // Render Description field
  _renderDescription = (script, node, field, index) => {
    let description = ''
    if (field.kind === 'attach') {
      description += script.attach[field.value]
    } else {
      description = field.value
    }

    // linking links
    description = description.replace(
      /{{([^}]*)}}/g,
      (match, link) => script.attach[link]
    )

    return (
      <div key={index} className='description'>
        {reactHtmlParser(description)}
      </div>
    )
  }

  // render fields whose kind is one of 'Single', 'YesNo', 'Input' or 'Multi'
  _renderFields = (script, node) => {
    return node.content.fields.map((field, index) => {
      const { kind } = node
      if (kind === 'Single' || kind === 'YesNo') {
        return this._renderSingle(node, field, index)
      } else if (kind === 'Input') {
        return this._renderInput(node, field, index)
      } else if (kind === 'Multi') {
        return this._renderMulti(node, field, index)
      } else if (kind === 'Description') {
        return this._renderDescription(script, node, field, index)
      }
      return null
    })
  }

  _getNextId = node => {
    if (
      node.kind === 'Input' ||
      node.kind === 'Multi' ||
      node.kind === 'Description'
    ) {
      return node.content.next
    } else if (node.kind === 'Single' || node.kind === 'YesNo') {
      let next = node.content.fields[this.state.singleChoice].next
      if (!next) next = node.content.next
      return next
    }
  }

  _validateInput = (node, store) => {
    if (node.kind === 'Input') {
      const { fields } = node.content
      for (let i = 0; i < fields.length; ++i) {
        if (fields[i].store && fields[i].optional !== true) {
          if (store[fields[i].store] === '') {
            return false
          }
        }
      }

      if (node.content.store) {
        if (this.state.store[node.content.store] === '') return false
      }
    }

    return true
  }

  onNext = () => {
    const { progress, stepNext } = this.props
    const { node } = progress

    if (this._validateInput(node, this.state.store) === false) return

    if (node.kind === 'Input' || node.kind === 'Multi') {
    } else if (node.kind === 'Single') {
      if (this.state.singleChoice === -1) {
        return
      }

      const { fields } = node.content
      const field = fields[this.state.singleChoice]
      const store = node.content.store || field.store

      if (
        !field.optional &&
        !(field.kind === 'choice' || field.kind === undefined)
      ) {
        if (!this.state.store[store]) {
          return
        }
      }
    } else if (node.kind === 'YesNo') {
      if (this.state.singleChoice === -1) {
        return
      }
    }

    stepNext(this._getNextId(node), this.state.store)
  }

  onBack = () => {
    const { stepBack } = this.props
    stepBack()
  }

  toggleNote = () => {
    this.setState({ noteVisible: !this.state.noteVisible })
  }

  showNote = (event, note) => {
    if (event) event.stopPropagation()
    this.setState({ noteVisible: true, note })
  }

  render () {
    const { script, progress } = this.props

    if (!script || !progress.node) {
      return <div>Loading...</div>
    }

    const { node } = progress

    if (node.kind === 'Final') {
      return null
    }

    const question = this._replaceStoreValue(node.content.question)
    const instruction = this._getInstruction(node.kind)
    const answers = this._renderFields(script, node)

    let eleNote = null
    if (node.content.note) {
      const note = {
        ...node.content.note
      }

      if (script.attach) {
        if (note.attach) {
          note.content = note.attach.reduce(
            (result, current) => result + script.attach[current],
            ''
          )
        }
        // linking links

        note.content = note.content.replace(
          /{{([^}]*)}}/g,
          (match, link) => script.attach[link]
        )
      }

      eleNote = (
        <i
          className='fas fa-info-circle note-icon-global'
          onClick={event => this.showNote(event, note)}
        />
      )
    }

    let description = node.content.description
    if (typeof description === 'object') {
      // if array
      description = description.reduce(
        (result, current) => result + script.attach[current],
        ''
      )
    }

    return (
      <section className='inputbox' data-aos='fade-down'>
        <div className='inputbox__title'>{script.description}</div>

        {script.step && (
          <div className='progress-container'>
            <div className='progress'>
              <div
                className='progress-bar'
                style={{
                  width: `${(progress.history.length * 100.0) / script.step}%`
                }}
              />
            </div>
          </div>
        )}

        <div className='main-container'>
          {question && (
            <div className='question'>
              <span>
                {node.kind !== 'Description'
                  ? `${progress.history.filter(
                    e => e.node.kind !== 'Description'
                  ).length + 1}. `
                  : null}
                {reactHtmlParser(question)}
              </span>
              {eleNote}
            </div>
          )}

          <div className='description'>{reactHtmlParser(description)}</div>

          {instruction ? (
            <div className='kind-instruction'>{instruction}</div>
          ) : null}

          <div className='answers'>{answers}</div>

          <div className='buttons pt-4'>
            <Button
              className='mr-1'
              fullWidth
              onClick={this.onBack}
            >
              Back
            </Button>
            <Button className='ml-1' fullWidth onClick={this.onNext}>
              Continue
            </Button>
          </div>
        </div>

        <NoteDialog
          isOpen={this.state.noteVisible}
          toggle={this.toggleNote}
          note={this.state.note}
        />
      </section>
    )
  }
}

InputBox.propTypes = {
  script: PropTypes.object
}

export default InputBox
