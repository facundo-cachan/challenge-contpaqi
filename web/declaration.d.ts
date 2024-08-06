import type { ComponentType } from 'react';
import type { RouteObject } from 'react-router-dom';

declare module '@/pages/*' {
  const component: ComponentType;
  export default component;
}

declare module '@/services/*' {
  const component: any;
  export default component;
}

declare module '@/routers/*' {
  const component: RouteObject;
  export default component;
}