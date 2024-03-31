import { useState } from "react";

const Button = ({ name, onClick }) => {
    return <button onClick={onClick}>{name}</button>
}

const Greeting = (props) => {
    if (props.isLoggedIn) {
        return (
            <p>
                안녕하세요 <u>홍길동님</u>
            </p>
        );
    }

    return <p>로그인 후 이용하세요</p>
};

const LoginPanel = () => {
    const [isLoggedIn, setState] = useState(false);

    const handleLoginClick = () => {
        setState(true);
    }

    const handleLogoutClick = () => {
        setState(false);
    };

    let button;
    if (isLoggedIn) {
        button = <Button name="Logout" onClick={handleLogoutClick} />;
    } else {
        button = <Button name="Login" onClick={handleLoginClick} />
    }

    return (
        <>
            {button}
            <Greeting isLoggedIn={isLoggedIn} />
        </>
    )

}

export default LoginPanel;