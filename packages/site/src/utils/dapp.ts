/**
 * Get the user's accounts per EIP-1102.
 *
 * @returns The account id string(s) available in MetaMask.
 */
export const getAccounts = async (): Promise<string[] | []> => {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });

  // Honor our promise and retrun only an Array
  if (accounts instanceof Array) {
    return accounts;
  }
  return [];
};
