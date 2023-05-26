import "../styles/global.scss";
import { DashboardLayout, UserLayout } from "../layouts";
import { ChakraProvider } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps, router }) {
  const Layout = router?.pathname?.includes("dashboard")
    ? DashboardLayout
    : UserLayout;
  return (
    <ChakraProvider>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
