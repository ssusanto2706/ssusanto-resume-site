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
    title: 'C',
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
    title: 'Intellij',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Jetty',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Selenium',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Gson',
    competency: 3,
    category: ['Tools'],
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
  '#f2f6d0',
  "#d0e1d4",
  '#d9d2b6',
  '#e4be9e',
  '#71697a',
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
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
