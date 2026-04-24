import './Image.css'

export function Image({ src, srcSet, alt }: { src: string; srcSet?: string; alt?: string }) {
  const handleRightClickPrevention = (e: MouseEvent) => {
    e.preventDefault() // Disable the right-click menu
  }
  return (
    <img
      className="image"
      alt={alt}
      onContextMenu={() => handleRightClickPrevention}
      loading="lazy"
      src={src}
      srcSet={srcSet}
    />
  )
}
