import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1 className="topstyle_contact">Контакты</h1>
      <div>
        <p className="contact">Свяжитесь с нами по электронной почте:</p>
        <a className="contact_link" href="svetlmama1974@gmail.com">svetlmama1974@gmail.com</a>
        <p className="contact">Наш ТГ канал:</p>
        <a className="contact_link" href="https://t.me/Svetl_Orlova">
          https://t.me/Svetl_Orlova
        </a>
        <p className="contact">Наш телефон: +7 911 999 99 99</p>
      </div>

      <h2 className="subtitle">Будем рады общению и новым друзьям!</h2>
    </div>
  );
};

export default Contact;
