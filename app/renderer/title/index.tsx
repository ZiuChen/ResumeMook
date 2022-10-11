import React from 'react'
import lessStyle from './index.less'

interface IProps {
  text: string
  styles?: React.CSSProperties
}

function Title({ text, styles }: IProps) {
  return (
    <div className={lessStyle.title} style={styles}>
      {text}
    </div>
  )
}

export default Title
