import { Directive, TemplateRef } from "@angular/core";

@Directive({
selector: '[appConditionalDirective]'
})
export class ZippyContentDirective {
    constructor(public templateRef: TemplateRef<unknown>) {}
}