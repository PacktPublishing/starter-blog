import React from "react"

class Layout extends React.Component {
  render() {
    const { title, subtitle, children } = this.props

    return (
      <div className="app-container">
        <header>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Rachelle Rathbone</footer>
      </div>
    )
  }
}

export default Layout
