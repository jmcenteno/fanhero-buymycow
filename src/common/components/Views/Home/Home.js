import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Page } from '../../Global';
import cow from './cow.png';

const styles = {
  img: {
    width: '100%',
    maxWidth: 250,
    margin: '24px auto 0'
  },
  h1: {
    fontSize: '2.4em'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
}

export default class Home extends Component {

  render() {
    return (
      <Page>
        <div className='content' style={ styles.content }>
          <div className='text-center'>
            <img src={ cow } className='img-responsive' style={ styles.img } alt='cow' />
            <h1 className='lead' style={ styles.h1 }>
              Welcome to BuyMyCow!
              <br />
              <small>Where cows go moo.</small>
            </h1>
            <br />
            <Link to='/products' className='btn btn-primary btn-lg'>Start Shopping</Link>
          </div>
        </div>
      </Page>
    );
  }

}
