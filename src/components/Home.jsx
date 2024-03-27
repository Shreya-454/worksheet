import React, { useState } from 'react'
import dompkong from '../assets/images/dompkong.png'
import furniture from '../assets/images/furniture.png'
import Lemon from '../assets/images/lemon-wares.png'
import games from '../assets/images/games.png'
import dino from '../assets/images/dino.png'
import nexai from '../assets/images/nexai.png'
import calculator from '../assets/images/calculator.png'
import cloopp from '../assets/images/cloopp.png'
import labs from '../assets/images/labs.png'
import next from '../assets/images/nextjs.png'
import swiper from '../assets/images/swiperimg.png'
import worksheet from '../assets/images/worksheetimg.png'
import validation from '../assets/images/validation.png'

const Home = () => {
  const [tab, settab] = useState("tab1");
  function opentab(tabs){
    settab(tabs)
  }
  return (
    <div className=''>
      <div className=" max-w-[1320px] mx-auto w-full">
        <h1 className=' font-serif text-6xl text-black text-center'>Worksheet 2024</h1>
        <div className=' flex justify-end'><span className=' text-4xl px-5 py-4 border-[4px] border-solid border-black rounded-full mb-10 '>Shreya-454</span></div>
        <div className='flex flex-row flex-wrap -mx-3 '>
            <div className='w-1/4 px-3'>
              <div>
                <div>
                    <button onClick={() => opentab("tab1")} className=' bg-black text-white px-5 py-3 text-3xl rounded-full w-[200px] mb-10'>
                        JANUARY
                    </button>
                </div>
                <div>
                    <button onClick={() => opentab("tab2")} className=' bg-black text-white px-5 py-3 text-3xl rounded-full w-[200px] mb-10'>
                        FEBRUARY
                    </button>
                </div>
                <div>
                    <button onClick={() => opentab("tab3")} className=' bg-black text-white px-5 py-3 text-3xl rounded-full w-[200px] mb-10'>
                        MARCH
                    </button>
                </div>
                <div>
                    <button onClick={() => opentab("tab4")} className=' bg-black text-white px-5 py-3 text-3xl rounded-full w-[200px]'>
                     APRIL
                    </button>
                </div>
              </div>
            </div>
            <div className='w-3/4 px-3'>
  {tab ==="tab1" &&  <div className=' h-[550px] overflow-y-scroll'>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>1.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={dompkong} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
    Dompkong
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>6-1-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/dompkong.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/dompkong.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://dompkong-ivory.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://dompkong-ivory.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>2.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={furniture} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
  Furniture
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>16-1-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/furniture.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/furniture.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://furniture-six-delta.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://furniture-six-delta.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>3.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={Lemon} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
  Lemon Wares
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>25-1-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/lemon-wares.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/lemon-wares.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://lemon-wares.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://lemon-wares.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
</div>}
{ tab === "tab2" && <div className=' h-[550px] overflow-y-scroll'>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>1.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={games} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
    Exclusive Games
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>5-2-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/exclusive-games.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/exclusive-games.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://exclusive-games-beta.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://exclusive-games-beta.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>2.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={dino} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
 Dino LFG
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>10-2-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/dino.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/dino.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://dino-inky.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://dino-inky.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>3.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={nexai} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
  NexAi
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>17-2-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/nexai.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/nexai.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://nexai-ten.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://nexai-ten.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>4.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={calculator} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
  Calculator
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>20-2-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/calculator.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/calculator.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://calculator-kappa-ivory-37.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://calculator-kappa-ivory-37.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>5.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={nexai} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
  Bootstrap NexAi
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>29-2-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/calculator.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/Bootstrap-Nexai.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://bootstrap-nexai.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://bootstrap-nexai.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
</div>}
{tab ==="tab3" &&  <div className=' h-[550px] overflow-y-scroll'>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>1.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={cloopp} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
   Cloopp
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>2-3-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/cloopp1.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/cloopp1.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://cloopp1.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://cloopp1.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>2.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={labs} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
  248 Labs  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>19-3-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/labs.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/labs.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://labs-gamma-eight.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://labs-gamma-eight.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>3.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={next} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
  Nextjs practice
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>22-3-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/practice.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/practice.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://practice-zeta-two.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://practice-zeta-two.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>4.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={validation} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
  Form Validation (React)
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>27-3-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/form-validation.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/form-validation.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://form-validation-topaz-one.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://form-validation-topaz-one.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>5.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={swiper} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
  Swiper Slider practice
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>27-3-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/swiper.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/swiper.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://swiper-sigma.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://swiper-sigma.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
  <div className='flex gap-4 items-center mb-10'>
  <p className='text-3xl'>6.</p>
  <div className='flex flex-row flex-wrap -mx-3'>
  <div className="w-2/5  px-3">
    <img src={worksheet} alt="img1" className='rounded-xl w-full h-full  max-h-[300px] max-w-[350px]' />
  </div>
  <div className='w-3/5 px-3'>
  <h2 className='text-5xl font-bold mb-4'>
 Worksheet
  </h2>
  <p className='text-[green] text-3xl font-semibold mb-3'>Date of submission:-  <span className='text-black text-2xl font-normal underline '>27-3-2024</span> </p>
  <p className=' text-xl font-bold mb-3'>GitHub link :- <span><a href="https://github.com/Shreya-454/worksheet.git" target='blank' className='text-lg text-[blue] font-normal underline'>https://github.com/Shreya-454/worksheet.git</a></span></p>
  <p className=' text-xl font-bold '>Live link :- <span><a href="https://worksheet-ochre.vercel.app/" target='blank' className='text-lg text-[blue] font-normal underline'>https://worksheet-ochre.vercel.app/</a></span></p>
  </div>
  </div>
  </div>
</div>}
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Home
