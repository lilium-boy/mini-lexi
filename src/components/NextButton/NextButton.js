import React from 'react';
import PropTypes from 'prop-types';
import styles from './NextButton.module.css';

const NextButton = ({ onClick, disabled, label }) => {
    return (
        <button 
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

NextButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired
};

NextButton.defaultProps = {
    disabled: false,
    label: '次へ' // デフォルト値を設定
};

export default NextButton;