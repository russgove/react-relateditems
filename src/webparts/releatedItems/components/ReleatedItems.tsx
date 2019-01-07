import * as React from 'react';
import styles from './ReleatedItems.module.scss';
import { IReleatedItemsProps } from './IReleatedItemsProps';
import { escape } from '@microsoft/sp-lodash-subset';
//import 'microsoft/sp-office-ui-fabric-core/dist/sass/SPFabricCore.scss';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Label } from 'office-ui-fabric-react/lib/Label';
export default class ReleatedItems extends React.Component<IReleatedItemsProps, {}> {
  public render(): React.ReactElement<IReleatedItemsProps> {
    debugger;
    return (
      <div className={styles.releatedItems}>

        <Link href={this.props.url}>
        <Label>
          Related Item :

        </Label>
        {this.props.title}
        </Link>
      </div>
    );
  }
}
