---
nav: component
---

# Text

fontSize.

```jsx
import { Text } from 'cssnext';

export default () => {
  return (
    <div>
      <Text size="20">TEXT20</Text>
      <Text size="18">TEXT18</Text>
      <Text size="16">TEXT16</Text>
      <Text size="14">TEXT14</Text>
      <Text size="12">TEXT12</Text>
      <Text size="10">TEXT10</Text>
    </div>
  );
};
```

theme

```jsx
import { Text } from 'cssnext';

export default () => {
  return (
    <div>
      <Text size="14" theme="black86">
        TEXTblack86
      </Text>
      <Text size="14" theme="black60">
        TEXTblack60
      </Text>
      <Text size="14" theme="black40">
        TEXTblack40
      </Text>
      <Text size="14" theme="primary">
        TEXTprimary
      </Text>
      <Text size="14" theme="red">
        TEXTred
      </Text>
      <Text size="14" theme="white" background="red">
        TEXTwhite
      </Text>
    </div>
  );
};
```

desc

```jsx
import { Text } from 'cssnext';

export default () => {
  return (
    <div>
      <Text size="14" theme="black86" lineThrough>
        lineThrough
      </Text>
      <Text
        size="14"
        theme="black86"
        underlineSlot={<div style={{ background: 'red', height: '4px' }}></div>}
      >
        underlineSlot
      </Text>
    </div>
  );
};
```
