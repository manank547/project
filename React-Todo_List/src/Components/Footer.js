import React from 'react';

function Footer() {
  let footerStyle={
    position: "relative",
    width:"100%",
    top:"0vh"

  }
  return (
    <footer className="bg-dark text-center text-light my-2 p-2" style={footerStyle}>
    © 2023 Copyright:<span> <a className="text-light" href="/">MyTodoList.com</a></span>
   
  </footer>
  );
}

export default Footer;
