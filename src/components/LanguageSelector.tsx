import React from 'react';

interface LanguageSelectorProps {
  languages: string[];
  selectedLanguage: string;
  onSelect: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages, selectedLanguage, onSelect }) => {
  return (
    <div className="mb-3">
      <label htmlFor="language-select" className="form-label">Language:</label>
      <select 
        id="language-select"
        className="form-select"
        value={selectedLanguage}
        onChange={(e) => onSelect(e.target.value)}
      >
        {languages.map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
