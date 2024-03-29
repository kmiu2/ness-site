import { darken, Theme } from '@mui/material'
import { initialCourses } from '../../data/CourseList'
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

type TermType = '1A' | '1B' | '2A' | '2B' | '3A' | '3B' | '4A' | '4B'

export const formattedInitialNodes = (theme: Theme) => {
  const initialNodes = initialCourses

  // Darken background of later terms
  const termColors: Record<TermType, string> = {
    '1A': darken(theme.palette.primary.main, 0.1),
    '1B': darken(theme.palette.primary.main, 0.1),
    '2A': darken(theme.palette.primary.main, 0.15),
    '2B': darken(theme.palette.primary.main, 0.15),
    '3A': darken(theme.palette.primary.main, 0.2),
    '3B': darken(theme.palette.primary.main, 0.2),
    '4A': darken(theme.palette.primary.main, 0.25),
    '4B': darken(theme.palette.primary.main, 0.25),
  }

  // Format nodes for react-flow
  const formattedNodes = initialNodes.map((course) => {
    return {
      id: course.course_code,
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      selected: false,
      style: {
        background: termColors[course.term as TermType],
        color: theme.palette.primary.contrastText,
      },
      data: {
        ...course,
        label: course.course_code,
        isHeader: false,
      },
      position: {
        x: course.x,
        y: course.y,
      },
    }
  })

  // Add in headers for each term
  const terms: TermType[] = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B']
  terms.forEach((term, i) => {
    formattedNodes.push({
      id: term,
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      selected: false,
      style: {
        background: darken(theme.palette.primary.main, 0.75),
        color: theme.palette.primary.dark,
      },
      data: {
        label: term,
        isHeader: true,
        course_code: term,
        course_name: '',
        course_desc: '',
        course_prereq: '',
        term: '',
        x: 0,
        y: 0,
      },
      position: {
        x: 0 + i * 200,
        y: -100,
      },
    })
  })
  return formattedNodes
}

export const formattedInitialEdges = () => {
  // Get random color for each edge
  const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  const formattedEdges = initialEdges.map((edge) => {
    const color = generateColor()
    return {
      ...edge,
      type: 'smoothstep',
      markerEnd: {
        type: MarkerType.Arrow,
        strokeWidth: 2,
        color,
      },
      style: {
        strokeWidth: 2,
        stroke: color,
      },
    }
  })
  return formattedEdges
}
