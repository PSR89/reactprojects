import "./rightbar.css";

export default function Rightbar() {
  return (
    <>
      <div className="right">
        <div className="messages">
          <div className="heading">
            <h4>Messages</h4>
            <i className="uil uil-edit"></i>
          </div>
          {/* <!-- ====== search bar -======== --> */}

          <div className="search-bar">
            <i className="uil uil-search"></i>
            <input
              type="search"
              placeholder="search messages"
              id="message-search"
            />
          </div>
          {/* <!-- ====== Messages category  -======== --> */}
          <div className="category">
            <h6 className="active">primary</h6>
            <h6>General</h6>
            <h6 className="message-requests">Request(7)</h6>
          </div>
          {/* <!-- message  --> */}
          <div className="message">
            <div className="profile-photo">
              <div className="active"></div>
              <img src="images/avatar5.jpg" alt="" />
            </div>
            <div className="message-body">
              <h5>Harley james</h5>
              <p className="text-muted">Just woke up bruh..</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-photo">
              <img src="images/avatar4.jpg" alt="" />
            </div>
            <div className="message-body">
              <h5>Edem Quist</h5>
              <p className="text-muted">Lets catch up 2morow.</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-photo">
              <div className="active"></div>
              <img src="images/avatar3.jpg" alt="" />
            </div>
            <div className="message-body">
              <h5>Team booche</h5>
              <p className="text-muted">Ok. OK</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-photo">
              <img src="images/avatar2.jpg" alt="" />
            </div>
            <div className="message-body">
              <h5>Loke</h5>
              <p className="text-muted">Its was awesome just getting started</p>
            </div>
          </div>
        </div>
        <div className="friend-request">
          <h4>Request</h4>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="images/avatar4.jpg" />
              </div>
              <div>
                <h5>Hajiya Bintu</h5>
                <p className="text-muted">8 Mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
          {/* <!-- 1 --> */}
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="images/pexels-simon-robben-614810.jpg" />
              </div>
              <div>
                <h5>Hajiya Bintu</h5>
                <p className="text-muted">8 Mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
          {/* <!-- 1 --> */}

          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="images/pexels-jeffrey-reed-769732.jpg" />
              </div>
              <div>
                <h5>Hajiya Bintu</h5>
                <p className="text-muted">3 Mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
          {/* <!-- 1 --> */}

          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="images/pexels-engin-akyurt-1642228.jpg" />
              </div>
              <div>
                <h5>Hajiya Bintu</h5>
                <p className="text-muted">1 Mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
          {/* <!-- 1 --> */}

          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="images/pexels-vinicius-wiesehofer-1130623.jpg" />
              </div>
              <div>
                <h5>Hajiya Bintu</h5>
                <p className="text-muted">4 Mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
