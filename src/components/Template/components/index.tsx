import { H } from "./components/H";
import { P } from "./components/P";
import { Title } from "./components/Title";
import "./index.less";
import pic from "../../../assets/common/pic.jpg";
export const Common = () => {
  const hList = ["重庆邮电大学 · 红岩网校工作站", "2020.6 至 2022.6"];
  const pList = [
    "- **红岩网校后端 SDK**",
    "[Link](https://github.com/MashiroC/begonia)",
  ];
  let sections = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="content">
      <div className="header">
        <div className="pic">
          <img src={pic} alt="" />
        </div>
        <div className="tit">
          <div className="tit-top">
            <h1>黄晨峰</h1>
            <a className="tit-top-name">sarailQAQ</a>
          </div>
          <div className="tit-button">
            <div className="tb-left">
              <h3 className="tbl-item">男 · 2023届本科 </h3>
              <h3 className="tbl-item">重庆邮电大学 · 数据科学与大数据技术</h3>
            </div>
            <div className="tb-right">
              <div className="tbr-item">sarail#qq.com</div>
              <div className="tbr-item">152 5760 **** </div>
              <div className="tbr-item">http://sarailqaq.org.cn</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        {sections.map((section) => {
          return (
            <div className="item">
              <Title title="title" />
              <div className="si-p">
                <H source={hList} />
                <P source={pList} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
