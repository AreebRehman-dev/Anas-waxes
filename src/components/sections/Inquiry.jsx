import Image from 'next/image';
import inquiryImage from '@/assets/images/inquiry.jpg';
import InquiryForm from '@/components/forms/InquiryForm';
import styles from './Inquiry.module.css';

/* Pass `product` (a name) to start the message with a quote request for it. */
export default function Inquiry({ product }) {
  const initialMessage = product ? `I would like a quote for ${product}.\n\n` : '';

  return (
    <section className={styles.section} id="inquiry" aria-labelledby="inquiry-title">
      <div className={`reveal-photo ${styles.media}`}>
        <Image
          src={inquiryImage}
          alt="Racks of wax slabs inside the Anas Waxes storage hall"
          fill
          sizes="(max-width: 899px) 100vw, 44vw"
          placeholder="blur"
          className={`parallax-photo ${styles.image}`}
        />
      </div>

      <div className={styles.panel}>
        <div className="reveal">
          <h2 id="inquiry-title" className={`display ${styles.title}`}>
            Inquiry &amp; Quote
          </h2>
          <InquiryForm initialMessage={initialMessage} />
        </div>
      </div>
    </section>
  );
}
