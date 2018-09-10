import React from 'react';

import Heading from './typography/Heading';
import SubHeading from './typography/SubHeading';
import ModelSchematic from './ModelSchematic';

const SectionHeading = ({ heading, subheading, entities }) => {
  return (
    <React.Fragment>
      <hr />
      <Heading>{heading}</Heading>
      <SubHeading>{subheading}</SubHeading>
      <ModelSchematic entities={entities} />
    </React.Fragment>
  );
};

export default SectionHeading;
