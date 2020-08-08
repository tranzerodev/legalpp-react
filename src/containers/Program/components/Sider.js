import React from 'react'
import cn from 'classname'

const Sider = ({ visible, toggle }) => {
  return (
    <aside className="sider">
      <div className="sider-content">
        Sider
      </div>
      <i
        className={cn('hover-icon', 'fas', 'fa-arrow-alt-circle-right', { 'reverse': visible })}
        onClick={toggle} />
    </aside>
  )
}

export default Sider