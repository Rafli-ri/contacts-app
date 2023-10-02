import React from "react";
import { createRoot } from "react-dom/client";

function HomePage() {
  return <p>This is Homepage</p>;
}

function AboutPage() {
  return <p>This is About page</p>;
}

function FAQPage() {
  return <p>This is FAQ page</p>;
}

function Link({ target, navigate, children }) {
  return (
    <a
      href={target}
      onClick={(event) => {
        event.preventDefault(); // menghapus behavior default
        navigate(target); // mengubah state berdasarkan target
      }}
    >
      {children}
    </a>
  );
}

class Routes extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      page: "/",
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(() => {
      return {
        page: target,
      };
    });
  }
  render() {
    if (this.state.page === "/") {
      return <HomePage />;
    }
    if (this.state.page === "/about") {
      return <AboutPage />;
    }
    if (this.state.page === "/faq") {
      return <FAQPage />;
    }
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link target="/" navigate={this.navigate}>
                  Home
                </Link>
              </li>
              <li>
                <Link target="/about" navigate={this.navigate}>
                  About
                </Link>
              </li>
              <li>
                <Link target="/faq" navigate={this.navigate}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {this.state.page === "/" && <HomePage />}
          {this.state.page === "/about" && <AboutPage />}
          {this.state.page === "/faq" && <FAQPage />}
        </main>
      </>
    );
  }
}

export default Routes;
