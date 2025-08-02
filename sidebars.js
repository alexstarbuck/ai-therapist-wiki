const sidebars = {
  sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'INDEX', // Will show "INDEX" in the sidebar
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        '01-ai-therapist-general-description',
        '02-ai-therapist-differentiation',
        '03-ai-therapist-competition',
        '04-ai-therapist-components-vendors',
        '05-ai-therapist-funding',
      ],
    },
    {
      type: 'category',
      label: 'Definitions',
      items: [
        'definitions-dhaf-safety-rating',
        'definitions-hipaa-compliance',
        'definitions-irb-review',
      ],
    },
  ],
};

export default sidebars;
