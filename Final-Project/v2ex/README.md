This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
## Feature

### 夜间模式

一键切换夜间和白天模式 通过styled-components使用theme实现

### SSR

使用nextjs `getServerSideProps` 实现
### lazyload

使用`next/Image`实现，但是出了一些问题，Image无法加载external source的图片，在`next.config.js`加入以下代码后无报错但图片加载失败.
经过测试以及google发现是因为网络的问题，v2ex在国内无法访问，将项目部署在vercel上之后发现可以正常实现懒加载
项目地址：
`https://test-chi-virid.vercel.app/`

```
module.exports = {
    images: {
      domains: ['cdn.v2ex.com'],
    },
  };
```
