import { Box } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useGetElementProperty } from '../../hooks/useGetElementProperty'

type Props = {
  imageUrl: string
}

const Component: React.FC<Props> = ({ imageUrl }) => {
  const [isLess16vs10, setIsLess16vs10] = useState<boolean>(true)
  const targetRef = useRef(null)
  const { getElementProperty } =
    useGetElementProperty<HTMLDivElement>(targetRef)

  const checkHeroRatio = useCallback(() => {
    const width = getElementProperty('height')
    const height = getElementProperty('width')
    setIsLess16vs10(height / width < 16 / 10)
  }, [])

  useEffect(() => {
    checkHeroRatio()
    window.addEventListener('resize', checkHeroRatio)
    return () => {
      window.removeEventListener('resize', checkHeroRatio)
    }
  }, [checkHeroRatio])

  return (
    <>
      <Box
        overflow="hidden"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={1}
        ref={targetRef}
      >
        <Box
          as="img"
          src={imageUrl}
          position={'absolute'}
          maxWidth={isLess16vs10 ? 'unset' : '100%'}
          top="50%"
          left="50%"
          height={isLess16vs10 ? '100%' : 'auto'}
          minWidth={isLess16vs10 ? 'unset' : '100%'}
          minHeight={isLess16vs10 ? 'unset' : '100%'}
          transform="translate(-50%,-50%)"
        />
      </Box>
    </>
  )
}

export { Component as ImageBackground }
