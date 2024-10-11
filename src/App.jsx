import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { getImage } from "./api/getImage";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { ImageModal } from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [selectImg, setSelectImg] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (!searchValue) return;

    const fetchImage = async () => {
      try {
        setIsLoading(true);
        setLoadMore(false);
        const { results, total_pages } = await getImage(page, searchValue);

        if (!total_pages) return;

        setImages((prev) => [...prev, ...results]);
        setLoadMore(page < total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [page, searchValue]);

  const onSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;

    if (searchValue.length === 0) {
      toast("Field cannot be empty");
      return;
    }

    setSearchValue(searchValue);

    setImages([]);
    setPage(1);
    setLoadMore(false);

    e.target.reset();
  };

  const openModal = (image) => {
    setIsOpenModal(true);
    setSelectImg(image);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectImg(null);
  };

  const handleClick = () => {
    setPage((prev) => (prev += 1));
  };

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={onSubmit} />
        {searchValue && <ImageGallery images={images} openModal={openModal} />}
        {loadMore && <LoadMoreBtn handleClick={handleClick} />}
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        <ImageModal
          modalIsOpen={isOpenModal}
          closeModal={closeModal}
          selectImg={selectImg}
        />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
          }}
        />
      </Container>
    </Section>
  );
}

export default App;
