import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleLangChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const lang = evt.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-black text-center p-3">{t('global.helloWorld')}</h1>
      <div className="w-full text-center">
        <select onChange={handleLangChange} value={language} style={{ background: 'black' }}>
          <option value="en">EN</option>
          <option value="vi">VI</option>
        </select>
      </div>
    </>
  );
};

export default HomePage;
