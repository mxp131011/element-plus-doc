const attributes = [
  {
    Name: '`offset`',
    Description: 'offset distance.',
    Type: '^[number]',
    Default: '`0`',
    Required: 'No',
  },
  {
    Name: '`position`',
    Description: 'position of affix.',
    Type: "^[enum]`'top' \\| 'bottom'`",
    Default: "`'top'`",
    Required: 'No',
  },
  {
    Name: '`target`',
    Description: 'target container. (CSS selector)',
    Type: '^[string]',
    Default: '—',
    Required: 'No',
  },
  {
    Name: '`z-index`',
    Description: '`z-index` of affix',
    Type: '^[number]',
    Default: '`100`',
    Required: 'No',
  },
];
