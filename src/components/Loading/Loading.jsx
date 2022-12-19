import React from 'react'
import '../Loading/Loading.css'

const Loading = ({ size }) => {
      
  return (
    <div className='container__loader'
    aria-roledescription='estabelecendo conexão e carregando informações'>
      <div className={
        size === 'regular' ? 'spinner regular' : 'spinner sm'
      }>
      </div>
    </div>
  )
}

export default Loading;