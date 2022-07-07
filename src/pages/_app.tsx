import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import en from '@/languages/en-US.json';
import vi from '@/languages/vi.json';

const messages = {
  en,
  vi,
};

function getDirection(locale: string | undefined) {
  if (locale === 'ar') {
    return 'rtl';
  }

  return 'ltr';
}

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale as string} messages={messages[locale as keyof typeof messages]}>
      <Component {...pageProps} dir={getDirection(locale)} />;
    </IntlProvider>
  );
}

export default MyApp;