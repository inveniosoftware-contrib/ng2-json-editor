import { SafeHtml } from '@angular/platform-browser';

export interface ModalOptions {
  title: string;
  bodyHtml: SafeHtml;
  type: string;
  onConfirm?: () => void;
  onShow?: () => void;
}
