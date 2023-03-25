import './App.scss';
import video from "../src/img/bg video.mp4"
import img from '../src/img/1679312607679.png'
import {FiCircle} from "react-icons/fi";
import {useState} from "react";
import {IoMdClose} from "react-icons/io";
import {TbCircle} from "react-icons/tb";
import {MdOutlineGrid3X3} from "react-icons/md";

function App() {
    const [winnerName,setWinnerName] = useState('')

    const [play,setPlay] = useState(true)

    const [block1,setBlock1] = useState('')
    const [block2,setBlock2] = useState('')
    const [block3,setBlock3] = useState('')
    const [block4,setBlock4] = useState('')
    const [block5,setBlock5] = useState('')
    const [block6,setBlock6] = useState('')
    const [block7,setBlock7] = useState('')
    const [block8,setBlock8] = useState('')
    const [block9,setBlock9] = useState('')

    const [player1,setPlayer1] = useState('Player 1')
    const [player2,setPlayer2] = useState('Player 2')

    const [menu,setMenu] = useState(false)
    const [menu1,setMenu1] = useState(false)
    function menu1Change(){
        setTimeout(()=> {
            setMenu1(false)
        }, 1000)
    }

    function menuChange(){
        setTimeout(()=> {
            setMenu(true)
        }, 10)
    }

    const [win,setWin] = useState(false)
    const [win1,setWin1] = useState(false)

    function win1Change(){
        setTimeout(()=> {
            setWin(false)
        }, 2500)
        setTimeout(()=> {
            setWin1(false)
            serWinnerNameOver(false)
            setPlay(true)
        }, 3500)
    }

    function clineGame(){
        const blockArr = [setBlock1,setBlock2,setBlock3,setBlock4,setBlock5,setBlock6,setBlock7,setBlock8,setBlock9]

        blockArr.map(el => {
            el('')
        })
    }

    const [winnerNameOver,serWinnerNameOver] = useState(false)

    function winChange(){
        setTimeout(()=> {
            clineGame()
        }, 1800)
        setTimeout(()=> {
            setWin1(true)
            setTimeout(()=> {
                setWin(true)
            }, 20)
            setTimeout(()=> {
                serWinnerNameOver(true)
            }, 2500)
        }, 5)
        win1Change()
    }

    const [draw,setDraw] = useState(false)
    function winner(){
        if (block1 === 'x' && block2 === 'x' &&block3 === 'x' || block1 === 'x' && block4 === 'x' &&block7 === 'x' || block7 === 'x' && block8 === 'x' &&block9 === 'x' || block2 === 'x' && block5 === 'x' &&block8 === 'x' || block9 === 'x' && block6 === 'x' &&block3 === 'x' || block4 === 'x' && block5 === 'x' &&block6 === 'x' || block4 === 'x' && block5 === 'x' &&block6 === 'x' || block1 === 'x' && block5 === 'x' &&block9 === 'x' || block3 === 'x' && block5 === 'x' &&block7 === 'x' ){
            setTimeout(()=> {
                setWinnerName(player2)
            }, 2)
            winChange()
        }else if (block1 === 'o' && block2 === 'o' &&block3 === 'o' || block1 === 'o' && block4 === 'o' &&block7 === 'o' || block7 === 'o' && block8 === 'o' &&block9 === 'o' || block9 === 'o' && block6 === 'o' &&block3 === 'o' || block2 === 'o' && block5 === 'o' &&block8 === 'o' || block4 === 'o' && block5 === 'o' &&block6 === 'o' || block1 === 'o' && block5 === 'o' &&block9 === 'o' || block3 === 'o' && block5 === 'o' &&block7 === 'o' ){
            setTimeout(()=> {
                setWinnerName(player1)
                setDraw(true)
            }, 2)
            winChange()
        }else if (block1 !== '' && block2 !== '' && block3 !== '' && block4 !== '' && block5 !== '' && block6 !== '' && block7 !== '' && block8 !== '' && block9 !== '' ){
            setTimeout(()=> {
                setWinnerName('draw')
            }, 2)
            winChange()
        }
    }
    winner()

    function clickBlock(n){
        const blockArr = [setBlock1,setBlock2,setBlock3,setBlock4,setBlock5,setBlock6,setBlock7,setBlock8,setBlock9]

        blockArr[n](play? 'o':'x')
        setPlay(!play)
    }

    const [xCol,setXCol] = useState('rgba(253, 145, 4, 0.83)')
    const [oCol,setOCol] = useState('rgba(4, 253, 232, 0.83)')
    const [rCol,setRCol] = useState('rgba(255,255,254,0.83)')


  return (
    <div className="App">
          <video className='video' src={video} type="video/mp4" autoPlay muted loop/>
        <div className='group'>
            <div className='group--header'>
                <img src={img} alt=""/>
                <div style={{
                    transform: menu? 'rotate(360deg)': ''
                }} onClick={()=> {menu? setMenu(!menu): menuChange(); menu1? menu1Change() : setMenu1(true)}} className='group--header__menu'>
                    {
                        menu?<IoMdClose style={{color: 'rgba(253, 145, 4, 0.83)'}}/>: <FiCircle style={{color: 'rgba(4, 253, 232, 0.83)'}}/>
                    }
                </div>
            </div>
            <div style={{
                opacity: menu? '1': '0',
                display: menu1? '' : 'none'
            }} className='group--burger'>
                <div className='group--burger__block'>
                    <div className='group--burger__block--set'>
                        <IoMdClose style={{color: xCol}}/>
                        <div className='group--burger__block--set__col'>
                            <div onClick={()=> setXCol('rgba(255,255,254,0.83)')} style={{background: 'rgba(250,248,247,0.83)'}}></div>
                            <div onClick={()=> setXCol('rgba(253, 145, 4, 0.83)')} style={{background: 'rgba(253, 145, 4, 0.83)'}}></div>
                            <div onClick={()=> setXCol('rgba(4, 253, 232, 0.83)')} style={{background: 'rgba(4, 253, 232, 0.83)'}}></div>
                            <div onClick={()=> setXCol('rgba(50,253,4,0.83)')} style={{background: 'rgba(50,253,4,0.83)'}}></div>
                            <div onClick={()=> setXCol('rgba(253,4,137,0.83)')} style={{background: 'rgba(253,4,137,0.83)'}}></div>
                            <div onClick={()=> setXCol('rgba(4,16,253,0.83)')} style={{background: 'rgba(4,16,253,0.83)'}}></div>
                        </div>
                    </div>
                    <div className='group--burger__block--set'>
                        <TbCircle style={{color: oCol}}/>
                        <div className='group--burger__block--set__col'>
                            <div onClick={()=> setOCol('rgba(255,255,254,0.83)')} style={{background: 'rgba(250,248,247,0.83)'}}></div>
                            <div onClick={()=> setOCol('rgba(253, 145, 4, 0.83)')} style={{background: 'rgba(253, 145, 4, 0.83)'}}></div>
                            <div onClick={()=> setOCol('rgba(4, 253, 232, 0.83)')} style={{background: 'rgba(4, 253, 232, 0.83)'}}></div>
                            <div onClick={()=> setOCol('rgba(50,253,4,0.83)')} style={{background: 'rgba(50,253,4,0.83)'}}></div>
                            <div onClick={()=> setOCol('rgba(253,4,137,0.83)')} style={{background: 'rgba(253,4,137,0.83)'}}></div>
                            <div onClick={()=> setOCol('rgba(4,16,253,0.83)')} style={{background: 'rgba(4,16,253,0.83)'}}></div>
                        </div>
                    </div>
                    <div className='group--burger__block--set'>
                        <MdOutlineGrid3X3 style={{color: rCol}}/>
                        <div className='group--burger__block--set__col'>
                            <div onClick={()=> setRCol('rgba(255,255,254,0.83)')} style={{background: 'rgba(250,248,247,0.83)'}}></div>
                            <div onClick={()=> setRCol('rgba(253, 145, 4, 0.83)')} style={{background: 'rgba(253, 145, 4, 0.83)'}}></div>
                            <div onClick={()=> setRCol('rgba(4, 253, 232, 0.83)')} style={{background: 'rgba(4, 253, 232, 0.83)'}}></div>
                            <div onClick={()=> setRCol('rgba(50,253,4,0.83)')} style={{background: 'rgba(50,253,4,0.83)'}}></div>
                            <div onClick={()=> setRCol('rgba(253,4,137,0.83)')} style={{background: 'rgba(253,4,137,0.83)'}}></div>
                            <div onClick={()=> setRCol('rgba(4,16,253,0.83)')} style={{background: 'rgba(4,16,253,0.83)'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                opacity: win? '1': '0',
                display: win1? '' : 'none'
            }} className='group--winner'>
                <div className='group--winner__block'>
                    <h1 style={{
                        marginLeft: winnerNameOver? '-200%': ''
                    }}>{winnerName}</h1>
                    <h2 style={{
                        marginLeft: winnerNameOver? '-200%': '',
                        display: winnerName === 'draw' ? 'none' : ''
                    }}>wins</h2>
                </div>
            </div>
            <div className='group--names'>
                <input style={{color: oCol}} onChange={(e)=> setPlayer1(e.target.value)} className='group--names__in1' defaultValue='Player 1' type="text"/>
                <input style={{color: xCol}} onChange={(e)=> setPlayer2(e.target.value)} className='group--names__in2' defaultValue='Player 2' type="text"/>
            </div>
            <div className='group--game'>
               <div className='group--game__border1'>
                   <div style={{background: rCol}}></div>
                   <div style={{background: rCol}}></div>
               </div>
                <div className='group--game__border2'>
                    <div style={{background: rCol}}></div>
                    <div style={{background: rCol}}></div>
                </div>
                <div className='group--game__blocks'>
                    <div onClick={()=> {if (block1 === ''){clickBlock(0)}}} className='group--game__blocks--block'>
                        {
                            block1 !== '' ? block1 === 'x'? <IoMdClose style={{color: xCol}}/> : <TbCircle style={{color: oCol}}/> : ''
                        }
                    </div>
                    <div onClick={()=> {if (block2 === ''){clickBlock(1)}}} className='group--game__blocks--block'>
                        {
                            block2 !== '' ? block2 === 'x'? <IoMdClose style={{color: xCol}}/> : <TbCircle style={{color: oCol}}/> : ''
                        }
                    </div>
                    <div onClick={()=> {if (block3 === ''){clickBlock(2)}}} className='group--game__blocks--block'>
                        {
                            block3 !== '' ? block3 === 'x'? <IoMdClose style={{color: xCol}}/> : <TbCircle style={{color: oCol}}/> : ''
                        }
                    </div>
                    <div onClick={()=> {if (block4 === ''){clickBlock(3)}}} className='group--game__blocks--block'>
                        {
                            block4 !== '' ? block4 === 'x'? <IoMdClose style={{color: xCol}}/> : <TbCircle style={{color: oCol}}/> : ''
                        }
                    </div>
                    <div onClick={()=> {if (block5 === ''){clickBlock(4)}}} className='group--game__blocks--block'>
                        {
                            block5 !== '' ? block5 === 'x'? <IoMdClose style={{color: xCol}}/> : <TbCircle style={{color: oCol}}/> : ''
                        }
                    </div>
                    <div onClick={()=> {if (block6 === ''){clickBlock(5)}}} className='group--game__blocks--block'>
                        {
                            block6 !== '' ? block6 === 'x'? <IoMdClose style={{color: xCol}}/> : <TbCircle style={{color: oCol}}/> : ''
                        }
                    </div>
                    <div onClick={()=> {if (block7 === ''){clickBlock(6)}}} className='group--game__blocks--block'>
                        {
                            block7 !== '' ? block7 === 'x'? <IoMdClose style={{color: xCol}}/> : <TbCircle style={{color: oCol}}/> : ''
                        }

                    </div>
                    <div onClick={()=> {if (block8 === ''){clickBlock(7)}}} className='group--game__blocks--block'>
                        {
                            block8 !== '' ? block8 === 'x'? <IoMdClose style={{color: xCol}}/> : <TbCircle style={{color: oCol}}/> : ''
                        }
                    </div>
                    <div onClick={()=> {if (block9 === ''){clickBlock(8)}}} className='group--game__blocks--block'>
                        {
                            block9 !== '' ? block9 === 'x'? <IoMdClose style={{color: xCol}}/> : <TbCircle style={{color: oCol}}/> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
