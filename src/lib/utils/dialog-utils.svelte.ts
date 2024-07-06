import Message from '../components/dialogs/Message.svelte';
import Confirmation from '../components/dialogs/Confirmation.svelte';
import { mount, unmount } from 'svelte';

export class DialogUtils {
  static async confirmation(mes: string): Promise<DialogResult> {
    return new Promise<DialogResult>((res) => {
      let message = $state(mes);
      console.log(typeof Confirmation);
      const dialog = mount(Confirmation, {
        target: document.body,
        props: {
          message,
          onClose: (result) => {
            res(result);
            unmount(dialog);
          }
        }
      });
    });
  }

  static async message(mes: string): Promise<DialogResult> {
    return new Promise<DialogResult>((res) => {
      let message = $state(mes);
      const dialog = mount(Message, {
        target: document.body,
        props: {
          message,
          onClose: (result) => {
            res(result.detail);
            unmount(dialog);
          }
        }
      });
    });
  }
}

export enum DialogResult {
  OK,
  CANCEL
}
