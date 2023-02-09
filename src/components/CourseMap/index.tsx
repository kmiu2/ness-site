import { Card, useTheme } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { formattedInitialNodes, formattedInitialEdges } from './helper'

// TODO: add download image button?

function CourseMap() {
  const theme = useTheme()
  const [nodes, , onNodesChange] = useNodesState(formattedInitialNodes())
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    formattedInitialEdges()
  )
  const [toolTip, setToolTip] = useState({
    show: false,
    text: '',
  })

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  // Check which node is selected and change the color
  useEffect(() => {
    const selectedNode = nodes.find((node) => node.selected === true)
    setToolTip({
      show: selectedNode ? true : false,
      text: selectedNode ? selectedNode.data.label : '',
    })
  }, [nodes])

  return (
    <>
      {toolTip.show && (
        <Card
          sx={{
            position: 'absolute',
            top: Number(theme.header.height),
            right: 0,
            zIndex: 100,
            padding: 1,
            margin: 1,
          }}
        >
          {toolTip.text}
        </Card>
      )}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        elementsSelectable={true}
        nodesDraggable={false}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        proOptions={{ hideAttribution: true }}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </>
  )
}

export default CourseMap
