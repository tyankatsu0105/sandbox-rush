const NAME = 'my-toolchain' as const;

export const sayName = () => console.log(NAME);

import * as C from '@tyankatsu0105/my-controls';
C.sayName();
