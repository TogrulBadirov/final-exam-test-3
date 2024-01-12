import React from 'react'
import "./index.scss"
const SectionHeader = ({title}) => {
  return (
    <div className='section-header'>
        <h3>{title}</h3>
    </div>
  )
}

export default SectionHeader