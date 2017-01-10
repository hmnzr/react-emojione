import React from 'react';
import styles from '../styles/emojione-sprite';
import {codepointToShort, codepointToUnicode} from '../utils/emoji-format-conversion';

const Emoji = ({codepoint, customStyles = {}, handleClick}) => (
    <span
        onClick={handleClick}
        style={styles.sprite(codepoint, customStyles)}
    >
        {codepointToUnicode.get(codepoint)}
    </span>
);

const getRenderer = ({styles, handleClick}) => (codepoint, key) => (
    <Emoji
        codepoint={codepoint}
        customStyles={styles}
        handleClick={handleClick}
        key={key}
    />
);


export default getRenderer;
