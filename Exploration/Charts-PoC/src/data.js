// Mock data mirroring the values shown in the existing dashboard screenshot.

export const kpis = [
  { label: 'DISCOVERED', value: '5,516' },
  { label: 'NEW TODAY', value: '0' },
  { label: 'CHANGED TODAY', value: '1' }
]

// Discovery cadence line chart
export const cadence = {
  xLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  discovered: [30, 32, 33, 34, 35, 36, 37, 38, 40, 42, 55, 48],
  modified: [12, 20, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13]
}

// Donut charts (CATEGORY, MANAGEMENT STATUS, ITEM TYPE, FILE TYPE)
export const categoryData = [
  { id: 0, value: 62, label: 'Category 1' },
  { id: 1, value: 38, label: 'Category 2' }
]

export const managementStatusData = [
  { id: 0, value: 100, label: 'Discovered' }
]

export const itemTypeData = [
  { id: 0, value: 55, label: 'Document' },
  { id: 1, value: 42, label: 'Email' },
  { id: 2, value: 3, label: 'General' }
]

export const fileTypeData = [
  { id: 0, value: 48, label: 'PDF' },
  { id: 1, value: 30, label: 'DOCX' },
  { id: 2, value: 12, label: 'json' },
  { id: 3, value: 7, label: 'TXT' },
  { id: 4, value: 3, label: 'Other' }
]

// Horizontal bar charts
export const repositoryData = [
  { label: 'Exchange Online', value: 2846 },
  { label: 'SharePoint Online', value: 2225 },
  { label: 'OneDrive for Business', value: 341 },
  { label: 'Teams', value: 98 },
  { label: 'EncompaaS', value: 6 }
]

export const departmentData = [
  { label: 'Finance', value: 2769 },
  { label: 'Marketing', value: 1144 },
  { label: 'Testing', value: 40 }
]

export const connectionData = [
  { label: 'Microsoft 365', value: 5508 },
  { label: 'EncompaaS', value: 8 }
]

// Information size vertical bar chart
export const informationSizeData = {
  buckets: ['0 - 150 KB', '151 - 512 KB', '513 KB - 1 MB', '1 - 2 MB', '2 - 5 MB', '5 - 10 MB', '10+ MB'],
  values: [4550, 620, 150, 210, 180, 120, 160]
}

// Left sidebar repository tree
export const repositories = [
  { name: 'All Repositories', total: 5516, root: true },
  { name: 'Exchange', total: 2846 },
  { name: 'OneDrive for Business', total: 341 },
  { name: 'SharePoint Online', total: 2225 },
  { name: 'Teams', total: 98 }
]
