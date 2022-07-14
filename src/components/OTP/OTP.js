import GenerateOTP from "./GenerateOTP";
import OTPinput from "./OTPinput";
import "./OTP.scss"
import { useState } from "react";

const OTP = () => {
    const [originParent, setOriginParent] = useState("");
    const [userOTPParent, setOTPParent] = useState("");
    const [isDisableBtn, setisDisableBtn] = useState(false);
    const handleSumitOTP = () => {
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