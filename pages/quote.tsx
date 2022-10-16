import type { NextPage } from "next";
import Layout from "@components/utility/Layout";

import styles from "@styles/quote/Quote.module.scss";
import { ArrowLeft, TickIcon } from "@components/utility/Icons";
import { quoteService } from "@data/data";
import { useState } from "react";

const Quote: NextPage = () => {
  return (
    <Layout title="Quote">
      <section className={styles.quote} id="quote">
        <div className="container">
          <div className={styles.header}>
            <h2>
              We&apos;d love to collaborate! Let us know what you&apos;re after.
            </h2>
            <p>
              Get an instant quote on your next site optimization. Just select
              the features you need, and we&apos;ll provide an instant estimate.
            </p>
          </div>
          <div className={styles.content_wrapper}>
            <div className={styles.quote_container}>
              <div className={styles.quote_container_top}>
                <div className={styles.progress_bar}>
                  <div className={styles.progress} style={{ width: "48%" }}>
                    48%
                  </div>
                </div>
              </div>
              <div className={styles.card_container}>
                {quoteService.map(({ title, desc, icon }) => (
                  <Card key={title} title={title} desc={desc} icon={icon} />
                ))}
              </div>
              <div className={styles.quote_container_bottom}>
                <button className={styles.next_btn}>Continue</button>
                <button className={styles.prev_btn}>
                  <ArrowLeft />
                  Return to Previous Step
                </button>
              </div>
            </div>
            <div className={styles.bill}>
              <div className={styles.bill_header}>
                <div className={styles.left}>Service</div>
                <div className={styles.right}>Price</div>
              </div>
              <div className={styles.bill_body}>
                <div className={styles.none}>No Services Selected</div>
              </div>
              <div className={styles.bill_footer}>
                <div className={styles.left}>Total</div>
                <div className={styles.right}>
                  <span>$00.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

type CardProps = {
  icon: React.FC;
  title: string;
  desc: string;
};

const Card: React.FC<CardProps> = ({ icon: Icon, title, desc }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const toggleSelect = () => {
    setSelected((prev) => !prev);
  };

  return (
    <div
      className={`${styles.card} ${selected ? styles.active : ""}`}
      onClick={toggleSelect}
    >
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.desc}>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
      <div className={styles.mark}>
        <TickIcon />
      </div>
    </div>
  );
};

export default Quote;
