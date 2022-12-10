import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";

export default function Sidebar() {
  return (
    <>
      <div className="left">
        <a className="profile">
          <div className="profile-photo">
            <img src=" images/avatar1.jpg" alt="no image" />
          </div>
          <div className="handle">
            <h4>Rocki Psr</h4>
            <p className="text-muted">@Psr</p>
          </div>
        </a>
        {/* <!-- ====== Side bar  -======== --> */}
        <div className="sidebar">
          <a className="menu-item active">
            <HomeIcon className="sidebarIcon" />

            <h3>Home</h3>
          </a>

          <a className="menu-item">
            <ExploreIcon className="sidebarIcon" />
            <h3>Explore</h3>
          </a>

          <a className="menu-item" id="notifications">
            <HomeIcon className="sidebarIcon" />
            <span>
              <small className="notification-count">6+</small>
            </span>
            <h3>Notifications</h3>
            {/* <!-- notofocation pop ups --> */}
            <div className="notifications-popup">
              <div className="profile-photo">
                <img src="/html/project4/images/avatar3.jpg" alt="" />
              </div>
              <div className="notification-body">
                <b>Keke Benjamin</b> accepted your friend request
                <small className="text-muted"> 2 days ago </small>
              </div>
              <div className="profile-photo">
                <img src="/html/project4/images/avatar4.jpg" alt="" />
              </div>
              <div className="notification-body">
                <b>Rejo mento</b> accepted your friend request
                <small className="text-muted"> 2 days ago </small>
              </div>
              <div className="profile-photo">
                <img src="/html/project4/images/avatar4.jpg" alt="" />
              </div>
              <div className="notification-body">
                <b>Rejo mento</b> commented on your post
                <small className="text-muted"> 1 days ago </small>
              </div>
              <div className="profile-photo">
                <img src="/html/project4/images/avatar5.jpg" alt="" />
              </div>
              <div className="notification-body">
                <b>Kate hayate</b> accepted your friend request
                <small className="text-muted"> 2 hours ago </small>
              </div>
              <div className="profile-photo">
                <img src="/html/project4/images/avatar5.jpg" alt="" />
              </div>
              <div className="notification-body">
                <b>Kate hayate </b> Likes you photo
                <small className="text-muted"> 2 hours ago </small>
              </div>
            </div>
          </a>
          <a className="menu-item" id="messages-notification">
            <span>
              <i className="uil uil-envelope-add">
                <small className="notification-count">6</small>
              </i>
            </span>
            <h3>Message</h3>
          </a>
          <a className="menu-item">
            <span>
              <i className="uil uil-bookmark"></i>{" "}
            </span>
            <h3>Bookmarks</h3>
          </a>
          <a className="menu-item">
            <span>
              <i className="uil uil-chart-line"></i>
            </span>
            <h3>Analytics</h3>
          </a>
          <a className="menu-item" id="theme">
            <span>
              <i className="uil uil-palette"></i>
            </span>
            <h3>Themes</h3>
          </a>
          <a className="menu-item active">
            <span>
              <i className="uil uil-setting"></i>
            </span>
            <h3>Settings</h3>
          </a>
        </div>
        <label for="create-post" className="btn btn-primary">
          Create post{" "}
        </label>
      </div>
    </>
  );
}
