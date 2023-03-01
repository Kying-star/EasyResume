export type SectionType = {
  title: string;
  childList : ChildList[]
  tableList? : string[];
};

export type Config = {
  name: string;
  github: string;
  profiles: string[];
  contacts: ChildList[];
  weChatQrCode?: boolean;
  showWeChatQrCodeInHTML?: boolean;
  docName?: string;
  description?: string;
  printName?: string;
};

type ChildList = {
  name: string;
  value: string[];
}