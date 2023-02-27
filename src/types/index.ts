export type SectionType = {
  title: string;
  hList?: string[][];
  pList?: string[][];
  tableList? : string[];
};

export type Config = {
  name: string;
  github: string;
  profiles: string[];
  contacts: string[];
  weChatQrCode?: boolean;
  showWeChatQrCodeInHTML?: boolean;
  docName?: string;
  description?: string;
  printName?: string;
};
