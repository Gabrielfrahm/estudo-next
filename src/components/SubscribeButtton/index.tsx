import styles from "./styles.module.scss";

interface SubscriptionProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscriptionProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
