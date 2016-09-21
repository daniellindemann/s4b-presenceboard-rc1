import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
	selector: 'color-settings-form',
	directives: [NgStyle],
	template: `
		<form>
			<fieldset class="form-group">
				<label [attr.for]="'backgroundColor' + id + 'Input'">{{backgroundColorLabel}}</label>
				<input type="text" class="form-control" [id]="'backgroundColor' + id + 'Input'" [placeholder]="backgroundDefaultColor" [(ngModel)]="backgroundColor" (keyup)="backgroundHasChanged($event)" [ngStyle]="{'background-color': backgroundColor}"/>
			</fieldset>
			<fieldset class="form-group">
				<label [attr.for]="'foregroundColor' + id + 'Input'">{{foregroundColorLabel}}</label>
				<input type="text" class="form-control" [id]="'foregroundColor' + id + 'Input'" [placeholder]="foregroundDefaultColor" [(ngModel)]="foregroundColor" (keyup)="foregroundColorHasChanged($event)" [ngStyle]="{'background-color': foregroundColor}"/>
			</fieldset>
			<fieldset class="form-group">
				<div class="checkbox">
					<label>
						<input type="checkbox" [(ngModel)]="blink" (change)="blinkHasChanged($event)"/>
						{{blinkLabel}}
					</label>
				</div>
			</fieldset>
		</form>`
})
export class ColorSettingsFormComponent {
	// TODO: IDs
	@Input()
	id:string;

	@Input()
	backgroundColorLabel:string;
	@Input()
	backgroundDefaultColor:string;
	@Input()
	backgroundColor:string;
	@Output()
	backgroundColorChanged:EventEmitter<string> = new EventEmitter();

	@Input()
	foregroundColorLabel:string;
	@Input()
	foregroundDefaultColor:string;
	@Input()
	foregroundColor:string;
	@Output()
	foregroundColorChanged:EventEmitter<string> = new EventEmitter();

	@Input()
	blinkLabel:string;
	@Input()
	blink:boolean;
	@Output()
	blinkChanged:EventEmitter<boolean> = new EventEmitter();

	backgroundHasChanged(evnt) {
		this.backgroundColorChanged.emit(this.backgroundColor);
	}

	foregroundColorHasChanged(evnt) {
		this.foregroundColorChanged.emit(this.foregroundColor);
	}

	blinkHasChanged(evnt) {
		this.blinkChanged.emit(this.blink);
	}
}