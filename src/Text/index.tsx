import classnames from 'classnames';
import { IModuleProps } from 'cssnext/_common/props';
import { TFontSize, TFontTheme } from 'cssnext/_common/themes';
import { commonParams } from 'cssnext/_util/params';
import React, { useMemo, useRef } from 'react';
import './style/index.scss';

interface IProps extends IModuleProps {
  children?: React.ReactNode;
  /** 字体大小 */
  size?: TFontSize;
  /** 主题色 */
  theme?: TFontTheme;
  // 删除线
  lineThrough?: boolean;
  /** 超过自动省略 */
  ellipsis?: boolean;
  /** 超过自动省略行数 */
  lineClamp?: number;
  leftSlot?: React.ReactNode;
  leftSlotWidth?: string;
  rightSlot?: React.ReactNode;
  /** 下划线插槽 */
  underlineSlot?: boolean;
  /** 对齐方式 */
  align?: 'left' | 'center' | 'right';
  /** 跳转链接 */
  link?: string;
  /** 点击回调 */
  onClick?: () => void;
}

export default (props: IProps) => {
  const {
    children,
    size = '12',
    theme,
    lineThrough,
    link,
    ellipsis,
    rightSlot,
    align,
    className,
    leftSlot,
    underlineSlot,
    leftSlotWidth,
    onClick,
  } = props;
  const leftSlotRef = useRef<HTMLDivElement>(null);

  const styles = useMemo(() => {
    return {
      ...commonParams(props),
    };
  }, [props]);

  const classNames = useMemo(() => {
    return classnames([
      'text',
      `text-${size}`,
      theme && `text-${theme}`,
      lineThrough && 'text-line-through',
      link && 'text-link',
      ellipsis && 'text-ellipsis',
      rightSlot && 'text-suffix',
      align && `text-${align}`,
      className,
    ]);
  }, [size, theme, lineThrough, link, ellipsis, rightSlot, align, className]);

  const wrapperClassNames = useMemo(() => {
    return classnames([
      leftSlot && 'text-relative',
      underlineSlot && 'text-wrapper',
      leftSlot && !leftSlotWidth && 'text-display',
    ]);
  }, [leftSlot, underlineSlot, leftSlotWidth]);

  const renderUnderlineSlot = () => {
    return (
      !!underlineSlot && (
        <div className="text-background-color">{underlineSlot}</div>
      )
    );
  };

  const renderLeftSlot = () => {
    return (
      !!leftSlot && (
        <div ref={leftSlotRef} className="text-absoulte">
          {leftSlot}
        </div>
      )
    );
  };

  const renderRightSlot = () => {
    return !!rightSlot && <div style={{ marginLeft: '4rpx' }}>{rightSlot}</div>;
  };

  const renderText = () => {
    return (
      <div className={classNames} style={styles}>
        {children}
      </div>
    );
  };

  return !leftSlot && !underlineSlot ? (
    renderText()
  ) : (
    <div className={wrapperClassNames} onClick={onClick}>
      {renderLeftSlot()}
      {renderUnderlineSlot()}
      {renderText()}
      {renderRightSlot()}
    </div>
  );
};
