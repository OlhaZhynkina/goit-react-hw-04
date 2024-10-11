import s from "../ImageGallery/ImageCard.module.css";

export const ImageCard = ({ image, openModal }) => {
  return (
    <div className={s.wrap}>
      <img
        className={s.img}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() =>
          openModal({ alt: image.alt_description, src: image.urls.full })
        }
      />
    </div>
  );
};
