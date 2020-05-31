import Head from "next/head";
import "../styles/global.css";
import { SeatProvider } from "../contexts/seatContext";
import { AlgoProvider } from "../contexts/algoContext";

export default function App({ Component, pageProps }) {
  return (
    <SeatProvider>
      <AlgoProvider>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Cabin"
            rel="stylesheet"
            key="google-font-cabin"
          />
        </Head>
        <Component {...pageProps} />
      </AlgoProvider>
    </SeatProvider>
  );
}
