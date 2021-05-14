import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: helvetica neue,luxi sans,dejavu sans,segoe ui,hiragino sans gb,microsoft yahei,sans-serif;
  line-height: 1.6;
  font-size: 14px;
  color: ${({ theme }) => theme.color}; //从props解构出theme
  background-color:  ${({ theme }) => theme.bgColor}; 
}

* {
  box-sizing: border-box;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  color: #778087;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:visited {
  color: #afb9c1;
}

img {
  max-width: 100%;
  display: block;
}

.header {
  display: flex;
  margin: 0 auto;
  align-items: center;
  font-size: 1.1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
  padding: 0.5rem 0.8rem;
  background-color:  ${({ theme }) => theme.navBgColor};
  .logo {
    flex: 1 1 auto;
    display: flex;
    font-size: 1.6rem;
    font-weight: 800;
    a { 
      text-decoration: none;
      color:${({ theme }) => theme.logoColor};
    }
  }
  .menu {
    a {
      margin-right: 1rem;
    }
  }
}

.container {
  max-width: 100%;
  margin: 12px auto 0 auto;
  flex: 1 1 auto;
}

.footer {
  margin: 0 auto;
  background-color: ${({ theme }) => theme.navBgColor};
  text-align: center;
  }
}

.card {
  background-color: ${({ theme }) => theme.cardBgColor}; 
  padding: 0.8rem;
}

.theme {
  font-size: 1.1rem;
  margin: 0 1rem;
  color:#778087; 
}

@media (max-width: 1024px) {
  .header,
  .container,
  .footer {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .header,
  .container,
  .footer {
    width: 1024px;
  }
}

`
