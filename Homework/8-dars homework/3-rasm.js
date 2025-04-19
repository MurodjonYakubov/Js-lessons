const ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
  "Rozimisiz?",
  () => alert("Siz rozilik bildirdingiz."),
  () => alert("Ijro bekor qilindi.")
);