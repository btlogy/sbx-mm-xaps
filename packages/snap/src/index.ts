import { OnRpcRequestHandler } from '@metamask/snaps-types';
import { divider, heading, panel, spinner, text } from '@metamask/snaps-ui';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {
  switch (request.method) {
    case 'confirmation':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel([
            heading('Confirmation requested'),
            text(`Do you agree with the end-user policy from **${origin}**?`),
          ]),
        },
      });
    case 'prompt':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'prompt',
          content: panel([
            heading('Welcome back!'),
            text('**The decentralized web awaits**'),
            divider(),
            spinner(),
            text('Password'),
          ]),
        },
      });
    default:
      throw new Error('Method not found.');
  }
};
