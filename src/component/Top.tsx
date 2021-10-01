import React from 'react'
import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <div>
      <div className='p-28 text-center'>
        <h2 className='mb-8 text-4xl'>Empty Room</h2>
        <p className='mb-8 text-2xl'>「貴方の考えを、徹底的に深堀りする」</p>
        <div className='mb-8 mx-auto w-96'>
          <Link
            to='/room/create'
            className='block p-8 text-white text-2xl bg-blue-800'
          >
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
