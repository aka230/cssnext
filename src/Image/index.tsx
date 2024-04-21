import classnames from 'classnames';
import { IModuleProps } from 'cssnext/_common/props';
import { commonParams } from 'cssnext/_util/params';
import { initSlotDiv } from 'cssnext/_util/slot';
import React, { useEffect, useMemo, useRef } from 'react';
import './style/index.scss';

interface IProps extends IModuleProps {
  /** 图片地址 */
  src?: string;
  /** 图片占满，等比例缩放 */
  widthFix?: boolean;
  /** 图片原始宽度 */
  originWidth?: string;
  /** 图片原始高度 */
  originHeight?: string;
  /** 填充模式 */
  objectFit?:
    | 'contain'
    | 'cover'
    | 'fill'
    | 'none'
    | 'scale-down'
    | 'unset'
    | 'initial'
    | 'inherit'
    | 'revert';
}

export default (props: IProps) => {
  const {
    src,
    widthFix,
    originWidth,
    originHeight,
    className,
    height,
    objectFit,
  } = props;
  const imgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((!originWidth && !originHeight && !imgContainerRef.current) || height) {
      return;
    }
    const imgWidth = imgContainerRef.current?.offsetWidth || 0;
    const tmpHeight = imgWidth * (Number(originHeight) / Number(originWidth));
    // 设置高度
    imgContainerRef.current!.style.height = `${tmpHeight}px`;
  }, []);

  const styles = useMemo(() => {
    return {
      ...commonParams(props),
    };
  }, [props]);

  const classNames = useMemo(() => {
    return classnames(['image', widthFix && 'image-width-fix', className]);
  }, [className]);

  return (
    <div ref={imgContainerRef} className={classNames} style={styles}>
      <img src={src} style={{ objectFit }}></img>
      {initSlotDiv(props)}
    </div>
  );
};
