import React from 'react'

import './Tag.css'

const Tag = ({tagName, selectTag, selected}) => {
    const tagStyle = {
        Trabajo: {backgroundColor: '#A3C9A8'},
        Estudios: {backgroundColor: '#84B59F'},
        Personal: {backgroundColor: '#69A297'},
        Hogar: {backgroundColor: '#9D8D96'},
        Salud: {backgroundColor: '#679BAB'},
        default: {backgroundColor: '#DEE2E6'}
    }
  return (
    <button type='button' className='tag' style={selected ? tagStyle[tagName] : tagStyle.default} onClick={() => selectTag(tagName)}>{tagName}</button>
  )
}

export default Tag