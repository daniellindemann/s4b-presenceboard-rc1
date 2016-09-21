import { Component, OnInit } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { AppSettingsComponent } from './settings.component';
import { SkypeService } from './skype.service';
import { SettingsService } from './settings.service';
import { Settings } from './models/settings';
import { SkypeUser, SkypeState } from './models/skypeUser';

@Component({
	selector: 'app',
	template: `
		<app-settings [settings]='settings' [users]='users'></app-settings>
		<div class="outer no-maxWith no-padding no-margin">
			<div class="line userContainer">
				<div *ngFor="let user of users" class="column stateContainer" [ngClass]="{'blink':stateShouldBlink(user.status)}" [ngStyle]="{'background-color': getBackgroundColor(user.status), 'width': (100 / users.length) + '%'}">
					<div class="state">
						<img src="./images/dl03.jpg" alt="{{user.fullName}}" class="state-border" [ngStyle]="{'border-color': getBorderColor(user.status)}" (click)="window.alert(user.fullName)" />
						<span class="name">{{user.fullName}}</span>
						<span>{{getStatusText(user.status)}}</span>
					</div>
					<blockquote *ngIf="user.statusMessage"><p>{{user.statusMessage}}</p></blockquote>
				</div>
			</div>
		</div>`,
	directives: [NgStyle, NgClass, AppSettingsComponent],
	providers: [SkypeService, SettingsService]
})
export class AppComponent implements OnInit {
	
	constructor(private skypeService: SkypeService, private settingsService: SettingsService) {
	}
	
	ngOnInit() {
		this.users = this.skypeService.getUsers();
		this.settings = this.settingsService.getSettings();
	}
	
	users: SkypeUser[];
	settings: Settings;
	
	getStatusText = function(state: SkypeState): string {
		switch (state) {
			case SkypeState.Online:
				return 'Online';
			case SkypeState.Busy:
				return 'Busy';
			case SkypeState.Away:
				return 'Away';
			case SkypeState.Dnd:
				return 'Do not disturb';
			default:
				return 'Undefined';		
		}
	}
	
	getBackgroundColor = function(state: SkypeState): string {
		switch (state) {
			case SkypeState.Online:
				return this.settings.backgroundColorOnline;
			case SkypeState.Busy:
				return this.settings.backgroundColorBusy;
			case SkypeState.Away:
				return this.settings.backgroundColorAway;
			case SkypeState.Dnd:
				return this.settings.backgroundColorDnd
			default:
				return this.settings.backgroundColorUndefined;	
		}
	}
	
	getBorderColor = function(state: SkypeState): string {
		switch (state) {
			case SkypeState.Online:
				return this.settings.foregroundColorOnline;
			case SkypeState.Busy:
				return this.settings.foregroundColorBusy;
			case SkypeState.Away:
				return this.settings.foregroundColorAway;
			case SkypeState.Dnd:
				return this.settings.foregroundColorDnd
			default:
				return this.settings.foregroundColorUndefined;	
		}
	}
	
	stateShouldBlink = function(state: SkypeState): boolean {
		switch (state) {
			case SkypeState.Online:
				return this.settings.blinkOnline;
			case SkypeState.Busy:
				return this.settings.blinkBusy;
			case SkypeState.Away:
				return this.settings.blinkAway;
			case SkypeState.Dnd:
				return this.settings.blinkDnd;
			default:
				return this.settings.blinkUndefined;	
		}
	}
}

