import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { module } from './angularJSApp';
import { UpgradeModule } from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';

@Component({ template: `` })
export class EmptyComponent { }

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    UpgradeModule,
    RouterModule.forChild([
      { path: 'angularJS', component: EmptyComponent }
    ])
  ]
})
export class AngularJSModule {
  constructor(upgrade: UpgradeModule) {
    upgrade.bootstrap(document.body, [module.name]);
    setUpLocationSync(upgrade);
  }
}
