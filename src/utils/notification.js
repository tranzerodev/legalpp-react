import { Modal } from 'antd'

export function showSuccess (title, content) {
  return new Promise((resolve, reject) => {
    Modal.success({
      title,
      content,
      onOk() {
        resolve('OK')
      },
    })
  })
}

export function showConfirm (message) {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      ...message,
      onOk() {
        resolve('OK')
      },
      onCancel() {
        resolve('Cancel')
      },
    })
  })
}
