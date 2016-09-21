import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ColorSettingsFormComponent } from './colorSettingsForm.Component';
import { Settings } from './models/settings';
import { SkypeUser } from './models/skypeUser';

@Component({
	selector: 'app-settings',
	directives: [NgStyle, ColorSettingsFormComponent],
	template: `
		<div class="settingsContainer" data-toggle="modal" data-target=".open-modal-settings">
			<a href="#">
				<i class="material-icons">settings</i>
			</a>
		</div>
		<div class="modal fade open-modal-settings" id="settingsModal" tabindex="-1" role="dialog" aria-labelledby="settingsModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="settingsModalLabel">Settings</h4>
				</div>
				<div class="modal-body">
					<ul class="nav nav-tabs" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" data-toggle="tab" href="#userselection" role="tab">User selection</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#colors" role="tab">Colors</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#authentication" role="tab">Authentication</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="userselection" role="tabpanel">
							<div *ngFor="let user of users">
								<span>{{user.fullName}}</span>
							</div>
						</div>
						<div class="tab-pane" id="colors" role="tabpanel">
							<h2>Online</h2>
							<color-settings-form [id]="'Online'"
								[backgroundColorLabel]="'Background color online'"
								[backgroundColor]="settings.backgroundColorOnline"
								[backgroundDefaultColor]="'#58bb89'"
								(backgroundColorChanged)="settings.backgroundColorOnline=$event"
								[foregroundColorLabel]="'Foreground color online'"
								[foregroundColor]="settings.foregroundColorOnline"
								[foregroundDefaultColor]="'#264301'"
								(foregroundColorChanged)="settings.foregroundColorOnline=$event"
								[blinkLabel]="'Blink online'"
								[blink]="settings.blinkOnline"
								(blinkChanged)="settings.blinkOnline=$event">
							</color-settings-form>
							<h2>Away</h2>
							<color-settings-form [id]="'Away'"
								[backgroundColorLabel]="'Background color away'"
								[backgroundColor]="settings.backgroundColorAway"
								[backgroundDefaultColor]="'#f8dd5d'"
								(backgroundColorChanged)="settings.backgroundColorAway=$event"
								[foregroundColorLabel]="'Foreground color away'"
								[foregroundColor]="settings.foregroundColorAway"
								[foregroundDefaultColor]="'#ffbb40'"
								(foregroundColorChanged)="settings.foregroundColorAway=$event"
								[blinkLabel]="'Blink away'"
								[blink]="settings.blinkAway"
								(blinkChanged)="settings.blinkAway=$event">
							</color-settings-form>
							<h2>Busy</h2>
							<color-settings-form [id]="'Busy'"
								[backgroundColorLabel]="'Background color busy'"
								[backgroundColor]="settings.backgroundColorBusy"
								[backgroundDefaultColor]="'#db605d'"
								(backgroundColorChanged)="settings.backgroundColorBusy=$event"
								[foregroundColorLabel]="'Foreground color busy'"
								[foregroundColor]="settings.foregroundColorBusy"
								[foregroundDefaultColor]="'#750005'"
								(foregroundColorChanged)="settings.foregroundColorBusy=$event"
								[blinkLabel]="'Blink busy'"
								[blink]="settings.blinkBusy"
								(blinkChanged)="settings.blinkBusy=$event">
							</color-settings-form>
							<h2>Do not disturb</h2>
							<color-settings-form [id]="'Dnd'"
								[backgroundColorLabel]="'Background color do not disturb'"
								[backgroundColor]="settings.backgroundColorDnd"
								[backgroundDefaultColor]="'#885e9e'"
								(backgroundColorChanged)="settings.backgroundColorDnd=$event"
								[foregroundColorLabel]="'Foreground color do not disturb'"
								[foregroundColor]="settings.foregroundColorDnd"
								[foregroundDefaultColor]="'#423151'"
								(foregroundColorChanged)="settings.foregroundColorDnd=$event"
								[blinkLabel]="'Blink do not disturb'"
								[blink]="settings.blinkDnd"
								(blinkChanged)="settings.blinkDnd=$event">
							</color-settings-form>
							<h2>Undefined</h2>
							<color-settings-form [id]="'Undefined'"
								[backgroundColorLabel]="'Background color undefined'"
								[backgroundColor]="settings.backgroundColorUndefined"
								[backgroundDefaultColor]="'#b7b7af'"
								(backgroundColorChanged)="settings.backgroundColorUndefined=$event"
								[foregroundColorLabel]="'Foreground color undefined'"
								[foregroundColor]="settings.foregroundColorUndefined"
								[foregroundDefaultColor]="'#61656e'"
								(foregroundColorChanged)="settings.foregroundColorUndefined=$event"
								[blinkLabel]="'Blink undefined'"
								[blink]="settings.blinkUndefined"
								(blinkChanged)="settings.blinkUndefined=$event">
							</color-settings-form>
						</div>
						<div class="tab-pane" id="authentication" role="tabpanel">auth</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary" (click)="save()">Save changes</button>
				</div>
				</div>
			</div>
		</div>`
})
export class AppSettingsComponent {

	@Input()
	settings: Settings;

	@Input()
	users: SkypeUser[];

	save(event) {
		alert('save');
	}
}