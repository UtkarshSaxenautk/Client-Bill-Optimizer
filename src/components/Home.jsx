import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className='inner-border-2 inner-border-rose-500 ... flex items-center justify-center h-screen opacity-75' style={{background: '#eff8f8'}}>
   <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div className='text-center w-3/5 m-auto p-10 rounded-3xl shadow-md shadow-teal-500/50 border-4 border-emerald-100 opacity-100 backdrop-blur-sm bg-teal/30 font-bold'  style={{background:'#ffffff'}}>
      <p className='text-8xl mb-10' style={{color: '0e766d'}}>Optimize your Bill</p>
      <Link to={"/login"}><button className='px-5 py-4 text-3xl  mt-5 rounded-full transition ease-in-out delay-150 bg-teal-500 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 brightness-100 font-bold' style={{background:'0e766d'}}><p className='' style={{color:'#ffffff'}}>Get Started</p></button></Link>
    </div>
    </div>
  )
}

export default Home