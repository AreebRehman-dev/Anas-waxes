import Image from 'next/image';
import inquiryImage from '@/assets/images/inquiry.jpg';
import InquiryForm from '@/components/forms/InquiryForm';
import styles from './Inquiry.module.css';

export default function Inquiry() {
  return (
    <section className={styles.section} id="inquiry" aria-labelledby="inquiry-title">
      <div className={styles.media}>
        <Image
          src={inquiryImage}
          alt="Racks of wax slabs inside the Anas Waxes storage hall"
          fill
          sizes="(max-width: 899px) 100vw, 44vw"
          placeholder="blur"
          className={styles.image}
        />
      </div>

      <div className={styles.panel}>
        <div className="reveal">
          <h2 id="inquiry-title" className={`display ${styles.title}`}>
            Inquiry &amp; Quote
          </h2>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
