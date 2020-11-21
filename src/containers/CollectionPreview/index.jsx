import React from "react";
import CollectionItem from "components/CollectionItem";
import { CollectionItemPreview, Container, CollectionTitle } from "./styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <Container>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemPreview>
        {items
          .filter((_item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </CollectionItemPreview>
    </Container>
  );
};

export default CollectionPreview;
