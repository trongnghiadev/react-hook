import { useState } from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';
import OTP from './OTP';
const OTPinput = (props) => {
    const [otp, setOtp] = useState("");
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
            <CountDown
                setisDisableBtn={props.setisDisableBtn}
            />
        </div>
        <div className='action'>
            <button className='clear'>Clear</button>
            <button className='confirm'
                disabled={props.isDisableBtn}
                onClick={() => handleConfirmOTP()}>Confim</button>
        </div>
    </div>)
}

export default OTPinput;