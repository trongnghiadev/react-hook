import GenerateOTP from "./GenerateOTP";
import OTPinput from "./OTPinput";
import "./OTP.scss"
import { useState } from "react";
import CountDown from "./CountDown";
import CountDowna from "./CountDowna";

const OTP = () => {
    const [originParent, setOriginParent] = useState("");
    const [userOTPParent, setOTPParent] = useState("");
    const [isDisableBtn, setisDisableBtn] = useState(false);
    const handleSumitOTP = () => {
        if (!originParent) { alert("Please grenerate OTP... "); return; }
        if (!userOTPParent) { alert("Please enter OTP... "); return; }
        +originParent === +userOTPParent ? alert("CORRECT OTP ^^") : alert("Wrong OTP ~.~")

    }

    return (<div className="OTP-parent-container">
        <GenerateOTP
            setOriginParent={setOriginParent}
        />
        <OTPinput
            setOTPParent={setOTPParent}
            handleSumitOTP={handleSumitOTP}
            isDisableBtn={isDisableBtn}
            setisDisableBtn={setisDisableBtn}

        />
    </div>)
}

export default OTP;