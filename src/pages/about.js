import React from 'react';
import uchasnikiRegaty from '../images/uchasniki_regaty.jpg'; // Импортируем изображение
import gonkaValgerda from '../images/gonka_Valgerda.jpg'; // Импортируем изображение
import gamaun from '../images/gamaun.jpg'; // Импортируем изображение
import kapitan from '../images/kapitan.jpg'; // Импортируем изображение
import skazki from '../images/skazki.jpg'; // Импортируем изображение


const About = () => {
  return (
    <div className="divstyle">
      <div className="toptext">
        <img src={uchasnikiRegaty} alt="uchasnikiRegaty" className="imgstyle" />
        <h1 className="topstyle">О нас</h1>
        <img src={skazki} alt="skazki" className="imgstyle" />
      </div>

      <p className="textpresent">
        Мы - команда энтузиастов, делящаяся своими приключениями. Наши дети
        приучаются любить родную природу, не бояться трудностей и познавать
        самих себя. На страницах нашего блога Вы найдете много интересных
        маршрутов, лайфхаки, фото и видеоматериалы из путешествий. Напишите нам,
        если у Вас есть что тоже нам рассказать!
      </p>
      <div className="blockpictures">
        <img src={gonkaValgerda} alt="gonkaValgerda" className="imgstyle" />
        <img src={gamaun} alt="gamaun" className="imgstyle" />
        <img src={kapitan} alt="kapitan" className="imgstyle" />
      </div>
    </div>
  );
};

export default About;
