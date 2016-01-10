var shamyDataExample01 = [
  {"name":"NL.P1","size":3938,"imports":["Compute.T1","Compute.T2"]},
  {"name":"PT.P2","size":3812,"imports":["Compute.T1"]},
  {"name":"NL.P3","size":6714,"imports":["Compute.T3"]},
  {"name":"SP.P4","size":743,"imports":[]},
  {"name":"Compute.T1","size":743,"imports":["Compute.T3"]},
  {"name":"Compute.T2","size":743,"imports":["Compute.T3","Compute.T1"]},
  {"name":"Compute.T3","size":743,"imports":[]}
];

var shamyDataExample02 = [
  {"name":"NL.P1","size":3938,"imports":[{"A":"Compute.T1"},{"R":"Compute.T2"}]},
  {"name":"PT.P2","size":3812,"imports":[{"C":"Compute.T1"}]},
  {"name":"NL.P3","size":6714,"imports":[{"I":"Compute.T3"}]},
  {"name":"SP.P4","size":743,"imports":[]},
  {"name":"Compute.T1","size":743,"imports":[{"D":"Compute.T3"}]},
  {"name":"Compute.T2","size":743,"imports":[{"D":"Compute.T3"},{"B":"Compute.T1"}]},
  {"name":"Compute.T3","size":743,"imports":[]}
];

