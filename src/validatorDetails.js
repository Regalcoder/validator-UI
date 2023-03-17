import { Link } from "react-router-dom";
import "./validator.css"

const Validatordetails = () => {
    return ( 
        <>
        <div className="validatorBody">
            <div className="titleContainer"> <img className="title" src="rebound.png" width='129px' alt=""></img> </div>
            <div className="container2">
                <div className="topFlex">
                    <img src="panda.png" height='50px' alt="" />
                    <h2 className="user">Somebody123</h2>
                </div>
                <button className="button">Vote</button>
                <div className="validatorFlex">
                    <div className="twinContainer">
                        <div className="headerContainer"><h3 className="header">Validator Details</h3></div>
                        
                        <table className="table2">
                            <tr className="tableRow">
                                <td className="data">Account:</td>
                                <td className="data">Somebody123</td>
                            </tr>

                            <tr className="tableRow">
                                <td className="data">Rank:</td>
                                <td className="data">38</td>
                            </tr>

                            <tr className="tableRow">
                                <td className="data">Voters:</td>
                                <td className="data">6,578</td>
                            </tr>

                            <tr className="tableRow">
                                <td className="data">Votes:</td>
                                <td className="data">56,123 <span className="number">+123</span></td>
                            </tr>

                            <tr className="tableRow">
                                <td className="data">Daily reward:</td>
                                <td className="data">221,769 Tokens</td>
                            </tr>

                            <tr className="tableRow">
                                <td className="data">Percent:</td>
                                <td className="data">0.973%</td>
                            </tr>
                        </table>
                    </div>
                    

                    <div className="twinContainer">
                        <div className="headerContainer"><h3 className="header">Validator Details</h3></div>
                        
                        <table className="table2">
                            <tr className="tableRow">
                                <td className="data">Location:</td>
                                <td className="data">Canada</td>
                            </tr>

                            <tr className="tableRow">
                                <td className="data">Website:</td>
                                <td className="data"><a className="link" href="/">https://Somebody123.one</a></td>
                            </tr>

                            <tr className="tableRow">
                                <td className="data">Socials:</td>
                                <td className="data">
                                    <div className="socials">
                                        <a href="twitter.com" target="_blank" ><img src="twitter.png" width='24px' alt=""></img></a>
                                        <a href="telegram.com" target="_blank" ><img src="telegram.png" width='24px' alt="" /></a>
                                    </div>
                                </td>
                            </tr>

                            <tr className="tableRow">
                                <td className="data">Balance:</td>
                                <td className="data">8,221,769 Tokens</td>
                            </tr>

                            <tr className="tableRow">
                                <td className="data">Active Stake:</td>
                                <td className="data">221,769 Tokens</td>
                            </tr>

                            <tr className="tableRow">
                                <td className="data">Unstaked:</td>
                                <td className="data">2,669 Tokens</td>
                            </tr>
                        </table>
                    


                    </div>
                </div>
                <Link to='/'><button className="backButton">Back to all validators</button></Link>
                <div className="secondFlex">
                    <img src="arrows.png" width='18px' height='20px' alt=""></img>
                    <h2 className="bottomHeader">Recent Activity</h2>
                </div>
                <p className="paratext">Filter options</p>
                <div className="buttonflex">
                    <div className="buttonContainer">
                        <button className="receive">Receive Token</button>
                        <button className="claim">Claim rewards</button>
                        <button className="send">Send token</button>
                        <div className="calender">
                            <img className="calenderlogo" src="calender.png" height='12px' alt=""></img>
                            August 10, 2022 - September 10, 2022 
                            <img src="arrowdown.png" height='8px' alt=''></img>
                        </div>
                    </div>
                    <div className="buttonContainer2">
                        <button className="reset"><img className="resetImage" src="carbon_reset.png" height='14.5px' alt=""></img>Reset filters</button>
                        <button className="export"><img className="resetImage" src="csv.png" alt="" width='16px'></img>Export transaction</button>
                    </div>
                </div>
                <div  className="table3Container">

                    <table className="table3">

                        <thead>
                                    <tr>
                                        <th scope="col" className='tableHead2'>Transaction ID </th>
                                        <th scope="col" className='tableHead2'>Time</th>
                                        <th scope="col" className='tableHead2'>Type</th>
                                        <th scope="col" className='tableHead2'>Info</th>
                                        <th scope="col" className='tableHead2'>Status</th>
                                    </tr>
                        </thead>

                        <tbody className='tableBody2'>
                            <tr className="row">
                                <td className='tableData2'>
                                    <div className="tableFlex">
                                        <img src="money2.png" width='30px' alt=''></img>
                                        91Ba7b69c
                                    </div>
                                </td>
                                <td className='tableData2'>
                                    <div className="column">
                                        <p>07 Sep 2022</p>
                                        <p className="timeText">04:20:41pm</p>
                                    </div>
                                </td>
                                <td className='tableData2'><div className="recieveStatus">Receive token</div></td>
                                <td className='tableData2'><p className="greenText">An2w2hgt &gt; Somebody123</p> <p>(588.0085 Tokens)</p></td>
                                <td className='tableData2'>Executed, Irreversible</td>
                            </tr>

                            <tr className="row">
                                <td className='tableData2'>
                                    <div className="tableFlex">
                                        <img src="medal.png" width='30px' alt=''></img>
                                        91Ba7b69c
                                    </div>
                                </td>
                                <td className='tableData2'>
                                    <div className="column">
                                        <p>07 Sep 2022</p>
                                        <p className="timeText">04:20:41pm</p>
                                    </div>
                                </td>
                                <td className='tableData2'><div className="claimStatus">Claim rewards</div></td>
                                <td className='tableData2'><p className="greenText">An2w2hgt &gt; Somebody123</p> <p>(588.0085 Tokens)</p></td>
                                <td className='tableData2'>Executed, Irreversible</td>
                            </tr>

                            <tr className="row">
                                <td className='tableData2'>
                                    <div className="tableFlex">
                                        <img src="money1.png" width='30px' alt=''></img>
                                        91Ba7b69c
                                    </div>
                                </td>
                                <td className='tableData2'>
                                    <div className="column">
                                        <p>07 Sep 2022</p>
                                        <p className="timeText">04:20:41pm</p>
                                    </div>
                                </td>
                                <td className='tableData2'><div className="sendStatus">Send token</div></td>
                                <td className='tableData2'><p className="greenText">An2w2hgt &gt; Somebody123</p> <p>(588.0085 Tokens)</p></td>
                                <td className='tableData2'>Executed, Irreversible</td>
                            </tr>

                            <tr className="row">
                                <td className='tableData2'>
                                    <div className="tableFlex">
                                        <img src="money2.png" width='30px' alt=''></img>
                                        91Ba7b69c
                                    </div>
                                </td>
                                <td className='tableData2'>
                                    <div className="column">
                                        <p>07 Sep 2022</p>
                                        <p className="timeText">04:20:41pm</p>
                                    </div>
                                </td>
                                <td className='tableData2'><div className="recieveStatus">Receive token</div></td>
                                <td className='tableData2'><p className="greenText">An2w2hgt &gt; Somebody123</p> <p>(588.0085 Tokens)</p></td>
                                <td className='tableData2'>Executed, Irreversible</td>
                            </tr>

                            <tr className="row">
                                <td className='tableData2'>
                                    <div className="tableFlex">
                                        <img src="money2.png" width='30px' alt=''></img>
                                        91Ba7b69c
                                    </div>
                                </td>
                                <td className='tableData2'>
                                    <div className="column">
                                        <p>07 Sep 2022</p>
                                        <p className="timeText">04:20:41pm</p>
                                    </div>
                                </td>
                                <td className='tableData2'><div className="recieveStatus">Receive token</div></td>
                                <td className='tableData2'><p className="greenText">An2w2hgt &gt; Somebody123</p> <p>(588.0085 Tokens)</p></td>
                                <td className='tableData2'>Executed, Irreversible</td>
                            </tr>
                        
                        </tbody>
                    </table>


                </div>
                <div className="pageFlex">
                    <div className="pageContainer1"><p className="pages">Page 1 <span className="pagespan"> of 63</span></p></div>

                    <div className="pageContainer2">
                         <button className="pagination">1</button>
                         <button className="pagination">2</button>
                         <button className="pagination">3</button>
                         <button className="pagination">4</button>
                         <button className="pagination">5</button>
                    </div>
                </div>
                
            </div>
        </div>
          
        </>
     );
}
 
export default Validatordetails;