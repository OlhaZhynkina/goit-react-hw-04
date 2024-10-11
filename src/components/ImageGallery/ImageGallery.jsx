import { ImageCard } from "./ImageCard";
import s from "../ImageGallery/ImageGallery.module.css";

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.list}>
      {images?.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
