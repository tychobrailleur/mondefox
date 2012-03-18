var data = require("self").data;
var pageMod = require("page-mod");
pageMod.PageMod({
  include: "*.lemonde.fr",
  contentScriptWhen: 'end',
  contentScriptFile: data.url("cleanup.js")
});
