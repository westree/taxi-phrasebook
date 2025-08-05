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
  },
  'お支払いは現金ですか？カードですか？': {
    en: 'Cash or card?',
    ko: '현금으로 하시겠어요? 카드로 하시겠어요?',
    zh: '请问您用现金还是刷卡？',
  },
  '料金はメーターの通りです。クレジットカードが利用できます': {
    en: 'The fare is as shown on the meter. Credit cards are accepted.',
    ko: '요금은 미터기에 표시된 대로입니다. 신용카드를 사용할 수 있습니다.',
    zh: '车费如计价器所示。您可以使用信用卡。',
  },
};

const languages = ['en', 'ko', 'zh'];
const languageNames: { [key: string]: string } = {
  en: 'English',
  ko: '한국어',
  zh: '中文',
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
