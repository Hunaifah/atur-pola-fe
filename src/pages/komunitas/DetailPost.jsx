import "../../App.css";
import { Link, useParams } from "react-router-dom";
import IconArrowBack from "../../assets/icon-back.svg";
import IconImage from "../../assets/icon-image.svg";
import IconLink from "../../assets/icon-link.svg";
import Profile1 from "../../assets/profile-user1.png";
import Profile2 from "../../assets/profile-user2.png";
import Profile3 from "../../assets/profile-user3.png";
import Profile4 from "../../assets/profile-user4.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function DetailPost() {
  const name = "username";
  const activeNav = "komunitas";

  return (
    <>
      <Header activeNav={activeNav} />
      <div className="content-komunitas-detail-post">
        <div className="btn-back-group">
          <Link to="/komunitas-user" className="btn-back">
            <img src={IconArrowBack} alt="icon-arrow-back" />
            <p>Back to Komunitas</p>
          </Link>
        </div>
        <div className="detail-post">
          <div className="header-detail-post">
            <img src={Profile3} alt="profile" />
            <h1>Yulia Lailasari</h1>
            <ol>
              <li>1 jam yang lalu</li>
            </ol>
          </div>
          <div className="body-detail-post">
            <p>
              Hai teman-teman, aku ingin memulai rutinitas latihan baru minggu
              depan. Apakah ada yang punya rekomendasi untuk latihan kekuatan
              yang efektif? Saya ingin fokus pada pengembangan otot dan
              meningkatkan kekuatan. Terima kasih atas bantuan dan saran Anda!
              💪 #LatihanKekuatan #FitnessGoals
            </p>
          </div>
          <div className="footer-detail-post">
            <div className="icon-group-footer-post">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                className="icon-svg-like-n-comment"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9639 8.59755L14.0215 8.44091C13.9987 8.57773 14.0061 8.71787 14.043 8.85157C14.0798 8.98528 14.1454 9.10935 14.2351 9.21515C14.3248 9.32096 14.4364 9.40596 14.5623 9.46425C14.6881 9.52254 14.8252 9.55272 14.9639 9.55269V8.59755ZM0.955142 8.59755V7.64241C0.701823 7.64241 0.458878 7.74304 0.279755 7.92216C0.100631 8.10129 0 8.34423 0 8.59755H0.955142ZM3.50219 22.2879H17.9694V20.3776H3.50219V22.2879ZM19.4976 7.64241H14.9639V9.55269H19.4976V7.64241ZM15.9063 8.7542L16.9328 2.59671L15.0479 2.28215L14.0215 8.44091L15.9063 8.7542ZM14.7347 0.00127343H14.4621V1.91156H14.7334L14.7347 0.00127343ZM10.4875 2.12806L7.28455 6.93306L8.87391 7.99263L12.0768 3.18763L10.4875 2.12806ZM5.96009 7.64241H0.955142V9.55269H5.96009V7.64241ZM0 8.59755V18.7857H1.91028V8.59755H0ZM21.4041 19.4734L22.9323 11.8323L21.0602 11.4566L19.532 19.0977L21.4041 19.4734ZM7.28455 6.93306C7.13924 7.15119 6.94232 7.3288 6.71127 7.45254C6.48022 7.57629 6.22219 7.64107 5.96009 7.64114V9.55142C7.13173 9.55142 8.22441 8.96687 8.87391 7.99263L7.28455 6.93306ZM16.9328 2.59671C16.9858 2.27753 16.9688 1.94934 16.8827 1.63742C16.7967 1.3255 16.6438 1.03605 16.4346 0.78919C16.2254 0.542327 15.965 0.343971 15.6715 0.207906C15.3779 0.0718408 15.0582 0.00132993 14.7347 0.00127343L14.7334 1.91156C14.7795 1.91167 14.8264 1.92182 14.8683 1.94131C14.9101 1.96079 14.9472 1.98914 14.977 2.02439C15.0068 2.05965 15.0286 2.10096 15.0408 2.14547C15.0531 2.18998 15.0555 2.23662 15.0479 2.28215L16.9328 2.59671ZM19.4976 9.55142C20.5037 9.55142 21.2551 10.4709 21.059 11.4553L22.9323 11.831C23.0337 11.323 23.0211 10.7976 22.8954 10.295C22.7697 9.79246 22.5341 9.32404 22.2056 8.92352C21.8771 8.52299 21.4638 8.20034 20.9955 7.97881C20.5272 7.75728 20.0157 7.64238 19.4976 7.64241V9.55142ZM17.9694 22.2879C18.779 22.2881 19.5636 22.0065 20.1898 21.4933C20.816 20.9802 21.2451 20.266 21.4041 19.4722L19.532 19.0965C19.4598 19.4576 19.2646 19.7826 18.9797 20.016C18.6948 20.2494 18.3377 20.378 17.9694 20.3776V22.2879ZM14.4621 0.00127343C13.6759 0.00133055 12.9019 0.194206 12.2088 0.565215C11.5156 0.936224 10.9248 1.47262 10.4887 2.12678L12.0768 3.18763C12.3386 2.79495 12.6933 2.47173 13.1094 2.24911C13.5255 2.0265 13.9902 1.91138 14.4621 1.91156V0.00127343ZM3.50219 20.3776C2.62346 20.3776 1.91028 19.6645 1.91028 18.7857H0C0 19.7146 0.368979 20.6054 1.02577 21.2622C1.68255 21.9189 2.57335 22.2879 3.50219 22.2879V20.3776Z"
                  fill="#8C8C8C"
                />
                <path
                  d="M6.04932 8.59753V21.3328"
                  stroke="#8C8C8C"
                  stroke-width="1.5"
                />
              </svg>

              <p>50 Suka</p>
            </div>
            <div className="icon-group-footer-post">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="icon-svg-like-n-comment"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.7 22C7.40826 22 7.12847 21.8841 6.92218 21.6778C6.71589 21.4715 6.6 21.1917 6.6 20.9V17.6H2.2C1.61652 17.6 1.05695 17.3682 0.644365 16.9556C0.231785 16.5431 0 15.9835 0 15.4V2.2C0 1.61652 0.231785 1.05695 0.644365 0.644365C1.05695 0.231785 1.61652 0 2.2 0H19.8C20.3835 0 20.9431 0.231785 21.3556 0.644365C21.7682 1.05695 22 1.61652 22 2.2V15.4C22 15.9835 21.7682 16.5431 21.3556 16.9556C20.9431 17.3682 20.3835 17.6 19.8 17.6H13.09L9.02 21.681C8.8 21.89 8.525 22 8.25 22H7.7ZM8.8 15.4V18.788L12.188 15.4H19.8V2.2H2.2V15.4H8.8Z"
                  fill="#8C8C8C"
                />
              </svg>

              <p>8 Komentar</p>
            </div>
          </div>
        </div>
        <div className="detail-post-create-post">
          <h1>Komentar</h1>
          <div className="header-detail-post-create-post">
            <img src={Profile1} alt="profile" />
            <h1>Raihan Simanjutak</h1>
          </div>
          <div className="input-detail-post-create-post-group">
            <textarea
              name="detail-post-create-post"
              id="detail-post-create-post"
              placeholder="Bagikan pemikiran, cerita, atau momen Anda dengan komunitas..."
            ></textarea>
            <Link className="icon-detail-post-create-post-img">
              <img src={IconImage} alt="icon-img" />
            </Link>
            <Link className="icon-detail-post-create-post-link">
              <img src={IconLink} alt="icon-link" />
            </Link>
          </div>
          <div className="btn-detail-post-create-post-group">
            <Link className="btn-submit-detail-post-create-post-link btn-primary-hover btn-primary-focus">
              Balas
            </Link>
          </div>
        </div>

        <div className="card-comments">
          <div className="card-header-comments">
            <img src={Profile2} alt="profile" />
            <h1>Restu Nuraini</h1>
            <ol>
              <li>1 jam yang lalu</li>
            </ol>
          </div>
          <div className="card-body-comments">
            <p>
              Saya merekomendasikan latihan angkat beban dengan fokus pada
              gerakan dasar seperti squat, deadlift, dan bench press. Mereka
              sangat efektif untuk membangun kekuatan dan otot secara
              menyeluruh! 💪
            </p>
          </div>
          <div className="card-footer-comments">
            <Link className="icon-group-footer-comments">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="icon-svg-like-n-comment"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.7 22C7.40826 22 7.12847 21.8841 6.92218 21.6778C6.71589 21.4715 6.6 21.1917 6.6 20.9V17.6H2.2C1.61652 17.6 1.05695 17.3682 0.644365 16.9556C0.231785 16.5431 0 15.9835 0 15.4V2.2C0 1.61652 0.231785 1.05695 0.644365 0.644365C1.05695 0.231785 1.61652 0 2.2 0H19.8C20.3835 0 20.9431 0.231785 21.3556 0.644365C21.7682 1.05695 22 1.61652 22 2.2V15.4C22 15.9835 21.7682 16.5431 21.3556 16.9556C20.9431 17.3682 20.3835 17.6 19.8 17.6H13.09L9.02 21.681C8.8 21.89 8.525 22 8.25 22H7.7ZM8.8 15.4V18.788L12.188 15.4H19.8V2.2H2.2V15.4H8.8Z"
                  fill="#8C8C8C"
                />
              </svg>

              <p>Balas</p>
            </Link>
          </div>
          <div className="child-comment-1">
            <hr />
            <div className="card-header-comments">
              <img src={Profile3} alt="profile" />
              <h1>Yulia Lailasari</h1>
              <ol>
                <li>1 jam yang lalu</li>
              </ol>
            </div>
            <div className="card-body-comments">
              <p>
                Saya setuju dengan saran mbak Restu Nuraini! Jangan lupa untuk
                memberi waktu istirahat yang cukup di antara sesi latihan untuk
                pemulihan yang optimal. Semoga rutinitas baru Anda sukses,
                FitFam! 💪💕
              </p>
            </div>
            <div className="card-footer-comments">
              <Link className="icon-group-footer-comments">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  className="icon-svg-like-n-comment"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.7 22C7.40826 22 7.12847 21.8841 6.92218 21.6778C6.71589 21.4715 6.6 21.1917 6.6 20.9V17.6H2.2C1.61652 17.6 1.05695 17.3682 0.644365 16.9556C0.231785 16.5431 0 15.9835 0 15.4V2.2C0 1.61652 0.231785 1.05695 0.644365 0.644365C1.05695 0.231785 1.61652 0 2.2 0H19.8C20.3835 0 20.9431 0.231785 21.3556 0.644365C21.7682 1.05695 22 1.61652 22 2.2V15.4C22 15.9835 21.7682 16.5431 21.3556 16.9556C20.9431 17.3682 20.3835 17.6 19.8 17.6H13.09L9.02 21.681C8.8 21.89 8.525 22 8.25 22H7.7ZM8.8 15.4V18.788L12.188 15.4H19.8V2.2H2.2V15.4H8.8Z"
                    fill="#8C8C8C"
                  />
                </svg>

                <p>Balas</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="card-comments">
          <div className="card-header-comments">
            <img src={Profile4} alt="profile" />
            <h1>Tina C. Mahon</h1>
            <ol>
              <li>1 jam yang lalu</li>
            </ol>
          </div>
          <div className="card-body-comments">
            <p>
              Bagi saya, latihan tubuh bagian atas seperti pull-up dan chin-up
              juga sangat bagus untuk menguatkan otot lengan dan punggung.
              Cobalah untuk memasukkan latihan ini ke dalam rutinitas Anda! 🏋️‍♂️
            </p>
          </div>
          <div className="card-footer-comments">
            <Link className="icon-group-footer-comments">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="icon-svg-like-n-comment"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.7 22C7.40826 22 7.12847 21.8841 6.92218 21.6778C6.71589 21.4715 6.6 21.1917 6.6 20.9V17.6H2.2C1.61652 17.6 1.05695 17.3682 0.644365 16.9556C0.231785 16.5431 0 15.9835 0 15.4V2.2C0 1.61652 0.231785 1.05695 0.644365 0.644365C1.05695 0.231785 1.61652 0 2.2 0H19.8C20.3835 0 20.9431 0.231785 21.3556 0.644365C21.7682 1.05695 22 1.61652 22 2.2V15.4C22 15.9835 21.7682 16.5431 21.3556 16.9556C20.9431 17.3682 20.3835 17.6 19.8 17.6H13.09L9.02 21.681C8.8 21.89 8.525 22 8.25 22H7.7ZM8.8 15.4V18.788L12.188 15.4H19.8V2.2H2.2V15.4H8.8Z"
                  fill="#8C8C8C"
                />
              </svg>

              <p>Balas</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailPost;
