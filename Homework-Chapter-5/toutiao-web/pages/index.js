// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }

import styles from "../styles/Card.module.css";
import React, { useEffect, useState } from "react";
import {AppBar} from "../components/AppBar";
import DisabledTabs from "../components/TebBar";
import Link from "next/link";
export default function Home() {
  const [state, setState] = useState({
    list: [],
  });

  useEffect(() => {
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
  }, []);

  return (
    <>
      <AppBar/>
      <DisabledTabs/>
      <div className={styles.container}>
        {/* <main className={styles.main}> */}
          {state.list.map((i) => {
            switch (i.type){
              case 'News':
                return (
                  <Link href="/">
                    <div className={styles.cardWrapper}>
                      <div className={styles.title}>{i.title}</div>
                      <div className={styles.source}>
                          <div>&nbsp;{i.author}&nbsp;⋅&nbsp;{i.commentsCount}评论</div>
                      </div>
                    </div>
                  </Link>
                );
              case 'OnePic': 
                return (
                    <Link href="/">
                    <div className={styles.cardWrapper}>
                      <div className={styles.word_holder}>
                      <div className={styles.title}>{i.title}</div>
                      <div className={styles.source}>
                          <div>&nbsp;{i.author}&nbsp;⋅&nbsp;{i.commentsCount}评论</div>
                      </div>
                      </div>
                      <div className={styles.img_holder}>
                        <img src={i.imgUrls}/>
                      </div>
                    </div>
                  </Link>
                );
              case 'MultiPic':
                return (
                  <Link href="/">
                  <div className={styles.cardWrapper}>
                    <div className={styles.title}>{i.title}</div>
                    <div className={styles.source}>
                        <div>&nbsp;{i.author}&nbsp;⋅&nbsp;{i.commentsCount}评论</div>
                    </div>
                    <div className={styles.muti_img}>
                      <img src={i.imgUrls[0]}/>
                      </div>
                      <div className={styles.muti_img}>
                      <img src={i.imgUrls[1]}/>
                      </div>
                      <div className={styles.muti_img}>
                      <img src={i.imgUrls[2]}/>
                      </div>
                  </div>
                </Link>
              );
            }
          })}
        {/* </main> */}
      </div>
    </>
  );
}





