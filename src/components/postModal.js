import React from 'react';
import Modal from 'react-modal';
// import ReactImageLightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Импорт стилей для лайтбокса

const PostModal = ({ isOpen, onRequestClose, post }) => {
  // const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    post.img1,
    post.img2,
    post.img3,
    post.img4,
    post.img5,
    post.img6,
  ]; // Массив изображений
  // const openLightbox = (index) => {
  //   console.log('Opening lightbox with index:', index);
  //   setCurrentImageIndex(index);
  //   setIsLightboxOpen(true);
  // };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay">
      <h2 className="titlemodal">{post.title}</h2>
      <button onClick={onRequestClose}>Закрыть</button>
      <p className="modal-content">{post.content}</p>
      <div className="image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Гатчина ${index + 1}`}
            className="modal-image"
            // onClick={() => openLightbox(index)} // Открытие лайтбокса при клике на изображение
            // style={{ cursor: 'pointer', margin: '10px', width: '200px' }}
          />
        ))}
      </div>
      {/* {isLightboxOpen && (
        <ReactImageLightbox
          mainSrc={images[currentImageIndex]}
          nextSrc={images[(currentImageIndex + 1) % images.length]}
          prevSrc={
            images[(currentImageIndex + images.length - 1) % images.length]
          }
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImageIndex(
              (currentImageIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentImageIndex((currentImageIndex + 1) % images.length)
          }
        />
      )} */}
    </Modal>
  );
};
export default PostModal;
