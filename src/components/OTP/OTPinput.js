import { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';
import CountDowna from './CountDowna';
import OTP from './OTP';
const OTPinput = (props) => {
    const childRef = useRef();
    const [otp, setOtp] = useState("");
    const handleClearBtn = () => {
        childRef.current.restTimer();
        console.log("check ref ", childRef)
    }
    const handleConfirmOTP = () => {
        props.handleSumitOTP();
    }
    const handleChange = (otp) => {
        setOtp(otp)
        props.setOTPParent(otp)
    }
    return (<div className='input-otp-container'>
        <div className='title'>Enter verification code</div>
        <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span>-</span>}
            inputStyle={'custom-input'}
        />
        <div className='Timer'>
            {/* <CountDown
                
            /> */}
            <CountDowna
                setisDisableBtn={props.setisDisableBtn}
                ref={childRef}
            />
        </div>
        <div className='action'>
            <button className='clear'
                onClick={() => handleClearBtn()}
                disabled={!props.isDisableBtn}
            >Clear</button>
            <button className='confirm'
                disabled={props.isDisableBtn}
                onClick={() => handleConfirmOTP()}>Confim</button>
        </div>
    </div>)
}

export default OTPinput;    