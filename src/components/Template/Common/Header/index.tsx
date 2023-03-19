import "./index.less";
import "cropperjs/dist/cropper.css";
import pic from "../../../../assets/common/pic.jpg";
import { Config } from "../../../../types/index";
import githubLogo from "../../../../assets/github.svg";
import email from "../../../../assets/email.svg";
import tell from "../../../../assets/tell.svg";
import home from "../../../../assets/home.svg";
import { useRecoilValue } from "recoil";
import { ShowPic } from "../../../../data/store";
import React, { Ref, useRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import { Modal } from "antd";
type Props = {
  config: Config;
};
export const Header: React.FC<Props> = (props: Props) => {
  const { name, github, profiles, contacts } = props.config;
  const isShowPic = useRecoilValue(ShowPic);
  const [image, setImage] = useState<string | undefined>();
  const [cropData, setCropData] = useState("#");
  const cropperRef = useRef<ReactCropperElement>(null);
  const [isPicModalOpen, setIsPicModalOpen] = useState(false);
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

  const onChange = (e: any) => {
    console.log(1);
    // e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
    setIsPicModalOpen(true);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div className="header">
      {isShowPic && (
        <div className="pic" onClick={() => setIsPicModalOpen(true)}>
          <img src={cropData === "#" ? pic : cropData} alt="" />
        </div>
      )}
      <div className="tit">
        <div className="tit-top">
          <h1>{name}</h1>
          <a href={`https://github.com/${github}`} className="nick">
            <span className="tit-top-space"></span>
            <img src={githubLogo} alt="github logo" />
            <span className="tit-top-github">{github}</span>
          </a>
        </div>
        <div className="tit-button">
          <div className="tb-left">
            {profiles?.map((profile: any) => (
              <h3 key={profile} className="tbl-item">
                {profile}
              </h3>
            ))}
          </div>
          <div className="tb-right">
            {contacts?.map((contact: any) => (
              <div key={contact.value} className="tbr-item">
                {contact.value}
                {iconRender(contact.name)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        title="Select Image"
        open={isPicModalOpen}
        onOk={() => {
          getCropData();
          setIsPicModalOpen(false);
        }}
        onCancel={() => setIsPicModalOpen(false)}
        width={"1000px"}
      >
        <div style={{ width: "100%" }}>
          <input type="file" onChange={onChange} />
          <Cropper
            ref={cropperRef as unknown as any}
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            guides={true}
            aspectRatio={356 / 441}
          />
        </div>
      </Modal>
    </div>
  );
};
