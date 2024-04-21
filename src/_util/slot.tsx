import React from 'react';

const slotKeys = [
  'leftSlot',
  'rightSlot',
  'topSlot',
  'bottomSlot',
  'centerSlot',
  'topLeftSlot',
  'topRightSlot',
  'bottomLeftSlot',
  'bottomRightSlot',
  'leftTopSlot',
  'leftBottomSlot',
  'rightTopSlot',
  'rightBottomSlot',
];

export const getPlacementSlots = (props: any) => {
  const list: any[] = [];
  for (const key of slotKeys) {
    if (props[key]) {
      list.push({
        className: `placement-${key.toLowerCase().replace('slot', '')}`,
        slot: props[key],
      });
    }
  }
  return list;
};

/** 初始化插槽 */
export const initSlotDiv = (props: any) => {
  const slots = getPlacementSlots(props);
  console.log(slots);
  return slots.map((item, index) => (
    <div key={index} className={`placement-slot ${item.className}`}>
      {item.slot}
    </div>
  ));
};
