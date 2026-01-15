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

## Versions

The library exports hooks for all UUID versions:

- **useUuidV4** (default) - Random UUID generation
- **useUuidV5** - Deterministic UUID generation (requires namespace and name)
- useUuidV3 - Deterministic UUID generation with MD5 (requires namespace and name)
- useUuidV1 - Timestamp-based UUID generation

### Arguments

The arguments for each hook match the [uuid](https://www.npmjs.com/package/uuid) package generators:

- v4: No arguments required (random)
- v5: `(name: string, namespace: string | Uint8Array)` - deterministic based on name and namespace
- v3: `(name: string, namespace: string | Uint8Array)` - deterministic with MD5
- v1: Optional node and clockseq arguments

## License

[MIT](./LICENSE)
