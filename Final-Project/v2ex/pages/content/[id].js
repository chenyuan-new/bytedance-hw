import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import data from '../../data/detail.json'
const PostComponent = styled.article`
  .title {
    h1 {
      font-size: 1.8rem;
      font-weight: 500;
      margin: 0;
    }

    &::after {
      display: block;
      content: '';
      background-color: ${({ theme }) => theme.tagBgColor};
      height: 1px;
      margin: 0.5rem -0.8rem;
    }
  }

  .content {
    word-break: break-all;
  }
`
const Comments = styled.div`
  margin: 0.5rem 0 0 0;
  .reply_count {
    color: #ddd;
    padding: 0.5rem;

    &::after {
      display: block;
      content: '';
      background-color: ${({ theme }) => theme.tagBgColor};
      height: 1px;
      margin: 0.5rem -0.8rem;
    }
  }
  .comment {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    .avatar {
      border-radius: 0.3rem;
      align-self: flex-start;
      width: 48px;
      height: 48px;
    }

    .middle {
      flex: 1 1 auto;
      margin: 0 1rem;

      .ago {
        font-size: 12px;
        margin: 0 8px;
        color: #ccc;
      }

      .content {
        margin-top: 8px;
        word-break: break-all;
      }
    }

    .no {
      align-self: center;
      color: #ccc;
      font-size: 0.8rem;
      span {
        padding: 3px 6px;
        border-radius: 12px;
        background: ${({ theme }) => theme.tagBgColor};
      }
    }
  }

  .noComments {
    padding: 1rem;
    color: #ddd;
    text-align: center;
  }

  .item::after {
    display: block;
    content: '';
    background-color: ${({ theme }) => theme.tagBgColor};
    height: 1px;
    margin: 0.5rem -0.8rem;
  }
`

function createMarkup(content) {
  return { __html: content }
}

export default function Post(props) {
  const { id, title, content, author, replies, reply_count } = props
  return (
    <>
      <Head>
        <title> {title}</title>
      </Head>
      <PostComponent className="card">
        <div className="title">
          <h1>{title}</h1>
          {author}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={createMarkup(`${content}`)}
        />
      </PostComponent>
      <Comments className="card">
        <div className="reply_count">{reply_count}</div>
        {(replies &&
          replies.length &&
          replies.map((r) => {
            return (
              <div className="item" key={r.no}>
                <div className="comment">
                  <img className="avatar" alt={r.author} src={r.avatar_url} />
                  <div className="middle">
                    <span>
                      {r.author}
                      <span className="ago">{r.ago}</span>
                    </span>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={createMarkup(`${r.content}`)}
                    />
                  </div>
                  <div className="no">
                    <span>{r.no}</span>
                  </div>
                </div>
              </div>
            )
          })) || <div className="noComments">暂无评论</div>}
      </Comments>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const id = ctx.params.id
  const post = data[id]
  return {
    props: { ...post, id: id },
  }
}
