import "../styles/globals.css";
import Head from "next/head";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import user from "../reducers/user";

const store = configureStore({
  reducer: { user },
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
