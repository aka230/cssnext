---
nav: component
---

# Image

This is an example component.

```jsx
import { Image } from 'cssnext';

export default () => {
  return (
    <Image
      src="https://img2.baidu.com/it/u=2705505985,4057151433&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
      widthFix
      originWidth="800"
      originHeight="500"
    />
  );
};
```

slot

```jsx
import { Image, Text } from 'cssnext';

export default () => {
  return (
    <Image
      src="https://img2.baidu.com/it/u=2705505985,4057151433&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
      widthFix
      originWidth="800"
      originHeight="500"
      topRightSlot={
        <Text background="#fff" marginRight="12px" marginTop="12px">
          topRight
        </Text>
      }
      topLeftSlot={
        <Text background="#fff" marginLeft="12px" marginTop="12px">
          topLeft
        </Text>
      }
      bottomLeftSlot={
        <Text background="#fff" marginLeft="12px" marginBottom="12px">
          bottomLeft
        </Text>
      }
      bottomRightSlot={
        <Text background="#fff" marginRight="12px" marginBottom="12px">
          bottomRight
        </Text>
      }
      centerSlot={
        <Text background="#fff" marginRight="12px" marginTop="12px">
          center
        </Text>
      }
    />
  );
};
```
