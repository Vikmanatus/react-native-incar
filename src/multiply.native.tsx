import { NitroModules } from 'react-native-nitro-modules';
import type { Incar } from './Incar.nitro';

const IncarHybridObject = NitroModules.createHybridObject<Incar>('Incar');

export function multiply(a: number, b: number): number {
  console.log('multiply', a, b);
  return IncarHybridObject.multiply(a, b);
}
