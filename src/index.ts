import { registerPlugin } from '@capacitor/core';
import type { NativeBiometricPlugin } from './definitions';

const NativeBiometric = registerPlugin<NativeBiometricPlugin>('NativeBiometric', {
  web: () =>
    import('./web').then(({ NativeBiometricWeb }) => new NativeBiometricWeb())
});

export * from './definitions';
export { NativeBiometric };
