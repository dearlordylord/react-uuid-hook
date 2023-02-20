# React UUID hook

A more sophisticated version of https://beta.reactjs.org/reference/react/useId (which is introduced in React 18).

Will generate a unique UUID on the first render, and will not change on subsequent renders.

Provides a Refresh function to regenerate the UUID for this render function.

Made initially for Idempotency Key generation, but could be used to generate keys, although for the case of key generation you'd better use a simpler hook useId provided by React 18.

## Supported React versions

`>=16.8.0`

## Installation

```bash
npm install react-uuid-hook
```

## Usage

```tsx
import useUuid from "react-uuid-hook";

const Component = () => {
  const [uuid] = useUuid();

  return <div>{uuid}</div>;
};
```

## Refresh

```tsx
import useUuid from "react-uuid-hook";

const Component = () => {
  const [uuid, refreshUuid] = useUuid();

  return (
    <div>
      <div>{uuid}</div>
      <button onClick={refreshUuid}>Refresh UUID</button>
    </div>
  );
};
```

## Arguments

The functions exported are useUuidV1, useUuidV3, useUuidV4, useUuidV5. Default export is useUuidV4.

The arguments of each are the same as the [uuid](https://www.npmjs.com/package/uuid) package same generators.

## License

[MIT](./LICENSE)
