import mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';

mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    darkMode: false,
    background:          '#FFFFFF',
    primaryColor:        '#EBEEFF',
    primaryTextColor:    '#1C1B18',
    primaryBorderColor:  '#3D5AFE',
    lineColor:           '#8C897D',
    secondaryColor:      '#F2F1ED',
    tertiaryColor:       '#F2F1ED',
    fontFamily:          'JetBrains Mono, monospace',
    fontSize:            '13px',
    nodeBorder:          '#D2CFC4',
    clusterBkg:          '#F2F1ED',
    clusterBorder:       '#E5E3DC',
    edgeLabelBackground: '#FFFFFF',
    mainBkg:             '#F2F1ED',
    nodeTextColor:       '#1C1B18'
  },
  flowchart: { curve: 'basis', padding: 16 },
  sequence:  { actorMargin: 50, messageMargin: 35 }
});
