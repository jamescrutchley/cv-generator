import React, { Component } from "react";
import ListItem from "./generic/listItem";

class List extends Component {
  render() {
    const {
      allData,
      section,
      currentlyEditing,
      handleUnitRemoval,
      handleUnitEdit,
    } = this.props;

    return (
      <div className="list">
        <h4>Your {section}:</h4>
        {allData.map(
          (
            item,
            index
          ) => (
            <ListItem
              key={index}
              data={item}
              currentlyEditing={currentlyEditing}
              methods={{
                edit: handleUnitEdit,
                remove: handleUnitRemoval,
              }}
            />
          )
        )}
      </div>
    );
  }
}

export default List;
