import Script from "next/script"


const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-164EV57676`}
      ></Script>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || []; 
            function gtag(){
                dataLayer.push(arguments);
            }
            gtag('js', new Date()); 
            gtag('config', 'G-164EV57676');
        `,
        }}
      ></Script>

      <Component {...pageProps} />
    </>
  );
};

export default App