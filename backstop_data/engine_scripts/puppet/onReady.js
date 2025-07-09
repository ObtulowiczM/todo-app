module.exports = async (page, scenario, vp) => {
  console.log("SCENARIO > " + scenario.label);
  await require("./clickAndHoverHelper")(page, scenario);

  await page.type(".add-task input", "sprzątanie");

  await page.click(".add-task button");

  await page.waitForSelector(".task-list li");
};
