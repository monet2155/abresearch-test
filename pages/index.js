import Head from 'next/head'
import { RecoilRoot, useRecoilState } from "recoil";
import { currentExperimentState } from "../states";

export default function Home() {
  const [currentExperiment, setCurrentExperiment] = useRecoilState(currentExperimentState)

  return (
    <div className="container">
      <Head>
        <title>A/B Test tool research</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        currentExperiment == 0 ? <div style={{backgroundColor: 'red', color: 'white'}}>
          currentExperiment is A(default)
        </div> :
        <div style={{backgroundColor: 'black', color: 'white'}}>
          currentExperiment is B

        </div>
      }

    </div>
  );
}