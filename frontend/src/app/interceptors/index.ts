import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ClassProvider } from "@angular/core";
import { BearerInterceptor } from "@interceptors/bearer/bearer.interceptor";

import { LoadingInterceptor } from "./loading/loading.interceptor";

export const interceptors: ClassProvider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BearerInterceptor,
    multi: true,
  },
];
