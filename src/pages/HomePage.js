import React, {useState, useEffect} from 'react';
import DisplayWord from '../components/DisplayWord/DisplayWord';
import NextButton from '../components/NextButton/NextButton';

const HomePage = () => {
    const [hiraganaData, setHiraganaData] = useState({});
    const [currentWord, setCurrentWord] = useState(null);
    const [currentHiragana, setCurrentHiragana] = useState('');

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',    // 水平方向の中央揃え
        justifyContent: 'center', // 垂直方向の中央揃え
        minHeight: '100vh',      // ビューポートの高さいっぱいに
        padding: '20px'          // 余白を追加
    };

    // useCallbackを使用しない通常の関数として定義
    const selectRandomWord = (data) => {
        const hiraganaKeys = Object.keys(data);
        let randomHiragana;
        do {
            randomHiragana = hiraganaKeys[Math.floor(Math.random() * hiraganaKeys.length)];
        } while (randomHiragana === currentHiragana && hiraganaKeys.length > 1);

        const words = data[randomHiragana];
        const randomWord = words[Math.floor(Math.random() * words.length)];

        setCurrentHiragana(randomHiragana);
        setCurrentWord(randomWord);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/hiragana.json');
                const data = await response.json();
                setHiraganaData(data);
                selectRandomWord(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // 依存配列を空にする

    const handleNext = () => {
        selectRandomWord(hiraganaData);
    };

    if (!currentWord) {
        return (
            <div style={containerStyle}>
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <DisplayWord
                hiragana={currentHiragana}
                word={currentWord.word}
                image={currentWord.image}
            />
            <NextButton onClick={handleNext} label={"次の単語"}/>
        </div>
    );
};

export default HomePage;