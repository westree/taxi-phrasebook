import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PhraseButton from './components/PhraseButton';
import LanguageSelector from './components/LanguageSelector';

const phrases = {
  'シートベルトをお締めください': {
    en: 'Please fasten your seatbelt.',
    ko: '안전벨트를 매주세요.',
    zh: '请系好安全带。',
    es: 'Por favor, abróchese el cinturón.',
  },
  '料金はメーターをご確認ください': {
    en: 'Please check the meter for the fare.',
    ko: '요금은 미터기를 확인해 주세요.',
    zh: '请查看计价器上的费用。',
    es: 'Por favor, revise el taxímetro para ver la tarifa.',
  },
  'クレジットカードがご利用できます': {
    en: 'Credit cards are accepted.',
    ko: '신용카드를 이용하실 수 있습니다.',
    zh: '可以使用信用卡。',
    es: 'Se aceptan tarjetas de crédito.',
  },
};

const languages = ['en', 'ko', 'zh', 'es'];
const languageNames: { [key: string]: string } = {
  en: 'English',
  ko: '한국어',
  zh: '中文',
  es: 'Español',
};


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = selectedLanguage;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Taxi Phrasebook</h1>
      <LanguageSelector 
        languages={languages.map(l => languageNames[l])}
        selectedLanguage={languageNames[selectedLanguage]}
        onSelect={(lang) => {
          const langCode = Object.keys(languageNames).find(key => languageNames[key] === lang) || 'en';
          setSelectedLanguage(langCode);
        }}
      />
      <div className="d-grid gap-2">
        {Object.keys(phrases).map(key => (
          <PhraseButton 
            key={key}
            phrase={key}
            onClick={() => speak(phrases[key as keyof typeof phrases][selectedLanguage as keyof typeof phrases[keyof typeof phrases]])}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
