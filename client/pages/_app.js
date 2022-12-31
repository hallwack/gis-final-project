import { Inter } from "@next/font/google";
import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MyApp;
