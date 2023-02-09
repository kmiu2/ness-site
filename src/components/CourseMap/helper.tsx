import { darken, Theme } from '@mui/material'
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

export function formattedInitialNodes(theme: Theme) {
  // Darken background of later terms
  const termColors = {
    '1A': darken(theme.palette.primary.main, 0.1),
    '1B': darken(theme.palette.primary.main, 0.1),
    '2A': darken(theme.palette.primary.main, 0.15),
    '2B': darken(theme.palette.primary.main, 0.15),
    '3A': darken(theme.palette.primary.main, 0.2),
    '3B': darken(theme.palette.primary.main, 0.2),
    '4A': darken(theme.palette.primary.main, 0.25),
    '4B': darken(theme.palette.primary.main, 0.25),
  }

  const formattedNodes = initialNodes.map((node) => {
    return {
      ...node,
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      selected: false,
      style: {
        background: termColors[node.data.term],
        color: theme.palette.primary.contrastText,
      },
      data: {
        ...node.data,
        label: node.data.code,
      },
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
        strokeWidth: 2,
      },
      style: {
        strokeWidth: 2,
      },
    }
  })
  return formattedEdges
}
