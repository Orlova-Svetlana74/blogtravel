import React, { useState } from 'react';
import PostModal from '../components/postModal';
import gatchinaImage from '../images/gatchina.jpg';
import gatchinaImage1 from '../images/gatchina1.jpg';
import gatchinaImage2 from '../images/gatchina2.jpg';
import gatchinaImage3 from '../images/gatchina3.jpg';
import gatchinaImage4 from '../images/gatchina4.jpg';
import gatchinaImage5 from '../images/gatchina5.jpg';
import gatchinaImage6 from '../images/gatchina6.jpg';

import kargopolImage from '../images/kargopol.jpg';
import kargopol1 from '../images/kargopol1.jpg';
import kargopol2 from '../images/kargopol2.jpg';
import kargopol3 from '../images/kargopol3.jpg';
import kargopol4 from '../images/kargopol4.jpg';
import kargopol5 from '../images/kargopol5.jpg';
import kargopol6 from '../images/kargopol6.jpg';

import kigiImage from '../images/kigi.jpg';
import kigi1 from '../images/kigi1.jpg';
import kigi2 from '../images/kigi2.jpg';
import kigi3 from '../images/kigi3.jpg';
import kigi4 from '../images/kigi4.jpg';
import kigi5 from '../images/kigi5.jpg';
import kigi6 from '../images/kigi6.jpg';

import kivachImage from '../images/kivach.jpg';
import kivach1 from '../images/kivach1.jpg';
import kivach2 from '../images/kivach2.jpg';
import kivach3 from '../images/kivach3.jpg';
import kivach4 from '../images/kivach4.jpg';
import kivach5 from '../images/kivach5.jpg';
import kivach6 from '../images/kivach6.jpg';

import visozkImage from '../images/visozk.jpg';
import visozk1 from '../images/visozk1.jpg';
import visozk2 from '../images/visozk2.jpg';
import visozk3 from '../images/visozk3.jpg';
import visozk4 from '../images/visozk4.jpg';
import visozk5 from '../images/visozk5.jpg';
import visozk6 from '../images/visozk6.jpg';

const posts = [
  {
    id: 1,
    title: 'Путешествие в Гатчину',
    image: gatchinaImage,
    excerpt: 'Путешествие по пригороду Санкт-Петербурга, г. Гатчина...',
    content:
      'Мы с детьми отправились в город-спутник Санкт-Петербурга, Гатчину, летнюю резиденцию царя Павла 1. Там находится знаменитый Приоратский Дворец. Павел 1 был масоном Мальтийского ордена.Одна из главных достопримечательностей города Гатчины — пейзажный парковый ансамбль Дворцо́вый парк, созданный в конце XVIII века. Это старейший из комплекса гатчинских парков, его площадь составляет 143 гектара. Расположен в центральной части города. Вплотную прилегает к городским застройкам на западе и востоке. На юго-востоке проходит граница, разделяющая Дворцовый парк с Приоратским парком, на северо-западе — со Зверинцем, на западе расположен регулярный парк Сильвия, территория которого раньше входила в состав Дворцового парка. Главное сооружение парка — Большой Гатчинский дворец, расположенный в его юго-западной части.',
    img1: gatchinaImage1,
    img2: gatchinaImage2,
    img3: gatchinaImage3,
    img4: gatchinaImage4,
    img5: gatchinaImage5,
    img6: gatchinaImage6,
  },
  {
    id: 2,
    title: 'Экспедиция на русский север, город Каргополь',
    image: kargopolImage,
    excerpt:
      'Летнее путешествие в самое сердце русского севера, город Каргополь...',
    content:
      'Летом 2024 года был предпринят автомобильный тур по русскому северу. Наша команда посетила город Каргополь, находящийся на реке Онега. Видели много восстановленных церквей и храмов. Любовались суровой красотой северной природы и шедеврами русского деревянного зодчества.',
    img1: kargopol1,
    img2: kargopol2,
    img3: kargopol3,
    img4: kargopol4,
    img5: kargopol5,
    img6: kargopol6,
  },
  {
    id: 3,
    title: 'Кижская регата. Остров Кижи. Лето 2024г.',
    image: kigiImage,
    excerpt:
      'Остров Кижи в Онежском море является уникальным памятником русской деревянной архитектуры...',
    content:
      'На острове Кижи сохранилась Церковь Преображения Господня, построенная русскими мастерами. Храм включен в список всемирного наследия ЮНЕСКО. На острове находятся старинные дома жителей русского севера с сохранившимися предметами быта и уклада их жизни.',
    img1: kigi1,
    img2: kigi2,
    img3: kigi3,
    img4: kigi4,
    img5: kigi5,
    img6: kigi6,
  },
  {
    id: 4,
    title: 'Путешествие к водопаду Кивач',
    image: kivachImage,
    excerpt: 'Кивач - самый большой равнинный водопад в Европе...',
    content:
      'Кивач - самый большой равнинный водопад в Европе. Имет 4 ступени, высотат составляе 10 метров. Находится на территории республики Карелия, в природном заповеднике Кивач.',
    img1: kivach1,
    img2: kivach2,
    img3: kivach3,
    img4: kivach4,
    img5: kivach5,
    img6: kivach6,
  },
  {
    id: 5,
    title: 'Путешествие в Высоцк, Выборгский залив',
    image: visozkImage,
    excerpt: 'город Высоцк находится на берегу Выборгского залива...',
    content:
      'Природа здешних мест очень живописна. Скалистые берега, высокие сосны. Чувствуется близость приграничной территории. В разное вемя город обороняли от захватчиков, сохранились старые крепостные стены.',
    img1: visozk1,
    img2: visozk2,
    img3: visozk3,
    img4: visozk4,
    img5: visozk5,
    img6: visozk6,
  },
];

const Blog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="blog-list-content">
      <h1>Блог</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <div className="blog-post" key={post.id}>
            <h2 className="title_post">{post.title}</h2>
            <img className="image" src={post.image} alt={post.title} />
            <p>{post.excerpt}</p>
            <button onClick={() => openModal(post)}>Читать далее</button>
          </div>
        ))}
      </div>
      {selectedPost && (
        <PostModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          post={selectedPost}
        />
      )}
    </div>
  );
};

export default Blog;
