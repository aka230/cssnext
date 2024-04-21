/** 公共参数 */
export interface IModuleProps {
  className?: string;
  style?: React.CSSProperties;
  /** 宽度 */
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  /** 外边距 */
  margin?: string;
  /** 距离左边 */
  marginLeft?: string;
  /** 距离右边 */
  marginTop?: string;
  /** 非特殊情况不要使用 */
  marginRight?: string;
  /** 非特殊情况不要使用 */
  marginBottom?: string;
  /** 内边距 */
  padding?: string;
  /** 圆角 */
  borderRadius?: string;
  /** 边框 */
  border?: string;
  /** 投影 */
  boxShadow?: string;
  background?: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

export interface ISlotProps {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  topSlot?: React.ReactNode;
  bottomSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  topLeftSlot?: React.ReactNode;
  topRightSlot?: React.ReactNode;
  bottomLeftSlot?: React.ReactNode;
  bottomRightSlot?: React.ReactNode;
}
