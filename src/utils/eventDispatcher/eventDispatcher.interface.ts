export const EEventType = {
  UPDATE_DIMENSION: 'UPDATE_DIMENSION'
}

export type EventType = keyof typeof EEventType

export type DimType = 'xs' | 'sm' | 'md' | 'hd' | 'lg' | 'xl' | 'xxl'

export interface Dimension {
  type: DimType
  size: number
}

export interface UpdateDimensionEvent {
  dim: Dimension
}

export interface Events {
  ['UPDATE_DIMENSION']: UpdateDimensionEvent
}
