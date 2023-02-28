import "./index.less";
import pic from "../../../../assets/common/pic.jpg";
import { Config } from "../../../../types/index";
import githubLogo from "../../../../assets/github.svg";
type Props = {
  config: Config;
};
export const Header: React.FC<Props> = (props: Props) => {
  const { name, github, profiles, contacts } = props.config;
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
              <div key={contact} className="tbr-item">
                {contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
