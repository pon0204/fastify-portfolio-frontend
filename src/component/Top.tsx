import React from 'react'
import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <div>
      <div className='text-center p-28'>
        <h2 className='text-4xl mb-8'>Empty Room</h2>
        <p className='text-2xl mb-8'>「貴方の考えを、徹底的に深堀りする」</p>
        <div className='w-96  mx-auto mb-8'>
          <Link to='/room' className='bg-blue-800 p-8 text-white text-2xl block'>
              エンプティールーム作成する
          </Link>
        </div>
        <h2 className='text-4xl'>サービス説明</h2>
        <p>仮想の相手を設定</p>
        <p>自分の考えを伝える</p>
        <p>相手の反論を考える</p>
      </div>
    </div>
  )
}

export default Top
