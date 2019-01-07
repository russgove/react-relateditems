import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'DfdemoCommandSetStrings';
import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IDfdemoCommandSetProperties {
  // This is an example; replace with your own properties
  sampleTextOne: string;
  sampleTextTwo: string;
}

const LOG_SOURCE: string = 'DfdemoCommandSet';

export default class DfdemoCommandSet extends BaseListViewCommandSet<IDfdemoCommandSetProperties> {
  private ordersClient: AadHttpClient;
  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized DfdemoCommandSet');
    this.ordersClient = new AadHttpClient(this.context.serviceScope, 'c7757973-049b-40d5-ba00-82b6ac576a47');


    return Promise.resolve();
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
    const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    if (compareOneCommand) {
      // This command should be hidden unless exactly one row is selected.
      compareOneCommand.visible = event.selectedRows.length === 1;
    }
  }

  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'COMMAND_1':
      this.ordersClient
      .get('https://functionapp20180516060220durabledemo.azurewebsites.net/api/Function1?code=uwkMqro6LQ/UMpQtloRn5ep4vwNtqIuicyLN8IhkhLnJIbwYg9HdXg==', AadHttpClient.configurations.v1)
      .then((res: HttpClientResponse): Promise<any> => {
        debugger;
        return res.json();
      })

        Dialog.alert(`${this.properties.sampleTextOne}`);
        break;
      case 'COMMAND_2':
        Dialog.alert(`${this.properties.sampleTextTwo}`);
        break;
      default:
        throw new Error('Unknown command');
    }
  }
}
