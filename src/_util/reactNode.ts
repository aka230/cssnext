import React from 'react';

export const isNode = (node: React.ReactNode) => {
  return node ? React.isValidElement(node) : false;
};
