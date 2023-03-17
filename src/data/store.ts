import { atom } from 'recoil';
import { a4Height, a4Width, columnCount, commonColor, commonFontFamily, commonFontSize, isShowPic } from '../styles';

export const fontSize = atom({
    key: 'fontSize', 
    default: commonFontSize,
  });

export const fontFamily = atom({
  key: 'fontFamily',
  default: commonFontFamily
})

export const resumeHeight = atom({
  key: 'resumeHeight',
  default: a4Height
})

export const resumeWidth = atom({
  key: 'resumeWidth',
  default: a4Width
})

export const commonFontColor = atom({
  key: 'commonFontColor',
  default: commonColor
})

export const commonColumnCount = atom({
  key: 'columnCount',
  default: columnCount
})

export const ShowPic = atom({
  key: 'showPick',
  default: isShowPic
})