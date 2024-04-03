import Confirmation from '../components/dialogs/Confirmation.svelte';
import { mount } from 'svelte';

export class DialogUtils {
  static async confirmation(message: string): Promise<DialogResult> {
    let props = $state({ message });
    const dialog = mount(Confirmation, { target: document.body, props: props });

    return DialogResult.OK;
  }
}

export enum DialogResult {
  OK,
  CANCEL
}
