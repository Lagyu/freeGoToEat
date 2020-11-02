import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, {Component} from 'react';


export default function Home() {
  const title = 'freeGoToEat'
  const sites = ['hoge','fuga']
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {title}
        </h1>

        <div className={styles.description}>
          <input type="text"/>
          <input type="button" value={"検索"}/>
        </div>
        <div className={styles.filter}>
            <h4>Filter</h4>
            <Filter　sites={sites}　props={styles}/>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

class SelectButton extends Component{
  constructor(props) {
    super(props);
    this.state = {
      class: ""
    };
  }

  selected(){
    this.setState({class : "selected"});
  }
  render() {
    console.log(this.props)
    return(
      <button type="button" onClick={() => {this.selected()}} className={this.state.class}>
        {this.props.val}
      </button>
    );
  }
}


class Filter extends Component {

  render(){
    return (
        this.props.sites.map((elem) => {
          return (<SelectButton val={elem}></SelectButton>)
    }))
  }
}
