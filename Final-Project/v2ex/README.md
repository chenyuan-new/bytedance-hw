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

使用`next/Image`实现，但是出了一些问题，Image无法加载external source的图片，在`next.config.js`加入以下代码后无报错但图片加载失败，目前还在处理图片无法加载的问题
```
module.exports = {
    images: {
      domains: ['cdn.v2ex.com'],
    },
  };
```
