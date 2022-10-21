import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Directive({
  selector: '[featureFlags]'
})
export class FeatureFlagsDirective implements OnInit {
  @Input() featureFlags: string | string[];
  @Input() featureFlagsOr: string | string[];
  @Input() featureFlagsElse: TemplateRef<any>;

  constructor(
    private tplRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
    private user: UserService,
  ) { }

  ngOnInit() {
    if (this.user.hasFlags(this.featureFlags) || this.user.hasFlags(this.featureFlagsOr)) {
      this.vcRef.createEmbeddedView(this.tplRef);
    } else {
      this.vcRef.clear();
      if(this.featureFlagsElse){
        this.vcRef.createEmbeddedView(this.featureFlagsElse);
      }
    }
  }
}