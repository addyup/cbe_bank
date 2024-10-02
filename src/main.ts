import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    ...(environment.production ? [] : [AkitaNgDevtools]) // Only include DevTools in non-production environments
  ]
}
)
  .catch((err) => console.error(err));
