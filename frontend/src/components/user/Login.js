import React from "react";
function UserLogin() {

    return (
        <>
            <div class="login-container">
                <div class="login_form">
                    <h1 class="special-head text-center"><span>LOGIN</span></h1>
                    <form class="login_input">
                        <input type="text" class="field" placeholder="User Name" />
                        <input type="password" class="field"  placeholder="Password" />
                        <button type="submit" class="submit-button">Login</button>
                        <div class="tag">
                            <span>New User?</span>
                            <a href="/UserSignup">Sing Up</a>
                        </div>

                    </form>

                </div>

            </div>

        </>
    );
}

export default UserLogin;