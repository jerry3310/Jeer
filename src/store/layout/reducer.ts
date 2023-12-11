import { LayoutState } from './state'
interface ActionType {
  type: string
  value: boolean
}

// reducer
export const reducer = (state: LayoutState, action: ActionType) => {
  switch (action.type) {
    case 'sidebar':
      return { ...state, sidebar: action.value }
    case 'header':
      return { ...state, header: action.value }
    case 'footer':
      return { ...state, footer: action.value }
    default:
      throw new Error('unexpected action type')
  }
}
