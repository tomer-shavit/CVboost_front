import styles from "../styles/typing.module.css";
export const TypingHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <h1
        className={`${styles.typing} mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`}
      >
        {text}
      </h1>
    </div>
  );
};
