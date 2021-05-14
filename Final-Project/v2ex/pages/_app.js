import { GlobalStyles } from '../styles/globalStyles'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

const blackTheme = {
  logoColor: '#eee',
  color: '#eee',
  bgColor: '#000',
  cardBgColor: '#000',
  navBgColor: '#1c1e21',
  tagBgColor: '#1c1e21',
  countBgColor: '#1c1e21',
  tabBgColor: '#1c1e21',
}

const whiteTheme = {
  logoColor: '#000',
  color: '#444',
  bgColor: '#dedede',
  cardBgColor: '#fff',
  navBgColor: '#fff',
  tagBgColor: '#f5f5f5',
  countBgColor: '#aab0c6',
  tabBgColor: '#334',
}

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(blackTheme)

  useEffect(() => {
    setTheme(
      localStorage.getItem('theme') === 'white' ? whiteTheme : blackTheme,
    )
  }, [])

  function changeThemeHandler(e) {
    if (e.target.checked) {
      setTheme(blackTheme)
      localStorage.setItem('theme', 'black')
    } else {
      setTheme(whiteTheme)
      localStorage.setItem('theme', 'white')
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Head>
          <title>v2ex</title>
        </Head>
        <div className="wrapper">
          <nav className="header">
            <div className="logo">
              <Link href="/">
                <a>V2EX</a>
              </Link>
            </div>
            <div className="menu">
              <span className="theme">
                <label>
                  <input
                    onChange={changeThemeHandler}
                    type="checkbox"
                    checked={theme === blackTheme ? 'checked' : ''}
                  ></input>
                  夜间模式
                </label>
              </span>
              <Link href="/">
                <a>首页</a>
              </Link>
              <Link href="/">
                <a>登录</a>
              </Link>
              <Link href="/">
                <a>注册</a>
              </Link>
            </div>
          </nav>
          <main className="container">
            <Component {...pageProps} />
          </main>
          <footer className="footer">
            <hr/>
            我是有底线的
          </footer>
        </div>
      </ThemeProvider>
    </>
  )
}
