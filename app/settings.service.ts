import { Injectable } from "@angular/core"
import { Settings } from './models/settings';

@Injectable()
export class SettingsService {
	getSettings() {
		return <Settings> {
			backgroundColorOnline: '#58bb89',
			foregroundColorOnline: '#264301',
			blinkOnline: false,
			backgroundColorAway: '#f8dd5d',
			foregroundColorAway: '#ffbb40',
			blinkAway: false,
			backgroundColorBusy: '#db605d',
			foregroundColorBusy: '#750005',
			blinkBusy: false,
			backgroundColorDnd: '#885e9e',
			foregroundColorDnd: '#423151',
			blinkDnd: false,
			backgroundColorUndefined: '#b7b7af',
			foregroundColorUndefined: '#61656e',
			blinkUndefined: false
		}
	}
}