const states = ["base", "hover", "active", "disabled"];

const actions = {
  view: "Посмотреть",
  edit: "Редактировать",
  export: "Выгрузить в Excel",
  delete: "Удалить список",
  print: "Распечатать",
  upload: "Загрузить из файла"
};

const icons = {
  view: "arrow",
  edit: "edit",
  export: "export",
  delete: "delete",
  print: "print",
  upload: "upload"
};

const variants = [
  { key: "primary", class: "btn--default" },
  { key: "outlinedRed", class: "btn--default btn--border-red" },
  { key: "danger", class: "btn--red" },
  { key: "arrowButton", class: "btn--default btn--arrow" },
  { key: "green", class: "btn--green" },
  { key: "outlinedGreen", class: "btn--default btn--border-green" }
];

const panelActions = [
  "edit",
  "export",
  "delete",
  "print",
  "upload"
];