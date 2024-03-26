import { Web3Function } from "@gelatonetwork/web3-functions-sdk";
import SafeApiKit from "@safe-global/api-kit";

Web3Function.onRun(async () => {
  const chainId = BigInt(1);
  const txServiceUrl = "https://safe-transaction-mainnet.safe.global/api";
  const apiKit = new SafeApiKit({
    chainId,
    txServiceUrl,
  });

  const resp = await apiKit.getPendingTransactions(
    "0xF89e9cf758EEd6ae41822DEe15945583C121d10e"
  );
  console.log(resp);

  return {
    canExec: false,
    message: "This is just a test",
  };
});
