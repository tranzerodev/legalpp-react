import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classname'

import './styles.css'

class EditInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: props.editing,
      value: props.defaultValue,
    }
  }

  componentWillReceiveProps({ defaultValue, editing }) {
    if (defaultValue !== this.props.defaultValue) {
      this.setState({ value: defaultValue })
    }

    if (editing !== this.props.editing) {
      this.setState({ isEditing: editing })
    }
  }

  toggleMode = () => {
    this.setState({ isEditing: !this.state.isEditing, value: this.props.defaultValue })
  }

  onChange = (e) => {
    this.setState({ value: e.target.value })
  }

  onSave = (value) => {
    this.toggleMode()
    this.props.onSave(this.state.value)
  }

  onCancel = (value) => {
    this.toggleMode()
    if (this.props.onCancel)
      this.props.onCancel()
  }

  onFocus = (e) => {
    e.target.select()
  }

  render() {
    const { className, defaultValue, disabled } = this.props
    const { isEditing, value } = this.state
    return (
      <div className={cn('lg-edit-input', className)}>
        {
          isEditing
            ? <input className="lg-pure-input lg-edit-input__input" value={value} onChange={this.onChange} onFocus={this.onFocus} disabled={disabled} autoFocus />
            : <div className="lg-edit-input__content">{ defaultValue }</div>
        }
        
        <div className="lg-edit-input__actions ml-4">
          {
            isEditing
              ? <div>
                  <span className="lg-edit-input__link" onClick={this.onSave}>Save</span>
                  <span className="lg-edit-input__link">&nbsp;{' | '}&nbsp;</span>
                  <span className="lg-edit-input__link" onClick={this.onCancel}>Cancel</span>
                </div>
              : !disabled && <span className="lg-edit-input__link" onClick={this.toggleMode}>Edit</span>
          }
          
        </div>
      </div>
    )
  }
}

EditInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  editing: PropTypes.bool,
}

export default EditInput