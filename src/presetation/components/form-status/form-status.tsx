import React from 'react'
import Styles from './form-status-styles.scss'
import Spinner from './../spinner/spinner'

const FormStatus = (): React.ReactElement<any, any> => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error} >  Erro</span>
    </div>
  )
}

export default FormStatus