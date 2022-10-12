import React from 'react'
import './index.less'
import classnames from 'classnames'

export interface IZiuButton {
  size?: 'large' | 'medium' | 'small'
  children?: React.ReactNode | string
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
  onClick?: Function
}

function ZiuButton({
  size = 'medium',
  children,
  className,
  disabled = false,
  style,
  onClick = () => null
}: IZiuButton) {
  return (
    <div
      className={className}
      styleName={classnames('ziu-button', {
        [`ziu-button-${size}`]: true,
        'ziu-button-disabled': disabled
      })}
      style={style}
      onClick={() => {
        !disabled && onClick()
      }}
    >
      {children}
    </div>
  )
}

export default ZiuButton
