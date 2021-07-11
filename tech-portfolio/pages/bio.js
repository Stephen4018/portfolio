import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import DisplayAreaLayoutComp from '../components/Layout/DisplayAreaLayout';
import CodeLinesComp from '../components/codelines/CodeLinesComp';
import BioComp from '../components/Bio_block/BioComp';

export default function BioPage() {
  return (
    <div>
      <Head>
        <title>Bio |Tech-Portfolio</title>
        <meta name="description" content="Generated by TheLastGoodMan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <DisplayAreaLayoutComp stylepath='styles' filename='bio.css' filename_icon='cssIcon'>
        <>
          <CodeLinesComp />
          <BioComp />
        </>
      </DisplayAreaLayoutComp>
      
    </div>
  )
}
