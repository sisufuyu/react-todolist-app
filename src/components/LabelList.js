import React from 'react'
import { statusList, itemClass } from '../util'
import './LabelList.css'

const LabelList = () => {
  return (
    <div className="label-list">
      {
        statusList.map(label => {
          return <div className={`label-item ${itemClass(label.value)}`} key={label.name}>{label.name}</div>
        })
      }
    </div>
  )
}

export default LabelList