import { useRouter } from 'next/router';
import useSWR from 'swr';

import HeadTag from '../components/HeadTag';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const fetcher = (url) => {
  return fetch(url).then(r => r.json());
}

export default function Index() {
  // const { query } = useRouter();
  // const { data, error } = useSWR(
  //   `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
  //   fetcher
  // );
  // // The following line has optional chaining, added in Next.js v9.1.5,
  // // is the same as `data && data.author`
  // const author = data?.author;
  // let quote = data?.quote;

  // if (!data) quote = 'Loading...';
  // if (error) quote = 'Failed to fetch the quote.';

  const { data, error } = useSWR(
    "https://asia-northeast1-giselletrithip-functions.cloudfunctions.net/getQuote",
    fetcher
  );
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <>
      <HeadTag />
      <Navbar />
      <div className="container">
      <div className="columns body-columns">
        <div className="column is-one-third is-offset-one-third">
          {/* <Card image={data.image} caption={data.caption} /> */}
          <Card image="/img/IMG_0002.jpg" caption={quote} />
          <Card image="/img/IMG_0003.jpg" />
          <Card image="/img/IMG_0004.jpg" />
        </div>
      </div>
      </div>


      {/* <main className="center">
      <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}
      </main> */}

      <style jsx>{`
      .body-columns {
        margin-top: 5vh;
      }
      
      .footer {
        margin-top: 10vh;
        padding: 2rem 1.5rem;
      }
      `}</style>
    </>

  );
}
