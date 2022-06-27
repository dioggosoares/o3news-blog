import { useState } from 'react';
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import Router from "next/router";
import TopBarProgress from "react-topbar-progress-indicator"
import { ToastContainer } from 'react-toastify';

// IMPORT COMPONENTS
import { Header } from '../components/Header'
import { Feedget } from "../components/Widget"
import { Footer } from '../components/Footer'

// IMPORT CSS
import '../styles/global.scss'

// CONFIG ROUTER LOADBAR
TopBarProgress.config({
  barColors: {
    "0": "#eba41750",
    "1.0": "#eba417",
  },
  shadowBlur: 5
});

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  const [progress, setProgress] = useState(false)

  Router.events.on("routeChangeStart", () => {
    setProgress(true)
    // função chamada quando inicia o carregamento da page
  })

  Router.events.on("routeChangeComplete", () => {
    setProgress(false)
    // função chamada quando a nova page carregar
  })

  return (
    <SessionProvider session={session}>
      {progress && <TopBarProgress />}
      <Header />
      <Component {...pageProps} />
      <Feedget />
      <Footer/>
      <ToastContainer
        progressClassName="toastProgress"
      />
    </SessionProvider>
  )
}

export default MyApp
