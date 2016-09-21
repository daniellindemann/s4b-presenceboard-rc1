export class SkypeUser {
	loginName: string;
	fullName: string;
	status: SkypeState;
	statusMessage: string	
}

export enum SkypeState {
	Online,
	Away,
	Busy,
	Dnd,
	Undefined
}