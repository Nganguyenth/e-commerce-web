import { useEffect, useState } from 'react'
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component'

export const ImageView = (props: LazyLoadImageProps & { skipSrcSet?: boolean }) => {
  const { src, skipSrcSet, ...rest } = props
  const [state, setState] = useState({ src: '', srcSet: '' })

  useEffect(() => {
    if (src) {
      const srcProps = { src: '', srcSet: '' }
      const ext = '.' + src.split('.').pop() || ''
      if (src.match(/http(s)/)) {
        srcProps.src = src
        if (!skipSrcSet) srcProps.srcSet = `${src.replace(ext, '-small' + ext)} 480w, ${src} 1080w`
      } else {
        const localSrc = location.href.replace(location.pathname, '/') + src
        srcProps.src = localSrc
        if (!skipSrcSet) srcProps.srcSet = `${localSrc.replace(ext, '-small' + ext)} 480w, ${localSrc} 1080w`
      }

      setState(srcProps)
    }
  }, [])

  if (state.src) return <LazyLoadImage {...rest} src={state.src} srcSet={state.srcSet} />

  return <></>
}
