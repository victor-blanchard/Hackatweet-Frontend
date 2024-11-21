import '../styles/globals.css';
import Head from 'next/head';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';


const store = configureStore({
  reducer: { },
});
function App({ Component, pageProps }) {
  return (
    <>
     <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
