import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/global.scss";
import { ChakraProvider } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { DashboardLayout, UserLayout } from "../layouts";

export default function MyApp({ Component, pageProps, router }) {
  const Layout = router?.pathname?.includes("dashboard")
    ? DashboardLayout
    : UserLayout;
  return (
    <Provider store={store}>
      <ChakraProvider>
        <ToastContainer />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
