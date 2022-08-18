import Script from "next/script"
import { RecoilRoot, useRecoilState } from "recoil";
import { currentExperimentState } from "../states";


const App = ({ Component, pageProps }) => {

    const [currentExperiment, setCurrentExperiment] = useRecoilState(currentExperimentState)

    const implementExperimentA = (value) => {
        setCurrentExperiment(value)
    }

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

            gtag('event', 'optimize.callback', {
                name: 'xLpdl6nFTdy0JPGg4H96Hw',
                callback: ${implementExperimentA}
            })
        `,
        }}
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
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App