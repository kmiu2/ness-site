interface Course {
  id: string
  position: { x: number; y: number }
  data: {
    code: string
    term: '1A' | '1B' | '2A' | '2B' | '3A' | '3B' | '4A' | '4B'
    name: string
    desc: string
  }
}

export const initialNodes: Course[] = [
  // 1A
  {
    id: 'NE 109',
    position: { x: 0, y: 0 },
    data: {
      code: 'NE 109',
      term: '1A',
      name: 'Societal and Environmental Impacts of Nanotechnology',
      desc: 'An introduction to the field of nanotechnology and its ability to impact society and affect sustainability. How utilization of nanotechnology has simultaneously improved societal standards of living and introduced new ethical, health, and environmental concerns will be examined. Topics covered will include: the history of changing perceptions of and attention devoted to developments in nanotechnology; special health and environmental concerns associated with nanomaterials; the development and means of implementation of regulations to deal with the use of nanomaterials; ethical issues associated with nanotechnology and its applications. Intellectual property issues in general, and those pertaining to nanotechnology specifically, will also be discussed briefly. Relevant case studies will be presented and discussed. [Offered: F]',
    },
  },
  // {
  //   id: 'MATH 117',
  //   position: { x: 0, y: 100 },
  //   data: { code: 'MATH 117', term: '1A' },
  // },
  // {
  //   id: 'NE 111',
  //   position: { x: 0, y: 200 },
  //   data: { code: 'NE 111', term: '1A' },
  // },
  // {
  //   id: 'NE 112',
  //   position: { x: 0, y: 300 },
  //   data: { code: 'NE 112', term: '1A' },
  // },
  // {
  //   id: 'NE 100',
  //   position: { x: 0, y: 400 },
  //   data: { code: 'NE 100', term: '1A' },
  // },
  // {
  //   id: 'NE 121',
  //   position: { x: 0, y: 500 },
  //   data: { code: 'NE 121', term: '1A' },
  // },
  // // 1B
  // {
  //   id: 'NE 102',
  //   position: { x: 200, y: 0 },
  //   data: { code: 'NE 102', term: '1B' },
  // },
  // // 2A
  // {
  //   id: 'NE 201',
  //   position: { x: 400, y: 0 },
  //   data: { code: 'NE 201', term: '2A' },
  // },
  // // 2B
  // {
  //   id: 'NE 202',
  //   position: { x: 600, y: 0 },
  //   data: { code: 'NE 202', term: '2B' },
  // },
  // // 3A
  // {
  //   id: 'NE 301',
  //   position: { x: 800, y: 0 },
  //   data: { code: 'NE 301', term: '3A' },
  // },
  // // 3B
  // {
  //   id: 'NE 307',
  //   position: { x: 1000, y: 0 },
  //   data: { code: 'NE 307', term: '3B' },
  // },
  // // 4A
  // {
  //   id: 'NE 408',
  //   position: { x: 1200, y: 0 },
  //   data: { code: 'NE 408', term: '4A' },
  // },
  // // 4B
  // {
  //   id: 'NE 409',
  //   position: { x: 1400, y: 0 },
  //   data: { code: 'NE 409', term: '4B' },
  // },
]
