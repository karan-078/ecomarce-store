import { NavLink } from "react-router-dom"

const Error = () => {
  return (
    <>
    <div className="error_main">
    <div className="error_image">
    <img src="./image/erro.jpg" alt="error"  className="err_imge"/>
   </div>
    <button className="error_btn"><NavLink to={'/'} >back to home </NavLink></button>
    </div>
  
 </>
  )

 
}

export default Error
