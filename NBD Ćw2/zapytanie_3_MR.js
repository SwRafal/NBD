db.people.mapReduce
(
  function()
  {
    emit(this.job, null);
  },
  function(key, values)
  {
    return;
  },
  { out: "zad3_output"}
);

db.zad3_output.find();