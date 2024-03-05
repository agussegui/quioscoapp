import Head from 'next/head';

export default function Home({children, pagina}) {
    return (
      <>
        <Head>
            <title>Cafe - {pagina}</title>

        </Head>
      
      </>
    );
}