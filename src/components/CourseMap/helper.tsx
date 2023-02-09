import { initialNodes } from '../../data/CourseList'
import { initialEdges } from '../../data/EdgesList'

// Enum is required because of this issue:
// https://github.com/wbkd/react-flow/issues/2812#issue-1572072668

enum Position {
  Left = 'left',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
}

enum MarkerType {
  Arrow = 'arrow',
  ArrowClosed = 'arrowclosed',
}

export function formattedInitialNodes() {
  const formattedNodes = initialNodes.map((node) => {
    return {
      ...node,
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      selected: false,
    }
  })
  return formattedNodes
}

export function formattedInitialEdges() {
  const formattedEdges = initialEdges.map((edge) => {
    return {
      ...edge,
      type: 'smoothstep',
      markerEnd: {
        type: MarkerType.Arrow,
      },
    }
  })
  return formattedEdges
}
