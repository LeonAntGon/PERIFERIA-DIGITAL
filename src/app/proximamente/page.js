"use client"
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../components/styles/proxeye.css';
import '../components/styles/proxloading.css';

export default function Proximamente(){
    return(
        <>
        <Nav/>
        <main className='h-[100vh] flex flex-wrap content-center flex-col justify-center '>
  <section className='flex justify-center'>
    <div className="eye">
      <div className="up"></div>
      <div className="mid"></div> 
      <div className="down"></div> 
    </div>
  </section>
  <section className='flex justify-center'>
    <div className="wrapper">
      <span className="letter letter1">P</span>
      <span className="letter letter2">r</span>
      <span className="letter letter3">o</span>
      <span className="letter letter4">x</span>
      <span className="letter letter5">i</span>
      <span className="letter letter6">m</span>
      <span className="letter letter7">a</span>
      <span className="letter letter8">m</span>
      <span className="letter letter9">e</span>
      <span className="letter letter10">n</span>
      <span className="letter letter11">t</span>
      <span className="letter letter12">e</span>
      <span className="letter letter13">.</span>
      <span className="letter letter14">.</span>
      <span className="letter letter15">.</span>
    </div>
  </section>
</main>
        <Footer/>
        </>
    )
}