import { Route, Routes } from 'react-router'
import Validatordetails from './validatorDetails';
import Leaderboard from './leaderboard';

const Main = () => {
    return ( 
        <>
         <Routes>
            <Route path="/" element={< Leaderboard/>} />
            <Route path="/validatorDetails" element={< Validatordetails/>} />
            {/* <Route path="*" element= {
                <div>404</div>
                } /> */}
         </Routes>
         
        </>
     );
}
 
export default Main;
