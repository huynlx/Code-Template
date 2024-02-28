import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('vi');

  const handleLangChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const lang = evt.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <h1 className="huynh text-3xl font-bold text-red-500 text-center p-3">
        {t('global.helloWorld')}
      </h1>
      <br />
      <div className="w-full text-center">
        <select onChange={handleLangChange} value={language}>
          <option value="vi">VI</option>
          <option value="en">EN</option>
        </select>
      </div>
    </>
  );
};

export default HomePage;
