import React from "react";

const Requirement = () => (
  <>
    <p>
      The parent is responsible for passing the Array of countries. The child
      should iterate and display the list of countries received. The max no. of
      items listed in the dropdown should be configureable from the parent. Upon
      user selecting the country, the parent should log the selected the
      country.
    </p>

    <h4>
      AC 1 - If the user with Add privilege, then if the location user searching
      is not part of the list, then possible to add
    </h4>
    <h4>
      AC 2 - If user, dont have privilege to Add, dont display the "Add &
      Select" button.
    </h4>
    <h4>
      AC 3 - If user click on "X more...", then the complete list of countries
      would be displayed.
    </h4>
  </>
);

export default React.memo(Requirement);
