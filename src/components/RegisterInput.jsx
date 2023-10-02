import React from "react";

class RegisterInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChange(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="register-input">
        <input
          type="text"
          placeholder="Nama"
          defaultValue={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          defaultValue={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={this.onPasswordChange}
          defaultValue={this.state.password}
        />
        <button>Register</button>
      </form>
    );
  }
}

export default RegisterInput;
