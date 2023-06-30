/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

export const getAccounts = async (): Promise<Array<string> | []> => {
    const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });

  // Honor our promise and retrun only an Array 
  if (accounts instanceof Array) {
    return accounts;
  } else {
    return [];
  }
};
