// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Programming Languanges'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Programming Languanges'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Languanges'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Programming Languanges'],
  },
  {
    title: 'MatLab',
    competency: 4,
    category: ['Programming Languanges'],
  },
  {
    title: 'C#',
    competency: 2,
    category: ['Programming Languanges'],
  },
  {
    title: 'Vim',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Android Studio',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Jupyter Notebook',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Eclipse',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Bash/Unix Shell',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'IntelliJ IDEA',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'VS Code',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Jetty',
    competency: 4,
    category: ['Java'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Selenium',
    competency: 4,
    category: ['Java'],
  },
  {
    title: 'Gson',
    competency: 3,
    category: ['Java'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Python'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Tensorflow',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Pylint',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Spoken Languanges'],
  },
  {
    title: 'Indonesian',
    competency: 5,
    category: ['Spoken Languanges'],
  },
  {
    title: 'Mandarin Chinese',
    competency: 4,
    category: ['Spoken Languanges'],
  },
  {
    title: 'Japanese',
    competency: 3,
    category: ['Spoken Languanges'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#173f5f',
  '#20639b',
  '#3caea3',
  '#f6d55c',
  '#ed553b',
  '#6781a6',
  '#76da9e',
  '#82d8e9',
  '#bdd7d8',
  '#ffffff',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
