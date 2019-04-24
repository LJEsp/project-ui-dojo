import React from "react";
import styled from "styled-components";

import {
  Card,
  Typography,
  Avatar,
  TextArea,
  ButtonIcon,
  MenuButton
} from "../elements";
import { SponsoredItem } from "../blocks";

const StyledCard = styled(Card)`
  padding: var(--size-base);
  box-shadow: ${p => p.theme.shadow[0]};

  .sponsored-list {
    & > *:not(:last-child) {
      margin-bottom: var(--size-m);
    }
  }
`;

const StyledSponsored = styled.div``;

const Sponsored = props => {
  return (
    <StyledSponsored>
      <StyledCard>
        <Typography variant="display-4" margin="stack-m">
          Sponsored
        </Typography>

        <div className="sponsored-list">
          <SponsoredItem
            name="HP Brand Day"
            excerpt="DON'T MISS our 24 hours only sale! Get up to Php 10,000 savings when you purchase HP produ..."
            imageSrc="https://scontent.fmnl3-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/c1.0.294.154a/p296x100/58569104_23843398546570181_2813424164105355264_n.png.jpg?_nc_cat=1&efg=eyJxZV9ncm91cHMiOlsibm9fc2FmZV9pbWFnZV9mb3JfYWRzX2ltYWdlIl19&_nc_ht=scontent.fmnl3-1.fna&oh=99d89e97a00a8a98c22a3bf2238c2a21&oe=5D36060D"
          />

          <SponsoredItem
            name="Promo ng XM sa Pilipinas"
            excerpt="Sumali sa promo ng XM sa pagitan ng Abril 8 - Mayo 8 para manalo ng mga premyo!"
            imageSrc="https://scontent.fmnl3-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/c1.0.294.154a/p296x100/57216904_23843335214590751_8303310078350458880_n.png.jpg?_nc_cat=1&efg=eyJxZV9ncm91cHMiOlsibm9fc2FmZV9pbWFnZV9mb3JfYWRzX2ltYWdlIl19&_nc_ht=scontent.fmnl3-1.fna&oh=4a3eb4878472e845486044545912ec50&oe=5D3DAD89"
          />
        </div>
      </StyledCard>
    </StyledSponsored>
  );
};

export default Sponsored;
