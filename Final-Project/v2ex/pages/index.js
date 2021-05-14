import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import posts from '../data/list.json'

const Tabs = styled.div`
  padding: 0.2 rem;
  display: flex;
  flex-wrap: wrap;
  a {
    padding: 0 0.5rem;
    border-radius: 0.2rem;
    margin-right: 1rem;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: #555;
  }

  a:hover {
    background: #eee;
  }

  .active {
    &:visited {
      color: white;
    }
    background-color: ${({ theme }) => theme.tabBgColor};
  }
`

const Item = styled.div`
  margin: 0.5rem 0;
  &::before {
    display: block;
    content: '';
    background-color: ${({ theme }) => theme.tagBgColor};
    height: 1px;
    margin: 0.5rem -0.8rem;
  }
  .item {
    display: flex;
    align-items: center;
  }

  .Img {
    border-radius: 0.3rem;
    align-self: flex-start;
    width: 48px;
    height: 48px
  }

  .info {
    flex: 1 1 auto;
    margin: 0 1rem;
    .title {
      font-size: 1.1rem;
    }
  }

  .comment_count {
    margin-left: 1rem;
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.countBgColor};
    padding: 0 0.5rem;
    color: white;
  }
`

const TabsBar = ({ current }) => {
  const tabs = [
    { name: '技术', id: 'tech' },
    { name: '创意', id: 'creative' },
    { name: '好玩', id: 'play' },
    { name: 'Apple', id: 'apple' },
    { name: '酷工作', id: 'jobs' },
    { name: '交易', id: 'deals' },
    { name: '城市', id: 'city' },
    { name: '问与答', id: 'qna' },
    { name: '最热', id: 'hot' },
    { name: '全部', id: 'all' },
    { name: 'R2', id: 'r2' },
  ]

  return (
    <Tabs>
      {tabs.map((t) => (
        <Link key={t.id} href="/tab/[id]" as={`/tab/${t.id}`}>
          <a className={current === t.id ? 'active' : ''}>{t.name}</a>
        </Link>
      ))}
    </Tabs>
  )
}

export default function Home({ posts, current }) {
  return (
    <div className="card">
      <TabsBar current={current} />
      {posts.map((p) => (
        <Item key={p.title_id}>
          <div className="item">
            <img className="Img" alt={p.author} src={p.avatar_url} />
            {/* <Image width={48} height={48} className="Img" alt={p.author} src={p.avatar_url} />*/}
            <div className="info">
              <Link href="/content/[id]" as={`/content/${p.id}`}>
                <a className="title">{p.title}</a>
              </Link>
            </div>
            <div className="comment_count">
                {p.comment_count}
            </div>
          </div>
        </Item>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  return { props: { posts: posts['all'] } }
}
