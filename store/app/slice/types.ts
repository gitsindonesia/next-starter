export interface IAppSliceState {
	counter: number
}

export enum EAppSliceHandleCounterType {
	INCREASE = 'INCREASE',
	DECREASE = 'DECREASE'
}

export interface IAppSliceHandleCounterAttrs {
	type: EAppSliceHandleCounterType
}
