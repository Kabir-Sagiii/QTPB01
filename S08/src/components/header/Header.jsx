import React from "react";
import "./Header.css";
function Header() {
  return (
    // <div className="header">
    //   <div>
    //     <i className="bi bi-send-arrow-up-fill" aria-hidden="true">
    //       &nbsp;Chat Dude
    //     </i>
    //   </div>
    //   <div className="right">
    //     <img
    //       src="https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
    //       width={40}
    //       height={40}
    //     />
    //     <h3>Rohan</h3>
    //     <i className="bi bi-power" style={{ fontSize: "24px" }}></i>
    //   </div>
    // </div>
    <div className="header">
      <div className="brand">
        <i class="bi bi-send-arrow-up-fill">&nbsp;Chat Dude</i>
      </div>
      <div className="options">
        <img
          src="https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
          width={40}
          height={40}
        />
        <h3>Rohan</h3>
        <i class="bi bi-power"></i>
      </div>
    </div>
  );
}

export default Header;
