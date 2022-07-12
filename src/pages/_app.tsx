import '@/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import en from '@/languages/en-US.json';
import vi from '@/languages/vi.json';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import 'antd/dist/antd.css';
import { LayoutMain } from '@/components/Layout';

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
      <Provider store={store}>
        <LayoutMain>
          <Component {...pageProps} dir={getDirection(locale)} />
        </LayoutMain>
      </Provider>
    </IntlProvider>
  );
}

export default MyApp;
