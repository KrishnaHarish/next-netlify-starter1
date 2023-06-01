import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react';
import tableau from 'tableau-api';



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        {/* Tableau Visualization Placeholder */}
        <div className='tableauPlaceholder' id='viz1685597832281' style={{ position: 'relative' }}>
          <noscript>
            <a href='#'>
              <img alt='Dashboard 1' src='https://public.tableau.com/static/images/so/socialmedia_16853842767100/Dashboard1/1_rss.png' style={{ border: 'none' }} />
            </a>
          </noscript>
          <object className='tableauViz' style={{ display: 'none' }}>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' />
            <param name='name' value='socialmedia_16853842767100/Dashboard1' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/so/socialmedia_16853842767100/Dashboard1/1.png' />
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en-GB' />
            <param name='filter' value='publish=yes' />
          </object>
        </div>
      </main>

      <Footer />
    </div>
  )
}
