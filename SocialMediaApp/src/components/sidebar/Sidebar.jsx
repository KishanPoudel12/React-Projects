import React from 'react'
import './Sidebar.css'
import FeedIcon from "@mui/icons-material/Feed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideocamIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Cources</span>
          </li>
        </ul>
        <div className="sidebarButton">Show More</div>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="data:image/jpeg;base64,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"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Kishan Poudel</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="data:image/jpeg;base64,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"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Kritika Poudel</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="data:image/jpeg;base64,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"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Kritik Poudel</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6fqi3dDby57HJQCi8Yqg1S2Ex6XQCAgtuMY6WWprzemtw9RrbJSMuM&s"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Jeevan Poudel</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6fqi3dDby57HJQCi8Yqg1S2Ex6XQCAgtuMY6WWprzemtw9RrbJSMuM&s"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Jeevan Poudel</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6fqi3dDby57HJQCi8Yqg1S2Ex6XQCAgtuMY6WWprzemtw9RrbJSMuM&s"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Jeevan Poudel</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6fqi3dDby57HJQCi8Yqg1S2Ex6XQCAgtuMY6WWprzemtw9RrbJSMuM&s"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Jeevan Poudel</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6fqi3dDby57HJQCi8Yqg1S2Ex6XQCAgtuMY6WWprzemtw9RrbJSMuM&s"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Jeevan Poudel</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6fqi3dDby57HJQCi8Yqg1S2Ex6XQCAgtuMY6WWprzemtw9RrbJSMuM&s"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Jeevan Poudel</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6fqi3dDby57HJQCi8Yqg1S2Ex6XQCAgtuMY6WWprzemtw9RrbJSMuM&s"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Jeevan Poudel</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg6fqi3dDby57HJQCi8Yqg1S2Ex6XQCAgtuMY6WWprzemtw9RrbJSMuM&s"
              alt="sadBoyPic"
            />
            <span className="sidebarFriendName">Jeevan Poudel</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar