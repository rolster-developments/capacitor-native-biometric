import { WebPlugin } from '@capacitor/core';
import {
  AvailableResult,
  BiometricOptions,
  BiometryType,
  Credentials,
  DeleteCredentialOptions,
  GetCredentialOptions,
  NativeBiometricPlugin,
  SetCredentialOptions
} from './definitions';

export class NativeBiometricWeb extends WebPlugin implements NativeBiometricPlugin {
  public isAvailable(): Promise<AvailableResult> {
    return Promise.resolve({
      biometryType: BiometryType.NONE,
      isAvailable: false
    });
  }

  public verifyIdentity(_?: BiometricOptions): Promise<void> {
    throw new Error('Plugin web NativeBiometric method not implemented.');
  }

  public getCredentials(_: GetCredentialOptions): Promise<Credentials> {
    throw new Error('Plugin web NativeBiometric method not implemented.');
  }

  public setCredentials(_: SetCredentialOptions): Promise<void> {
    throw new Error('Plugin web NativeBiometric method not implemented.');
  }

  public deleteCredentials(_: DeleteCredentialOptions): Promise<void> {
    throw new Error('Plugin web NativeBiometric method not implemented.');
  }
}
