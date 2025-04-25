import React from "react";
import "./ChatList.css";
import Userchat from "../user-chat/Userchat";
function ChatList() {
  return (
    <div className="chatlist">
      <Userchat
        image={
          "https://static.vecteezy.com/system/resources/previews/025/474/309/non_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg"
        }
        username={"Riya S"}
        lastMessage={"Ok done, Will get back"}
      />
      <Userchat
        image={
          "https://th.bing.com/th/id/OIP.9k_GOA2TNHH70WjDdav4owAAAA?rs=1&pid=ImgDetMain"
        }
        username={"Ramya S"}
        lastMessage={"Ajao yaar, Jaate Sab Milke"}
      />
      <Userchat
        image={
          "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
        }
        username={"Shiva K"}
        lastMessage={"Good Night Dude"}
        id={"67daab36b316ccde3256d52a"}
      />
      <Userchat
        image={
          "https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d"
        }
        username={"Ajay S"}
        lastMessage={"Enjoying building Projects"}
        id={"67e3e0c15972be89b8bc30ca"}
      />
      <Userchat
        image={
          "https://th.bing.com/th/id/OIP.2E08EBjs__izA_1vBw5PggHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
        }
        username={"Pratik"}
        lastMessage={"Ok, Lets connect Tomorrow"}
      />
      <Userchat
        image={
          "https://www.carvermostardi.com/cmos/wp-content/uploads/2018/05/professional_headshots_tampa_011.jpg"
        }
        username={"Seema K"}
        lastMessage={"See you soon, bye, tc"}
      />
      <Userchat
        image={
          "https://static.vecteezy.com/system/resources/previews/025/474/309/non_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg"
        }
        username={"Riya S"}
        lastMessage={"Ok done, Will get back"}
      />
      <Userchat
        image={
          "https://th.bing.com/th/id/OIP.9k_GOA2TNHH70WjDdav4owAAAA?rs=1&pid=ImgDetMain"
        }
        username={"Ramya S"}
        lastMessage={"Ajao yaar, Jaate Sab Milke"}
      />
      <Userchat
        image={
          "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
        }
        username={"Shiva K"}
        lastMessage={"Good Night Dude"}
      />
      <Userchat
        image={
          "https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d"
        }
        username={"Ajay S"}
        lastMessage={"Enjoying building Projects"}
      />
      <Userchat
        image={
          "https://th.bing.com/th/id/OIP.2E08EBjs__izA_1vBw5PggHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
        }
        username={"Pratik"}
        lastMessage={"Ok, Lets connect Tomorrow"}
      />
      <Userchat
        image={
          "https://www.carvermostardi.com/cmos/wp-content/uploads/2018/05/professional_headshots_tampa_011.jpg"
        }
        username={"Seema K"}
        lastMessage={"See you soon, bye, tc"}
      />
    </div>
  );
}

export default ChatList;
