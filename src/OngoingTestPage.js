// OngoingTestPage.js

import React from 'react';
import OngoingExamCard from './OngoingExamCard';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

const OngoingTestPage = () => {
  return (
    <PageContainer>
      <h1>Ongoing Test</h1>
      <OngoingExamCard />
      {/* Add additional content for ongoing test page here */}
    </PageContainer>
  );
};

export default OngoingTestPage;
