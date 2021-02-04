import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.scss";

import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
