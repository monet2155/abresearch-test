import Script from "next/script"
import { RecoilRoot, useRecoilState } from "recoil";

const App = ({ Component, pageProps }) => {

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-164EV57676`}
      ></Script>
      <Script strategy="afterInteractive">
        {`(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'OPT-T9PJTTQ':true});`}
      </Script>
      <Script src="https://www.googleoptimize.com/optimize.js?id=OPT-T9PJTTQ"></Script>
      <RecoilRoot>
        <Component {...pageProps}/>
      </RecoilRoot>
    </>
  );
};

export default App