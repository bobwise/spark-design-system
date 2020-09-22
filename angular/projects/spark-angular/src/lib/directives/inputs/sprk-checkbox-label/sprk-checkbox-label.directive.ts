import { Directive, HostBinding, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprkCheckboxLabel]',
})
export class SprkCheckboxLabelDirective {
  constructor(public ref: ElementRef) {}

  /**
   * This will be used to determine the variant of
   * the checkbox label.
   */
  @Input()
  variant: 'huge' | undefined;

  /**
   * This will be used to add disabled styles to the
   * label.
   */
  @Input() isDisabled: boolean;

  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * element. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;

  /**
   * Assigned to the `data-analytics` attribute
   * serving as a unique selector for outside
   * libraries to capture data.
   */
  @Input()
  analyticsString: string;

  @HostBinding('attr.data-id')
  get idStr() {
    return this.idString;
  }
  @HostBinding('class.sprk-b-Label') selectClass = true;
  @HostBinding('class.sprk-b-Checkbox__label') checkboxClass = true;
  @HostBinding('class.sprk-b-Checkbox__label--huge')
  get variantStr() {
    return this.variant === 'huge';
  }
  @HostBinding('class.sprk-b-Label--disabled')
  get disabled() {
    return this.isDisabled;
  }
  @HostBinding('attr.data-analytics')
  get analyticsStr() {
    return this.analyticsString;
  }
}
