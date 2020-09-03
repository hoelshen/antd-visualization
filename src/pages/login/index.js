import React from 'react';
import styled from 'styled-components';
import CSSModules from 'react-css-modules';

import { render } from 'react-dom';
 
// import  './login.less';
// import styles from './index.module.css';
import styles from './login.less';
import './another-stylesheet.css'; // 导入常规 CSS 文件
console.log(styles);
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${props => props.primary ? 'SteelBlue' : 'palevioletred'};
    &:hover {
      background-color: #eeee;
    }

    @media (max-width: 650px) {
        font-size: 1em;
    }
`;
  const Wrapper = styled.div`
  font-size: 1.2em;

  .content1 {
      color: red;
  }

  .content2 {
      color: green;
  }
  `;
export default class Login extends React.Component {
    render() {
        return (
          <>
            <Title primary>Hello world</Title>
            <Wrapper>
                <div>You'd better don't do that like so:</div>
                <div className="content1">I am red</div>
                <div className="content2">I am green</div>
            </Wrapper>
            <div className={styles.table}>123</div>
            <div styleName='table'>123</div>
          </>
        )
    }
}
 