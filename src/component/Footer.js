import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import React from "react";

import styled from 'styled-components';

const Footer = () => {
    return (
        <Box className="bg-info">
            <h6 className="align-middle text-light">ⒸCopyright 2021. Little Star. Atrina Salsabil Nengkoda</h6>
        </Box>
    );
};

export const Box = styled.div`
  padding: 20px 20px;
  position: relative;
  bottom: 0;
  width: 100%;   
  @media (max-width: 1000px) {
    padding: 10px 10px;
  }
`;
export default Footer;