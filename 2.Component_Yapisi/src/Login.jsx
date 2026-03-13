import React from 'react'

export const users = [
    {
        username: "Pinar",
        surname: "Çelik"
    },

    {
        username: "Esmoş",
        surname: "Çelik"
    }


]

function Login() {
    return (
        <div>
            <div>
                <p>Kullanıcı Adınız:</p>
                <input type="text" />
            </div>
            <div>
                <p>Şifreniz:</p>
                <input type="text" />
            </div>
            <button>Giriş Yap</button>
        </div>
    )
}

export default Login