import "./middle.css";

export default function Middle() {
  return (
    <>
      <div className="middle">
        {/* ------------------Stories middle  */}
        <div className="stories">
          <div className="story">
            <div className="profile-photo">
              <img src="images/pexels-ahmet-polat-4486002.jpg" alt="" />
            </div>
            <p className="name">Your story</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src="images/pexels-andrea-piacquadio-842811.jpg" alt="" />
            </div>
            <p className="name">Helle james</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src="images/pexels-engin-akyurt-1642228.jpg" alt="" />
            </div>
            <p className="name">Hermin</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img
                src="images/pexels-gunnar-ridderström-4318441 (1).jpg"
                alt=""
              />
            </div>
            <p className="name">Tony</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src="images/pexels-jeffrey-reed-769732.jpg" alt="" />
            </div>
            <p className="name">Stella</p>
          </div>
        </div>
        {/* <!-- ====== end of stories  -======== --> */}
        {/* <!-- Post section  --> */}
        <form className="create-post">
          <div className="profile-photo">
            <img src="images/avatar1.jpg" alt="" />
          </div>
          <input
            type="text"
            placeholder="Whats in you mind Psr ?"
            id="create-post"
          />
          <input type="submit" value="post" className="btn btn-primary" />
        </form>
        {/* =================== Feeds Section ============= */}
        {/* <!-- ========== Feed 1 =============--> */}
        <div className="feeds">
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="images/avatar3.jpg" alt="" />
                </div>
                <div className="info">
                  <h3>Lana rose</h3>
                  <small>Dubai 15mins ago </small>
                </div>
              </div>
              <span className="edit">
                {" "}
                <i className="uil uil-ellipsis-h"></i>
              </span>
            </div>
            <div className="photo">
              <img src="images/pexels-andrea-piacquadio-842811.jpg" alt="" />
            </div>
            <div className="action-button">
              <div className="interaction-button">
                <span>
                  <i className="uil uil-thumbs-up"></i>
                </span>
                <span>
                  <i className="uil uil-comment-dots"></i>
                </span>
                <span>
                  <i className="uil uil-share"></i>
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark"></i>
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                {" "}
                <img src="images/avatar2.jpg" />
              </span>
              <span>
                {" "}
                <img src="images/avatar3.jpg" />
              </span>
              <span>
                {" "}
                <img src="images/avatar4.jpg" />
              </span>
              <p>
                liked by <b>Ernet achiever</b> and 2467 others
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Lana rose</b> Lorem ipsum
                <span className="hash-tag"> #lifesyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 277 comments</div>
          </div>
          {/* <!-- ========== Feed 2  =============--> */}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="images/avatar4.jpg" alt="" />
                </div>
                <div className="info">
                  <h3>Judy</h3>
                  <small>Dubai 15mins ago </small>
                </div>
              </div>
              <span className="edit">
                {" "}
                <i className="uil uil-ellipsis-h"></i>
              </span>
            </div>
            <div className="photo">
              <img src="images/pexels-vinicius-wiesehofer-1130623.jpg" alt="" />
            </div>
            <div className="action-button">
              <div className="interaction">
                <span>
                  <i className="uil uil-thumbs-up"></i>
                </span>
                <span>
                  <i className="uil uil-comment-dots"></i>
                </span>
                <span>
                  <i className="uil uil-share"></i>
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark"></i>
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                {" "}
                <img src="images/avatar2.jpg" />
              </span>
              <span>
                {" "}
                <img src="images/avatar3.jpg" />
              </span>
              <span>
                {" "}
                <img src="images/avatar4.jpg" />
              </span>
              <p>
                liked by <b>Homer</b> and 728 others
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Lee Curran </b> Lorem ipsum
                <span className="hash-tag"> #lifesyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 277 comments</div>
          </div>
          {/* <!-- ========== Feed 3 =============--> */}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="images/avatar5.jpg" alt="" />
                </div>
                <div className="info">
                  <h3>Hardy Bor</h3>
                  <small>Dubai 15mins ago </small>
                </div>
              </div>
              <span className="edit">
                {" "}
                <i className="uil uil-ellipsis-h"></i>
              </span>
            </div>
            <div className="photo">
              <img src="images/pexels-tomaz-barcellos-1987301.jpg" alt="" />
            </div>
            <div className="action-button">
              <div className="interaction">
                <span>
                  <i className="uil uil-thumbs-up"></i>
                </span>
                <span>
                  <i className="uil uil-comment-dots"></i>
                </span>
                <span>
                  <i className="uil uil-share"></i>
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark"></i>
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                {" "}
                <img src="images/avatar2.jpg" />
              </span>
              <span>
                {" "}
                <img src="images/avatar3.jpg" />
              </span>
              <span>
                {" "}
                <img src="images/avatar4.jpg" />
              </span>
              <p>
                liked by <b>Ernet achiever</b> and 3000 others
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Jane frost </b> Lorem ipsum
                <span className="hash-tag"> #lifesyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 248 comments</div>
          </div>
          {/* <!-- ========== Feed 4 =============--> */}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img
                    src="images/pexels-andrea-piacquadio-842811.jpg"
                    alt=""
                  />
                </div>
                <div className="info">
                  <h3>Lana rose</h3>
                  <small>Dubai 15mins ago </small>
                </div>
              </div>
              <span className="edit">
                {" "}
                <i className="uil uil-ellipsis-h"></i>
              </span>
            </div>
            <div className="photo">
              <img src="images/pexels-thisisengineering-3861958.jpg" alt="" />
            </div>
            <div className="action-button">
              <div className="interaction">
                <span>
                  <i className="uil uil-thumbs-up"></i>
                </span>
                <span>
                  <i className="uil uil-comment-dots"></i>
                </span>
                <span>
                  <i className="uil uil-share"></i>
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark"></i>
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                {" "}
                <img src="images/avatar2.jpg" alt="" />
              </span>
              <span>
                {" "}
                <img src="images/avatar3.jpg" alt="" />
              </span>
              <span>
                {" "}
                <img src="images/avatar4.jpg" alt="" />
              </span>
              <p>
                liked by <b>Ernet achiever</b> and 2467 others
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Salt </b> Lorem ipsum
                <span className="hash-tag"> #lifesyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 512 comments</div>
          </div>
        </div>
      </div>
    </>
  );
}
