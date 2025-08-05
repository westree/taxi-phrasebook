import React from 'react';

interface PhraseButtonProps {
  phrase: string;
  onClick: () => void;
}

const PhraseButton: React.FC<PhraseButtonProps> = ({ phrase, onClick }) => {
  return (
    <button className="btn btn-primary btn-lg m-2" onClick={onClick}>
      {phrase}
    </button>
  );
};

export default PhraseButton;
