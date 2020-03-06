import React, { Fragment } from 'react';
import { makeStyles, Divider, Theme, Typography } from '@material-ui/core';

import { uiThemeGeneral } from '../../../styles/theme/ui-theme';
import { RouteItem } from '../../../shared/models/routes.model';
import { appRouteConfig } from '../../../shared/constants';

import { HomeIntroMenu } from './HomeIntroMenu';

const useStyles = makeStyles((theme: Theme) => {
  const { divider } = uiThemeGeneral(theme);
  return {
    divider,
  };
});

interface HomeIntroProps {}

export function HomeIntro({}: HomeIntroProps) {
  const classes = useStyles();
  const features: RouteItem[] = [
    appRouteConfig.accounts,
    appRouteConfig.transactions,
    appRouteConfig.cards,
  ];
  return (
    <Fragment>
      <Typography align="center" gutterBottom={true}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis pariatur,
        libero culpa, dignissimos dolorem tenetur fugiat at itaque blanditiis fugit maxime
        voluptates inventore exercitationem. Voluptatum, sint. Quidem iusto amet
        perspiciatis!
      </Typography>
      <Divider className={classes.divider} />
      <HomeIntroMenu features={features} />
    </Fragment>
  );
}
