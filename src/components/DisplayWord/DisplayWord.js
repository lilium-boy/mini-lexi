import React from 'react';
import PropTypes from 'prop-types';
import styles from './DisplayWord.module.css';

const DisplayWord = ({hiragana, word, image}) => {
    const highlightHiragana = (word, hiragana) => {
        const index = word.indexOf(hiragana);
        if (index === -1) return <span>{word}</span>;
        
        return (
            <>
                {word.slice(0, index)}
                <span className={styles.highlight}>{hiragana}</span>
                {word.slice(index + hiragana.length)}
            </>
        );
    };

    return (
        <div className={styles.wordDisplay}>
            <div className={styles.hiragana}>{hiragana}</div>
            <div className={styles.content}>
                <img src={`/assets/${image}`} alt={word} className={styles.wordImage}/>
                <p className={styles.word}>{highlightHiragana(word, hiragana)}</p>
            </div>
        </div>
    );
};

DisplayWord.propTypes = {
    hiragana: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default DisplayWord;