import { Injectable } from "@angular/core"
import { SkypeUser, SkypeState } from './models/skypeUser';

@Injectable()
export class SkypeService {
	getUsers() {
		return [
			<SkypeUser>{ loginName: 'daniel.lindemann@itacs.de', fullName: 'Daniel Lindemann', status: SkypeState.Online, statusMessage: '<(^_^<)   <(^_^)>   (>^_^)>'},
			<SkypeUser>{ loginName: 'ronny.enzenberg@itacs.de', fullName: 'Ronny Enzenberg', status: SkypeState.Busy, statusMessage: 'Abc'},
			<SkypeUser>{ loginName: 'martin.schulze@itacs.de', fullName: 'Martin Schulze', status: SkypeState.Away, statusMessage: 'Def'},
			<SkypeUser>{ loginName: 'fabian.prinz@itacs.de', fullName: 'Fabian Prinz', status: SkypeState.Dnd, statusMessage: 'Ghi'},
			<SkypeUser>{ loginName: 'dennis.dresselt@itacs.de', fullName: 'Dennis Dreßelt', status: SkypeState.Undefined, statusMessage: 'Jkl'}
		];
	}
}