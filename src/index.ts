import { v1, v3, v4, v5 } from 'uuid'
import { useCallback, useState } from 'react';

const generators = {
  v1, v3, v4, v5
} as const;

type Version = keyof typeof generators;

type GeneratorArgs<V extends Version> = Parameters<typeof generators[V]>;

const DEFAULT_VERSION = 'v4' as const;
type DefaultVersion = typeof DEFAULT_VERSION;
const useUuid = <V extends Version = DefaultVersion>(version: V | DefaultVersion = DEFAULT_VERSION) => {
  const generator = generators[version];
  // TODO better typing
  const generate = (args: GeneratorArgs<V>) => (generator as any)(...args) as string;
  return (...args: GeneratorArgs<V>) => {
    const [uuid, setUuid] = useState(generate(args));
    const refresh = useCallback(() => {
      setUuid(generate(args));
    }, args);
    return [uuid, refresh] as const
  }
};

export const useUuidV1 = useUuid('v1');
export const useUuidV3 = useUuid('v3');
export const useUuidV4 = useUuid('v4');
export const useUuidV5 = useUuid('v5');

export default useUuidV4;
