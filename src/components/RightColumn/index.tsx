import React from 'react';

import TrendingPanel from './TrendingPanel';

import { Container } from './styles';
import LoadingTredingPanel from '../Shimmer/LoadingTredingPanel';

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTredingPanel />
      ) : (
        <>
          <TrendingPanel />
          <TrendingPanel />
        </>
      )}
    </Container>
  );
};

export default RightColumn;
