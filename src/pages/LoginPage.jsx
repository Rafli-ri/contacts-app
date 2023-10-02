import React from "react";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { login } from "../utils/api";

const LoginPage = ({ loginSuccess }) => {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section>
      <h2>Silahkan Masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLogin} />
      <p>
        Belum Punya akun <Link to="/register">Daftar di sini...</Link>
      </p>
    </section>
  );
};

export default LoginPage;
