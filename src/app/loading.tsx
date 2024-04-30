import { VolumeIcon } from "@/components/ui/icons/volume";
import styles from "@/styles/loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <VolumeIcon width={40} height={40} />
      <p>Loading...</p>
    </div>
  );
}
