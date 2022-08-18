import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>A/B Test tool research</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-164EV57676"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-164EV57676');
        </script>
      </Head>
    </div>
  );
}
