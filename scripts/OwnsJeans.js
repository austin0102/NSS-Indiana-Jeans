import { setOwnsBlueJeans } from "./TransientState.js";

export const ownsJeansFunc = () => {
  document.addEventListener("change", handleOwnershipChange);

  let html = `<h2>Do you own Jeans</h2>`;
  html += `<input type="radio" name="OwnsJeans" value="true" />Yes`;
  html += `<input type="radio" name="OwnsJeans" value="false" />No`;
  return html;
};

/*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
const handleOwnershipChange = (changeEvent) => {
  if (changeEvent.target.name === "OwnsJeans") {
    const convertedToBoolean = JSON.parse(changeEvent.target.value);
    setOwnsBlueJeans(convertedToBoolean);
  }
};
