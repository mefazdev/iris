import '@/styles/globals.css'

import '@/styles/home.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
    <style>
  @import url(&apos;https://fonts.googleapis.com/css2?family=Charis+SIL:wght@700&family=Inconsolata:wght@500&family=Margarine&family=Montserrat:wght@300&family=Nunito&family=Roboto&family=Rubik:ital,wght@0,400;1,300&family=Space+Mono:wght@400;700&display=swap&apos;);
</style>
    <style>
  @import url(&apos;https://fonts.googleapis.com/css2?family=Charis+SIL:wght@700&family=Inconsolata:wght@500&family=Margarine&family=Montserrat:wght@300&family=Nunito&family=Roboto&family=Rubik:ital,wght@0,400;1,300&display=swap&apos;);
</style>
    </Head>
      
    <Component {...pageProps} />
    </>
  )
  
  



}
