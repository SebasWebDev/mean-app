import { Directive, ElementRef, Input, Renderer, HostBinding, HostListener } from '@angular/core';

@Directive({ selector: '[open-close-menu]' })
export class OpenCloseMenu {
	@HostListener('click') onClick() {
		let body = document.getElementsByTagName('body')[0],
		menuActions = {
		    close: function() {
		        if (body.className.indexOf('pushmenu-to-right') > -1) {
		            body.className = body.className.replace(' pushmenu-to-right','')
		        }
		    },
		    open: function() {
		        if (body.className.indexOf('pushmenu-to-right') === -1) {
		            body.className = body.className + ' pushmenu-to-right';
		        }
		    },
		    auto: function() {
		        if (body.className.indexOf('pushmenu-to-right') > -1) {
		            this.close();
		        } else {
		            this.open();
		        }
		    }
		}

		menuActions.auto();
	}
}
