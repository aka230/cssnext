---
nav: component
---

# Flex

左右布局

```jsx
import { Flex } from 'cssnext';

export default () => {
  return (
    <Flex height="100px" background="red">
      <Flex height="100%" background="blue"></Flex>
      <Flex height="100%" background="yellow" marginLeft="12px"></Flex>
    </Flex>
  );
};
```

通栏模式

```jsx
import { Flex } from 'cssnext';

export default () => {
  return (
    <Flex height="100px" background="red" columnMode>
      <Flex height="100%" background="blue"></Flex>
      <Flex height="100%" background="yellow" marginLeft="20px"></Flex>
    </Flex>
  );
};
```

卡片模式

```jsx
import { Flex } from 'cssnext';

export default () => {
  return (
    <Flex height="100px" background="red" cardMode direction="column">
      <Flex height="100%" background="blue"></Flex>
      <Flex height="100%" background="yellow" marginTop="20px"></Flex>
    </Flex>
  );
};
```
