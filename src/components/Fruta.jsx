import React from 'react'

const Fruta = ({fruta}) => {

  return (
    <div className='fruta'>
      <ul>
        <li>
          <strong>Fruta: </strong> {fruta.name}
        </li>
        <li>
          <strong>Quantidade: </strong> {fruta.quantidade}
        </li>
      </ul>
      <button onClick={() => alert(fruta.id)}></button>
    </div>
  )
}

export default Fruta
