import React from "react";
import Page from "@components/utility/Page";

import styles from "@styles/quote/Quote.module.scss";
import { ArrowLeft, MoneyIcon, TickIcon } from "@components/utility/Icons";

const Quote: React.FC = () => {
  return (
    <Page title="Quote">
      <section className={styles.quote} id="quote">
        <div className="container">
          <div className={styles.page_header}>
            <h2>Instant SEO Services Quote</h2>
            <p>
              Get an instant quote on your next site optimization. Just select
              the features you need, and we&apos;ll provide an instant estimate.
            </p>
          </div>
          <div className={styles.card_wrapper}>
            <div className={styles.service_card}>
              <div className={styles.top_panel}>
                <div className={styles.progress_bar}>
                  <div
                    className={styles.progress}
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <span>2 / 7</span>
              </div>
              <h3 className={styles.question}>What is your primary target?</h3>
              <div className={styles.card_container}>
                <div className={styles.card}>
                  <div className={styles.card_icon}>
                    <MoneyIcon />
                  </div>
                  <p className={styles.service_name}>Increase Online Sales</p>
                </div>
                <div className={styles.card}>
                  <div className={styles.card_icon}>
                    <MoneyIcon />
                  </div>
                  <p className={styles.service_name}>Increase Online Sales</p>
                </div>
                <div className={styles.card}>
                  <div className={styles.card_icon}>
                    <MoneyIcon />
                  </div>
                  <p className={styles.service_name}>Increase Online Sales</p>
                </div>
              </div>
              <div className={styles.bottom_panel}>
                <button className={styles.next_btn}>
                  <TickIcon />
                  Next Step
                </button>
                <button className={styles.prev_btn}>
                  <ArrowLeft />
                  Return to the previous step
                </button>
              </div>
            </div>
            <div className={styles.bill}>
              <div className={styles.bill_header}>
                <div className={styles.left}>Service</div>
                <div className={styles.right}>Price</div>
              </div>
              <div className={styles.bill_footer}>
                <span>Total</span>
                <span className={styles.bold}>$00.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Quote;
