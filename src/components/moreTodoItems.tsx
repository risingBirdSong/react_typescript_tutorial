interface moreToItemsI {
  task: string;
  done: boolean;
}

const moreToDoItems: moreToItemsI[] = [
  { task: "HTML I", done: true },
  { task: "CSS", done: true },
  { task: "Responsive design", done: true },
  { task: "Git", done: true },
  { task: "JavaScript I", done: true },
  { task: "JavaScript II", done: false }
];

export { moreToDoItems as moreToItems, moreToItemsI };
