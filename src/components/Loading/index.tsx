import React, { useState } from 'react'
import Lottie from 'react-lottie'
import * as S from './style'

import loading from '../../../public/loading.json'

const Loading = () => {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <S.Wrapper>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
    </S.Wrapper>
  )
}

export default Loading
