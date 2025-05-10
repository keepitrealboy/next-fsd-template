import styles from './home.module.scss';
import Image from 'next/image';

export const metadata = {
  title: 'Next.js FSD Starter',
  description:
    'A simple starter template for building modular Next.js apps with App Router and FSD.',
};

export default function HomePage() {
  return (
    <main className={styles.home}>
      <div className={styles.container}>
        <Image src="/favicon.ico" alt="Logo" width={64} height={64} />
        <h1>Welcome to Next.js + FSD Starter</h1>
        <p>
          This project is powered by <strong>App Router</strong>, <strong>TypeScript</strong>,{' '}
          <strong>ESLint</strong>, <strong>Prettier</strong>, <strong>Stylelint</strong>, and
          follows the <strong>Feature-Sliced Design</strong> methodology.
        </p>
        <code className={styles.path}>src/features/hello-world</code>
      </div>
    </main>
  );
}
