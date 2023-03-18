import {
  Alert,
  Card,
  CardContent,
  Collapse,
  Typography,
  useTheme,
} from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { formattedInitialNodes, formattedInitialEdges } from './helper'

export const CourseMap = () => {
  const theme = useTheme()
  const [isAlertOpen, setIsAlertOpen] = useState(true)
  const [nodes, , onNodesChange] = useNodesState(formattedInitialNodes(theme))
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    formattedInitialEdges()
  )
  const [infoCard, setInfoCard] = useState({
    show: false,
    isHeader: false,
    code: '',
    name: '',
    desc: '',
    prereq: '',
  })

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const handleCloseAlert = () => {
    setIsAlertOpen(false)
  }

  useEffect(() => {
    const selectedNode = nodes.find((node) => node.selected === true)
    setInfoCard({
      show: selectedNode ? true : false,
      isHeader: selectedNode ? selectedNode.data.isHeader : false,
      code: selectedNode ? selectedNode.data.course_code : '',
      name: selectedNode ? selectedNode.data.course_name : '',
      desc: selectedNode ? selectedNode.data.course_desc : '',
      prereq: selectedNode ? selectedNode.data.course_prereq : '',
    })
  }, [nodes])

  return (
    <>
      <Collapse in={isAlertOpen}>
        <Alert
          severity="info"
          sx={{
            position: 'absolute',
            top: Number(theme.header.height),
            left: 0,
            zIndex: 100,
            padding: 1,
            margin: 1,
            background: theme.colors.info.dark,
            color: theme.palette.primary.main,
          }}
          onClose={handleCloseAlert}
        >
          Click on a course to view more information. Use the bottom left
          controls to change the view.
        </Alert>
      </Collapse>
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
            {infoCard.isHeader ? (
              <Typography variant="h4">{infoCard.code}</Typography>
            ) : (
              <>
                <Typography variant="h4" gutterBottom>
                  {infoCard.code}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {infoCard.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {infoCard.desc}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {infoCard.prereq}
                </Typography>
              </>
            )}
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
        <Panel
          position="top-left"
          style={{
            padding: 5,
            borderRadius: 5,
            background: theme.colors.gradients.blue2,
            color: theme.colors.alpha.white[100],
          }}
        >
          NE Course Map ('22 - '23)
        </Panel>
        <Controls />
        <Background />
      </ReactFlow>
    </>
  )
}
