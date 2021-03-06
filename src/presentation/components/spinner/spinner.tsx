import React from 'react'
import Styles from './spinner-styles.scss'
type Props = React.HTMLAttributes<HTMLElement>

const Spinner = (props: Props): React.ReactElement<any, any> => {
  return (
    <div {...props} data-testid='spinner' className={[Styles.spinner, props.className].join(' ')}><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner
