import { HttpInterceptorFn } from '@angular/common/http';

export const tokeninterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
