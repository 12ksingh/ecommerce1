import React from 'react'

export default function Container(props) {
  return (
    <div style={props.style} className={`${props.fluid ? 'w-full': 'max-w-[1200px]' } ${props.extraClass}  mx-auto`}>
        {props.children}
    </div>
  )
}
