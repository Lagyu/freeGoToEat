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
            {sites.map(site => <Filter site ={site}/>)}
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

class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: false,
    };
    console.log(this.state)
  }

  selected = () =>{
    this.setState({
        value: !this.state.value
    });
  }

  render(){
    return (
      // <SelectButton val={this.props.site}/>
      <button type="button" onClick={this.selected} className={this.state.value ? "selected" : ""}>
        {this.props.site}
      </button>
    )
  }
}
