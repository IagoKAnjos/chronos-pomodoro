import type React from 'react';
import styles from './styles.module.css';

const INPUT_TYPES = {
  text: 'text',
  number: 'number',
  boolean: 'boolean',
} as const;

type InputType = keyof typeof INPUT_TYPES;

type DefaultInputProps = React.ComponentProps<'input'> & {
  type: InputType;
  id: string;
  labelText?: string;
};

export function DefaultInput({
  id,
  type,
  labelText,
  ...props
}: DefaultInputProps) {
  return (
    <>
      {labelText && (
        <label className={styles.DefaultInputLabel} htmlFor={id}>
          {labelText}
        </label>
      )}
      <input className={styles.DefaultInput} id={id} type={type} {...props} />
    </>
  );
}
