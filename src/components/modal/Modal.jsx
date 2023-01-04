import {useState} from 'react'
import './modal.scss'
import { AiOutlineClose, AiOutlineInfoCircle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'



const Modal = ({onCloseModal}) => {

    const [showPassword, setShowPassword] = useState(false);
    const [close, setClose] = useState(false)

    const handlePassword =()=> {
        setShowPassword(!showPassword)
    }

   /*  const handleClose =()=> {
       setClose(true)

    } */

    return (
        <section className='modal-section --100vh cm'  onClick={onCloseModal}>
            <div className='modal --flex-center'>
                <div className="modal-content --center-all --bg-light --p --card">
                    <AiOutlineClose  className="close-icon cm" color='red'
                        onClick={onCloseModal}
                        size={16}
                       
                    />
                    
                    <div className="modal-head --flex-start">
                        <AiOutlineInfoCircle  
                        color='orangered'
                            size={18} />
                        <h3 className='--text-p --ml'>Do you want to login?</h3>
                    </div>
                    <div className="modal-body --mb">
                        <input type="text" placeholder="Username" />

                        <div className='password'>
                            <input type={showPassword ? "text" : "password"}
                            className='--width-100'
                            placeholder="password" />

                            <div className='icon' onClick={handlePassword}>
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}

                            </div>
                        </div>
                        
                       
                    </div>
                    <div className="modal-footer --m --flex-end">
                        <button className='--btn'>Proceed</button>
                        <button onClick={onCloseModal} className='--btn --btn-danger cm'>Cancel</button>
                        <button className='--btn --btn-primary'>login</button>
                        <button className='--btn '>Sign up</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modal