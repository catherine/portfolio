import { Image } from './Image'
import './ImageRow.css'

export function ImageRow({
  images,
  shouldShowVerticalOnMobile = false,
}: {
  images: string[]
  shouldShowVerticalOnMobile?: boolean
}) {
  return (
    <div className={`imageRow ${shouldShowVerticalOnMobile ? 'verticalOnMobile' : null}`}>
      {images.map((image) => (
        <div key={image}>
          <Image src={image} />
        </div>
      ))}
    </div>
  )
}
