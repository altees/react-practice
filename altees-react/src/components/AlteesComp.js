
import { ToastContainer, toast } from 'react-toastify';



const notify = (props) => toast("hello world");


const altees=(props)=>{

    return <div>
         <ToastContainer />
     <button onClick={notify}>Notify!</button>
       
    
        </div>;
}

export default altees;