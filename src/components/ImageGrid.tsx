import "./ImageGrid.css";

export function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="gridContainer">
      <img src={images[0]} className="gridContainer-vertical" />
      <img src={images[1]} className="gridContainer-horizontal" />
      <img src={images[2]} className="gridContainer-horizontal" />
    </div>
  );
}
