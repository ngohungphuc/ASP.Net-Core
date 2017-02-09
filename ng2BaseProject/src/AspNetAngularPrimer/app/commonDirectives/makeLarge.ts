import { Directive, ElementRef, Renderer } from "@angular/core";
@Directive({
    selector: "[makeLarge]",
    host: {
        "(mouseenter)": "makeLarger()",
        "(mouseleave)": "makeNormal()"
    },
    inputs: ["makeLarge"]
})
export class MakeLarge {
    makeLarge: string;
    constructor(private element: ElementRef, private renderer: Renderer) {
    }
    makeLarger(): void {
        this.renderer.setElementStyle(this.element.nativeElement, "font-size", "200%");
        this.renderer.setElementStyle(this.element.nativeElement, "color", (this.makeLarge || "blue"));
    }
    makeNormal(): void {
        this.renderer.setElementStyle(this.element.nativeElement, "font-size", "100%");
        this.renderer.setElementStyle(this.element.nativeElement, "color", undefined);
    }
}