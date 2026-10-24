import { Fragment } from 'react';
import { motion } from 'motion/react';
import { wordRise } from '../lib/variants';

/**
 * Разбивает текст на слова с маской для word-by-word reveal.
 * Пробелы между словами сохраняются для переноса строк.
 * Используется внутри заголовка с variants-контейнером (wordStagger).
 */
export default function Words({ text }: { text: string }) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <Fragment key={index}>
          <span className="word-mask">
            <motion.span className="word" variants={wordRise}>
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </>
  );
}
