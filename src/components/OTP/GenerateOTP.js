import { useState } from "react";

const GenerateOTP = (props) => {
    const [orgOTP, setOrgOTP] = useState("");
    const HandleClickBtn = () => {
        const otp = Math.floor((Math.random() * 1000000) + 1);
        setOrgOTP(otp)
        props.setOriginParent(otp);
    }
    return (<div className="generate-otp-container">
        <button onClick={() => HandleClickBtn()}>Get OTP</button>
        <div className="title">Your OTP is: {orgOTP} </div>
    </div>)
}
export default GenerateOTP;