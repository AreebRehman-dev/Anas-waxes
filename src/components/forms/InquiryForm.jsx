'use client';

import { useId, useState } from 'react';
import Button from '@/components/ui/Button';
import { submitInquiry } from '@/lib/inquiry';
import styles from './InquiryForm.module.css';

const EMPTY = { name: '', email: '', message: '' };

const MESSAGES = {
  idle: 'We only use your details to reply to your request.',
  submitting: 'Sending…',
  sent: 'Thank you. Your request has been sent.',
  mailto: 'Your email app should open with the message ready to send.',
  error: 'Something went wrong. Please try again, or email us directly.',
};

export default function InquiryForm() {
  const id = useId();
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle');

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    try {
      const result = await submitInquiry(values);
      if (result === 'sent') setValues(EMPTY);
      setStatus(result);
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor={`${id}-name`}>
          Name
        </label>
        <input
          className={styles.control}
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={update('name')}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={`${id}-email`}>
          Email address
        </label>
        <input
          className={styles.control}
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={update('email')}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={`${id}-message`}>
          Leave a message
        </label>
        <textarea
          className={`${styles.control} ${styles.textarea}`}
          id={`${id}-message`}
          name="message"
          required
          value={values.message}
          onChange={update('message')}
        />
      </div>

      <Button
        type="submit"
        variant="solid"
        className={styles.submit}
        disabled={status === 'submitting'}
      >
        Submit
      </Button>

      <p className={styles.status} role="status" aria-live="polite">
        {MESSAGES[status]}
      </p>
    </form>
  );
}
