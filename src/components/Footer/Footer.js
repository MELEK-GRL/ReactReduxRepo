import { MdSend } from "react-icons/md";
import logo from "../../assets/img/logo.jpg";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full footerColor boxCenter  ">
      <div className="containerBox flex- w-full">
       <div className="boxStart w-full   justify-start gap-8 lg:gap-0 lg:justify-between lg:flex-row flex-col p-2">
       <div className="boxStart flex-col gap-3 w-full lg:w-fit ">
          <img
            alt={logo}
            src={logo}
            className="object-cover rounded-full w-12 h-12"
          />
          <h1 className="footerText">Tasy Treat</h1>
          <span>Lorem ipsum dolor sit amet, consectetur.</span>
          <span>Lorem ipsum dolor sit amet, consectetur.</span>
        </div>
        <div className="boxStart flex-col gap-3 w-full lg:w-fit">
          <div className="boxStart gap-3 flex-col">
            <h1 className="footerText">Dellvery Time</h1>
            <span className="footerFont">Sunday-Thursday</span>
            <span>10:00 am-11:00pm</span>
          </div>
          <div className="boxStart gap-3 flex-col">
            <span className="footerFont">Friday-Saturday</span>
            <p>Off Day</p>
          </div>
        </div>
        <div className="boxStart gap-3 flex-col w-full lg:w-fit">
          <h1 className="footerText">Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur.</span>
          <div className="boxStart gap-3 flex-col">
            <span className="footerFont">Phone:000000000</span>
            <span className="footerFont">example@gmail.com</span>
          </div>
        </div>
        <div className="boxStart gap-3 flex-col w-full lg:w-fit">
          <h1 className="footerText">NewsLetter</h1>
          <span>Lorem ipsum dolor.</span>
          {/* <div className="boxCenter justify-between p-2 gap-3 rounded border-gray-400 border">
            <textarea
              placeholder="Enter your mail"
              className="p-1 h-10 min-h-[10px] max-h-14 text-black"
            />
            <button className="btn rounded-sm p-1 w-fit boxStart">
              <MdSend size={15} />
            </button>
          </div> */}
          <div className="boxStart gap-3">
            <Link to="#" className="socialMedia">
              <CiFacebook className="w-5 h-5 rounded object-cover" />
            </Link>
            <Link to="#" className="socialMedia">
              <AiOutlineYoutube className="w-5 h-5 rounded object-cover" />
            </Link>
            <Link to="#" className="socialMedia">
              <BsGithub className="w-5 h-5 rounded object-cover" />
            </Link>
            <Link to="#" className="socialMedia">
              <AiOutlineLinkedin className="w-5 h-5 rounded object-cover" />
            </Link>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}