import { Card, CardContent, Typography, useTheme } from '@mui/material'
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
  const [nodes, , onNodesChange] = useNodesState(formattedInitialNodes(theme))
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    formattedInitialEdges()
  )
  const [infoCard, setInfoCard] = useState({
    show: false,
    code: '',
    name: '',
    desc: '',
  })

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  // Check which node is selected and change the color
  useEffect(() => {
    const selectedNode = nodes.find((node) => node.selected === true)
    setInfoCard({
      show: selectedNode ? true : false,
      code: selectedNode ? selectedNode.data.code : '',
      name: selectedNode ? selectedNode.data.name : '',
      desc: selectedNode ? selectedNode.data.desc : '',
    })
  }, [nodes])

  return (
    <>
      {infoCard.show && (
        <Card
          sx={{
            position: 'absolute',
            top: Number(theme.header.height),
            right: 0,
            zIndex: 100,
            padding: 1,
            margin: 1,
            maxWidth: {
              xs: '100%',
              lg: '50%',
            },
            background: theme.colors.info.dark,
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {infoCard.code}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {infoCard.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {infoCard.desc}
            </Typography>
          </CardContent>
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
