import "./index.less";
import pic from "../../../../assets/common/pic.jpg";
import { Config } from "../../../../types/index";
import githubLogo from "../../../../assets/github.svg";
import email from "../../../../assets/email.svg";
import tell from "../../../../assets/tell.svg";
import home from "../../../../assets/home.svg";
type Props = {
  config: Config;
};
export const Header: React.FC<Props> = (props: Props) => {
  const { name, github, profiles, contacts } = props.config;

  const iconRender = (icon: string) => {
    switch (icon) {
      case "mail":
        return <img src={email} alt="" />;
      case "tell":
        return <img src={tell} alt="" />;
      case "blog":
        return <img src={home} alt="" />;
      default:
        return "";
    }
  };
  return (
    <div className="header">
      <div className="pic">
        <img src={pic} alt="" />
      </div>
      <div className="tit">
        <div className="tit-top">
          <h1>{name}</h1>
          <a href={`https://github.com/${github}`} className="nick">
            <span className="tit-top-space"></span>
            <img src={githubLogo} alt="github logo" />
            <span className="tit-top-github">{github}</span>
          </a>
          {/* <a className="tit-top-name">{github}</a> */}
        </div>
        <div className="tit-button">
          <div className="tb-left">
            {profiles.map((profile: any) => (
              <h3 key={profile} className="tbl-item">
                {profile}
              </h3>
            ))}
          </div>
          <div className="tb-right">
            {contacts.map((contact: any) => (
              <div key={contact.value} className="tbr-item">
                {contact.value}
                {iconRender(contact.name)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
