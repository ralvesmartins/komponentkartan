import { Component, HostBinding, Input } from '@angular/core';
import { toggleExpandedState , toggleChevron } from '../../animation';

@Component({
    selector: 'vgr-card-section',
    templateUrl: './cardSection.component.html',
    animations: [ toggleExpandedState, toggleChevron ]
})
export class CardSectionComponent {
    @HostBinding('class.card-section') cardSectionClass = true;
    @Input() @HostBinding('class.card-section--expanded') expanded = false;
    @Input() @HostBinding('class.card-section--readonly') readonly = true;
    @Input() title: string;
    @Input() subtitle: string;
    overflow = false;
    animationSpeed = '.4s ease';

    toggleExpanded(event) {
        if ((event instanceof KeyboardEvent && event.keyCode === 13 || event.keyCode === 32) || (event instanceof MouseEvent)) {
            this.overflow = false;
            setTimeout(() => {
                this.expanded = !this.expanded;
            });
            event.preventDefault();
        }
    }

    constructor() { }

    allowOverflow() {
        this.overflow = true;
    }

}
