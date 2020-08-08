import React, { Component } from 'react'
import moment from 'moment'
import cn from 'classname'
import EditInput from '../../components/EditInput'

class GeneralInfoCard extends Component {
  state = {
    isRenaming: false,
  }

  toggleRenaming = () => {
    this.setState({ isRenaming: !this.state.isRenaming })
  }

  changeName = (name) => {
    this.toggleRenaming()
    this.props.onChangeName(name)
  }

  render() {
    const { document, className, onDelete } = this.props
    const { updatedAt, program } = document
    const { description } = program
    const { isRenaming } = this.state
    return (
      <div className={cn('lg-document-general-info-card', className)}>
        <div style={{ flex: 1 }}>
          <div className="lg-document-general-info-card__name">
            {
              isRenaming
                ? <EditInput className="mx-0 mb-2" defaultValue={document.activityName} onSave={this.changeName} onCancel={this.toggleRenaming} editing />
                : document.activityName
            }
          </div>
          <div className="lg-document-general-info-card__description">
            { description } - { moment(updatedAt).format('MMMM DD, YYYY, h:mm:ss A') }
          </div>
        </div>
        { !isRenaming &&
          <div className="lg-document-general-info-card__actions">
            <div className="d-inline-block">
              <span className="lg-document__link px-1" onClick={onDelete}>Delete</span>
              <span className="lg-document__link">{' | '}</span>
              <span to="" className="lg-document__link px-1" onClick={this.toggleRenaming}>Rename</span>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default GeneralInfoCard
