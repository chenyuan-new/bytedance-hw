import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { a } from 'react-spring'
import InfiniteSlider from './Slider'
import items from './items'
import './styles.css'

const Main = styled.div`
  height: 450px;
  width: 80%;
  margin: 0 auto;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
`

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`

function App() {
  return (
    <Main>
      <InfiniteSlider items={items}>
        {({ css }, i) => (
          <Content>
            <Image style={{ backgroundImage: css }} />
          </Content>
        )}
      </InfiniteSlider>
    </Main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
