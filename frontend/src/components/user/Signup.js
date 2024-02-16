import React from "react";
function UserSignup() {

    return (
        <>
            <div class="login-container">
                <div class="login_form">
                    <h1 class="special-head text-center"><span>LOGIN</span></h1>
                    <form class="login_input">
                        <input type="text" class="field" placeholder="First Name" />
                        <input type="text" class="field" placeholder="Last Name" />
                        <input type="text" class="field" placeholder="Phone No" />
                        <input type="Email" class="field" placeholder="Email" />
                        <input type="password" class="field"  placeholder="Password" />
                        <button type="submit" class="submit-button">Login</button>
                        <div class="tag">
                            <span>All ready registered?</span>
                            <a href="/UserLogin">Sing In</a>
                        </div>

                    </form>

                </div>

            </div>

        </>
    );
}

export default UserSignup;