import Head from 'next/head'
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { RecoilRoot, useRecoilState } from "recoil";
import { currentExperimentState } from "../states";

export default function Home() {
  const [currentExperiment, setCurrentExperiment] = useRecoilState(
    currentExperimentState
  );
  const empty = useRef(null)

  useEffect(() => {
    window.dataLayer.push('event', 'optimize.callback', {
      name: 'xLpdl6nFTdy0JPGg4H96Hw',
      callback: implementExperimentA
    })
  }, [])
  

    const implementExperimentA = (value) => {
      console.log(value)
        setCurrentExperiment(value)
    }
  return (
    <div className="container">
      <Head>
        <title>A/B Test tool research</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              callback: function(value){
                console.log('value', value)
                let elem = document.getElementById('empty')
                elem.innerText = value
              }
            })
        `,
        }}
      >
      </Script>
      <div id='empty' ref={empty}></div>
      currentExperiment : {currentExperiment}
      {currentExperiment == -1 ? (
        <div>
          no current experiment
        </div>
      ) : currentExperiment == 0 ? (
        <div style={{ backgroundColor: "red", color: "white" }}>
          currentExperiment is A(default)
        </div>
      ) : (
        <div style={{ backgroundColor: "black", color: "white" }}>
          currentExperiment is B
        </div>
      )}
    </div>
  );
}