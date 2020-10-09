// eslint-disable-next-line no-restricted-imports
import React, {FC} from 'react';
import {Link as RLink} from 'react-router-dom';
import {Path} from 'routes/type';

type Props = Omit<Parameters<RLink>[0], 'to'> & { to: Path, args?: Array<string | number> }

export const Link: FC<Props> = ({to, args = [], ...props}) =>
  <RLink {...props} to={to.path(...args)}/>
