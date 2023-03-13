import { Link } from "react-router-dom";


const Leaderboard = () => {
    return ( 
        <>
          <div className="body">
            <div className="container1">
                <h3 className="header1">Rebound Explorer</h3>
                <div className="searchContainer">
                    <input type="search" name="" className="searchBox" id="" placeholder="Search for account name, transaction or wallet address" />
                    <div className="searchBackground"> <img className="imgpad" src="/search.png" width='24px' alt="" /> </div>
                </div>
            </div>

            <div className="container2">
                <div className="chartContainer"><h1 className="chartText">live chart here</h1>
                </div>
                <h4 className="headerSmall">BLOCK PRODUCERS RANKING - REAL TIME STATISTICS</h4>
                <p className="texts">This page shows ranking of all the producers.
                   Along with the current rankings, it also 
                   shows the total number of voters and tokens 
                   per vote along with oerall voting percentage.
                </p>
                <div className="tableContainer">

                <table className="table">
                        <thead>
                            <tr >
                                <th scope="col" className='tableHead'>Rank <img src="Arrow.png" alt="" width='8px'></img></th>
                                <th scope="col" className='tableHead'>Account</th>
                                <th scope="col" className='tableHead'>Total Votes</th>
                                <th scope="col" className='tableHead'>Voters</th>
                                <th scope="col" className='tableHead'>Percent</th>
                                <th scope="col" className='tableHead'>Daily reward</th>
                                <th scope="col" className='tableHead'>Location</th>
                            </tr>
                        </thead>
                        <tbody className='tableBody'>
                            <tr className='tableRule'>
                                <td className='tableData'>1</td>
                                <Link className="anchorColor" to='/validatorDetails'>
                                <td className='tableData containerFlex'>
                                    <img className="imgpad2" src="panda.png" height="40px" alt=""></img>
                                    <div className="columnFlex">
                                        <h3>Somebody234</h3>
                                        <div className="imageFlex">
                                            <img src="internet.png" width='18px' alt=''></img> 
                                            <img src="twitter.png" alt='' width='18px'></img> 
                                            <img src="telegram.png" width='18px' alt=''></img>
                                        </div>
                                    </div> 
                                    
                                       
                                </td>
                                </Link>
                                <td className='tableData'><p>174,873,418</p><span className="text">+3,789</span></td>
                                <td className='tableData'>34,612</td>
                                <td className='tableData'>2.880%</td>
                                <td className='tableData'>#500</td>
                                <td className='tableData'>Canada</td>
                            </tr>
                            
                        

                        
                            <tr className='tableRule'>
                                <td className='tableData'>1</td>
                                <Link className="anchorColor" to='/validatorDetails'>
                                <td className='tableData containerFlex'>
                                    <img className="imgpad2" src="panda.png" height="40px" alt=""></img>
                                    <div className="columnFlex">
                                        <h3>Somebody234</h3>
                                        <div className="imageFlex">
                                            <img src="internet.png" width='18px' alt=''></img> 
                                            <img src="twitter.png" alt='' width='18px'></img> 
                                            <img src="telegram.png" width='18px' alt=''></img>
                                        </div>
                                    </div> 
                                    
                                       
                                </td>
                                </Link>
                                <td className='tableData'><p>174,873,418</p><span className="text">+3,789</span></td>
                                <td className='tableData'>34,612</td>
                                <td className='tableData'>2.880%</td>
                                <td className='tableData'>#500</td>
                                <td className='tableData'>Canada</td>
                            </tr>
                            
                        

                        
                            <tr className='tableRule'>
                                <td className='tableData'>1</td>
                                <Link className="anchorColor" to='/validatorDetails'>
                                <td className='tableData containerFlex'>
                                    <img className="imgpad2" src="panda.png" height="40px" alt=""></img>
                                    <div className="columnFlex">
                                        <h3>Somebody234</h3>
                                        <div className="imageFlex">
                                            <img src="internet.png" width='18px' alt=''></img> 
                                            <img src="twitter.png" alt='' width='18px'></img> 
                                            <img src="telegram.png" width='18px' alt=''></img>
                                        </div>
                                    </div> 
                                    
                                       
                                </td>
                                </Link>
                                <td className='tableData'><p>174,873,418</p><span className="text">+3,789</span></td>
                                <td className='tableData'>34,612</td>
                                <td className='tableData'>2.880%</td>
                                <td className='tableData'>#500</td>
                                <td className='tableData'>Canada</td>
                            </tr>
                            
                        

                        
                            <tr className='tableRule'>
                                <td className='tableData'>1</td>
                                <Link className="anchorColor" to='/validatorDetails'>
                                <td className='tableData containerFlex'>
                                    <img className="imgpad2" src="panda.png" height="40px" alt=""></img>
                                    <div className="columnFlex">
                                        <h3>Somebody234</h3>
                                        <div className="imageFlex">
                                            <img src="internet.png" width='18px' alt=''></img> 
                                            <img src="twitter.png" alt='' width='18px'></img> 
                                            <img src="telegram.png" width='18px' alt=''></img>
                                        </div>
                                    </div> 
                                    
                                       
                                </td>
                                </Link>
                                <td className='tableData'><p>174,873,418</p><span className="text">+3,789</span></td>
                                <td className='tableData'>34,612</td>
                                <td className='tableData'>2.880%</td>
                                <td className='tableData'>#500</td>
                                <td className='tableData'>Canada</td>
                            </tr>
                            
                        

                        
                            <tr className='tableRule'>
                                <td className='tableData'>1</td>
                                <Link className="anchorColor" to='/validatorDetails'>
                                <td className='tableData containerFlex'>
                                    <img className="imgpad2" src="panda.png" height="40px" alt=""></img>
                                    <div className="columnFlex">
                                        <h3>Somebody234</h3>
                                        <div className="imageFlex">
                                            <img src="internet.png" width='18px' alt=''></img> 
                                            <img src="twitter.png" alt='' width='18px'></img> 
                                            <img src="telegram.png" width='18px' alt=''></img>
                                        </div>
                                    </div> 
                                    
                                       
                                </td>
                                </Link>
                                <td className='tableData'><p>174,873,418</p><span className="text">+3,789</span></td>
                                <td className='tableData'>34,612</td>
                                <td className='tableData'>2.880%</td>
                                <td className='tableData'>#500</td>
                                <td className='tableData'>Canada</td>
                            </tr>
                            
                        

                        
                            <tr className='tableRule'>
                                <td className='tableData'>1</td>
                                <Link className="anchorColor" to='/validatorDetails'>
                                <td className='tableData containerFlex'>
                                    <img className="imgpad2" src="panda.png" height="40px" alt=""></img>
                                    <div className="columnFlex">
                                        <h3>Somebody234</h3>
                                        <div className="imageFlex">
                                            <img src="internet.png" width='18px' alt=''></img> 
                                            <img src="twitter.png" alt='' width='18px'></img> 
                                            <img src="telegram.png" width='18px' alt=''></img>
                                        </div>
                                    </div> 
                                    
                                       
                                </td>
                                </Link>
                                <td className='tableData'><p>174,873,418</p><span className="text">+3,789</span></td>
                                <td className='tableData'>34,612</td>
                                <td className='tableData'>2.880%</td>
                                <td className='tableData'>#500</td>
                                <td className='tableData'>Canada</td>
                            </tr>
                            
                        </tbody>

                        
                        
                    </table>



                </div>
                <div className="navigation">
                    <div className="flex2">
                        <p className="navText">showing 1-20 <span className="navText2">of 63</span></p>
                        
                    </div>
                    <Link className="anchorColor navText" to='/'>First</Link>
                    <Link className="anchorColor navText" to='/'>Last</Link>
                </div>
            </div>

          </div>
        </>
     );
}
 
export default Leaderboard;