import { IModuleProps } from 'cssnext/_common/props';
import { commonParams } from 'cssnext/_util/params';
import React, { useMemo } from 'react';
import './index.scss';

interface IProps extends IModuleProps {
  children?: React.ReactNode;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | string;
  alignItems?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'stretch'
    | string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  cardMode?: boolean;
  columnMode?: boolean;
}

export default (props: IProps) => {
  const {
    children,
    justifyContent,
    alignItems,
    columnMode,
    cardMode,
    direction,
  } = props;

  const styles = useMemo(() => {
    return {
      justifyContent,
      alignItems,
      flexDirection: direction,
      ...commonParams(props),
      ...(columnMode ? { padding: '20px' } : {}),
      ...(cardMode ? { padding: '20px', borderRadius: '12px' } : {}),
    };
  }, [props]);

  return (
    <div className="flex" style={styles}>
      {children}
    </div>
  );
};
